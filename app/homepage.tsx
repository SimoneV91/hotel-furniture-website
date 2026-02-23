import Link from 'next/link';
import Hero from './components/Hero';
import CategoryPreview from './components/CategoryPreview';
import ProjectPreview from './components/ProjectPreview';

/**
 * Homepage component - Main landing page content
 * Contains all sections: Hero, Company Preview, Categories, Projects, Final CTA
 */
export default function Homepage() {
  // Categories data
  const categories = [
    {
      title: 'Camere 5 Stelle',
      description: 'Letti, armadi e complementi d\'arredo per ambienti di riposo eleganti',
      imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop',
      imageAlt: 'Camera d\'hotel moderna'
    },
    {
      title: 'Camere 4 Stelle',
      description: 'Reception, lounge e spazi comuni con design contemporaneo',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      imageAlt: 'Reception hotel elegante'
    },
    {
      title: 'Camere 3 Stelle',
      description: 'Tavoli, sedute e arredi per ristoranti e bar di hotel',
      imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      imageAlt: 'Ristorante hotel'
    },
    {
      title: 'Camere B&B',
      description: 'Arredi per centri benessere e spa con atmosfera rilassante',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      imageAlt: 'Spa hotel'
    },
  ];

  // Projects data
  const projects = [
    {
      title: 'Camera ⭐⭐⭐',
      description: 'Camere e spazi comuni su misura per un hotel 5 stelle nel cuore di Milano.',
      priceFrom: 'da 2.500 € a camera',
      imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      imageAlt: 'Grand Hotel Milano'
    },
    {
      title: 'Camera ⭐⭐⭐⭐',
      description: 'Arredi per camere, suite e aree lounge con vista sulla Costiera Amalfitana.',
      priceFrom: 'da 3.200 € a camera',
      imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      imageAlt: 'Resort Costiera Amalfitana'
    },
    {
      title: 'Camera ⭐⭐⭐⭐⭐',
      description: 'Soluzioni contract per un boutique hotel nel centro storico di Roma.',
      priceFrom: 'da 2.800 € a camera',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      imageAlt: 'Boutique Hotel Roma'
    },
    {
      title: 'B&B',
      location: 'Trentino, Italia',
      category: 'B&B',
      description: 'Camere accoglienti in stile alpino per una struttura B&B in Trentino.',
      priceFrom: 'da 1.800 € a camera',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      imageAlt: 'Spa Resort Dolomiti'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Projects Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
              Le Nostre Camere
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
               Alcune delle nostre camere, presenti in moltissime strutture del territorio nazionale
            </p>
          </div>

          {/* Mobile: horizontal scroll like Amazon */}
          <div className="-mx-4 px-4 md:hidden">
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[260px] max-w-xs snap-start shrink-0"
                >
                  <ProjectPreview
                    title={project.title}
                    imageUrl={project.imageUrl}
                    imageAlt={project.imageAlt}
                    description={project.description}
                    priceFrom={project.priceFrom}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: grid layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectPreview
                key={index}
                title={project.title}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
                description={project.description}
                priceFrom={project.priceFrom}
              />
            ))}
          </div>

        </div>
      </section>
      {/* Company Preview Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-6">
              Soluzioni Contract per l'Hospitality
            </h2>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed">
              Siamo specializzati nella progettazione e realizzazione di arredi contract 
              per hotel, alberghi e strutture ricettive. Con oltre 20 anni di esperienza 
              nel settore, offriamo soluzioni su misura che combinano design contemporaneo, 
              qualità dei materiali e funzionalità per creare ambienti di accoglienza unici.
            </p>
            <Link
              href="/about"
              className="text-sage-900 font-semibold hover:text-sage-700 transition-colors inline-flex items-center gap-2"
            >
              Scopri di più su di noi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
              Le Nostre Categorie
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Soluzioni complete per ogni ambiente della tua struttura ricettiva
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-6">
            {categories.map((category, index) => (
              <CategoryPreview
                key={index}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                imageAlt={category.imageAlt}
              />
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto a trasformare la tua struttura?
            </h2>
            <p className="text-lg text-sage-300 mb-10 leading-relaxed">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti 
              a creare ambienti di accoglienza unici e memorabili per i tuoi ospiti.
            </p>
            <Link
              href="/contact#contact-form"
              className="bg-white text-sage-900 px-8 py-4 rounded-md hover:bg-sage-100 transition-colors font-medium inline-block"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
