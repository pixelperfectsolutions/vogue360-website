import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    alert('Thank you for your booking request! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Our Location",
      details: "No. 21/C2, 2nd floor, Peons Colony, Mettupalayam Road, Kavundampalayam, Coimbatore – 641 030"
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      details: "+91 9944471130"
    },
    {
      icon: <FiMail />,
      title: "WhatsApp Us",
      details: "+91 9944471130"
    },
    {
      icon: <FiClock />,
      title: "Working Hours",
      details: "Mon-Sun: 10:00 AM - 9:00 PM"
    }
  ];

  const services = [
    "Hair Cutting",
    "Hair Coloring",
    "Beard Grooming",
    "Spa Treatment",
    "Styling",
    "Other"
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="contact-page page-container">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="section-title"
        >
          <motion.h1
            variants={fadeInUp}
          >
            Contact Us
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-subtitle"
          >
            Ready for your transformation? Book your appointment today
          </motion.p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="contact-info-section"
          >
            <h2>Get In Touch</h2>
            <p className="contact-description">
              Have questions or ready to book your appointment? Reach out to us through any of the channels below.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.3132349657244!2d76.93720!3d11.02970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af5aaaaaab%3A0xaaaaaaaaaaaaaaaa!2sVOGUE%20360!5e0!3m2!1sen!2sin!4v1659432145185!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: '8px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="VOGUE 360 Salon Location"
              ></iframe>
              <div className="map-link">
                <a 
                  href="https://maps.app.goo.gl/JTBvtfg9Ct9EFim46" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary map-button"
                  style={{
                    display: 'inline-block',
                    marginTop: '15px',
                    padding: '10px 20px',
                    backgroundColor: '#d4af37',
                    color: '#000',
                    borderRadius: '30px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FiMapPin style={{ marginRight: '8px' }} /> Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="booking-form"
          >
            <h2>Book Appointment</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-large">Book Now</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;