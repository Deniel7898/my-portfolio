import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = ["home", "projects", "skills", "contact"];
    let scrollPosition = window.scrollY + 100; // offset for navbar height

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">Deniel Paul</a>
      </div>

      {/* Hamburger Icon */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
        <div className={menuOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Desktop nav */}
      <ul className="nav-links desktop">
        <li className={activeSection === "home" ? "active" : ""}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === "projects" ? "active" : ""}>
          <a href="#projects">Projects</a>
        </li>
        <li className={activeSection === "skills" ? "active" : ""}>
          <a href="#skills">Skills</a>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li className={activeSection === "home" ? "active" : ""}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className={activeSection === "projects" ? "active" : ""}>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
          </li>
          <li className={activeSection === "skills" ? "active" : ""}>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li className={activeSection === "contact" ? "active" : ""}>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
