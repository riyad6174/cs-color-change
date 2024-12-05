import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import PrivateDiningRoom3 from "../../public/assets/images/weddingDinnerImages/Colsaabweddingsetup1.jpg";
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
              {/* <h2 className="mt-3 text-center text-success">
                Private Dinner Parties
              </h2> */}
              <p className="text-center">
                The private dining rooms at Memsaab have borne witness to
                countless laughter, shared stories, and warm memories. With
                their elegant ambience, personalised service, and a feast fit
                for royalty, they continue to be a favoured choice for weddings
                and celebration dinners. When you choose to celebrate with us,
                you're not just booking a venue; you're creating a unique memory
                that will be cherished forever. <br />
                For more information on our private dining rooms including
                capacities <a href="https://colonelsaab.co.uk/private-dining-rooms">click here</a> or contact our reservations team by{" "}
                <a href="mailto:reservations@colonelsaab.co.uk">
                  email
                </a> <br />  or by phone{" "}
                <a href="tel:+020 8016 6800">020 8016 6800</a>  <br />
                At Memsaab, we don't just offer food; we offer an experience, a
                journey, a celebration. So, for your next big event or intimate
                gathering, let us create a magical experience for you and your
                loved ones. Let the festivities begin in the Memsaab private
                dining rooms at Colonel Saab!
              </p>
              {/* 
              <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setDownloadModal(true);
                }}
              >
                ENQUIRE NOW
              </PrimaryButton> */}
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5 p-4"
                  : "img-fluid ms-lg-5 p-4"
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
