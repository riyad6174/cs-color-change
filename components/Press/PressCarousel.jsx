// import pressSliderImg from "@/public/assets/images/pressSliderImg.png";
import { Press } from '@/utils/content';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function PressCarousel() {
  const [slicedIndex, setSlicedIndex] = useState(4);
  const [filterYear, setFilterYear] = useState(2024);

  return (
    <>
      <div className='row container-fluid  px-5'>
        <div className='text-center d-flex flex-column align-items-center'>
          <h2 className='mt-3 text-success '>Press</h2>
          <hr className='text-center w-50' />
          <h4 className='text-success'>
            Colonel Saab in the Press, Indian restaurant Covent Garden
          </h4>
        </div>
      </div>

      {/* <div className="container-fluid px-2 py-5"> */}
      <div className='container press-carousel '>
        <div className='row  '>
          <div className='col-12 col-lg-12  d-flex flex-column justify-content-center align-items-center p-0 m-0'>
            <Carousel className='py-5 '>
              {Press.length > 0 &&
                Press.filter((item) => item.year === filterYear)
                  .slice(0, slicedIndex)
                  .map((item, index) => {
                    return (
                      <Carousel.Item key={index}>
                        <div className='row d-flex'>
                          <div className='col-12 col-md-6 mb-4 mb-md-0 press-slider-img-col '>
                            <a
                              href={item.link}
                              target='_blank'
                              rel='noreferrer'
                              className='custom-cursor'
                            >
                              <img
                                className='d-block w-100'
                                src={item.image}
                                alt='Second slide'
                              />
                            </a>
                            <div className='press-name'>
                              <p>{item.paper}</p>
                            </div>
                          </div>
                          <div className='col-12 col-md-6 px-4  px-md-5 m-auto'>
                            <h4 className='text-success'>
                              <a
                                href={item.link}
                                target='_blank'
                                rel='noreferrer'
                                className='text-success custom-cursor text-decoration-none'
                              >
                                {item.firstLine}
                              </a>
                            </h4>
                            <p className='text-dark'>{item.secondLine}</p>
                          </div>
                        </div>
                      </Carousel.Item>
                    );
                  })}

              {/* <Carousel.Item>
                <div className="row d-flex">
                  <div className="col-12 col-md-6 mb-4 mb-md-0 press-slider-img-col ">
                    <Image
                      className="d-block w-100"
                      src={pressSliderImg}
                      alt="Second slide"
                    />
                    <div className="press-name">
                      <p>London Unattached</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-4  px-md-5 m-auto">
                    <h4 className="text-success">
                      Cake meme reflects coronavirus absurdity in a world where
                      nothing is what it seems
                    </h4>
                    <p className="text-dark">
                      Earlier this month, a viral video depicting
                      hyper-realistic cakes as everyday items had folks on
                      social media double-guessing every other post, and
                      sometimes even their own realities, effectively launching
                      the next meme : “Is this real or is this cake?”
                    </p>
                  </div>
                </div>
              </Carousel.Item> */}
            </Carousel>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default PressCarousel;
