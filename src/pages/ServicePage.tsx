import { NavLink } from 'react-router-dom';

const EventManagementService = () => {
  return (
    <div className="font-sans">
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
              <NavLink to="/service" className="text-[16px] font-medium">
                Service
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
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1510070009289-b5bc34383727?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Make Your Event Unforgettable
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Professional event management services for every occasion.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-blue-600">
            Get Started
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 11c0 1.04.73 2.61 1.35 3.57a3.99 3.99 0 01-.35 4.93l-1.67 1.67a2 2 0 01-2.83 0l-1.67-1.67a3.99 3.99 0 01-.35-4.93c.62-.96 1.35-2.53 1.35-3.57a4 4 0 118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Wedding Planning
              </h3>
              <p className="mt-4 text-gray-600">
                From venue selection to guest management, we make your special
                day perfect.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-green-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 12l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Corporate Events
              </h3>
              <p className="mt-4 text-gray-600">
                Professional management for conferences, meetings, and corporate
                events.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 mx-auto text-red-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4.686 4.686 0 013.349-1.384c2.485 0 4.507 2.065 4.507 4.614 0 1.748-.667 3.64-1.624 5.125-1.688 2.69-4.095 4.789-6.232 6.292-2.137-1.503-4.544-3.602-6.232-6.292C5.811 10.624 5.144 8.732 5.144 6.984 5.144 4.435 7.165 2.37 9.651 2.37c1.125 0 2.207.41 3.052 1.14l.297.297.297-.297z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                Private Parties
              </h3>
              <p className="mt-4 text-gray-600">
                Whether it's a birthday, anniversary, or any celebration, we got
                you covered.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "The team was fantastic! They handled everything and made sure
                our wedding was magical."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="Client"
                />
                <div>
                  <p className="text-gray-800 font-semibold">John Doe</p>
                  <p className="text-gray-500 text-sm">Wedding Client</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "Our corporate event was a success thanks to their attention to
                detail and professionalism."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="Client"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <p className="text-gray-500 text-sm">Corporate Client</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600">
                "I couldn't have asked for a better event manager for my
                birthday party. Everything was perfect!"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/85.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="Client"
                />
                <div>
                  <p className="text-gray-800 font-semibold">Mike Johnson</p>
                  <p className="text-gray-500 text-sm">Private Party Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-[#171611] text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Plan Your Next Event?
          </h2>
          <p className="mt-4 text-lg">
            Contact us today to discuss your event management needs.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-100">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventManagementService;
