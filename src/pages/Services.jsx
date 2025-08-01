import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      category: "Hair Services",
      items: [
        { name: "Precision Haircut", price: "₹1,500+", duration: "45 mins" },
        { name: "Hair Coloring", price: "₹3,000+", duration: "2 hrs" },
        { name: "Highlights", price: "₹3,500+", duration: "2.5 hrs" },
        { name: "Blowout & Styling", price: "₹2,000+", duration: "1 hr" },
        { name: "Hair Treatment", price: "₹2,500+", duration: "1.5 hrs" }
      ]
    },
    {
      category: "Beard & Face",
      items: [
        { name: "Classic Beard Trim", price: "₹800+", duration: "30 mins" },
        { name: "Beard Shaping", price: "₹1,200+", duration: "45 mins" },
        { name: "Hot Towel Shave", price: "₹1,500+", duration: "1 hr" },
        { name: "Facial Treatment", price: "₹2,500+", duration: "1.5 hrs" },
        { name: "Eyebrow Shaping", price: "₹500+", duration: "20 mins" }
      ]
    },
    {
      category: "Spa & Wellness",
      items: [
        { name: "Head Massage", price: "₹1,000+", duration: "45 mins" },
        { name: "Aromatherapy Treatment", price: "₹2,000+", duration: "1 hr" },
        { name: "Hot Stone Therapy", price: "₹2,500+", duration: "1.5 hrs" },
        { name: "Detoxifying Body Wrap", price: "₹3,000+", duration: "2 hrs" }
      ]
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="services-page page-container">
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
            Our Premium Services
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-subtitle"
          >
            Experience luxury and transformation with our expertly crafted services
          </motion.p>
        </motion.div>

        <div className="services-content">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className="service-category"
            >
              <motion.h2
                variants={fadeInUp}
                className="category-title"
              >
                {service.category}
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="service-items"
              >
                {service.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    variants={fadeInUp}
                    whileHover={{ x: 10 }}
                    className="service-item"
                  >
                    <div className="service-info">
                      <h3>{item.name}</h3>
                      <p className="duration">{item.duration}</p>
                    </div>
                    <div className="service-price">
                      {item.price}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="booking-cta"
        >
          <motion.h2
            variants={fadeInUp}
          >
            Ready for Your Transformation?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
          >
            Book your appointment today and experience the Vouge360 difference
          </motion.p>
          <motion.div
            variants={fadeInUp}
          >
            <Link to="/contact" className="btn btn-large">Book Appointment</Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;