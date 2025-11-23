import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="
        relative w-full overflow-hidden 
        pt-40 pb-16 md:pb-24 
        px-6 md:px-12 lg:px-26
        bg-linear-to-b from-[#EAF6FF] to-white
      "
    >
      {/* Background Illustration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-20 w-[380px] h-[380px] bg-[#5696c3] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-[#5696c3] rounded-full blur-[140px] opacity-50"></div>
      </div>

      {/* GRID */}
      <div className="max-w-[1440px] relative mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1
            className="
              text-[#000000]
              font-bold
              text-[32px] sm:text-[36px] md:text-[48px] lg:text-[55px]
              leading-[120%]
            "
          >
            WE CARE ABOUT YOUR HEALTH
          </h1>

          <p
            className="
              text-[#000000]
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[160%]
              max-w-xl
            "
          >
            We're dedicated to helping you take control of your well-being, with
            a focus on diabetes care and prevention. Our goal is to guide,
            support, and empower you with the knowledge and tools you need to
            live a healthier, more confident life.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Book Appointment Button */}
            {/* <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(71,166,238,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="
                bg-[#47A6EE] 
                px-6 py-3 
                rounded-xl 
                text-[18px] md:text-[20px] 
                text-black
                transition-all duration-300
                w-full sm:w-auto
              "
            >
              Book Appointment
            </motion.button> */}

            {/* Learn More Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#021ab2" }}
              whileTap={{ scale: 0.97 }}
              className="
              bg-blue-700 
              text-white 
              px-7 py-3 
              rounded-full 
              font-medium 
              
              text-[18px] md:text-[20px]
              shadow 
              mb-2
              w-fit
            "
            >
              <Link to="/login" className="">
                Get Started
              </Link>
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Decorative small circles */}
          <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-200 rounded-full opacity-40 blur-xl"></div>
          <div className="absolute bottom-6 -left-6 w-16 h-16 bg-blue-300 rounded-full opacity-40 blur-lg"></div>

          <img
            src="/images/hero.jpg"
            alt="Hero"
            className="
              w-[85%] sm:w-[70%] md:w-[95%] lg:w-[90%]
              max-w-[520px]
              rounded-2xl shadow-xl object-cover
            "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
