import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

/**
 * Istruzioni page - Instructions page
 */
export default function IstruzioniPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-6">
              Istruzioni
            </h1>
            <p className="text-lg text-sage-700 mb-8">
              Pagina dedicata alle istruzioni in fase di sviluppo.
            </p>
            <Link
              href="/"
              className="bg-sage-900 text-white px-8 py-4 rounded-md hover:bg-sage-800 transition-colors font-medium inline-block"
            >
              Torna alla Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
