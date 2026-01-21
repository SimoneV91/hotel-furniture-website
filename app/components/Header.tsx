import Link from 'next/link';
import Image from 'next/image';

/**
 * Header component - Navigation bar for the site
 * Contains logo, main navigation links, and CTA button
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/immagini/logo/logo_MobiliPerAlbergo.png" 
              alt="Mobili per Albergo" 
              width={200}
              height={60}
              className="h-auto w-auto max-h-48"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              HOME
            </Link>
            <Link 
              href="/azienda" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              AZIENDA
            </Link>
            <Link 
              href="/catalogo" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              CATALOGO
            </Link>
            <Link 
              href="/projects" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              PROGETTI
            </Link>
            <Link 
              href="/referenze" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              REFERENZE
            </Link>
            <a 
              href="/listino-prezzi-2026.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              LISTINO PREZZI 2026
            </a>
            <Link 
              href="/istruzioni" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              ISTRUZIONI
            </Link>
            <Link 
              href="/contact" 
              className="bg-sage-900 text-white px-6 py-2.5 rounded-md hover:bg-sage-800 transition-colors font-medium"
            >
              CONTATTI
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-sage-700 hover:text-sage-900"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
