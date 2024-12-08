import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ColonelSaabDrawingImg from '../../public/assets/images/home/ColonelSaabLocation1.png';
import ColonelSaabDrawingImg2 from '../../public/assets/images/home/Trafalgar.jpg';
// import ColonelSaabDrawingImg2 from '../../public/assets/images/home/comingsoon.jpg';
import useOnScreen from '../Hook/useOnScreen';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const HomeLocation = () => {
  const ref = useRef();
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div
      ref={ref}
      className='container-fluid d-flex justify-content-center align-items-center px-2  pt-3'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-4 text-center'>
            <h2 className=' fw-bold  title-text'>Our Locations</h2>
          </div>
          <div className='col-6 col-lg-6 text-center  d-flex align-items-center flex-column'>
            <Link href='/locations/holbornhall-london'>
              <Image
                style={{ cursor: 'pointer' }}
                className='img-fluid pe-auto'
                src={ColonelSaabDrawingImg}
                alt='Holborn Hall, London'
              />
            </Link>

            <Link
              href='/locations/holbornhall-london'
              class=' mt-1  text-decoration-none text-warning menu  custom-cursor'
            >
              <p className='h5'>Holborn Hall, London</p>
            </Link>
          </div>
          <div className='col-6 col-lg-6 text-center  d-flex align-items-center flex-column'>
            <Link href='/locations/trafalgarsquare-london'>
              <Image
                style={{ cursor: 'pointer' }}
                className='img-fluid pe-auto'
                src={ColonelSaabDrawingImg2}
                alt='Holborn Hall, London'
              />
            </Link>

            <Link
              href='/locations/trafalgarsquare-london'
              class=' mt-1 text-decoration-none text-warning menu  custom-cursor'
            >
              <p className='h5'>Trafalgar Square, London</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
