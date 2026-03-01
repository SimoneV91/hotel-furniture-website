'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Contact page - Contact information and contact form
 */
export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    citta: '',
    telefono: '',
    email: '',
    motivo: '',
    messaggio: '',
    consenso: false,
    website: '' // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
    // Rimuovi l'errore quando l'utente inizia a digitare
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Il nome e cognome sono obbligatori';
    }

    if (!formData.citta.trim()) {
      newErrors.citta = 'La città è obbligatoria';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email è obbligatoria';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci un\'email valida';
    }

    if (!formData.motivo) {
      newErrors.motivo = 'Seleziona un motivo di contatto';
    }

    if (!formData.consenso) {
      newErrors.consenso = 'È necessario accettare i termini e condizioni e la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.nome,
          email: formData.email,
          message: formData.messaggio,
          citta: formData.citta,
          telefono: formData.telefono,
          motivo: formData.motivo,
          website: formData.website, // Honeypot
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Errore parsing risposta JSON:', jsonError);
        setErrors({ submit: 'Errore nella risposta del server. Riprova più tardi.' });
        setIsSubmitting(false);
        return;
      }

      if (!response.ok) {
        // Gestione errori
        console.error('Errore API:', response.status, data);
        if (response.status === 400) {
          const errorMsg = data.error || 'Dati non validi. Controlla i campi inseriti.';
          setErrors({ submit: errorMsg });
        } else if (response.status === 429) {
          setErrors({ submit: 'Troppe richieste. Riprova tra qualche minuto.' });
        } else {
          const errorMsg = data.error || 'Errore durante l\'invio del messaggio. Riprova più tardi.';
          // In sviluppo mostra anche i dettagli
          if (process.env.NODE_ENV === 'development' && data.details) {
            console.error('Dettagli errore:', data.details);
          }
          setErrors({ submit: errorMsg });
        }
        setIsSubmitting(false);
        return;
      }

      // Successo
      setSubmitSuccess(true);
      setFormData({
        nome: '',
        citta: '',
        telefono: '',
        email: '',
        motivo: '',
        messaggio: '',
        consenso: false,
        website: ''
      });
      
      // Reset del messaggio di successo dopo 5 secondi
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Errore invio form:', error);
      setErrors({ submit: 'Errore di connessione. Verifica la tua connessione internet e riprova.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                Contatti
              </h1>
              <p className="text-lg text-sage-700">
                Siamo qui per aiutarti. Contattaci per qualsiasi informazione o richiesta.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto">
            {/* Informazioni di Contatto - In riga */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-sage-900 mb-8 text-center">
                Informazioni di Contatto
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-900 mb-2">Indirizzo</h3>
                  <p className="text-sage-700">
                    Via dell'Esempio, 123<br />
                    00100 Roma, Italia
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-900 mb-2">Telefono</h3>
                  <p className="text-sage-700">
                    <a href="tel:+39000000000" className="hover:text-sage-900 transition-colors">
                      +39 000 000 0000
                    </a>
                  </p>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-sage-900 mb-2">Email</h3>
                  <p className="text-sage-700">
                    <a href="mailto:info@mobiliperalbergo.it" className="hover:text-sage-900 transition-colors">
                      info@mobiliperalbergo.it
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form Contatti */}
            <div id="contact-form" className="max-w-3xl mx-auto scroll-mt-24">
                <h2 className="text-3xl font-bold text-sage-900 mb-8">
                  Invia un Messaggio
                </h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-sage-200 border border-sage-300 rounded-lg text-sage-900">
                    <p className="font-medium">Messaggio inviato con successo!</p>
                    <p className="text-sm mt-1">Ti risponderemo il prima possibile.</p>
                  </div>
                )}

                {errors.submit && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg text-red-900">
                    <p className="font-medium">{errors.submit}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nome e Cognome */}
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-sage-900 mb-2">
                      Nome e Cognome <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
                        errors.nome ? 'border-red-500' : 'border-sage-300'
                      }`}
                      placeholder="Mario Rossi"
                    />
                    {errors.nome && (
                      <p className="mt-1 text-sm text-red-600">{errors.nome}</p>
                    )}
                  </div>

                  {/* Città */}
                  <div>
                    <label htmlFor="citta" className="block text-sm font-medium text-sage-900 mb-2">
                      Città <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="citta"
                      name="citta"
                      value={formData.citta}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
                        errors.citta ? 'border-red-500' : 'border-sage-300'
                      }`}
                      placeholder="Roma"
                    />
                    {errors.citta && (
                      <p className="mt-1 text-sm text-red-600">{errors.citta}</p>
                    )}
                  </div>

                  {/* Telefono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-sage-900 mb-2">
                      Numero di Telefono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-sage-900 mb-2">
                      Indirizzo Email <span className="text-sage-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-sage-300'
                      }`}
                      placeholder="mario.rossi@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Motivo */}
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-medium text-sage-900 mb-2">
                      Motivo del Contatto <span className="text-sage-600">*</span>
                    </label>
                    <select
                      id="motivo"
                      name="motivo"
                      value={formData.motivo}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent bg-white ${
                        errors.motivo ? 'border-red-500' : 'border-sage-300'
                      }`}
                    >
                      <option value="">Seleziona un motivo</option>
                      <option value="5-stelle">Hotel 5 Stelle</option>
                      <option value="4-stelle">Hotel 4 Stelle</option>
                      <option value="3-stelle">Hotel 3 Stelle</option>
                      <option value="2-stelle">Hotel 2 Stelle</option>
                      <option value="beb">B&B</option>
                      <option value="generale">Informazioni di carattere generale</option>
                    </select>
                    {errors.motivo && (
                      <p className="mt-1 text-sm text-red-600">{errors.motivo}</p>
                    )}
                  </div>

                  {/* Messaggio */}
                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-sage-900 mb-2">
                      Messaggio
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent resize-vertical"
                      placeholder="Scrivi qui il tuo messaggio..."
                    />
                  </div>

                  {/* Honeypot field - nascosto agli utenti */}
                  <div style={{ display: 'none' }} aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Consenso Privacy */}
                  <div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="consenso"
                        name="consenso"
                        checked={formData.consenso}
                        onChange={handleChange}
                        className={`mt-1 h-4 w-4 text-sage-900 border-sage-300 rounded focus:ring-sage-500 ${
                          errors.consenso ? 'border-red-500' : ''
                        }`}
                      />
                      <label htmlFor="consenso" className="ml-3 text-sm text-sage-700">
                        Ho letto e accetto i{' '}
                        <Link href="/termini-e-condizioni" className="text-sage-900 font-semibold hover:text-sage-700 underline">
                          termini e condizioni
                        </Link>
                        {' '}e la{' '}
                        <Link href="/privacy-policy" className="text-sage-900 font-semibold hover:text-sage-700 underline">
                          privacy policy
                        </Link>
                        . <span className="text-sage-600">*</span>
                      </label>
                    </div>
                    {errors.consenso && (
                      <p className="mt-1 text-sm text-red-600">{errors.consenso}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-sage-900 text-white px-8 py-4 rounded-lg hover:bg-sage-800 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </button>
                </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
