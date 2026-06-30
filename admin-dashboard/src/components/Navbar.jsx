import "./Navbar.css";
import { Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <header className="navbar">

      {/* LEFT */}
      <div className="nav-left">

       

        <button className="menu-btn" onClick={toggleSidebar}>
          <Menu size={22} />
        </button>


        <div className="logo">JJC</div>

        <div className="breadcrumb">
          <span className="app-name">JJC Systems</span>
          <span className="divider">/</span>
          <span className="page">Admin</span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <button className="icon-btn">🔔</button>
        <button className="icon-btn">⚙️</button>

        <button className="view-site">
          View Site
        </button>

      </div>

    </header>
  );
}