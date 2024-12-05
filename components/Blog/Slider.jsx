// import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Slider1 from "../../public/assets/images/WhatsOnSlider1.jpg";

const Slider = () => {
  return (
    <div className="vh-50">
      <Image className="img-fluid" src={Slider1} alt="First slide" />
    </div>

    // <Carousel showArrows={true} showThumbs={false}>
    //   <div>
    //     <img
    //       src={
    //         "https://ik.imagekit.io/sbj8bzmjnl4/colonelsaab/shopimages/sections/extras/indian-best-restaurant-covent-garden-8.jpg?tr=f-webp,q-87,w-1305,fo-bottom"
    //       }
    //       alt="Slider"
    //     />
    //   </div>
    // </Carousel>
  );
};

export default Slider;
