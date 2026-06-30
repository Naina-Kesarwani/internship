import { useEffect, useRef } from "react";
import "./CareerScroll.css";

import img1 from "../assets/c1.jpeg";
import img2 from "../assets/c2.jpeg";
import img3 from "../assets/c3.jpeg";
import img4 from "../assets/c4.jpeg";
import img5 from "../assets/c5.jpeg";
import img6 from "../assets/c6.jpeg";
import {Link} from "react-router-dom";

const cards = [
    {
        title: "SEO & Growth Specialist",
        location: "Kanpur, India",
        exp: "1–2 Years",
        desc: "Drive organic growth and digital visibility for Riveyra and our clients. Combine technical SEO, content strategy, and paid media to deliver measurable ROI.",
        image: img1,
        tech: ["SEO", "Google Ads", "Analytics", "Content"],
    },

    {
        title: "Flutter Developer",
        location: "Kanpur, India",
        exp: "1–3 Years",
        desc: "Craft beautiful, performant cross-platform apps for Android and iOS. Our mobile products are used by thousands of users every day.",
        image: img2,
        tech: ["Flutter", "Dart", "Firebase", "REST APIs"],
    },

    {
        title: "Project Manager",
        location: "Kanpur, India",
        exp: "3–5 Years",
        desc: "Lead cross-functional teams to deliver complex technology projects on time and on budget. You'll be the bridge between clients, designers, and developers.",
        image: img3,
        tech: ["Agile", "JIRA", "Client Mgmt", "Risk Mgmt"],
    },

    {
        title: "UI/UX Designer",
        location: "Kanpur, India",
        exp: "1–3 Years",
        desc: "Design intuitive experiences for complex government and enterprise products. You'll own full design flows from user research through to polished handoff.",
        image: img4,
        tech: ["Figma", "Research", "Prototyping", "Motion"],
    },

    {
        title: "Frontend Developer",
        location: "Kanpur, India",
        exp: "1–2 Years",
        desc: "Build pixel-perfect, high-performance web interfaces for government and enterprise clients. You'll work directly with our design team to ship products used by millions.",
        image: img5,
        tech: ["React", "JavaScript", "CSS", "Figma"],
    },

    {
        title: "Backend Developer",
        location: "Kanpur, India",
        exp: "1–2 Years",
        desc: "Architect and build scalable APIs, ERP systems, and cloud infrastructure powering mission-critical government and enterprise platforms.",
        image: img6,
        tech: ["Node.js", "Express", "MongoDB", "AWS"],
    },
];

export default function CareerScroll() {
    const stickyRef = useRef(null);
    const parentRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const sticky = stickyRef.current;
            const parent = parentRef.current;

            if (!sticky || !parent) return;

            const scrollWidth = sticky.scrollWidth;
            const verticalHeight =
                parent.getBoundingClientRect().height -
                sticky.getBoundingClientRect().height;

            const stickyPosition = sticky.getBoundingClientRect().top;

            if (stickyPosition <= 0) {
                const scrolled = parent.getBoundingClientRect().top;

                sticky.scrollLeft =
                    (scrollWidth / verticalHeight) * -scrolled;
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <section className="scroll-section">

                <div className="scroll-header">
                    <p>
                        Open Positions</p>

                    <h1>6 Roles Available</h1>
                </div>
            </section>



            <section className="sticky-parent" ref={parentRef}>
                <div className="sticky" ref={stickyRef}>
                    <div className="horizontal">

                        {cards.map((card, index) => (
                            <div className="career-card" key={index}>
                                <div className="career-card-inner">
                                    <div className="career-content">
                                        <span className="job-type">Full-Time</span>

                                        <h2>{card.title}</h2>

                                        <p className="meta">
                                            {card.location} • {card.exp}
                                        </p>

                                        <p>{card.desc}</p>



                                        <div className="career-footer">
                                            <div className="tech-stack">
                                                {card.tech.map((tech, i) => (
                                                    <span key={i}>{tech}</span>
                                                ))}
                                            </div>
                                            <Link to="/contact"><button>Apply Now</button></Link>

                                            
                                        </div>
                                    </div>

                                    <div className="career-image">
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>


        </>
    );
}