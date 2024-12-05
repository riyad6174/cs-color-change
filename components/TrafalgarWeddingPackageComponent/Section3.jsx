import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom from '../../public/assets/images/wedding-packages/2.jpg';
import useOnScreen from '../Hook/useOnScreen';
import useWindowSize from '../Hook/windowSize';
import PrimaryButton from '../Layout/Button/PrimaryButton';

const Section3 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const windowSize = useWindowSize();

  return (
    <div ref={ref} className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 mt-5'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-5 d-none d-lg-flex align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              style={{
                marginLeft: windowSize.width >= 992 && '-3rem',
              }}
              src={PrivateDiningRoom}
              alt='PrivateDiningRoom'
            />
          </div>
          <div className='col-12 col-lg-7 px-2 p-md-4 border border-success text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h4 className='mt-3 text-success text-uppercase'>
                Mezzanine Dinner Package
              </h4>
              <div>
                <p>
                  For a more intimate celebration, our Mezzanine Dinner package
                  provides a luxurious dining experience with stunning views of
                  the vibrant atmosphere below. Please note, this package is not
                  exclusive.
                </p>
                <ul className='text-start'>
                  <li>
                    <strong>Capacity:</strong> Up to 50 guests
                  </li>
                  <li>
                    <strong>Minimum Spend:</strong> £6,000 + service charge
                  </li>
                  <li>
                    <strong>Price Per Person:</strong> £99{' '}
                  </li>
                </ul>
              </div>
              <h4 className='mt-3 text-success text-uppercase'>
                What&apos;s Included:
              </h4>
              <div>
                <ul className='text-start'>
                  <li>Complimentary room hire</li>
                  <li>
                    A selection of elegant canapés and a welcome glass of
                    Prosecco for each guest
                  </li>
                  <li>
                    A delicious three-course dinner, with half a bottle of wine
                    per person and still or sparkling water
                  </li>
                  <li> Personalised table name cards for each guest</li>

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
          <div className='col-12 col-lg-7  mt-4 mt-lg-0 d-flex d-lg-none align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              style={{
                marginLeft: windowSize.width >= 992 && '-3rem',
              }}
              src={PrivateDiningRoom}
              alt='PrivateDiningRoom'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
