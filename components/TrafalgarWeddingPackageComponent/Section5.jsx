import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import PrivateDiningRoom from '../../public/assets/images/wedding-packages/4.jpg';
import useOnScreen from '../Hook/useOnScreen';
import useWindowSize from '../Hook/windowSize';
import PrimaryButton from '../Layout/Button/PrimaryButton';

const Section5 = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  const windowSize = useWindowSize();
  const [validationError, setValidationError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [minDate, setMinDate] = useState('');

  // Set the minimum date to today on component mount
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    setMinDate(today); // Set it as the minimum date
  }, []);

  const handleSubmit = async () => {
    const formData = {
      name: ref.current.querySelector('[placeholder="Name *"]').value,
      email: ref.current.querySelector('[placeholder="Email *"]').value,
      phoneNumber: ref.current.querySelector('[placeholder="Phone Number *"]')
        .value,
      date: ref.current.querySelector('[type="date"]').value,
    };

    // Check if required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.date
    ) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    // Reset validation error
    setValidationError('');

    try {
      setIsLoading(true);
      const response = await fetch('/api/submitPackage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sheetName: 'wedding_package_brochure',
        }), // Change the sheet name as per your requirement
      });
      setIsLoading(false);
      if (response.ok) {
        console.log('Form data submitted successfully!');
        setIsSubmitted(true);

        // Clear form fields after successful submission
        ref.current.querySelector('[placeholder="Name *"]').value = '';
        ref.current.querySelector('[placeholder="Email *"]').value = '';
        ref.current.querySelector('[placeholder="Phone Number *"]').value = '';
        ref.current.querySelector('[type="date"]').value = ''; // Clear date field

        // Trigger PDF download after successful form submission
        const pdfUrl = '/assets/images/wedding-packages/packages.pdf'; // Path to your PDF file
        window.open(pdfUrl, '_blank'); // Open the PDF in a new tab
      } else {
        console.error('Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div
      ref={ref}
      id='brochure'
      className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 mt-5'
    >
      <div className='container'>
        <div className='row p-md-5'>
          <div className='col-12 col-lg-7 d-none d-lg-flex align-items-center'>
            <Image
              className={isVisible ? 'img-fluid image-reveal' : 'img-fluid'}
              style={{
                marginLeft: windowSize.width >= 992 && '-3rem',
              }}
              src={PrivateDiningRoom}
              alt='PrivateDiningRoom'
            />
          </div>
          <div className='col-12 col-lg-5 text-center d-flex flex-column justify-content-center'>
            <div className='container'>
              <div className='row '>
                <h3 className='text-success'>DOWNLOAD A BROCHURE</h3>
                <form>
                  <div className='mt-2 row '>
                    <div className='mt-2 col-12 col-md-6 '>
                      <input
                        type='text'
                        required
                        className='mt-2 form-control rounded-0 border-success'
                        style={{
                          border: '2px solid',
                          backgroundColor: 'transparent',
                        }}
                        placeholder='Name *'
                      />
                    </div>
                    <div className='mt-2 col-12 col-md-6 '>
                      <input
                        required
                        type='email'
                        className='mt-2 form-control rounded-0 border-success'
                        style={{
                          border: '2px solid',
                          backgroundColor: 'transparent',
                        }}
                        placeholder='Email *'
                      />
                    </div>
                    <div className='mt-2 col-12 col-md-6 '>
                      <input
                        required
                        type='text'
                        className='mt-2 form-control rounded-0 border-success'
                        style={{
                          border: '2px solid',
                          backgroundColor: 'transparent',
                        }}
                        placeholder='Phone Number *'
                      />
                    </div>
                    <div className='mt-2 col-12 col-md-6 '>
                      <input
                        required
                        type='date'
                        className='mt-2 form-control rounded-0 border-success'
                        style={{
                          border: '2px solid',
                          backgroundColor: 'transparent',
                        }}
                        placeholder='Date'
                        min={minDate} // Set the minimum date to today
                      />
                    </div>
                  </div>
                  <div className='custom-cursor text-center mt-2'>
                    {validationError && (
                      <div className='text-danger'>{validationError}</div>
                    )}
                    <PrimaryButton
                      className='mt-3 text-uppercase'
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Sending...' : 'GET YOUR BROCHURE'}
                    </PrimaryButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
