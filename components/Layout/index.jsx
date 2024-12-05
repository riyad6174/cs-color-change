import { useEffect } from 'react';
import Cookie from './Cookie';
import Footer from './Footer';
import ChristmasModal from './Modal/ChristmasModal';
import Navbar from './Navbar';
import { useState } from 'react';

const Layout = (props) => {
  const [christmasModal, setChristmasModal] = useState(false);

  useEffect(() => {
    setChristmasModal(false);
  }, []);

  return (
    <div style={{ backgroundColor: '#f4ede6' }}>
      <Navbar />
      {props.children}
      <Footer />
      <Cookie />
      {christmasModal && (
        <ChristmasModal
          show={christmasModal}
          onHide={() => setChristmasModal(!christmasModal)}
          // setBookingModal={setBookingModal}
        />
      )}
    </div>
  );
};

export default Layout;
