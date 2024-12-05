import Image from 'next/image';
import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import MenuRoom from '../../public/assets/images/MenuRoom.jpg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import SubscriptionModal from '../Layout/Modal/SubscriptionModal';

const Section2 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className='container-fluid px-2 mb-lg-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <Fade bottom delay={100}>
              <h2 className='mt-2 text-center text-success'>
                Our Story - Indian Restaurant Covent Garden
              </h2>
              {/* <p className="text-center text-warning">
                ORNATE COLOURED GLASS CHANDELIERS AT THIS ECLECTIC INDIAN
                RESTAURANT IN COVENT GARDEN SHOWCASING A COLLECTION OF ORIGINAL
                INDIAN ARTIFACTS
              </p> */}
              {/* <p className="text-center text-warning">S</p> */}
              <p className='text-center'>
                Colonel Saab&apos;s journey began in the Grade II listed Holborn
                Town Hall, a site steeped in history, originally serving as a
                public library in 1894. Today, it’s transformed into a vibrant
                space where the exotic design and decor complement the
                building’s original features with warm colours, brass, wood, and
                handcrafted chandeliers from India. This location also boasts
                two elegantly designed private dining rooms, accommodating up to
                60 people.
                <br />
                <br />
                In 2023, the Colonel Saab story expanded with the opening of a
                second, larger restaurant in Trafalgar Square. Mirroring the
                meticulous attention to detail and cultural richness of the
                Holborn location, the Trafalgar Square restaurant features a
                sleek bar lounge, an opulent dining room lit by ornate Firozabad
                chandeliers, and private dining rooms.
              </p>
              <PrimaryButton
                className='mt-3'
                onClick={() => {
                  setDownloadModal(true);
                }}
              >
                SUBSCRIBE
              </PrimaryButton>
            </Fade>
          </div>
          <div className='col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center'>
            <Image
              className={
                isVisible
                  ? 'img-fluid image-reveal ms-lg-5'
                  : 'img-fluid ms-lg-5'
              }
              src={MenuRoom}
              alt='MenuRoom'
            />
          </div>
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
  );
};

export default Section2;
