import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Instagram from '../components/Instagram';
import Logo from '../components/Logo';

const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Logo />
      <ThemeToggle />
      <Component {...pageProps} />
      <Footer />
      <Instagram />
      <Navbar />
    </>
  );
}

export default MyApp;
