import Head from 'next/head';


import Layout from '@/components/Layout';
import Section1 from "@/components/Terms/Section1";
import Section2 from "@/components/Terms/Section2";


export default function Home() {



  return (
    <>
    <Head>
        <title>
        Terms & Conditions | Colonel Saab
        </title>
        <meta
          name="description"
          content="Website Policies Review our terms and conditions to ensure a smooth experience while browsing Colonel Saab's website."
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
          content='Terms & Conditions | Colonel Saab'
        />
        <meta
          name='twitter:description'
          content="Website Policies Review our terms and conditions to ensure a smooth experience while browsing Colonel Saab's website."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Terms & Conditions | Colonel Saab'
        />
        <meta
          property='og:description'
          content="Website Policies Review our terms and conditions to ensure a smooth experience while browsing Colonel Saab's website."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/terms' />
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
      <main >

        <Layout>
          <Section1 />
          <Section2 />
        </Layout>

      </main>
    </>
  )
}
