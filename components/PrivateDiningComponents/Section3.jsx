import { useRef, useState } from 'react';
import PrimaryButton from '../Layout/Button/PrimaryButton';

const Section3 = () => {
  const ref = useRef();
  const [validationError, setValidationError] = useState('');
  const [sheetName, setSheetName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSheetName = (e) => {
    if (e.target.value === 'Holborn') {
      setSheetName('holborn_private_dining');
    } else {
      setSheetName('trafalgar_square_private_dining');
    }
  };

  const handleSubmit = async () => {
    const formData = {
      name: ref.current.querySelector('[placeholder="Name *"]').value,
      email: ref.current.querySelector('[placeholder="Email *"]').value,
      phoneNumber: ref.current.querySelector('[placeholder="Phone Number *"]')
        .value,
      location: ref.current.querySelector('[placeholder="Location *"]').value,
      companyName: ref.current.querySelector('[placeholder="Company Name"]')
        .value,
      enquiryMessage: ref.current.querySelector(
        '[placeholder="Enquiry Message"]'
      ).value,
    };

    // Check if required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.location
    ) {
      setValidationError('Please fill in all required fields.');
      return;
    }

    // Reset validation error
    setValidationError('');

    try {
      setIsLoading(true);
      const response = await fetch('/api/submitTrafalgar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          sheetName: sheetName,
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
        ref.current.querySelector('[placeholder="Location *"]').value = '';
        ref.current.querySelector('[placeholder="Company Name"]').value = '';
        ref.current.querySelector('[placeholder="Enquiry Message"]').value = '';
      } else {
        console.error('Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }

    const subject = `Private Dining Query - ${formData.location}`;
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number: ${formData.phoneNumber}
      Location: ${formData.location}
      Company Name: ${formData.companyName}
      Enquiry Message: ${formData.enquiryMessage}
    `;

    const mailtoLink = `mailto:admin@colonelsaab.co.uk,Reservations@colonelsaab.co.uk?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  };

  return (
    <div
      ref={ref}
      className='container-fluid mt-4 mt-lg-0 mb-lg-5 px-2 py-3 py-md-2'
    >
      <h3 className='mt-3 text-center text-success fw-bold'>
        Events Enquiry Form
      </h3>
      <div className='container'>
        <div className='row px-5'>
          <form>
            <div className='mt-2 row '>
              <div className='mt-2 col-12 col-md-4 '>
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
              <div className='mt-2 col-12 col-md-4 '>
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
              <div className='mt-2 col-12 col-md-4 '>
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
              <div className='mt-2 col-12 col-md-4 '>
                <select
                  type='text'
                  required
                  className='mt-2 form-control rounded-0 border-success'
                  style={{
                    border: '2px solid',
                    backgroundColor: 'transparent',
                  }}
                  onChange={(e) => handleSheetName(e)}
                  placeholder='Location *'
                >
                  <option disabled selected value=''>
                    Select a Location
                  </option>
                  <option value='Trafalgar Square'>TRAFALGAR SQUARE</option>
                  <option value='Holborn'>HOLBORN</option>
                </select>
              </div>
              <div className='mt-2 col-12 col-md-4 '>
                <input
                  type='text'
                  className='mt-2 form-control rounded-0 border-success'
                  style={{
                    border: '2px solid',
                    backgroundColor: 'transparent',
                  }}
                  placeholder='Company Name'
                />
              </div>
              <div className='mt-2 col-12 col-md-4 '>
                <input
                  type='text'
                  className='mt-2 form-control rounded-0 border-success'
                  style={{
                    border: '2px solid',
                    backgroundColor: 'transparent',
                  }}
                  placeholder='Enquiry Message'
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
              >
                Send Enquiry
              </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section3;
