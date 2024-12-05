import Image from 'next/image';
import Award1 from '../../public/assets/images/pressLogo/forbes.png';
import Award2 from '../../public/assets/images/pressLogo/gurdian.png';
import Award3 from '../../public/assets/images/pressLogo/handbook.png';
import Award4 from '../../public/assets/images/pressLogo/stylist.png';
import Award5 from '../../public/assets/images/pressLogo/telegraph.png';
import Award6 from '../../public/assets/images/pressLogo/timeout.png';
import useWindowSize from '../Hook/windowSize';

import Slider from 'react-slick';

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const Section1 = () => {
  const windowSize = useWindowSize();
  return (
    <div className='container vh-50 px-md-5 py-2 award-comp'>
      <div className='row'>
        <div className='col-12 text-center d-flex flex-column align-items-center justify-content-center'>
          <h5 className='my-3 text-dark text-uppercase'>
            We&apos;ve been featured in :
          </h5>
        </div>
      </div>
      {/* <p className="text-success">
            Colonel Saab in the Press, Indian restaurant Covent Garden
          </p>
          <hr className="text-center w-50" />
          <h2 className="mt-3 text-success">Awards</h2> */}
      {/* <div className="w-100 d-none d-lg-flex justify-content-evenly">
            <Image src={Award1} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award1" />
            <Image src={Award2} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award2" />
            <Image src={Award3} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award3" />
            <Image src={Award4} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award3" />
            <Image src={Award5} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award3" />
            <Image src={Award6} className={"img-fluid d-flex align-items-center justify-content-center"} alt="Award3" />
          </div> */}

      <div className='row px-5'>
        {/* <div className="w-100 d-flex justify-content-evenly p-3"> */}
        <Slider className='py-4 award-slider' {...settings}>
          <a
            target='_blank'
            href='https://www.forbes.com/sites/joanneshurvell/2022/01/21/londons-8-best-new-indian-restaurants/'
            className='col-3 col-md-3 award-slider-col'
            rel='noreferrer'
          >
            <Image
              src={Award1}
              className='img-fluid d-flex align-items-center justify-content-center'
              alt='Award1'
              style={{ height: '35px' }}
            />
          </a>

          <a
            href={
              'https://www.theguardian.com/food/2023/feb/13/fry-pizza-add-marmite-to-roast-potatoes-27-eye-opening-and-invaluable-tips-from-top-chefs'
            }
            target='_blank'
            className='col-3 col-md-3 award-slider-col'
            rel='noreferrer'
          >
            <Image
              src={Award2}
              className='img-fluid d-flex align-items-center justify-content-center'
              alt='Award2'
              style={{ height: '40px' }}
            />
          </a>

          <a
            href={
              'https://www.thehandbook.com/november-restaurant-openings-2023/'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image
              src={Award3}
              className='img-fluid d-flex align-items-center justify-content-center'
              alt='Award3'
            />
          </a>

          <a
            href={
              'https://www.stylist.co.uk/food-drink/best-solo-dining-spots-london/813225'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image
              src={Award4}
              className='img-fluid d-flex align-items-center justify-content-center'
              alt='Award3'
            />
          </a>

          <a
            href={
              'https://www.telegraphindia.com/my-kolkata/food/top-food-trends-in-india-in-2023-japanese-cuisine-nostalgic-food-qsr-on-the-rise-and-more-by-karen-anand/cid/1907819'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image
              src={Award5}
              className='img-fluid d-flex align-items-center justify-content-center'
              alt='Award3'
            />
          </a>

          <a
            href={
              'https://www.timeout.com/london/news/london-curry-houses-triumphed-at-the-asian-curry-awards-2023-112123'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image
              src={Award6}
              style={{
                height: '40px',
              }}
              className='img-fluid d-flex align-items-center justify-content-center '
              alt='Award3'
            />
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
