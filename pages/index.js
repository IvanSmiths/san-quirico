import Head from 'next/head';
import About from '../components/HomePage/About';
import CntMarquee from '../components/HomePage/CntMarquee';

import Hero from '../components/HomePage/Hero';

export default function Home() {
  const schemaData = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'San Quirico',
    url: 'https://www.sanquiricoarcheologia.it',
    image: 'https://www.sanquiricoarcheologia.it/main-texture.jpg',
    description: `San Quirico Archeologia è un sito archeologico in Toscana`,
    brand: {
      '@type': 'Brand',
      logo: 'https://sanquiricoarcheologia.it/logo-icon-white.svg',
    },
    sameAs: 'https://sanquiricoarcheologia.it',
    author: {
      '@type': 'Person',
      name: 'Ivan',
      familyName: 'Smiths',
      url: 'https://www.ivansmiths.com',
    },
    inLanguage: 'it',
    copyrightYear: 2021,
    genre: 'http://vocab.getty.edu/aat/300000810',
    headline: 'San Quirico Archeologia',
    keywords: 'san quirico archeologia, san quirico, san quirico toscana',
    locationCreated: 'Toscana',
  };

  return (
    <>
      <Head>
        <title>San Quirico Archeologia</title>
        <meta
          name="description"
          content="San Quirico è un sito archeologico in Toscana"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <Hero />
      <About />
      <CntMarquee />
    </>
  );
}