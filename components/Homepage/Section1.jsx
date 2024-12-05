import Image from 'next/image';
// import Fade from "react-reveal/Fade";
// import ElephantImg from "../../public/assets/images/Elephant2.webp";
import ElephantImg from '../../public/assets/images/Elephant2.jpg';

const Section1 = () => {
  return (
    // <Fade delay={500}>
    <div className='container-fluid mb-5 px-0 position-relative'>
      <Image
        priority
        className='img-fluid w-100'
        src={ElephantImg}
        alt='elephant'
        sizes='60'
      />
      <a className='hidden-text' href='https://www.nearestlaundry.com'>
        Laundry Partner
      </a>
    </div>
    // </Fade>
  );
};

export default Section1;
