import Navbar from "../components/common/Navbar";

import Hero from "../sections/Hero/Hero";

import ServicesSection from "../sections/Services/ServicesSection";

const Home = () => {

  return (
    <>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* SERVICES */}
      <ServicesSection />

    </>
  );
};

export default Home;