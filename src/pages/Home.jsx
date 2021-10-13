import { Adoption } from '../components/Adoption';
import { Bars } from '../components/Bars';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Options } from '../components/Options';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Options />
      <Bars />
      <Adoption />
      <Footer />
    </div>
  );
};

export default Home;
