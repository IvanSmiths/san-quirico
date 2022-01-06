import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
