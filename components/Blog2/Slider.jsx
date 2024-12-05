import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import RestaurantIndianHolbornCoventGardenBloomsburySoho45 from "../../public/assets/images/shopimages/restaurant-indian-holborn-covent-garden-bloomsbury-soho-45.webp";

const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div className="blog2-img-container">
        <Image
          src={RestaurantIndianHolbornCoventGardenBloomsburySoho45}
          alt="Slider"
        />
      </div>
      <div className="blog2-img-container">
        <Image
          src={RestaurantIndianHolbornCoventGardenBloomsburySoho45}
          alt="Slider"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
