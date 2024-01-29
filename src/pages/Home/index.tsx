import EventItems from '../EventItems';
import Footer from '../Footer';
import Gallery from '../Gallery';
import OurService from '../OurService';
import OurTeam from '../OurTeam';
import Pricing from '../Pricing';
import Recentevent from '../Recentevent';
import Testimonials from '../Testimonials';
import UpComing from '../UpComing';

const Home = () => {
  return (
    <div>
      <Pricing />
      <OurService/>
      <Recentevent/>
      <UpComing/>
      <Testimonials/>
      <OurTeam/>
      <Gallery/>
      <EventItems/>
      <Footer/>
    </div>
  );
};

export default Home;
