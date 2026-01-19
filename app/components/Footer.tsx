import Link from 'next/link';

/**
 * Footer component - Site footer with links and company info
 */
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">HotelFurniture</h3>
            <p className="text-neutral-400 mb-4 max-w-md">
              Soluzioni di arredamento contract per hotel, alberghi e strutture ricettive. 
              Qualità, design e funzionalità per ambienti di accoglienza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Prodotti
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contatti</h4>
            <ul className="space-y-2 text-neutral-400">
              <li>Email: info@hotelfurniture.it</li>
              <li>Tel: +39 000 000 0000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} HotelFurniture. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
