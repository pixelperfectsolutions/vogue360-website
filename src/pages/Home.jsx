import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = () => {
  const sectionRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderContent = [
    {
      image: "/pages/slider1.png",
      title: "Luxury Beyond the Mirror",
      subtitle: "VOGUE 360 – Because You Deserve the Best",
      cta: "Call Now",
      ctaLink: "https://wa.me/919944471130"
    },
    {
      image: "/pages/slider2.png",
      title: "From Classic to Contemporary",
      subtitle: "Flawless Hair, Radiant Skin, and Pure Relaxation Await",
      cta: "Our Services",
      ctaLink: "/services"
    },
    {
      image: "/pages/slider3.png",
      title: "Redefining Elegance, One Style at a Time",
      subtitle: "Step into the World of Premium Beauty & Care",
      cta: "View Gallery",
      ctaLink: "/gallery"
    },
    {
      image: "/pages/slider4.png",
      title: "Unveil Your True Beauty",
      subtitle: "Luxury Hair & Skin Experiences Tailored Just for You",
      cta: "Contact Us",
      ctaLink: "/contact"
    }
  ];

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderContent.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [sliderContent.length]);

  const services = [
    {
      icon: "💇‍♀️",
      title: "Hair Care",
      description: "Advanced haircuts, highlights, global hair color, straightening & volumizing."
    },
    {
      icon: "💆‍♀️",
      title: "Hair Treatments",
      description: "Keratin, Hair Botox, Botoliss, Anti-Dandruff & Hair-loss solutions."
    },
    {
      icon: "🌟",
      title: "Skin & Facials",
      description: "CV Pro, Lotus, Seasoul, Derma & Korean facials for every skin type."
    },
    {
      icon: "💄",
      title: "Beauty Essentials",
      description: "Hydra facial, threading, de-tan, party & advanced makeup, waxing."
    },
    {
      icon: "💅",
      title: "Nail Services",
      description: "Manicure, pedicure, nail art, extensions, gel polish, heel peel."
    },
    {
      icon: "🌿",
      title: "Targeted Skin Care",
      description: "Pigmentation, acne care, under-eye therapy & sensitive skin solutions."
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
      <Helmet>
        <title>Vogue360 Salon - Premium Hair & Beauty Services in Coimbatore</title>
        <meta name="description" content="Experience luxury beauty treatments at Vogue360 Salon in Coimbatore. Expert stylists, premium products, and personalized services for hair, skin, and nails." />
        <meta name="keywords" content="Vogue360, salon, hair salon, beauty salon, Coimbatore, haircuts, styling, facials, skin care, makeup, nail services" />
        <meta property="og:title" content="Vogue360 Salon - Premium Hair & Beauty Services in Coimbatore" />
        <meta property="og:description" content="Experience luxury beauty treatments at Vogue360 Salon in Coimbatore. Expert stylists, premium products, and personalized services for hair, skin, and nails." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vogue360.com" />
        <meta property="og:image" content="/src/assets/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vogue360 Salon - Premium Hair & Beauty Services" />
        <meta name="twitter:description" content="Experience luxury beauty treatments at Vogue360 Salon in Coimbatore. Expert stylists, premium products, and personalized services for hair, skin, and nails." />
        <meta name="twitter:image" content="/src/assets/logo.jpg" />
        <link rel="canonical" href="https://www.vogue360.com" />
      </Helmet>
      {/* Hero Section with Slider */}
      <section className="hero">
        <div className="hero-slider">
          {/* Slider images */}
          {sliderContent.map((slide, index) => (
            <div 
              key={index} 
              className={`slider-item ${index === currentSlide ? 'active' : ''}`}
            >
              <img 
                src={slide.image} 
                alt={`Vouge360 Salon ${index + 1}`} 
                className="slider-image" 
              />
              <div className="slider-overlay"></div>
              
              {/* Content for this slide */}
              <div className="slider-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <div className="slider-buttons">
                  {slide.ctaLink.startsWith('http') ? (
                    <a href={slide.ctaLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">{slide.cta}</a>
                  ) : (
                    <Link to={slide.ctaLink} className="btn btn-primary">{slide.cta}</Link>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Slider indicators */}
          <div className="slider-indicators">
            {sliderContent.map((_, index) => (
              <div 
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
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
                  <span className="emoji-icon">{service.icon}</span>
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
              <img src="/pages/home page.png" alt="Elegant salon interior" className="about-img" />
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
          <p>Call us today and experience the Vouge360 difference</p>
          <a href="https://wa.me/919944471130" className="btn btn-large" target="_blank" rel="noopener noreferrer">Call Now</a>
        </motion.div>
      </div>
    </section>
  </div>
);
}

export default Home;