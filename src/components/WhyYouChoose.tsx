import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { type Variants } from "framer-motion";
const WhyChooseUs: React.FC = () => {
  const backgroundImage = "/images/chooseus.jpg";

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  // PARALLAX
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 120]);

  // CARD ANIMATION (GSAP-like)
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.96 },
    show: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.1,
        delay: custom * 0.22,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section ref={sectionRef} className="w-full md:px-8 py-8 md:py-10">
      <div className="max-w-[1374px] mx-auto px-6 md:px-16.5 relative">
        <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-xl">
          {/* BG IMAGE WITH ZOOM + PARALLAX */}
          <motion.img
            src={backgroundImage}
            alt="Why choose us"
            className="w-full h-[500px] md:h-[900px] object-cover"
            style={{ y: parallaxY }}
            initial={{ scale: 1.18, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 2.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55"></div>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center 
              text-center text-white text-4xl sm:text-5xl lg:text-[85px] 
              font-semibold leading-tight px-3"
          >
            WHY <br /> CHOOSE <br /> US!
          </motion.h2>

          {/* CONTENT WRAPPER */}
          <div className="absolute inset-0">
            {/* MOBILE SCROLLABLE CARDS */}
            <div className="md:hidden w-full max-h-[430px] overflow-y-auto px-3 pb-10 mt-6 space-y-6 relative z-20 scroll-smooth">
              {[
                {
                  title: "ADVANCED TECHNOLOGY",
                  text: "Our advanced technology helps identify diabetic retinopathy early, giving you the best chance to protect your vision.",
                },
                {
                  title: "EXPERT TEAM",
                  text: "We combine medical knowledge with innovative tools to provide accurate assessments and personalized guidance.",
                },
                {
                  title: "PATIENT CENTRED CARE",
                  text: "We believe in building lasting relationships and empowering you with resources to take control of your eye health.",
                },
                {
                  title: "COMPASSIONATE CARE",
                  text: "We put your well-being first, guiding you with empathy and understanding throughout your health journey.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className="w-full bg-white/15 backdrop-blur-md 
                           border border-white/20 shadow-lg rounded-2xl 
                           p-5 cursor-pointer transition-all duration-500"
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    rotateX: 4,
                    rotateY: -4,
                    boxShadow: "0px 12px 35px rgba(255,255,255,0.18)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <h3 className="text-white font-bold text-xl">{card.title}</h3>
                  <p className="text-white/90 mt-3 text-sm">{card.text}</p>
                </motion.div>
              ))}
            </div>

            {/* DESKTOP FLOATING CARDS */}
            <div className="hidden md:block">
              {[
                {
                  title: "ADVANCED TECHNOLOGY",
                  text: "Our advanced technology helps identify diabetic retinopathy early, giving you the best chance to protect your vision.",
                  pos: "left-16 top-24",
                },
                {
                  title: "EXPERT TEAM",
                  text: "We combine medical knowledge with innovative tools to provide accurate assessments and personalized guidance.",
                  pos: "right-16 top-24",
                },
                {
                  title: "PATIENT CENTRED CARE",
                  text: "We believe in building lasting relationships and empowering you with resources to take control of your eye health.",
                  pos: "left-16 bottom-24",
                },
                {
                  title: "COMPASSIONATE CARE",
                  text: "We put your well-being first, guiding you with empathy and understanding throughout your health journey.",
                  pos: "right-16 bottom-24",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "show" : "hidden"}
                  className={`
                    absolute ${card.pos}
                    w-[420px] bg-white/15 backdrop-blur-md 
                    border border-white/20 shadow-lg rounded-2xl 
                    p-5 cursor-pointer transition-all duration-500
                  `}
                  whileHover={{
                    scale: 1.08,
                    y: -12,
                    boxShadow: "0px 25px 45px rgba(255,255,255,0.25)",
                  }}
                >
                  <h3 className="text-white font-bold text-[38px] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white/90 mt-4 text-[15px]">{card.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
