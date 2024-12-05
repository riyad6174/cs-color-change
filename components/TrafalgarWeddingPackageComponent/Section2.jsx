import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom1 from '../../public/assets/images/wedding-packages/1.jpg';
import useOnScreen from '../Hook/useOnScreen';
import BookingModal from '../Layout/Modal/BookingModal';
import PrimaryButton from '../Layout/Button/PrimaryButton';

const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mb-lg-5 px-2 mt-3'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-7 px-2 p-md-4 border border-success text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h4 className='mt-3 text-success text-uppercase'>
                Exclusive Hire Package
              </h4>
              <div>
                <ul className='text-start'>
                  <li>
                    {' '}
                    <strong>Capacity:</strong> Up to 100 guests
                  </li>
                  <li>
                    {' '}
                    <strong>Minimum Spend:</strong> £10,000 + service charge
                  </li>
                  <li>
                    <strong>Price Per Person:</strong> £99
                  </li>
                </ul>
              </div>
              <h4 className='mt-3 text-success text-uppercase'>
                What&apos;s Included:
              </h4>
              <div>
                <ul className='text-start'>
                  <li>Complimentary venue hire</li>
                  <li>
                    Exclusive access to our stunning venue in Central London
                  </li>
                  <li>
                    Selection of elegant canapés and a welcome glass of Prosecco
                    for each guest
                  </li>
                  <li>
                    A delicious three-course dinner, with half a bottle of wine
                    per person and still or sparkling water
                  </li>
                  <li>Personalised table name cards for each guest</li>
                  <li>
                    Chairs, white linen tablecloths and napkins, crockery,
                    cutlery and glasses
                  </li>
                  <li>
                    Cake stand and knife for wedding cake, and easel for display
                    signs
                  </li>
                </ul>
                <h4 className='mt-3 text-success text-uppercase'>
                  Extras Available:
                </h4>
                <ul className='text-start'>
                  <li>Custom floral arrangements</li>
                  <li>Live music options</li>
                  <li>DJ services</li>
                </ul>
                <p>All extras can be added for an additional charge.</p>
                <div className='d-flex mb-2 align-items-center justify-content-center gap-2 gap-md-4'>
                  <a href='#enquire' target='_self' className='custom-cursor'>
                    <PrimaryButton className='mt-3 text-uppercase'>
                      Enquire now
                    </PrimaryButton>
                  </a>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-5 mt-3 mt-lg-0 d-flex align-items-center'>
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
