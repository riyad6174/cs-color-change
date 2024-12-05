import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { BsCheckCircleFill } from 'react-icons/bs';
import Reception from '../../public/assets/images/reception.svg';
import BookingModal from './Modal/BookingModal';
import CookieModal from './Modal/CookieModal';
import TrafalgarBookingModal from './Modal/TrafalgarBookingModal';

const Cookie = () => {
  const [bookingModal, setBookingModal] = useState(false);
  const [cookieModal, setCookieModal] = useState(false);
  const [cookieShow, setCookieShow] = useState(true);
  const [cookies, setCookie] = useCookies(['cookiebar']);

  // for Dropdown
  const bookButtonDropdownRef = useRef(null);
  const [trafBookingModal, setTrafBookingModal] = useState(false);
  const [bookButtonDropdownShow, setBookButtonDropdownShow] = useState(false);

  useEffect(() => {
    if (cookies.cookiebar) {
      setCookieShow(false);
    }
  }, [cookies]);

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
    <>
      <footer
        className={
          cookieShow
            ? 'sticky-bottom w-100 d-none d-sm-flex cookie ps-5 pt-2'
            : 'sticky-bottom w-100 d-none cookie ps-5 pt-2'
        }
        style={{
          zIndex: 1,
        }}
      >
        <BsCheckCircleFill
          className='me-2 text-pink custom-cursor'
          size={25}
          onClick={() => {
            console.log('click');
            setCookie('cookiebar', 'CookieAllowed', {
              path: '/',
              maxAge: 604800,
            });
            setCookieShow(false);
          }}
        />
        <p className='text-light'>
          This website makes use of cookies to enhance browsing experience and
          provide additional functionality.
          <span
            role='button'
            className='text-decoration-underline ms-2'
            onClick={() => {
              setCookieModal(true);
            }}
          >
            Details
          </span>
        </p>
        {cookieModal && (
          <CookieModal
            show={cookieModal}
            onHide={() => setCookieModal(!cookieModal)}
          />
        )}
      </footer>
      <footer className='position-fixed bottom-0 w-100 d-flex justify-content-center d-sm-none mt-auto'>
        <div
          className='dropup mb-booking-btn-dropdown w-100 me-0 me-lg-4'
          ref={bookButtonDropdownRef}
        >
          <button
            type='button'
            className='dropbtn btn w-100 rounded-0 text-light text-center custom-cursor'
            style={{
              backgroundColor: '#f99f49',
            }}
            onMouseOver={(e) => {
              e.target.classList.add(
                // "bg-transparent",
                'border',
                'border-1',
                'border-warning'
              );
            }}
            onMouseOut={(e) => {
              e.target.classList.remove(
                // "bg-transparent",
                'border',
                'border-1',
                'border-warning'
              );
            }}
            onClick={() => {
              // setBookingModal(true);
              setBookButtonDropdownShow(!bookButtonDropdownShow);
            }}
          >
            <Image
              className='img-fluid me-2'
              src={Reception}
              alt='Reception'
              width={20}
              style={{ verticalAlign: 'top' }}
            />
            Book Now
          </button>

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
      </footer>

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
    </>
  );
};

export default Cookie;
