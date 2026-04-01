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
  onClick?: () => void;
}

export default function ProjectPreview({ 
  title, 
  imageUrl,
  imageAlt,
  description,
  priceFrom,
  onClick,
}: ProjectPreviewProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-[520px] w-full flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 text-left"
    >
      {/* Fixed-size image area to keep all cards uniform */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5 flex flex-1 flex-col gap-2">
        <h3 className="text-base font-semibold text-sage-900 group-hover:text-sage-700 transition-colors line-clamp-2">
          {title}
        </h3>
        {description && (
          <p className="text-sage-700 text-sm mt-1 line-clamp-2">            
            {description}
          </p>
        )}

      <div className="mt-auto flex items-baseline gap-2 pt-2">
        <span className="text-xs uppercase text-sage-500">
          {priceFrom ? 'Prezzo indicativo' : 'Prezzo su richiesta'}
        </span>
        <span className="text-lg font-semibold text-sage-900">
          {priceFrom || '\u00A0'}
        </span>
      </div>

      </div>
    </button>
  );
}
