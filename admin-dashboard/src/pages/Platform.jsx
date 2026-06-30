import React, { useState } from "react";
import "./Platform.css";

const platformData = [
  {
    id: 1,
    title: "User Management",
    desc: "Manage all registered users, roles, and permissions.",
  },
  {
    id: 2,
    title: "Service Dashboard",
    desc: "Monitor and control all active services in real time.",
  },
  {
    id: 3,
    title: "Analytics",
    desc: "View performance metrics, reports, and insights.",
  },
  {
    id: 4,
    title: "Settings",
    desc: "Configure system preferences and platform settings.",
  },
];

const Platform = () => {
  const [items] = useState(platformData);

  return (
    <div className="platform-wrapper">
      <div className="platform-header">
        <h1>Platform Overview</h1>
        <p>Manage and monitor everything from a single dashboard</p>
      </div>

      <div className="platform-grid">
        {items.map((item) => (
          <div className="platform-card" key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <button className="platform-btn">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platform;