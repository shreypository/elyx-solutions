import Navbar from "../components/common/Navbar";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services/Services";
import Pricing from "../sections/Pricing/Pricing";
import Testimonials from "../sections/Testimonials/Testimonials";
import CTA from "../sections/CTA/CTA";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;