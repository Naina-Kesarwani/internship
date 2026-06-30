// Tech.jsx

import React from "react";
import "./Tech.css";

function Tech() {
  return (
    <section className="tech-section">
      {/* OVERLAY */}
      <div className="tech-overlay" />

      {/* CONTENT */}
      <div className="tech-content">
        <div className="tech-text">
          <span className="tech-tag">OUR TECH UNIVERSE</span>

          <h1 className="tech-title">
            Technologies That Power Your Vision
          </h1>

          <p className="tech-desc">
            We master the full spectrum of modern technologies — from mobile
            and cloud to AI and ERP — delivering future-proof solutions every
            time.
          </p>

          {/* LISTS */}
          <div className="tech-lists">
            <ul>
              <li>React & Next.js</li>
              <li>Node & Python</li>
              <li>ERP & CRM</li>
            </ul>

            <ul>
              <li>Flutter & Swift</li>
              <li>AI & Machine Learning</li>
              <li>Cloud & DevOps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tech;