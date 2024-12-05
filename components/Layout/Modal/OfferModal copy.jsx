import React from 'react';
import { CloseButton } from 'react-bootstrap';
// import popupimage from '../components/assets/img/christmas.png';
import popupimage from '../../../public/assets/images/offerpost.jpg';

import Image from 'next/image';
function OfferModal({ showPopUp, setShowPopUp }) {
  // const handleClick = () =>{
  //   setShowPopUp(!showPopUp)
  // }

  return (
    <div
      className={`d-flex  align-items-center justify-content-center ${
        showPopUp ? '_show-modal' : 'd-none'
      }  `}
      onClick={() => setShowPopUp(!showPopUp)}
    >
      <div className='position-relative popup-container'>
        <a
          target='blank'
          href='https://www.opentable.com/booking/experiences-availability?rid=342000&restref=342000&experienceId=241451&utm_source=external&utm_medium=referral&utm_campaign=shared'
        >
          <Image
            src={popupimage}
            height={500}
            width={800}
            alt='christmas-image'
            className='shadow popup-image '
            style={{ border: '6px solid #FFFAF0' }}
          />
        </a>
        <div
          className=' position-absolute z-3 p-1   '
          style={{
            top: '20px',
            right: '20px',
            // borderRadius: '50%',
            // backgroundColor: '#FFFAF0',
            cursor: 'pointer',
          }}
        >
          <CloseButton
            className='close-button'
            style={{
              width: '24px',
              height: '24px',
              fontWeight: '900',
              color: '#DC143C',
              zIndex: '99999',
            }}
            onClick={() => setShowPopUp(!showPopUp)}
          />
        </div>
      </div>
    </div>
  );
}

export default OfferModal;
