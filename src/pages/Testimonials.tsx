import Container from '../components/ui/Container';
import arrowleft from '../assets/ArrowLeft.png';
import arrowright from '../assets/ArrowRight.png';
import avatar from '../assets/Avatar.png';
import netflix from '../assets/netflix.png';
import google from '../assets/google.png';
import youtube from '../assets/youtube.png';

const Testimonials = () => {
  return (
    <Container>
      <div className="mt-[250px] sm:mt-[750px] lg:mt-[250px]">
        <div className="flex justify-between items-center sm:flex-col md:flex-col lg:flex-row">
          <div>
            <h1 className="text-[#061C3D] font-extrabold text-[48px] sm:text-[32px] md:text-[40px] lg:text-[48px]">
              What client says
            </h1>
            <p className="text-[#566B84] text-[18px] w-[547px]">
              Ut posuere felis arcu tellus tempus in in ultricies. Gravida id
              nibh ornare viverra.
            </p>
          </div>
          <div className="flex gap-[16px] sm:mt-[20px] lg:mt-[0px]">
            <div className="bg-[#E7F5E8] rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <img
                src={arrowleft}
                alt="arrowsine"
                className=" w-[22px] h-[22px] "
              />
            </div>
            <div className="bg-[#0B63E5] rounded-full w-[40px] h-[40px] flex justify-center items-center">
              <img
                src={arrowright}
                alt="arrowsine"
                className=" w-[22px] h-[22px] "
              />
            </div>
          </div>
        </div>
        {/* client review */}
        <div className='flex justify-center gap-[14px] items-center  sm:flex-col md:flex-col lg:flex-row'>
          <div className="w-[424px] h-[400px] bg-[#FFF9EE] rounded-2xl mt-[70px]">
            <div className="flex ml-[40px] pt-[40px] gap-[12px]">
              <img src={avatar} alt="avatar" />
              <div>
                <h1 className="text-[#061C3D] font-medium text-[16px]">
                  Annette Black
                </h1>
                <p className="text-[#42526B] text-[14px]">
                  Chief Chairman of{' '}
                  <span className="text-[#7534FF]">Netflix</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D] text-[18px] w-[344px] m-[40px]">
              “Golio is one of the BEST web designers I've ever worked with
              professionally. I am a repeat customer who continues to work with
              Zakir because of his talent/skills, great customer service, work
              ethic, and attention to detail. ”
            </p>
            <div className="ml-[40px]">
              <img src={netflix} alt="" />
            </div>
          </div>
          <div className="w-[424px] h-[400px] bg-[#E7F5E8] rounded-2xl mt-[70px]">
            <div className="flex ml-[40px] pt-[40px] gap-[12px]">
              <img src={avatar} alt="avatar" />
              <div>
                <h1 className="text-[#061C3D] font-medium text-[16px]">
                  Annette Black
                </h1>
                <p className="text-[#42526B] text-[14px]">
                  Chief Chairman of{' '}
                  <span className="text-[#7534FF]">Google</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D] text-[18px] w-[344px] m-[40px]">
              “Golio is one of the BEST web designers I've ever worked with
              professionally. I am a repeat customer who continues to work with
              Zakir because of his talent/skills, great customer service, work
              ethic, and attention to detail. ”
            </p>
            <div className="ml-[40px]">
              <img src={google} alt="" />
            </div>
          </div>
          <div className="w-[424px] h-[400px] bg-[#F5F6F7] rounded-2xl mt-[70px]">
            <div className="flex ml-[40px] pt-[40px] gap-[12px]">
              <img src={avatar} alt="avatar" />
              <div>
                <h1 className="text-[#061C3D] font-medium text-[16px]">
                  Annette Black
                </h1>
                <p className="text-[#42526B] text-[14px]">
                  CEO of{' '}
                  <span className="text-[#7534FF]">Youtube</span>
                </p>
              </div>
            </div>
            <p className="text-[#061C3D] text-[18px] w-[344px] m-[40px]">
              “Golio is one of the BEST web designers I've ever worked with
              professionally. I am a repeat customer who continues to work with
              Zakir because of his talent/skills, great customer service, work
              ethic, and attention to detail. ”
            </p>
            <div className="ml-[40px]">
              <img src={youtube} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
