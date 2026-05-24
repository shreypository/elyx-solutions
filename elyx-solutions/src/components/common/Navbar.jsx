import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        ELYX
      </div>

      {/* NAVIGATION LINKS */}
      <div className="nav-links">

        <a className="active" href="/">
          Home
        </a>

        <a href="/">
          Services
        </a>

        <a href="/">
          Portfolio
        </a>

        <a href="/">
          About
        </a>

        <a href="/">
          Contact
        </a>

      </div>

      {/* CTA BUTTON */}
      <button className="nav-btn">
        Start Today ↗
      </button>

    </nav>
  );
};

export default Navbar;