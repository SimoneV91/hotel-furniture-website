import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CatalogGrid from '../../components/CatalogGrid';
import { catalogData } from '../../data/catalogCategories';
import Breadcrumbs from '../../components/Breadcrumbs';

export default function Catalogo3StellePage() {
  const data = catalogData['3-stelle'];
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
                Camere per albergo 3 stelle: funzionalità e resistenza
              </h2>
              <p className="mt-2 text-sage-700">
                Gamma per <strong>arredo albergo</strong> 3 stelle con testate, scrivanie e armadi su misura.
                Materiali durevoli, manutenzione semplificata e installazione rapida per cicli intensivi di utilizzo.
              </p>
              <h2 className="mt-6 text-2xl font-semibold text-sage-900">Materiali e tempi</h2>
              <p className="mt-2 text-sage-700">
                HPL ignifugo, impiallacciati selezionati, bordi anti‑urto. Montaggi pianificati per minimizzare i fermi camera.
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
  const title = `Camere 3 stelle per Hotel | Contract su misura – Mobili per Albergo`;
  const description = `Camere 3 stelle per hotel: arredi su misura, finiture resistenti e montaggi rapidi.`;
  const canonical = `https://www.mobiliperalbergo.it/catalogo/3-stelle`;
  return { title, description, alternates: { canonical } };
}

