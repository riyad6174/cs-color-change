import { useEffect, useRef, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import { NavLink, useLocation } from "react-router-dom";

// import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import WhiteElephant from '../../public/assets/images/HeaderWhiteElephant.png';
import MenuLogo from '../../public/assets/images/MenuLogo.png';
import Reception from '../../public/assets/images/reception.svg';
import YellowElephant from '../../public/assets/images/yellowElephant.png';
import YellowlotusImg from '../../public/assets/images/yellowLotus.png';
import useWindowSize from '../Hook/windowSize';
import BookingModal from '../Layout/Modal/BookingModal';
import TrafalgarBookingModal from './Modal/TrafalgarBookingModal';

const Navbar = () => {
  const windowSize = useWindowSize();

  let location = useRouter();

  console.log(location, 'loc');
  // for Dropdown
  const bookButtonDropdownRef = useRef(null);

  const [bookingModal, setBookingModal] = useState(false);
  const [trafBookingModal, setTrafBookingModal] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  // const [logo, setLogo] = useState(YellowElephant);
  const [logo, setLogo] = useState(WhiteElephant);
  const [bookButtonDropdownShow, setBookButtonDropdownShow] = useState(false);

  const handleMouseEnter = (state) => {
    if (state === 'in') {
      setLogo(WhiteElephant);
    } else {
      // setLogo(YellowElephant);
      setLogo(WhiteElephant);
    }
  };

  const handleClickOutside = (event) => {
    // if (
    //   bookButtonDropdownRef.current &&
    //   !bookButtonDropdownRef.current.contains(event.target) &&
    //   bookButtonDropdownShow
    // ) {
    //   setBookButtonDropdownShow(!bookButtonDropdownShow);
    // }

    if (
      bookButtonDropdownRef.current &&
      !bookButtonDropdownRef.current.contains(event.target)
    ) {
      setBookButtonDropdownShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookButtonDropdownRef]);

  // end dropdown

  return (
    <>
      <nav
        className='navbar navbar-light sticky-top py-1 px-3 px-sm-5 '
        style={{ backgroundColor: '#641F23' }}
      >
        <div className='navbar-nav w-100'>
          <div className='row'>
            <div className='col-12 col-sm-4 d-flex justify-content-between align-items-center align-items-sm-start justify-content-sm-center d-sm-block'>
              <Link href='/' className='custom-cursor'>
                <Image
                  className='img-fluid mx-auto d-block d-sm-none custom-cursor'
                  src={logo}
                  alt='logo'
                  width={70}
                  onMouseOver={() => {
                    handleMouseEnter('in');
                  }}
                  onMouseOut={() => {
                    handleMouseEnter('out');
                  }}
                />
              </Link>

              <span
                className='navbar-brand d-flex d-sm-none align-items-center justify-content-center float-start custom-cursor'
                onClick={() => {
                  setMenuShow(true);
                }}
              >
                <Image
                  className='img-fluid'
                  src={YellowlotusImg}
                  alt='lotus'
                  width={30}
                />
                <h6 className='ms-2 mt-3 text-light'>MENU</h6>
              </span>

              <span
                className='navbar-brand d-none d-sm-flex align-items-center justify-content-center float-start custom-cursor'
                onClick={() => {
                  setMenuShow(true);
                }}
              >
                <Image
                  className='img-fluid'
                  src={YellowlotusImg}
                  alt='lotus'
                  width={35}
                />
                <h4 className='ms-2 mt-3 text-light'> MENU</h4>
              </span>
            </div>
            <div className='col-12 col-sm-4 d-flex justify-content-center align-items-center'>
              <Link href='/' className='custom-cursor'>
                <Image
                  className='img-fluid mx-auto d-none d-sm-block custom-cursor'
                  src={logo}
                  alt='logo'
                  width={110}
                  onMouseOver={() => {
                    handleMouseEnter('in');
                  }}
                  onMouseOut={() => {
                    handleMouseEnter('out');
                  }}
                />
              </Link>
            </div>

            <div className='col-12 col-sm-4 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end'>
              <div
                className='dropup booking-btn-dropdown me-0 me-lg-4'
                ref={bookButtonDropdownRef}
              >
                <button
                  type='button'
                  className='dropbtn   btn rounded-0 text-light custom-cursor'
                  style={{
                    backgroundColor: '#767158',
                  }}
                  onMouseOver={(e) => {
                    e.target.classList.add(
                      'bg-transparent',
                      'border',
                      'border-1',
                      'border-white'
                    );
                  }}
                  onMouseOut={(e) => {
                    e.target.classList.remove(
                      'bg-transparent',
                      'border',
                      'border-1',
                      'border-white'
                    );
                  }}
                  onClick={() => {
                    // setBookingModal(true);
                    setBookButtonDropdownShow(!bookButtonDropdownShow);
                  }}
                >
                  <Image
                    className='img-fluid me-2'
                    src={Reception}
                    alt='Reception'
                    width={20}
                  />
                  Book Now
                </button>

                <div
                  className={
                    bookButtonDropdownShow
                      ? 'dropup-content d-block d-lg-block border border-2'
                      : 'dropup-content d-none border border-2'
                  }
                >
                  <a
                    className='custom-cursor justify-content-center border-bottom border-warning'
                    onClick={(e) => {
                      // e.preventDefault();
                      setTrafBookingModal(false);
                      setBookingModal(true);
                    }}
                  >
                    High Holborn
                  </a>
                  <a
                    className='custom-cursor justify-content-center'
                    onClick={(e) => {
                      // e.preventDefault();
                      setBookingModal(false);
                      setTrafBookingModal(true);
                    }}
                  >
                    Trafalgar Square
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {bookingModal && (
        <BookingModal
          show={bookingModal}
          onHide={() => setBookingModal(!bookingModal)}
        />
      )}

      {trafBookingModal && (
        <TrafalgarBookingModal
          show={trafBookingModal}
          onHide={() => setTrafBookingModal(!trafBookingModal)}
        />
      )}

      <Offcanvas
        show={menuShow}
        onHide={() => {
          setMenuShow(false);
        }}
        className='bg-warning'
        style={{ width: windowSize.width >= 768 && '20%' }}
      >
        <Offcanvas.Header>
          <AiOutlineClose
            className='text-pink custom-cursor p-0'
            onClick={() => {
              setMenuShow(false);
            }}
            size={25}
          />
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className='row'>
              <div className='col-12 d-none d-md-block text-center mb-3'>
                <Link href='/' className='custom-cursor'>
                  <Image
                    className='img-fluid pb-2'
                    src={MenuLogo}
                    alt='MenuLogo'
                    style={{ width: '60%' }}
                  />
                </Link>
              </div>
              <div className='col-12 text-center'>
                <ul className='list-unstyled d-flex flex-column'>
                  <li>
                    <Link
                      className={
                        location.pathname === '/'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Home</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location.pathname === '/menu'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu  body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu  text-light text-decoration-none custom-cursor'
                      }
                      href='/menu'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/menu') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/menu') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Menus</h4>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={
                        location.pathname === '/story'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/story'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/story') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/story') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Our Story</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location.pathname === '/about-the-art'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/about-the-art'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/about-the-art') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/about-the-art') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>About The Art</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location.pathname === '/Weddingsandevents'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/Weddingsandevents'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/Weddingsandevents') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/Weddingsandevents') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Weddings & Events</h4>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={
                        location.pathname === '/private-dining-rooms'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/private-dining-rooms'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/private-dining-rooms') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/private-dining-rooms') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Private Dining</h4>
                    </Link>
                  </li>

                  {/* <li>
                    <Link
                      className={
                        location.pathname ===
                        '/whats-on/a-unique-valentines-date-experience-in-holborn-and-trafalgar-square'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/whats-on/a-unique-valentines-date-experience-in-holborn-and-trafalgar-square'
                      end
                      onMouseOver={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/a-unique-valentines-date-experience-in-holborn-and-trafalgar-square'
                        ) {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/a-unique-valentines-date-experience-in-holborn-and-trafalgar-square'
                        ) {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Valentines Day</h4>
                    </Link>
                  </li> */}

                  <li>
                    <Link
                      className={
                        location.pathname ===
                        '/whats-on/celebrate-the-festive-season-at-colonel-saab-book-your-christmas-event-or-join-us-on-christmas-day'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/whats-on/celebrate-the-festive-season-at-colonel-saab-book-your-christmas-event-or-join-us-on-christmas-day'
                      end
                      onMouseOver={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/celebrate-the-festive-season-at-colonel-saab-book-your-christmas-event-or-join-us-on-christmas-day'
                        ) {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/celebrate-the-festive-season-at-colonel-saab-book-your-christmas-event-or-join-us-on-christmas-day'
                        ) {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Christmas</h4>
                    </Link>
                  </li>

                  <li>
                    <Link
                      className={
                        location.pathname ===
                        '/whats-on/new-years-eve-london-at-colonel-saab-a-night-of-indulgence'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/whats-on/new-years-eve-london-at-colonel-saab-a-night-of-indulgence'
                      end
                      onMouseOver={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/new-years-eve-london-at-colonel-saab-a-night-of-indulgence'
                        ) {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (
                          location.pathname !==
                          '/whats-on/new-years-eve-london-at-colonel-saab-a-night-of-indulgence'
                        ) {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>New Year Eve</h4>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className={
                        location.pathname === "/wedding-dinner"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      href="/wedding-dinner"
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== "/wedding-dinner") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("body-text");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/wedding-dinner") {
                          e.target.classList.remove("body-text");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Wedding  Dinner</h4>
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className={
                        location.pathname === '/gallery'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/gallery'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/#') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/#') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>Gallery</h4>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={
                        location.pathname === '/whats-on'
                          ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                          : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                      }
                      href='/whats-on'
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== '/whats-on') {
                          e.target.classList.remove('text-light');
                          e.target.classList.add('body-text');
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== '/whats-on') {
                          e.target.classList.remove('body-text');
                          e.target.classList.add('text-light');
                        }
                      }}
                    >
                      <h4 className='text-uppercase'>What&apos;s On</h4>
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className={
                        location.pathname === "/whats-on/holi-2023"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      href="/whats-on/holi-2023"
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== "/whats-on/holi-2023") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("body-text");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/whats-on/holi-2023") {
                          e.target.classList.remove("body-text");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Holi Menu</h4>
                    </Link>
                  </li> */}

                  {/* <li>
                    <Link
                      className={
                        location.pathname === "/gift-voucher"
                          ? "d-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor"
                          : "d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                      }
                      href="/gift-voucher"
                      end
                      onMouseOver={(e) => {
                        if (location.pathname !== "/gift-voucher") {
                          e.target.classList.remove("text-light");
                          e.target.classList.add("body-text");
                        }
                      }}
                      onMouseOut={(e) => {
                        if (location.pathname !== "/gift-voucher") {
                          e.target.classList.remove("body-text");
                          e.target.classList.add("text-light");
                        }
                      }}
                    >
                      <h4 className="text-uppercase">Gift Voucher</h4>
                    </Link>
                  </li> */}
                </ul>
              </div>
              <div className='col-12 d-md-none text-center mb-3 mb-md-0'>
                <Link href='/' className='custom-cursor'>
                  <Image
                    className='img-fluid'
                    src={MenuLogo}
                    alt='MenuLogo'
                    width={200}
                  />
                </Link>
              </div>
            </div>
            <hr className='w-50 text-center border border-1 border-white mx-auto mt-0'></hr>
            {/* <div className="row text-center">
              <div className="text-light">
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  rel="noopener noreferrer"
                  href="https://www.google.com/maps/place/Colonel+Saab/@51.5169661,-0.1248385,17z/data=!3m1!4b1!4m5!3m4!1s0x48761b02dcfc579d:0x16101e9ce7039ed3!8m2!3d51.5169661!4d-0.1226498"
                  title="Find Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury West End - Colonel Saab Vegan and Vegetarian"
                  target="_blank"
                >
                  193-197 High Holborn,
                  <br />
                  London, WC1V 7BD
                </a>
                <br />
                <br />
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  title="Directions to Indian Restaurant Covent Garden, Soho, Holborn, Bloomsbury, West End - Colonel Saab, Vegan and Vegetarian"
                  rel="noopener noreferrer"
                  href="https://www.google.co.uk/maps/dir/Current+Location/51.5169661,-0.1226498"
                  target="_blank"
                >
                  Get Directions
                </a>
                <br />
                <br />
                <a
                  className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                  title="Call Indian Restaurant Covent Garden, Soho, Holborn Bloomsbury, West End - Colonel Saab Vegan and Vegetarian"
                  href="tel:+44-20-8016-6800"
                >
                  020 8016 6800
                </a>
              </div>
            </div> */}
            <div className='col-12 text-center'>
              <ul className='list-unstyled d-flex flex-column'>
                <li>
                  {/* p-2 */}
                  <p className='d-inline-block  position-relative overflow-hidden text-light text-decoration-none '>
                    <h4 className='text-uppercase'>Locations</h4>
                  </p>
                </li>

                <li>
                  <Link
                    className={
                      location.pathname === '/locations/holbornhall-london'
                        ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                        : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                    }
                    href='/locations/holbornhall-london'
                    end
                    onMouseOver={(e) => {
                      if (
                        location.pathname !== '/locations/holbornhall-london'
                      ) {
                        e.target.classList.remove('text-light');
                        e.target.classList.add('body-text');
                      }
                    }}
                    onMouseOut={(e) => {
                      if (
                        location.pathname !== '/locations/holbornhall-london'
                      ) {
                        e.target.classList.remove('body-text');
                        e.target.classList.add('text-light');
                      }
                    }}
                  >
                    Holborn Hall
                  </Link>
                </li>

                <li>
                  <Link
                    className={
                      location.pathname === '/locations/trafalgarsquare-london'
                        ? 'd-inline-block p-2 position-relative overflow-hidden menu body-text text-decoration-none custom-cursor'
                        : 'd-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor'
                    }
                    href='/locations/trafalgarsquare-london'
                    end
                    onMouseOver={(e) => {
                      if (
                        location.pathname !==
                        '/locations/trafalgarsquare-london'
                      ) {
                        e.target.classList.remove('text-light');
                        e.target.classList.add('body-text');
                      }
                    }}
                    onMouseOut={(e) => {
                      if (
                        location.pathname !==
                        '/locations/trafalgarsquare-london'
                      ) {
                        e.target.classList.remove('body-text');
                        e.target.classList.add('text-light');
                      }
                    }}
                  >
                    Trafalgar Square
                  </Link>
                </li>
                {/* 
                <li>
                  <a
                    className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                    rel="noopener noreferrer"
                    href="https://www.google.co.uk/maps/dir/Current+Location/51.5169661,-0.1226498"
                    target="_blank"
                  >
                    Holborn Hall
                  </a>
                </li>

                <li>
                  <a
                    className="d-inline-block position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                    rel="noopener noreferrer"
                    href="https://www.google.co.uk/maps/dir/Current+Location/51.5120778,-0.1311062"
                    target="_blank"
                  >
                    Trafalgar Square
                  </a>
                </li> */}

                {/* <li>
                  <Link
                    href="https://www.google.co.uk/maps/dir/Current+Location/51.5169661,-0.1226498"
                    target="_any"
                    className="d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                    end
                    onMouseOver={(e) => {
                      e.target.classList.remove("text-light");
                      e.target.classList.add("body-text");
                    }}
                    onMouseOut={(e) => {
                      e.target.classList.remove("body-text");
                      e.target.classList.add("text-light");
                    }}
                  >
                    <h4 className="text-uppercase">Holborn Hall</h4>
                  </Link>
                </li>

                <li>
                  <Link
                    href="https://www.google.co.uk/maps/dir/Current+Location/51.5169661,-0.1226498"
                    target="_any"
                    className="d-inline-block p-2 position-relative overflow-hidden menu text-light text-decoration-none custom-cursor"
                    end
                    onMouseOver={(e) => {
                      e.target.classList.remove("text-light");
                      e.target.classList.add("body-text");
                    }}
                    onMouseOut={(e) => {
                      e.target.classList.remove("body-text");
                      e.target.classList.add("text-light");
                    }}
                  >
                    <h4 className="text-uppercase">Trafalgar Square</h4>
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className='text-center mt-3'>
              {/* <a
                href="https://uk.linkedin.com/company/colonel-saab/"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <BsLinkedin
                  className="m-1 btn-menu-footer rounded-circle custom-cursor"
                  size={25}
                />
              </a>
              <a
                href="https://www.instagram.com/colonelsaab/"
                target="_blank"
                rel="noreferrer"
                className="custom-cursor"
              >
                <AiOutlineInstagram
                  className="m-2 rounded-circle btn-menu-footer"
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
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
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
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
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
                  className="m-1 rounded-circle btn-menu-footer custom-cursor"
                  size={25}
                />
              </a> */}

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
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
