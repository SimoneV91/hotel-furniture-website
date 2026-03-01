import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

/**
 * Istruzioni page - Instructions page about Sialegno safety standards
 */
export default function IstruzioniPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                Istruzioni e Sicurezza
              </h1>
              <p className="text-lg text-sage-700">
                Linee guida per la sicurezza degli arredi in strutture ricettive
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg text-sage-700 mb-6 leading-relaxed">
                  Per chi vuole trasformare il proprio <strong className="text-sage-900">Airbnb in un business professionale e sicuro</strong>, 
                  noi di <strong className="text-sage-900">Contract Design</strong> consigliamo sempre la linea <strong className="text-sage-900">Sialegno (NB-04)</strong> in <strong className="text-sage-900">Classe B-s1, d0</strong>.
                </p>
                <p className="text-lg text-sage-700 leading-relaxed">
                  Perché sceglierla anche se non sei un grande hotel?
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-sage-50 p-6 rounded-lg border border-sage-200">
                  <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">
                    Sicurezza degli Ospiti
                  </h3>
                  <p className="text-sage-700">
                    Maggiore tempo di evacuazione grazie alla bassa emissione di fumi (<strong className="text-sage-900">s1</strong>) 
                    e all'assenza di gocce ardenti (<strong className="text-sage-900">d0</strong>).
                  </p>
                </div>

                <div className="bg-sage-50 p-6 rounded-lg border border-sage-200">
                  <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">
                    Protezione Assicurativa
                  </h3>
                  <p className="text-sage-700">
                    Molte polizze per "Case Vacanza" richiedono standard minimi di sicurezza per coprire i danni a terzi.
                  </p>
                </div>

                <div className="bg-sage-50 p-6 rounded-lg border border-sage-200">
                  <div className="w-12 h-12 bg-sage-200 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-sage-900 mb-3">
                    Valore nel tempo
                  </h3>
                  <p className="text-sage-700">
                    Un mobile ignifugo è un investimento che rispetta già le future normative europee più restrittive.
                  </p>
                </div>
              </div>

              {/* Solution Section */}
              <div className="bg-sage-50 border border-sage-200 rounded-lg p-8 mb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-4">
                      La nostra soluzione ad Asolo
                    </h2>
                    <p className="text-lg text-sage-700 leading-relaxed">
                      Sia su <a href="https://www.mobiliperalbergo.it" className="text-sage-900 font-semibold hover:text-sage-700 underline" target="_blank" rel="noopener noreferrer">www.mobiliperalbergo.it</a> che su{' '}
                      <a href="https://www.contractdesign.it" className="text-sage-900 font-semibold hover:text-sage-700 underline" target="_blank" rel="noopener noreferrer">www.contractdesign.it</a>, 
                      offriamo la possibilità di produrre i tuoi arredi con il pannello ecologico <strong className="text-sage-900">Sialegno del Gruppo Saviola</strong>. 
                      Design italiano, <strong className="text-sage-900">100% legno riciclato</strong> e la massima sicurezza certificata.
                    </p>
                  </div>
                </div>
              </div>

              {/* PDF Download Section */}
              <div className="bg-white border-2 border-sage-300 rounded-lg p-6 mb-12 text-center">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-sage-700 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-sage-900 mb-3">
                  Documentazione Completa
                </h3>
                <p className="text-sage-700 mb-6">
                  Scarica il documento PDF completo con tutte le informazioni dettagliate
                </p>
                <a
                  href="/Documents/Istruzioni.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Scarica il PDF Istruzioni
                </a>
              </div>

              {/* CTA Section */}
              <div className="bg-sage-900 text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Hai bisogno di una consulenza?
                </h3>
                <p className="text-lg text-sage-300 mb-6 leading-relaxed">
                  Vuoi sapere se il tuo progetto Airbnb rispetta i requisiti di sicurezza? 
                  Contattaci per una consulenza gratuita.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:mobiliperalbergo@gmail.com"
                    className="bg-white text-sage-900 px-8 py-4 rounded-md hover:bg-sage-100 transition-colors font-medium inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    mobiliperalbergo@gmail.com
                  </a>
                  <Link
                    href="/contact#contact-form"
                    className="bg-sage-800 text-white px-8 py-4 rounded-md hover:bg-sage-700 transition-colors font-medium inline-flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Compila il form di contatto
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
