import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import About1 from "./utils/About1";
import Services1 from './utils/Services1.jsx';
import Portfolio from './utils/Portfolio.jsx';
import Career from './utils/Career.jsx';
import Contact from './utils/Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/about" element={<About1 />} />
      <Route path="/services" element={<Services1 />} />
      <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/career" element={<Career />} />
       <Route path="/contact" element={<Contact />} />

    </Routes>

  </BrowserRouter>

  </StrictMode>,
)
