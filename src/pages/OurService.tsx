import Container from '../components/ui/Container';
import service1 from '../assets/Rectangle 5.png';
import service2 from '../assets/Rectangle 6.png';
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';

const OurService = () => {
  return (
    <Container>
      <div className="text-center mt-[190px] sm:mt-[800px] lg:mt-[190px]">
        <h1 className="text-[#061C3D] font-extrabold text-[48px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
          Our Services
        </h1>
        <p className="text-wrap text-[#566B84] text-[18px]">
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices <br /> faucibus neque velit risus ac id
          lorem.
        </p>
        <div className="mt-[54px] flex justify-around items-center gap-[20px] md:flex-col sm:flex-col lg:flex-row">
          <div className="w-[412px] h-[590px] rounded-md service">
            <img
              src={service1}
              alt="service picture"
              className="w-[362px] h-[253px] pt-[36px] sm:ms-[25px] md:ms-[25px] lg:ms-[17px] mx-[18px]"
            />
            <h1 className="text-start ms-[25px] my-[24px] text-semibold text-[#000000] text-[24px]">
              Corporate event
            </h1>
            <div className="space-y-[16px] ms-[25px]">
              <img src={frame1} alt="frame" />
              <img src={frame2} alt="frame" />
              <img src={frame3} alt="frame" />
              <img src={frame4} alt="frame" />
              <img src={frame5} alt="frame" />
            </div>
          </div>
          <div className="w-[412px] h-[590px] rounded-md service1">
            <h1 className="text-start ms-[25px] my-[24px] text-bold text-[#000000] text-[24px]">
              Wedding event
            </h1>
            <p className="text-[#566B84] text-[16px] w-[316px] text-start ms-[27px] mt-[12px] mb-[42px]">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra. Ultrices faucibus neque velit risus ac id
              lorem.Ut posuere felis arcu tellus tempus in in ultricies.Ut
              posuere felis arcu tellus tempus in in ultricies.
            </p>
            <div className="space-y-[16px] ms-[25px]">
              <img src={frame1} alt="frame" />
              <img src={frame2} alt="frame" />
              <img src={frame3} alt="frame" />
              <img src={frame4} alt="frame" />
              <img src={frame5} alt="frame" />
            </div>
            <button className="bg-[#0B63E5] text-white w-[360px] h-[52px] text-[16px] font-bold mt-[45px] rounded-lg">
              Check it out
            </button>
          </div>
          <div className="w-[412px] h-[590px] rounded-md service">
            <img
              src={service2}
              alt="service picture"
              className="w-[362px] h-[253px] pt-[36px] sm:ms-[25px] md:ms-[25px] lg:ms-[17px] mx-[18px]"
            />
            <h1 className="text-start ms-[25px] my-[24px] text-semibold text-[#000000] text-[24px]">
              Organization event
            </h1>
            <div className="space-y-[16px] ms-[25px]">
              <img src={frame1} alt="frame" />
              <img src={frame2} alt="frame" />
              <img src={frame3} alt="frame" />
              <img src={frame4} alt="frame" />
              <img src={frame5} alt="frame" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurService;
