import { useState } from "react";
import "./Choose.css";

import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";

export default function Choose() {
  const [active, setActive] = useState(0);

  const rowHeight = 95;

  const rows = [
    {
      left: "The Economic Times - 2026",
      middle: "Leader in AI-First Product Engineering",
      image: s1,
    },
    {
      left: "Clutch - 2025",
      middle: "Fastest-Growing Company",
      image: s2,
    },
    {
      left: "The Economic Times - 2025",
      middle: "Leader in AI Product Engineering & Digital Transformation",
      image: s3,
    },
    {
      left: "Deloitte - 2023-2024",
      middle: "Fastest Growing Technology Company",
      image: s4,
    },
    {
      left: "MobileAppDaily - 2024",
      middle: "Fastest Growing AI Development Company",
      image: s5,
    },
    {
      left: "CIO Association - 2024",
      middle: "Preferred Partner",
      image: s6,
    },
  ];

  return (
    <section className="choose-section">
      {/* HEADER */}
      <div className="choose-header">
        <p>WHY CHOOSE US</p>

        <h1>Built on Trust & Excellence</h1>

        <span>
          Hover over each row to explore the recognitions, achievements, and
          milestones that define our journey.
        </span>
      </div>

      {/* MAIN */}
      <div className="choose-container">
        {/* FLOATING IMAGE */}
        <div
          className="floating-card"
          style={{
            top: `${active * rowHeight + rowHeight / 2}px`,
          }}
        >
          <img src={rows[active].image} alt="award" />
        </div>

        {/* ROWS */}
        {rows.map((row, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              className={`choose-row ${isActive ? "active" : ""}`}
              onMouseEnter={() => setActive(index)}
            >
              <div className="choose-left">{row.left}</div>
              <div className="choose-right">{row.middle}</div>
            </div>
          );
        })}

        <div className="bottom-border" />
      </div>
    </section>
  );
}