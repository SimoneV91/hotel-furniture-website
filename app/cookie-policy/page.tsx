import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">Cookie Policy</h1>
              <p className="text-lg text-sage-700">
                Informazioni sull&apos;uso dei cookie e su come gestire le preferenze.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm border border-sage-100 p-6 sm:p-8 space-y-6 text-sage-800">
              <p className="text-sm text-sage-600">
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
              </p>

              <div>
                <h2 className="text-2xl font-bold text-sage-900 mb-2">Cosa sono i cookie</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente,
                  dove vengono memorizzati per poi essere ritrasmessi agli stessi siti alla visita successiva.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-sage-900 mb-2">Tipologie di cookie</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Cookie necessari</strong>: indispensabili per il funzionamento del sito e non possono
                    essere disattivati.
                  </li>
                  <li>
                    <strong>Cookie analitici</strong>: ci aiutano a capire come gli utenti interagiscono con il sito
                    (es. statistiche aggregate).
                  </li>
                  <li>
                    <strong>Cookie marketing</strong>: utilizzati per personalizzazione e contenuti/servizi di terze parti.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-sage-900 mb-2">Gestione delle preferenze</h2>
                <p>
                  Puoi accettare o rifiutare i cookie non essenziali dal banner iniziale. In qualsiasi momento puoi
                  aggiornare le preferenze cancellando i dati di navigazione del browser (incluso il localStorage) e
                  ricaricando la pagina, così da rivedere il banner e scegliere nuovamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-sage-900 mb-2">Contatti</h2>
                <p>
                  Per informazioni su questa Cookie Policy o sul trattamento dei dati, puoi contattarci dalla pagina Contatti.
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

