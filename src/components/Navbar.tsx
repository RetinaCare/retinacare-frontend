
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
    <nav className="w-full h-[118px] rounded-[20px] bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50 border-[3px] border-[#0D99FF]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-[69px] h-[69px] rounded-[50px] border-[3px] border-[#0D99FF] flex items-center justify-center">
            <img src="./landing images/logo.png" alt="Retina Care Logo" className="w-10 h-12" />
          </div>
          <span className="w-[114px] h-6 font-['Inter'] font-bold text-[20px] leading-[100%] tracking-[0%] flex items-center justify-center text-[#0D99FF]">Retina Care</span>
        </Link>

        {/* Center links */}
        {/* <div className="hidden md:flex items-center gap-6"> */}
        <div className="hidden w-[320px] h-[43px] md:flex flex-row items-center justify-between gap-2 p-2 bg-white">
          <Link to="/" className="w-[100px] min-h-[40px] flex items-center justify-center gap-2 p-3 rounded-[10px] border border-[#0D99FF] bg-white font-['Inter'] font-normal not-italic text-[16px]  text-[#000000] hover:text-blue-600">Home</Link>    
{/* underline underline-offset-0 decoration-solid */}
          <Link to="/" className="w-[95px] min-h-[43px] flex items-center justify-center gap-2.5 p-3 rounded-[10px] border border-[#0D99FF] bg-white font-['Inter'] font-normal not-italic text-[16px] leading-[100%] tracking-[0%] text-[#000000] hover:text-blue-600">About Us</Link>

          <Link to="/" className="w-[109px] min-h-[43px] flex items-center justify-center gap-2.5 p-3 rounded-[10px] border border-[#0D99FF] bg-white font-['Inter'] font-normal not-italic text-[16px] leading-[100%] tracking-[0%] text-[#000000] hover:text-blue-600">OurService</Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="text-red-600 font-semibold hidden md:block">
            Emergency: (234) 900-0000-00
          </span>

          <button className="md:hidden">
            <img src="./landing images/mobile-nav.png" alt="menu" className="w-6 h-6" />
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
