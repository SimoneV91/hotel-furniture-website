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
      title: 'Grand Hotel Milano',
      location: 'Milano, Italia',
      category: 'Hotel 5 stelle',
      imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&h=600&fit=crop',
      imageAlt: 'Grand Hotel Milano'
    },
    {
      title: 'Resort Costiera Amalfitana',
      location: 'Amalfi, Italia',
      category: 'Resort di lusso',
      imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      imageAlt: 'Resort Costiera Amalfitana'
    },
    {
      title: 'Boutique Hotel Roma',
      location: 'Roma, Italia',
      category: 'Boutique Hotel',
      imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      imageAlt: 'Boutique Hotel Roma'
    },
    {
      title: 'B&B Napoleone',
      location: 'Trentino, Italia',
      category: 'B&B',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
      imageAlt: 'Spa Resort Dolomiti'
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Company Preview Section */}
      <section className="py-20 bg-white">
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
      <section className="py-20 bg-sage-50">
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

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium inline-block"
            >
              Esplora tutti i prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
              I Nostri Progetti
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Alcuni dei progetti che abbiamo realizzato per strutture ricettive in tutta Italia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectPreview
                key={index}
                title={project.title}
                location={project.location}
                category={project.category}
                imageUrl={project.imageUrl}
                imageAlt={project.imageAlt}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium inline-block"
            >
              Vedi tutti i progetti
            </Link>
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
              href="/contact"
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
