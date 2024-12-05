import { useState } from "react";
import { Modal } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import PhoneInput from "react-phone-number-input";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import axios from "axios";

const CustomForm = ({ status, message, onValidated, download, pdf }) => {
  let email, name;
  const subject = "ColonelSaab";
  const template = "This is your menu";
  const [phone, setPhone] = useState();

  const submit = () => {
    if (email && name && phone && email.value.indexOf("@") > -1) {
      onValidated({
        EMAIL: email.value,
        FNAME: name.value,
        PHONE: phone,
      });
      if (download) {
        var formData = new FormData();
        // name should be always AfternoonTeaMenu, ALaCarte, ChristmasMenu2022, CSLunch, DiwaliMenu, DrinksMenu, New Year Menu 2023, TastingMenu
        if (pdf === "ALACARTE") {
          formData.append("name", "ALaCarte.pdf");
        } else if (pdf === "AfternoonTeaMenu") {
          formData.append("name", "AfternoonTeaMenu.pdf");
        } else if (pdf === "Tasting") {
          formData.append("name", "TastingMenu.pdf");
        }
        formData.append("email", email.value);
        formData.append("subject", subject);
        formData.append("message", template);
        axios
          .post(`${process.env.REACT_APP_API_URL}/send`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      email.value = "";
      name.value = "";
      setPhone("");
    }
  };

  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <div className="mb-3">
        <label for="inputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          ref={(node) => (name = node)}
          id="inputName"
          placeholder="Your name"
        />
      </div>
      <div className="mb-3">
        <label for="inputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail"
          ref={(node) => (email = node)}
          placeholder="Your email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Phone Number</label>
        <PhoneInput
          defaultCountry="GB"
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
        />
      </div>
      <button
        type="submit"
        className="btn w-100 text-light border border-warning rounded-0 custom-cursor"
        style={{
          backgroundColor: "#277977",
        }}
        onMouseOver={(e) => {
          e.target.classList.add("bg-transparent", "text-success");
        }}
        onMouseOut={(e) => {
          e.target.classList.remove("bg-transparent", "text-success");
        }}
        onClick={submit}
      >
        Submit
      </button>
    </div>
  );
};

const SubscriptionModal = (props) => {
  const url =
    "https://colonelsaab.us12.list-manage.com/subscribe/post?u=a153744eb2a6accba5620bb2e&amp;id=456fd44b47&amp;f_id=00debbe0f0";

  return (
    <Modal show={props.show} size={props.size} centered onHide={props.onHide}>
      <Modal.Header className="border-0 ">
        <div className="d-flex w-100">
          <div>
            <p className="fs-17 fw-bolder mt-2 mb-0">{props.title}</p>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className={`btn btn-danger rounded-0 custom-cursor`}
              onClick={props.onHide}
            >
              {/* <X size={18} /> */}
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="px-20 pb-4 pt-0">
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
              download={props.download}
              pdf={props.pdf}
            />
          )}
        />
      </Modal.Body>
    </Modal>
  );
};

export default SubscriptionModal;
