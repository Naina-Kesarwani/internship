import React from "react";
import "./Trust.css";

import t1 from "../assets/t1.png";
import t2 from "../assets/t2.png";
import t3 from "../assets/t3.png";
import t4 from "../assets/t4.png";
import t5 from "../assets/t5.png";
import t6 from "../assets/t6.png";
import t7 from "../assets/t7.png";

function Trust() {
  const images = [t1, t2, t3, t4, t5, t6, t7];

  const logos = [...images, ...images];

  return (
    <section className="trust-section">
      {/* HEADING */}
      <h1 className="trust-title">
        Organizations that Trust Us
      </h1>

      <p className="trust-desc">
        From Government Organizations to Private Enterprises — we've helped
        businesses across India build remarkable digital products.
      </p>

      {/* MARQUEE ROW 1 */}
      <div className="marquee mask">
        <div className="marquee-content left">
          {logos.map((img, index) => (
            <div key={index} className="logo-box">
              <img src={img} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* MARQUEE ROW 2 */}
      <div className="marquee mask mt">
        <div className="marquee-content right">
          {logos.map((img, index) => (
            <div key={index} className="logo-box">
              <img src={img} alt={`logo-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="trust-stats">
        <div className="stat-box">
          <h1>50+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

        <div className="stat-box">
          <h1>120+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>

        <div className="stat-box">
          <h1>10+</h1>
          <p>YEARS EXPERIENCE</p>
        </div>
      </div>
    </section>
  );
}

export default Trust;