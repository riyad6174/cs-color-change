import Head from 'next/head';

import Layout from '@/components/Layout';
import Section4 from '@/components/HolbornPrivateDiningComponent/Section4';
import Section3 from '@/components/HolbornPrivateDiningComponent/Section3';
import Slider from '@/components/HolbornPrivateDiningComponent/Slider';
import Section2 from '@/components/HolbornPrivateDiningComponent/Section2';
import Section1 from '@/components/HolbornWeddingComponent/Section1';
import Section5 from '@/components/HolbornWeddingComponent/Section5';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Exclusive Holborn Weddings and Events Experience | Colonel Saab
        </title>
        <meta
          name='description'
          content='Discover unparalleled luxury at our Holborn location. Indulge in exquisite private dining with Colonel Saab, offering a blend of culinary mastery and opulent ambiance for an unforgettable experience.
'
        />
        <meta
          name='keywords'
          content='Trafalgar square Holborn Colonel Saab Private dining Indian restaurant'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content='Exclusive Holborn Weddings and Events Experience | Colonel Saab'
        />
        <meta
          name='twitter:description'
          content='Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab.'
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/PrivateDiningSlider.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Exclusive Holborn Weddings and Events Experience | Colonel Saab'
        />
        <meta
          property='og:description'
          content='Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab.'
        />

        <meta
          property='og:url'
          content='https://colonelsaab.co.uk/private-dining-rooms'
        />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/PrivateDiningSlider.jpg'
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
          <Slider />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
        </Layout>
      </main>
    </>
  );
}
