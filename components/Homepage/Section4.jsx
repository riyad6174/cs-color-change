import { useRef, useState } from 'react';
import Fade from 'react-reveal/Fade';
import AboutTheArt1 from '../../public/assets/images/IndianBestRestaurant2.webp';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import SubscriptionModal from '../Layout/Modal/SubscriptionModal';
// import YellowElephant from "../../public/assets/images/yellowElephant.png";
import Image from 'next/image';
import Link from 'next/link';

const Section4 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <>
      <div ref={ref} className='container-fluid py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6 text-center px-lg-5 d-flex flex-column justify-content-center align-items-center'>
              <Fade bottom delay={100}>
                {/* <img
                  className="img-fluid mx-auto d-block"
                  src={YellowElephant}
                  alt="YellowElephant"
                  width={150}
                /> */}
                <h2 className='mt-3 title-text fw-bold'>
                  Indian Art at Colonel Saab
                </h2>
                <p className='text-warning text-center'>
                  ORNATE GLASS CHANDELIERS AND ARTEFACTS THAT TELL A TALE
                </p>
                <p className='text-center body-text'>
                  Dining at either of Colonel Saab’s Central London locations is
                  also a feast for the eyes. The interiors showcase a treasure
                  trove of eclectic Indian art and artefacts, each with its own
                  story, meticulously collected by Roop Partap Choudhary’s
                  family during their extensive travels. These pieces have been
                  lovingly brought to London, creating an ambience that&apos;s
                  both culturally rich and visually stunning.
                  <br />
                  <br />
                  In Holborn, the main restaurant is graced by a magnificently
                  carved temple door from South India, while the staircase is
                  adorned with a grand, pure silver door from a temple in
                  Gujarat, adding a touch of splendour to the journey to your
                  table. At our Trafalgar Square location, the opulent main
                  dining room is illuminated by a canopy of ornate chandeliers
                  from Firozabad, creating an atmosphere that&apos;s both
                  luminous and inviting.
                  <br />
                  <br />
                  <Link href='/about-the-art' end>
                    <PrimaryButton
                    // onClick={() => {
                    //   setDownloadModal(true);
                    // }}
                    >
                      {/* SUBSCRIBE */}
                      READ MORE
                    </PrimaryButton>
                  </Link>
                  <br />
                  <br />
                  {/* For a combination of classic elegance with exotic art, Colonel
                  Saab is a perfect place for a meal, after-work cocktails or
                  private event. */}
                </p>
                {/* <NavLink
                  to="/about-the-art"
                  end
                >
                  <PrimaryButton
                  // onClick={() => {
                  //   setDownloadModal(true);
                  // }}
                  >
                    
                    READ MORE
                  </PrimaryButton>
                </NavLink> */}
              </Fade>
            </div>
            <div className='col-12 col-lg-6 d-flex align-items-center pt-5 pt-lg-0'>
              <Image
                className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
                src={AboutTheArt1}
                alt='AboutTheArt1'
              />
            </div>
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
    </>
  );
};

export default Section4;
