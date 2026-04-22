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
      imageUrl: '/immagini/Catalogo/5stelle.jpg',
      imageAlt: 'Camera d\'hotel moderna'
    },
    {
      title: 'Camere 4 Stelle',
      description: 'Reception, lounge e spazi comuni con design contemporaneo',
      imageUrl: '/immagini/Catalogo/4stelle.jpg',
      imageAlt: 'Reception hotel elegante'
    },
    {
      title: 'Camere 3 Stelle',
      description: 'Tavoli, sedute e arredi per ristoranti e bar di hotel',
      imageUrl: '/immagini/Catalogo/3stelle.jpg',
      imageAlt: 'Ristorante hotel'
    },
    {
      title: 'Camere B&B',
      description: 'Arredi per centri benessere e spa con atmosfera rilassante',
      imageUrl: '/immagini/Catalogo/b&B.jpg',
      imageAlt: 'Spa hotel'
    },
  ];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
        </div> */}

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
                  href={
                    category.title.includes('5') ? '/catalogo/5-stelle' :
                    category.title.includes('4') ? '/catalogo/4-stelle' :
                    category.title.includes('3') ? '/catalogo/3-stelle' :
                    '/catalogo/bb'
                  }
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

export async function generateMetadata() {
  const title = 'Catalogo Arredi Hotel | Camere 3, 4, 5 Stelle e B&B';
  const description =
    'Esplora il catalogo di mobili per albergo: soluzioni contract per camere hotel 3, 4, 5 stelle e B&B con arredi su misura.';
  const canonical = 'https://www.mobiliperalbergo.it/catalogo';
  return { title, description, alternates: { canonical } };
}
