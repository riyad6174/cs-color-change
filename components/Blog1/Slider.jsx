import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import IndianBestRestaurantCoventGarden4 from "../../public/assets/images/shopimages/indian-best-restaurant-covent-garden-4.webp";

const Slider = () => {
  return (
    <Carousel showArrows={true} showThumbs={false}>
      <div>
        <Image
          src={IndianBestRestaurantCoventGarden4}
          style={{ height: "100%" }}
          alt="Slider"
        />
      </div>
      <div>
        <Image
          src={IndianBestRestaurantCoventGarden4}
          style={{ height: "100%" }}
          alt="Slider"
        />
      </div>
    </Carousel>
  );
};

export default Slider;
