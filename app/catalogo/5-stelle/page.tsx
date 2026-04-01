import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogGrid from '../../components/CatalogGrid';
import { catalogData } from '../../data/catalogCategories';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Catalogo5StellePage() {
  const data = catalogData['5-stelle'];
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
                Camere per albergo 5 stelle: arredo hotel su misura
              </h2>
              <p className="mt-2 text-sage-700">
                Progettiamo <strong>camere per hotel 5 stelle</strong> con arredi contract su misura: testate letto ignifughe,
                armadi modulari e gruppi servizi coordinati. Materiali certificati, finiture premium e installazione rapida
                per ridurre i fermi struttura.
              </p>
              <h2 className="mt-6 text-2xl font-semibold text-sage-900">Materiali e finiture ignifughe</h2>
              <p className="mt-2 text-sage-700">
                Pannelli e bordi ignifughi, HPL ad alta resistenza, impiallacciati selezionati. Optional: LED integrati,
                cablaggi nascosti, boiserie coordinate. Ideale per <strong>arredo albergo</strong> contemporaneo.
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
  const title = `Camere 5 stelle per Hotel | Soluzioni B2B – Mobili per Albergo`;
  const description = `Camere 5 stelle per hotel: testate, armadi e gruppi servizi ignifughi su misura. Progettazione B2B e tempi rapidi.`;
  const canonical = `https://www.mobiliperalbergo.it/catalogo/5-stelle`;
  return { title, description, alternates: { canonical } };
}

