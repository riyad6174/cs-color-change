import Head from 'next/head';

import Layout from '@/components/Layout';
import Section1 from '../components/Menu/Section1';
import Section2 from '../components/Menu/Section2';
import Section3 from '../components/Menu/Section3';
import Section4 from '../components/Menu/Section4';
import Slider from '../components/Menu/Slider';
import Section6 from '@/components/Menu/Section6';

// import Section5 from "../components/Menu/Section5";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          {' '}
          We serve Indian restaurant menus in London - Colonel Saab
        </title>
        <meta
          name='description'
          content='Exquisite Indian Food Selection Explore our diverse Indian menu with a modern twist. Savor the best of Indian cuisine at Colonel Saab.'
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
          content='We serve Indian restaurant menus in London - Colonel Saab'
        />
        <meta
          name='twitter:description'
          content='Exquisite Indian Food Selection Explore our diverse Indian menu with a modern twist. Savor the best of Indian cuisine at Colonel Saab.'
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/MenuSlider1.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' We serve Indian restaurant menus in London - Colonel Saab'
        />
        <meta
          property='og:description'
          content='Exquisite Indian Food Selection Explore our diverse Indian menu with a modern twist. Savor the best of Indian cuisine at Colonel Saab.'
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/menu' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/MenuSlider1.jpg'
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
          {/* carousel */}
          <Slider />

          {/* section 1 */}
          <Section1 />

          {/* section 2 */}
          <Section2 />

          {/* section 3 */}
          <Section3 />

          {/* section 4 */}
          <Section4 />

          {/* section 6==> Desserts */}
          <Section6 />
          <div className='container text-left text-success'>
            {/* <p >*The lunch menu won't be available throughout the December 2023 festive season.</p> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
