import Head from 'next/head';

import Layout from '@/components/Layout';
// import Section5 from "../components/Menu/Section5";

import BookingModal from '@/components/Layout/Modal/BookingModal';
import Slider1 from '@/public/assets/images/LocationSlider.jpg';

import Image from 'next/image';
import { useState } from 'react';

import GalleryModal from '@/components/Layout/Modal/GalleryModal';
import ImageGallery from 'react-image-gallery';
import Gallery from 'react-photo-gallery';
import TrafalgarBookingModal from '@/components/Layout/Modal/TrafalgarBookingModal';

export default function Index() {
  const [bookingModal, setBookingModal] = useState(false);
  const [trafBookingModal, setTrafBookingModal] = useState(false);

  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const trafalgarImages = [
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab1.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab2.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab3.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab4.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab5.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab6.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab7.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab8.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab9.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab10.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab11.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab12.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab13.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab14.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab15.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab16.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab17.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab18.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/trafalgarGallery/Colonelsaab19.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
  ];

  // const imageArray = [
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare1.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare2.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare3.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare4.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare5.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare6.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare7.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare8.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare9.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  //   {
  //     original:
  //       '/assets/images/gallery/trafalgarGallery/colonelsaab-trafalgarsquare10.jpg',
  //     category: 'colonelsaab-trafalgarsquare',
  //     width: 4,
  //     height: 3,
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Colonel Saab, Trafalgar Square, London</title>
        <meta
          name='description'
          content="Experience the charm of Colonel Saab's in Trafalgar Square, London. Join us for a culinary adventure in the heart of the city, where every bite is a delight."
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
          content='Colonel Saab, Trafalgar Square, London'
        />
        <meta
          name='twitter:description'
          content="Experience the charm of Colonel Saab's in Trafalgar Square, London. Join us for a culinary adventure in the heart of the city, where every bite is a delight."
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/LocationSlider.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Colonel Saab, Trafalgar Square, London'
        />
        <meta
          property='og:description'
          content="Experience the charm of Colonel Saab's in Trafalgar Square, London. Join us for a culinary adventure in the heart of the city, where every bite is a delight."
        />

        <meta
          property='og:url'
          content='https://colonelsaab.co.uk/locations/trafalgarsquare-london'
        />
        <meta
          property='og:image'
          content='https://colonelsaab.co.uk/assets/images/LocationSlider.jpg'
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
          {/* header image section */}
          <div className='vh-50'>
            <Image
              className='img-fluid'
              src={Slider1}
              alt='First slide'
              style={{ maxHeight: '70vh', objectFit: 'cover', width: '100%' }}
            />
          </div>

          {/* content section */}
          <div className='container-fluid px-4 py-0 p-lg-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='mt-3 text-success'>
                  Colonel Saab, Trafalgar Square, London
                </h1>
                <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
                  Colonel Saab, newly opened in Trafalgar Square after its
                  Holborn success, offers a mix of traditional Indian flavours
                  and modern culinary techniques. The menu showcases aromatic
                  signature dishes and innovative starters, highlighting
                  culinary excellence. The ambiance, inspired by the Choudhary
                  family's Indian journeys, features a bar, lounge, dining area
                  with Firozabad chandeliers, a mezzanine, and two private
                  dining rooms. Restaurateur Roop Partap Choudhary has created a
                  space celebrating Indian cuisine and heritage, providing a
                  welcoming atmosphere for guests to enjoy India's
                  culinary art in London.
                </p>
              </div>
            </div>
          </div>

          {/* map section */}
          <div className='container mb-4'>
            <div className='row'>
              <div className='col-12 col-lg-6 '>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.796352072433!2d-0.126256!3d51.5095634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053be296c895%3A0x1f708847cc1e5fbd!2sColonel%20Saab%20Trafalgar%20Square!5e0!3m2!1sen!2sbd!4v1716117644161!5m2!1sen!2sbd'
                  width='100%'
                  height='100%'
                  style={{ border: 0 }}
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe>

                {/*               
                  <GoogleMapReact
                    defaultCenter={defaultMap.center}
                    defaultZoom={defaultMap.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact> 
                */}
              </div>
              <div className='col-12 py-4 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center'>
                <p className='text-center'>
                  <span className='fw-bold'> Trafalgar Square </span>
                  <br />
                  42 William IV St,
                  <br />
                  London WC2N 4DD
                </p>

                <a
                  className='d-inline-block text-dark text-center    custom-cursor'
                  // title="Directions to Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab, Vegan and Vegetarian"
                  rel='noopener noreferrer'
                  href='https://www.google.com/maps/place/Colonel+Saab+Trafalgar+Square/@51.5095634,-0.126256,17z/data=!3m1!4b1!4m6!3m5!1s0x4876053be296c895:0x1f708847cc1e5fbd!8m2!3d51.5095634!4d-0.126256!16s%2Fg%2F11kqnbxh2l?entry=ttu'
                  target='_blank'
                >
                  Get Directions
                </a>

                <p className='text-center'>
                  <a
                    className='text-dark    custom-cursor'
                    title='Email Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                    href='mailto:reservations@colonelsaab.co.uk?subject=Reservation enquiry from website'
                  >
                    reservations@colonelsaab.co.uk
                  </a>
                  <span className='d-inline'> | 020 8016 6800</span>
                </p>

                <hr className='text-center ' />
                <p className='text-center fw-bold'>Opening Hours</p>
                <p className='text-center '>
                  Monday to Sunday <br />
                  12 Noon - 9.45 PM
                  <br />
                  {/* Afternoon Tea: 3 PM - 4:30 PM
                  <br/> */}
                  {/* Dinner: 5 PM - 10.15pm */}
                </p>
              </div>
            </div>
          </div>

          {/* book now button */}
          <div className='col-12 pb-4 text-center'>
            <button
              type='button'
              className='btn mt-3 text-light border border-warning rounded-0 custom-cursor'
              style={{
                backgroundColor: '#277977',
              }}
              onMouseOver={(e) => {
                e.target.classList.add('bg-transparent', 'text-success');
              }}
              onMouseOut={(e) => {
                e.target.classList.remove('bg-transparent', 'text-success');
              }}
              onClick={() => {
                setTrafBookingModal(true);
              }}
            >
              MAKE A BOOKING
            </button>
          </div>

          {/* gallery section */}
          <Gallery
            // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
            photos={trafalgarImages.map(function (item) {
              delete item.category;
              item.src = item.original;
              return item;
            })}
            margin={4}
            onClick={(event, { index }) => {
              setGalleryModal(true);
              setGalleryIndex(index);
            }}
          />

          {galleryModal && (
            <GalleryModal
              show={galleryModal}
              onHide={() => setGalleryModal(!galleryModal)}
            >
              <ImageGallery
                // items={filteredImageArray
                items={trafalgarImages
                  // .slice(0, slicedIndex)
                  .map(function (item) {
                    delete item.category;
                    return item;
                  })}
                showFullscreenButton={false}
                showThumbnails={false}
                showPlayButton={false}
                startIndex={galleryIndex}
              />
            </GalleryModal>
          )}

          {/* {bookingModal && (
          <BookingModal
            show={bookingModal}
            onHide={() => setBookingModal(!bookingModal)}
          />
        )} */}

          {trafBookingModal && (
            <TrafalgarBookingModal
              show={trafBookingModal}
              onHide={() => setTrafBookingModal(!trafBookingModal)}
            />
          )}
        </Layout>
      </main>
    </>
  );
}
