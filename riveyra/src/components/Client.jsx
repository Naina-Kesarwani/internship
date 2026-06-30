import React from "react";
import "./Client.css";

import p1 from "../assets/i1.png";
import p2 from "../assets/i2.png";
import p3 from "../assets/i3.png";
import p4 from "../assets/i4.png";

function Client() {
  const testimonials = [
    {
      text: "Riveyra delivered a website that truly exceeded our expectations. Their expertise, attention to detail, and passion for quality is absolutely unmatched.",
      name: "Thakur Shubham",
      role: "Web Dev Client",
      image: p1,
    },

    {
      text: "The custom ERP they built completely transformed how we operate. Tailored, lightning-fast, and dramatically more efficient than before.",
      name: "Rajeev Tripathi",
      role: "ERP Client",
      image: p2,
    },

    {
      text: "Our online presence skyrocketed within months. Data-driven strategies, exceptional ROI — simply the most capable team we've ever worked with.",
      name: "Rohitas Sonkar",
      role: "Digital Marketing",
      image: p3,
    },

    {
      text: "Professional communication, fast delivery, and outstanding support throughout the project. Working with them felt effortless and reliable.",
      name: "Ankit Verma",
      role: "Software Client",
      image: p4,
    },
  ];

  return (
    <section className="client-section">
      {/* HEADER */}
      <div className="client-header">
        <p>CLIENT TESTIMONIALS</p>

        <h1>What Our Clients Say</h1>
      </div>

      {/* SLIDER */}
      <div className="testimonial-wrapper">
        <div className="testimonial-track">
          {[...testimonials, ...testimonials].map((item, index) => (
            <div key={index} className="testimonial-card">

              {/* QUOTE */}
              <div className="quote-icon">“</div>

              {/* TEXT */}
              <p className="testimonial-text">{item.text}</p>

              {/* CLIENT */}
              <div className="client-info">

                {/* IMAGE */}
                <div className="client-image">
                  <img src={item.image} alt={item.name} />
                </div>

                {/* TEXT */}
                <div className="client-details">
                  <h3>{item.name}</h3>
                  <span>{item.role}</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Client;