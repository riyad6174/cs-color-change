import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import PrivateDiningRoom3 from '../../public/assets/images/ts/memsaab.jpg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import SubscriptionModal from '../Layout/Modal/SubscriptionModal';

const Section4 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <div ref={ref} className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 mt-5'>
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h2 className='mt-3 text-center text-success'>Memsaab</h2>
              <p className='text-center'>
                For a more versatile private dining experience, Memsaab 1 and 2
                at Colonel Saab can be utilised separately or combined. These
                spaces are perfect for private meetings, intimate dining, or
                small corporate events, offering flexibility and privacy in a
                setting that reflects the rich heritage of Indian cuisine.
              </p>

              <div className='mt-3 '>
                <div className='   text-light border px-3 py-3  rounded-0 custom-cursor bg-success'>
                  <div
                    className='d-flex gap-2  justify-content-center'
                    style={{ border: 'solid 2px white' }}
                  >
                    <div className='px-1 px-md-4 py-2 d-flex flex-column text-start '>
                      <div> Memsaab 1</div>
                      <div> 10 SEATED </div>
                    </div>
                    <span className='px-1 px-md-4 py-2 d-flex flex-column text-start '>
                      <div> Memsaab 2</div>
                      <div> 20 SEATED </div>
                    </span>
                    <span className='px-1 px-md-4 py-2 d-flex flex-column text-start '>
                      <div> Memsaab </div>
                      <div> 45 STANDING</div>
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
