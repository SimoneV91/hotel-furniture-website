import Link from 'next/link';
import Image from 'next/image';

/**
 * ProjectPreview component - Displays a project card with image and details
 */
interface ProjectPreviewProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  description?: string;
  priceFrom?: string;
}

export default function ProjectPreview({ 
  title, 
  imageUrl,
  imageAlt,
  description,
  priceFrom
}: ProjectPreviewProps) {
  return (
    <Link 
      href="/projects" 
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
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-base font-semibold text-sage-900 group-hover:text-sage-700 transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-sage-700 text-sm mt-1 line-clamp-2">
            {description}
          </p>
        )}
        {priceFrom && (
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xs uppercase tracking-wide text-sage-500">
              Prezzo indicativo
            </span>
            <span className="text-lg font-semibold text-sage-900">
              {priceFrom}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
