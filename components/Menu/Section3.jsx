import Image from 'next/image';
import { useRef, useState } from 'react';
import Afternoon from '../../public/assets/images/whats-on/afternoon-tea.jpg';
// import AfternoonTeaMenu from "../../public/assets/pdf/AfternoonTeaMenu.pdf";
import { saveAs } from 'file-saver';
import Download from '../../public/assets/images/download.svg';
import useOnScreen from '../Hook/useOnScreen';
import PrimaryButton from '../Layout/Button/PrimaryButton';
import SubscriptionModal from '../Layout/Modal/SubscriptionModal';

const Section3 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);

  return (
    <div
      ref={divRef}
      id='AFTERNOONTEAMENU'
      className='container-fluid px-2 py-5'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center text-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              src={Afternoon}
              alt='Afternoon'
            />
          </div>
          <div className='col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center'>
            {isVisible && (
              <>
                <h2 className='mb-3 text-center text-success'>
                  <span className='d-inline-block'>
                    Afternoon Tea Menu (Holborn Only)
                  </span>
                </h2>
                <p className='mt-2 text-center'>Indian Afternoon Tea</p>
                <p className='mt-2 text-center'>
                  {/* For One 25
                  TRADITIONAL PER PERSON £25
TRADITIONAL FOR TWO £48
TRADITIONAL WITH A GLASS OF PROSECCO PER PERSON £31
                  <br />
                  For Two 48 */}
                  For One £35 <br /> For Two £70
                </p>
                <p className='px-5 text-center'>
                  A sublime fusion of tradition and innovation, inspired by the
                  travel tales of Colonel Saab and his wife across India, our
                  Indian Afternoon Tea at Colonel Saab merges British tradition
                  with vibrant Indian flavours. This unique fusion brings
                  together classic British treats and India’s rich culinary
                  heritage, creating a truly unforgettable dining experience
                </p>

                <PrimaryButton
                  className='mt-3'
                  onClick={() => {
                    // setDownloadModal(true);
                    saveAs(
                      '/assets/pdf/AfternoonTeaMenu2.pdf',
                      'AfternoonTeaMenu.pdf'
                    );
                  }}
                >
                  <Image
                    className='img-fluid me-2'
                    src={Download}
                    alt='Download'
                    width={20}
                  />
                  DOWNLOAD MENU
                </PrimaryButton>
              </>
            )}
          </div>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 d-flex d-lg-none flex-column justify-content-center text-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              src={Afternoon}
              alt='Afternoon'
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size='sm'
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
            download={true}
            pdf='AfternoonTeaMenu'
          />
        )}
      </div>
    </div>
  );
};

export default Section3;
