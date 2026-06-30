import React from "react";
import { useEffect, useState } from "react";
import "./Career.css";
import ab1 from "../assets/career.jpeg";
import Nav from "../components/Nav";
import CareerScroll from "./CareerScroll";
import Footer from "../components/Footer";
import careerVideo from "../assets/career.mp4";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


function Career() {

    const [activeIndex, setActiveIndex] = useState(0);
    const sections = [
        {
            id: "move-fast",
            number: "01",
            title: "Move Fast",
            label: "Execution",
            color: "transparent",
            desc: "We ship real products to real users. Speed and quality go hand in hand. We focus on execution, learning quickly, and continuously improving."
        },
        {
            id: "own-work",
            number: "02",
            title: "Own Your Work",
            label: "Ownership",
            color: "transparent",
            desc: "No micromanagement. You own your projects, make decisions, and take responsibility for outcomes that create meaningful impact."
        },
        {
            id: "grow-together",
            number: "03",
            title: "Grow Together",
            label: "Growth",
            color: "transparent",
            desc: "Monthly learning sessions, mentorship programs, and dedicated learning budgets help every team member reach the next level."
        },
        {
            id: "recognised",
            number: "04",
            title: "Be Recognised",
            label: "Recognition",
            color: "transparent",
            desc: "Outstanding work deserves recognition. From bonuses and rewards to public appreciation, we celebrate achievements loudly."
        }
    ];



    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sections.findIndex(
                            (item) => item.id === entry.target.id
                        );

                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        window.scroll(0, 0)
    }, [])







    return (
        <>
            <Nav />

            <section className="career-hero">
                <img src={ab1} alt="Career Background" className="career-bg" />

                <div className="career-overlay">
                    <p className="career-subtitle">JOIN OUR TEAM</p>

                    <h1 className="career-title">
                        Create. Grow. Lead.
                    </h1>

                    <p className="career-description">
                        We're a fast-growing technology company building impactful digital
                        products for businesses, governments, and enterprises across India.
                        Join a team of passionate creators, innovators, and problem-solvers
                        shaping the future through technology.
                    </p>

                    <Link to="/contact"> <button className="career-btn">
                        Contact Us →
                    </button></Link>

                </div>
            </section>
            <section className="culture-section">
                <div className="culture-container">
                    {/* LEFT SIDE */}
                    <div className="culture-left">
                        <div className="culture-left-inner">
                            <p className="culture-subtitle">Life at Riveyra</p>

                            <h2 className="culture-heading">
                                Built for
                                <br />
                                People Who Build
                            </h2>

                            <div className="culture-nav">
                                {sections.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`culture-nav-item ${activeIndex === index ? "active" : ""
                                            }`}
                                        onClick={() => scrollToSection(item.id)}
                                        style={{
                                            "--accent": item.color,
                                        }}
                                    >
                                        <span>{item.number}</span>
                                        <h3>{item.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="culture-right">
                        {sections.map((item) => (
                            <section
                                key={item.id}
                                id={item.id}
                                className="culture-panel"
                            >
                                <div
                                    className="culture-card"
                                    style={{
                                        background: item.color,
                                    }}
                                >
                                    <p className="culture-label">
                                        {item.number} — {item.label}
                                    </p>

                                    <h2>{item.title}</h2>

                                    <p className="culture-desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </section>






            <CareerScroll />

            <section className="hiring-process-section">

                {/* Background Video */}
                <video
                    className="hiring-process-video"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src={careerVideo} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="hiring-process-overlay"></div>

                {/* Content */}
                <div className="hiring-process-content">
                    <div className="hiring-process-header">
                        <p>Hiring Process</p>
                        <h1>Simple. Fast. Transparent.</h1>
                    </div>

                    {/* Bottom Cards */}
                    <div className="hiring-process-steps">
                        <div className="hiring-step-card">
                            <h2>01</h2>
                            <h4>Apply Online</h4>
                            <p>Send us your resume and a short note about why you want to join.</p>
                        </div>

                        <div className="hiring-step-card">
                            <h2>02</h2>
                            <h4>Screening Call</h4>
                            <p>A 20-min chat with HR to learn about you and answer your questions.</p>
                        </div>

                        <div className="hiring-step-card">
                            <h2>03</h2>
                            <h4>Tech Round</h4>
                            <p>A practical task or technical interview relevant to your role.</p>
                        </div>

                        <div className="hiring-step-card">
                            <h2>04</h2>
                            <h4>Final Interview</h4>
                            <p>Meet the team lead and founder. Culture fit, vision, and offer.</p>
                        </div>
                    </div>
                </div>

            </section>







            <div className="services-header2">
                <h1>We're Always Looking for Great People.</h1>
                <br />
                <h4 style={{ color: "gray" }}>
                    Send us your resume and what you're great at. If there's a fit, we'll reach out.</h4>
                <br />
                <div className="button-section" >
                    <Link to="/contact"><button className="btn primary">Send Your Resume ➜</button></Link>
                    <Link to="/about"><button className="btn secondary">About Riveyra</button></Link>
                    
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

        </>
    );
}

export default Career;