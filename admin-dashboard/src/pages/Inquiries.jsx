import "./Inquiries.css";
import { useEffect, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  FileText,
  Download
} from "lucide-react";

import { getInquiries, deleteInquiry } from "../api/inquiryApi";
import InquiryModal from "../pages/InquiryModal";

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInquiry, setSelectedInquiry] = useState(null);


  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    try {
      const data = await getInquiries();
      setInquiries(data);
    } catch (error) {
      console.error(error);
    }
  };



  const handleDelete = async (id) => {
    try {
      await deleteInquiry(id);

      // remove from UI instantly
      setInquiries((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {
      console.error(error);
    }
  };



  const filteredInquiries = inquiries.filter(
    (inquiry) =>
      inquiry.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inquiry.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inquiries-page">
      <div className="inquiries-header">
        <div>
          <h1>Inquiries</h1>
          <p>
            Manage all incoming inquiries from the Riveyra website.
          </p>

          <div className="inquiry-search">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search inquiry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>


      </div>

      <div className="inquiries-table">

        <div className="inquiry-table-header">
          <span>Lead</span>
          <span>Services</span>
          <span>Budget</span>
          <span>Company</span>
          <span>Resume</span>
          <span>Submitted At</span>
          <span>Actions</span>
        </div>

        {filteredInquiries.map((inquiry) => (
          <div className="inquiry-table-row" key={inquiry._id} >

            <div className="lead-info">
              <h4>{inquiry.name}</h4>
              <p>{inquiry.email}</p>
              <span>{inquiry.phone}</span>
            </div>

            <div className="services-column">
              {inquiry.services?.join(", ")}
            </div>

            <div className="budget-column">
              {inquiry.budget}
            </div>

            <div className="company-column">
              {inquiry.company || "-"}
            </div>


           

            <div className="resume-column">

              {inquiry.resume ? (

                <a
                  href={`http://localhost:5000/${inquiry.resume}`}
                  target="_blank"
                  rel="noreferrer"
                  className="resume-download"
                >
                  <FileText size={20} />

                  <span>View</span>

                </a>

              ) : (

                <span className="no-resume">
                  —
                </span>

              )}

            </div>

            <div className="submitted-column">
              {new Date(inquiry.createdAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}

              <br />

              <small>
                {new Date(inquiry.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>









            <div className="actions">
              <button onClick={() => setSelectedInquiry(inquiry)}>
                <Eye size={16} />
              </button>



              <button
                className="delete-btn"
                onClick={() => handleDelete(inquiry._id)}
              >
                <Trash2 size={16} />
              </button>
            </div>

          </div>
        ))}

      </div>
      <InquiryModal
        inquiry={selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
      />
    </div>
  );
}