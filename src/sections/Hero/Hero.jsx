import React, { useEffect } from "react";

import "./Hero.css";

import FloatingCard from "../../components/ui/FloatingCard";

import {
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaBolt,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Hero = () => {

  /* ========================================
     MOUSE PARALLAX
  ======================================== */

  useEffect(() => {

  const handleMouseMove = (e) => {

    /* ========================================
       FLOATING CARD PARALLAX
    ======================================== */

    const cards =
      document.querySelectorAll(".floating-card");

    const x =
      (window.innerWidth / 2 - e.clientX) / 35;

    const y =
      (window.innerHeight / 2 - e.clientY) / 35;

    cards.forEach((card, index) => {

      const speed =
        (index + 1) * 0.18;

      card.style.transform = `
        translate(
          ${x * speed}px,
          ${y * speed}px
        )
      `;
    });

    /* ========================================
       MOUSE GLOW FOLLOW
    ======================================== */

    const glow =
      document.querySelector(".mouse-glow");

    if(glow){

      glow.style.left =
        `${e.clientX}px`;

      glow.style.top =
        `${e.clientY}px`;
    }

  };

  /* ========================================
     EVENT LISTENER
  ======================================== */

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

  /* ========================================
     CLEANUP
  ======================================== */

  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

  };

}, []);

  return (

    <section className="hero">

      {/* GRID */}
      <div className="grid-bg"></div>

      {/* MOUSE GLOW */}
      <div className="mouse-glow"></div>

      {/* PARTICLES */}
      <div className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* GLOW ORBS */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>

      {/* PLANET */}
      <div className="planet"></div>

      {/* ========================================
          TOP FLOATING CARDS
      ======================================== */}

      <FloatingCard
        icon={<FaGlobe />}
        title="Modern Websites"
        text="High-converting web experiences built for growth."
        className="card1"
      />

      <FloatingCard
        icon={<FaCode />}
        title="Custom Software"
        text="Scalable and secure software solutions."
        className="card3"
      />

      {/* ========================================
          HERO CONTENT
      ======================================== */}

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          y: 60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >

        {/* HEADING */}

        <h1>
          ELYX <br />
          <span>SOLUTIONS</span>
        </h1>

        {/* DESCRIPTION */}

        <p>
          We craft modern websites, powerful mobile
          applications, scalable software solutions,
          and immersive digital experiences that help
          brands grow in the modern world.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Your Project →
          </button>

          <button className="secondary-btn">
            View Portfolio
          </button>

        </div>

      </motion.div>

      {/* ========================================
          LOWER FLOATING CARDS
      ======================================== */}

      <FloatingCard
        icon={<FaMobileAlt />}
        title="Mobile Apps"
        text="iOS & Android applications users love."
        className="card2"
      />

      <FloatingCard
        icon={<FaBolt />}
        title="Fast Performance"
        text="Optimized systems for speed and performance."
        className="card4"
      />

    </section>
  );
};

export default Hero;