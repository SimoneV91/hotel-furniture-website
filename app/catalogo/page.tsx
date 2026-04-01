import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import CategoryPreview from '../components/CategoryPreview';

/**
 * Catalogo page - Products catalog page
 */
export default function CatalogoPage() {
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
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-6">
              Catalogo
            </h1>
            <p className="text-lg text-sage-700 mb-8">
              Pagina dedicata al catalogo prodotti in fase di sviluppo.
            </p>
            <Link
              href="/"
              className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium inline-block"
            >
              Torna alla Home
            </Link>
          </div>
        </div>

        {/* Sezione Categorie (copiata dalla homepage) */}
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
      </main>
      <Footer />
    </>
  );
}
