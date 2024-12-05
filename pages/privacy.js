import Head from 'next/head';


import Layout from '@/components/Layout';
import Section1 from "@/components/Privacy/Section1";
import Section2 from "@/components/Privacy/Section2";


export default function Home() {



  return (
    <>
    
      <Head>
        <title>
        Learn  About Our Data policy and Security at Colonel Saab
        </title>
        <meta
          name="description"
          content="Your Data Security Your privacy matters. Read our privacy policy to understand how we protect your information at Colonel Saab."
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
          content='Learn  About Our Data policy and Security at Colonel Saab'
        />
        <meta
          name='twitter:description'
          content="Your Data Security Your privacy matters. Read our privacy policy to understand how we protect your information at Colonel Saab."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/WhatsOnSlider1.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Learn  About Our Data policy and Security at Colonel Saab'
        />
        <meta
          property='og:description'
          content="Your Data Security Your privacy matters. Read our privacy policy to understand how we protect your information at Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/privacy' />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/WhatsOnSlider1.jpg'
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
          <Section1 />
          <Section2 />
        </Layout>

      </main>
    </>
  )
}
