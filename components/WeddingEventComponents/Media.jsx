// Import necessary components and libraries
import Image from 'next/image';
import Award1 from '../../public/assets/images/pressLogo/forbes.png';
import Award2 from '../../public/assets/images/pressLogo/gurdian.png';
import Award3 from '../../public/assets/images/pressLogo/handbook.png';
import Award4 from '../../public/assets/images/pressLogo/stylist.png';
import Award5 from '../../public/assets/images/pressLogo/telegraph.png';
import Award6 from '../../public/assets/images/pressLogo/timeout.png';
import useWindowSize from '../Hook/windowSize';

// Create the Media component
const Media = () => {
  // Use the windowSize hook
  const windowSize = useWindowSize();

  // Return the responsive layout
  return (
    <div className='container vh-50 px-md-5 py-3 py-md-2 award-comp'>
      <div className='row'>
        <div className='col-12 text-center d-flex flex-column align-items-center justify-content-center'>
          <h5 className='my-3 text-dark text-uppercase'>
            We&apos;ve been featured in
          </h5>
        </div>
      </div>

      <div className='row px-1 px-md-1 justify-content-center'>
        {/* Map through the awards and create responsive image links */}
        {[Award1, Award2, Award3, Award4, Award5, Award6].map(
          (award, index) => (
            <a
              key={index}
              target='_blank'
              href='#' // Add the correct href for each award
              className='col-6 col-md-4 col-lg-2 d-flex align-items-center py-1 py-md-2 py-lg-2 '
              rel='noreferrer'
            >
              <Image
                src={award}
                className='img-fluid media-images d-flex align-items-center justify-content-center p-3  p-md-3 p-lg-2'
                alt={`Award${index + 1}`}
                // style={{
                //   height: windowSize.width < 420 ? '70px' : '50px',
                // }}
              />
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default Media;
