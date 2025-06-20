// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home/home'
import LabDiagnostic from "./components/products/LabDiagnostic";
import Consumable from "./components/products/Conumable";
import PoctDevice from "./components/products/PoctDevice";
import CriticalCare from "./components/products/CriticalCare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/labDiagnostic" element={<LabDiagnostic/>} />
         <Route path="/consumable" element={<Consumable/>} />
          <Route path="/poctdevice" element={<PoctDevice/>} />
           <Route path="/criticalcare" element={<CriticalCare/>} />
      </Routes>
    </Router>
  );
}

export default App;
