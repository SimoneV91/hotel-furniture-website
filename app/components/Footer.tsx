import Link from 'next/link';

/**
 * Footer component - Site footer with links and company info
 */
export default function Footer() {
  return (
    <footer className="bg-sage-900 text-sage-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Mobili per Albergo</h3>
            
            <p className="text-sage-400 mb-4 max-w-md">
              Soluzioni di arredamento contract per hotel, alberghi e strutture ricettive. 
              Qualità, design e funzionalità per ambienti di accoglienza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Link rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/azienda" className="hover:text-white transition-colors">
                  Azienda
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-white transition-colors">
                  Catalogo
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Progetti
                </Link>
              </li>
              <li>
                <Link href="/referenze" className="hover:text-white transition-colors">
                  Referenze
                </Link>
              </li>
              <li>
                <Link href="/istruzioni" className="hover:text-white transition-colors">
                  Istruzioni
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
            <ul className="space-y-2 text-sage-400">
              <li>Email: info@mobiliperalbergo.it</li>
              <li>Tel: +39 000 000 0000</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-sage-800 mt-12 pt-8 text-center text-sage-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Mobili per Albergo. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
