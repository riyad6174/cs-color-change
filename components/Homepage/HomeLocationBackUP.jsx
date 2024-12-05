import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ColonelSaabDrawingImg from '../../public/assets/images/home/ColonelSaabLocation1.png';
// import ColonelSaabDrawingImg2 from '../../public/assets/images/home/Trafalgar.jpg';
import ColonelSaabDrawingImg2 from '../../public/assets/images/home/comingsoon.jpg';
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
            <h2 className=' fw-bold text-success'>Our Locations</h2>
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
              class=' mt-1  text-decoration-none text-success menu  custom-cursor'
            >
              <p className='h5'>Holborn Hall, London</p>
            </Link>
          </div>

          <div className='col-6 col-lg-6 text-center  d-flex align-items-center flex-column'>
            <div onClick={handleShow}>
              <Image
                style={{ cursor: 'pointer' }}
                className='img-fluid pe-auto'
                src={ColonelSaabDrawingImg2}
                alt='Holborn Hall, London'
              />
            </div>

            <div
              onClick={handleShow}
              class=' mt-1 text-decoration-none text-success menu  custom-cursor'
            >
              <p className='h5'>Trafalgar Square, London</p>
            </div>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop='static'
              keyboard={false}
              centered
              size='lg'
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                {/* <div className="row">
                  <div className="col-md-6">
                    <div class="mb-3">
                      <label for="name" class="form-label">
                        Name
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="name"
                      
                      />
                
                    </div>
                  </div>
                  <div className="col-md-6">
                  <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
                
                    </div>
                  </div>
                  <div className="col-md-12">
                  <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Phone Number
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                      />
               
                    </div>
                  </div>
                </div> */}
                <iframe
                  src='https://eepurl.com/hJp709'
                  height='400'
                  width='100%'
                  name='iframe_a'
                  title='Iframe Example'
                ></iframe>
              </Modal.Body>
              {/* <Modal.Footer className="rounded-0">
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer> */}
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLocation;
