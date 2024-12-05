import { Modal } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import YellowElephant from "../../../public/assets/images/yellowElephant.png";
import PrimaryButton from "../Button/PrimaryButton";

const ChristmasModal = (props) => {
  return (
    <>
      <Fade bottom delay={3000}>
        <Modal show={props.show} centered onHide={props.onHide}>
          <Modal.Header className="border-0"></Modal.Header>
          <Modal.Body className="px-20 pb-4 pt-0 text-center">
            <img
              className="img-fluid"
              src={YellowElephant}
              alt="YellowElephant"
              width={150}
            />
            <h4 className="mt-3 text-success">WE'RE OPEN THIS CHRISTMAS!</h4>
            <p>
              Be our guest this season as we celebrate with our tantalising
              menus, bringing you a twist on traditional festive flavours. Our
              Set menus start from £56.95 throughout December and £95 for
              Christmas day lunch. All menus include a welcome drink.
            </p>
            <PrimaryButton
              className="mt-3 me-3"
              onClick={() => {
                props.onHide();
                props.setBookingModal(true);
              }}
            >
              BOOK NOW
            </PrimaryButton>
            <PrimaryButton className="mt-3" onClick={props.onHide}>
              CLOSE
            </PrimaryButton>
          </Modal.Body>
        </Modal>
      </Fade>
    </>
  );
};

export default ChristmasModal;
