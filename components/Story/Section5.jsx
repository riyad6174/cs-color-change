import { useRef } from "react";
import Fade from "react-reveal/Fade";
import useOnScreen from "../Hook/useOnScreen";
// import PrimaryButton from "../Layout/Button/PrimaryButton";
import Image from "next/image";
import ChefSohanBhandar from "../../public/assets/images/ChefSohanBhandar.jpg";
import useWindowSize from "../Hook/windowSize";

const Section5 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const windowSize = useWindowSize();

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 d-none d-lg-flex align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={ChefSohanBhandar}
              alt="ChefSohanBhandar"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                Chef Sohan Bhandari
              </h2>
              <p className="text-warning">
                HEAD CHEF OF COLONEL SAAB INDIAN RESTAURANT COVENT GARDEN
              </p>

              <p className="text-center">
                From humble beginnings, learning at home, and cooking in the
                family kitchen with his mother; he rapidly progressed towards an
                established career and the winning of multiple awards. After a
                decade in India Sohan began his journey with several years
                working in the middle east before joining Roop and his team at
                Colonel Saab in London.
                <br />
                <br />
                Sohan&apos;s main expertise is rooted in Modern Indian food.
                However, having also worked with some of the world's best chefs
                producing international cuisines, he brings an excellent touch
                of fusion to his exotic flavours.
                <br />
                <br />
                Sohan always prides himself on creating a unique menu containing
                traditional and regional nuances developed by him, that will
                greatly enhance the guest's culinary dining experience.
              </p>
              {/* <NavLink
                to="/menu"
                className="custom-cursor"
              >
                <PrimaryButton className="mt-3">MENUS</PrimaryButton>
              </NavLink> */}
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex d-lg-none align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={ChefSohanBhandar}
              alt="ChefSohanBhandar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
