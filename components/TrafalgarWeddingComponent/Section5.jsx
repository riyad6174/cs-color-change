import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom from '../../public/assets/images/ts/jaipur.jpg';
import useOnScreen from '../Hook/useOnScreen';
import useWindowSize from '../Hook/windowSize';
import PrimaryButton from '../Layout/Button/PrimaryButton';

const Section5 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const windowSize = useWindowSize();

  return (
    <div ref={ref} className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 mt-5'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-7 d-none d-lg-flex align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              style={{
                marginLeft: windowSize.width >= 992 && '-3rem',
              }}
              src={PrivateDiningRoom}
              alt='PrivateDiningRoom'
            />
          </div>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h2 className='mt-3 text-center text-success'>JAIPUR</h2>
              <p className='text-center'>
                The Jaipur area, with its semi-private setting, is ideal for
                smaller gatherings, offering a cozy ambiance for private dining,
                team meetings, or small birthday parties. This space combines
                the exclusivity of private dining with the lively atmosphere of
                Colonel Saab, ensuring a unique and memorable experience for any
                group event.
              </p>
              <div className='mt-3 '>
                <div className='   text-light border px-2 py-2  rounded-0 custom-cursor bg-success'>
                  <div
                    className='d-flex   justify-content-center'
                    style={{ border: 'solid 2px white' }}
                  >
                    <div className=' px-4 py-2  text-center '>
                      <h5 className='text-uppercase pt-1'>
                        16 Seated | 20-25 standing
                      </h5>
                    </div>
                  </div>
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

export default Section5;
