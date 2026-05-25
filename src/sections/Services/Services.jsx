import "./Services.css";

import {
  FaCode,
  FaMobileAlt,
  FaPenNib,
  FaChartLine
} from "react-icons/fa";

const Services = () => {

  return (

    <section className="services">

      {/* SECTION HEADER */}

      <div className="services-header">

        <span className="services-label">
          EXPERTISE
        </span>

        <h2>
          Capabilities
        </h2>

      </div>

      {/* SERVICES GRID */}

      <div className="services-grid">

        {/* LARGE CARD */}

        <div className="service-card large-card">

          <div className="service-icon">
            <FaCode />
          </div>

          <h3>
            Web Development
          </h3>

          <p>
            High-performance websites engineered
            for speed, scalability, and conversion.
          </p>

        </div>

        {/* SMALL CARD */}

        <div className="service-card">

          <div className="service-icon">
            <FaMobileAlt />
          </div>

          <h3>
            App Development
          </h3>

          <p>
            Premium mobile applications with
            seamless user experiences.
          </p>

        </div>

        {/* SMALL CARD */}

        <div className="service-card">

          <div className="service-icon">
            <FaPenNib />
          </div>

          <h3>
            Brand Identity
          </h3>

          <p>
            Visual systems and digital branding
            crafted for modern companies.
          </p>

        </div>

        {/* LARGE CARD */}

        <div className="service-card large-card">

          <div className="service-icon">
            <FaChartLine />
          </div>

          <h3>
            SEO & Performance
          </h3>

          <p>
            Optimization strategies focused on
            visibility, speed, and growth.
          </p>

        </div>

      </div>

    </section>

  );

};

export default Services;