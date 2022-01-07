import '../styles/globals.css';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';
import FakeFooter from '../components/FakeFooter';
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
