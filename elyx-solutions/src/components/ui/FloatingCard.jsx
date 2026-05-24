import { motion } from "framer-motion";

const FloatingCard = ({
  icon,
  title,
  text,
  className,
}) => {
  return (
    <motion.div
      className={`floating-card ${className}`}

      initial={{
        opacity:0,
        y:50,
      }}

      animate={{
        opacity:1,
        y:0,
      }}

      transition={{
        duration:1,
      }}

      whileHover={{
        rotateX:8,
        rotateY:-8,
        scale:1.05,
        y:-10,
      }}

      style={{
        transformStyle:"preserve-3d",
      }}
    >

      {/* REFLECTION */}
      <div className="card-reflection"></div>

      {/* ICON */}
      <div className="card-icon">
        {icon}
      </div>

      {/* TEXT */}
      <h3>{title}</h3>

      <p>{text}</p>

      {/* ARROW */}
      <div className="arrow">
        ↗
      </div>

    </motion.div>
  );
};

export default FloatingCard;