import Link from 'next/link';

/**
 * Hero component - Main hero section with headline and CTAs
 */
export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-50 to-neutral-100 py-24 sm:py-32 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Arredamento Contract
            <br />
            <span className="text-neutral-600">per Hotel e Strutture Ricettive</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-neutral-700 mb-10 leading-relaxed max-w-2xl">
            Soluzioni su misura per ambienti di accoglienza. 
            Design, qualità e funzionalità per trasformare ogni spazio in un'esperienza memorabile.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="bg-neutral-900 text-white px-8 py-4 rounded-md hover:bg-neutral-800 transition-colors font-medium text-center inline-block"
            >
              Scopri i prodotti
            </Link>
            <Link
              href="/contact"
              className="bg-white text-neutral-900 border-2 border-neutral-900 px-8 py-4 rounded-md hover:bg-neutral-50 transition-colors font-medium text-center inline-block"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
