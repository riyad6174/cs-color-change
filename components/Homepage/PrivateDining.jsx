import { useEffect, useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import BookingModal from '../Layout/Modal/BookingModal';
// import YellowElephant from "../../public/assets/images/yellowElephant.png";
import Image from 'next/image';
import PrivateDiningPhoto from '../../public/assets/images/privateDining.webp';
import TrafalgarBookingModal from '../Layout/Modal/TrafalgarBookingModal';

const PrivateDining = () => {
  const ref = useRef();
  const [bookingModal, setBookingModal] = useState(false);
  const isVisible = useOnScreen(ref);

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
      className='container-fluid d-flex align-items-center justify-content-center px-2 py-3 py-lg-5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 px-lg-5 text-center'>
            <Fade bottom delay={100}>
              {/* <img
                className="img-fluid"
                src={YellowElephant}
                alt="YellowElephant"
                width={150}
              /> */}
              <h2 className='mt-3 fw-bold title-text'>
                Private Dining Rooms
                <br />
                Central London
              </h2>
              <p className='text-warning'>EVENTS FROM 10 - 130 PEOPLE</p>
              <p className='mt-3 text-center body-text'>
                Colonel Saab warmly invites you to experience private dining
                like no other, at both our Holborn and Trafalgar Square
                locations, situated near the vibrant heart of Covent Garden and
                within easy reach of central London landmarks. Our culinary team
                is dedicated to providing an array of options that cater to your
                preferences, be it for a group gathering, a semi-private affair,
                or an exclusive private dining event.
                <br />
                <br />
                We welcome groups ranging from 10 to 130 guests, ensuring that
                each occasion, from celebratory gatherings with friends and
                family to crucial business meetings, is met with the perfect
                backdrop and ambience. Our private dining options are designed
                to offer both intimacy and sophistication, making every meal an
                unforgettable experience. With our locations in the heart of
                London, Colonel Saab is the ideal destination for private dining
                that combines the essence of Indian culture with the elegance of
                London’s dining scene.
                <br />
                <br />
                {/*                 
                <PrimaryButton
                  onClick={() => {
                    setBookingModal(true);
                  }}
                >
                  MAKE A BOOKING
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
                    MAKE A BOOKING
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
                <br />
                <br />
                <span style={{ fontSize: '0.8rem' }}>
                  Exclusive hire is also available for larger parties up to 130
                  guests, email our team&nbsp;
                  <a
                    className='text-decoration-none text-warning'
                    title='Email restaurant Covent Garden'
                    href='mailto:reservations@colonelsaab.co.uk'
                  >
                    reservations@colonelsaab.co.uk
                  </a>
                </span>
                {/* <br />
                Our team of chefs would like to welcome you to eat in one of our
                four dining areas; the ground floor restaurant, the main arena,
                the mezzanine and our two private dining rooms. */}
              </p>
              {/* <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
              </PrimaryButton> */}
            </Fade>
          </div>
          <div className='col-12 col-lg-6 pt-5 pt-lg-0 d-flex align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              src={PrivateDiningPhoto}
              alt='PrivateDining'
            />
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
      </div>
    </div>
  );
};

export default PrivateDining;
