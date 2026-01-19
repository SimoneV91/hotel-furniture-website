import Link from 'next/link';
import Image from 'next/image';

/**
 * ProjectPreview component - Displays a project card with image and details
 */
interface ProjectPreviewProps {
  title: string;
  location: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

export default function ProjectPreview({ 
  title, 
  location, 
  category,
  imageUrl, 
  imageAlt 
}: ProjectPreviewProps) {
  return (
    <Link 
      href="/projects" 
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-neutral-500 uppercase tracking-wide">{category}</span>
        <h3 className="text-xl font-semibold text-neutral-900 mt-2 mb-1 group-hover:text-neutral-700 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600 text-sm">
          {location}
        </p>
      </div>
    </Link>
  );
}
