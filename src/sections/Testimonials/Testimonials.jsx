import "./Testimonials.css";

import {
  FaStar
} from "react-icons/fa";

const Testimonials = () => {

  return (

    <section className="testimonials">

      {/* HEADER */}

      <div className="testimonials-header">

        <span className="testimonials-label">
          TESTIMONIALS
        </span>

        <h2>
          Voices of <span>Success</span>
        </h2>

        <p>
          Hear from brands and startups that
          trusted ELYX to craft scalable digital
          experiences.
        </p>

      </div>

      {/* TESTIMONIAL GRID */}

      <div className="testimonial-grid">

        {/* CARD 1 */}

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="testimonial-text">
            “ELYX transformed our online presence
            into a premium experience that finally
            matched our brand positioning.”
          </p>

          <div className="testimonial-user">

            <div className="avatar">
              S
            </div>

            <div>
              <h4>Sarah Jenkins</h4>
              <span>Founder, Nova Studio</span>
            </div>

          </div>

        </div>

        {/* CARD 2 */}

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="testimonial-text">
            “The attention to detail, performance,
            and visual direction exceeded every
            expectation we had.”
          </p>

          <div className="testimonial-user">

            <div className="avatar">
              M
            </div>

            <div>
              <h4>Marcus Lee</h4>
              <span>Creative Director</span>
            </div>

          </div>

        </div>

        {/* CARD 3 */}

        <div className="testimonial-card">

          <div className="stars">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <p className="testimonial-text">
            “From strategy to execution, everything
            felt intentional, premium, and built
            for long-term scale.”
          </p>

          <div className="testimonial-user">

            <div className="avatar">
              A
            </div>

            <div>
              <h4>Aarav Mehta</h4>
              <span>Startup Founder</span>
            </div>

          </div>

        </div>

      </div>

      {/* STATS */}

      <div className="stats-row">

        <div className="stat-item">
          <h3>120+</h3>
          <span>Projects Delivered</span>
        </div>

        <div className="stat-item">
          <h3>98%</h3>
          <span>Client Satisfaction</span>
        </div>

        <div className="stat-item">
          <h3>3X</h3>
          <span>Traffic Growth</span>
        </div>

        <div className="stat-item">
          <h3>14d</h3>
          <span>Avg Turnaround</span>
        </div>

      </div>

    </section>

  );

};

export default Testimonials;