import Head from 'next/head';
import { useRef, useState } from 'react';

import Layout from '@/components/Layout';
import Reception from '../../public/assets/images/reception.svg';

import parse from 'html-react-parser';
import BookingModal from '../../components/Layout/Modal/BookingModal';
import Section1 from '../../components/WhatsOnInner/Section1';
import Slider from '../../components/WhatsOnInner/Slider';
import { WhatsOn } from '../../utils/content';
import Image from 'next/image';
import TrafalgarBookingModal from '@/components/Layout/Modal/TrafalgarBookingModal';
import { useEffect } from 'react';

export default function Page({ blog }) {
  const [beforeBookButtonDropdownShow, setBeforeBookButtonDropdownShow] =
    useState(false);
  const [afterbookButtonDropdownShow, setAfterBookButtonDropdownShow] =
    useState(false);
  const [bookingModal, setBookingModal] = useState(false);
  const [trafBookingModal, setTrafBookingModal] = useState(false);

  const bookButtonBeforeDropdownRef = useRef(null);
  const bookButtonAfterDropdownRef = useRef(null);

  // useEffect(() => {

  //   if (query && query.slug) {
  //     setBlog(
  //           WhatsOn.find((element) => element.title === query.slug.toString()),
  //     );
  //   }

  // });

  const handleClickOutside1 = (event) => {
    if (
      bookButtonAfterDropdownRef.current &&
      !bookButtonAfterDropdownRef.current.contains(event.target)
    ) {
      setAfterBookButtonDropdownShow(false);
    }
  };
  const handleClickOutside2 = (event) => {
    if (
      bookButtonBeforeDropdownRef.current &&
      !bookButtonBeforeDropdownRef.current.contains(event.target)
    ) {
      setBeforeBookButtonDropdownShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside1);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside1);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookButtonAfterDropdownRef]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside2);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookButtonBeforeDropdownRef]);

  // end dropdown

  return (
    <>
      <Head>
        <title>
          {blog && blog.metaTitle
            ? blog.metaTitle
            : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'}
        </title>

        {/* <meta
          name="description"
          content="Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
        /> */}
        <meta
          name='description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />

        <meta
          name='keywords'
          content={
            blog && blog.metaKeys
              ? blog.metaKeys
              : "indian restaurant, London, veganuary,  valentinesday, Valentine's at Colonel Saab, Valentines at Colonel Saab."
          }
        />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta httpEquiv='Accept-CH' content='DPR, Viewport-Width' />
        <meta name='generator' content='pgwd' />

        {/* twitter */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@Colonelsaabuk' />
        <meta
          name='twitter:title'
          content={
            blog && blog.metaTitle
              ? blog.metaTitle
              : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
          }
        />
        <meta
          name='twitter:description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />
        <meta name='twitter:image' content={blog.image} />

        {/* facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content={
            blog && blog.metaTitle
              ? blog.metaTitle
              : 'Colonel Saab Indian Restaurant Covent Garden Holborn Vegan Vegetarian'
          }
        />
        <meta
          property='og:description'
          content={
            blog && blog.metaDesc
              ? blog.metaDesc
              : "Colonel Saab a modern Indian restaurant in the West End of Central London, Covent Garden, Holborn, near to Soho, Bloomsbury, with vegan and vegetarian dishes. Valentine's at Colonel Saab. Valentines at Colonel Saab."
          }
        />

        <meta
          property='og:url'
          content={`https://colonelsaab.co.uk/whats-on/${blog.slug}`}
        />
        <meta
          property='og:image'
          content={`https://colonelsaab.co.uk${blog.image}`}
        />
        {/* <meta property="og:image:width" content="683" />
        <meta property="og:image:height" content="1024" /> */}

        <meta
          name='facebook-domain-verification'
          content='7s3po0udvppgl9yiuutxmn6so4e17w'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Layout>
          {blog && (
            <Slider
              image={blog.image}
              imgAlt={blog && blog.imgAlt ? blog.imgAlt : 'whats-on-image'}
            />
          )}

          {blog && <Section1 blog={blog} />}

          {blog && (
            <>
              <div className='container-fluid px-5 py-2 '>
                {blog?.bookingButtonBefore ? (
                  <div className=' d-flex align-items-center justify-content-center mb-4'>
                    <div
                      className='dropup booking-btn-dropdown '
                      ref={bookButtonBeforeDropdownRef}
                    >
                      <button
                        type='button'
                        className='dropbtn   btn  text-light border border-warning rounded-0 custom-cursor bg-success'
                        style={{
                          backgroundColor: '#f99f49',
                        }}
                        onMouseOver={(e) => {
                          e.target.classList.add(
                            'bg-transparent',
                            'border',
                            'border-1',
                            'border-warning'
                          );
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove(
                            'bg-transparent',
                            'border',
                            'border-1',
                            'border-warning'
                          );
                        }}
                        onClick={() => {
                          // setBookingModal(true);
                          setBeforeBookButtonDropdownShow(
                            !beforeBookButtonDropdownShow
                          );
                        }}
                      >
                        <Image
                          className='img-fluid me-2'
                          src={Reception}
                          alt='Reception'
                          width={20}
                        />
                        MAKE A BOOKING
                      </button>

                      <div
                        className={
                          beforeBookButtonDropdownShow
                            ? `${
                                blog.showTrafalgarOnly
                                  ? 'dropup-content-with-rem d-block d-lg-block border border-2'
                                  : 'dropup-content d-block d-lg-block border border-2'
                              } `
                            : 'dropup-content d-none border border-2'
                        }
                      >
                        <a
                          className='custom-cursor justify-content-center border-bottom border-warning'
                          onClick={(e) => {
                            // e.preventDefault();
                            setBookingModal(false);
                            setTrafBookingModal(true);
                          }}
                        >
                          Trafalgar Square
                        </a>
                        {blog.showTrafalgarOnly == true ? (
                          <div></div>
                        ) : (
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
                        )}
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* show ticket */}

                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {blog?.bookShowTickets ? (
                  <div className='d-flex align-items-center justify-content-center mb-4 gap-3'>
                    <div>
                      <div className='text-center my-3'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://www.mrsdoubtfiremusical.co.uk/tickets/'
                        >
                          <button className='btn text-light border border-warning rounded-0 custom-cursor bg-success'>
                            BOOK SHOW TICKETS
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}

                {/* show ticket ends */}

                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}

                <div className=' text-start'>{parse(blog.content)}</div>

                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}

                {blog?.bookShowTickets ? (
                  <div className='d-flex align-items-center justify-content-center mb-4 gap-3'>
                    <div>
                      <div className='text-center my-3'>
                        <a
                          target='_blank'
                          rel='noreferrer'
                          href='https://www.mrsdoubtfiremusical.co.uk/tickets/'
                        >
                          <button className='btn text-light border border-warning rounded-0 custom-cursor bg-success'>
                            BOOK SHOW TICKETS
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}
                {/* =============================================== */}

                {blog.bookingButtonAfter == false ? null : (
                  <div className=' d-flex align-items-center justify-content-center'>
                    <div
                      className='dropup booking-btn-dropdown '
                      ref={bookButtonAfterDropdownRef}
                    >
                      <button
                        type='button'
                        className='dropbtn   btn  text-light border border-warning rounded-0 custom-cursor bg-success'
                        style={{
                          backgroundColor: '#f99f49',
                        }}
                        onMouseOver={(e) => {
                          e.target.classList.add(
                            'bg-transparent',
                            'border',
                            'border-1',
                            'border-warning'
                          );
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove(
                            'bg-transparent',
                            'border',
                            'border-1',
                            'border-warning'
                          );
                        }}
                        onClick={() => {
                          // setBookingModal(true);
                          setAfterBookButtonDropdownShow(
                            !afterbookButtonDropdownShow
                          );
                        }}
                      >
                        <Image
                          className='img-fluid me-2'
                          src={Reception}
                          alt='Reception'
                          width={20}
                        />
                        MAKE A BOOKING
                      </button>

                      <div
                        className={
                          afterbookButtonDropdownShow
                            ? `${
                                blog.showTrafalgarOnly
                                  ? 'dropup-content-with-rem d-block d-lg-block border border-2'
                                  : 'dropup-content d-block d-lg-block border border-2'
                              } `
                            : 'dropup-content d-none border border-2'
                        }
                      >
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
                        {blog.showTrafalgarOnly == true ? (
                          <div></div>
                        ) : (
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
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* =============================================== */}
          {/* =============================================== */}
          {/* =============================================== */}
          {/* =============================================== */}
          {/* =============================================== */}
          {/* =============================================== */}
          {/* =============================================== */}

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
        </Layout>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const whats_on = WhatsOn.filter((value) => Object.keys(value).length !== 0);
  const paths = whats_on.map((item) => {
    return { params: { slug: item.slug } };
  });

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // { slug: 'pancake-day-2023' }
  const blog = WhatsOn.find(
    (element) => element.slug === params.slug.toString()
  );
  return { props: { blog } };
}
