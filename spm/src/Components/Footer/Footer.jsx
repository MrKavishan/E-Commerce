import React from 'react';
import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo-section">
            <h2>Spice Mountain</h2>
            <p>Taste the Difference</p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="home">Home</a></li>
              <li><a href="products">Products</a></li>
              <li><a href="about">About Us</a></li>
              <li><a href='services'>Services</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>No 1234,</li>
              <li>Dharmapala Street, Hakmana Road, Matara.</li>
              <li>Tel: 041-2264252</li>
              <li>Email: spicemountain@gmail.com</li>
            </ul>
          </div>
          
            
           
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" aria-label="Facebook">
                <BsFacebook />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <BsInstagram />
              </a>
              <a href="https://whatsapp.com" aria-label="WhatsApp">
                <BsWhatsapp />
              </a>
              <a href="https://youtube.com" aria-label="YouTube">
                <BsYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Spice Mountain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;