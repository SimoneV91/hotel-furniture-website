import Link from 'next/link';

/**
 * Hero component - Main hero section with headline and CTAs
 */
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-sage-50 to-sage-100 py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-sage-900 mb-6 leading-tight">
            Arredamento Contract
            <br />
            <span className="text-sage-600">per Hotel e Strutture Ricettive</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-sage-700 mb-10 leading-relaxed max-w-2xl">
            Soluzioni su misura per ambienti di accoglienza. 
            Design, qualità e funzionalità per trasformare ogni spazio in un'esperienza memorabile.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/catalogo"
              className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium text-center inline-block"
            >
              Scopri i prodotti
            </Link>
            <Link
              href="/contact#contact-form"
              className="bg-white text-sage-900 border-2 border-sage-900 px-8 py-4 rounded-md hover:bg-sage-50 transition-colors font-medium text-center inline-block"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
