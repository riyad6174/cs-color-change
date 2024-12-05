// import useWindowSize from "../Hook/windowSize";
import Image from "next/image";
import Slider1 from "../../public/assets/images/gift-voucher/gift-voucher-banner.jpg";

const Slider = () => {
  // const windowSize = useWindowSize();
  return (
    // <div className={windowSize.width < 992 ? "vh-50 overflow-hidden" : "vh-50"}>
    <div className={"vh-50"}>
      <Image
        // className={windowSize.width >= 992 && "img-fluid"}
        className={"img-fluid"}
        src={Slider1}
        alt="First slide"
        // width={windowSize.width < 992 && 992}
      />
    </div>
  );
};

export default Slider;
