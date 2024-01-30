import Container from '../components/ui/Container';
import picture1 from '../assets/Picture1.png'
import picture2 from '../assets/Picture2.png'
import picture3 from '../assets/Picture3.png'
import picture4 from '../assets/Picture4.png'
import picture5 from '../assets/Picture5.png'
import picture6 from '../assets/Picture6.png'
import picture7 from '../assets/Picture7.png'
import picture8 from '../assets/Picture8.png'
import picture9 from '../assets/Picture9.png'
import picture10 from '../assets/Picture10.png'
import picture11 from '../assets/Picture11.png'
import picture12 from '../assets/Picture12.png'

const Gallery = () => {
  return (
    <Container>
      <div className='sm:mt-[270px] lg:mt-[-20px]'>

      <div className='text-center '>
        <h1 className='text-[#061C3D] font-extrabold text-[48px] mb-[30px] sm:text-[32px] md:text-[40px] lg:text-[48px]'>Gallery</h1>
        <p className='text-[18px] text-wrap w-[1100px]flex justify-center items-center text-[#566B84] mb-[50px]'>
          Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.Ut
          posuere felis arcu tellus tempus in in ultricies. Gravida id nibh
          ornare viverra. Ultrices faucibus neque velit risus ac id lorem.
        </p>
      </div>
      {/* image sections */}
      <div className='flex justify-center items-center '>
        <div>
          <img src={picture1} alt="pictures" />
          <img src={picture2} alt="pictures" />
        </div>
        <div>
          <img src={picture3} alt="picture" />
        </div>
        <div>
          <img src={picture4} alt="picture" />
          <img src={picture5} alt="picture" />
        </div>
        <div>
        <img src={picture6} alt="picture" />
        <img src={picture7} alt="picture" />
        </div>
        <div>
        <img src={picture8} alt="picture" />
        <img src={picture9} alt="picture" />
        </div>
        <div>
        <img src={picture10} alt="picture" />
        </div>
        <div>
        <img src={picture11} alt="picture" />
        <img src={picture12} alt="picture" />
        </div>
      </div>
      </div>
    </Container>
  );
};

export default Gallery;
