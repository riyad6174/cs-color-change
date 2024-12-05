// import { useState } from "react";
import { useState } from 'react';
// import PressModal from "../Layout/Modal/PressModal";
import { Press } from '../../utils/content';

const Section2 = (props) => {
  // const [pressModal, setPressModal] = useState(false);
  // const [pressLink, setPressLink] = useState("");

  const perPage = 6;
  const [slicedIndex, setSlicedIndex] = useState(perPage);

  const years = [2024, 2023, 2022];

  return (
    <div className='container'>
      <div className='row years-row'>
        <div className='col-md-12 years-column bg-white d-flex '>
          {years &&
            years.map((value, index) => {
              return (
                <div
                  key={index}
                  className='year-wrapper mx-1 my-2  px-3 py-1'
                  onClick={() => {
                    props.handleYear(value);
                    setSlicedIndex(perPage);
                  }}
                >
                  <p
                    className={
                      props.year == value
                        ? 'mb-0 text-success text-center custom-red-border cursor-pointer '
                        : 'mb-0 text-success text-center  cursor-pointer '
                    }
                  >
                    {value}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div className='row mt-4 '>
        {Press.length > 0 &&
          Press.filter((item) => item.year === props.year)
            .slice(0, slicedIndex)
            .map((item, index) => {
              return (
                <div className=' col-12 col-md-4 mb-4' key={index}>
                  <div className='card  press-card w-100 custom-cursor '>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noreferrer'
                      className='custom-cursor'
                    >
                      <img
                        src={item.image}
                        className='card-img-top img-fluid w-100'
                        alt='...'
                        style={{ height: '15rem', objectFit: 'contain' }}
                      />
                    </a>

                    <div className='card-body bg-secondary press-div'>
                      <p className='card-text text-light'>{item.firstLine}</p>
                      <p className='card-text text-light'>{item.secondLine}</p>
                    </div>

                    <div className='press-name border-rounded'>
                      <p className='mb-0'>{item.paper}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>

      <div
        className={
          slicedIndex < Press.filter((item) => item.year === props.year).length
            ? 'row px-2 py-5  overflow-hidden'
            : 'row px-2   overflow-hidden'
        }
      >
        <div className='col-12'>
          <div className='text-center'>
            <button
              type='button'
              className={
                slicedIndex <
                Press.filter((item) => item.year === props.year).length
                  ? 'btn btn-outline-danger text-uppercase'
                  : 'btn btn-outline-danger text-uppercase d-none'
              }
              onClick={() => {
                setSlicedIndex(slicedIndex + perPage);
              }}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
