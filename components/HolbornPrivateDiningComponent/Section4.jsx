import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom3 from '../../public/assets/images/hs/memsaab.jpg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import SubscriptionModal from '../Layout/Modal/SubscriptionModal';

const Section4 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 mt-4'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h2 className='mt-3 text-center text-success'>Memsaab</h2>
              <p className='text-center'>
                Explore our versatile private dining rooms, ideal for meetings,
                dining, cocktail parties, and celebrations. Featuring two
                distinct areas, Memsaab 1 and the intimate Memsaab 2, it offers
                flexibility for any event. Use them separately or merge them
                into one expansive area, tailoring the perfect setting for your
                exclusive gatherings.
              </p>

              <div className='mt-3 '>
                <div className='   text-light border px-3 py-3  rounded-0 custom-cursor bg-success'>
                  <div
                    className='d-flex gap-2  justify-content-center'
                    style={{ border: 'solid 2px white' }}
                  >
                    <div className='px-1 px-md-4  py-2 d-flex flex-column text-start '>
                      <span> Memsaab 1</span>
                      <div> 24 SEATED </div>
                      {/* <div> 50 STANDING</div> */}
                    </div>
                    <span className='px-1 px-md-4  py-2 d-flex flex-column text-start '>
                      <div> Memsaab 2</div>
                      <div> 14 SEATED </div>
                    </span>
                    <span className='px-1 px-md-4  py-2 d-flex flex-column text-start '>
                      <div> Memsaab </div>
                      {/* <div> 26 SEATED </div> */}
                      <div> 50 STANDING</div>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className='col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center'>
            <Image
              className={
                isVisible
                  ? 'img-fluid image-reveal ms-lg-5'
                  : 'img-fluid ms-lg-5'
              }
              src={PrivateDiningRoom3}
              alt='PrivateDiningRoom3'
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size='sm'
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
          />
        )}
      </div>
    </div>
  );
};

export default Section4;
