import Head from 'next/head';


import Layout from '@/components/Layout';

import Section1 from "../../components/Blog1/Section1";
import Section2 from "../../components/Blog1/Section2";
import Slider from "../../components/Blog1/Slider";


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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width" />
        <meta name="generator" content="pgwd" />
        <meta name="twitter:card" content="summary" />
                <meta
          name="twitter:title"
          content="Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian"
        />

        <meta name="facebook-domain-verification" content="7s3po0udvppgl9yiuutxmn6so4e17w" />
        
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main >
        <Layout>
            {/* carousel */}
            <Slider />

            {/* section 1 */}
            <Section1 />

            {/* section 2 */}
            <Section2 />
        </Layout>
      </main>
    </>
  )
}
