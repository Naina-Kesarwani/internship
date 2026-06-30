import React from 'react'
import { useEffect, useState } from "react";
import "./Portfolio.css";
import portfolio from "../assets/portfolio.png";
import Nav from '../components/Nav';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



function Portfolio() {


    useEffect(() => {
        window.scroll(0, 0)
    }, [])


    return (
        <div>
            <Nav />
            <section className="portfolio-hero">
                <img src={portfolio} alt="Portfolio Hero" className="portfolio-bg" />

                <div className="portfolio-overlay">
                    {/* <p className="portfolio-subtitle">CASE STUDIES</p> */}

                    <h1 className="portfolio-title">
                        Work That <br />
                        Speaks Louder <br />
                        Than Words.
                    </h1>

                    <p className="portfolio-description">
                        500+ projects delivered across government,
                        healthcare, real estate, and enterprise.
                        Hover any card to explore the details.
                    </p>
                </div>
            </section>
            <Carousel />
            <div className="services-header2">
                <h1>Your Project Could Be Next.</h1>
                <br />
                <h4 style={{ color: "gray" }}>
                    Let's build something that makes the list. We respond within 2 hours.</h4>
                <br />
                <div className="button-section" >
                    <Link to="/services"><button className="btn primary">Our Services ➜</button></Link>
                    <Link to="/career"><button className="btn secondary">Job Roles</button></Link>
                    
                </div>
            </div>
            <Footer />
           
            {/* WHATSAPP */}
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noreferrer"
                    className="whatsapp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
        </div>
    )
}

export default Portfolio;
