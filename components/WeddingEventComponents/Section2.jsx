import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import HolbornImage from '../../public/assets/images/hs/memsaab.jpg';
import TrafalgarImage from '../../public/assets/images/ts/memsaab.jpg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import BookingModal from '../Layout/Modal/BookingModal';
import Link from 'next/link';

const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mb-lg-5 px-2 py-3 '>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 d-flex align-items-center'>
            <div className='d-flex flex-column p-md-5'>
              <Image
                className={isVisible ? 'img-fluid image-reveal ' : 'img-fluid '}
                src={HolbornImage}
                alt='PrivateDiningRoom'
              />
              <div className='d-flex justify-content-between'>
                <h3 className='mt-3 text-center text-success fw-bold'>
                  HOLBORN
                </h3>
                <Link
                  href='/holborn-weddingsandevents'
                  className='custom-cursor'
                >
                  <PrimaryButton className='mt-3'>Show More</PrimaryButton>
                </Link>
              </div>
              <span className='mt-3'>
                HOLBORN TOWN HALL, 193197 HIGH HOLBORN, LONDON WC1V 7BD
              </span>
            </div>
          </div>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 d-flex align-items-center py-3'>
            <div className='d-flex flex-column p-md-5'>
              <Image
                className={
                  isVisible ? 'img-fluid  image-reveal ' : 'img-fluid '
                }
                src={TrafalgarImage}
                alt='PrivateDiningRoom'
              />
              <div className='d-flex justify-content-between'>
                <h4 className='mt-3 text-center fs-4 text-success fw-bold'>
                  TRAFALGAR SQUARE
                </h4>
                <Link
                  href='/trafalgarsquare-weddingsandevents'
                  className='custom-cursor'
                >
                  <PrimaryButton className='mt-3'>Show More</PrimaryButton>
                </Link>
              </div>
              <span className='mt-3'>
                TRAFALGAR SQUARE , 42 WILLIAM IV ST, LONDON WC2N 4DD
              </span>
            </div>
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
