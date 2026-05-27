import "./ServicesSection.css";

import DeviceCard from "../../components/ui/DeviceCard";

const ServicesSection = () => {

  return (

    <section
      className="services-section"
      id="services"
    >

      {/* ========================================
          BACKGROUND
      ======================================== */}

      <div className="services-gradient"></div>

      <div className="services-noise"></div>

      {/* ========================================
          HEADER
      ======================================== */}

      <div className="services-header">

        <p className="services-label">
          WHAT WE DO
        </p>

        <h2>
          Designing The
          <br />
          Future Of Digital
          <br />
          Experiences
        </h2>

        <p className="services-description">

          We engineer modern websites,
          immersive mobile applications,
          scalable software ecosystems,
          and intelligent AI-driven systems
          built for ambitious modern brands.

        </p>

      </div>

      {/* ========================================
          SERVICES LAYOUT
      ======================================== */}

      <div className="services-layout">

        {/* ========================================
            LEFT SIDE
        ======================================== */}

        <div className="services-left">

          {/* WEB DEVELOPMENT */}

          <div className="service-item desktop-item">

            <DeviceCard
              type="desktop"
              title="Web Development"
              description="
              High-performance websites,
              landing pages, dashboards,
              and modern digital platforms
              crafted for growth.
              "
            />

          </div>

          {/* CUSTOM SOFTWARE */}

          <div className="service-item software-item">

            <DeviceCard
              type="software"
              title="Custom Software"
              description="
              Scalable backend systems,
              enterprise software,
              automation tools, and
              tailored digital infrastructures.
              "
            />

          </div>

        </div>

        {/* ========================================
            RIGHT SIDE
        ======================================== */}

        <div className="services-right">

          {/* MOBILE APPS */}

          <div className="service-item mobile-item">

            <DeviceCard
              type="mobile"
              title="Mobile Apps"
              description="
              Beautiful and immersive
              iOS and Android applications
              designed for performance
              and usability.
              "
            />

          </div>

          {/* AI AUTOMATION */}

          <div className="service-item ai-item">

            <DeviceCard
              type="ai"
              title="AI Automation"
              description="
              Intelligent automation,
              AI integrations, workflow
              optimization, and futuristic
              digital intelligence systems.
              "
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesSection;