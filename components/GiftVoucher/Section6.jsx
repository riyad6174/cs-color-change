import { useRef } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
// import PrimaryButton from "../Layout/Button/PrimaryButton";
import Image from "next/image";
import OurTeam from "../../public/assets/images/Our team.jpg";

const Section6 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">Our Team</h2>
              <p className="text-warning"></p>

              <p className="text-center"></p>

              {/* <NavLink
                to="/about-the-art"
                className="custom-cursor"
              >
                <PrimaryButton className="mt-3">READ MORE</PrimaryButton>
              </NavLink> */}
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5"
                  : "img-fluid ms-lg-5"
              }
              src={OurTeam}
              alt="OurTeam"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
