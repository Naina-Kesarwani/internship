import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

import img1 from "../assets/a1.png";
import img2 from "../assets/a2.png";
import img3 from "../assets/a3.png";
import img4 from "../assets/a4.jpeg";

function About() {

  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);


  const cardData = [
    {
      id: "card1",
      image: img1,
      title: "Maximize Efficiency",
      desc: "Streamlined workflows that cut costs and save time.",
    },
    {
      id: "card2",
      image: img2,
      title: "Strategic Guidance",
      desc: "Expert advisors aligned to your business goals.",
    },
    {
      id: "card3",
      image: img3,
      title: "24/7 Support",
      desc: "Round-the-clock assistance whenever you need it.",
    },
    {
      id: "card4",
      image: img4,
      title: "Competitive Edge",
      desc: "Technology that puts you ahead of the competition.",
    },
  ];



 

  return (
    <div className="about-container">
      <div className="about-container-content">
        <div className="about-container-content-h1">
          <h1>We Build Remarkable Digital Experiences</h1>
        </div>
        <div className="about-container-content-p">
          <p>Riveyra Infotech is Kanpur's premier software development company with over 7 years of proven excellence, delivering reliable and innovative digital solutions across India and beyond.

          </p>
        </div>
      </div>

      <div className="about-container-main-cards">
        <div className="about-container-cards">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="about-card"
            >
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="about-container-buttons">
        <Link to="/about"><button className="about-container-primary-button">Our Story ➜</button></Link>
        <Link to="/about"><button className="about-container-secondary-button">Watch Intro</button></Link>
      </div>
    </div>

  );
}

export default About;