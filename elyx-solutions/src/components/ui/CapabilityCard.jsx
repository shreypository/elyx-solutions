import "./CapabilityCard.css";

import { motion } from "framer-motion";

const CapabilityCard = ({
  title,
  subtitle,
  description,
  className,
}) => {

  return (

    <motion.div
      className={`capability-card ${className}`}

      whileHover={{
        y: -8,
        scale: 1.01,
      }}

      transition={{
        type: "spring",
        stiffness: 180,
      }}
    >

      {/* SYSTEM HEADER */}

      <div className="card-top">

        <div className="system-dot"></div>

        <span>
          ELYX SYSTEM
        </span>

      </div>

      {/* MAIN CONTENT */}

      <div className="card-content">

        <p className="card-subtitle">
          {subtitle}
        </p>

        <h3>
          {title}
        </h3>

        <p className="card-description">
          {description}
        </p>

      </div>

      {/* FAKE UI */}

      <div className="system-ui">

        <div className="ui-line large"></div>

        <div className="ui-line"></div>

        <div className="ui-line short"></div>

        <div className="ui-grid">

          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>

      </div>

      {/* GLOW */}

      <div className="card-glow"></div>

    </motion.div>
  );
};

export default CapabilityCard;