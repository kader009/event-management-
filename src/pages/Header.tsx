import Container from '../components/ui/Container';

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center mt-[32px] sm:flex-col lg:flex-row md:text-center lg:text-left sm:text-center">
        <div>
          <h1 className="text-[64px] font-extrabold mb-[32px] text-[#061C3D] w-[626px] leading-tight">
            Best Event management firm
          </h1>
          <button className="w-[195px] h-[52px] bg-[#0B63E5] text-white text-[16px] font-normal ">
            Explore
          </button>
        </div>
        <div>
          <p className="w-[520px] h-[96px] text-[20px] text-[#061C3D] sm:mt-8 lg:mt-0">
            In the midst of chaos, find serenity. Embrace the unknown and seek
            wisdom. Let your heart guide you through uncertainty.
          </p>
        </div>
      </div>
      <div className="event w-full max-w-[1276px] h-[608px] bg-no-repeat bg-cover mt-[48px] bg-center"></div>
    </Container>
  );
};

export default Header;
