'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

/**
 * Header component - Navigation bar for the site
 * Contains logo, main navigation links, and CTA button
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Chiudi menu quando la finestra viene ridimensionata a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Chiudi menu quando si clicca un link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image 
              src="/immagini/logo/logo_mobili_per_albergo_piccolo.jpg" 
              alt="Mobili per Albergo" 
              width={200}
              height={60}
              className="h-auto w-auto max-h-20"
              priority
            />
          </Link>

          {/* Navigation Links - Desktop */}
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
            {/* Catalogo with hover submenu (desktop) */}
            <div className="relative group">
              <Link 
                href="/catalogo" 
                className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
              >
                CATALOGO
              </Link>
              {/* Submenu - visible on hover/focus */}
              <div
                className="absolute left-0 top-full pt-2 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-opacity duration-150"
                role="menu"
                aria-label="Sottomenù Catalogo"
              >
                <ul className="py-2 w-56 rounded-md border border-sage-200 bg-white shadow-lg">
                  <li>
                    <Link
                      href="/catalogo/5-stelle"
                      className="block px-4 py-2 text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors"
                      role="menuitem"
                    >
                      Camere 5 stelle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catalogo/4-stelle"
                      className="block px-4 py-2 text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors"
                      role="menuitem"
                    >
                      Camere 4 stelle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catalogo/3-stelle"
                      className="block px-4 py-2 text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors"
                      role="menuitem"
                    >
                      Camere 3 stelle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/catalogo/bb"
                      className="block px-4 py-2 text-sage-700 hover:bg-sage-50 hover:text-sage-900 transition-colors"
                      role="menuitem"
                    >
                      Camere B&B
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* <Link 
              href="/projects" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              PROGETTI
            </Link> */}
            <Link 
              href="/referenze" 
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              REFERENZE
            </Link>
            {/* <a 
              href="/Documents/Listino prezzi 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-700 hover:text-sage-900 transition-colors font-medium"
            >
              LISTINO PREZZI 2026
            </a> */}
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
            className="md:hidden text-sage-700 hover:text-sage-900 transition-colors p-2"
            aria-label="Menu"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              // Icona X quando aperto
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icona hamburger quando chiuso
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-3 border-t border-sage-200 mt-2">
            <Link 
              href="/" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              HOME
            </Link>
            <Link 
              href="/azienda" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              AZIENDA
            </Link>
            <Link 
              href="/catalogo" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              CATALOGO
            </Link>
            <Link 
              href="/projects" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              PROGETTI
            </Link>
            <Link 
              href="/referenze" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              REFERENZE
            </Link>
            <a 
              href="/Documents/Listino prezzi 2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              LISTINO PREZZI 2026
            </a>
            <Link 
              href="/istruzioni" 
              className="block text-sage-700 hover:text-sage-900 hover:bg-sage-50 transition-colors font-medium py-2 px-4 rounded-md"
              onClick={handleLinkClick}
            >
              ISTRUZIONI
            </Link>
            <Link 
              href="/contact" 
              className="block bg-sage-900 text-white px-6 py-2.5 rounded-md hover:bg-sage-800 transition-colors font-medium text-center"
              onClick={handleLinkClick}
            >
              CONTATTI
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
