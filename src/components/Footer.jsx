import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiPhone, FiMail, FiMapPin, FiMessageSquare } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <motion.div 
              className="logo"
              whileHover={{ scale: 1.05 }}
            >
              <Link to="/">Vouge360<span className="dot">.</span>in</Link>
            </motion.div>
            <p className="footer-description">
              Experience luxury and transformation at our premium salon. 
              We blend artistry with cutting-edge techniques to create your perfect look.
            </p>
            <div className="social-icons">
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiInstagram />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiFacebook />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Hair Cutting</li>
              <li>Hair Coloring</li>
              <li>Styling</li>
              <li>Beard Grooming</li>
              <li>Spa Treatments</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="contact-info">
              <p><FiMapPin /> 123 Luxury Street, Mumbai, India</p>
              <p><FiPhone /> +91 9944471130</p>
              <p><FiMessageSquare /> <a href="https://wa.me/919944471130" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></p>
              <p><FiMail /> info@vouge360.in</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Vouge360.in. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;