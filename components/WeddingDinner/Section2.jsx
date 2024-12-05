import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import PrivateDiningRoom1 from "../../public/assets/images/weddingDinnerImages/Colsaabweddingsetup2.jpg";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import BookingModal from "../Layout/Modal/BookingModal";

const Section2 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const [bookingModal, setBookingModal] = useState(false);

  return (
    <div ref={ref} className="container-fluid mb-lg-5 px-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-5 text-center d-flex flex-column justify-content-center">
            <Fade bottom delay={100}>
              <h2 className="mt-3 text-center text-success">
              The Magic of Weddings at Memsaab
              </h2>
              <p className="text-center">
              Every couple dreams of a wedding that mirrors their unique love story, one that seamlessly blends tradition and individuality. At Memsaab, our private dining rooms offer just that - an intimate yet expansive setting, designed to amplify the magic of your special day. The charm of our elegantly decorated rooms, the exquisite menu tailored to your preferences, and the warm, attentive service ensure that your wedding becomes a celebration to remember.
              <br/>
As you exchange vows and embrace new beginnings, our dedicated team ensures every detail is attended to. From customising the décor to match your vision to orchestrating a smooth event flow, we bring your dream wedding to life in our private dining rooms. Your guests, serenaded by our enchanting ambience and delectable culinary experiences, will remember this day just as fondly as you do.

              </p>
              {/* <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
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
              src={PrivateDiningRoom1}
              alt="PrivateDiningRoom"
            />
          </div>
          {bookingModal && (
            <BookingModal
              show={bookingModal}
              onHide={() => setBookingModal(!bookingModal)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section2;
