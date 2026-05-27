import "./Navbar.css";

import { useEffect, useState } from "react";

const Navbar = () => {

  const [showNavbar, setShowNavbar] =
    useState(true);

  const [lastScrollY, setLastScrollY] =
    useState(0);

  /* ========================================
     SMOOTH SCROLL
  ======================================== */

  const scrollToSection = (id) => {

    const section =
      document.getElementById(id);

    if(section){

      section.scrollIntoView({
        behavior:"smooth",
      });

    }
  };

  /* ========================================
     NAVBAR VISIBILITY
  ======================================== */

  useEffect(() => {

    const handleScroll = () => {

      const currentScrollY =
        window.scrollY;

      /* SHOW WHEN SCROLLING UP */

      if(currentScrollY < lastScrollY){

        setShowNavbar(true);

      }

      /* HIDE WHEN SCROLLING DOWN */

      else{

        setShowNavbar(false);

      }

      /* ALWAYS SHOW AT TOP */

      if(currentScrollY < 80){

        setShowNavbar(true);

      }

      setLastScrollY(currentScrollY);
    };

    /* SHOW NAVBAR WHEN MOUSE
       NEAR TOP OF SCREEN */

    const handleMouseMove = (e) => {

      if(e.clientY < 80){

        setShowNavbar(true);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };

  }, [lastScrollY]);

  return (

    <nav
      className={`navbar ${
        showNavbar
          ? "navbar-visible"
          : "navbar-hidden"
      }`}
    >

      {/* LOGO */}

      <div
        className="logo"
        onClick={() => scrollToSection("hero")}
      >
        ELYX
      </div>

      {/* NAV LINKS */}

      <div className="nav-links">

        <button
          className="active"
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>

        <button>
          Work
        </button>

        <button>
          About
        </button>

        <button>
          Contact
        </button>

      </div>

      {/* CTA */}

      <button className="nav-btn">
        Start Today ↗
      </button>

    </nav>
  );
};

export default Navbar;