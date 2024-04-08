import { NavLink } from 'react-router-dom';
import Container from '../components/ui/Container';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img5 from '../assets/img5.jpg';
import stack from '../assets/Stack.png';
import Cpu from '../assets/Cpu.png';
import undro from '../assets/undraw_Faq_re_31cw.png';

const About = () => {
  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="flex-1  text-[32px] font-semibold text-[#000000]">
            <NavLink to="/">
              Event<span className="ml-1 text-[#0B63E5]">City</span>
            </NavLink>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="text-[16px] font-medium">
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard" className="text-[16px] font-medium">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/event" className="text-[16px] font-medium">
                Event
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="text-center mt-12 ">
          <span className="text-white font-medium uppercase rounded-md py-1 px-3 text-xs border border-[#0B63E5] bg-[#0B63E5] ">
            About us
          </span>
          <h1 className="text-[2.25rem] font-medium text-center mt-5">
            About Us
          </h1>
        </div>
        <div className="py-10 flex justify-center items-center gap-10">
          <div className="flex justify-center items-center gap-5 sm:flex-col md:flex-col lg:flex-row">
            <div className="flex flex-col gap-5 flex-wrap">
              <img src={img2} alt="about img" className="w-80 rounded-lg" />
              <img src={img3} alt="about img" className="w-80 rounded-lg" />
            </div>
            <div>
              <img
                src={img5}
                loading='lazy'
                alt="about img"
                className="w-64 h-96 rounded-lg"
              />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              The Best of Product Your Business
            </h1>

            <div className="my-6 flex gap-3">
              <div>
                <img src={stack} alt="stack png" />
              </div>
              <div className="">
                <h2 className="text-xl font-medium">High Standerd</h2>
                <p className="text-base font-normal mt-4 text-gray-800">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="my-6 flex gap-3">
              <div>
                <img src={Cpu} alt="stack png" />
              </div>
              <div className="">
                <h2 className="text-xl font-medium">Ease of Communication</h2>
                <p className="text-base font-normal mt-4 text-gray-800">
                  Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>

            <button className="border px-6 py-2 rounded-md hover:bg-[#0B63E5] hover:text-white transition-all duration-500">
              View All Our News
            </button>
          </div>
        </div>
      </div>

      <section className="my-12">
        <div className="text-center mt-12 ">
          <span className="text-white font-medium uppercase rounded-md py-1 px-3 text-xs border border-[#0B63E5] bg-[#0B63E5] ">
            OUR FAQ
          </span>
          <h1 className="text-[2.25rem] font-medium text-center mt-5">
            Frequently Asked Questions ?
          </h1>
        </div>
        <div className="my-12 flex justify-center items-center gap-5 md:flex-col sm:flex-col lg:flex-row">
          <div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 "
            >
              <div className="collapse-title text-[1.1rem] font-medium">
                What Is Web Design, And Why Is It Important?
              </div>
              <div className="collapse-content">
                <p>
                  Web design is the process of creating the visual and
                  functional elements of a website.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 "
            >
              <div className="collapse-title text-[1.1rem] font-medium">
                Are These Projects Real Or Concepts?
              </div>
              <div className="collapse-content">
                <p>
                  The projects featured in my portfolio are a mix of real-world
                  projects I've completed and conceptual designs that showcase
                  my creative thinking and design skills.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 "
            >
              <div className="collapse-title text-[1.1rem] font-medium">
                How Often Is The Portfolio Updated?
              </div>
              <div className="collapse-content">
                <p>
                  I strive to keep my portfolio up-to-date with my latest work
                  and projects. I regularly update it to reflect my evolving
                  skills and design philosophy.
                </p>
              </div>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 "
            >
              <div className="collapse-title text-[1.1rem] font-medium">
                Can I Leave Feedback Or Comments On The Portfolio Projects?
              </div>
              <div className="collapse-content">
                <p>
                  At the moment, I don't have a comments section on the
                  portfolio pages. However, I welcome feedback and inquiries.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={undro} alt="fag image" />
          </div>
        </div>
      </section>
    </Container>
  );
};

export default About;
