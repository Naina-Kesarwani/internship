import React, { useEffect, useState, useRef } from "react";
import "./Number.css";

function Number() {
  const [count, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const numbers = [7, 3, 100, 500];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        startCounter();
        observer.disconnect();
      }
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounter = () => {
    const intervals = numbers.map((target, index) => {
      let start = 0;

      return setInterval(() => {
        start += 1;

        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });

        if (start >= target) {
          clearInterval(intervals[index]);
        }
      }, 20);
    });
  };

  const data = [
    { number: count[0], title: "Years Excellence" },
    { number: count[1], title: "Office Locations" },
    { number: count[2], title: "Team Members" },
    { number: count[3], title: "Projects Done" },
  ];

  return (
    <div className="number-section" ref={sectionRef}>
      {data.map((item, index) => (
        <div className="number-card" key={index}>
          <div className="number-value">{item.number}+</div>

          <div className="number-line" />

          <p className="number-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Number;