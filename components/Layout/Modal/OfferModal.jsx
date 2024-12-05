import React from 'react';
import { CloseButton } from 'react-bootstrap';
// import popupimage from '../components/assets/img/christmas.png';
import popupimage from '../../../public/assets/images/whats-on/new-popup.jpg';

import Image from 'next/image';
import Link from 'next/link';
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
        <Link href='/whats-on/summer-group-dining-offer-at-colonel-saab-trafalgar-square'>
          <Image
            src={popupimage}
            height={1000}
            width={1000}
            alt='christmas-image'
            className='shadow popup-image '
            style={{ border: '6px solid #FFFAF0' }}
          />
        </Link>
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
