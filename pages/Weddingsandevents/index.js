import Head from 'next/head';

import Layout from '@/components/Layout';
import Slider from '@/components/PrivateDiningComponents/Slider';
import Media from '@/components/PrivateDiningComponents/Media';
import Section1 from '@/components/WeddingEventComponents/Section1';
import Section2 from '@/components/WeddingEventComponents/Section2';
import Section3 from '@/components/WeddingEventComponents/Section3';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wedding and Celebrations | Colonel Saab London</title>
        <meta
          name='description'
          content='Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab.'
        />
        <meta
          name='keywords'
          content='Trafalgar square, Holborn, Colonel Saab, Private dining, Indian restaurant.'
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content='Wedding and Celebrations | Colonel Saab London'
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
          content='Wedding and Celebrations | Colonel Saab London'
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
          <Media />
          <Section2 />
          <Section3 />
          {/* <Section4 /> */}
        </Layout>
      </main>
    </>
  );
}
