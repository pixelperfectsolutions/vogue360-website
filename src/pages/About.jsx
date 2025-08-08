import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './About.css';
import aboutImage from '../assets/images/about page.avif';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Master Stylist",
      experience: "12 years"
    },
    {
      name: "Sophia Chen",
      role: "Color Specialist",
      experience: "10 years"
    },
    {
      name: "James Wilson",
      role: "Beard Grooming Expert",
      experience: "8 years"
    },
    {
      name: "Emma Thompson",
      role: "Spa Director",
      experience: "15 years"
    }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We strive for perfection in every service, using only premium products and techniques."
    },
    {
      title: "Innovation",
      description: "Staying ahead of trends with continuous learning and cutting-edge styling methods."
    },
    {
      title: "Personalization",
      description: "Every client receives a customized experience tailored to their unique needs."
    },
    {
      title: "Integrity",
      description: "Honest, transparent service with your best interests at the heart of everything we do."
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
    <div className="about-page page-container">
      <Helmet>
        <title>About Us - Vogue360 Salon | Premium Hair & Beauty Services</title>
        <meta name="description" content="Learn about Vogue360 Salon in Coimbatore, our story, values, and commitment to providing premium hair and beauty services with expert stylists." />
        <meta name="keywords" content="Vogue360, about us, salon story, beauty salon, Coimbatore, hair salon, our values, expert stylists" />
        <meta property="og:title" content="About Us - Vogue360 Salon | Premium Hair & Beauty Services" />
        <meta property="og:description" content="Learn about Vogue360 Salon in Coimbatore, our story, values, and commitment to providing premium hair and beauty services with expert stylists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vogue360.com/about" />
        <meta property="og:image" content="/src/assets/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Vogue360 Salon" />
        <meta name="twitter:description" content="Learn about Vogue360 Salon in Coimbatore, our story, values, and commitment to providing premium hair and beauty services with expert stylists." />
        <meta name="twitter:image" content="/src/assets/logo.jpg" />
        <link rel="canonical" href="https://www.vogue360.com/about" />
      </Helmet>
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="about-hero"
        >
          <motion.h1
            variants={fadeInUp}
          >
            About Vouge360
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="hero-subtitle"
          >
            Where luxury meets artistry in the world of hair and beauty
          </motion.p>
        </motion.div>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-text"
            >
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Vouge360 began with a simple vision: to create a sanctuary where 
                artistry and luxury converge to transform not just appearances, but confidence and 
                self-expression.
              </p>
              <p>
                What started as a single salon in Mumbai has evolved into a premier destination 
                for discerning clients seeking exceptional hair and beauty services. Our team of 
                internationally trained stylists brings together diverse influences and techniques 
                to create looks that are both timeless and contemporary.
              </p>
              <p>
                Today, Vouge360 stands as a beacon of excellence in the beauty industry, 
                maintaining our commitment to personalized service, premium products, and 
                cutting-edge techniques that ensure every client leaves feeling transformed.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="story-image"
            >
              <img src={aboutImage} alt="Salon history and journey" className="story-img" />
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
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
              Our Core Values
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="section-subtitle"
            >
              The principles that guide everything we do
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="values-grid"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="value-card"
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Team Section - Commented out as requested */}
      </div>
    </div>
  );
};

export default About;