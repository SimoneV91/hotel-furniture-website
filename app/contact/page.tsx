import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

/**
 * Contact page - Placeholder page for contact form
 */
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
              Contatti
            </h1>
            <p className="text-lg text-neutral-700 mb-8">
              Pagina dedicata ai contatti in fase di sviluppo.
            </p>
            <Link
              href="/"
              className="bg-neutral-900 text-white px-8 py-4 rounded-md hover:bg-neutral-800 transition-colors font-medium inline-block"
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
