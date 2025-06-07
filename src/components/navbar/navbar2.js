import React, { useState } from 'react';
import './navbar2.css';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/NOVOTRONICS.png'

function Navbar2() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={Logo}  className='logo-image' alt='logo.png'/>
      </div>
      <div className="navbar-right desktop-menu">
        <div className="dropdown active">Home
        </div>
        <div className="dropdown">About
          <div className="dropdown-content">
            <a href="/">Team</a>
            <a href="/">Vision</a>
          </div>
        </div>
        <div className="dropdown">Product
          <div className="dropdown-content">
            <a href="/">Lab Diagnostic</a>
            <a href="/">Critical Care</a>
            <a href="/">POCT Devices</a>
            <a href="/">Consumables</a>
           
          </div>
        </div>
        <div className="dropdown">Career
        </div>
        <div className="dropdown">Contact Us
        </div>
      </div>

      <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        <FaBars />
      </div>

      {showMenu && (
        <div className="offcanvas">
          <span className="close" onClick={() => setShowMenu(false)}>×</span>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Product</a>
          <a href="/">Career</a>
          <a href="/">Contact Us</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar2;
