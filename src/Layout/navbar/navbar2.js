import React, { useState } from 'react';
import './navbar2.css';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/circular_logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setShowMenu(false); // Close menu after click
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-left">
        <img src={Logo} className="logo-image" alt="logo.png" />
        <div className="logo-title">
          <h4><span style={{ color: "#E5342C" }}>NOVO</span>TRONICS</h4>
          <h6>HEALTHCARE</h6>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-right desktop-menu">
        <div className="dropdown" onClick={() => navigate('/')}>Home</div>
        <div className="dropdown" onClick={() => navigate('/vision')}>About</div>
        <div className="dropdown">
          Products
          <div className="dropdown-content">
            <a href="/labDiagnostic">Lab Diagnostic</a>
            <a href="/criticalcare">Critical Care</a>
            <a href="/poctdevice">POCT Devices</a>
          </div>
        </div>
        <div className="dropdown" onClick={() => navigate('/career')}>Career</div>
        <div className="dropdown" onClick={() => navigate('/contact')}>Contact Us</div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setShowMenu(true)}>
        <FaBars />
      </div>

      {/* Offcanvas Menu for Mobile */}
      {showMenu && (
        <div className="offcanvas">
          <span className="close" onClick={() => setShowMenu(false)}>×</span>
          <div onClick={() => handleNavigate('/')}>Home</div>
          <div onClick={() => handleNavigate('/vision')}>About</div>
          <div onClick={() => handleNavigate('/products')}>Products</div>
          <div onClick={() => handleNavigate('/career')}>Career</div>
          <div onClick={() => handleNavigate('/contact')}>Contact Us</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
