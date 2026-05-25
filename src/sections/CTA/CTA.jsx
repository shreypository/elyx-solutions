import "./CTA.css";

const CTA = () => {

  return (

    <section className="cta">

      {/* TOP CONTENT */}

      <div className="cta-content">

       

        <h2>
          Build Something
          <span> Exceptional</span>
        </h2>

        <button className="cta-btn">
          Start a Project
        </button>

      </div>

      {/* MARQUEE */}

      <div className="marquee">

        <div className="marquee-track">

          <span>
            SCALABLE DIGITAL EXPERIENCES —
          </span>

          <span>
            SCALABLE DIGITAL EXPERIENCES —
          </span>

          <span>
            SCALABLE DIGITAL EXPERIENCES —
          </span>

        </div>

      </div>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-left">

          <div className="footer-logo">
            ELYX
          </div>

          <p>
            Premium digital experiences crafted
            for ambitious brands and startups.
          </p>

        </div>

        <div className="footer-right">

          <a href="https://www.instagram.com/elyxsolutions/"
    target="_blank"
    rel="noopener noreferrer">
            Instagram
          </a>

          <a href="/">
            LinkedIn
          </a>

          <a href="/">
            Twitter
          </a>

        </div>

      </footer>

      {/* COPYRIGHT */}

      <div className="copyright">

        © 2026 ELYX Solutions.
        All rights reserved.

      </div>

    </section>

  );

};

export default CTA;