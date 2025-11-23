import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ServiceHighlights from "../components/Service";
import WhyChooseUs from "../components/WhyYouChoose";
import Testimonials from "../components/Testimonials";

import PartnersStrip from "../components/Partner";
import Footer from "../components/Footer";

export default function Home() {
  return (
     <div id="hom" className="w-full bg-[#FFFFFF]  min-h-screen">
      <div>
      <Navbar />
      <Hero />
      <Mission />
      <ServiceHighlights />
      <WhyChooseUs />
      <Testimonials />
      <PartnersStrip />
      <Footer />
      </div>
    </div>
  );
};