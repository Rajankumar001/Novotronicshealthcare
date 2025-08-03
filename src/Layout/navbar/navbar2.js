import React, { useState } from 'react';
import './navbar2.css';
import { FaBars } from 'react-icons/fa';
import Logo from '../../assets/images/Logo_Image.png';
import { useNavigate } from 'react-router-dom';

function Navbar2() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
      <img src={Logo}  className='logo-image' alt='logo.png'/>
      </div>
      <div className="navbar-right desktop-menu">
        <div className="dropdown active"  onClick={()=>{
          navigate('/')
        }}>Home
        </div>
        <div className="dropdown" onClick={()=>{
         navigate('/vision')
        }}>About
        </div>
        <div className="dropdown">Product
          <div className="dropdown-content">
            <a href="/labDiagnostic">Lab Diagnostic</a>
            <a href="/criticalcare">Critical Care</a>
            <a href="/poctdevice">POCT Devices</a>
           
          </div>
        </div>
        <div className="dropdown">Career
        </div>
        <div className="dropdown"onClick={()=>{
         navigate('/contact')
        }} >Contact Us
          
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
