import Image from 'next/image';
import Link from 'next/link';
import Glass from '../../public/assets/images/glass.png';

import useWindowSize from '../Hook/windowSize';

// import ALaCarte from "../../public/assets/pdf/ALaCarte.pdf";
// import CSLunch from "../../public/assets/pdf/CSLunch.pdf";
// import DrinksMenu from "../../public/assets/pdf/DrinksMenu.pdf";
// import TastingMenu from "../../public/assets/pdf/TastingMenu.pdf";
// import AfterNoonTeaMenu from "../../assets/pdf/AfternoonTeaMenu.pdf"

const MenuSection = () => {
  const windowSize = useWindowSize();
  const menu = [
    'A-Là-Carte',
    'Tasting Menu',
    'Lunch Tiffin',
    'Afternoon Menu',
    'Beverages',
  ];

  const clickedMenu = [
    {
      text: 'A-Là-Carte',
      pdf: '/assets/pdf/ALaCarte.pdf',
      // pdf: ALaCarte,
      pdfExist: true,
    },
    {
      text: 'Tasting Menu',
      // pdf: "tasting-menu",
      pdf: '/assets/pdf/TastingMenu.pdf',
      pdfExist: true,
    },
    {
      text: 'Lunch Tiffin (Holborn Only)',
      pdf: '/assets/pdf/CSLunch.pdf',
      pdfExist: true,
    },
    {
      text: 'Afternoon Menu (Holborn Only)',
      pdf: '/assets/pdf/AfternoonTeaMenu2.pdf',
      pdfExist: true,
    },
    {
      text: 'Beverages',
      pdf: '/assets/pdf/DrinksMenu.pdf',
      pdfExist: true,
    },
  ];
  // const hanldeClick=(props)=>{
  //   console.log("clicked",props)
  //   if(props==="A-Là-Carte"){
  //     saveAs(ALACARTEPDF)
  //   }
  // }
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-6 d-flex align-items-stretch justify-content-center'>
            <div className='py-2 px-4 px-md-5 d-flex flex-column dish-menu-layer-img'>
              <Image
                className='img-fluid mt-3 align-self-center'
                src={Glass}
                alt='Glass'
                width={90}
              />
              <p
                className='mt-2 title-text text-center'
                style={{ fontSize: '1.5rem' }}
              >
                MENU
              </p>

              {clickedMenu.length > 0 &&
                clickedMenu.map((item, index) => {
                  return (
                    <div
                      className={
                        index === 0
                          ? 'mt-1 mb-1 d-flex flex-column'
                          : 'mb-1 d-flex flex-column'
                      }
                      key={index}
                    >
                      {/*changes- mouseOver effect disabled currently, */}
                      <a
                        href={item.pdf}
                        target={item.pdfExist ? '_blank' : '_self'}
                        rel='noreferrer'
                        key={index}
                        className='text-warning lh-1 m-0 menu-text custom-cursor  text-center'
                        onMouseOver={(e) => {
                          e.target.classList.add('fw-bold');
                        }}
                        onMouseOut={(e) => {
                          e.target.classList.remove('fw-bold');
                        }}
                        // onClick={()=>hanldeClick(item)}
                      >
                        <span className='d-inline-block'>{item.text}</span>
                      </a>
                    </div>
                    //   <a
                    //   href={item.pdf}
                    //   target={item.pdfExist ? "_blank" : "_self"}
                    //   rel="noreferrer"
                    //   key={index}
                    // >
                  );
                })}

              <Link
                href='/menu'
                className='custom-cursor mt-auto align-self-center mb-3'
              >
                <button
                  type='button'
                  className='btn btn-outline  rounded-0 border border-warning custom-cursor'
                  onMouseOver={(e) => {
                    e.target.classList.add('bg-warning', 'body-text');
                  }}
                  onMouseOut={(e) => {
                    e.target.classList.remove('bg-warning', 'body-text');
                  }}
                >
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
          <div className='col-12 col-lg-6 mt-4 mt-lg-0 d-flex align-items-stretch justify-content-center'>
            <div className='py-2 px-4 px-md-5 d-flex flex-column dish-menu-layer-img'>
              <Image
                className='img-fluid mt-3 align-self-center'
                src={Glass}
                alt='Glass'
                width={90}
              />
              <p
                className='mt-2 title-text text-center'
                style={{ fontSize: '1.5rem' }}
              >
                MEMSAAB&apos;S TASTING <br /> MENU
              </p>
              <p className='mb-1 text-warning text-center'>
                Experience a culinary <br />
                journey with Chef <br />
                Sohan Bhandari, <br />
                a curation of his culinary <br />
                heritage and signature <br />
                dishes. <br />
              </p>
              <Link
                href='/menu'
                className='custom-cursor mt-auto align-self-center mb-3'
              >
                <button
                  type='button'
                  className='btn btn-outline  rounded-0 border border-warning custom-cursor'
                  onMouseOver={(e) => {
                    e.target.classList.add('bg-warning', 'body-text');
                  }}
                  onMouseOut={(e) => {
                    e.target.classList.remove('bg-warning', 'body-text');
                  }}
                >
                  SEE MORE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSection;
