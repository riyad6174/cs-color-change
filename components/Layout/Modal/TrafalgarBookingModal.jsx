import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";

const TrafalgarBookingModal = (props) => {
  return (
    <Modal className="h-75" show={props.show} centered onHide={props.onHide}>
      <Modal.Header className="border-0 sticky-top">
        <div className="d-flex w-100">
          <div>
            <p className="fs-17 fw-bolder mt-2 mb-0">{props.title}</p>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className={`btn btn-danger border-0 btn-circle shadow-none custom-cursor`}
              onClick={props.onHide}
            >
              {/* <X size={18} /> */}
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="px-20 pb-4 pt-0">
        <iframe
          src="https://www.opentable.co.uk/r/colonel-saab-reservations-london-2?restref=342000&lang=en-GB&ot_source=Restaurant%20website"
          title={"booking"}
          className="w-100 vh-100"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default TrafalgarBookingModal;
