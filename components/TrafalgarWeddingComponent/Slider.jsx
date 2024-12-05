import Image from 'next/image';
import Slider1 from '../../public/assets/images/ts/ts-banner1.jpg';

const Slider = () => {
  return (
    <div className='vh-50 relative'>
      <Image className='img-fluid' src={Slider1} alt='First slide' />
    </div>
  );
};

export default Slider;
