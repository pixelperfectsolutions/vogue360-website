import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/+919944471130"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1
      }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 15px rgba(37, 211, 102, 0.8)"
      }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="tooltip">Chat with us</span>
    </motion.a>
  );
};

export default WhatsAppButton;
