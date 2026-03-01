import { Resend } from 'resend';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Rate limiter in-memory
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minuti

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }

  record.count++;
  return true;
}

// Schema di validazione Zod
const contactSchema = z.object({
  name: z.string().min(1, 'Il nome è obbligatorio').max(200, 'Il nome è troppo lungo'),
  email: z.string().email('Email non valida').max(200, 'Email troppo lunga'),
  message: z.string().min(1, 'Il messaggio è obbligatorio').max(5000, 'Il messaggio è troppo lungo'),
  citta: z.string().optional(),
  telefono: z.string().optional(),
  motivo: z.string().optional(),
  website: z.string().optional(), // Honeypot field
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Troppe richieste. Riprova tra qualche minuto.' },
        { status: 429 }
      );
    }

    // Parse body
    let body;
    try {
      body = await request.json();
      console.log('Body ricevuto:', { ...body, message: body.message ? `${body.message.substring(0, 50)}...` : 'vuoto' });
    } catch (parseError) {
      console.error('Errore parsing JSON:', parseError);
      return NextResponse.json(
        { error: 'Formato dati non valido' },
        { status: 400 }
      );
    }

    // Honeypot check - se il campo website è valorizzato, è probabilmente un bot
    if (body.website && body.website.trim() !== '') {
      console.log('Honeypot triggered:', body.website);
      return NextResponse.json(
        { error: 'Richiesta non valida' },
        { status: 400 }
      );
    }

    // Validazione con Zod
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Dati non validi', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { name, email, message, citta, telefono, motivo } = validationResult.data;

    // Verifica che message esista (dovrebbe essere sempre presente dopo validazione)
    if (!message || message.trim() === '') {
      return NextResponse.json(
        { error: 'Il messaggio è obbligatorio' },
        { status: 400 }
      );
    }

    // Verifica variabili d'ambiente
    const resendApiKey = process.env.RESEND_API_KEY;
    const companyEmail = process.env.COMPANY_EMAIL;

    if (!resendApiKey || !companyEmail) {
      console.error('Variabili d\'ambiente mancanti:', {
        hasResendKey: !!resendApiKey,
        hasCompanyEmail: !!companyEmail,
        envKeys: Object.keys(process.env).filter(k => k.includes('RESEND') || k.includes('COMPANY'))
      });
      return NextResponse.json(
        { error: 'Errore di configurazione del server' },
        { status: 500 }
      );
    }

    // Inizializza Resend
    const resend = new Resend(resendApiKey);

    // Prepara il contenuto email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #3A4A2F; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #3A4A2F; }
            .value { margin-top: 5px; padding: 10px; background-color: white; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nuova Richiesta di Contatto</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Nome e Cognome:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${email}</div>
              </div>
              ${citta ? `
              <div class="field">
                <div class="label">Città:</div>
                <div class="value">${citta}</div>
              </div>
              ` : ''}
              ${telefono ? `
              <div class="field">
                <div class="label">Telefono:</div>
                <div class="value">${telefono}</div>
              </div>
              ` : ''}
              ${motivo ? `
              <div class="field">
                <div class="label">Motivo del Contatto:</div>
                <div class="value">${motivo}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Messaggio:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Invia email
    // Nota: In modalità test di Resend, puoi inviare solo al tuo indirizzo email registrato
    // Per produzione, verifica un dominio su resend.com/domains
    const { data, error } = await resend.emails.send({
      from: 'Mobili per Albergo <onboarding@resend.dev>', // In produzione: usa un indirizzo del tuo dominio verificato
      to: [companyEmail],
      replyTo: email,
      subject: `Nuova richiesta di contatto da ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Errore invio email Resend:', JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: 'Errore durante l\'invio dell\'email', details: process.env.NODE_ENV === 'development' ? error : undefined },
        { status: 500 }
      );
    }

    console.log('Email inviata con successo:', data);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Errore API contact:', error);
    const errorMessage = error instanceof Error ? error.message : 'Errore sconosciuto';
    return NextResponse.json(
      { 
        error: 'Errore interno del server',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

// Blocca tutti gli altri metodi HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Metodo non consentito' },
    { status: 405 }
  );
}
