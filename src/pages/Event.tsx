import { NavLink } from 'react-router-dom';
import Container from '../components/ui/Container';

const Event = () => {
  return (
    <Container>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <div className="flex-1  text-[32px] font-semibold text-[#000000]">
            Event<span className="ml-1 text-[#0B63E5]">City</span>
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


<section className='mt-10'>
  <div className='text-center'>
    <h4 className='tracking-[2px] text-[#0B63E5] text-[18px] font-semibold'>SCHEDULE OF EVENT</h4>
    <h1 className='text-[44px] font-bold text-black'>List of Events Planned </h1>
    <p className='text-[18px] text-[#6d6c6c] pb-4'>This is a detailed list event of conference for digital technology 2024.</p>
    <button className='py-[20px] px-[30px] text-white bg-[#0B63E5] font-bold rounded-sm hover:translate-y-3'>DOWNLOAD SCHEDULE </button>
  </div>
</section>

      <div className="flex justify-center items-center my-16">
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    className="fill-emerald-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                <time className="font-caveat font-medium text-xl text-[#0B63E5] md:w-28">
                  Apr 7, 2024
                </time>
              </div>
              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold">Mark Mikrol</span>{' '}
                opened the request
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </div>
          </div>

          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      className="fill-slate-300"
                      d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                    />
                    <path
                      className="fill-slate-500"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                    />
                  </svg>
                </div>
                <time className="font-caveat font-medium text-xl text-[#0B63E5] md:w-28">
                  Apr 7, 2024
                </time>
              </div>
              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold">John Mirkovic</span>{' '}
                commented the request
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </div>
          </div>

          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      className="fill-slate-300"
                      d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                    />
                    <path
                      className="fill-slate-500"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                    />
                  </svg>
                </div>
                <time className="font-caveat font-medium text-xl text-[#0B63E5] md:w-28">
                  Apr 8, 2024
                </time>
              </div>
              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold">Vlad Patterson</span>{' '}
                commented the request
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              Letraset sheets containing passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Ipsum.
            </div>
          </div>

          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path
                      className="fill-slate-300"
                      d="M14.853 6.861C14.124 10.348 10.66 13 6.5 13c-.102 0-.201-.016-.302-.019C7.233 13.618 8.557 14 10 14c.51 0 1.003-.053 1.476-.143L14.2 15.9a.499.499 0 0 0 .8-.4v-3.515c.631-.712 1-1.566 1-2.485 0-.987-.429-1.897-1.147-2.639Z"
                    />
                    <path
                      className="fill-slate-500"
                      d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V11.5a.5.5 0 0 0 .8.4l1.915-1.436c.845.34 1.787.536 2.785.536 3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0Z"
                    />
                  </svg>
                </div>
                <time className="font-caveat font-medium text-xl text-[#0B63E5] md:w-28">
                  Apr 8, 2024
                </time>
              </div>
              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold">Mila Capentino</span>{' '}
                commented the request
              </div>
            </div>
            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>
          </div>

          <div className="relative">
            <div className="md:flex items-center md:space-x-4 mb-3">
              <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                  <svg
                    className="fill-red-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                  </svg>
                </div>
                <time className="font-caveat font-medium text-xl text-[#0B63E5] md:w-28">
                  Apr 9, 2024
                </time>
              </div>
              <div className="text-slate-500 ml-14">
                <span className="text-slate-900 font-bold">Mark Mikrol</span>{' '}
                closed the request
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
              If you are going to use a passage of Lorem Ipsum!
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Event;
