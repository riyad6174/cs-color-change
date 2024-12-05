import Head from 'next/head';


import Layout from '@/components/Layout';

import Section1 from "../../components/Blog/Section1";
import Section2 from "../../components/Blog/Section2";
import Slider from "../../components/Blog/Slider";


export default function Home() {


  return (
    <>
 
      <Head>
        <title>
        Welcome to London's  Colonel Saab's vibrant blog space!
        </title>
        <meta
          name="description"
          content="Discover Colonel Saab's world through our new blogs, from festive delights to culinary adventures, each story adds a special touch to your dining experience."
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
          content="Welcome to London's  Colonel Saab's vibrant blog space!"
        />
        <meta
          name='twitter:description'
          content="Discover Colonel Saab's world through our new blogs, from festive delights to culinary adventures, each story adds a special touch to your dining experience."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/WhatsOnSlider1.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content= "Welcome to London's  Colonel Saab's vibrant blog space!"
        />
        <meta
          property='og:description'
          content="Discover Colonel Saab's world through our new blogs, from festive delights to culinary adventures, each story adds a special touch to your dining experience."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/blog' />
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
