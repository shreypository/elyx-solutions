import "./Pricing.css";

import {
  FaCheck
} from "react-icons/fa";

const Pricing = () => {

  return (

    <section className="pricing">

      {/* LEFT SIDE */}

      <div className="pricing-left">

       

        <h2>
          Digital <span>Investment</span>
        </h2>

        {/* PRICING CARD */}

        <div className="pricing-card">

          <span className="starting-text">
            STARTING FROM
          </span>

          <h3>
            ₹9,999
          </h3>

          {/* FEATURES */}

          <div className="pricing-features">

            <div className="feature-item">
              <FaCheck />
              <span>
                High-performance landing page
              </span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>
                Mobile optimization
              </span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>
                Basic SEO setup
              </span>
            </div>

            <div className="feature-item">
              <FaCheck />
              <span>
                2-week delivery
              </span>
            </div>

          </div>

          {/* BUTTON */}

          <button className="pricing-btn">
            Inquire Now
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="pricing-right">

        <div className="pricing-line"></div>

        <p>
          We believe premium engineering should
          feel intentional, scalable, and future-
          ready. Every project is crafted with
          performance, clarity, and conversion
          in mind.
        </p>

        {/* TRUST ROW */}

        <div className="trust-row">

          <div className="avatars">

            <span>S</span>
            <span>M</span>
            <span>L</span>

          </div>

          <span className="trust-text">
            Trusted by growing startups
          </span>

        </div>

      </div>

    </section>

  );

};

export default Pricing;