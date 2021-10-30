import { Bars } from '../components/AboutUs';
import { Footer } from '../components/footer/Footer';
import { GetInvolved } from '../components/getInvolved/GetInvolved';
import { ContactUs } from '../components/contactUs/ContactUs';
import { Adoption } from '../components/adoption/Adoption';
import { Header } from '../components/header/Header';
import { Pets } from '../components/pets/Pets';
import { useEffect } from 'react';
import { Navbar } from '../components/navbar/Navbar';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Header />
      <Adoption />
      <GetInvolved />
      <Bars />
      <Pets />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
