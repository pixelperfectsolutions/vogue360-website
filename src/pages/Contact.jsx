import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { Helmet } from 'react-helmet';
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
    
    // Format the message with form data
    const message = `*New Booking Request*%0A%0A` +
                   `*Name:* ${formData.name}%0A` +
                   `*Phone:* ${formData.phone}%0A` +
                   `*Email:* ${formData.email}%0A` +
                   `*Service:* ${formData.service}%0A` +
                   `*Date:* ${formData.date}%0A` +
                   `*Message:* ${formData.message}`;
    
    // Create WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/919944471130?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    alert('Redirecting to WhatsApp to complete your booking...');
    
    // Clear the form
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
    "Haircuts & Styling",
    "Hair Spa & Treatments",
    "Hair Colouring",
    "Facials & Skin Treatments",
    "Body Spa & Massages",
    "Waxing",
    "Nail Care",
    "Bridal & Groom Packages"
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
      <Helmet>
        <title>Contact Us - Vogue360 Salon | Book Your Appointment</title>
        <meta name="description" content="Contact Vogue360 Salon in Coimbatore for premium hair and beauty services. Book your appointment online or visit us at our location in Kavundampalayam." />
        <meta name="keywords" content="Vogue360, contact us, book appointment, salon Coimbatore, hair salon, beauty salon, Kavundampalayam, phone number, email" />
        <meta property="og:title" content="Contact Us - Vogue360 Salon | Book Your Appointment" />
        <meta property="og:description" content="Contact Vogue360 Salon in Coimbatore for premium hair and beauty services. Book your appointment online or visit us at our location in Kavundampalayam." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vogue360.com/contact" />
        <meta property="og:image" content="/src/assets/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - Vogue360 Salon" />
        <meta name="twitter:description" content="Contact Vogue360 Salon in Coimbatore for premium hair and beauty services. Book your appointment online or visit us at our location in Kavundampalayam." />
        <meta name="twitter:image" content="/src/assets/logo.jpg" />
        <link rel="canonical" href="https://www.vogue360.com/contact" />
      </Helmet>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.948439603383!2d76.9482623!3d11.0424927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858913e807617%3A0xcbb4b5fa5aaa0d60!2sWINNERS%20%26%20SHIVALAYA%20COMPLEX!5e0!3m2!1sen!2sin!4v1756535861648!5m2!1sen!2sin" 
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
                <textarea
                  name="message"
                  placeholder="Additional Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-large">BOOK Now</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;