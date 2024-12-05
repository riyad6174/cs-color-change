import Head from 'next/head';

import Layout from '@/components/Layout';
import ColonelSaabDrawingImg from '../public/assets/images/home/ColonelSaabLocation1.png';
import ColonelSaabDrawingImg2 from '../public/assets/images/home/Trafalgar.jpg';
import { useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import Gallery from 'react-photo-gallery';
import GalleryModal from '../components/Layout/Modal/GalleryModal';
import Image from 'next/image';
import TrafalgarGalleryModal from '@/components/galleryModal/TrafalgarGalleryModal';
import HolbornGalleryModal from '@/components/galleryModal/HolbornGalleryModal';
// import InfiniteScroll from "react-infinite-scroll-component";

// import RestaurantCoventGarden9 from "../public/assets/images/shopimages/restaurant-covent-garden-9.webp";

export default function Home() {
  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  // const [slicedIndex, setSlicedIndex] = useState(10);
  const [trafalgarActive, setTrafalgarActive] = useState(false);
  const [holbornActive, setHolbornActive] = useState(false);
  const ref = useRef();

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

  const imageArray = [
    // {
    //   original: 'assets/images/gallery/1.jpg',
    //   category: 'food',
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   original: 'assets/images/gallery/2.jpg',
    //   category: 'food',
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   original: 'assets/images/gallery/3.jpg',
    //   category: 'food',
    //   width: 4,
    //   height: 3,
    // },
    // {
    //   original: 'assets/images/gallery/4.jpg',
    //   category: 'food',
    //   width: 4,
    //   height: 3,
    // },

    {
      original: 'assets/images/gallery/25.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/26.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },

    {
      original: 'assets/images/gallery/gallery_images1.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images2.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images3.jpg',
      category: 'food',
      width: 5,
      height: 4,
    },
    {
      original: 'assets/images/gallery/gallery_images4.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images5.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images6.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images7.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images8.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images9.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images10.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images11.jpg',
      category: 'food',
      width: 2,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images12.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images13.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images14.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images15.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images16.jpg',
      category: 'food',
      width: 2,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images17.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images18.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images19.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images20.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images21.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images22.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images23.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images24.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images25.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images26.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images27.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images28.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images29.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images30.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images31.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images32.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images33.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images34.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images35.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images36.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images37.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images38.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images39.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images40.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images41.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images42.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images43.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images44.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images45.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images46.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images47.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images48.jpg',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/gallery/gallery_images49.jpg',
      category: 'food',
      width: 3,
      height: 3,
    },
  ];

  const imageArray2 = [
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-13.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-4.webp',
      category: 'drinks',
      width: 4,
      height: 6,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-16.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-6.webp',
      category: 'interior',
      width: 2,
      height: 3,
    },
    // {
    //   original:
    //     "https://ik.imagekit.io/sbj8bzmjnl4/colonelsaab/shopimages/products/normal/restaurant-covent-garden-14.jpg?tr=f-webp,q-87,w-435,fo-custom",
    //   category: "food",
    //   width: 5,
    //   height: 3,
    // },
    {
      original:
        'assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-11.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-10.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-bar-covent-garden-10.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-1.webp',
      category: 'food',
      width: 4,
      height: 4,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-5.webp',
      category: 'food',
      width: 4,
      height: 8,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-bar-covent-garden-9.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-2.webp',
      category: 'interior',
      width: 4,
      height: 8,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-6.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-4.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-1.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-9.webp',
      category: 'interior',
      width: 4,
      height: 6,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-3.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-8.webp',
      category: 'food',
      width: 4,
      height: 6,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-3.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-2.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-4.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-6.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-7.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-7.webp',
      category: 'interior',
      width: 4,
      height: 6,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-1.webp',
      category: 'interior',
      width: 4,
      height: 6,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-bar-covent-garden-11.webp',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-5.webp',
      category: 'interior',
      width: 4,
      height: 4,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-10.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-15.webp',
      category: 'drinks',
      width: 4,
      height: 6,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-2.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-9.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-5.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-3.webp',
      category: 'drinks',
      width: 4,
      height: 6,
    },
    {
      original: 'assets/images/shopimages/private-dining-room-holborn-8.webp',
      category: 'private-dining',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-6.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/indian-best-restaurant-covent-garden-7.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
    {
      original: 'assets/images/shopimages/restaurant-covent-garden-17.webp',
      category: 'interior',
      width: 4,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/afternoon-tea-holborn-covent-garden-bloomsbury.webp',
      category: 'interior',
      width: 5,
      height: 3,
    },
    {
      original:
        'assets/images/shopimages/mothers-day-menu-covent-garden-holborn-bloomsbury.webp',
      category: 'food',
      width: 4,
      height: 3,
    },
  ];

  const handleGallaryActive = (activeBtn) => {
    if (activeBtn === 'holborn') {
      setHolbornActive(true);
      setTrafalgarActive(false);
    } else if (activeBtn === 'trafalgar') {
      setHolbornActive(false);
      setTrafalgarActive(true);
    }
  };

  return (
    <>
      <Head>
        <title>
          Exploring Colonel Saab's Vibrant Indian Cuisine Food Gallery
        </title>
        <meta
          name='description'
          content='Visual Feast of Indian Cuisine Delight in the visuals of our exquisite dishes and vibrant atmosphere. Explore our gallery at Colonel Saab.'
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
          content="Exploring Colonel Saab's Vibrant Indian Cuisine Food Gallery"
        />
        <meta
          name='twitter:description'
          content='Visual Feast of Indian Cuisine Delight in the visuals of our exquisite dishes and vibrant atmosphere. Explore our gallery at Colonel Saab.'
        />
        <meta
          name='twitter:image'
          content='https://colonelsaab.co.uk/assets/images/WhatsOnSlider1.jpg'
        />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content=" Exploring Colonel Saab's Vibrant Indian Cuisine Food Gallery"
        />
        <meta
          property='og:description'
          content='Visual Feast of Indian Cuisine Delight in the visuals of our exquisite dishes and vibrant atmosphere. Explore our gallery at Colonel Saab.'
        />

        <meta property='og:url' content='https://colonelsaab.co.uk/gallery' />
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
      <main>
        <Layout>
          <div className='container-fluid px-5 py-5'>
            <div className='row'>
              <div className='col-12 text-center'>
                <h1 className='mt-3 text-warning'>Gallery</h1>
                <p>Food, drink and interior photos.</p>
                <p>
                  Colonel Saab's Gallery: A Visual Feast of Culinary Artistry
                  and Ambiance. Immerse yourself in a captivating collection of
                  images that showcase the essence of our exquisite dining
                  experience. From the vibrant colors of our delectable dishes
                  to the enchanting ambiance of our spaces, each photo tells a
                  story of culinary craftsmanship. Explore the artistry behind
                  every dish and the warm, inviting atmosphere that defines
                  Colonel Saab's. Whether you're reminiscing about a past visit
                  or discovering the allure for the first time, our gallery is a
                  celebration of the moments, flavors, and aesthetics that make
                  dining with us truly special.
                </p>
              </div>
            </div>
          </div>

          <div
            ref={ref}
            className='container-fluid d-flex justify-content-center align-items-center px-2  mb-4'
          >
            <div className='container'>
              <div className='row'>
                {/* <div className='col-12 mb-4 text-center'>
                  <h2 className=' fw-bold text-success'>Our Locations</h2>
                </div> */}
                <div className='col-6 col-lg-6 text-center  d-flex align-items-center flex-column'>
                  <div onClick={() => handleGallaryActive('holborn')}>
                    <Image
                      style={{ cursor: 'pointer' }}
                      className='img-fluid pe-auto'
                      src={ColonelSaabDrawingImg}
                      alt='Holborn Hall, London'
                    />
                  </div>

                  <div class=' mt-1  text-decoration-none text-success   '>
                    <p className='h5'>Holborn Hall, London</p>
                  </div>
                </div>
                <div className='col-6 col-lg-6 text-center  d-flex align-items-center flex-column'>
                  <div onClick={() => handleGallaryActive('trafalgar')}>
                    <Image
                      style={{ cursor: 'pointer' }}
                      className='img-fluid pe-auto'
                      src={ColonelSaabDrawingImg2}
                      alt='Holborn Hall, London'
                    />
                  </div>

                  <div class=' mt-1 text-decoration-none text-success   '>
                    <p className='h5'>Trafalgar Square, London</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {holbornActive && (
            // <Gallery
            //   // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
            //   photos={imageArray?.map(function (item) {
            //     delete item?.category;
            //     item.src = item?.original;
            //     return item;
            //   })}
            //   margin={4}
            //   onClick={(event, { index }) => {
            //     setGalleryModal(true);
            //     setGalleryIndex(index);
            //   }}
            // />
            <HolbornGalleryModal
              imageArray={imageArray && imageArray}
              galleryIndex={galleryIndex}
              galleryModal={galleryModal}
              setGalleryIndex={setGalleryIndex}
              setGalleryModal={setGalleryModal}
            />
          )}
          {trafalgarActive && (
            // <Gallery
            //   // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
            //   photos={trafalgarImages?.map(function (item) {
            //     delete item?.category;
            //     item.src = item?.original;
            //     return item;
            //   })}
            //   margin={4}
            //   onClick={(event, { index }) => {
            //     setGalleryModal(true);
            //     setGalleryIndex(index);
            //   }}
            // />
            <TrafalgarGalleryModal
              trafalgarImages={trafalgarImages && trafalgarImages}
              galleryIndex={galleryIndex}
              galleryModal={galleryModal}
              setGalleryIndex={setGalleryIndex}
              setGalleryModal={setGalleryModal}
            />
          )}

          {/* {galleryModal && (
            // <GalleryModal
            //   show={galleryModal}
            //   onHide={() => setGalleryModal(!galleryModal)}
            // >
            //   <ImageGallery
            //     // items={filteredImageArray
            //     items={
            //       holbornActive
            //         ? imageArray
            //         : trafalgarImages
            //             // .slice(0, slicedIndex)
            //             .map(function (item) {
            //               delete item?.category;
            //               return item;
            //             })
            //     }
            //     showFullscreenButton={false}
            //     showThumbnails={false}
            //     showPlayButton={false}
            //     startIndex={galleryIndex}
            //   />
            // </GalleryModal>
          
          )} */}
        </Layout>
      </main>
    </>
  );
}
