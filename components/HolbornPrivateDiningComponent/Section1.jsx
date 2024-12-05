import Link from 'next/link';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import { useEffect, useRef, useState } from 'react';
import TrafalgarBookingModal from '../Layout/Modal/TrafalgarBookingModal';
import BookingModal from '../Layout/Modal/BookingColonelModal';

const Section1 = () => {
  const ref = useRef();

  const bookButtonDropdownRef = useRef(null);
  const [trafBookingModal, setTrafBookingModal] = useState(false);
  const [bookingModal, setBookingModal] = useState(false);

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
  return (
    <div
      ref={ref}
      className='container-fluid vh-50 px-4 py-0 p-lg-5 mt-4 mt-md-2'
    >
      <div className='row text-center'>
        <h1 className='mt-3 text-success'>Holborn Private Dining</h1>
        <h5 style={{ color: 'gray' }}>
          Holborn Town Hall, 193-197 High Holborn
        </h5>
        <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mt-md-4 mt-3'>
          Colonel Saab Holborn is situated in the Grade II listed Holborn Town
          Hall building, which first opened as a public library in 1894. Today,
          apart from a few original features the new exotic design and decor of
          the restaurant compliments the old building with warm colours, brass
          and wood features and a stunning collection of chandeliers which have
          been handcrafted and shipped over from India in addition to the
          restaurant and bar, we have two tastefully designed private dining
          rooms, creating the ideal setting for any corporate dining or
          celebratory event.
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
