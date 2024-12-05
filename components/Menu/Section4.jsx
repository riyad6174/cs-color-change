import { saveAs } from "file-saver";
import Image from "next/image";
import { useRef, useState } from "react";
import Download from "../../public/assets/images/download.svg";
import Tasting from "../../public/assets/images/Tasting.jpg";
// import TastingMenu from "../../public/assets/pdf/TastingMenu.pdf";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section4 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);
  // const menuItem = [
  //   {
  //     name: "Mall Road's Dahi Sev Puri",
  //     price: "",
  //   },
  //   {
  //     name: "Chilli Mogo",
  //     price: "",
  //   },
  //   {
  //     name: "Kandhari Paneer Tikka",
  //     price: "",
  //   },
  //   {
  //     name: "Anglo Indian Chicken Chop",
  //     price: "",
  //   },
  //   {
  //     name: "Mango Sorbet",
  //     price: "",
  //   },
  //   {
  //     name: "Sarsoi Ajwaini Fish Tikka",
  //     price: "",
  //   },
  //   {
  //     name: "Sunday Lamb Curry",
  //     price: "",
  //   },
  //   {
  //     name: "Falahari Kofta Curry",
  //     price: "",
  //   },
  //   {
  //     name: "Malpua Waffles",
  //     price: "",
  //   },
  //   {
  //     name: "Raspberry, Pistachio & Coconut Tart",
  //     price: "",
  //   },
  // ];

  return (
    <div ref={divRef} id="tasting-menu" className="container-fluid px-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            {isVisible && (
              <>
                <h2 className="mb-3 text-center text-success">
                  <span className="d-inline-block">Tasting Menu</span>
                </h2>
                <p className="px-5 text-center">
                  Experience a culinary journey with Chef Sohan Bhandari, a
                  curation of his culinary heritage and signature dishes. An ode
                  to Indian homemakers & traditional Indian cooked food.
                </p>

                {/* <div
                  style={{
                    height: "320px",
                    overflow: "hidden",
                    overflowY: "scroll",
                  }}
                >
                  {menuItem.length > 0 &&
                    menuItem.map((item, index) => {
                      return (
                        <div className="row" key={index}>
                          <div className="col-9 col-lg-10">
                            <p className="text-start custom-cursor">
                              {item.name}
                            </p>
                          </div>
                          <div className="col-3 col-lg-2">
                            <p className="float-end">{item.price}</p>
                          </div>
                          
                       
                          <div>
                            <p
                              className="float-start custom-cursor"
                              onClick={() => {
                                sliderRef.current.slickGoTo(index);
                              }}
                              onMouseOver={() => {
                                sliderRef.current.slickGoTo(index);
                              }}
                            >
                              {item.name}
                            </p>
                            <p className="float-end">{item.price}</p>
                          </div>

                        </div>
                      );
                    })}
                </div> */}
                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    // setDownloadModal(true);
                    saveAs("/assets/pdf/TastingMenu.pdf", "TastingMenu.pdf");
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
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex flex-column justify-content-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={Tasting}
              alt="Tasting"
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size="sm"
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
            download={true}
            pdf="Tasting"
          />
        )}
      </div>
    </div>
  );
};

export default Section4;
