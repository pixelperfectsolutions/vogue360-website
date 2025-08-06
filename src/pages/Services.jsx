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

  const topServices = [
    { title: 'Hair Care', icon: '💇‍♀️', desc: 'Advanced haircuts, highlights, global hair color, straightening & volumizing.' },
    { title: 'Hair Treatments', icon: '💆‍♀️', desc: 'Keratin, Hair Botox, Botoliss, Anti-Dandruff & Hair-loss solutions.' },
    { title: 'Skin & Facials', icon: '🌟', desc: 'CV Pro, Lotus, Seasoul, Derma & Korean facials for every skin type.' },
    { title: 'Beauty Essentials', icon: '💄', desc: 'Hydra facial, threading, de-tan, party & advanced makeup, waxing.' },
    { title: 'Nail Services', icon: '💅', desc: 'Manicure, pedicure, nail art, extensions, gel polish, heel peel.' },
    { title: 'Targeted Skin Care', icon: '🌿', desc: 'Pigmentation, acne care, under-eye therapy & sensitive skin solutions.' }
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
        {/* Top Services Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="top-services mb-5"
        >
          <motion.h1 variants={fadeInUp} className="section-title text-center mb-3">
            Our Services
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-center mb-4">
            Welcome to <b>VOGUE 360</b> – where beauty meets wellness.<br/>
            Explore our all-in-one destination for hair, beauty, skin, nails and rejuvenation treatments designed to bring out your best self.
          </motion.p>

          <div className="services-grid">
            {topServices.map((svc, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="service-card"
              >
                <div className="service-icon" style={{ fontSize: 48 }}>
                  {svc.icon}
                </div>
                <h3>{svc.title}</h3>
                <p style={{ minHeight: 60 }}>{svc.desc}</p>
                <a href="tel:+919944471130" className="btn btn-primary w-100 mt-auto">CALL NOW</a>
              </motion.div>
            ))}
          </div>
        </motion.div>
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

        <div className="services-list">
          {services.map((service, index) => (
  <motion.div
    key={index}
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className="service-card"
  >
    <div className="service-icon">
      <span>{index + 1}</span>
    </div>
    <h3>{service.category}</h3>
    <div className="service-items">
      {service.items.map((item, itemIndex) => (
        <div className="service-item" key={itemIndex}>
          <div className="service-info">
            <h4>{item.name}</h4>
            <span className="duration">{item.duration}</span>
          </div>
          <div className="service-price">{item.price}</div>
        </div>
      ))}
    </div>
    <a href="tel:+919944471130" className="btn btn-primary w-100 mt-auto">CALL NOW</a>
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
            <a href="https://wa.me/919944471130" className="btn btn-large" target="_blank" rel="noopener noreferrer">Book Appointment</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;