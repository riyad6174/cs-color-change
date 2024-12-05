// import Image from "next/image";
import Link from 'next/link';
import { useRef } from 'react';
import Slider from 'react-slick';
import { WhatsOnHome } from '../../utils/content';

const Section7 = () => {
  const ref = useRef();

  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div ref={ref} className='container-fluid px-2 pt-3 pt-lg-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <h2 className='mt-3 fw-bold title-text'>What&apos;s On</h2>
            <div className='row m-0'>
              <div className='col-12'>
                <p className='mt-1 text-center text-warning'>
                  CHECKOUT THE LATEST EVENTS AT COLONEL SAAB COVENT GARDEN
                </p>
              </div>
            </div>
            <div className='container-fluid my-4'>
              <div className='container align-items-stretch'>
                <div className='row justify-content-center'>
                  <div className='col-12 col-md-12 col-lg-12'>
                    <Slider className='row' {...settings}>
                      {WhatsOnHome.length > 0 &&
                        WhatsOnHome.map((item, index) => {
                          return (
                            <div
                              className={
                                'col-12 col-lg-4 d-flex align-items-stretch h-100 px-3 '
                              }
                              key={index}
                            >
                              <div className='card w-100'>
                                <img
                                  src={item.image}
                                  style={{
                                    height: '250px',

                                    objectFit: 'cover',
                                  }}
                                  className='card-img-top w-full'
                                  alt={
                                    item?.imgAlt ? item.imgAlt : 'whatson-image'
                                  }
                                />
                                <div className='card-body bg-warning d-flex flex-column justify-content-between'>
                                  <h5 className='card-title body-text'>
                                    {item.heading1}
                                  </h5>
                                  <div>
                                    <p className='card-text text-light mt-auto'>
                                      {item.shortContent}
                                    </p>
                                    <Link
                                      href={`/whats-on/${item.title}`}
                                      className='btn text-light border border-warning rounded-0 custom-cursor mt-auto align-self-center'
                                    >
                                      <button
                                        type='button'
                                        className='btn text-light border border-white rounded-0 custom-cursor mt-auto align-self-center text-uppercase'
                                        onMouseOver={(e) => {
                                          e.target.classList.remove(
                                            'border-success'
                                          );
                                          e.target.classList.add(
                                            'bg-success',
                                            'text-white',
                                            'border-white'
                                          );
                                        }}
                                        onMouseOut={(e) => {
                                          e.target.classList.remove(
                                            'border-success'
                                          );
                                          e.target.classList.remove(
                                            'bg-success',
                                            'text-white',
                                            'border-white'
                                          );
                                        }}
                                      >
                                        Read More...
                                      </button>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </Slider>
                  </div>
                </div>
              </div>
              {/* <div className="row mt-4">
                <div className="col-12">
                  <NavLink
                    to="/whats-on"
                    className="custom-cursor"
                  >
                    <PrimaryButton>SEE ALL</PrimaryButton>
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
