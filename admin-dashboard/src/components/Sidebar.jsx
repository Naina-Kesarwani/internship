import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { Home, Box, Layers, Globe, BookOpen, FileText, Star, HelpCircle, Users, Mail } from "lucide-react";

const Sidebar = ({ sidebarOpen, services, inquiries }) => {

  const totalServices = services.length;
  
  const totalInquiries = inquiries.length;
  return (
    <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

      {/* TOP */}
      <div className="sidebar-top">

        <NavLink to="/" className="nav-link">
          {({ isActive }) => (
            <div className={`sidebar-item ${isActive ? "active" : ""}`}>
              <Home size={18} />
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>

        {/* CONTENT */}
        <p className="section-title">CONTENT</p>

        <NavLink to="/services" className="nav-link">
          {({ isActive }) => (
            <div className={`sidebar-item ${isActive ? "active" : ""}`}>
              <div className="item-left">
                <Box size={16} />
                <span>Services</span>
              </div>

              <span className="badge">{totalServices}</span>
            </div>
          )}
        </NavLink>
        <NavLink to="/inquiries"  className="nav-link"><SidebarItem icon={<Globe size={16} />} label="Inquiries" count={totalInquiries} /></NavLink>
        <NavLink to="/platforms"  className="nav-link"><SidebarItem icon={<Layers size={16} />} label="Platforms" count={14} /></NavLink>
        <NavLink to="/industries"  className="nav-link"><SidebarItem icon={<BookOpen size={16} />} label="Industries" count={9} /></NavLink>
        
        
        

        {/* RESOURCES */}
        <p className="section-title">RESOURCES</p>

        <SidebarItem icon={<BookOpen size={16} />} label="Blog & Guides" />
        <SidebarItem icon={<FileText size={16} />} label="Case Studies" />
        <SidebarItem icon={<Star size={16} />} label="Testimonials" />
        <SidebarItem icon={<HelpCircle size={16} />} label="FAQs" />

        {/* CRM */}
        <p className="section-title">CRM</p>

        <SidebarItem icon={<Users size={16} />} label="Contact Leads" />
      </div>

      {/* BOTTOM */}
      <div className="sidebar-bottom">
        <div className="admin">
          <div className="avatar">A</div>
          <div>
            <p className="admin-name">Admin</p>
            <p className="admin-role">admin</p>
          </div>
        </div>

        <Mail size={18} className="mail-icon" />
      </div>

    </div>
  );
};

/* Reusable item */
const SidebarItem = ({ icon, label, count }) => {
  return (
    <div className="sidebar-item">
      <div className="item-left">
        {icon}
        <span>{label}</span>
      </div>

      {count !== undefined && (
        <span className="badge">{count}</span>
      )}
    </div>
  );
};

export default Sidebar;

