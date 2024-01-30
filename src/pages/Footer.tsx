const Footer = () => {
  return <div className="sm:mt-[100px] lg:mt-[180px]">
    <footer className="text-white footer p-10 bg-[#171611] ">
  <aside>
  <div className=" text-[32px] font-semibold text-[#000000]">
                Crazy<span className="ml-1 text-[#0B63E5]">Hour</span>
              </div>
  </aside> 
  <nav>
    <h6 className="text-white">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
  </nav> 
  <nav>
    <h6 className="text-white">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
  </nav> 
  <nav>
    <h6 className="text-white">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  </div>;
};

export default Footer;
