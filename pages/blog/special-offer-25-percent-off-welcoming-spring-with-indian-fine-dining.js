import Head from 'next/head';

import Layout from '@/components/Layout';
import Router from 'next/router';
import { useEffect, useState } from 'react';
// import Section5 from "../components/Menu/Section5";

// Next.js Redirect from / to another page
// https://stackoverflow.com/questions/58173809/next-js-redirect-from-to-another-page

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const { pathname } = Router;

    // you can prevent this behaviour using location.replace
    Router.push('/blog');
    //location.replace("/hello-nextjs")
    setLoaded(true);
  }, []);

  // if(!loaded){
  return <div></div>; //show nothing or a loader
  // }

  return (
    <>
      <Head>
        <title>
          Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian
        </title>

        <meta
          name='description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />
        <meta
          name='keywords'
          content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:title'
          content='Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
        />

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />

        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Layout></Layout>
      </main>
    </>
  );
}
