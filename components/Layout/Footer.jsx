import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// import { AiOutlineInstagram } from "react-icons/ai";
import GreenElephant from '../../public/assets/images/greenElephant.png';
import WhiteElephant from '../../public/assets/images/whiteElephant.png';

const Footer = () => {
  // const [footerImage, setFooterImage] = useState(GreenElephant);
  const [footerImage, setFooterImage] = useState(WhiteElephant);
  const [noorGroupDropdownShow, setNoorGroupDropdownShow] = useState(false);
  const [policyDropdownShow, setPolicyDropdownShow] = useState(false);
  const noorGroupDropdownRef = useRef(null);
  const policyDropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      noorGroupDropdownRef.current &&
      !noorGroupDropdownRef.current.contains(event.target) &&
      noorGroupDropdownShow
    ) {
      setNoorGroupDropdownShow(!noorGroupDropdownShow);
    }
    if (
      policyDropdownRef.current &&
      !policyDropdownRef.current.contains(event.target) &&
      policyDropdownShow
    ) {
      setPolicyDropdownShow(!policyDropdownShow);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    noorGroupDropdownRef,
    noorGroupDropdownShow,
    policyDropdownRef,
    policyDropdownShow,
  ]);

  const handleMouseEnter = (state) => {
    if (state === 'in') {
      setFooterImage(WhiteElephant);
    } else {
      setFooterImage(WhiteElephant);
      // setFooterImage(GreenElephant);
    }
  };

  return (
    <>
      <div className='row overflow-hidden mt-5 mt-lg-0 mx-0'>
        <div className='container-fluid bg-button px-5 py-3'>
          <div className='row py-1'>
            <div className='col-12 col-lg-4 text-light text-center text-lg-start d-flex flex-column justify-content-center'>
              <div>
                <h5>LOCATIONS</h5>
              </div>
              <p className='mt-1'>
                <Link
                  href='/locations/holbornhall-london'
                  className='fw-bold position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                >
                  Holborn Town Hall
                </Link>
                <br />
                Covent Garden London
              </p>
              <p>
                <Link
                  href='/locations/trafalgarsquare-london'
                  className='fw-bold position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                >
                  William IV Street
                </Link>
                <br />
                Trafalgar Square London
              </p>
            </div>
            <div className='col-12 col-lg-4 d-flex flex-column justify-content-center align-items-center'>
              <Link href='/' className='custom-cursor'>
                <Image
                  className='img-fluid custom-cursor'
                  src={footerImage}
                  alt='Elephant'
                  onMouseOver={() => {
                    handleMouseEnter('in');
                  }}
                  onMouseOut={() => {
                    handleMouseEnter('out');
                  }}
                  width={120}
                />
              </Link>
            </div>
            <div className='col-12 col-lg-4 text-light text-center text-lg-end d-flex flex-column justify-content-center mt-3 mt-lg-0'>
              <div>
                <h5>CONTACT</h5>
              </div>
              <span>
                <a
                  className='position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                  title='Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                  href='tel:+44-020-8016-6800'
                >
                  Holborn Town Hall : 020 8016 6800
                </a>
              </span>
              <span>
                <a
                  className='position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                  title='Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                  href='tel:+44-020-8016-6800'
                >
                  Trafalgar Square : 020 8016 6800
                </a>
              </span>
              <span>
                <a
                  className='position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                  title='Email Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                  href='mailto:reservations@colonelsaab.co.uk?subject=Reservation enquiry from website'
                >
                  Email : reservations@colonelsaab.co.uk
                </a>
              </span>

              <div className='mt-3'>
                <a
                  href='https://uk.linkedin.com/company/colonel-saab/'
                  target='_any'
                >
                  <i className='bx bxl-linkedin rounded-circle btn-social-footer mx-1 p-1'></i>
                </a>
                <a href='https://www.instagram.com/colonelsaab/' target='_any'>
                  <i className='bx bxl-instagram rounded-circle btn-social-footer mx-1 p-1'></i>
                </a>

                <a href='https://www.facebook.com/colonelsaab' target='_any'>
                  <i className='bx bxl-facebook rounded-circle btn-social-footer mx-1 p-1'></i>
                </a>
                <a href='https://twitter.com/Colonelsaabuk' target='_any'>
                  {/* <i className='bx bxl-twitter rounded-circle btn-social-footer mx-1 p-1'></i> */}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    fill='currentColor'
                    class='bi bi-twitter-x rounded-circle btn-social-footer mx-1 p-1 mb-2'
                    viewBox='0 0 16 16'
                  >
                    <path d='M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z' />
                  </svg>
                </a>

                <a
                  href='https://www.youtube.com/channel/UCC-E3vcrN28tB3JGTgO9VVw/about'
                  target='_any'
                >
                  <i className='bx bxl-youtube rounded-circle btn-social-footer mx-1 p-1'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid px-0 px-sm-5 pt-2 pb-5 py-md-2 bg-warning'>
          <div className='col-12 text-light'>
            <div className='d-flex flex-column flex-lg-row justify-content-lg-center align-items-center w-100'>
              <div className='dropup me-0 me-lg-4' ref={noorGroupDropdownRef}>
                <p
                  className='dropbtn menu custom-cursor m-0'
                  onClick={() => {
                    setNoorGroupDropdownShow(!noorGroupDropdownShow);
                  }}
                >
                  NOOR GROUP
                </p>
                <div
                  className={
                    noorGroupDropdownShow
                      ? 'dropup-content d-block d-lg-block border border-2'
                      : 'dropup-content d-none border border-2'
                  }
                >
                  <a
                    href='https://colonelsaab.co.uk/'
                    target='_blank'
                    rel='noreferrer'
                    className='custom-cursor justify-content-center'
                  >
                    COLONEL SAAB
                  </a>
                  <a
                    href='https://www.noormahal.in/'
                    target='_blank'
                    rel='noreferrer'
                    className='custom-cursor justify-content-center'
                  >
                    <span>NOORMAHAL PALACE</span>
                  </a>
                  <a
                    href='https://www.hoteljewels.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='custom-cursor justify-content-center'
                  >
                    JEWELS HOTEL
                  </a>
                  <a
                    href='https://hazuribagh.com/'
                    target='_blank'
                    rel='noreferrer'
                    className='custom-cursor justify-content-center'
                  >
                    HAZURI BAGH
                  </a>
                </div>
              </div>
              {/* <NavLink
                to="/subscribe"
                className="text-light position-relative d-inline-block text-decoration-none menu custom-cursor"
              >
                <p className="m-0">SUBSCRIBE</p>
              </NavLink> */}
              <div className='dropup me-0 me-lg-4' ref={policyDropdownRef}>
                <p
                  className='dropbtn menu custom-cursor m-0'
                  onClick={() => {
                    setPolicyDropdownShow(!policyDropdownShow);
                  }}
                >
                  POLICY
                </p>
                <div
                  className={
                    policyDropdownShow
                      ? 'dropup-content d-block d-lg-block border border-2'
                      : 'dropup-content d-none border border-2'
                  }
                >
                  <Link
                    href='/reservations-policy'
                    className='text-light text-decoration-none custom-cursor justify-content-center'
                  >
                    <p className='m-0'>RESERVATIONS POLICY</p>
                  </Link>
                  <Link
                    href='/privacy'
                    className='text-light text-decoration-none custom-cursor justify-content-center'
                  >
                    <p className='m-0'>PRIVACY</p>
                  </Link>
                  <Link
                    href='/terms'
                    className='text-light text-decoration-none custom-cursor justify-content-center'
                  >
                    <p className='m-0'>TERMS</p>
                  </Link>
                </div>
              </div>

              <Link
                href='/press'
                className='text-light position-relative d-inline-block text-decoration-none menu custom-cursor me-0 me-lg-4'
              >
                <p className='m-0'>PRESS</p>
              </Link>
              <Link
                href='/blog'
                className='text-light position-relative d-inline-block text-decoration-none menu custom-cursor me-0 me-lg-4'
              >
                <p className='m-0'>BLOG</p>
              </Link>

              {/* <NavLink
                to="/sitemap"
                className="text-light position-relative d-inline-block text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">SITEMAP</p>
              </NavLink> */}
            </div>
          </div>
        </div>
        {/* <hr className="w-100 text-light m-0" />
        <div className="container-fluid px-0 px-sm-5 bg-success">
          <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center bg-success">
            <span className="text-light position-relative overflow-hidden text-decoration-none menu custom-cursor m-0">
              Site by Arcee Digital
            </span>
            <div>
              <a
                href="https://uk.linkedin.com/company/colonel-saab/"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <BsLinkedin
                  className="m-1 btn-social-footer custom-cursor"
                  size={20}
                />
              </a>
              <a
                href="https://www.instagram.com/colonelsaab/"
                className="custom-cursor"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram
                  className="m-2 rounded-circle btn-social-footer"
                  size={25}
                />
              </a>
              <a
                href="https://www.facebook.com/colonelsaab"
                className="custom-cursor"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook
                  className="m-1 rounded-circle btn-social-footer custom-cursor"
                  size={20}
                />
              </a>
              <a
                href="https://twitter.com/Colonelsaabuk"
                className="custom-cursor"
                target="_blank"
                rel="noreferrer"
              >
                <BsTwitter
                  className="m-1 rounded-circle btn-social-footer custom-cursor"
                  size={20}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCC-E3vcrN28tB3JGTgO9VVw/about"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <BsYoutube
                  className="m-1 rounded-circle btn-social-footer custom-cursor"
                  size={22}
                />
              </a>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="container-fluid overflow-hidden px-0 px-sm-5 py-2 bg-success">
        <div className="row">
          <div className="col-12 text-light">
            <div className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center w-100">
              <div className="dropup" ref={noorGroupDropdownRef}>
                <p
                  className="dropbtn menu custom-cursor m-0"
                  onClick={() => {
                    console.log("dropbtn");
                    setNoorGroupDropdownShow(!noorGroupDropdownShow);
                  }}
                >
                  MORE FROM NOOR GROUP
                </p>
                <div
                  className={
                    noorGroupDropdownShow
                      ? "dropup-content d-block d-lg-block border border-2"
                      : "dropup-content d-none border border-2"
                  }
                >
                  <a
                    href="https://colonelsaab.co.uk/"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-cursor"
                  >
                    COLONEL SAAB
                  </a>
                  <a
                    href="https://www.noormahal.in/"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-cursor"
                  >
                    <span>NOOR MAHAL</span>
                  </a>
                  <a
                    href="https://www.hoteljewels.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-cursor"
                  >
                    JEWEL'S HOTEL
                  </a>
                  <a
                    href="https://hazuribagh.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="custom-cursor"
                  >
                    HAZURI BAGH
                  </a>
                </div>
              </div>
              <NavLink
                to="/subscribe"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">SUBSCRIBE</p>
              </NavLink>

              <NavLink
                to="/reservations-policy"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">RESERVATIONS POLICY</p>
              </NavLink>
              <NavLink
                to="/press"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">PRESS</p>
              </NavLink>
              <NavLink
                to="/blog"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">BLOG</p>
              </NavLink>
              <NavLink
                to="/privacy"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">PRIVACY</p>
              </NavLink>
              <NavLink
                to="/terms"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">TERMS</p>
              </NavLink>
              <NavLink
                to="/sitemap"
                className="text-light position-relative text-decoration-none menu custom-cursor"
                
              >
                <p className="m-0">SITEMAP</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 text-light m-0" />
      <div className="container-fluid px-0 px-sm-5 bg-success">
        <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center bg-success">
          <span className="text-light position-relative overflow-hidden text-decoration-none menu custom-cursor m-0">
            Site by Arcee Digital
          </span>
          <div>
            <a
              href="https://uk.linkedin.com/company/colonel-saab/"
              target="_blank"
              rel="noreferrer"
              className="custom-cursor"
            >
              <BsLinkedin
                className="m-1 btn-social-footer custom-cursor"
                size={20}
              />
            </a>
            <a
              href="https://www.instagram.com/colonelsaab/"
              className="custom-cursor"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram
                className="m-2 rounded-circle btn-social-footer"
                size={25}
              />
            </a>
            <a
              href="https://www.facebook.com/colonelsaab"
              className="custom-cursor"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                className="m-1 rounded-circle btn-social-footer custom-cursor"
                size={20}
              />
            </a>
            <a
              href="https://twitter.com/Colonelsaabuk"
              className="custom-cursor"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter
                className="m-1 rounded-circle btn-social-footer custom-cursor"
                size={20}
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCC-E3vcrN28tB3JGTgO9VVw/about"
              target="_blank"
              rel="noreferrer"
              className="custom-cursor"
            >
              <BsYoutube
                className="m-1 rounded-circle btn-social-footer custom-cursor"
                size={22}
              />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Footer;
