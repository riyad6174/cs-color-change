import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import StoryImage from '../../public/assets/images/Story.webp';
import LotusImg from '../../public/assets/images/lotus pink.png';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import BookingModal from '../Layout/Modal/BookingModal';
import TrafalgarBookingModal from '../Layout/Modal/TrafalgarBookingModal';

const Story = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  // for Dropdown
  const bookButtonDropdownRef = useRef(null);
  const [trafBookingModal, setTrafBookingModal] = useState(false);
  const [bookButtonDropdownShow, setBookButtonDropdownShow] = useState(false);

  const handleClickOutside = (event) => {
    // if (
    //   bookButtonDropdownRef.current &&
    //   !bookButtonDropdownRef.current.contains(event.target) &&
    //   bookButtonDropdownShow
    // ) {
    //   setBookButtonDropdownShow(!bookButtonDropdownShow);
    // }

    if (
      bookButtonDropdownRef.current &&
      !bookButtonDropdownRef.current.contains(event.target)
    ) {
      setBookButtonDropdownShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookButtonDropdownRef]);

  // end dropdown

  return (
    <div
      ref={ref}
      className='container-fluid d-flex justify-content-center align-items-center px-2 py-5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 text-center d-none d-lg-flex align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              src={StoryImage}
              alt='StoryImage'
            />
          </div>
          <div className='col-12 col-lg-6 px-lg-5 text-center'>
            {/* <Fade bottom delay={100}> */}
            <Image
              className='img-fluid'
              src={LotusImg}
              alt='lotus'
              width={40}
            />
            <h2 className='mt-3 fw-bold title-text'>Our Story</h2>
            <p className='text-warning text-center'>
              LONDON’S FINEST INDIAN RESTAURANTS
            </p>
            <p className='mb-3 text-center body-text'>
              Located at two prestigious sites near Covent Garden – the former
              Holborn Town Hall and the vibrant Trafalgar Square – Colonel Saab
              is a group of distinguished Indian restaurants from Roop Partap
              Choudhary. They offer an exquisite Indian fine dining experience
              that captures the essence of both heritage and innovation. These
              restaurants are inspired by the travel stories of Roop&apos;s
              father, Colonel Manbeer Choudhary, an Indian Army officer, and his
              wife Mrs. Binny Choudhary, journeying across the Indian
              subcontinent. Crafted by Roop as a “love letter” to his family and
              as a tribute to India, each location reflects a unique facet of
              these journeys.
            </p>
            <p className='mb-3 text-center body-text'>
              With old-style jazz music, museum-worthy artwork, and a modern
              interpretation of the flavours and textures of India, Colonel Saab
              at both Holborn and Trafalgar Square offers a contemporary
              perspective with an old soul. They present a nostalgic tapestry of
              memories, aromas, and tastes that transcend the ordinary, bringing
              the heart of India to the centre of London.
            </p>

            {/* <PrimaryButton
              onClick={() => {
                setBookingModal(true);
              }}
            >
              BOOK NOW
            </PrimaryButton> */}

            <div
              className='dropup booking-btn-dropdown me-0 me-lg-4'
              ref={bookButtonDropdownRef}
            >
              <PrimaryButton
                onClick={() => {
                  // setBookingModal(true);
                  setBookButtonDropdownShow(!bookButtonDropdownShow);
                }}
              >
                BOOK NOW
              </PrimaryButton>

              <div
                className={
                  bookButtonDropdownShow
                    ? 'dropup-content d-block d-lg-block border border-2'
                    : 'dropup-content d-none border border-2'
                }
              >
                <a
                  className='custom-cursor justify-content-center border-bottom border-warning'
                  onClick={(e) => {
                    // e.preventDefault();
                    setTrafBookingModal(false);
                    setBookingModal(true);
                  }}
                >
                  High Holborn
                </a>
                <a
                  className='custom-cursor justify-content-center'
                  onClick={(e) => {
                    // e.preventDefault();
                    setBookingModal(false);
                    setTrafBookingModal(true);
                  }}
                >
                  Trafalgar Square
                </a>
              </div>
            </div>

            {/* <img
                  className="img-fluid"
                  src={lotusImgReverse}
                  alt="lotus"
                  width={40}
                /> */}
            {/* </Fade> */}
          </div>
          <div className='col-12 col-lg-6 text-center d-flex d-lg-none align-items-center pt-5 pt-lg-0'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              src={StoryImage}
              alt='StoryImage'
            />
          </div>
        </div>
      </div>
      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}

      {trafBookingModal && (
        <TrafalgarBookingModal
          show={trafBookingModal}
          onHide={() => setTrafBookingModal(!trafBookingModal)}
        />
      )}
    </div>
  );
};

export default Story;
