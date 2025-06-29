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
					<FaMapMarkerAlt size={30} className='address-icon'/>
					<p><span>A322B/6 A-Block Gamri Extension,</span>Bhajanpura, New-Delhi 110053</p>
				</div>

				<div>
					<MdAddIcCall size={30} className='call-icon'/>
					<p>+91 9266516565</p>
				</div>

				<div>
					<IoMdMail size={30} className='mail-icon'/>
					<p><a href="mailto:support@company.com">info@novotronicshealthcare.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					Novotronics Healthcare, established in 2025, is backed by over 8 years of rich experience in the healthcare industry. Our journey began long before our official inception, driven by a deep understanding of the evolving needs of healthcare professionals and institutions.
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
