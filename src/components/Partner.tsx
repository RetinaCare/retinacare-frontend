import { motion } from "framer-motion";

const partners = [
  "/images/flexisaf.png",
  "/images/nhis.png",
  "/images/sdol.png",
  "/images/nhs.png",
  "/images/unicef.png",
  "/images/cross.png",
];

export default function PartnersStrip() {
  return (
    <section className="w-full py-8 px-10 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="
          w-full
          max-w-[1432px]
          bg-[#D7E8F5]
          rounded-full
          shadow-md
          flex
          justify-between
          items-center
          overflow-x-auto              
          scrollbar-hide             
          gap-4                        
          px-4 py-5                    
          md:px-10 md:gap-6            
        "
      >
        {partners.map((logo, i) => (
          <motion.img
            key={i}
            src={logo}
            alt={`partner-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="
              h-10 
              sm:h-12
              md:h-[60px]
              shrink-0            
              object-contain
            "
          />
        ))}
      </motion.div>
    </section>
  );
}
