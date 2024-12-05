import Image from "next/image";
import Slider1 from "../../public/assets/images/weddingDinnerImages/Colsaabweddingsetup3.jpg";

const Slider = () => {
  return (
    <div className="" style={{maxHeight:'70vh', overflow:'hidden'}}>
      <Image className="img-fluid" src={Slider1} alt="First slide" />
    </div>
  );
};

export default Slider;
