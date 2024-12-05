import Head from 'next/head';


import Layout from '@/components/Layout';
import AntonyBertin from "../components/AboutArt/AntonyBertin";
import KarenAnand from "../components/AboutArt/KarenAnand";
import RoopPartapChoudhary from "../components/AboutArt/RoopPartapChoudhary";
import Section1 from "../components/AboutArt/Section1";
import Section2 from "../components/AboutArt/Section2";
import Section3 from "../components/AboutArt/Section3";
import Slider from "../components/AboutArt/Slider";



export default function Home() {

  

  return (
    <>

      <Head>
        <title>
        Colonel Saab Best Restaurant Covent Garden Indian Antiques 
        </title>
        <meta
          name="description"
          content="Indian Cuisine Mastery Experience the art of Indian cooking and the expertise behind Colonel Saab's culinary creations."
        />
        <meta name="keywords" content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab." />


        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content='Colonel Saab Best Restaurant Covent Garden Indian Antiques '
        />
        <meta
          name='twitter:description'
          content="Indian Cuisine Mastery Experience the art of Indian cooking and the expertise behind Colonel Saab's culinary creations."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/AboutArtSlider.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Colonel Saab Best Restaurant Covent Garden Indian Antiques '
        />
        <meta
          property='og:description'
          content="Indian Cuisine Mastery Experience the art of Indian cooking and the expertise behind Colonel Saab's culinary creations."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/about-the-art' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/AboutArtSlider.jpg'
        />
        {/* <meta property="og:image:width" content="683" />
<meta property="og:image:height" content="1024" /> */}

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main >

        <Layout>
          <Slider />
          <Section1 />
          <Section2 />
          <Section3 />
          <RoopPartapChoudhary />
          <KarenAnand />
          <AntonyBertin />
        </Layout>

      </main>
    </>
  )
}
