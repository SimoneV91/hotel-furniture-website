import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogGrid from '../../components/CatalogGrid';
import { catalogData } from '../../data/catalogCategories';

export default function Catalogo4StellePage() {
  const data = catalogData['4-stelle'];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">{data.title}</h1>
              {data.description && (
                <p className="text-sage-700 mt-2">{data.description}</p>
              )}
            </div>
            <CatalogGrid items={data.items} />
            <p className="text-sm text-sage-600 mt-4 text-center">
              Clicca sulle immagini per aprire e scaricare il prezzo in PDF.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

