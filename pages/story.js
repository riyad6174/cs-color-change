import Head from 'next/head';


import Layout from '@/components/Layout';
import Section1 from "../components/Story/Section1";
import Section2 from "../components/Story/Section2";
import Section3 from "../components/Story/Section3";
import Section4 from "../components/Story/Section4";
import Section5 from "../components/Story/Section5";
import Section6 from "../components/Story/Section6";
import Slider from "../components/Story/Slider";


export default function Home() {



  return (
    <>
    <Head>
        <title>
        Best Indian Restaurant Covent Garden Holborn in UK </title>
        <meta
          name="description"
          content="A Tradition of Culinary Excellence Learn about our rich culinary heritage and the passion that drives our Indian restaurant, Colonel Saab."
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
          content='Best Indian Restaurant Covent Garden Holborn in UK '
        />
        <meta
          name='twitter:description'
          content="A Tradition of Culinary Excellence Learn about our rich culinary heritage and the passion that drives our Indian restaurant, Colonel Saab."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/StorySlider1.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Best Indian Restaurant Covent Garden Holborn in UK '
        />
        <meta
          property='og:description'
          content="A Tradition of Culinary Excellence Learn about our rich culinary heritage and the passion that drives our Indian restaurant, Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/story' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/StorySlider1.jpg'
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
          <Section4 />
          <Section5 />
          {/* <Section6 /> */}
        </Layout>

      </main>
    </>
  )
}
