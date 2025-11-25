import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Deniel Paul</h3>
          <p className="footer-title">Aspiring Software Engineer</p>
          <p className="footer-motto">Fueled by code, driven by curiosity.</p>
        </div>

        <div className="footer-right">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:deniel@example.com">deniel@example.com</a></p>
          <div className="footer-socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="mailto:deniel@example.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Deniel Paul. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
