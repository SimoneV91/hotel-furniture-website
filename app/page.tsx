import Homepage from './homepage';
import Header from './components/Header';
import Footer from './components/Footer';

/**
 * Main page component
 * Imports and renders the Homepage component along with Header and Footer
 */
export default function Page() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export async function generateMetadata() {
  const title = 'Mobili per Albergo | Arredamento Contract per Hotel';
  const description =
    'Arredamento contract su misura per hotel, alberghi e strutture ricettive: camere, reception e spazi comuni con soluzioni professionali.';
  const canonical = 'https://www.mobiliperalbergo.it/';
  return { title, description, alternates: { canonical } };
}
