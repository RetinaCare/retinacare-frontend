import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Aisha M.",
    role: "Teacher",
    text: `I never realized how important regular eye checks were until this platform guided me. Thanks to their early detection tools, my diabetic retinopathy was caught in time. I feel so much more in control of my health now!`,
    avatar: "/images/test1.png",
  },
  {
    name: "Emeka. O",
    role: "Accountant",
    text: `The support and guidance I received have been incredible. They don't just focus on the disease—they care about me as a person.`,
    avatar: "/images/test2.png",
  },
  {
    name: "Chinwe. U",
    role: "Nurse",
    text: `I was nervous about diabetic retinopathy screenings, but the process was simple and compassionate. The personalized advice has made managing my eye health easier.`,
    avatar: "/images/test3.png",
  },
  {
    name: "Tunde. A",
    role: "Software Developer",
    text: `As a busy person, their reminders and guidance have made it easy to keep track of my eye health.`,
    avatar: "/images/test4.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-80px" });

  // Auto rotate every 6s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-8 md:px-26 px-6 md:py-10"
    >
      <div className="bg-[#5DE7A9] rounded-[30px] max-w-7xl mx-auto px-6 md:px-6 py-10 md:py-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center font-['Inter']"
        >
          <h2 className="text-[#000000] font-semibold text-[30px] md:text-[48px] leading-tight">
            Testimonials
          </h2>
          <p className="text-[#000000] text-[20px] md:text-[28px] mt-2">
            What our patient says
          </p>
        </motion.div>

        {/* Testimonial Box */}
        <div className="relative w-full max-w-[850px] mx-auto mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-[#168CE6] rounded-2xl p-8 md:p-12 shadow-xl text-center"
            >
              <p className="text-white text-[18px] md:text-[22px] leading-8 max-w-[90%] mx-auto">
                “{testimonials[index].text}”
              </p>

              {/* Avatar Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8 flex flex-col items-center"
              >
                <img
                  src={testimonials[index].avatar}
                  className="w-14 h-14 rounded-full border-2 border-white object-cover"
                />
                <div className="mt-3">
                  <p className="text-white font-semibold text-lg">
                    {testimonials[index].name}
                  </p>
                  <p className="text-[#5DE7A9] font-semibold text-sm">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-[#168CE6] scale-125" : "bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
