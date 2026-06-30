import "./Industries.css";
import { Briefcase, Plus } from "lucide-react";
import { getInquiries, deleteInquiry } from "../api/inquiryApi";


export default function Industries() {
  const industries = [
    {
      id: 1,
      name: "Healthcare",
      description: "Digital transformation for hospitals, clinics, and patients.",
    },
    {
      id: 2,
      name: "Finance",
      description: "Secure and scalable banking and financial systems.",
    },
    {
      id: 3,
      name: "Retail & E-commerce",
      description: "Smart retail solutions for better customer experience.",
    },
    {
      id: 4,
      name: "Manufacturing",
      description: "Automation and ERP-driven manufacturing systems.",
    },
  ];

  return (
    <div className="industries-page">

      {/* HEADER */}
      <div className="industries-header">
        <div>
          <h1>Industries</h1>
          <p>Explore industries we work with</p>
        </div>

        
      </div>

      {/* GRID */}
      <div className="industries-grid">
        {industries.map((item) => (
          <div className="industry-card" key={item.id}>
            <div className="card-top">
              <Briefcase size={18} />
            </div>

            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}