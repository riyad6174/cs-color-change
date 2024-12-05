import Image from 'next/image';
import Award15 from '../../public/assets/images/aca2024.png';
import Award1 from '../../public/assets/images/Award11.png';
import Award2 from '../../public/assets/images/Award2.webp';
import Award3 from '../../public/assets/images/Award3.webp';
import Award4 from '../../public/assets/images/Award4.png';
import Award5 from '../../public/assets/images/Award5.png';
import Award6 from '../../public/assets/images/Award6.png';
import Award8 from '../../public/assets/images/Award8.png';
import Award7 from '../../public/assets/images/award10.png';
import Award9 from '../../public/assets/images/award12.png';
import Award10 from '../../public/assets/images/award13.png';
import Award11 from '../../public/assets/images/ACF.png';
import Award14 from '../../public/assets/images/award14.png';
import useWindowSize from '../Hook/windowSize';

import Slider from 'react-slick';

const settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
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
        slidesToShow: 3,
      },
    },
  ],
};

const Section1 = () => {
  const windowSize = useWindowSize();
  return (
    <div className='container vh-50 px-5 py-3 award-comp'>
      <div className='row'>
        <div className='col-12 text-center d-flex flex-column align-items-center'>
          <h1 className='my-3 text-success'>Awards</h1>
        </div>
      </div>
      {/* <p className="text-success">
            Colonel Saab in the Press, Indian restaurant Covent Garden
          </p>
          <hr className="text-center w-50" />
          <h2 className="mt-3 text-success">Awards</h2> */}
      {/* <div className="w-100 d-none d-lg-flex justify-content-evenly">
            <Image src={Award1} className={"img-fluid"} alt="Award1" />
            <Image src={Award2} className={"img-fluid"} alt="Award2" />
            <Image src={Award3} className={"img-fluid"} alt="Award3" />
            <Image src={Award4} className={"img-fluid"} alt="Award3" />
            <Image src={Award5} className={"img-fluid"} alt="Award3" />
            <Image src={Award6} className={"img-fluid"} alt="Award3" />
          </div> */}

      <div className='row '>
        {/* <div className="w-100 d-flex justify-content-evenly p-3"> */}
        <Slider className='py-4 award-slider' {...settings}>
          <a
            target='_blank'
            href='https://restaurantguru.com/Colonel-Saab-London'
            className='col-3 col-md-3 award-slider-col'
            rel='noreferrer'
          >
            <Image src={Award15} className='img-fluid' alt='Award1' />
          </a>
          <a
            target='_blank'
            href='https://restaurantguru.com/Colonel-Saab-London'
            className='col-3 col-md-3 award-slider-col'
            rel='noreferrer'
          >
            <Image src={Award1} className='img-fluid' alt='Award1' />
          </a>

          <a
            href={
              'https://www.hardens.com/az/restaurants/london/wc1v/colonel-saab.html'
            }
            target='_blank'
            className='col-3 col-md-3 award-slider-col'
            rel='noreferrer'
          >
            <Image src={Award2} className='img-fluid' alt='Award2' />
          </a>

          <a
            href={
              'https://www.feedthelion.co.uk/ftlionawards-2021-restaurant-shortlist/'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award3} className='img-fluid' alt='Award3' />
          </a>

          <a
            href={
              'https://www.feedthelion.co.uk/ftlionawards-2021-restaurant-shortlist/'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award11} className='img-fluid' alt='Award3' />
          </a>

          <a
            href={
              'https://www.asiancurryawards.com/asian-curry-awards-2022-winners/'
            }
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award4} className='img-fluid' alt='Award3' />
          </a>

          <a
            href={'https://britishcurryawards.org/'}
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award5} className='img-fluid' alt='Award3' />
          </a>

          <a
            href={' https://restaurant.opentable.co.uk/2022-diners-choice/'}
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award6} className='img-fluid' alt='Award3' />
          </a>
          <a
            href={' https://restaurantguru.com/Colonel-Saab-London'}
            className='col-3 col-md-3 award-slider-col'
          >
            <Image src={Award7} className='img-fluid' alt='Award4' />
          </a>

          <a href='#' className='col-3 col-md-3 award-slider-col'>
            <Image src={Award8} className='img-fluid' alt='Award4' />
          </a>
          <a href='#' className='col-3 col-md-3 award-slider-col'>
            <Image src={Award9} className='img-fluid' alt='Award4' />
          </a>
          <a href='#' className='col-3 col-md-3 award-slider-col'>
            <Image src={Award10} className='img-fluid' alt='Award4' />
          </a>
          <a href='#' className='col-3 col-md-3 award-slider-col'>
            <Image src={Award14} className='img-fluid' alt='Award4' />
          </a>
        </Slider>
      </div>
    </div>
  );
};

export default Section1;
