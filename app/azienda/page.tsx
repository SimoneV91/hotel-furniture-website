import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

/**
 * Azienda page - Company information page
 */
export default function AziendaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                La Nostra Azienda
              </h1>
              <p className="text-lg text-sage-700">
                Esperti nell'arredamento contract per l'hospitality, con passione per il design e attenzione ai dettagli.
              </p>
            </div>
          </div>
        </section>

        {/* Storia Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
                  La Nostra Storia
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                  Con oltre <strong className="text-sage-900">20 anni di esperienza</strong> nel settore dell'arredamento contract, 
                  ci siamo specializzati nella progettazione e realizzazione di soluzioni su misura per hotel, 
                  alberghi e strutture ricettive di ogni categoria.
                </p>
                <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                  La nostra azienda nasce dalla passione per il design e dalla convinzione che ogni spazio 
                  ricettivo debba essere unico, accogliente e funzionale. Partendo da una piccola realtà artigianale, 
                  abbiamo cresciuto la nostra competenza lavorando con strutture di prestigio in tutta Italia, 
                  sviluppando un know-how che ci permette di affrontare progetti di qualsiasi dimensione e complessità.
                </p>
                <p className="text-lg text-sage-700 leading-relaxed">
                  Oggi siamo un punto di riferimento nel settore dell'hospitality, riconosciuti per la qualità 
                  dei materiali, l'attenzione ai dettagli e la capacità di interpretare le esigenze di ogni cliente, 
                  trasformandole in ambienti che raccontano una storia e creano esperienze memorabili per gli ospiti.
                </p>

                {/* Founder Story Highlight */}
                <div className="mt-10 bg-sage-50 border border-sage-200 rounded-lg p-6 sm:p-8 not-prose">
                  <h3 className="text-xl sm:text-2xl font-bold text-sage-900 mb-3">
                    Una storia che parte dalla fabbrica
                  </h3>
                  <p className="text-sage-700 leading-relaxed mb-4">
                    Salve, mi chiamo <strong className="text-sage-900">Leonardo Bergamin</strong>. Sono nato nella fabbrica di mobili di mio padre.
                    Nel <strong className="text-sage-900">'86</strong> ho arredato il mio primo hotel, l'<strong className="text-sage-900">Hotel Alla Scoa</strong> di Castelfranco Veneto:
                    da allora ho arredato circa <strong className="text-sage-900">700 hotel</strong> in <strong className="text-sage-900">40 anni</strong>.
                  </p>
                  <p className="text-sage-700 leading-relaxed mb-4">
                    Oggi possiamo contare su una <strong className="text-sage-900">produzione tecnologica</strong> con un team di <strong className="text-sage-900">44 operai</strong>,
                    con sede a <strong className="text-sage-900">Pieve di Soligo</strong> (Via Suoi), in grado di soddisfare esigenze che vanno dai <strong className="text-sage-900">B&amp;B</strong> agli hotel
                    (come quelli elencati nelle nostre <strong className="text-sage-900">referenze</strong>).
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-white border border-sage-200 text-sage-900 rounded-full px-3 py-1 text-sm font-medium">
                      <span className="inline-block w-2 h-2 rounded-full bg-sage-600" />
                      Primo hotel arredato: 1986
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white border border-sage-200 text-sage-900 rounded-full px-3 py-1 text-sm font-medium">
                      <span className="inline-block w-2 h-2 rounded-full bg-sage-600" />
                      ~700 hotel realizzati
                    </span>
                    <span className="inline-flex items-center gap-2 bg-white border border-sage-200 text-sage-900 rounded-full px-3 py-1 text-sm font-medium">
                      <span className="inline-block w-2 h-2 rounded-full bg-sage-600" />
                      Produzione: 44 operai
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valori Section */}
        <section className="py-20 bg-sage-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
                  I Nostri Valori
                </h2>
                <p className="text-lg text-sage-700 max-w-2xl mx-auto">
                  I principi che guidano il nostro lavoro ogni giorno
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Qualità</h3>
                  <p className="text-sage-700">
                    Utilizziamo solo materiali di prima scelta e lavorazioni artigianali che garantiscono 
                    durata nel tempo e massima soddisfazione.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Design</h3>
                  <p className="text-sage-700">
                    Progettiamo soluzioni che combinano estetica contemporanea e funzionalità, 
                    creando ambienti che riflettono l'identità di ogni struttura.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <div className="w-16 h-16 bg-sage-200 rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Partnership</h3>
                  <p className="text-sage-700">
                    Costruiamo relazioni durature con i nostri clienti, seguendoli in ogni fase del progetto 
                    dalla progettazione alla consegna e oltre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Numeri Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
                  I Nostri Numeri
                </h2>
                <p className="text-lg text-sage-700 max-w-2xl mx-auto">
                  Risultati che testimoniano la nostra esperienza e affidabilità
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-sage-900 mb-2">20+</div>
                  <div className="text-sage-700 font-medium">Anni di Esperienza</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-sage-900 mb-2">500+</div>
                  <div className="text-sage-700 font-medium">Progetti Completati</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-sage-900 mb-2">200+</div>
                  <div className="text-sage-700 font-medium">Clienti Soddisfatti</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-sage-900 mb-2">100%</div>
                  <div className="text-sage-700 font-medium">Made in Italy</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competenze Section */}
        <section className="py-20 bg-sage-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
                  Le Nostre Competenze
                </h2>
                <p className="text-lg text-sage-700 max-w-2xl mx-auto">
                  Servizi completi per ogni esigenza dell'hospitality
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Progettazione Personalizzata</h3>
                  <p className="text-sage-700">
                    Progettiamo soluzioni su misura che rispondono alle specifiche esigenze di ogni struttura, 
                    considerando layout, stile e funzionalità.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Produzione Artigianale</h3>
                  <p className="text-sage-700">
                    Realizziamo i nostri arredi in Italia, utilizzando tecniche artigianali e materiali 
                    di qualità superiore per garantire durata e bellezza nel tempo.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Installazione e Montaggio</h3>
                  <p className="text-sage-700">
                    Il nostro team specializzato si occupa dell'installazione completa, garantendo 
                    precisione e rispetto dei tempi di consegna.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">Assistenza Post-Vendita</h3>
                  <p className="text-sage-700">
                    Offriamo supporto continuo e servizio di manutenzione per assicurare che i nostri 
                    prodotti mantengano la loro qualità nel tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-sage-900 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Lavoriamo Insieme?
              </h2>
              <p className="text-lg text-sage-300 mb-10 leading-relaxed">
                Siamo pronti ad ascoltare le tue esigenze e a trasformare la tua visione in realtà. 
                Contattaci per una consulenza personalizzata.
              </p>
              <Link
                href="/contact"
                className="bg-white text-sage-900 px-8 py-4 rounded-md hover:bg-sage-100 transition-colors font-medium inline-block"
              >
                Contattaci
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
