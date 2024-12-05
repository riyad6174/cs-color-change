import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom1 from '../../public/assets/images/hs/bar.jpg';
import useOnScreen from '../Hook/useOnScreen';
import BookingModal from '../Layout/Modal/BookingModal';

const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mb-lg-5 px-2 mt-4'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h3 className='mt-3 text-center text-success text-uppercase'>
                Restaurant & bar <br /> exclusive hire
              </h3>
              <p className='text-center'>
                Colonel Saab is available for exclusive hire for events like
                corporate functions and private parties. The venue boasts a
                decor of art, vintage artefacts, and a golden-threaded canopy,
                complemented by a 1920s Asprey&apos;s of London bar. We offer
                private dining menus for all occasions, with the possibility of
                creating tailor-made menus for your event.
              </p>
              <div className='mt-3 '>
                <div className='   text-light border px-2 py-2  rounded-0 custom-cursor bg-success'>
                  <div
                    className='d-flex   justify-content-center'
                    style={{ border: 'solid 2px white' }}
                  >
                    <div className='px-4 py-2 d-flex flex-column text-start '>
                      <h5 className='text-uppercase mt-1'>
                        {' '}
                        130 Seated | 190 standing
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center'>
            <Image
              className={
                isVisible
                  ? 'img-fluid image-reveal ms-lg-5 '
                  : 'img-fluid ms-lg-5'
              }
              src={PrivateDiningRoom1}
              alt='PrivateDiningRoom'
            />
          </div>
          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
