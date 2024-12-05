import Head from 'next/head';


import Layout from '@/components/Layout';
import Section1 from "@/components/ReservationsPolicy/Section1";
import Section2 from "@/components/ReservationsPolicy/Section2";


export default function Home() {



  return (
    <>
     <Head>
        <title>
        Reservations Policy | Colonel Saab
        </title>
        <meta
          name="description"
          content="Booking Guidelines Learn about our reservation policy and secure your spot for an unforgettable Indian dining experience."
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
          content='Reservations Policy | Colonel Saab'
        />
        <meta
          name='twitter:description'
          content="Booking Guidelines Learn about our reservation policy and secure your spot for an unforgettable Indian dining experience."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/PrivateDiningSlider.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=' Reservations Policy | Colonel Saab'
        />
        <meta
          property='og:description'
          content="Booking Guidelines Learn about our reservation policy and secure your spot for an unforgettable Indian dining experience."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/reservations-policy' />
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
      <main >

        <Layout>
          <Section1 />
          <Section2 />
        </Layout>

      </main>
    </>
  )
}
