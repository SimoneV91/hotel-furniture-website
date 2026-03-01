import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * Terms and Conditions page - Terms of service and conditions of use
 */
export default function TerminiECondizioniPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                Termini e Condizioni
              </h1>
              <p className="text-lg text-sage-700">
                Condizioni generali di utilizzo del sito e dei servizi
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
              
              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                1. Informazioni Generali
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il presente sito web è di proprietà e gestito da <strong className="text-sage-900">Mobili per Albergo</strong> 
                (di seguito "Azienda"), con sede in Via dell'Esempio, 123 - 00100 Roma, Italia. 
                L'accesso e l'utilizzo del presente sito web implicano l'accettazione dei seguenti termini e condizioni.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                2. Oggetto
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il sito web ha lo scopo di fornire informazioni sui servizi di arredamento contract per strutture ricettive 
                offerti dall'Azienda, consentire la richiesta di preventivi e consulenze, e presentare i progetti realizzati.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                3. Utilizzo del Sito
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                L'utente si impegna a utilizzare il sito in conformità alla legge e alle presenti condizioni, 
                nonché a non utilizzare il sito per:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Scopi illegali o non autorizzati</li>
                <li>Trasmettere virus, malware o codici dannosi</li>
                <li>Violare diritti di proprietà intellettuale</li>
                <li>Raccogliere dati personali di altri utenti senza autorizzazione</li>
                <li>Interferire con il funzionamento del sito</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                4. Proprietà Intellettuale
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Tutti i contenuti del sito, inclusi testi, immagini, loghi, grafiche, design e software, sono di proprietà 
                dell'Azienda o dei suoi licenzianti e sono protetti dalle leggi sul diritto d'autore e sulla proprietà intellettuale. 
                È vietata la riproduzione, distribuzione o utilizzo non autorizzato di qualsiasi contenuto del sito senza il previo 
                consenso scritto dell'Azienda.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                5. Richieste di Preventivo e Consulenza
              </h2>
              <p className="text-sage-700 mb-4 leading-relaxed">
                Le richieste di preventivo e consulenza tramite il form di contatto:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Non costituiscono un'offerta vincolante da parte dell'Azienda</li>
                <li>Richiedono la verifica della disponibilità e fattibilità del progetto</li>
                <li>Saranno valutate e risposte nel più breve tempo possibile</li>
                <li>Possono essere soggette a condizioni specifiche da concordare</li>
                <li>Richiedono l'accettazione dei presenti termini e condizioni</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                6. Prezzi e Condizioni Commerciali
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                I prezzi indicati sul sito sono puramente indicativi e possono variare in base a:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Caratteristiche specifiche del progetto</li>
                <li>Quantità e tipologia di arredi richiesti</li>
                <li>Materiali e finiture selezionate</li>
                <li>Condizioni di pagamento e tempi di consegna</li>
                <li>Variazioni dei costi delle materie prime</li>
              </ul>
              <p className="text-sage-700 mb-6 leading-relaxed">
                I prezzi definitivi saranno comunicati in fase di preventivo dettagliato e saranno validi per il periodo indicato.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                7. Limitazione di Responsabilità
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                L'Azienda si impegna a fornire informazioni accurate e aggiornate sul sito, tuttavia:
              </p>
              <ul className="list-disc list-inside text-sage-700 mb-6 space-y-2">
                <li>Non garantisce l'assoluta accuratezza, completezza o attualità delle informazioni</li>
                <li>Non è responsabile per errori, omissioni o imprecisioni nei contenuti</li>
                <li>Non è responsabile per danni derivanti dall'utilizzo o dall'impossibilità di utilizzare il sito</li>
                <li>Non garantisce la disponibilità continua e ininterrotta del sito</li>
                <li>Non è responsabile per contenuti di siti web di terze parti collegati</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                8. Link a Siti Esterni
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Il sito può contenere link a siti web di terze parti. L'Azienda non ha controllo su tali siti e non si assume 
                alcuna responsabilità per i contenuti, le politiche sulla privacy o le pratiche di tali siti esterni. 
                Si consiglia di leggere i termini e condizioni e le privacy policy di qualsiasi sito esterno visitato.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                9. Modifiche ai Termini
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                L'Azienda si riserva il diritto di modificare i presenti termini e condizioni in qualsiasi momento. 
                Le modifiche saranno pubblicate su questa pagina. 
                L'utilizzo continuato del sito dopo la pubblicazione delle modifiche implica l'accettazione dei nuovi termini.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                10. Legge Applicabile e Foro Competente
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                I presenti termini e condizioni sono disciplinati dalla legge italiana. Per qualsiasi controversia derivante 
                dall'utilizzo del sito o dall'interpretazione dei presenti termini, sarà competente il foro di Roma.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                11. Contatti
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Per qualsiasi domanda o chiarimento relativo ai presenti termini e condizioni, è possibile contattare l'Azienda:
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

              <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                12. Disposizioni Finali
              </h2>
              <p className="text-sage-700 mb-6 leading-relaxed">
                Se una qualsiasi disposizione dei presenti termini e condizioni dovesse essere ritenuta invalida o inapplicabile, 
                tale invalidità non pregiudicherà la validità delle restanti disposizioni, che rimarranno pienamente efficaci.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
