import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

const Mission: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section
      ref={ref}
      id="aboutus"
      className="
          relative w-full 
          flex justify-center 
          py-10 md:py-10 
          px-6 md:px-12 lg:px-26
          overflow-hidden
        "
    >
      <div
        className="
            w-full 
            max-w-[1440px] 
            bg-[#63E6BE] 
            rounded-[40px]
            grid grid-cols-1 md:grid-cols-2
            gap-12 
            items-center 
            overflow-hidden
          "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 md:pr-8 px-6"
        >
          <h2
            className="
              font-['Montserrat'] 
              font-bold 
              text-[#000000]
              text-[30px] sm:text-[36px] md:text-[45px]
              leading-[120%]
            "
          >
            OUR MISSION
          </h2>

          <p
            className="
              font-['Montserrat'] 
              text-[#000000]
              text-[16px] sm:text-[18px] md:text-[20px]
              leading-[160%]
              max-w-lg
            "
          >
            Our mission at Retina Care is to provide comprehensive personalized
            healthcare that improves the lives of patients.
          </p>

          {/* CHECKLIST */}
          <ul className="space-y-4">
            {[
              "Deliver compassionate care",
              "Promote Health and Wellness",
              "Ensure Accessibility",
              "Utilize Advanced Technology",
              "Build lasting relationships",
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3 text-[18px] md:text-[20px] font-medium font-['Montserrat'] text-[#000000]"
              >
                <div
                  className="
                    w-9 h-9 
                    flex items-center justify-center 
                    rounded-full 
                    bg-white/30 border border-white
                  "
                >
                  <Check className="text-white" size={22} />
                </div>
                {item}
              </motion.li>
            ))}
          </ul>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#1c2f6d" }}
            whileTap={{ scale: 0.96 }}
            className="
              bg-[#233D91] 
              text-white 
              px-7 py-3 
              rounded-full 
              font-medium 
              font-['Montserrat']
              text-[18px] md:text-[20px]
              shadow 
              mt-6
              w-fit
            "
          >
            <Link to="/login" className="">
              Get Started
            </Link>
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
              relative
              w-full
              flex justify-end
            "
        >
          <img
            src="/images/mission.jpg"
            alt="Mission"
            className="
                w-full 
                h-80 sm:h-[400px] md:h-[520px] lg:h-[580px]
                object-cover
                rounded-r-[40px]
              "
          />

          {/* Soft gradient overlay (subtle, professional) */}
          <div
            className="
              absolute inset-0 
              bg-linear-to-l 
              from-[#63E6BE] via-transparent to-transparent
              opacity-40
              rounded-[30px] md:rounded-r-[40px]
            "
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
