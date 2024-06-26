import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const TextVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};

const Navbar = () => {
  return (
    <div className="bg-[#F5F6F7] px-[20px]">
      <nav className="w-full max-w-[1276px] mx-auto">
        <div className="drawer">
          <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Navbar */}
            <div className="w-full navbar">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div className="flex-1  text-[32px] font-semibold text-[#000000]">
                Event <span className="ml-1 text-[#0B63E5]">City</span>
              </div>
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <li>
                    <a className="text-[16px] font-medium">Home</a>
                  </li>
                  <li>
                    <NavLink to="/about" className="text-[16px] font-medium">
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="dashboard" className="text-[16px] font-medium">
                      Dashboard
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-3"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200">
              {/* Sidebar content here */}
              <li>
                <a className="text-[16px] font-medium">Home</a>
              </li>
              <li>
                <NavLink to="/about" className="text-[16px] font-medium">
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="dashboard" className="text-[16px] font-medium">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* header */}
        <div className="flex justify-between items-center mt-[32px] sm:flex-col lg:flex-row md:text-center lg:text-left sm:text-center">
          <div>
            <motion.h1
              variants={TextVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: 'spring',
                  damping: 20,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className="text-[64px] sm:text-[32px] md:text-[42px] lg:text-[64px] font-extrabold mb-[32px] text-[#061C3D] w-[626px] leading-tight"
            >
              Best Event management firm
            </motion.h1>
            <button className="w-[195px] h-[52px] bg-[#0B63E5] text-white text-[16px] font-normal rounded-sm">
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
      </nav>
    </div>
  );
};

export default Navbar;
