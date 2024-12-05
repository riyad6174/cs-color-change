import { saveAs } from "file-saver";
import Image from "next/image";
import { useRef, useState } from "react";
import ALACARTE from "../../public/assets/images/a al charte.jpg";
import Download from "../../public/assets/images/download.svg";
// import ALACARTEPDF from "../../public/assets/pdf/ALaCarte.pdf";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section2 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);
  // const menuItem = [
  //   {
  //     name: "Falahari Curry Kofta",
  //     price: "18.95",
  //   },
  //   {
  //     name: "Chef Sohan’s Confit of Cauliflower",
  //     price: "17.95",
  //   },
  //   {
  //     name: "Gutti Vankaya",
  //     price: "17.95",
  //   },
  //   {
  //     name: "Chole Kulche",
  //     price: "16.95",
  //   },
  //   {
  //     name: "Chicken Chettinad",
  //     price: "19.95",
  //   },
  //   {
  //     name: "Paneer Pakeezah",
  //     price: "19.95",
  //   },
  //   {
  //     name: "Memsaab’s Chicken Curry",
  //     price: "19.95",
  //   },
  //   {
  //     name: "Colonel Saab’s Butter Chicken",
  //     price: "19.95",
  //   },
  //   // {
  //   //   name: "Nadan Meen Curry",
  //   //   price: "20.95",
  //   // },
  //   // {
  //   //   name: "Beef Pepper Fry",
  //   //   price: "22.95",
  //   // },
  //   // {
  //   //   name: "Prawn Moilee",
  //   //   price: "22.95",
  //   // },
  //   // {
  //   //   name: "Sunday Lamb Curry",
  //   //   price: "25.95",
  //   // },
  //   // {
  //   //   name: "Shikari Raan",
  //   //   price: "31.95",
  //   // },
  // ];

  return (
    <div ref={divRef} id="ALaCarte" className="container-fluid px-2 py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            {isVisible && (
              <>
                <h2 className="mb-3 text-center text-success">
                  <span className="d-inline-block">A Là Carte</span>
                </h2>
                <p className="text-center">
                  The A Là Carte menu has a combination that offers multiple
                  options keeping in mind the dietary needs of the guests. The
                  dishes are flavourful and filling and yet not heavy on
                  pallette.
                  <br />
                  <br />
                  Colonel Saab offers dishes that are curated to perfection to
                  render an experience of flavours from the entire subcontinent.
                </p>
                {/* <div
                className="menu-item"
                style={{
                  height: "320px",
                  overflow: "hidden",
                  overflowY: "scroll",
                }}
                > */}
                {/* {menuItem.length > 0 &&
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
                        </div>
                      );
                    })} */}
                {/* </div> */}
                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    // setDownloadModal(true);
                    saveAs("assets/pdf/ALaCarte.pdf", "ALaCarte.pdf");
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
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 d-flex flex-column justify-content-center text-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={ALACARTE}
              alt="ALACARTE"
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size="sm"
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
            download={true}
            pdf="ALACARTE"
          />
        )}
      </div>
    </div>
  );
};

export default Section2;
