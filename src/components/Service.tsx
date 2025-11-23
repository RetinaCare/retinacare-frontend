import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceHighlights: React.FC = () => {
  return (
    <section className="w-full px-8 py-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-17">

        {/* Scroll-triggered container */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 place-items-center"
        >

          {/* CARD VARIANTS */}
          {[
            {
              bg: "#23408E",
              title: "EARLY DETECTION AND SCREENING",
              text: "Quickly identify signs of diabetic retinopathy using AI-powered image analysis or retinal scans.",
            },
            {
              bg: "#5DE7A9",
              title: "PERSONALIZED RISK ASSESSMENT",
              text: "Get tailored insights based on your health data to reduce risks and improve outcomes.",
            },
            {
              bg: "#23408E",
              title: "ONGOING MONITORING & CARE",
              text: "Continuous follow-up ensures improved eye health and long-term protection.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className="rounded-[50px] flex flex-col justify-center p-10 w-full max-w-[418px] min-h-[343px]"
              style={{ backgroundColor: card.bg }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: index * 0.25,
                    duration: 0.7,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <h2 className="
              font-normal 
                text-[28px] md:text-[32px] 
                text-white 
                leading-[100%] 
                text-center
              ">
                {card.title}
              </h2>

              <p className="
              font-medium 
                text-[16px] 
                text-white 
                text-center 
                mt-4 
                leading-snug
              ">
                {card.text}
              </p>

              {/* Bottom Row */}
              {/* <div className="flex justify-between mt-6 items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    to="/" 
                    className="underline text-[18px] md:text-[20px] text-white"
                  >
                    View all
                  </Link>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F5FBFF] rounded-full w-[45px] h-[33px] flex justify-center items-center"
                >
                  <Link to="/">
                    <img 
                      src="./images/Arrow 2.png" 
                      alt="arrow" 
                      className="w-5 h-[15px]" 
                    />
                  </Link>
                </motion.button>
              </div> */}
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
