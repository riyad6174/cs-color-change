import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Fade from "react-reveal/Fade";
import PrivateDiningRoom from "../../public/assets/images/weddingDinnerImages/Colsaabweddingsetup4.jpg";
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
              src={PrivateDiningRoom}
              alt="PrivateDiningRoom"
            />
          </div>
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
              A Celebration to Remember: Dinners at Memsaab
              </h2>
              <p className="text-center">
              At Memsaab, we believe that every dinner, whether it's marking a milestone or simply celebrating the joy of togetherness, deserves to be a grand affair. Our private dining rooms offer a cocoon of exclusivity and sophistication, transforming every dinner into a night of high spirits and memorable moments.
              <br />

When you step into our private dining rooms, you step into a world where fine dining meets extraordinary experiences. Our award-winning chefs take you on a gastronomic journey, crafting menus that reflect the authenticity of Indian cuisine fused with contemporary flavours. Each dish, thoughtfully curated and presented, becomes a celebration in itself.
<br />
The team at Memsaab takes great care in understanding your expectations, personalising every element of your dinner. From the lighting to the music, the décor to the menu, every detail resonates with your unique tastes and preferences. We don't just host dinners; we create experiences that linger on, long after the plates are cleared and the last toasts raised.

              </p>
              <Link href="/menu" className="custom-cursor">
                {/* <PrimaryButton className="mt-3">
                  WEDDING DINNER MENUS
                </PrimaryButton> */}
              </Link>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex d-lg-none align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal p-4" : "img-fluid p-4"}
              style={{
                marginLeft: windowSize.width >= 992 && "-3rem",
              }}
              src={PrivateDiningRoom}
              alt="PrivateDiningRoom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
