import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#F5FBFF] shadow-sm">
      {/* CENTERED + MAX WIDTH */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo1.png"
            alt="Retina Care Logo"
            className="w-10 h-12 sm:w-12 sm:h-[55px]"
          />
          <span className="font-['Times New Roman'] text-[28px] sm:text-[36px] md:text-[42px] font-normal text-[#38B6FF]">
            Retina Care
          </span>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 text-[16px] lg:text-[20px] font-['Montserrat']">
          <li>
            <Link className="hover:text-[#29609B] text-[#366182]" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:text-[#29609B] text-black">
              About Us
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-[#29609B] text-black">
              Services <span>▼</span>
            </div>

            <div className="absolute left-0 mt-3 hidden group-hover:block bg-white shadow-lg rounded-lg py-3 w-56">
              <Link
                to="/eye-screening"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Eye Screening & Early Detection
              </Link>
              <Link
                to="/risk-assessment"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Risk Assessment & Reports
              </Link>
            </div>
          </li>

          <li>
            <Link className="hover:text-[#29609B] text-black" to="#">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* SIGN IN */}
        <div className="hidden md:flex items-center">
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-blue-50 transition"
          >
            <img src="/images/Frame 60.png" className="w-10 h-10" />
            <span className="text-[18px] lg:text-[20px] font-['Montserrat'] text-black">
              Sign In
            </span>
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => {
            setOpen(!open);
            setActiveDropdown(null);
          }}
          className="md:hidden text-gray-800 text-3xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white px-6 pb-5 pt-6 shadow-md w-full"
          >
            <ul className="flex flex-col gap-5 text-gray-800 font-['Montserrat'] text-[17px]">
              <li>
                <Link onClick={() => setOpen(false)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => setOpen(false)} to="3">
                  About Us
                </Link>
              </li>

              {/* MOBILE DROPDOWN */}
              <li>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "services" ? null : "services"
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Services <span>▼</span>
                </button>

                <AnimatePresence>
                  {activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 flex flex-col gap-2 text-[15px]"
                    >
                      <Link onClick={() => setOpen(false)} to="/eye-screening">
                        Eye Screening & Early Detection
                      </Link>

                      <Link
                        onClick={() => setOpen(false)}
                        to="/risk-assessment"
                      >
                        Risk Assessment & Reports
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <Link onClick={() => setOpen(false)} to="/contact">
                  Contact Us
                </Link>
              </li>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md text-center mt-1"
              >
                Sign In
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
