import { useEffect, useState } from 'react';
import useWindowSize from '../Hook/windowSize';
import backgorundImage from '../../public/assets/images/IntroPage/bgimage.png';
import Logo from '../../public/assets/images/IntroPage/Logo.png';
import Layer from '../../public/assets/images/IntroPage/Layer.png';
import Image from 'next/image';
// import StartingVideoMobile from "../../public/assets/video/IntroVideoForMobile.mp4";
//
// import Image from "next/image";

const IntroVideo = (props) => {
  // const windowSize = useWindowSize();
  //  const [videoFinish, setVideoFinish] = useState(false);
  const [IntroFinish, setIntroFinish] = useState(false);

  // useEffect(() => {
  //   // attemptPlay();
  //   setTimeout(() => {
  //     setVideoFinish(true);
  //     props.setVideoFinish(true);
  //   }, 4000);

  //   setTimeout(() => {
  //     props.setShowContent(true);
  //   }, 1500);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIntroFinish(true);
      props.setisIntroFinished(true);
    }, 3000);

    setTimeout(() => {
      props.setShowContent(true);
      // props.setChristmasModal(true);
    }, 1000);
  }, []);

  return (
    <>
      {/* {windowSize.width >= 992 && (
        <div className="intro-web">
          <video
            muted
            autoPlay
            controls=""
            className={videoFinish ? "d-none" : "w-100 h-100"}
            alt="Intro"
          >
            <source src="/assets/video/IntroVideo65.mp4" />
          </video>
        </div>
      )}
      {windowSize.width < 992 && (
        <div className="intro-mobile">
          <video
            muted
            autoPlay
            controls=""
            className={videoFinish ? "d-none" : ""}
            style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
            alt="Intro"
          >
            <source src="/assets/video/IntroForMobile40.mp4" />
          </video>
        </div>
      )} */}

      <div className={!IntroFinish && 'vh-100'}>
        <div className={IntroFinish ? 'd-none' : 'w-100 h-100 intro-web'}>
          <div className='bg-green vh-100 d-flex justify-content-center align-items-center bg-container'>
            <div className='w-100 h-100 position-absolute  d-flex justify-content-center align-items-center align-items-md-end '>
              <Image
                src={backgorundImage}
                className='img-fluid image-opacity d-none d-md-block w-100 h-100  '
                alt='Introgif'
              />
            </div>
            <div>
              <div className='d-flex justify-content-center align-items-center'>
                <Image
                  src={Logo}
                  priority
                  className='opacity-80 w-md-75 h-md-75 intro-logo  '
                  alt='Introgif'
                  // data-aos="zoom-in"
                  // data-aos-duration="700"
                />
              </div>
              <div className='d-flex align-items-center justify-content-center '>
                <Image
                  className='layer-size animation-left'
                  src={Layer}
                  alt='layer'
                  // data-aos="fade-right"
                  // data-aos-duration="2000"
                  // data-aos-delay="1000"
                />

                <h1
                  className='intro-text mt-md-3 mt-2  px-md-4 px-2 text-red fw-bold '
                  // data-aos="zoom-in"
                  // data-aos-duration="1500"
                  // data-aos-delay="500"
                >
                  MADE WITH LOVE
                </h1>
                <Image
                  className='layer-size animation-right'
                  src={Layer}
                  alt='layer'
                  // data-aos="fade-left"
                  // data-aos-duration="2000"
                  // data-aos-delay="1000"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroVideo;
