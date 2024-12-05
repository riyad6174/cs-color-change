import Layout from '@/components/Layout';
import { Inter } from '@next/font/google';
import Head from 'next/head';

import MenuSection from '../components/Homepage/MenuSection';
import Section1 from '../components/Homepage/Section1';
import Section4 from '../components/Homepage/Section4';
import Story from '../components/Homepage/Story';

const inter = Inter({ subsets: ['latin'] });

import PrivateDining from '@/components/Homepage/PrivateDining';
import Section7 from '@/components/Homepage/Section7';
import InstaFeedGallery from '@/components/Instagram/InstaFeedGallery';

import HomeLocation from '@/components/Homepage/HomeLocation';
import IntroVideo from '@/components/Homepage/IntroVideo2';
import BookingModal from '@/components/Layout/Modal/BookingModal';
import ChristmasModal from '@/components/Layout/Modal/ChristmasModal';
import { useState } from 'react';
import { useEffect } from 'react';
import OfferModal from '@/components/Layout/Modal/OfferModal';
// import Brand from "../components/Homepage/Brand";

export default function Home() {
  const [isIntroFinished, setisIntroFinished] = useState(false);
  const [videoFinish, setVideoFinish] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // const videoFinish = true;
  const [christmasModal, setChristmasModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const instaToken =
    'IGQWROTTJCOVF2N0pzMGtXS0kyakY4R0V6ZAnd5V1BhdXdIV08tNF8zZAFdhRVA5cmRiRl9WQVlzYnNxdHVJQzR0MjJ4WUpISno0STlsMG9YeFB5ZAW41dGxyc2loV2hnMW55VFU4Mjg4LXVaa0FVZAENhQ3YzWENOTXMZD';

  const [showPopUp, setShowPopUp] = useState(false);

  // useEffect(() => {
  //   document.documentElement.scrollTo({
  //     top: 0,
  //     left: 0,
  //     // behavior: "instant", // Optional if you want to skip the scrolling animation
  //   });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowPopUp(false);
    }, 2000);
  }, []);

  return (
    <>
      <Head>
        <title>Home | Authentic Indian Cuisine in London</title>
        <meta
          name='description'
          content='Colonel Saab Discover the flavors of India at Colonel Saab. Join us for a culinary journey in the heart of London.'
        />
        <meta
          name='keywords'
          content="indian restaurant, London, veganuary,  valentinesday, anik99antooba, Valentine's at Colonel Saab, Valentines at Colonel Saab."
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content='  Home | Authentic Indian Cuisine in London'
        />
        <meta
          name='twitter:description'
          content='Colonel Saab Discover the flavors of India at Colonel Saab. Join us for a culinary journey in the heart of London.'
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/Elephant2.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='   Home | Authentic Indian Cuisine in London'
        />
        <meta
          property='og:description'
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        />

        <meta property='og:url' content='https://colonelsaab.co.uk' />
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
      <main>
        <IntroVideo
          isIntroFinished={isIntroFinished}
          setisIntroFinished={setisIntroFinished}
          setShowContent={setShowContent}
          setChristmasModal={setChristmasModal}
        />

        {showContent && (
          <>
            <Layout>
              <Section1 />

              <HomeLocation />

              <Story />

              <Section4 />
              <MenuSection />

              <PrivateDining />
              <Section7 />
              {/* <InstaFeeds
                    token={instaToken}
                    limit={6}
                  /> */}

              <InstaFeedGallery token={instaToken} limit={6} />
            </Layout>

            {/* {christmasModal && (
                    <ChristmasModal
                      show={christmasModal}
                      onHide={() => setChristmasModal(!christmasModal)}
                      setBookingModal={setBookingModal}
                    />
                  )} */}

            <OfferModal
              showPopUp={showPopUp}
              setShowPopUp={setShowPopUp}
              className={` ${showPopUp ? 'show-modal' : 'hide-modal'}  `}
            />
            {/* {christmasModal && (
              <ChristmasModal
                show={christmasModal}
                onHide={() => setChristmasModal(!christmasModal)}
                setBookingModal={setBookingModal}
              />
       
            )} */}
            {bookingModal && (
              <BookingModal
                show={bookingModal}
                onHide={() => setBookingModal(!bookingModal)}
              />
            )}
          </>
        )}
      </main>
    </>
  );
}
