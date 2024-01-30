import Container from '../components/ui/Container';
import companyimage from '../assets/upcoming.png';
import stack from '../assets/Stack.png';
import Cpu from '../assets/Cpu.png';
import company1 from '../assets/Company Logo1.png';
import company2 from '../assets/Company Logo2.png';
import company3 from '../assets/Company Logo3.png';
import company4 from '../assets/Company Logo4.png';
import company5 from '../assets/Company Logo5.png';
import company6 from '../assets/Company Logo6.png';

const UpComing = () => {
  return (
    <Container>
      <div className="flex justify-between items-center flex-wrap gap-[35px] sm:justify-center md:justify-center lg:justify-between sm:mt-[180px] lg:mt-[0px]">
        <div>
          <h1 className="text-[#061C3D] text-[56px] font-extrabold mb-[24px] sm:text-[32px] md:text-[48px] lg:text-[56px]">
            Upcoming Events
          </h1>
          <p className="w-[536px] text-[#566B84] text-[18px]">
            Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
            posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
            ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
          </p>
          <div className="w-[536px] bg-[#FFF9EE] rounded-lg p-[32px] mt-[48px]">
            <div className="flex gap-[20px]">
              <img src={stack} alt="stack" className="w-[40px] h-[40px]" />
              <div>
                <h1 className="text-[#061C3D] text-[20px] font-medium">
                  Golf Clubbers Annual Agenda
                </h1>
                <p className="text-[#42526B] text-[16px]">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{' '}
                </p>
              </div>
            </div>
            <div className="divider w-[400px]"></div>
            <div className="flex gap-[20px]">
              <img src={Cpu} alt="stack" className="w-[40px] h-[40px]" />
              <div>
                <h1 className="text-[#061C3D] text-[20px] font-medium">
                  Music Events at LA
                </h1>
                <p className="text-[#42526B] text-[16px]">
                  Vivamus dignissim tortor in tellus dictum pellentesque.
                  Praesent mauris metus, dictum quis velit non.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={companyimage}
            alt="company image"
            className="w-[500px] h-[500px]"
          />
        </div>
      </div>
      <div className="mt-[96px]">
        <p className="text-center text-[20px]">
          We have <span className="text-[#0B63E5]">23k+</span> Satisfied &
          Trusted Customers
        </p>
        <div className="flex justify-around items-center mt-[24px] flex-wrap">
          <img src={company1} alt="company image" />
          <img src={company2} alt="company image" />
          <img src={company3} alt="company image" />
          <img src={company4} alt="company image" />
          <img src={company5} alt="company image" />
          <img src={company6} alt="company image" />
        </div>
      </div>
    </Container>
  );
};

export default UpComing;
