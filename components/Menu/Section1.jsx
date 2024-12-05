import { useState } from 'react';
import Image from 'next/image';
import Download from '../../public/assets/images/download.png';

const Section1 = () => {
  const [filter, setFilter] = useState('festive'); // Default to 'festive'

  const buttonArray = [
    {
      text: 'A LA CARTE',
      pdf: '#ALaCarte',
      pdfExist: false,
      location: ['holborn', 'trafalgar'],
    },
    {
      text: 'TASTING MENU',
      pdf: '#tasting-menu',
      pdfExist: false,
      location: ['holborn', 'trafalgar'],
    },
    {
      text: 'LUNCH TIFFIN *',
      pdf: '/assets/pdf/CSLunch.pdf',
      pdfExist: true,
      location: ['holborn'],
    },
    {
      text: 'AFTERNOON TEA  ',
      pdf: '#AFTERNOONTEAMENU',
      pdfExist: false,
      location: ['holborn'],
    },
    {
      text: 'BEVERAGES ',
      pdf: '/assets/pdf/BarMenuHolborn.pdf',
      pdfExist: true,
      location: ['holborn'],
    },
    {
      text: 'BEVERAGES ',
      pdf: '/assets/pdf/BarMenuTrafalgar.pdf',
      pdfExist: true,
      location: ['trafalgar'],
    },
    {
      text: 'CHRISTMAS SEASON ',
      pdf: '/assets/pdf/2024._xmas_Season_pdf.pdf',
      pdfExist: true,
      location: ['festive'],
    },
    {
      text: 'CHRISTMAS DAY ',
      pdf: '/assets/pdf/christmas_day_2024_colonelsaab.pdf',
      pdfExist: true,
      location: ['festive'],
    },
    {
      text: 'NEW YEARS EVE',
      pdf: '/assets/pdf/new_years_eve_2024.pdf',
      pdfExist: true,
      location: ['festive'],
    },
    // {
    //   text: 'PRE THEATRE * ',
    //   pdf: '/assets/pdf/SetMenu2024.pdf',
    //   pdfExist: true,
    //   location: ['trafalgar'],
    // },
    {
      text: 'Mrs Doubtfire ',
      pdf: '/assets/pdf/CsDoubtfireMenuWeb.pdf',
      pdfExist: true,
      location: ['holborn'],
    },
    {
      text: 'DIWALI ',
      pdf: '/assets/pdf/menus/diwali.pdf',
      pdfExist: true,
      location: ['festive'],
    },
  ];

  // Filter menus based on the selected filter
  const filteredMenus = buttonArray.filter((item) =>
    item.location.includes(filter)
  );

  return (
    <div className='container-fluid px-5 py-5'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 className='mt-3 text-success'>Colonel Saab&apos;s Menus</h1>
          <p className='text-center col-8 offset-2'>
            Our menu is a melange of flavours from the Indian Subcontinent and
            has been curated by one of the top food personalities of India. A
            few of the signature dishes of Karen Anand as well as many regional
            Indian specialities that appear for the first time on an Indian
            restaurant menu in London.
          </p>

          {/* Filter Buttons */}
          <div className='mb-4 border border-2 border-success py-3 col-12 col-md-8 offset-md-2'>
            <h6 className='text-center text-success col-12 '>
              Select Menu / Location
            </h6>
            <button
              onClick={() => setFilter('festive')}
              className={`btn fixed-width-button text-light text-uppercase m-2 rounded-0 bg-success border border-warning custom-cursor menu-button ${
                filter === 'festive' ? 'active' : ''
              }`}
            >
              Festive
            </button>
            <button
              onClick={() => setFilter('holborn')}
              className={`btn fixed-width-button text-light text-uppercase m-2 rounded-0 bg-success border border-warning custom-cursor menu-button ${
                filter === 'holborn' ? 'active' : ''
              }`}
            >
              Holborn Hall
            </button>
            <button
              onClick={() => setFilter('trafalgar')}
              className={`btn fixed-width-button text-light text-uppercase m-2 rounded-0 bg-success border border-warning custom-cursor menu-button ${
                filter === 'trafalgar' ? 'active' : ''
              }`}
            >
              Trafalgar Square
            </button>
          </div>

          {/* Menu Buttons */}
          {filteredMenus.length > 0 &&
            filteredMenus.map((item, index) => {
              return (
                <a
                  href={item.pdf}
                  target={item.pdfExist ? '_blank' : '_self'}
                  rel='noreferrer'
                  key={index}
                >
                  <button
                    type='button'
                    className='btn text-light text-uppercase m-2 rounded-0 bg-success border border-warning custom-cursor menu-button fixed-width-button'
                  >
                    {item.text !== 'AFTERNOON TEA MENU' && (
                      <Image
                        className='d-none img-fluid me-2'
                        src={Download}
                        alt='Download'
                      />
                    )}
                    {item.text}
                  </button>
                </a>
              );
            })}
        </div>
        {/* Conditional warning message for Trafalgar and Festive */}
        <p
          className={`text-center text-warning ${
            filter === 'holborn' ? '' : 'd-none'
          }`}
        >
          *Please note that our Tiffin menu and Dosa items will not be available
          on Saturdays and from November 24th until Christmas.
        </p>
      </div>
    </div>
  );
};

export default Section1;
