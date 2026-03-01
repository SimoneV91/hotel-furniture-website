'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageModal from '../components/ImageModal';
import Image from 'next/image';
import { useState } from 'react';

/**
 * Projects page - Gallery of completed projects
 */

// Genera 100 immagini diverse per i progetti
const generateProjectImages = () => {
  const images = [];
  const baseUrls = [
    'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427',
    'https://images.unsplash.com/photo-1595576508898-0a8ef5c27a08',
    'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af',
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f7b',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f7b'
  ];

  for (let i = 0; i < 100; i++) {
    const baseUrl = baseUrls[i % baseUrls.length];
    images.push({
      id: i + 1,
      url: `${baseUrl}?w=800&h=600&fit=crop&sig=${i}`,
      alt: `Progetto realizzato ${i + 1} - Arredamento contract per struttura ricettiva`
    });
  }

  return images;
};

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const projectImages = generateProjectImages();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                I Nostri Progetti
              </h1>
              <p className="text-lg text-sage-700">
                Una raccolta dei progetti realizzati per strutture ricettive in tutta Italia
              </p>
            </div>
          </div>
        </section>

        {/* Projects Gallery Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
                Progetti Realizzati
              </h2>
              <p className="text-lg text-sage-700 max-w-2xl mx-auto">
                Scopri i nostri lavori completati per hotel, resort e strutture ricettive. 
                Clicca su qualsiasi immagine per visualizzarla in dimensioni maggiori.
              </p>
            </div>

            {/* Grid 5 colonne */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {projectImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage({ url: image.url, alt: image.alt })}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-sage-200 hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  />
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage.url}
          imageAlt={selectedImage.alt}
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}
