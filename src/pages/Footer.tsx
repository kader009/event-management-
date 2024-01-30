const Footer = () => {
  return (
    <div className="sm:mt-[100px] lg:mt-[180px]">
      <footer className="text-white footer p-10 bg-[#171611] ">
        <aside>
          <div className=" text-[32px] font-semibold text-[#000000]">
            Event<span className="ml-1 text-[#0B63E5]">City</span>
          </div>
        </aside>
        <nav>
          <h6 className="text-white">Services</h6>
          <a className="link link-hover">Event Item</a>
          <a className="link link-hover">Upcomming Event</a>
          <a className="link link-hover">Meet Our Team</a>
        </nav>
        <nav>
          <h6 className="text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Gallery</a>
        </nav>
        <nav>
          <h6 className="text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
