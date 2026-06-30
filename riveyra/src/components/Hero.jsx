import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import main from "../assets/hero1.png";

import i1 from "../assets/i1.png";
import i2 from "../assets/i5.png";
import i3 from "../assets/i3.png";
import i4 from "../assets/i4.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function Hero() {
  const logos = [i1, i2, i3, i4, i1, i2];

  return (
    <div className="hero">
      {/* BACKGROUND */}
      <img src={main} alt="background" className="hero-bg" />

      {/* OVERLAY */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">
        <h1>We Shape Digital</h1>
        <h1>Futures Together.</h1>

        <p>
          Leveraging innovation, technology & consumer-centric strategies to
          build extraordinary digital products that define tomorrow's
          businesses.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">
          <button className="btn primary">Consult Our Experts ➜</button>
          <Link to="/portfolio"><button className="btn secondary">View Our Work</button></Link>
          
        </div>

        {/* CERTIFIED SLIDER */}
        {/* <div className="cert-box">
          <p>CERTIFIED BY</p>

          <div className="slider">
            {logos.map((img, index) => (
              <div key={index} className="logo-card">
                <img src={img} alt="cert" />
              </div>
            ))}
          </div>
        </div> */}
        {/* CERTIFIED SLIDER */}
        <div className="cert-box">
          <p>CERTIFIED BY</p>

          <div className="slider">
            {[...logos, ...logos].map((img, index) => (
              <div key={index} className="logo-card">
                <img src={img} alt="certification" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        className="whatsapp"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
}

export default Hero;