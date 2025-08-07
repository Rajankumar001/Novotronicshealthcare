import React, { useState } from 'react';
import './navbar2.css';
import Logo from '../../assets/images/circular_logo.png';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleNavigate = (path) => {
    navigate(path);
    setShowMenu(false); // Close menu after click
  };

  const toggleMenu = () => {
    const newMenuState = !showMenu;
    setShowMenu(newMenuState);
    console.log('Menu toggled:', newMenuState);
    
    // Additional debugging
    if (newMenuState) {
      console.log('Menu should be OPEN now');
    } else {
      console.log('Menu should be CLOSED now');
    }
  };

  return (
    <>
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
        <div className="hamburger" onClick={toggleMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </div>
      </nav>

      {/* Backdrop to close menu when clicking outside */}
      {showMenu && (
        <div className="backdrop" onClick={() => setShowMenu(false)}></div>
      )}

      {/* Offcanvas Menu for Mobile */}
      {showMenu && (
        <div className="offcanvas">
          <span className="close" onClick={() => setShowMenu(false)}>×</span>
          <div className="menu-item" onClick={() => handleNavigate('/')}>Home</div>
          <div className="menu-item" onClick={() => handleNavigate('/vision')}>About</div>
          <div className="menu-item" onClick={() => handleNavigate('/labDiagnostic')}>Lab Diagnostic</div>
          <div className="menu-item" onClick={() => handleNavigate('/criticalcare')}>Critical Care</div>
          <div className="menu-item" onClick={() => handleNavigate('/poctdevice')}>POCT Devices</div>
          <div className="menu-item" onClick={() => handleNavigate('/career')}>Career</div>
          <div className="menu-item" onClick={() => handleNavigate('/contact')}>Contact Us</div>
        </div>
      )}
    </>
  );
}

export default Navbar2;