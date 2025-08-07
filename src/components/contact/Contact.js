import React, { useState } from 'react';
import './Contact.css';
import Layout from '../../Layout/Layout';
import contact from '../../assets/images/Contact.jpg';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', mobileNumber: '', message: '' });
      } else {
        setStatus(`Failed: ${data.message}`);
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <Layout>
    <div className='contact'>
      <div className='top-contact'>
        <div className="contact-container">
        <h2 style={{color:"#E5342C"}}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
        <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
        <button type="submit">Send Message</button>
        <p className="status">{status}</p>
      </form>
    </div>
     <div className='contact-image '>
          <img src={contact} alt='banner' className='contact-image-banner'></img>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default ContactForm;
