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
