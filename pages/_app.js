import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
      <Footer />
      <Navbar />
    </>
  );
}

export default MyApp;
