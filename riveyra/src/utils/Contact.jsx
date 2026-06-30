import React from 'react'
import { useEffect, useState } from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import "./Contact.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



const API_URL = "https://riveyra.onrender.com";


function Contact() {


    const [services, setServices] = useState([]);
    const [budget, setBudget] = useState("");
    const [loading, setLoading] = useState(false);
    const [resume, setResume] = useState(null);


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectDescription: "",
    });





    const serviceOptions = [
        "Web Development",
        "Mobile App Development",
        "UI/UX Design",
        "Cloud Solutions",
        "Digital Marketing",
        "AI & Automation",
    ];

    const budgetOptions = [
        "Under $1,000",
        "$1,000 - $5,000",
        "$5,000 - $10,000",
        "$10,000 - $25,000",
        "$25,000+",
    ];

    const handleServiceChange = (service) => {
        if (services.includes(service)) {
            setServices(services.filter((item) => item !== service));
        } else {
            setServices([...services, service]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone) {
            toast.error("Please fill all required fields");
            return;
        }

        if (!formData.email.includes("@") || !formData.email.includes(".")) {
            toast.error("Enter a valid email");
            return;
        }

        if (!/^[0-9]{10}$/.test(formData.phone)) {
            toast.error("Enter a valid 10-digit phone number");
            return;
        }

        setLoading(true);

        try {

            const form = new FormData();

            form.append("name", formData.name);
            form.append("email", formData.email);
            form.append("phone", formData.phone);
            form.append("company", formData.company);
            form.append("projectDescription", formData.projectDescription);
            form.append("budget", budget);

            // Send services as JSON
            form.append("services", JSON.stringify(services));

            // Send resume
            if (resume) {
                form.append("resume", resume);
            }

            const response = await fetch(`${API_URL}/api/inquiries`, {
                method: "POST",
                body: form,
            });

            const data = await response.json();

            if (response.ok) {

                toast.success("Inquiry submitted successfully!");

                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    projectDescription: "",
                });

                setServices([]);
                setBudget("");
                setResume(null);

            } else {
                toast.error(data.message || "Submission failed");
            }

        } catch (error) {
            console.error(error);
            toast.error("Server not responding.");
        } finally {
            setLoading(false);
        }
    };




    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return (
        <div>
            <Nav />

            <div className="contact-info-grid">

                <div className="contact-card">
                    <div className="contact-icon">✉</div>
                    <h3>Email Us</h3>
                    <p>hr@riveyrainfotech.com</p>
                    <p>sales@riveyrainfotech.com</p>
                    <span>We reply within 2 hours</span>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">📞</div>
                    <h3>Call Us</h3>
                    <p>+91 9919888269</p>
                    <span>Mon–Fri, 10AM–6:30PM IST</span>
                </div>

                <div className="contact-card">
                    <div className="contact-icon">📍</div>
                    <h3>Visit Us</h3>
                    <p>
                        Kanpur, Uttar Pradesh
                        <br />
                        STPI, 8th Floor, A-1/4 UPSIDC Complex,
                        <br />
                        Lakhanpur, 208024
                    </p>
                    <span>Also in Lucknow & Delhi</span>
                </div>

            </div>




            <section className="contact-form-section">
                <form className="contact-form-container" onSubmit={handleSubmit}>

                    <h2>Your Details</h2>
                    <p className="section-desc">
                        Tell us who you are so we can personalise our response.
                    </p>

                    <div className="form-grid">
                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />


                        <input
                            type="email"
                            placeholder="Enter your email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    email: e.target.value,
                                })
                            }
                        />


                        <input
                            type="tel"
                            placeholder="Enter your phone number"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })
                            }
                        />





                        <input
                            type="text"
                            placeholder="Company name"
                            required
                            value={formData.company}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    company: e.target.value,
                                })
                            }
                        /> </div>

                    <div className="form-group">
                        <h3>Services Needed</h3>

                        <div className="option-grid">
                            {serviceOptions.map((service) => (
                                <label
                                    key={service}
                                    className={`option-card ${services.includes(service) ? "active" : ""
                                        }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={services.includes(service)}
                                        onChange={() => handleServiceChange(service)}
                                    />
                                    {service}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <h3>Estimated Budget</h3>

                        <div className="option-grid">
                            {budgetOptions.map((item) => (
                                <label
                                    key={item}
                                    className={`option-card ${budget === item ? "active" : ""
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="budget"
                                        checked={budget === item}
                                        onChange={() => setBudget(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>




                    <div className="form-group">
                        <h3>Upload Your Resume</h3>

                        <p className="upload-desc">
                            Upload PDF, DOC or DOCX (Max 5 MB)
                        </p>

                        <label className="resume-upload">

                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => setResume(e.target.files[0])}
                            />

                            <div className="upload-box">

                                <span className="upload-icon">
                                    📄
                                </span>

                                <div>

                                    <strong>
                                        {resume ? resume.name : "Choose Resume"}
                                    </strong>

                                    <p>
                                        {resume
                                            ? `${(resume.size / 1024).toFixed(1)} KB`
                                            : "Click here to upload"}
                                    </p>

                                </div>

                            </div>

                        </label>
                    </div>





                    <div className="form-group">
                        <h3>Tell Us About Your Project</h3>

                        <textarea
                            rows="6"
                            placeholder="Share your goals, requirements, timeline, and any other details about your project..."
                            value={formData.projectDescription}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    projectDescription: e.target.value,
                                })
                            }
                        />
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                </form>
            </section>





            <Footer />
            <ToastContainer position="top-right" autoClose={3000} />

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

export default Contact
