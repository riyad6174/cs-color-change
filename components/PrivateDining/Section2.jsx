import Image from "next/image";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import PrivateDiningRoom1 from "../../public/assets/images/PrivateDiningRoom1.jpg";
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
                Beautiful Private Events
              </h2>
              <p className="text-center">
                Colonel Saab is situated in the Grade II listed Holborn Town
                Hall building, which first opened as a public library in 1894.
                Today, apart from a few original features the new exotic design
                and decor of the restaurant compliments the old building with
                warm colours, brass and wood features and a stunning collection
                of chandeliers which have been handcrafted and shipped over from
                India.
                <br />
                In addition to the restaurant and bar, we have two tastefully
                designed private dining rooms which accommodate up to 60 people
                standing or 30 for a seated dinner, creating the ideal setting
                for any corporate dining or celebratory event.
              </p>
              <PrimaryButton
                className="mt-3"
                onClick={() => {
                  setBookingModal(true);
                }}
              >
                MAKE A BOOKING
              </PrimaryButton>
            </Fade>
          </div>
          <div className="col-12 col-lg-7 mt-4 mt-lg-0 d-flex align-items-center">
            <Image
              className={
                isVisible
                  ? "img-fluid image-reveal ms-lg-5"
                  : "img-fluid ms-lg-5"
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
