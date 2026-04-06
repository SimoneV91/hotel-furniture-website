'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Hero from './components/Hero';
import CategoryPreview from './components/CategoryPreview';
import ProjectPreview from './components/ProjectPreview';
import ContactRequestModal from './components/ContactRequestModal';
import { projects } from './data/projects';

/**
 * Homepage component - Main landing page content
 * Contains all sections: Hero, Company Preview, Categories, Projects, Final CTA
 */
export default function Homepage() {
  const [filter, setFilter] = useState<string>('all');
  const pathname = usePathname();
  const [selectedProject, setSelectedProject] = useState<{ title: string; description?: string } | null>(null);
  const withFinalPeriod = (text?: string) => {
    if (!text) return text;
    const trimmed = text.trim();
    const last = trimmed.slice(-1);
    if (['.', '!', '?', ')', '”', '»', '\'', '"'].includes(last)) return trimmed;
    return `${trimmed}.`;
  };
  // Categories data
  const categories = [
    {
      title: 'Camere 5 Stelle',
      description: 'Letti, armadi e complementi d\'arredo per ambienti di riposo eleganti',
      imageUrl: '/immagini/Catalogo/5stelle.jpg',
      imageAlt: 'Camera d\'hotel moderna'
    },
    {
      title: 'Camere 4 Stelle',
      description: 'Reception, lounge e spazi comuni con design contemporaneo',
      imageUrl: '/immagini/Catalogo/4stelle.jpg',
      imageAlt: 'Reception hotel elegante'
    },
    {
      title: 'Camere 3 Stelle',
      description: 'Tavoli, sedute e arredi per ristoranti e bar di hotel',
      imageUrl: '/immagini/Catalogo/3stelle.jpg',
      imageAlt: 'Ristorante hotel'
    },
    {
      title: 'Camere B&B',
      description: 'Arredi per centri benessere e spa con atmosfera rilassante',
      imageUrl: '/immagini/Catalogo/b&B.jpg',
      imageAlt: 'Spa hotel'
    },
  ];

  return (
    <main>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6">
          {/* Filter logic */}
          {(() => {
            const filteredProjects = projects.filter((project) => {
              if (filter === 'all') return true;
              if (filter === '5') return project.title.includes('⭐⭐⭐⭐⭐');
              if (filter === '4') return project.title.includes('⭐⭐⭐⭐');
              if (filter === '3') return project.title.includes('⭐⭐⭐');
              if (filter === 'b&b') return project.title === 'B&B';
              return true;
            });

            return (
              <>
          
                {/* Mobile: vertical scroll */}
              <div className="md:hidden max-h-[500px] overflow-y-auto px-4">
                <div className="flex flex-col gap-4">
                  {filteredProjects.map((project, index) => (
                    <ProjectPreview
                      key={index}
                      title={project.title}
                      imageUrl={project.imageUrl}
                      imageAlt={project.imageAlt}
                      description={withFinalPeriod(project.description)}
                      priceFrom={project.priceFrom}
                      onClick={() => setSelectedProject({ title: project.title, description: project.description })}
                    />
                  ))}
                </div>
              </div>


                {/* Desktop: grid layout */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 items-stretch gap-6 lg:gap-8">
                  {filteredProjects.map((project, index) => (
                    <ProjectPreview
                      key={index}
                      title={project.title}
                      imageUrl={project.imageUrl}
                      imageAlt={project.imageAlt}
                      description={withFinalPeriod(project.description)}
                      priceFrom={project.priceFrom}
                      onClick={() => setSelectedProject({ title: project.title, description: project.description })}
                    />
                  ))}
                </div>
              </>
            );
          })()}

        </div>
      </section>
      <ContactRequestModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        context={{
          sourcePage: pathname,
          cardTitle: selectedProject?.title,
          cardDescription: selectedProject?.description,
        }}
      />
      {/* Company Preview Section */}
      <section className="py-20 bg-sage-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-6">
              Soluzioni Contract per l'Hospitality
            </h2>
            <p className="text-lg text-sage-700 mb-8 leading-relaxed">
              Siamo specializzati nella progettazione e realizzazione di arredi contract 
              per hotel, alberghi e strutture ricettive. Con oltre 40 anni di esperienza 
              nel settore, offriamo soluzioni su misura che combinano design contemporaneo, 
              qualità dei materiali e funzionalità per creare ambienti di accoglienza unici.
            </p>
            <Link
              href="/about"
              className="text-sage-900 font-semibold hover:text-sage-700 transition-colors inline-flex items-center gap-2"
            >
              Scopri di più su di noi
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-sage-900 mb-4">
              Le Nostre Categorie
            </h2>
            <p className="text-lg text-sage-700 max-w-2xl mx-auto">
              Soluzioni complete per ogni ambiente della tua struttura ricettiva
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-6">
            {categories.map((category, index) => (
              <CategoryPreview
                key={index}
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                imageAlt={category.imageAlt}
                href={
                  category.title.includes('5') ? '/catalogo/5-stelle' :
                  category.title.includes('4') ? '/catalogo/4-stelle' :
                  category.title.includes('3') ? '/catalogo/3-stelle' :
                  '/catalogo/bb'
                }
              />
            ))}
          </div>
        </div>
      </section>



      {/* Final CTA Section */}
      <section className="py-20 bg-sage-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Pronto a trasformare la tua struttura?
            </h2>
            <p className="text-lg text-sage-300 mb-10 leading-relaxed">
              Contattaci per una consulenza gratuita e scopri come possiamo aiutarti 
              a creare ambienti di accoglienza unici e memorabili per i tuoi ospiti.
            </p>
            <Link
              href="/contact#contact-form"
              className="bg-white text-sage-900 px-8 py-4 rounded-md hover:bg-sage-100 transition-colors font-medium inline-block"
            >
              Richiedi un preventivo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
