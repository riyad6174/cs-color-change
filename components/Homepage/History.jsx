import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import ColonelSaabDrawingImg from "../../public/assets/images/ColonelSaabDrawing.webp";
import LotusImg from "../../public/assets/images/lotus pink.png";

import IndianBestRestaurant from "../../public/assets/images/indian-best-restaurant.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
// import YellowElephant from "../../public/assets/images/yellowElephant.png";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const History = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  return (
    <>
      <div
        ref={ref}
        className="container-fluid d-flex justify-content-center align-items-center px-2 py-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-none text-center d-lg-flex align-items-center">
              <Image
                className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
                src={ColonelSaabDrawingImg}
                alt="ColonelSaabDrawingImg"
              />
            </div>
            <div className="col-12 col-lg-6 px-lg-5 text-center">
              <Fade bottom delay={100}>
                {/* <img
                  className="img-fluid"
                  src={YellowElephant}
                  alt="YellowElephant"
                  width={150}
                /> */}

                <h2 className="mt-5 fw-bold text-success">
                  A New Chapter for Holborn Town Hall
                </h2>
                <p className="mt-5 text-center">
                  Colonel Saab is situated in the Grade II listed Holborn Town
                  Hall building, which first opened as a public library in 1894.
                  Today, apart from a few original features the new exotic
                  design and decor of the restaurant compliments the old
                  building with warm colours, brass and wood features and a
                  stunning collection of chandeliers which have been handcrafted
                  and shipped over from India.
                </p>
                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    setDownloadModal(true);
                  }}
                >
                  SUBSCRIBE
                </PrimaryButton>
              </Fade>
            </div>
            <div className="col-12 col-lg-6 d-block d-lg-none pt-5 pt-lg-0 text-center">
              <Image
                className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
                src={IndianBestRestaurant}
                alt="IndianBestRestaurant"
              />
            </div>
          </div>
        </div>
      </div>
      {downloadModal && (
        <SubscriptionModal
          size="sm"
          show={downloadModal}
          onHide={() => setDownloadModal(!downloadModal)}
        />
      )}
    </>
  );
};

export default History;
