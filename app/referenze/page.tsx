import Header from '../components/Header';
import Footer from '../components/Footer';
import ReferenceCard from '../components/ReferenceCard';
import referencesByRegion from './referenceByRegion';

/**
 * Referenze page - References page organized by Italian regions
 */



export default function ReferenzePage() {
  // Funzione helper per creare un ID slug dalla regione
  const getRegionId = (region: string): string => {
    return region.toLowerCase().replace(/\s+/g, '-').replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e').replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o').replace(/[ùúûü]/g, 'u');
  };

  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-sage-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 mb-4">
                Le Nostre Referenze
              </h1>
              <p className="text-lg text-sage-700 mb-8">
                Scopri gli hotel e le strutture ricettive che hanno scelto i nostri arredi in tutta Italia
              </p>
              
              {/* Region Chips */}
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {referencesByRegion.map((regionData) => (
                  <a
                    key={regionData.region}
                    href={`#${getRegionId(regionData.region)}`}
                    className="px-4 py-2 bg-white text-sage-900 rounded-full border border-sage-300 hover:bg-sage-100 hover:border-sage-400 transition-colors font-medium text-sm shadow-sm"
                  >
                    {regionData.region}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* References by Region */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {referencesByRegion.map((regionData, regionIndex) => (
              <div 
                key={regionData.region} 
                id={getRegionId(regionData.region)}
                className={`scroll-mt-24 ${regionIndex > 0 ? 'mt-16 sm:mt-20' : ''}`}
              >
                {/* Region Title */}
                <div className="mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-sage-900 mb-2">
                    {regionData.region}
                  </h2>
                  <div className="h-1 w-20 bg-sage-600 rounded"></div>
                </div>

                {/* References Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                  {regionData.references.map((reference, index) => (
                    <ReferenceCard
                      key={index}
                      hotelName={reference.hotelName}
                      city={reference.city}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
