import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom1 from '../../public/assets/images/ts/bar.jpg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import BookingModal from '../Layout/Modal/BookingModal';

const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mb-lg-5 px-2 mt-5'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h3 className='mt-3 text-center text-success text-uppercase'>
                Restaurant & bar <br /> exclusive hire
              </h3>
              <p className='text-center'>
                Colonel Saab Trafalgar Square offers the ultimate exclusivity
                with whole restaurant and bar hire. This option is perfect for
                hosting lavish private dining events, grand birthday
                celebrations, or significant corporate gatherings, providing a
                bespoke atmosphere tailored to your event&apos;s requirements in
                the heart of Central London.
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
                        160 Seated | 180 standing
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-7  mt-4 mt-lg-0 d-flex align-items-center'>
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
