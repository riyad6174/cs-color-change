import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import RoopPartapChoudhary from "../../public/assets/images/RoopPartapChoudhary.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";

const Section4 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                Roop Partap Choudhary
              </h2>
              <p className="text-warning">
                FOUNDER AND OWNER OF COLONEL SAAB RESTAURANT COVENT GARDEN
              </p>

              <p className="text-center">
                After returning home, they mulled over and encapsulated the
                whole experience. The zeal to serve a community, a region or a
                human felt stronger than anything else. They ventured into
                hospitality with a modest hotel and started their journey
                towards boutique and palace hotels. The hotels are today managed
                by their proud son <br />
                Roop Partap Choudhary. The couple have always aimed to infuse a
                sense of humility, glamour and history with their best- loved
                home-style traditions from across India, and Roop now hopes to
                do the same with Colonel Saab.
              </p>

              <Link href="/about-the-art" className="custom-cursor">
                <PrimaryButton className="mt-3">READ MORE</PrimaryButton>
              </Link>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5"
                  : "img-fluid ms-lg-5"
              }
              src={RoopPartapChoudhary}
              alt="RoopPartapChoudhary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
