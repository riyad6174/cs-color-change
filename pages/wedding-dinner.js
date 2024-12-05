import Head from 'next/head';


import Layout from '@/components/Layout';
import Section1 from '@/components/WeddingDinner/Section1';
import Section2 from '@/components/WeddingDinner/Section2';
import Section3 from '@/components/WeddingDinner/Section3';
import Section4 from '@/components/WeddingDinner/Section4';
import Slider from '@/components/WeddingDinner/Slider';





export default function Home() {
  return (
    <>
    
      <Head>
        <title>
        The Perfect Engagement and Wedding Dinner at Mem Saab's Private Dining Rooms 
        </title>
        <meta
          name="description"
          content={`Celebrate in style at Mem Saab's private rooms. For the perfect engagement and wedding dinner with bespoke Indian cuisine, unique décor, and unmatched service `}
        />
        <meta name="keywords" content="wedding dinner ,indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab." />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content="The Perfect Engagement and Wedding Dinner at Mem Saab's Private Dining Rooms"
        />
        <meta
          name='twitter:description'
          content={`Celebrate in style at Mem Saab's private rooms. For the perfect engagement and wedding dinner with bespoke Indian cuisine, unique décor, and unmatched service `}
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/images/weddingDinnerImages/Colsaabweddingsetup3.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content="The Perfect Engagement and Wedding Dinner at Mem Saab's Private Dining Rooms"
        />
        <meta
          property='og:description'
          content="Celebrate in style at Mem Saab's private rooms. For the perfect engagement and wedding dinner with bespoke Indian cuisine, unique décor, and unmatched service "
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/wedding-dinner' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/images/weddingDinnerImages/Colsaabweddingsetup3.jpg'
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
   
        </Layout>

      </main>
    </>
  )
}
