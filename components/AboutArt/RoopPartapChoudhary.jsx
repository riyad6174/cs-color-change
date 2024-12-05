import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import RoopPartapChoudharyImage from "../../public/assets/images/RoopPartapChoudhary2.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";

const RoopPartapChoudhary = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid mt-4 mt-lg-0 mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              {/* <img
                  className="img-fluid"
                  src={YellowElephant}
                  alt="YellowElephant"
                  width={150}
                /> */}
              <h2 className="mt-3 text-center text-success">
                Roop Partap Choudhary
              </h2>
              <p className="text-center text-warning">
                FOUNDER AND OWNER OF COLONEL SAAB RESTAURANT COVENT GARDEN
              </p>
              <p className="text-center">
                Roop Partap Choudhary is the founder and owner of Colonel Saab.
                He studied Hospitality in the US, followed by an MBA in Finance
                from Singapore and a Management programme at the Cornell
                University where he focussed on Asian Hospitality Patterns.
                <br />
                <br />
                Continuing his mother and father&apos;s proud legacy, Roop is
                also the Executive Director of the Choudhary&apos;s
                award-winning palace hotel, Noor Mahal in Karnal, Northern
                India. Prior to working in the family business, he learnt the
                hospitality ropes at some of India&apos;s best-known hotels
                including the ITC Maurya in Delhi
              </p>
              <Link href="/story" className="custom-cursor">
                <PrimaryButton className="mt-3">OUR STORY</PrimaryButton>
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
              src={RoopPartapChoudharyImage}
              alt="RoopPartapChoudhary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoopPartapChoudhary;
