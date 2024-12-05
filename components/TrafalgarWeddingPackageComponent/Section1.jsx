import Link from 'next/link';
import PrimaryButton from '../Layout/Button/PrimaryButton';

import { useRef } from 'react';

const Section1 = () => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      className='container-fluid vh-50 px-4 py-0 p-lg-5 mt-4 mt-md-1'
    >
      <div className='row text-center'>
        <h1 className='mt-3 text-success'>
          Colonel Saab Trafalgar Square Wedding Packages
        </h1>
        <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mt-3 mt-md-4'>
          Make your wedding day effortless and unforgettable at Colonel Saab,
          located in the heart of Trafalgar Square. Our elegant venue provides
          the perfect backdrop for both intimate gatherings and grand
          celebrations. We offer a range of thoughtfully designed wedding
          packages to take the stress out of planning, covering everything from
          exquisite dining to personalised details.
        </p>
        <p className='text-center col-sm-10 offset-sm-1 col-lg-8 offset-lg-2 mt-3 mt-md-4'>
          Each package can be tailored to your preferences, with the flexibility
          to customise based on minimum food and beverage spend. We can also
          assist with floral arrangements and entertainment through our trusted
          external suppliers, or you’re welcome to bring your own vendors to
          create the perfect atmosphere for your special day.
        </p>
      </div>
      <div className='d-flex align-items-center justify-content-center gap-2 gap-md-4'>
        <a href='#enquire' target='_self' className='custom-cursor'>
          <PrimaryButton className='mt-3 text-uppercase'>
            Enquire now
          </PrimaryButton>
        </a>

        <Link href='#brochure' className='custom-cursor'>
          <PrimaryButton className='mt-3 text-uppercase'>
            Download Brochure
          </PrimaryButton>
        </Link>
      </div>

      <div className='d-flex  align-items-center justify-content-center p-5'>
        <div className='text-center py-4 border border-success border-start-0 border-end-0'>
          <p>
            <strong> Special Offer: </strong> Secure your date by November 2024
            to enjoy a reduced minimum spend of £7,500.
          </p>
          <p>
            <strong> Midweek Savings: </strong> Enjoy 10% off when you book your
            wedding from Monday to Thursday.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
