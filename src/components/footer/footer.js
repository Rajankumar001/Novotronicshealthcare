import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
  import { FaLinkedin } from "react-icons/fa";
  import { FaWhatsapp } from "react-icons/fa";
  import { FaMapMarkerAlt } from "react-icons/fa";
  import { MdAddIcCall } from "react-icons/md";
  import { IoMdMail } from "react-icons/io";
import './footer.css';
function Footer() {
  return (
   
      <footer class="footer-distributed">

			<div class="footer-left">

				<h3>Novo<span>tronics</span></h3>

				<p class="footer-links">
					<a href="#" class="link-1">Home</a>
					
					<a href="#">About</a>
				
					<a href="#">Product</a>
				
					<a href="#">Career</a>
					
					<a href="#">Contact</a>
				</p>
			</div>

			<div class="footer-center">

				<div>
					<FaMapMarkerAlt/>
					<p><span>A322B/6 A-Block Gamri Extension,</span>Bhajanpura, New-Delhi 110053</p>
				</div>

				<div>
					<MdAddIcCall/>
					<p>+91 9266516565</p>
				</div>

				<div>
					<IoMdMail/>
					<p><a href="mailto:support@company.com">info@novotronicshealthcare.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">

					<a href="#"><FaFacebook/></a>
					<a href="#"><FaInstagram/></a>
					<a href="#"><FaWhatsapp/></a>
					<a href="#"><FaLinkedin/></a>

				</div>

			</div>

		</footer>
  )
}

export default Footer
