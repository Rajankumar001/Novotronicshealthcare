import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";
import './navbar1.css';
function Navbar1() {
  return (
     <div className='top-navbar'>
       <div className='left-top-navbar'>
          <IoMdMail color='#D93025' size={20}/> 
          <h2 className='info-mail-title'>info@novotronicshealthcare.com</h2>
       </div>
       <div className='right-top-navbar'>
        <div>
          <FaFacebook color='#1877F2' size={20}/>
        </div>   
        <div>
          <FaInstagram  color='#E4405F' size={20}/></div>   
        <div>
       <FaLinkedin color='#0077B5' size={20}/>
          </div>  
           <div>
       <FaWhatsapp color='#25D366' size={20}/>
          </div>     
       </div>
    </div>
  )
}

export default Navbar1;
