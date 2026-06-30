import React from "react";
import "./Services.css";

import {
  FaBrain,
  FaCode,
  FaChartBar,
  FaShieldAlt,
  FaRobot,
  FaSearch,
  FaShoppingCart,
  FaBullhorn,
  FaBuilding,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  const services = [
    { icon: <FaBrain />, title: "AI Software Development", desc: "We build intelligent applications powered by AI technologies." },
    { icon: <FaRobot />, title: "Machine Learning Solutions", desc: "Advanced ML solutions to predict and automate decisions." },
    { icon: <FaLaptopCode />, title: "AI Web Development", desc: "Modern websites optimized for speed, UX, and AI search." },
    { icon: <FaChartBar />, title: "AI Data Analytics & BI", desc: "Transform raw data into actionable insights." },
    { icon: <FaShieldAlt />, title: "AI Cybersecurity", desc: "Secure systems with intelligent threat detection." },
    { icon: <FaCode />, title: "Automation & RPA", desc: "Automate repetitive business processes." },
    { icon: <FaSearch />, title: "AI SEO, AEO, GEO, LLMO", desc: "Optimize for search engines and AI platforms." },
    { icon: <FaShoppingCart />, title: "AI E-commerce", desc: "Enhance online stores using AI." },
    { icon: <FaBullhorn />, title: "AI Digital Marketing", desc: "AI powered Digital Marketing for data driven growth." },
    { icon: <FaBuilding />, title: "Enterprise AI Solutions", desc: "End-to-end AI transformation for enterprises." },
  ];

  const handleEnter = (e) => {
    e.currentTarget.classList.add("active");
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove("active");
  };

  return (
    <div className="services-section">
      {/* HEADER */}
      <p className="services-subtitle">WHAT WE OFFER</p>

      <h1 className="services-title">
        Deep Technical Expertise,
        <br />
        Supporting Modern Systems
      </h1>

      <p className="services-desc">
        We build reliable and scalable digital solutions that help businesses
        grow with modern technology and seamless user experiences.
      </p>

      {/* GRID */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <div className="hover-line" />

            <div className="service-icon">{service.icon}</div>

            <h2>{service.title}</h2>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;