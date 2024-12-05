import Image from "next/image";
import Slider1 from "../../public/assets/images/AboutArtSlider.jpg";

const Slider = () => {
  return (
    <div className="vh-50">
      <Image className="img-fluid" src={Slider1} alt="First slide" />
    </div>
  );
};

export default Slider;
