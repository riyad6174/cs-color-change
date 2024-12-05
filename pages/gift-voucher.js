import Head from 'next/head';


import Section1 from '@/components/GiftVoucher/Section1';
import Section2 from '@/components/GiftVoucher/Section2';
import Layout from '@/components/Layout';
import Slider from "../components/GiftVoucher/Slider";

export default function Home() {


  return (
    <>
      
      <Head>
        <title>
        Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian
        </title>
        <meta
          name="description"
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
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
          content='Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
        />
        <meta
          name='twitter:description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/gift-voucher/gift-voucher-banner.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
        />
        <meta
          property='og:description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/gift-voucher' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/gift-voucher/gift-voucher-banner.jpg'
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

          
          {/* 
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 /> */}


        </Layout>

      </main>
    </>
  )
}
