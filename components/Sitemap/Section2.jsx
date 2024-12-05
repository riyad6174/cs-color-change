import Link from 'next/link';

const Section2 = () => {
  return (
    <div className='d-flex flex-column px-5 py-2 '>
      <div></div>
      <hr />
      <Link href='/' className='text-decoration-none custom-cursor'>
        <h5 className='text-success text-uppercase'>Colonel Saab</h5>
      </Link>
      <Link href='/menu' className='text-decoration-none custom-cursor'>
        <h5 className='text-success text-uppercase'>Menus</h5>
      </Link>
      <Link href='/story' className='text-decoration-none custom-cursor'>
        <h5 className='text-success text-uppercase'>Our Story</h5>
      </Link>
      <Link
        href='/about-the-art'
        className='text-decoration-none custom-cursor'
      >
        <h5 className='text-success text-uppercase'>About The Art</h5>
      </Link>
      <Link
        href='/private-dining-rooms'
        className='text-decoration-none custom-cursor'
      >
        <h5 className='text-success text-uppercase'>Private Dining</h5>
      </Link>
      <Link href='/gallery' className='text-decoration-none custom-cursor'>
        <h5 className='text-success text-uppercase'>Gallary</h5>
      </Link>

      <Link href='/whats-on' className='text-decoration-none custom-cursor'>
        <h5 className='text-success text-uppercase'>What's On</h5>
      </Link>
      <Link
        href='/whats-on/valentinesday'
        className='text-decoration-none custom-cursor'
      >
        <h5 className='text-success text-uppercase'>Valentines Day</h5>
      </Link>

      <hr />
      <Link href='/whats-on' className='text-decoration-none custom-cursor'>
        <h4 className='text-success text-uppercase'>What&apos;s On</h4>
      </Link>
      <Link
        href='/whats-on/valentinesday'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Valentines Day</span>
      </Link>

      <Link
        href='/whats-on/pancake-day-2023'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>
          A Unique Pancake Day Experience at Colonel Saab
        </span>
      </Link>
      <Link
        href='/whats-on/veganuary'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Veganuary</span>
      </Link>

      <Link
        href='/whats-on/new-years-eve-indian-restaurant-covent-garden-vegan'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>New Year's Eve Covent Garden</span>
      </Link>
      <Link
        href='/whats-on/first-year-anniversary-celebrations'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>
          First Year Anniversary Celebrations
        </span>
      </Link>
      <Link
        href='https://colonelsaab.co.uk/'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Pre-Theatre Menus in Holborn</span>
      </Link>
      {/* <Link
        href="/whats-on/pre-theatre-menus-in-holborn"
        className="text-decoration-none custom-cursor"
      >
        <span className="text-warning ps-3">Pre-Theatre Menus in Holborn</span>
      </Link> */}
      <Link
        href='/whats-on/restaurant-covent-garden-christmas-party-menus'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>
          Christmas Events at Colonel Saab
        </span>
      </Link>
      <Link
        href='/whats-on/kebab-festival-covent-garden'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Kebab Festival Covent Garden</span>
      </Link>
      <Link
        href='/whats-on/fun-fridays-at-colonelsaab'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Fun Fridays at Colonel Saab!</span>
      </Link>
      <Link
        href='/whats-on/afternoon-tea-covent-garden'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>Afternoon Tea Covent Garden</span>
      </Link>
      {/* seo purpose */}
      <Link href='/menu' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Colonel Saab&apos;s Traditional Lunch Tiffin Menu
        </span>
      </Link>
      {/* <Link
        href='/whats-on/colonelsaab-traditional-lunch-tiffin-menu'
        className='text-decoration-none custom-cursor'
      >
        <span className='text-warning ps-3'>
          Colonel Saab&apos;s Traditional Lunch Tiffin Menu
        </span>
      </Link> */}
      <hr />
      <Link href='/blog' className='text-decoration-none custom-cursor'>
        <h4 className='text-success'>Blog</h4>
      </Link>
      <Link href='/blog1' className='text-decoration-none custom-cursor'>
        <h5 className='text-success'>
          Celebrations at Restaurant Covent Garden
        </h5>
      </Link>
      <Link href='/blog1/0' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Celebrating Diwali in Style with Roop at Colonel Saab
        </span>
      </Link>
      <Link href='/blog1/1' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Father&apos;s Day Covent Garden
        </span>
      </Link>
      <Link href='/blog1/2' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Jubilee Weekend At Colonel Saab
        </span>
      </Link>
      <Link href='/blog1/3' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>Food and Art</span>
      </Link>
      <Link href='/blog1/4' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Mother&apos;s Day Covent Garden
        </span>
      </Link>
      <Link href='/blog1/5' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Valentine&apos;s Day Restaurant Covent Garden
        </span>
      </Link>
      <Link href='/blog1/6' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          New Year&apos;s Eve Covent Garden
        </span>
      </Link>
      <Link href='/blog2' className='text-decoration-none custom-cursor'>
        <h5 className='text-success'>Food at Restaurant Holborn</h5>
      </Link>
      <Link href='/blog2/0' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Vegan Restaurant Covent Garden
        </span>
      </Link>
      <Link href='/blog2/1' className='text-decoration-none custom-cursor'>
        <span className='text-warning ps-3'>
          Vegetarian Restaurant Covent Garden
        </span>
      </Link>
    </div>
  );
};

export default Section2;
