import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import IndianBestRestaurant from "../../public/assets/images/IndianBestRestaurant3.jpg";
import useOnScreen from "../Hook/useOnScreen";
import useWindowSize from "../Hook/windowSize";
import PrimaryButton from "../Layout/Button/PrimaryButton";

const Section3 = () => {
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
              src={IndianBestRestaurant}
              alt="RoopPartapChoudhary"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              {/* <img
                  className="img-fluid"
                  src={YellowElephant}
                  alt="YellowElephant"
                  width={150}
                /> */}
              <h2 className="mt-3 text-center text-success">
                Indian Restaurant Covent Garden
              </h2>
              <p className="text-center text-warning">
                AN ECLECTIC DÉCOR WITH CONSUMMATE ELEGANCE AT INDIAN RESTAURANT
                COVENT GARDEN
              </p>
              <p className="text-center">
                Colonel Saab goes beyond the artifice of contrived Indian kitsch
                and presents an eclectic décor with consummate elegance, wit and
                wisdom. The Choudharys are great lovers of fine art and this is
                reflected in this aesthetically sumptuous space which combines
                the traditional with the progressive and is in a way an
                extension of Roop's own design ethos. It is a celebration of
                Indian food and drink through the eyes of a couple who had the
                good fortune to travel the length and breadth of an
                extraordinary country, interact with locals wherever they went,
                and collect beautiful things and document what they most loved
                to eat.
              </p>
              <Link href="/menu" className="custom-cursor">
                <PrimaryButton className="mt-3">MENUS</PrimaryButton>
              </Link>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex d-lg-none align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={IndianBestRestaurant}
              alt="RoopPartapChoudhary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
