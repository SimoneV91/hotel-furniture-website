'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface ImageModalProps {
  imageUrl: string;
  imageAlt: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ imageUrl, imageAlt, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-sage-300 transition-colors z-10"
        aria-label="Chiudi"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative max-w-7xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
}
