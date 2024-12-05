import Image from 'next/image';
import Download from '../../public/assets/images/download.png';
// import DiwaliMenu from "../../public/assets/pdf/DiwaliMenu.pdf";
// import Valentines_MENU from "../../public/assets/pdf/Valentines Menu 2023.pdf";
// import Vegan_MENU from "../../public/assets/pdf/Vegan Menu 2023.pdf";
// import TastingMenu from "../../public/assets/pdf/TastingMenu.pdf";
// import ALaCarte from "../../public/assets/pdf/ALaCarte.pdf";
// import CSLunch from "../../public/assets/pdf/CSLunch.pdf";
// import DrinksMenu from "../../public/assets/pdf/DrinksMenu.pdf";

const Section1 = () => {
  const buttonArray = [
    {
      text: 'A LA CARTE',
      pdf: '#ALaCarte',
      // pdf: ALaCarte,
      pdfExist: false,
    },
    {
      text: 'TASTING MENU',
      pdf: '#tasting-menu',
      // pdf: TastingMenu,
      pdfExist: false,
    },
    // {
    //   text: 'STARTERS',
    //   pdf: '/assets/pdf/STARTERS.pdf',
    //   pdfExist: true,
    // },
    {
      text: 'LUNCH TIFFIN (HOLBORN ONLY)',
      pdf: '/assets/pdf/CSLunch.pdf',
      pdfExist: true,
    },
    // {
    //   text: 'DESSERTS',
    //   pdf: '#DESSERTS',
    //   pdfExist: false,
    // },
    {
      text: 'AFTERNOON TEA MENU (HOLBORN ONLY)',
      pdf: '#AFTERNOONTEAMENU',
      pdfExist: false,
    },
    {
      text: 'BEVERAGES (HOLBORN)',
      pdf: '/assets/pdf/BarMenuHolborn.pdf',
      pdfExist: true,
    },
    {
      text: 'BEVERAGES (TRAFALGAR SQUARE)',
      pdf: '/assets/pdf/BarMenuTrafalgar.pdf',
      pdfExist: true,
    },
    {
      text: ' CHRISTMAS SEASON MENU ',
      pdf: '/assets/pdf/2024._xmas_Season_pdf.pdf',
      pdfExist: true,
    },
    {
      text: 'CHRISTMAS DAY MENU',
      pdf: '/assets/pdf/christmas_day_2024_colonelsaab.pdf',
      pdfExist: true,
    },

    {
      text: 'NEW YEARS EVE MENU',
      pdf: '/assets/pdf/new_years_eve_2024.pdf',
      pdfExist: true,
    },
    {
      text: 'PRE THEATRE MENU * (TRAFALGAR ONLY )',
      pdf: '/assets/pdf/SetMenu2024.pdf',
      pdfExist: true,
    },
    {
      text: 'DOUBTFIRE MENU',
      pdf: '/assets/pdf/CsDoubtfireMenuWeb.pdf',
      pdfExist: true,
    },
    {
      text: 'DIWALI MENU',
      pdf: '/assets/pdf/menus/diwali.pdf',
      pdfExist: true,
    },

    // {
    //   text: "DIWALI MENU",
    //   pdf: DiwaliMenu,
    //   pdfExist: true,
    // },

    // {
    //   text: 'Mothers day Menu',
    //   pdf: '/assets/images/motherday.pdf',
    //   pdfExist: true,
    // },
    // {
    //   text: 'CHRISTMAS DAY MENU',
    //   pdf: '/assets/pdf/ChristmasDay.pdf',
    //   pdfExist: true,
    // },
    // {
    //   text: 'CHRISTMAS SEASON MENU',
    //   pdf: '/assets/pdf/ChristmasSeason.pdf',
    //   pdfExist: true,
    // },
    // {
    //   text: 'Kids Christmas Menu',
    //   pdf: '/assets/pdf/KidsChristmasMenu.pdf',
    //   pdfExist: true,
    // },
    // {
    //   text: 'New Year Menu',
    //   pdf: '/assets/pdf/Newyear2023Menu.pdf',
    //   pdfExist: true,
    // },
    // {
    //   text: "Diwali Menu",
    //   pdf: "/assets/pdf/DiwaliMenu2023.pdf",
    //   pdfExist: true,
    // },

    // {
    //   text: "VEGANUARY",
    //   pdf: "/assets/pdf/Vegan Menu 2023.pdf",
    //   pdfExist: true,
    // },
    // {
    //   text: "HOLI MENU",
    //   pdf: "/assets/pdf/Holi Menu 2023.pdf",
    //   pdfExist: true,
    // },
  ];

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
          {buttonArray.length > 0 &&
            buttonArray.map((item, index) => {
              return (
                <a
                  href={item.pdf}
                  target={item.pdfExist ? '_blank' : '_self'}
                  rel='noreferrer'
                  key={index}
                >
                  <button
                    type='button'
                    className='btn text-light text-uppercase m-2 rounded-0 bg-success border border-warning rounded-0 custom-cursor menu-button'
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
        <p className='text-center text-warning '>
          *Pre Threate Menu is not available in the month of
          November and December
        </p>
      </div>
    </div>
  );
};

export default Section1;
