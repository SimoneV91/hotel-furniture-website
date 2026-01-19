import Link from 'next/link';

/**
 * Header component - Navigation bar for the site
 * Contains logo, main navigation links, and CTA button
 */
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-neutral-900 hover:text-neutral-700 transition-colors">
            HotelFurniture
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/products" 
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              Prodotti
            </Link>
            <Link 
              href="/projects" 
              className="text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
            >
              Progetti
            </Link>
            <Link 
              href="/contact" 
              className="bg-neutral-900 text-white px-6 py-2.5 rounded-md hover:bg-neutral-800 transition-colors font-medium"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-neutral-700 hover:text-neutral-900"
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
