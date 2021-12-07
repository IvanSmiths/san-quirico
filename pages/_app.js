import '../styles/globals.css';
import dynamic from 'next/dynamic';
const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false,
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeToggle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
