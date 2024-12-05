import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";

import AntonyBertinImage from "../../public/assets/images/AntonyBertin.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";

const AntonyBertin = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid  mt-4 mt-lg-0 mb-lg-5 px-2 ">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-success">Antony Bertin</h2>
              <p className="text-center text-warning">
                PROFESSIONAL MIXOLOGIST AT INDIAN RESTAURANT IN CENTRAL LONDON
                COVENT GARDEN
              </p>
              <p className="text-center">
                Antony Bertin has already had a stellar career in some of
                France&apos;s top restaurants including Hotel Les Roches on the
                Cote d&apos;Azur, Chateau d&apos;Artigny in the Loire and Jols
                in Lyons. He has won many awards including the Martini Barman of
                the Year France in 2013. For Colonel Saab, Antony has curated
                some incredible cocktails, including The Colonel Saab - a
                bourbon and Bombay chai concoction, as well as Binny, named
                after Mrs. Choudhary and a Jasmine Sour.
              </p>
              <Link href="/menu" className="custom-cursor">
                <PrimaryButton className="mt-3">MENUS</PrimaryButton>
              </Link>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal" : "img-fluid"}
              src={AntonyBertinImage}
              alt="AntonyBertin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntonyBertin;
