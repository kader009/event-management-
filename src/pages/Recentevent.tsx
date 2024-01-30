import Container from "../components/ui/Container";
import recent1 from '../assets/recent1.png'
import recent2 from '../assets/recent2.png'
import recent3 from '../assets/recent3.png'
import recent4 from '../assets/recent4.png'
import recent5 from '../assets/recent5.png'
import recent6 from '../assets/recent6.png'

const Recentevent = () => {
  return <Container>
    <div className="mt-[280px] flex justify-between items-center flex-wrap sm:gap-[35px] lg:gap-[0px] sm:mt-[1450px] lg:mt-[280px] md:justify-center sm:justify-center lg:justify-between">
      <div className="w-[518px] ">

      <h1 className="text-[#061C3D] font-extrabold text-[48px] mb-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px]">Recent Events</h1>
      <p className="text-[#566B84] text-[18px]">Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem.</p>
      <button className="bg-[#3461FF] text-white  w-[174px] h-[52px] mt-[48px] text-[16px]">Learn more</button>
      </div>
      <div className="w-[610px] ">
        <div className="flex gap-[20px] justify-center items-center">
          <img src={recent1} alt="recent" />
          <img src={recent2} alt="recent" />
          <img src={recent3} alt="recent" />
        </div>
        <div className="flex gap-[20px] mt-[20px] justify-center items-center">
          <img src={recent4} alt="recent" />
          <img src={recent5} alt="recent" />
          <img src={recent6} alt="recent" />
        </div>
      </div>

    </div>
  </Container>;
};

export default Recentevent;
