import Head from 'next/head';

import Layout from '@/components/Layout';

import PressCarousel from '@/components/Press/PressCarousel';
import { useEffect, useState } from 'react';
import Section1 from '../../components/Press/Section1';
import Section2 from '../../components/Press/Section2';

export default function Home() {
  const [year, setYear] = useState(2024);

  useEffect(() => {
    console.log(year);
  }, [year]);

  const handleYear = (value) => {
    setYear(value);
  };

  return (
    <>
      <Head>
        <title>
          Stay Informed with our News and Press Releases in the Media
        </title>
        <meta
          name='description'
          content='Media & News Coverage Explore our media coverage and press releases. Stay updated with the latest news about Colonel Saab.'
        />
        <meta
          name='keywords'
          content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab."
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content={`Stay Informed with our News and Press Releases in the Media`}
        />
        <meta
          name='twitter:description'
          content='Media & News Coverage Explore our media coverage and press releases. Stay updated with the latest news about Colonel Saab.'
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={`Stay Informed with our News and Press Releases in the Media`}
        />
        <meta
          property='og:description'
          content='Media & News Coverage Explore our media coverage and press releases. Stay updated with the latest news about Colonel Saab.'
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/press' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />
        {/* <meta property="og:image:width" content="683" />
<meta property="og:image:height" content="1024" /> */}

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Layout>
          <Section1 />
          <PressCarousel />
          <Section2 handleYear={handleYear} year={year} />
        </Layout>
      </main>
    </>
  );
}
