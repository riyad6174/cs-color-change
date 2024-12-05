import { saveAs } from "file-saver";
import Image from "next/image";
import { useRef, useState } from "react";
import Desserts from "../../public/assets/images/gallery_images20.jpg";
import Download from "../../public/assets/images/download.svg";
// import AfternoonTeaMenu from "../../public/assets/pdf/AfternoonTeaMenu.pdf";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section6 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const divRef = useRef();
  const isVisible = useOnScreen(divRef);

  return (
    <div
      ref={divRef}
      id="DESSERTS"
      className="container-fluid px-2 py-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 d-none d-lg-flex flex-column justify-content-center text-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={Desserts}
              alt="Desserts"
            />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
            {isVisible && (
              <>
                <h2 className="mb-3 text-center text-success">
                  <span className="d-inline-block">Desserts</span>
                </h2>
              
                <p className="px-5 text-center">
                Indulge in a symphony of flavors at Colonel Saab, where exquisite Indian fine dining reaches its zenith with desserts like Rose Gulab Jamun and Rasmalai Milk Cake, whisking your taste buds on a sweet journey beyond compare.
                </p>

                <PrimaryButton
                  className="mt-3"
                  onClick={() => {
                    // setDownloadModal(true);
                    saveAs(
                      "/assets/pdf/Desserts.pdf",
                      "Desserts.pdf"
                    );
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
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={Desserts}
              alt="Desserts"
            />
          </div>
        </div>
        {downloadModal && (
          <SubscriptionModal
            size="sm"
            show={downloadModal}
            onHide={() => setDownloadModal(!downloadModal)}
            download={true}
            pdf="AfternoonTeaMenu"
          />
        )}
      </div>
    </div>
  );
};

export default Section6;
