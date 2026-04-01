import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogGrid from '../../components/CatalogGrid';
import { catalogData } from '../../data/catalogCategories';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function CatalogoBBPage() {
  const data = catalogData.bb;
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
                Camere B&B: arredi compatti e versatili
              </h2>
              <p className="mt-2 text-sage-700">
                Soluzioni salvaspazio per <strong>camere per hotel</strong> e strutture B&B: testate, gruppi servizi e
                boiserie ignifuga coordinata. Personalizzazione finiture e dimensioni in ottica budget/tempi certi.
              </p>
              <h2 className="mt-6 text-2xl font-semibold text-sage-900">Progettazione B2B</h2>
              <p className="mt-2 text-sage-700">
                Supporto tecnico dalla preventivazione al montaggio, con logistica e pianificazione dei lavori in struttura.
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
  const title = `Camere B&B | Arredi su misura – Mobili per Albergo`;
  const description = `Arredi per B&B: testate salvaspazio, gruppi servizi e boiserie ignifuga. Soluzioni compatte per budget e tempi certi.`;
  const canonical = `https://www.mobiliperalbergo.it/catalogo/bb`;
  return { title, description, alternates: { canonical } };
}

