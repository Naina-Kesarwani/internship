// Dev.jsx

import React, { useEffect, useRef } from "react";
import "./Dev.css";
import {
  FaCode,
  FaBrain,
  FaShieldAlt,
  FaLaptopCode,
} from "react-icons/fa";


function Dev() {
  const cardsRef = useRef([]);

useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector(".dev-section");

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const scrollProgress =
      Math.max(0, -rect.top) / window.innerHeight;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const localProgress = Math.min(
        Math.max(scrollProgress - index * 0.6, 0),
        1
      );

      const y = 180 - localProgress * 180;
      const opacity = localProgress;

      card.style.transform = `translateY(${y}px)`;
      card.style.opacity = opacity;
    });
  };

  window.addEventListener("scroll", handleScroll);

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

 const cards = [
  {
    icon: <FaLaptopCode />,
    title: "Strategic Technology Consulting",

   desc: "We help businesses align technology with growth through digital transformation, architecture planning, and scalable innovation.",
      button: "View Consulting Services",
  },

  {
    icon: <FaCode />,
    title: "Digital Product Development & Engineering",

  desc: "We build high-performance digital products with scalable architecture and seamless UX experiences optimized for performance and growth.",
  button: "View Engineering Services",
  },

  {
    icon: <FaBrain />,
    title: "AI, Data and Analytics Solutions",

    desc: "Leverage AI, automation, and advanced analytics to optimize operations, predict trends, and deliver intelligent customer experiences at scale.",

    button: "View AI Services",
  },

  {
    icon: <FaShieldAlt />,
    title: "Cloud Operations and Cybersecurity",

    desc: "Secure and scale your infrastructure with cloud-native operations, Zero Trust security frameworks, and enterprise-grade cybersecurity solutions.",

    button: "View Cybersecurity Services",
  },
];
  return (
    
    <section className="dev-section">
      <div className="dev-sticky">
        <div className="dev-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className="dev-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
                <div className="dev-icon">{card.icon}</div>
              <h2>{card.title}</h2>

              <p>{card.desc}</p>
              <button>{card.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dev;