import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Platforms from "./pages/Platform";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Inquiries from "./pages/Inquiries";
import { getInquiries } from "./api/inquiryApi";

import "./App.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [services, setServices] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };




  useEffect(() => {
    fetchServices();
    fetchInquiries();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/services");

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await response.json();

      setServices(data);

    } catch (error) {
      console.error(error);
    }
  };
  const fetchInquiries = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/inquiries");

      if (!response.ok) {
        throw new Error("Failed to fetch inquiries");
      }

      const data = await response.json();
      setInquiries(data);

    } catch (error) {
      console.error(error);
    }
  };





  return (
    <div className="app-container">
      <Navbar toggleSidebar={toggleSidebar} />

      <div className="app-body">
        <Sidebar sidebarOpen={sidebarOpen} services={services} inquiries={inquiries} />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<Dashboard services={services} inquiries={inquiries} />}
            />

            <Route
              path="/services"
              element={
                <Services
                  services={services}
                  setServices={setServices}
                />
              }
            />
            <Route
              path="/inquiries"
              element={
                <Inquiries
                  fetchInquiries={fetchInquiries}
                  setInquiries={setInquiries}
                />
              }
            />
            <Route
              path="/platforms"
              element={<Platforms />}
            />
            <Route
              path="/solutions"
              element={<Solutions />}
            />
            <Route
              path="/industries"
              element={<Industries />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;








// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";

// import Dashboard from "./pages/Dashboard";
// import Services from "./pages/Services";

// import "./App.css";

// function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setSidebarOpen((prev) => !prev);
//   };

//   const [services, setServices] = useState([
//   {
//     id: 1,
//     title: "ERP",
//     description: "test",
//     status: "Published"
//   }
// ]);
//   return (
//     <div className="app-container">
//       <Navbar toggleSidebar={toggleSidebar} />

//       <div className="app-body">
//         <Sidebar sidebarOpen={sidebarOpen} />

//         <main className="main-content">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/services" element={<Services />} />
//           </Routes>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default App;