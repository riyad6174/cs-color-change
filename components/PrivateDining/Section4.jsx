import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import PrivateDiningRoom3 from "../../public/assets/images/PrivateDiningRoom3.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import SubscriptionModal from "../Layout/Modal/SubscriptionModal";

const Section4 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [downloadModal, setDownloadModal] = useState(false);

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                Private Dinner Parties
              </h2>
              <p className="text-center">
                Having opened during the unprecedented times of the pandemic the
                restaurant has very quickly learnt how to accommodate all kinds
                of changing situations. With 5-star service and friendly team
                members, Colonel Saab welcomes most event types and the team
                takes great pleasure in giving guests a tour and showcasing the
                stories and artefacts at Colonel Saab
                <br />
                Whether you&apos;re celebrating something special with friends
                and family or you&apos;d like to hold an important business
                meeting or product launch, we welcome intimate smaller or larger
                groups of people to enjoy the privacy of one of our stunning two
                private dining rooms.
              </p>

              <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setDownloadModal(true);
                }}
              >
                ENQUIRE NOW
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
              src={PrivateDiningRoom3}
              alt="PrivateDiningRoom3"
            />
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

export default Section4;
