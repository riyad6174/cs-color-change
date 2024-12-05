import Head from "next/head";

import Layout from "@/components/Layout";
import Section1 from "../components/PrivateDining/Section1";
import Section2 from "../components/PrivateDining/Section2";
import Section3 from "../components/PrivateDining/Section3";
import Section4 from "../components/PrivateDining/Section4";
import Slider from "../components/PrivateDining/Slider";

export default function Home() {
  return (
    <>
   <Head>
        <title>
        Private Dining Rooms | Colonel Saab
        </title>
        <meta
          name="description"
          content="Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab."
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
          content='Private Dining Rooms | Colonel Saab'
        />
        <meta
          name='twitter:description'
          content="Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/PrivateDiningSlider.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Private Dining Rooms | Colonel Saab'
        />
        <meta
          property='og:description'
          content="Intimate Event Spaces Host your special events in our elegant private dining rooms. Create memorable moments at Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/private-dining-rooms' />
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
        </Layout>
      </main>
    </>
  );
}
