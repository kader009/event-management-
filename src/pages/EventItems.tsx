import Container from '../components/ui/Container';
import event1 from '../assets/event.png';
import event2 from '../assets/event2png.png';
import event3 from '../assets/event3.png';
import event4 from '../assets/event4.png';
import event5 from '../assets/event5.png';
import event6 from '../assets/event6.png';

const EventItems = () => {
  return (
    <Container>
      <div className="mt-[116px] sm:mt-[50px] lg:mt-[116px]">
        <h1 className='text-[#061C3D] font-extrabold text-[48px] text-center mb-[12px] sm:text-[32px] md:text-[40px] lg:text-[48px]'>Event Items</h1>
        <p className='text-[#566B84] text-wrap text-center mb-[40px]'>
          Ut posuere felis arcu tellus tempus in in ultricies.  Gravida id nibh
          ornare viverra.  Ultrices <br /> faucibus neque velit risus ac id lorem.
        </p>
        <div className="grid grid-cols-12 sm:grid-cols-6 lg:grid-cols-12 place-content-center">
          <div className=" col-span-8">
            <div className="flex justify-center items-center sm:flex-col gap-[20px] mb-[20px] lg:flex-row">
              <div className="bg-[#D9D9D9] w-[412px] p-[16px] rounded-md bg-opacity-40">
                <img src={event6} alt="event" />
                <span className='text-[#000000] text-[18px] '>Event Item - 6</span>
              </div>
              <div className="bg-[#D9D9D9] w-[412px] p-[16px] rounded-md bg-opacity-40">
                <img src={event5} alt="event" />
                <span className='text-[#000000] text-[18px] '>Event Item - 5</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-[20px] sm:flex-col lg:flex-row">
              <div className="bg-[#D9D9D9] w-[196px] p-[16px] rounded-md bg-opacity-40">
                <img src={event2} alt="event" />
                <span className='text-[#000000] text-[18px] '>Event Item - 2</span>
              </div>
              <div className="bg-[#D9D9D9] w-[196px] p-[16px] rounded-md bg-opacity-40">
                <img src={event3} alt="event" />
                <span className='text-[#000000] text-[18px] '>Event Item - 3</span>
              </div>
              <div className="bg-[#D9D9D9] w-[412px] p-[16px] rounded-md bg-opacity-40">
                <img src={event4} alt="event" />
                <span className='text-[#000000] text-[18px] '>Event Item - 4</span>
              </div>
            </div>
          </div>
          <div className="col-span-4  bg-[#D9D9D9] w-[412px] p-[16px] rounded-md ms-[20px] bg-opacity-40 md:mt-5 sm:col-span-12 sm:mx-auto md:mx-auto sm:mt-5 md:col-span-12 lg:col-span-4 lg:mt-0 lg:ms-[20px]">
            <img src={event1} alt="event" className='h-[438px] w-[380px]' />
            <span className='text-[#000000] text-[18px] '>Event Item - 1</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EventItems;
