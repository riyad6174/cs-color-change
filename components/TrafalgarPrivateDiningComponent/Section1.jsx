import Link from 'next/link';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import BookingModal from '../Layout/Modal/BookingColonelModal';
import TrafalgarBookingModal from '../Layout/Modal/TrafalgarBookingModal';
import { useEffect, useRef, useState } from 'react';

const Section1 = () => {
  const ref = useRef();

  const bookButtonDropdownRef = useRef(null);
  const [trafBookingModal, setTrafBookingModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);

  const [bookButtonDropdownShow, setBookButtonDropdownShow] = useState(false);

  const handleClickOutside = (event) => {
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

  return (
    <div
      ref={ref}
      className='container-fluid vh-50 px-4 py-0 p-lg-5 mt-4 mt-md-1'
    >
      <div className='row text-center'>
        <h1 className='mt-3 text-success'>Trafalgar Square Private Dining</h1>
        <h5 style={{ color: 'gray' }}>Trafalgar Square, 42 William IV St</h5>
        <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mt-3 mt-md-4'>
          Located in the vibrant heart of Central London, Colonel Saab Trafalgar
          Square is the premier choice for those seeking the ultimate location
          for private dining. Led by the esteemed restaurateur Roop Partap
          Choudhary, the venue is a celebration of Indian cuisine and heritage,
          offering a welcoming environment for guests. The venue is perfect for
          exclusive private dining parties, corporate dining events, large group
          birthday bookings, and other celebratory events, with several private
          and semi-private dining options.
        </p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-2 gap-md-4'>
        <a href='#enquire' target='_self' className='custom-cursor'>
          <PrimaryButton className='mt-3 text-uppercase'>
            Enquire now
          </PrimaryButton>
        </a>
        <div
          className='dropup booking-btn-dropdown mt-3 me-0 '
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
        <Link href='/menu' className='custom-cursor'>
          <PrimaryButton className='mt-3 text-uppercase'>
            view menus
          </PrimaryButton>
        </Link>
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

export default Section1;
