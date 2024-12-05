import Image from "next/image";
import { useRef, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import Download from "../../public/assets/images/download.svg";
import MenuDrinks1 from "../../public/assets/images/MenuDrinks1.jpg";
import MenuDrinks2 from "../../public/assets/images/MenuDrinks2.jpg";
import MenuFood1 from "../../public/assets/images/MenuFood1.jpg";
import MenuFood2 from "../../public/assets/images/MenuFood2.jpg";
import MenuFood3 from "../../public/assets/images/MenuFood3.jpg";
import MenuFood4 from "../../public/assets/images/MenuFood4.jpg";
import MenuFood5 from "../../public/assets/images/MenuFood5.jpg";
import MenuFood6 from "../../public/assets/images/MenuFood6.jpg";
import MenuFood7 from "../../public/assets/images/MenuFood7.png";
import YellowElephant from "../../public/assets/images/yellowElephant.png";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section5 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [downloadModal, setDownloadModal] = useState(false);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);
  const menuItem = [
    {
      name: "Dragonwell Green",
      price: "£3.25",
      image: MenuFood1,
    },
    {
      name: "Egyptian Mint",
      price: "£3.25",
      image: MenuFood2,
    },
    {
      name: "Citrus Chamomile",
      price: "£3.25",
      image: MenuFood3,
    },
    {
      name: "Persian Pomegranate",
      price: "£3.25",
      image: MenuFood4,
    },
    {
      name: "Spicy Rooibos",
      price: "£3.25",
      image: MenuFood5,
    },
    {
      name: "Turmeric Citrus",
      price: "£3.25",
      image: MenuFood6,
    },
    {
      name: "Organic Tsuki Matcha",
      price: "£3.25",
      image: MenuFood7,
    },
    {
      name: "Lemon Verbena",
      price: "£3.25",
      image: MenuDrinks1,
    },
    {
      name: "English Breakfast",
      price: "£3.50",
      image: MenuDrinks2,
    },
    {
      name: "Organic Darjeeling",
      price: "£3.50",
      image: MenuDrinks2,
    },
    {
      name: "Spiced Chai",
      price: "£3.50",
      image: MenuDrinks2,
    },
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    beforeChange: (current, next) => setSlideIndex(next),
    rtl: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div ref={divRef} className="container-fluid px-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center text-center">
            <div className="row">
              <div className="text-center">
                <ul className="d-flex flex-wrap align-items-center justify-content-center p-0">
                  <AiOutlineArrowLeft
                    className="me-2 text-success"
                    size={20}
                    onClick={() => {
                      slider1Ref.current.slickGoTo(slideIndex - 1);
                    }}
                  />
                  <li className="list-group-item bg-transparent me-2">
                    <Image
                      className="img-fluid mx-auto d-block"
                      src={YellowElephant}
                      alt="YellowElephant"
                      width={80}
                    />
                  </li>
                  {/* <li className="list-group-item bg-transparent me-2">2</li>
                  <li className="list-group-item bg-transparent me-2">3</li> */}
                  <AiOutlineArrowRight
                    className="me-2 text-success"
                    size={20}
                    onClick={() => {
                      slider1Ref.current.slickGoTo(slideIndex + 1);
                    }}
                  />
                </ul>
              </div>
            </div>
            <Slider ref={slider1Ref} {...settings}>
              {menuItem.length > 0 &&
                menuItem.map((item, index) => {
                  return (
                    <div key={index} className="d-flex justify-content-center">
                      <Image src={item.image} alt={item.name} width={300} />
                    </div>
                  );
                })}
            </Slider>
          </div>
          <div className="col-12 col-lg-6 text-center">
            {isVisible && (
              <>
                <h2 className="mb-3 text-center text-success">
                  <span className="d-inline-block">TEAS/ INFUSIONS</span>
                </h2>
                <div>
                  {menuItem.length > 0 &&
                    menuItem.map((item, index) => {
                      return (
                        <div className="row" key={index}>
                          <div className="col-9 col-lg-10">
                            <p
                              className="text-start custom-cursor"
                              onClick={() => {
                                slider1Ref.current.slickGoTo(index);
                                slider2Ref.current.slickGoTo(index);
                              }}
                              onMouseOver={() => {
                                slider1Ref.current.slickGoTo(index);
                                slider2Ref.current.slickGoTo(index);
                              }}
                            >
                              {item.name}
                              {item.perPerson && (
                                <>
                                  <br />
                                  <span className="text-start text-success">
                                    Per person
                                  </span>
                                </>
                              )}
                            </p>
                          </div>
                          <div className="col-3 col-lg-2">
                            <p className="float-end">{item.price}</p>
                          </div>
                          {/* <div>
                            <p
                              className="float-start custom-cursor"
                              onClick={() => {
                                slider1Ref.current.slickGoTo(index);
                              }}
                              onMouseOver={() => {
                                slider1Ref.current.slickGoTo(index);
                              }}
                            >
                              {item.name}
                              {item.perPerson && (
                                <>
                                  <br />
                                  <span className="float-start text-success">
                                    Per person
                                  </span>
                                </>
                              )}
                            </p>
                            <p className="float-end">{item.price}</p>
                          </div> */}
                        </div>
                      );
                    })}
                </div>
                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    setDownloadModal(true);
                  }}
                >
                  <Image
                    className="img-fluid me-2"
                    src={Download}
                    alt="Download"
                    width={20}
                  />
                  DOWNLOAD MENU
                </PrimaryButton>
              </>
            )}
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex d-lg-none flex-column justify-content-center text-center">
            <div className="row">
              <div className="text-center">
                <ul className="d-flex flex-wrap align-items-center justify-content-center p-0">
                  <AiOutlineArrowLeft
                    className="me-2 text-success"
                    size={20}
                    onClick={() => {
                      slider2Ref.current.slickGoTo(slideIndex - 1);
                    }}
                  />
                  <li className="list-group-item bg-transparent me-2">
                    <Image
                      className="img-fluid mx-auto d-block"
                      src={YellowElephant}
                      alt="YellowElephant"
                      width={80}
                    />
                  </li>
                  {/* <li className="list-group-item bg-transparent me-2">2</li>
                  <li className="list-group-item bg-transparent me-2">3</li> */}
                  <AiOutlineArrowRight
                    className="me-2 text-success"
                    size={20}
                    onClick={() => {
                      slider2Ref.current.slickGoTo(slideIndex + 1);
                    }}
                  />
                </ul>
              </div>
            </div>
            <Slider ref={slider2Ref} {...settings}>
              {menuItem.length > 0 &&
                menuItem.map((item, index) => {
                  return (
                    <div key={index} className="d-flex justify-content-center">
                      <Image src={item.image} alt={item.name} width={300} />
                    </div>
                  );
                })}
            </Slider>
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size="sm"
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
          />
        )}
      </div>
    </div>
  );
};

export default Section5;
