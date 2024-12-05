import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import StoryFood1 from "../../public/assets/images/StoryFood1.jpg";
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
              src={StoryFood1}
              alt="StoryFood1"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
                A Contemporary View-point With An Old Soul
              </h2>
              <p className="text-center text-warning">
                ENJOY INVENTIVE INDIAN SMALL PLATES RESTAURANT COVENT GARDEN
              </p>

              <p className="text-center">
                Colonel Saab is the culmination of the journey and adventures
                across India of two people, Roop&apos;s parents, an Army Officer
                named Colonel Manbeer Choudhary and his wife Binny. The food is
                a blend of tradition with global ingredients and techniques,
                from street food signatures to home style Indian cooking and
                dishes taken from royal kitchens. Enjoy inventive Indian small
                plates created to share from regional recipes derived from
                home-chefs. Colonel Saab offers something for every palate and
                every occasion. It is a celebration of community and the
                exchange of eating well and of warmth. The restaurant showcases
                the unity as well as the diversity of the cuisines of India with
                a myriad of influences gained across centuries. Colonel Saab is
                a contemporary viewpoint with an old soul, and a nostalgic
                palate of memories, aromas and flavours.
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
              src={StoryFood1}
              alt="StoryFood1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
