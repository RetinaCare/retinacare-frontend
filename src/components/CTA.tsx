import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const backgroundImage = "/images/doct.jpg"; 


const CTAHealthBanner: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-120px" });

  // Enhanced parallax
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <section ref={sectionRef} className="w-full md:px-26 py-8n flex justify-center px-4">
      <div className="relative w-full max-w-[1432px] rounded-4xl overflow-hidden shadow-md">

        {/* BACKGROUND IMAGE */}
        <motion.img
          src={backgroundImage}
          alt="Why choose us"
          className="w-full h-[500px] md:h-[900px] object-cover"
          style={{ y: parallaxY }}
          initial={{ scale: 1.18, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{
            duration: 2.5,
            ease: [0.16, 1, 0.3, 1], 
          }}
        />

        {/* LEFT BUBBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            absolute top-10 left-10
            bg-[#63E6BE]
            px-6 py-4 rounded-[20px]
            shadow-md max-w-[260px]
            text-[#1B3A3A] text-[22px] font-semibold leading-snug
          "
        >
          Take the first step to <br /> better health
        </motion.div>

        {/* RIGHT BUBBLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="
            absolute bottom-10 right-10
            bg-[#63E6BE]
            px-6 py-4 rounded-[20px]
            shadow-md max-w-[260px]
            text-[#1B3A3A] text-[22px] font-semibold leading-snug
          "
        >
          Schedule your <br /> appointments today
        </motion.div>

      </div>
    </section>
  );
};

export default CTAHealthBanner;
