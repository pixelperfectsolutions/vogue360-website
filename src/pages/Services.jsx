import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState('All Services');
  
  const serviceCategories = [
    'All Services',
    'Haircare',
    'Haircuts & Styling',
    'Hair Spa & Treatments',
    'Hair Colouring',
    'Skincare',
    'Facials & Skin Treatments',
    'Body Spa & Massages',
    'Waxing',
    'Nail Care',
    'Bridal & Groom Packages'
  ];
  
  // Banner content for the services page
  const serviceBanner = {
    title: "Our Services",
    subtitle: (
      <p>Welcome to VOGUE 360 – where beauty meets wellness. Explore our all-in-one destination for hair, beauty, skin, nails and rejuvenation treatments designed to bring out your best self.</p>
    ),
    imageDescription: "Elegant salon services banner showing premium treatments"
  };

  const servicesList = [
    {
      id: 1,
      title: 'Wella',
      desc: 'With over a century of expertise, Wella is synonymous with salon innovation. Known for advanced color science and precision haircare, Wella delivers products that blend creativity with performance, helping you achieve salon- perfect results every day.',
      category: 'Haircare',
      icon: '✨',
      price: 'Price on request'
    },
    {
      id: 2,
      title: 'System Professional',
      desc: 'Driven by science and personalization, System Professional designs haircare treatments that are as unique as your hair’s energy code. Their formulas work on a molecular level to restore balance, strength, and vitality for truly customized results.',
      category: 'Haircare',
      icon: '🔬',
      price: 'Price on request'
    },
    {
      id: 3,
      title: 'Beauty Garage Professional SHEA',
      desc: 'Enriched with the nourishing power of shea butter, Beauty Garage Professional Shea products deeply hydrate and repair hair. Designed for salon use, they smooth frizz, restore softness, and leave hair with a healthy, natural shine.',
      category: 'Haircare',
      icon: '🧴',
      price: 'Price on request'
    },
    {
      id: 4,
      title: 'Sebastian Professional',
      desc: 'Bold, edgy, and artistic — Sebastian Professional inspires limitless styling possibilities. From high performance care to iconic styling products, it’s the go-to for hair that makes a statement.',
      category: 'Haircare',
      icon: '🎨',
      price: 'Price on request'
    },
    {
      id: 5,
      title: 'D Fabulous',
      desc: 'D Fabulous merges salon technology with luxury ingredients to deliver transformative hair results. Whether it’s taming unruly textures or adding luminous shine, the range promises a sleek, polished finish every time.',
      category: 'Haircare',
      icon: '💎',
      price: 'Price on request'
    },
    {
      id: 6,
      title: 'Amazon Series',
      desc: 'Harnessing the rich botanical treasures of the Amazon rainforest, Amazon Series infuses hair with nutrient-dense ingredients. Every formula works to strengthen, protect, and revitalize for naturally beautiful hair.',
      category: 'Haircare',
      icon: '🌿',
      price: 'Price on request'
    },
    {
      id: 7,
      title: 'Olaplex',
      desc: 'Olaplex revolutionized hair repair with its patented bond-building technology. Scientifically proven to rebuild broken hair bonds, it restores strength, structure, and integrity — making damaged hair feel like new.',
      category: 'Haircare',
      icon: '🔗',
      price: 'Price on request'
    },
    {
      id: 8,
      title: 'LOTUS PROFESSIONAL',
      desc: 'At Lotus Professional, we believe in harnessing nature’s best ingredients with the latest in skincare science. Each product is formulated for effectiveness while ensuring the highest standards of skin safety and wellness.',
      category: 'Skincare',
      icon: '🌸',
      price: 'Price on request'
    },
    {
      id: 9,
      title: 'JEANNOT',
      desc: 'Jeannot Ceuticals delivers high-performance skincare inspired by professional spa expertise. Its advanced formulations address multiple skin concerns, offering visible results and luxurious textures.',
      category: 'Skincare',
      icon: '✨',
      price: 'Price on request'
    },
    {
      id: 10,
      title: 'SEA SOUL',
      desc: 'Sea Soul draws its power from the ocean, using marine actives and minerals to rejuvenate, hydrate, and protect. Each treatment channels the restorative properties of the sea for a naturally radiant complexion.',
      category: 'Skincare',
      icon: '🌊',
      price: 'Price on request'
    },
    {
      id: 11,
      title: 'SKINDORA',
      desc: 'Skindora focuses on clean, effective skincare rooted in innovation. With formulations that balance nature and science, it offers targeted solutions for healthier, glowing skin.',
      category: 'Skincare',
      icon: '🍃',
      price: 'Price on request'
    },
    {
      id: 12,
      title: 'DERMALOGICA',
      desc: 'Trusted by skincare professionals worldwide, Dermalogica is dedicated to delivering custom solutions for every skin type. Backed by education and research, it ensures healthy skin without compromise.',
      category: 'Skincare',
      icon: '🔬',
      price: 'Price on request'
    },
    {
      id: 13,
      title: 'CHRISTIAN VALMY',
      desc: 'Christian Valmy blends European skincare artistry with advanced science. Its treatments prioritize skin health, offering nourishment, hydration, and long-lasting beauty benefits.',
      category: 'Skincare',
      icon: '🇪🇺',
      price: 'Price on request'
    },
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

  // Filter services based on active category
  const filteredServices = activeCategory === 'All Services' 
    ? servicesList 
    : servicesList.filter(service => service.category === activeCategory);

  return (
    <div className="services-page page-container">
      <Helmet>
        <title>Our Services - Vogue360 Salon | Premium Hair & Beauty Treatments</title>
        <meta name="description" content="Discover our premium hair, skin, and beauty services at Vogue360 Salon in Coimbatore. From haircuts to facials, we offer luxury treatments with expert stylists." />
        <meta name="keywords" content="Vogue360 services, hair services, beauty treatments, skin care, facials, haircuts, styling, makeup, nail services, Coimbatore salon" />
        <meta property="og:title" content="Our Services - Vogue360 Salon | Premium Hair & Beauty Treatments" />
        <meta property="og:description" content="Discover our premium hair, skin, and beauty services at Vogue360 Salon in Coimbatore. From haircuts to facials, we offer luxury treatments with expert stylists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vogue360.com/services" />
        <meta property="og:image" content="/src/assets/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services - Vogue360 Salon" />
        <meta name="twitter:description" content="Discover our premium hair, skin, and beauty services at Vogue360 Salon in Coimbatore. From haircuts to facials, we offer luxury treatments with expert stylists." />
        <meta name="twitter:image" content="/src/assets/logo.jpg" />
        <link rel="canonical" href="https://www.vogue360.com/services" />
      </Helmet>
      {/* Services Banner Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="services-banner"
        style={{
          backgroundImage: `url('/pages/services page.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="banner-overlay"></div>
        <motion.div
          variants={fadeInUp}
          className="banner-content"
        >
          <h1>{serviceBanner.title}</h1>
          <div>{serviceBanner.subtitle}</div>
        </motion.div>
      </motion.div>
      {/* Top Services Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="services-header"
      >
        <motion.div variants={fadeInUp} className="services-header-content">
          <motion.h1 variants={fadeInUp} className="section-title">
            Featured Services
          </motion.h1>
          
          {/* Featured Services - Removed as per user request */}
          <motion.p variants={fadeInUp}>
            Discover our most popular treatments and services
          </motion.p>
        </motion.div>
      </motion.div>
      {/* Service Categories */}
      <div className="service-categories">
          {serviceCategories.map((category, index) => (
            <button 
              key={index} 
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Card Grid */}
        <div className="services-list">
          {filteredServices.map(service => (
            <motion.div
              key={service.id}
              className="service-card"
              variants={fadeInUp}
              whileHover={{ scale: 1.04 }}
            >
              <div className="service-icon">{service.icon}</div>
              <div className="service-badge">{service.category}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
              <a href="https://wa.me/919944471130" target="_blank" rel="noopener noreferrer" className="call-now-btn">Book Now</a>
            </motion.div>
          ))}
        </div>

        {/* Price List Section */}
      <motion.div
          initial="visible"
          animate="visible"
          variants={staggerContainer}
          className="price-list-section"
          style={{ marginTop: '80px', padding: '40px', backgroundColor: '#1c1c1e', borderRadius: '20px', boxShadow: '0 4px 20px rgba(255,255,255,0.05)' }}
        >
          <motion.h2 variants={fadeInUp}>Price List</motion.h2>
          
          {/* Price categories removed as per user request */}

          <motion.div variants={fadeInUp}>
            <h3 className="price-category-title">Haircuts &
            Styling</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Top Stylist</div>
                <div className="price-item-value">₹650</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Creative Director</div>
                <div className="price-item-value">₹1300</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Beard Trim</div>
                <div className="price-item-value">₹180</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Kids Cut</div>
                <div className="price-item-value">₹295</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Top Stylist</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Creative Director</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Wash & Blast Dry</div>
                <div className="price-item-value">₹1000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Straight Blow Dry</div>
                <div className="price-item-value">₹1000 </div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Wash & Styling</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ironing</div>
                <div className="price-item-value">₹1500 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Tongs</div>
                <div className="price-item-value">₹1500 (onwards)</div>
              </div>
            </div>

            <h3 className="price-category-title">Hair Spa &
            Treatments</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Smoothening</div>
                <div className="price-item-value">₹4999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Straightening</div>
                <div className="price-item-value">₹3999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Botox</div>
                <div className="price-item-value">₹6999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Keratin</div>
                <div className="price-item-value">₹5999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Systein</div>
                <div className="price-item-value">₹8999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Nanoblast</div>
                <div className="price-item-value">₹10999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Kera Blast</div>
                <div className="price-item-value">₹12999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Deep Nourishing</div>
                <div className="price-item-value">₹2000 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Express Alchemy</div>
                <div className="price-item-value">₹2500 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Intense Alchemy</div>
                <div className="price-item-value">₹2800 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Dandruff Treatment</div>
                <div className="price-item-value">₹2000 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Anti-Hairfall Treatment</div>
                <div className="price-item-value">₹3500 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Butter Hair Spa</div>
                <div className="price-item-value">₹4500 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Wellaplex</div>
                <div className="price-item-value">₹3000 (onwards)</div>
              </div>
            </div>

            <h3 className="price-category-title">Hair Colouring</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Root Touch Up</div>
                <div className="price-item-value">₹1000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Global</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Root Touch Up</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Streaks</div>
                <div className="price-item-value">₹450 per streak</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Global</div>
                <div className="price-item-value">₹4000 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Fashion Highlights</div>
                <div className="price-item-value">₹3999 (onwards)</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Advanced Hair Colouring</div>
                <div className="price-item-value">₹6999 (onwards)</div>
              </div>
            </div>

            <h3 className="price-category-title">Facials & Skin Treatments</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Basic Facial</div>
                <div className="price-item-value">₹2499</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Aroma Lightening Facial</div>
                <div className="price-item-value">₹3500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Gold Facial</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Diamond Facial</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Fruit Blast</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Mineral Facial</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Skin Brightening</div>
                <div className="price-item-value">₹5500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Gold Moroccan</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Derma Ice Facial</div>
                <div className="price-item-value">₹7000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Advanced Tan Removal</div>
                <div className="price-item-value">₹4500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Anti-Ageing Facial</div>
                <div className="price-item-value">₹5000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Anti-Ageing Advanced</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Acne Control Facial</div>
                <div className="price-item-value">₹6500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Korean Glassy Skin Facial</div>
                <div className="price-item-value">₹8000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Red Carpet DNA Facial</div>
                <div className="price-item-value">₹8500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Bridal Glow Facial</div>
                <div className="price-item-value">₹9000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Face & Neck</div>
                <div className="price-item-value">₹1300</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Arms</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Half Back</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Back</div>
                <div className="price-item-value">₹4000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Feet</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Body Detan</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Under Eye Treatment</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Vita-C Glow Mask</div>
                <div className="price-item-value">₹2000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Dead Sea Mud Mask</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Deep Hydration Mask</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Anti-Ageing Mask</div>
                <div className="price-item-value">₹3000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Clean Up</div>
                <div className="price-item-value">₹1799</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Clean Up Ritual</div>
                <div className="price-item-value">₹1899</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Brazilian Clean Up</div>
                <div className="price-item-value">₹2499</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ageing Clean Up</div>
                <div className="price-item-value">₹2599</div>
              </div>
            </div>

            <h3 className="price-category-title">Body Spa & Massages</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Basic Body Spa</div>
                <div className="price-item-value">₹4999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Deep Tissue Massage</div>
                <div className="price-item-value">₹6999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Aroma Therapy</div>
                <div className="price-item-value">₹8999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Thai Massage</div>
                <div className="price-item-value">₹9999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Steam Massage</div>
                <div className="price-item-value">₹10999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Potli Massage</div>
                <div className="price-item-value">₹12999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hot Stone Massage with Swedish</div>
                <div className="price-item-value">₹14999</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Head Massage</div>
                <div className="price-item-value">₹1000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Foot Massage</div>
                <div className="price-item-value">₹1500</div>
              </div>
            </div>

            <h3 className="price-category-title">Waxing</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Underarms</div>
                <div className="price-item-value">₹295</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Half Arms</div>
                <div className="price-item-value">₹750</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Arms</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Half Legs</div>
                <div className="price-item-value">₹850</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Legs</div>
                <div className="price-item-value">₹1700</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Full Body</div>
                <div className="price-item-value">₹5000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Brazilian</div>
                <div className="price-item-value">₹499</div>
              </div>
            </div>

            <h3 className="price-category-title">Nail Care</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Basic</div>
                <div className="price-item-value">₹500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">AVL Express</div>
                <div className="price-item-value">₹800</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Chakra</div>
                <div className="price-item-value">₹900</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Chocolate Mint</div>
                <div className="price-item-value">₹1000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Strawberry</div>
                <div className="price-item-value">₹1100</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ice Cream</div>
                <div className="price-item-value">₹2600</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Candle Spa</div>
                <div className="price-item-value">₹2500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Basic</div>
                <div className="price-item-value">₹800</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">AVL Express</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Chakra</div>
                <div className="price-item-value">₹1800</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Chocolate Mint</div>
                <div className="price-item-value">₹2000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Strawberry</div>
                <div className="price-item-value">₹2100</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ice Cream</div>
                <div className="price-item-value">₹3500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Candle Spa</div>
                <div className="price-item-value">₹4000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Heel Peel Treatment</div>
                <div className="price-item-value">₹3500</div>
              </div>
            </div>

            <h3 className="price-category-title">Bridal & Groom Packages</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Pre-BridalGroom Package</div>
                <div className="price-item-value">₹8000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Pre-Bridegroom Package</div>
                <div className="price-item-value">₹12000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Pre-Bridal Package</div>
                <div className="price-item-value">₹10000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Saree Draping</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hair & Makeup</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Men’s Styling</div>
                <div className="price-item-value">₹500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Simple Hairdo</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Advanced Hairdo</div>
                <div className="price-item-value">₹3500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Eye Makeup</div>
                <div className="price-item-value">₹1500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Mini Makeup</div>
                <div className="price-item-value">₹3500</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Simple Makeup</div>
                <div className="price-item-value">₹5000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hair & Makeup</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Elegant Bride</div>
                <div className="price-item-value">₹9000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Gorgeous Bride</div>
                <div className="price-item-value">₹12000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">High Definition</div>
                <div className="price-item-value">₹18000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Airbrush</div>
                <div className="price-item-value">₹30000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Normal</div>
                <div className="price-item-value">₹6000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">High Definition</div>
                <div className="price-item-value">₹7000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Airbrush</div>
                <div className="price-item-value">₹10000</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Within City</div>
                <div className="price-item-value">₹2000</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <div className="container cta-section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
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