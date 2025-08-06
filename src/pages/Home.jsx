import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpeg';
import slider4 from '../assets/slider4.avif';

const Home = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderImages = [slider1, slider2, slider3, slider4];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const services = [
    {
      title: "Hair Cutting",
      description: "Precision cuts tailored to your face shape and style preferences."
    },
    {
      title: "Hair Coloring",
      description: "Professional coloring services with premium products for vibrant results."
    },
    {
      title: "Beard Grooming",
      description: "Expert beard shaping and styling for the modern gentleman."
    },
    {
      title: "Spa Treatments",
      description: "Luxurious treatments to rejuvenate your skin and senses."
    }
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
    <div className="home">
      {/* Hero Section with Slider */}
      <section className="hero">
        <div className="hero-slider">
          <div className="slider-container">
            {sliderImages.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Vouge360 Salon ${index + 1}`} 
                className={`slider-image ${index === currentSlide ? 'active' : ''}`} 
              />
            ))}
          </div>
          <div className="hero-content">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experience Luxury <br />Transformation at <span>Vouge360</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where artistry meets precision. Our expert stylists create personalized looks that enhance your natural beauty.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-buttons"
            >
              <Link to="/services" className="btn btn-primary">Our Services</Link>
              <a href="https://wa.me/919944471130" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Book Appointment</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section page-container">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="section-title"
          >
            <motion.h2
              variants={fadeInUp}
            >
              Our Premium Services
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="section-subtitle"
            >
              Experience the art of transformation with our expert stylists
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="services-grid"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="service-card"
              >
                <div className="service-icon">
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-text"
            >
              <h2>The Vouge360 Experience</h2>
              <p>
                At Vouge360, we believe that true beauty comes from confidence and self-expression. 
                Our team of internationally trained stylists combines cutting-edge techniques with 
                personalized attention to create looks that are uniquely you.
              </p>
              <p>
                With state-of-the-art facilities and premium products, we offer an unparalleled 
                luxury experience that goes beyond just a haircut – it's a complete transformation.
              </p>
              <Link to="/about" className="btn">Learn More About Us</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about-image"
            >
              <div className="image-placeholder"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Ready for Your Transformation?</h2>
            <p>Book your appointment today and experience the Vouge360 difference</p>
            <a href="https://wa.me/919944471130" className="btn btn-large" target="_blank" rel="noopener noreferrer">Book Now</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;