import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Privacy Policy page - Privacy policy and data protection information
 */
export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-sage-700">
                Informativa sulla privacy e protezione dei dati personali
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                1. Titolare del Trattamento
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il titolare del trattamento dei dati personali è <strong className="text-sage-900">Mobili per Albergo</strong> 
                (di seguito "Titolare" o "Azienda"), con sede in Via dell'Esempio, 123 - 00100 Roma, Italia. 
                Email: info@mobiliperalbergo.it - Tel: +39 000 000 0000.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                2. Dati Raccolti
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                I dati personali che raccogliamo includono:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Nome e cognome</li>
                <li>Indirizzo email</li>
                <li>Numero di telefono</li>
                <li>Città di residenza</li>
                <li>Informazioni relative alle richieste di preventivo o consulenza</li>
                <li>Dati di navigazione e cookie (come specificato nella cookie policy)</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                3. Finalità del Trattamento
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                I dati personali vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Rispondere alle richieste di informazioni e preventivi</li>
                <li>Fornire consulenza e supporto commerciale</li>
                <li>Gestire i rapporti contrattuali e commerciali</li>
                <li>Inviare comunicazioni relative ai servizi offerti (previo consenso)</li>
                <li>Adempiere agli obblighi di legge e fiscali</li>
                <li>Migliorare i servizi offerti e l'esperienza utente</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                4. Base Giuridica del Trattamento
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il trattamento dei dati personali si basa su:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Consenso dell'interessato (per marketing e newsletter)</li>
                <li>Esecuzione di un contratto o di misure precontrattuali</li>
                <li>Adempimento di obblighi di legge</li>
                <li>Legittimo interesse del titolare (per miglioramento servizi e sicurezza)</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                5. Conservazione dei Dati
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                I dati personali vengono conservati per il tempo necessario alle finalità per cui sono stati raccolti 
                e, in ogni caso, non oltre i termini previsti dalla legge. I dati relativi a contratti commerciali 
                vengono conservati per 10 anni dalla conclusione del rapporto contrattuale, come previsto dalla normativa fiscale.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                6. Comunicazione e Diffusione dei Dati
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                I dati personali possono essere comunicati a:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Dipendenti e collaboratori autorizzati del Titolare</li>
                <li>Fornitori di servizi tecnici (hosting, email, CRM) che operano come responsabili del trattamento</li>
                <li>Consulenti professionali (commercialisti, avvocati) per adempimenti legali</li>
                <li>Autorità competenti quando richiesto dalla legge</li>
              </ul>
              <p className="text-sage-700 mb-6 leading-relaxed">
                I dati non saranno mai diffusi o venduti a terzi per finalità commerciali.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                7. Diritti dell'Interessato
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                Ai sensi del Regolamento UE 2016/679 (GDPR), l'interessato ha diritto di:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Ottenere la rettifica dei dati inesatti o incompleti</li>
                <li>Richiedere la cancellazione dei dati (diritto all'oblio)</li>
                <li>Opporsi al trattamento dei dati per finalità di marketing diretto</li>
                <li>Richiedere la limitazione del trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali</li>
              </ul>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Per esercitare i propri diritti, l'interessato può contattare il Titolare all'indirizzo email: 
                <a href="mailto:info@mobiliperalbergo.it" className="text-sage-900 font-semibold hover:text-sage-700 underline ml-1">
                  info@mobiliperalbergo.it
                </a>
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                8. Sicurezza dei Dati
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il Titolare adotta misure tecniche e organizzative appropriate per proteggere i dati personali da 
                accesso non autorizzato, perdita, distruzione o alterazione. Tuttavia, nessun sistema di trasmissione 
                via internet è completamente sicuro e non possiamo garantire la sicurezza assoluta dei dati.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                9. Cookie
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il sito utilizza cookie tecnici necessari per il funzionamento del sito. Per maggiori informazioni 
                sulla gestione dei cookie, consulta la nostra Cookie Policy.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                10. Modifiche alla Privacy Policy
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il Titolare si riserva il diritto di modificare questa privacy policy in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina.
                Si consiglia di consultare periodicamente questa pagina per essere informati sulle eventuali modifiche.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                11. Contatti
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Per qualsiasi domanda o richiesta relativa alla privacy policy o al trattamento dei dati personali, 
                è possibile contattare il Titolare:
              </p>
              <div className="bg-sage-50 border border-sage-200 rounded-lg p-6 mb-6">
                <p className="text-sage-700 mb-2">
                  <strong className="text-sage-900">Email:</strong>{' '}
                  <a href="mailto:info@mobiliperalbergo.it" className="text-sage-900 font-semibold hover:text-sage-700 underline">
                    info@mobiliperalbergo.it
                  </a>
                </p>
                <p className="text-sage-700 mb-2">
                  <strong className="text-sage-900">Telefono:</strong>{' '}
                  <a href="tel:+39000000000" className="text-sage-900 font-semibold hover:text-sage-700">
                    +39 000 000 0000
                  </a>
                </p>
                <p className="text-sage-700">
                  <strong className="text-sage-900">Indirizzo:</strong> Via dell'Esempio, 123 - 00100 Roma, Italia
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
