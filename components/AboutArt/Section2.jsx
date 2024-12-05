import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import AboutTheArt1 from "../../public/assets/images/indian-best-restaurant.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section2 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                Indian Antiques at Colonel Saab Restaurant Covent Garden
              </h2>
              {/* <p className="text-center text-warning">
                ORNATE COLOURED GLASS CHANDELIERS AT THIS ECLECTIC INDIAN
                RESTAURANT IN COVENT GARDEN SHOWCASING A COLLECTION OF ORIGINAL
                INDIAN ARTIFACTS
              </p> */}
              <p className="text-center text-warning">
                ORNATE GLASS CHANDELIERS AND ARTEFACTS THAT TELL A TALE
              </p>
              <p className="text-center">
                Dining at Colonel Saab is also a feast for the eyes, with a
                treasure trove of eclectic Indian art and artefacts collected by
                Roop Partap Choudhary&apos;s family on their travels, lovingly
                brought to London.
                <br />
                <br />
                The main restaurant features a carved temple door from South
                India, you will find a grand, pure silver door from a Gujarat
                temple embellishing the staircase. The opulent dining room is
                bathed in light by a canopy of ornate chandeliers from
                Firozabad. A drinks bar made by Asprey for the Maharaja of
                Patiala proudly sits in the private dining room, while 17th and
                18th century Tanjore paintings and handwoven Persian silk
                carpets adorn the walls and precious decanters and crockery from
                the palace of the Maharaja of Faridkot shimmer in cabinets.
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
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5"
                  : "img-fluid ms-lg-5"
              }
              src={AboutTheArt1}
              alt="AboutTheArt1"
            />
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
    </div>
  );
};

export default Section2;
