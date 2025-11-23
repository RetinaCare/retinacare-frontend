import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#F5FBFF] pt-16 pb-8">
      {/* CENTER WRAPPER – prevents width overflow */}
      <motion.div
        className="max-w-[1440px] mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Column 1 — Brand */}
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-4">
            {/* <img
              src="/images/logo1.png"
              alt="Retina Care Logo"
              className="w-10 h-[50px] sm:w-12 sm:h-[58px]"
            /> */}
            <span className="text-[32px] md:text-[48px] text-blue-700 font-semibold">
              RetinaCare
            </span>
          </a>

          <p className="text-black text-sm md:text-[18px] max-w-[450px]">
            Helping you manage Retinal with smarter tools and caring expert.
          </p>

          <p className="font-semibold mt-10 mb-5 text-black">Connect with Us</p>

          <div className="flex gap-4">
            <img src="/images/linkedin.png" className="w-6 h-6" />
            <img src="/images/fbk.png" className="w-6 h-6" />
            <img src="/images/insta.png" className="w-6 h-6" />
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="md:mt-22">
          <h3 className="font-bold text-black text-lg mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-black text-sm">
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>Chat with Us</li>
            <li>
              <Link to="/#">About Us</Link>
            </li>
            <li>Service</li>
          </ul>
        </div>

        {/* Column 3 — Contact + Subscribe */}
        <div className="md:mt-22">
          <h3 className="font-bold text-black text-lg mb-6 ">
            Contact Us
          </h3>

          <div className="mb-6 text-black text-sm">
            <p className="mb-1">Hours</p>
            <p>Monday to Sunday: 8AM – 6PM</p>
          </div>

          {/* Subscribe */}
          <p className="text-sm font-semibold mb-2 text-black">
            Enter your e-mail
          </p>

          <div className="flex items-center rounded-full border border-gray-300 bg-white overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 outline-none text-sm"
            />
            <button className="bg-[#1E5EDD] text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="border-t border-black mt-12 pt-6">
        <p className="text-center text-black text-sm">
          © 2025 RetinaCare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
