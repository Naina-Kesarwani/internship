import React from "react";
import "./Footer.css";

import logo from "../assets/r1.png";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-left">
          <img src={logo} alt="logo" className="footer-logo" />

          <p className="footer-desc">
            Kanpur's premier IT company delivering innovative digital solutions
            across India and beyond.
          </p>

          {/* SOCIALS */}
          <div className="footer-socials">
            <a href="#" className="social-icon">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="social-icon">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <div>
            <h3>Services</h3>
            <ul>
              <li>AI Software Development</li>
              <li>Machine Learning Solutions</li>
              <li>AI Web Development</li>
              <li>AI Data Analytics & BI</li>
              <li>AI Cybersecurity</li>
            </ul>
          </div>

          <div>
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Disclaimer</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Riveyra Infotech Pvt. Ltd. All rights reserved.</p>
        <p>Made with ♥ in India</p>
      </div>
    </footer>
  );
}

export default Footer;