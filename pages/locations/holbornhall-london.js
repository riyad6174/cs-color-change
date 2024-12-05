import Head from 'next/head';

import Layout from '@/components/Layout';
// import Section5 from "../components/Menu/Section5";

import BookingModal from '@/components/Layout/Modal/BookingModal';
import Slider1 from '@/public/assets/images/MenuSlider1.jpg';

import Image from 'next/image';
import { useState } from 'react';

import GalleryModal from '@/components/Layout/Modal/GalleryModal';
import ImageGallery from 'react-image-gallery';
import Gallery from 'react-photo-gallery';

export default function Index() {
  const [bookingModal, setBookingModal] = useState(false);

  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const imageArray = [
    {
      original: '/assets/images/gallery/gallery_images1.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images2.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images3.jpg',
      category: 'food',
      width: 5,
      height: 4,
    },
    {
      original: '/assets/images/gallery/gallery_images4.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images5.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images6.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images7.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: '/assets/images/gallery/gallery_images8.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
  ];

  return (
    <>
      <Head>
        <title>Colonel Saab, Holborn Hall, London</title>

        <meta
          name='description'
          content="Visit Colonel Saab's in Holborn Hall. Discover a culinary haven where flavors, ambiance, and hospitality come together for a delightful dining experience."
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
        <Layout>
          {/* header image section */}
          <div className='vh-50'>
            <Image className='img-fluid' src={Slider1} alt='First slide' />
          </div>

          {/* content section */}
          <div className='container-fluid px-4 py-0 p-lg-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='mt-3 text-success'>
                  Colonel Saab, Holborn Hall, London
                </h1>
                <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
                  Located at the former Holborn Town Hall in the heart of
                  Central London, Colonel Saab is a modern Indian restaurant
                  from Roop Partap Choudhary, offering a smart Indian fine
                  dining experience. The restaurant is inspired by the travel
                  tales of Roop&apos;s father, an Indian Army officer Col.
                  Manbeer Choudhary and his wife Mrs. Binny Choudhary across the
                  Indian subcontinent, created by Roop as a “love letter” to his
                  family, as well as homage to India.
                </p>
                <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2'>
                  With old-style jazz music, museum worthy artwork and a modern
                  twist on the flavours and textures of India, Colonel Saab is a
                  contemporary viewpoint with an old soul, and a nostalgic
                  palate of memories, aromas and flavours
                </p>
              </div>
            </div>
          </div>

          {/* map section */}
          <div className='container mb-4'>
            <div className='row'>
              <div className='col-12 col-lg-6 '>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9931.182346771833!2d-0.1226498!3d51.5169661!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b02dcfc579d%3A0x16101e9ce7039ed3!2sColonel%20Saab!5e0!3m2!1sen!2sbd!4v1687435985566!5m2!1sen!2sbd'
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
                </GoogleMapReact> */}
              </div>
              <div className='col-12 col-lg-6 text-center text-lg-start d-flex flex-column justify-content-center'>
                <p className='text-center'>
                  <span className='fw-bold'> Holborn Town Hall</span>
                  <br />
                  193-197 High Holborn,
                  <br />
                  London, WC1V 7BD
                </p>

                <a
                  className='d-inline-block text-dark text-center    custom-cursor'
                  // title="Directions to Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab, Vegan and Vegetarian"
                  rel='noopener noreferrer'
                  href='https://www.google.com/maps/place/Colonel+Saab/@51.5169661,-0.1248385,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b02dcfc579d:0x16101e9ce7039ed3!8m2!3d51.5169661!4d-0.1226498'
                  target='_blank'
                >
                  Get Directions
                </a>

                <p className='text-center'>
                  <a
                    className=' text-dark  custom-cursor'
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
                  Monday to Saturday
                  <br />
                  Bar: 12 Noon - 11:30 PM
                  <br />
                  Lunch: 12 Noon - 3 PM
                  <br />
                  Afternoon Tea: 3 PM - 4:30 PM
                  <br />
                  Dinner: 6 PM - 10 PM <br />
                  Sunday ( 2nd June onwards )<br /> Dinner : 5 PM - 9 PM
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
                setBookingModal(true);
              }}
            >
              MAKE A BOOKING
            </button>
          </div>

          {/* gallery section */}
          <Gallery
            // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
            photos={imageArray.map(function (item) {
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
                items={imageArray
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

          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </Layout>
      </main>
    </>
  );
}
