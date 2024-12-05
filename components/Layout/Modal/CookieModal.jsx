import { Modal, NavLink } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import Chrome from "../../../public/assets/images/browsers/chrome.png";
import Firefox from "../../../public/assets/images/browsers/firefox.png";
import IE from "../../../public/assets/images/browsers/ie.png";
import Opera from "../../../public/assets/images/browsers/opera.png";
import Safari from "../../../public/assets/images/browsers/safari.png";

const CookieModal = (props) => {
  return (
    <Modal show={props.show} size={"lg"} centered onHide={props.onHide}>
      <Modal.Header className="border-0">
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
        <div>
          <p>
            This website makes use of cookies to enhance browsing experience and
            provide additional functionality. None of this data can or will be
            used to identify or contact you.
            <br />
            <i className="d-block">
              <br />
              This website makes use of third party cookies, see the details in
              the privacy policy.
              <br />
            </i>
            <i className="d-block">
              <br />
              This website makes use of tracking cookies, see the details in the
              privacy policy.
              <br />
            </i>
            <i className="d-inline-block">
              <br />
              To learn more about how this website uses cookies or localStorage,
              please read our&nbsp;
              <NavLink to="/privacy" className="custom-cursor">
                PRIVACY POLICY
              </NavLink>
              .<br />
            </i>
            <br />
            By clicking <span>Allow cookies</span> you give your permission to
            this website to store small bits of data on your device.
            <br />
            <br />
            To learn more about cookies and localStorage, visit&nbsp;
            <a
              rel="noreferrer"
              target="_blank"
              href="http://ico.org.uk/for_organisations/privacy_and_electronic_communications/the_guide/cookies"
            >
              Information Commissioner's Office
            </a>
            .
          </p>
          <hr />
          To disable all cookies through the browser, click on the corresponding
          icon and follow the instructions:
          <br />
          <br />
          <div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://support.google.com/accounts/answer/61416?hl=en"
            >
              <img className="img-fluid me-2" src={Chrome} alt="chrome" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://support.mozilla.org/en-GB/kb/enable-and-disable-cookies-website-preferences"
            >
              <img className="img-fluid me-2" src={Firefox} alt="firefox" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="http://windows.microsoft.com/en-gb/internet-explorer/delete-manage-cookies#ie=ie-11"
            >
              <img className="img-fluid me-2" src={IE} alt="ie" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="http://help.opera.com/Windows/10.00/en/cookies.html"
            >
              <img className="img-fluid me-2" src={Opera} alt="opera" />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://support.apple.com/kb/PH17191?viewlocale=en_GB"
            >
              <img className="img-fluid" src={Safari} alt="safari" />
            </a>
          </div>
          <br />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CookieModal;
