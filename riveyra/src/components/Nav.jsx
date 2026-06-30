import React, { useState } from "react";
import "./Nav.css";

import logo from "../assets/r1.png";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className="nav">

      <Link
        to="/"
        className="logo-link"
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "show" : ""}`}>

        <NavLink
          to="/"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Services
        </NavLink>

        <NavLink
          to="/portfolio"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Portfolio
        </NavLink>

        <NavLink
          to="/career"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Career
        </NavLink>

        <NavLink
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => isActive ? "active-link" : ""}
        >
          Contact
        </NavLink>

        <Link to="/contact">
          <button className="nav-btn">
            Get Started
          </button>
        </Link>

      </div>

    </nav>
  );
}

export default Nav;