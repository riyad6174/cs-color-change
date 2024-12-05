import { CloseButton, Modal } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import YellowElephant from '../../../public/assets/images/offerpost.jpg';
import PrimaryButton from '../Button/PrimaryButton';
import Link from 'next/link';
import Image from 'next/image';

const ChristmasModal = (props) => {
  return (
    <>
      <Fade bottom delay={3000}>
        <Modal
          show={props.show}
          centered
          onHide={props.onHide}
          className='border-0'
        >
          {/* <Modal.Header className='border-0 position-relative bg-dark'>
            <div
              className='position-absolute'
              style={{ top: '20px', right: '20px' }}
            >
              <CloseButton onClick={props.onHide} />
            </div>
          </Modal.Header> */}
          <Modal.Body className='position-relative text-center '>
            <div
              className='position-absolute'
              style={{ top: '20px', right: '20px' }}
            >
              <CloseButton onClick={props.onHide} className='bg-light' />
            </div>
            {/* <div className='col-12   mt-6 mt-lg-0 d-flex align-items-stretch justify-content-center'>
              <div
                className=' py-5 px-5 d-flex flex-column dish-menu-layer-img'
                style={{ padding: '25px' }}
              >
                <p
                  className='mt-2 text-success text-center'
                  style={{ fontSize: '1.5rem' }}
                >
                  EXCLUSIVE OPENING <br /> OFFER
                </p>
                <p className='mb-1 text-pink text-center'>
                  To celebrate its grand opening, <br /> Colonel Saab in
                  Trafalgar Square <br /> is offering an exclusive 25% <br />{' '}
                  discount on your food bill. <br /> Valid until
                  29th of November.
                </p>
              </div>
            </div> */}
            <Link href='/whats-on/colonel-saab-announces-second-award-winning-indian-restaurant-in-trafalgar-square'>
              <Image
                className='img-fluid'
                src={YellowElephant}
                alt='YellowElephant'
                width={600}
                height={600}
              />
            </Link>
            {/* <Link href='/whats-on/colonel-saab-announces-second-award-winning-indian-restaurant-in-trafalgar-square'>
              <PrimaryButton
                className='mt-3 '
                onClick={() => {
                  props.onHide();
                  // props.setBookingModal(true);
                }}
              >
                BOOK NOW{' '}
              </PrimaryButton>
            </Link> */}
            {/* <PrimaryButton className='mt-3' onClick={props.onHide}>
              CLOSE
            </PrimaryButton> */}
          </Modal.Body>
        </Modal>
      </Fade>
    </>
  );
};

export default ChristmasModal;
