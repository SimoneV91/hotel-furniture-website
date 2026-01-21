import Link from 'next/link';
import Image from 'next/image';

/**
 * CategoryPreview component - Displays a category card with image and link
 */
interface CategoryPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export default function CategoryPreview({ 
  title, 
  description, 
  imageUrl, 
  imageAlt 
}: CategoryPreviewProps) {
  return (
    <Link 
      href="/catalogo" 
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-sage-900 mb-2 group-hover:text-sage-700 transition-colors">
          {title}
        </h3>
        <p className="text-sage-600 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
}
