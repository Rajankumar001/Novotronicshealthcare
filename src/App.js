// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home/home'
import LabDiagnostic from "./components/products/LabDiagnostic";

import PoctDevice from "./components/products/PoctDevice";
import CriticalCare from "./components/products/CriticalCare";
import ContactForm from "./components/contact/Contact";
// import Team from "./components/About/Team/Team";
import Vision from "./components/About/Vision/Vision";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/labDiagnostic" element={<LabDiagnostic/>} />
        
          <Route path="/poctdevice" element={<PoctDevice/>} />
           <Route path="/criticalcare" element={<CriticalCare/>} />
            <Route path="/contact" element={<ContactForm/>} />
              {/* <Route path="/team" element={<Team/>} /> */}
              <Route path="/vision" element={<Vision/>} />
      </Routes>
  );
}

export default App;
