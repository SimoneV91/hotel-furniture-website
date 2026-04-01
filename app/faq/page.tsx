import Header from '../components/Header';
import Footer from '../components/Footer';
import Script from 'next/script';

export default function FAQPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type":"Question",
        "name":"Fornite arredi ignifughi certificati per hotel?",
        "acceptedAnswer":{"@type":"Answer","text":"Sì, produciamo arredi con pannelli e finiture ignifughe certificate in base alle normative vigenti per l'hotellerie."}
      },
      {
        "@type":"Question",
        "name":"Quali sono i tempi medi di consegna?",
        "acceptedAnswer":{"@type":"Answer","text":"Indicativamente 4–6 settimane, variabili in base a quantità, finiture e personalizzazioni richieste."}
      },
      {
        "@type":"Question",
        "name":"Realizzate arredi su misura?",
        "acceptedAnswer":{"@type":"Answer","text":"Sì, ogni progetto è sviluppato su misura con finiture coordinate e cablaggi integrati."}
      }
    ]
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-6">FAQ - Domande Frequenti</h1>
            <div className="space-y-6 max-w-3xl">
              <div>
                <h2 className="text-lg font-semibold text-sage-900">Fornite arredi ignifughi certificati per hotel?</h2>
                <p className="text-sage-700">Sì, realizziamo arredi con pannelli e finiture ignifughe certificate secondo le normative per l'hotellerie.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-sage-900">Quali sono i tempi medi di consegna?</h2>
                <p className="text-sage-700">In media 4–6 settimane; possono variare in base a quantità e personalizzazioni.</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-sage-900">Realizzate arredi su misura?</h2>
                <p className="text-sage-700">Sì, sviluppiamo soluzioni su misura con finiture coordinate e cablaggi integrati.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Script id="faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Footer />
    </>
  );
}

