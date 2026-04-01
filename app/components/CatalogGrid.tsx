'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CatalogItem } from '../data/catalogCategories';

/**
 * Griglia a 4 colonne con immagini cliccabili.
 * Ogni elemento apre/scarica un PDF di prezzo. Mostra overlay "Vedi prezzo (PDF)" all'hover.
 */
export default function CatalogGrid({ items }: { items: CatalogItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, idx) => (
        <div key={idx} className="group relative overflow-hidden rounded-lg bg-white border border-sage-200 shadow-sm">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-[4/3]"
          >
            <Image
              src={item.imageUrl}
              alt={item.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            {/* Overlay "Vedi prezzo (PDF)" */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm font-medium bg-sage-900/80 px-3 py-1 rounded-md">
                Vedi prezzo (PDF)
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

