import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Briefcase,
  Layers,
  FileText,
  Plus,
  ArrowRight
} from "lucide-react";

export default function Dashboard({ services, inquiries }) {
  const total = services.length;
  const live = services.filter(s => s.status === "Published").length;




  const totalInquiries = inquiries.length;

  const navigate = useNavigate();


  return (
    <div className="dashboard">

      {/* TOP CARDS */}
      <div className="stats-grid">




        <div className="stat-card services-card" onClick={() => navigate("/services")}>
          <div className="stat-top">
            <div className="stat-icon">
              <Briefcase size={38} />
            </div>

            <div className="stat-number">
              {live}
            </div>
          </div>
          <p className="stat-title">Services Live</p>
          <span className="stat-growth">
            {total} Total services
          </span>
        </div>


        <div className="stat-card leads-card" onClick={() => navigate("/inquiries")}>
          <div className="stat-top">
            <div className="stat-icon">
              <Users size={38} />
            </div>

            <div className="stat-number">
              {totalInquiries}
            </div>
          </div>

          <p className="stat-title">Total Inquiries</p>
          <span className="stat-growth"> +{totalInquiries} this month</span>
        </div>


        <div className="stat-card platforms-card" onClick={() => navigate("/platforms")}>
          <div className="stat-top">
            <div className="stat-icon">
              <Layers size={38} />
            </div>

            <div className="stat-number">
              4
            </div>
          </div>

          <p className="stat-title">Platforms Live</p>
          <span className="stat-growth">Currently Active</span>
        </div>

        <div className="stat-card case-card" onClick={() => navigate("/industries")}>
          <div className="stat-top">
            <div className="stat-icon">
              <FileText size={38} />
            </div>

            <div className="stat-number">
              4
            </div>
          </div>

          <p className="stat-title">Industries</p>
          <span className="stat-growth">Explore Industries</span>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="dashboard-bottom">

        {/* RECENT LEADS */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Recent Leads</h3>

            <button className="view-btn" onClick={() => navigate("/inquiries")}>
              View All
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="panel-body empty-state">
            No recent leads available.
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="dashboard-panel">
          <div className="panel-header">
            <h3>Quick Actions</h3>
          </div>

          <div className="quick-actions" >
            <button className="action-btn" onClick={() => navigate("/services")}>
              <Plus size={18} />
              Add New Service
            </button>

            <button className="action-btn" onClick={() => navigate("/platforms")}>
              <Plus size={18} />
              Add New Platform
            </button>

            <button className="action-btn">
              <Plus size={18} />
              Add New Case Study
            </button>

            <button className="action-btn">
              <Plus size={18} />
              Manage FAQs
            </button>

            <button className="action-btn">
              <Plus size={18} />
              View All Leads
            </button>


          </div>
        </div>

      </div>

    </div>
  );
}