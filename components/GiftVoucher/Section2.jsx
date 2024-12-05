import Image from "next/image";
import { useRef, useState } from "react";
import giftVoucher from "../../public/assets/images/gift-voucher/gift-voucher.gif";
import useOnScreen from "../Hook/useOnScreen";
import PrimaryButton from "../Layout/Button/PrimaryButton";
import VoucherModal from "../Layout/Modal/VoucherModal";

const Section2 = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const [voucherModal, setVoucherModal] = useState(false);

  const ref = useRef();
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} className="container-fluid px-2 mb-lg-5">
      <div className="container">
        <div className="row ">
          <div className="col-12 col-lg-12 d-flex flex-column justify-content-center align-items-center">
            <Image
              className={isVisible ? "img-fluid image-reveal " : "img-fluid "}
              src={giftVoucher}
              alt="giftVoucher"
            />

            <PrimaryButton
              className="mt-4"
              onClick={() => {
                setVoucherModal(true);
              }}
            >
              Gift Voucher
            </PrimaryButton>
          </div>
        </div>
      </div>

      {voucherModal && (
        <VoucherModal
          show={voucherModal}
          onHide={() => setVoucherModal(!voucherModal)}
        />
      )}
    </div>
  );
};

export default Section2;
