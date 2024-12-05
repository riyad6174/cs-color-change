import Link from 'next/link';
import { Fragment, useState } from 'react';
import { WhatsOn } from '../../utils/content';

const Section2 = () => {
  const [slicedIndex, setSlicedIndex] = useState(9);

  // const [slicedIndex, setSlicedIndex] = useState(9);
  // {index == 7 || index == 8 ? (
  //   <div className="col-12 mt-lg-0 col-lg-4 d-flex align-items-stretch"></div>
  // ) : (
  //   <div

  return (
    <>
      <div className='container-fluid py-5 '>
        <div className='container'>
          <div className='row text-center'>
            {WhatsOn.length > 0 &&
              WhatsOn.slice(0, slicedIndex).map((item, index) => {
                return (
                  <Fragment key={index}>
                    {index == 7 || index == 8 ? (
                      <div className='col-12 mt-lg-0 col-lg-4 d-flex align-items-stretch'></div>
                    ) : (
                      <div
                        className={
                          index > 0 && index < 3
                            ? 'col-12 mt-4 mt-lg-0 col-lg-4 d-flex align-items-stretch'
                            : index > 2
                            ? 'col-12 mt-4 col-lg-4 d-flex align-items-stretch'
                            : 'col-12 col-lg-4 d-flex align-items-stretch'
                        }
                        key={index}
                      >
                        <div className='card w-100'>
                          <img
                            src={item.image}
                            className='card-img-top img-fluid w-100'
                            alt={item?.imgAlt ? item.imgAlt : 'whats-on-image'}
                            style={{
                              height: '280px',
                              objectFit: 'cover',
                            }}
                          />
                          <div className='card-body bg-warning d-flex flex-column justify-content-between'>
                            <h5 className='card-title text-success'>
                              {item.heading1}
                            </h5>
                            <div>
                              <p className='card-text text-light mt-auto'>
                                {item.shortContent}
                              </p>
                              <Link href={`/whats-on/${item.title}`}>
                                <button
                                  type='button'
                                  className='btn text-light border border-warning rounded-0 custom-cursor mt-auto align-self-center text-uppercase'
                                  style={{
                                    backgroundColor: '#277977',
                                  }}
                                  onMouseOver={(e) => {
                                    e.target.classList.remove('border-warning');
                                    e.target.classList.add(
                                      'bg-transparent',
                                      'text-success',
                                      'border-success'
                                    );
                                  }}
                                  onMouseOut={(e) => {
                                    e.target.classList.remove('border-success');
                                    e.target.classList.remove(
                                      'bg-transparent',
                                      'text-success',
                                      'border-warning'
                                    );
                                  }}
                                >
                                  Read More...
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Fragment>
                );
              })}
          </div>
        </div>
      </div>
      <div className='container-fluid px-2 py-5  overflow-hidden'>
        <div className='text-center'>
          <button
            type='button'
            className={
              slicedIndex < WhatsOn.length
                ? 'btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase'
                : 'btn text-light m-2 rounded-0 bg-warning border border-success rounded-0 custom-cursor text-uppercase d-none'
            }
            onClick={() => {
              setSlicedIndex(slicedIndex + 3);
            }}
          >
            Archive
          </button>
        </div>
      </div>
    </>
  );
};

export default Section2;
