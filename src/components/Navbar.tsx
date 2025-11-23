import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // SCROLL SPY (detect active section)
  useEffect(() => {
  const sections = ["home", "about", "contact"];

  const handleScroll = () => {
    let currentSection = "home";

    sections.forEach((id) => {
      const sec = document.getElementById(id);

      if (sec) {
        const top = sec.offsetTop - 150; // navbar height offset
        const bottom = top + sec.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          currentSection = id;
        }
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const activeColor = "text-blue-700 font-semibold";

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#F5FBFF] shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 py-2 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#home" className="flex items-center">
          <span className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-blue-700">
            RetinaCare
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6 text-[15px] lg:text-[17px]">

          <li>
            <a
              href="#home"
              className={`${activeSection === "home" ? activeColor : "text-black"} hover:text-blue-700 font-semibold`}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={`${activeSection === "about" ? activeColor : "text-black"} hover:text-blue-700 font-semibold`}
            >
              About Us
            </a>
          </li>

          {/* SERVICES DROPDOWN */}
          <li className="relative group cursor-pointer">
            <div
              className={`flex items-center gap-1 ${
                activeSection === "services" ? activeColor : "text-black"
              } hover:text-blue-700 font-semibold`}
            >
              Services ▼
            </div>

            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-md rounded-lg py-2 w-56">
              <Link to="/eye-screening" className="block px-4 py-2 hover:bg-gray-100">
                Eye Screening & Early Detection
              </Link>
              <Link to="/risk-assessment" className="block px-4 py-2 hover:bg-gray-100">
                Risk Assessment & Reports
              </Link>
            </div>
          </li>

          <li>
            <a
              href="#contact"
              className={`${activeSection === "contact" ? activeColor : "text-black"} hover:text-blue-700 font-semibold`}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* SIGN IN BUTTON */}
        <div className="hidden md:flex items-center">
          <Link
            to="/login"
            className="px-4 py-2 rounded-md border-2 border-[#0a80ff] text-blue-700 font-semibold hover:text-[18px] hover:bg-[#c8e0f3] transition"
          >
            Sign In
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
            className="md:hidden bg-white px-6 pb-5 pt-4 shadow-md w-full"
          >
            <ul className="flex flex-col gap-5 text-gray-800 text-[16px]">

              <li>
                <a
                  href="#home"
                  onClick={() => setOpen(false)}
                  className={`${activeSection === "home" ? activeColor : "text-black"} hover:text-blue-700`}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setOpen(false)}
                  className={activeSection === "about" ? activeColor : ""}
                >
                  About Us
                </a>
              </li>

              {/* MOBILE SERVICES DROPDOWN */}
              <li>
                <button
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === "services" ? null : "services"
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Services ▼
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

                      <Link onClick={() => setOpen(false)} to="/risk-assessment">
                        Risk Assessment & Reports
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className={activeSection === "contact" ? activeColor : ""}
                >
                  Contact Us
                </a>
              </li>

              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="border border-[#29609B] text-[#29609B] px-5 py-2 rounded-md text-center mt-1"
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
