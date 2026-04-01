import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogGrid from '../../components/CatalogGrid';
import { catalogData } from '../../data/catalogCategories';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Catalogo4StellePage() {
  const data = catalogData['4-stelle'];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[
              { name: 'Home', href: '/' },
              { name: 'Catalogo', href: '/catalogo' },
              { name: data.title }
            ]} />
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-sage-900">{data.title}</h1>
              {data.description && (
                <p className="text-sage-700 mt-2">{data.description}</p>
              )}
            </div>
            {/* SEO content */}
            <section className="max-w-3xl mx-auto mb-10">
              <h2 className="text-2xl font-semibold text-sage-900">
                Camere per hotel 4 stelle con arredi contract
              </h2>
              <p className="mt-2 text-sage-700">
                Soluzioni complete per <strong>camere per albergo</strong> 4 stelle: testate ignifughe, armadi a cabina e
                gruppi servizi coordinati. Progettazione B2B, finiture durevoli e tempi di montaggio ottimizzati.
              </p>
              <h2 className="mt-6 text-2xl font-semibold text-sage-900">Collezioni e configurazioni</h2>
              <p className="mt-2 text-sage-700">
                Linee modulabili per arredo hotel business e leisure; personalizzazione dimensioni, finiture e cablaggi.
              </p>
            </section>
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

export async function generateMetadata() {
  const title = `Camere 4 stelle per Hotel | Soluzioni B2B – Mobili per Albergo`;
  const description = `Camere 4 stelle per hotel: testate, armadi e gruppi servizi su misura con finiture ignifughe.`;
  const canonical = `https://www.mobiliperalbergo.it/catalogo/4-stelle`;
  return { title, description, alternates: { canonical } };
}

