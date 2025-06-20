// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home/home'
import LabDiagnostic from "./components/products/LabDiagnostic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/labDiagnostic" element={<LabDiagnostic/>} />
      </Routes>
    </Router>
  );
}

export default App;
