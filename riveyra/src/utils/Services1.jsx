

import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import "./Services1.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../assets/services.png"
import services1 from "../assets/services1.jpeg"
import services2 from "../assets/services2.jpeg"
import services3 from "../assets/services3.jpeg"
import services4 from "../assets/services4.jpeg"
import services5 from "../assets/services5.png"
import services6 from "../assets/services6.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { getPublishedServices } from "../api/serviceApi";






import {
  FaBrain,
  FaCode,
  FaChartBar,
  FaShieldAlt,
  FaRobot,
  FaSearch,
  FaShoppingCart,
  FaBullhorn,
  FaBuilding,
  FaLaptopCode,
} from "react-icons/fa";

function Services1() {
  const [activeSection, setActiveSection] = useState("");
  const [publishedServices, setPublishedServices] = useState([]);



  const processData = [
    {
      number: "01",
      title: "Discovery",
      desc: "We learn your business, goals, constraints, and users before writing a single line of code.",
      image: services1,
    },

    {
      number: "02",
      title: "Strategy",
      desc: "We define the technical approach, architecture, and delivery roadmap — aligned to your timeline and budget.",
      image: services2,
    },

    {
      number: "03",
      title: "Design",
      desc: "Wireframes, prototypes, and design systems that are validated before development begins.",
      image: services3,
    },

    {
      number: "04",
      title: "Build",
      desc: "Agile sprints with weekly demos. You see progress every week, not just at the end.",
      image: services4,
    },

    {
      number: "05",
      title: "Launch",
      desc: "Deployment, QA, performance testing, and go-live support — we don't disappear at handoff.",
      image: services5,
    },

    {
      number: "06",
      title: "Grow",
      desc: "Post-launch monitoring, iteration, and support. Most clients stay with us for 3+ years.",
      image: services6,
    },
  ];






  const services = [
    { icon: <FaBrain />, title: "AI Software Development", desc: "We build intelligent applications powered by AI technologies." },
    { icon: <FaRobot />, title: "Machine Learning Solutions", desc: "Advanced ML solutions to predict and automate decisions." },
    { icon: <FaLaptopCode />, title: "AI Web Development", desc: "Modern websites optimized for speed, UX, and AI search." },
    { icon: <FaChartBar />, title: "AI Data Analytics & BI", desc: "Transform raw data into actionable insights." },
    { icon: <FaShieldAlt />, title: "AI Cybersecurity", desc: "Secure systems with intelligent threat detection." },
    { icon: <FaCode />, title: "Automation & RPA", desc: "Automate repetitive business processes." },
    { icon: <FaSearch />, title: "AI SEO, AEO, GEO, LLMO", desc: "Optimize for search engines and AI platforms." },
    { icon: <FaShoppingCart />, title: "AI E-commerce", desc: "Enhance online stores using AI." },
    { icon: <FaBullhorn />, title: "AI Digital Marketing", desc: "AI powered Digital Marketing for data driven growth." },
    { icon: <FaBuilding />, title: "Enterprise AI Solutions", desc: "End-to-end AI transformation for enterprises." },
  ];

  const handleEnter = (e) => {
    e.currentTarget.classList.add("active");
  };

  const handleLeave = (e) => {
    e.currentTarget.classList.remove("active");
  };


  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".process-card");

      let closestCard = null;
      let smallestDistance = Infinity;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const cardCenter = rect.top + rect.height / 2;

        const viewportCenter = window.innerHeight / 2;

        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < smallestDistance) {
          smallestDistance = distance;
          closestCard = card;
        }
      });

      if (closestCard) {
        setActiveSection(closestCard.id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await getPublishedServices();
      setPublishedServices(data);
    } catch (error) {
      console.error(error);
    }
  };





  useEffect(() => {
    window.scroll(0, 0)
  }, [])




  return (



    <div>
      <Nav />

      <div className="services-container-top">
        <div className="services-container-top-content">
          <div className="services-header-top">
            <h1>Deep Expertise,
              Real Results</h1>
          </div>

          <div className="services-subtext-top">
            <p>
              Nine specialisations. One unified team. We combine technical depth with strategic thinking to build digital products that move the needle.   </p>
          </div>
          <div className="services-section-top">

            <Link to="/contact"><button className="services-btn services-primary">Contact Us ➜</button></Link>

            <Link to="/portfolio">  <button className="services-btn services-secondary">View Portfolio</button></Link>

          </div>
        </div>
      </div>



      <div className="services-section">
        {/* GRID */}
        <div className="services-grid">


          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <div className="hover-line" />

              <div className="service-icon">{service.icon}</div>

              <h2>{service.title}</h2>

              <p>{service.desc}</p>
            </div>
          ))}
        </div>




        {/* AVAILABLE SERVICES */}

        {publishedServices.length > 0 && (
          <section className="available-services-section">

            {/* Background Effects */}
            <div className="available-blur blur-left"></div>
            <div className="available-blur blur-right"></div>

            <div className="available-services-container">

              <div className="available-services-header">

                <span className="available-tag">
                  OUR SERVICES
                </span>

                <h1>
                  Available Services
                </h1>

                <p>
                  Explore the latest solutions currently offered by our team,
                  designed to help businesses innovate, automate, and grow.
                </p>

              </div>

              <div className="available-services-grid">

                {publishedServices.map((service, index) => (
                  <div
                    key={service._id}
                    className="available-service-card"
                  >

                    <div className="service-top">

                      <div className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="service-line"></div>

                    </div>

                    <h2>{service.title}</h2>

                    <p>{service.description}</p>

                    <button className="service-read-more">
                      Learn More →
                    </button>
                     <div className="available-hover-line"></div>

                  </div>
                ))}

              </div>

            </div>

          </section>
        )}







      </div>
      <div className="services-section-bottom">
        <div className="services-content-bottom">
          {/* HEADER */}
          <p className="services-subtitle-bottom">How We Work</p>

          <h1 className="services-title-bottom">
            Our Delivery
            Process
          </h1>

          <p className="services-desc-bottom">
            Every engagement follows the same disciplined process — from discovery to post-launch growth. No surprises, no handoff chaos.
          </p>
        </div>
        <div className="services-process">
          <a
            href="#discovery"
            className={activeSection === "discovery" ? "active-nav" : ""}
          >
            <h3>Discovery ➜</h3>
          </a>

          <a
            href="#strategy"
            className={activeSection === "strategy" ? "active-nav" : ""}
          >
            <h3>Strategy ➜</h3>
          </a>

          <a
            href="#design"
            className={activeSection === "design" ? "active-nav" : ""}
          >
            <h3>Design ➜</h3>
          </a>

          <a
            href="#build"
            className={activeSection === "build" ? "active-nav" : ""}
          >
            <h3>Build ➜</h3>
          </a>

          <a
            href="#launch"
            className={activeSection === "launch" ? "active-nav" : ""}
          >
            <h3>Launch ➜</h3>
          </a>

          <a
            href="#grow"
            className={activeSection === "grow" ? "active-nav" : ""}
          >
            <h3>Grow ➜</h3>
          </a>
        </div>
        <div className="process-section">

          {processData.map((item, index) => (

            <div
              className={`process-card ${index % 2 === 0 ? "normal-card" : "reverse-card"
                }`}
              id={item.title.toLowerCase()}
              key={index}
            >

              {/* IMAGE */}
              <div className="process-image">
                <img src={item.image} alt={item.title} />
              </div>

              {/* CONTENT */}
              <div className="process-content">

                <span className="process-number">
                  {item.number}
                </span>

                <h1>{item.title}</h1>

                <p>{item.desc}</p>

              </div>

            </div>
          ))}
        </div>
      </div>







      <div className="services-header2">
        <h1>Ready to Build Something Great?</h1>
        <br />
        <h4 style={{ color: "gray" }}>Let's talk about your project. We respond within 2 hours.</h4>
        <br />
        <div className="button-section" >
          <Link to="/contact"><button className="btn primary">Contact Us ➜</button></Link>

          <Link to="/portfolio"><button className="btn secondary">View Our Work</button></Link>

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
  );
}

export default Services1;