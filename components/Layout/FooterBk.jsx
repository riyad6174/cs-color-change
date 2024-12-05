import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
// import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
// import { AiOutlineInstagram } from "react-icons/ai";
import GreenElephant from '../../public/assets/images/greenElephant.png';
import WhiteElephant from '../../public/assets/images/whiteElephant.png';

const Footer = () => {
  const [footerImage, setFooterImage] = useState(GreenElephant);
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
      setFooterImage(GreenElephant);
    }
  };

  return (
    <>
      <div className='row overflow-hidden mt-5 mt-lg-0 mx-0'>
        <div className='container-fluid bg-warning px-5 py-3'>
          <div className='row py-1'>
            <div className='col-12 col-lg-4 text-light text-center text-lg-start d-flex flex-column justify-content-center'>
              <div>
                <h5>LOCATION</h5>
              </div>
              <p>
                Colonel Saab
                <br />
                Holborn Town Hall
                <br />
                193-197 High Holborn,
                <br />
                London, WC1V 7BD
              </p>
              <div>
                <h5>CONTACT</h5>
              </div>
              <span>
                <a
                  className='position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                  title='Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                  href='tel:+44-20-8016-6800'
                >
                  020 8016 6800
                </a>
              </span>
              <span>
                <a
                  className='position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                  title='Email Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab Vegan and Vegetarian'
                  href='mailto:reservations@colonelsaab.co.uk?subject=Reservation enquiry from website'
                >
                  reservations@colonelsaab.co.uk
                </a>
              </span>
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
              <h5>HOURS</h5>
              <p>
                Monday to Saturday
                <br />
                Bar: 12 Noon - 11:30 PM
                <br />
                Lunch: 12 Noon - 2.30 PM
                <br />
                Afternoon Tea: 2.30 PM - 4 PM
                <br />
                Dinner: 5.30 PM - 9.45 PM
              </p>
              {/* <div>
                <a
                  href="https://uk.linkedin.com/company/colonel-saab/"
                  target="_blank"
                  rel="noreferrer"
                  className="custom-cursor"
                >
                  <BsLinkedin
                    className="btn-social-footer custom-cursor rounded-circle m-1"
                    size={25}
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
                    size={30}
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
                    size={25}
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
                    size={25}
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
                    size={25}
                  />
                </a>
              </div> */}

              <div>
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
                  <i className='bx bxl-twitter rounded-circle btn-social-footer mx-1 p-1'></i>
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
        {/* <div className="container-fluid px-0 px-sm-5 py-2 bg-success">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-3 text-light align-items-center align-items-lg-start d-flex flex-column m-2 m-lg-0">
              <p className="m-lg-0 p-lg-0">CONTACT</p>
              <a
                className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                title="Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian"
                href="tel:+44-20-8016-6800"
              >
                020 8016 6800
              </a>
              <a
                className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                title="Email Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab Vegan and Vegetarian"
                href="mailto:reservations@colonelsaab.co.uk?subject=Reservation enquiry from website"
              >
                reservations@colonelsaab.co.uk
              </a>
            </div>
            <div className="col-12 col-lg-6 p-md-0 text-light">
              <div className="d-flex flex-column flex-sm-row justify-content-between justify-content-lg-evenly align-items-center w-100">
                <div className="dropup" ref={noorGroupDropdownRef}>
                  <p
                    className="dropbtn footer-menu custom-cursor"
                    onClick={() => {
                      setNoorGroupDropdownShow(!noorGroupDropdownShow);
                    }}
                  >
                    OUR BRANDS
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
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>SUBSCRIBE</p>
                </NavLink>
                <NavLink
                  to="/reservations-policy"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>RESERVATIONS POLICY</p>
                </NavLink>
                <NavLink
                  to="/press"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>PRESS</p>
                </NavLink>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-evenly align-items-center w-100">
                <NavLink
                  to="/blog"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>BLOG</p>
                </NavLink>
                <NavLink
                  to="/privacy"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>PRIVACY</p>
                </NavLink>
                <NavLink
                  to="/terms"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>TERMS</p>
                </NavLink>
                <NavLink
                  to="/sitemap"
                  className="text-light position-relative d-inline-block text-decoration-none footer-menu custom-cursor"
                >
                  <p>SITEMAP</p>
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-lg-3 d-flex text-light align-items-center justify-content-center justify-content-lg-end">
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
        <div className='container-fluid px-0 px-sm-5 pt-2 pb-5 py-md-2 bg-success'>
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
                    href='https://www.noormahalpalace.com/'
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
                    JEWEL'S HOTEL
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
