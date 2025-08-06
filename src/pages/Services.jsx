import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState('All Services');
  
  const serviceCategories = [
    'All Services',
    'Hair Care',
    'Beauty',
    'Spa',
    'Nails',
    'Treatments',
    'Seasoul Facials',
    'Lotus Facials',
    'CV Pro Facials',
    'Derma Facials'
  ];
  
  const servicesList = [
    {
      id: 1,
      title: 'Advanced Hair Cut',
      desc: 'Our advanced haircuts tailor to your unique style and face shape, reflecting the latest trends for women, men, and children, with expert recommendations',
      category: 'Hair Care',
      icon: '✂️',
      price: '₹800 - ₹1500'
    },
    {
      id: 2,
      title: 'Highlights',
      desc: 'Illuminate your locks with stunning highlights at VOGUE 360, adding dimension and depth to your hair for a radiant and dynamic look.',
      category: 'Hair Care',
      icon: '✨',
      price: '₹3000 - ₹5000'
    },
    {
      id: 3,
      title: 'Global Color',
      desc: 'Transform your entire look with a stunning global color treatment, where our expert colorists blend hues to perfection for a seamless and radiant finish.',
      category: 'Hair Care',
      icon: '🎨',
      price: '₹2500 - ₹4000'
    },
    { 
      id: 4,
      icon: '🌟', 
      title: 'Hair Spa (Wella Plex)', 
      desc: 'Indulge in the ultimate pampering experience with our luxurious Hair Spa or Advanced Spa treatments, including the renowned Wella Plex.', 
      category: 'Hair Care',
      price: '₹1800 - ₹3000'
    },
    { 
      id: 5,
      icon: '🧵', 
      title: 'Threading / Detan', 
      desc: 'Experience precision threading and rejuvenating detan treatments for perfectly shaped brows and glowing skin.', 
      category: 'Beauty',
      price: '₹200 - ₹500'
    },
    { 
      id: 6,
      icon: '💧', 
      title: 'Hydra Facial', 
      desc: 'Experience the ultimate hydration and rejuvenation with our HydraFacial treatment.', 
      category: 'Beauty',
      price: '₹2500 - ₹3500'
    },
    { 
      id: 7,
      icon: '✨', 
      title: 'Hydrafacial Treatment', 
      desc: 'Discover radiant skin with our HydraFacial treatments – a revolutionary skincare solution for a refreshed, rejuvenated complexion.', 
      category: 'Treatments',
      price: '₹3000 - ₹4500'
    },
    { 
      id: 8,
      icon: '⭐', 
      title: 'Specialized Treatment', 
      desc: 'Experience specialized treatments for skin and hair concerns: pigmentation, acne, anti-dandruff, and hair loss solutions.', 
      category: 'Beauty',
      price: '₹1500 - ₹3000'
    },
    { 
      id: 9,
      icon: '💄', 
      title: 'Party Makeup / Advanced Makeup', 
      desc: 'Elevate your look with our Party Makeup or Advanced Makeup services.', 
      category: 'Beauty',
      price: '₹2500 - ₹5000'
    },
    { 
      id: 10,
      icon: '🌸', 
      title: 'Waxing', 
      desc: 'Achieve silky-smooth skin with our professional waxing services.', 
      category: 'Beauty',
      price: '₹300 - ₹1200'
    },
    { 
      id: 11,
      icon: '💅', 
      title: 'Pedicure / Manicure', 
      desc: 'Indulge in perfection with our Pedicure and Manicure services or refresh with our Ice Cream Pedicure.', 
      category: 'Nails',
      price: '₹800 - ₹1500'
    },
    { 
      id: 12,
      icon: '✨', 
      title: 'Hand Polish / Feet Polish', 
      desc: 'Get perfectly polished hands and feet with our expert nail technicians\' professional services.', 
      category: 'Nails',
      price: '₹400 - ₹700'
    },
    { 
      id: 13,
      icon: '👣', 
      title: 'Heel Peel Treatment', 
      desc: 'Experience ultimate foot care with our Heel Peel Treatment, gently exfoliating and softening rough heels for healthier-looking feet.', 
      category: 'Nails',
      price: '₹800 - ₹1200'
    },
    { 
      id: 14,
      icon: '🎨', 
      title: 'Nail Art', 
      desc: 'Express your unique style with our Nail Art services where our talented technicians create stunning designs to adorn your nails.', 
      category: 'Nails',
      price: '₹500 - ₹1500'
    },
    { 
      id: 15,
      icon: '💅', 
      title: 'Nail Extension', 
      desc: 'Transform your nails with our Nail Extension services, adding length and strength for a glamorous and polished look.', 
      category: 'Nails',
      price: '₹1500 - ₹2500'
    },
    { 
      id: 16,
      icon: '💅', 
      title: 'Gel Polish', 
      desc: 'Achieve long-lasting color and shine with our Gel Polish services, providing durable and flawless results for your nails.', 
      category: 'Nails',
      price: '₹800 - ₹1200'
    },
    { 
      id: 17,
      icon: '❄️', 
      title: 'Anti-Dandruff Treatment', 
      desc: 'Say goodbye to flakes with our targeted dandruff treatment, restoring scalp health for smoother, flake-free hair.', 
      category: 'Hair Care',
      price: '₹1500 - ₹2500'
    },
    { 
      id: 18,
      icon: '💁‍♀️', 
      title: 'Volume Treatment', 
      desc: 'Achieve luscious locks and added volume with our volumizing hair treatments, for hair that\'s full of life and body.', 
      category: 'Hair Care',
      price: '₹2000 - ₹3000'
    },
    { 
      id: 19,
      icon: '✨', 
      title: 'Pigmentation Treatment', 
      desc: 'Restore skin\'s natural radiance and even out tone with our pigmentation treatments, unveiling a brighter complexion.', 
      category: 'Treatments',
      price: '₹2500 - ₹4000'
    },
    { 
      id: 20,
      icon: '🧴', 
      title: 'Acne Treatment', 
      desc: 'Combat acne with our specialized treatments targeting breakouts, reducing inflammation, and preventing future flare-ups.', 
      category: 'Treatments',
      price: '₹2000 - ₹3500'
    },
    { 
      id: 21,
      icon: '✨', 
      title: 'Gold Moroccan Facial', 
      desc: 'Luxury facial incorporating gold-infused Moroccan elements designed specifically for acne control and skin purification.', 
      category: 'Seasoul Facials',
      price: '₹3500 - ₹5000'
    },
    { 
      id: 22,
      icon: '🍫', 
      title: 'Chocolate Mint Facial', 
      desc: 'Indulgent chocolate and mint infusion facial specially formulated for advanced tan removal and skin brightening.', 
      category: 'Seasoul Facials',
      price: '₹3000 - ₹4500'
    },
    { 
      id: 23,
      icon: '🌊', 
      title: 'Hydra Boost Facial', 
      desc: 'Intensive hydration facial that deeply moisturizes and revitalizes dehydrated skin for a plumper, more radiant appearance.', 
      category: 'Seasoul Facials',
      price: '₹3200 - ₹4800'
    },
    { 
      id: 24,
      icon: '🌟', 
      title: 'Ultimo Pearl Facial', 
      desc: 'Premium pearl-infused facial that effectively detoxifies skin and regulates discoloration for a more even-toned, luminous appearance.', 
      category: 'Lotus Facials',
      price: '₹4000 - ₹6000'
    },
    { 
      id: 25,
      icon: '🌓', 
      title: 'Dipegmentone Facial', 
      desc: 'Advanced skin brightening facial specially formulated to lighten and even out skin tone, addressing pigmentation concerns.', 
      category: 'Lotus Facials',
      price: '₹3500 - ₹5500'
    },
    { 
      id: 26,
      icon: '👔', 
      title: 'Intensive Repair Whitening Facial', 
      desc: "Men's specialized facial suitable for all skin types, improving radiance, boosting luminosity, and evening out skin tone for a healthier appearance.", 
      category: 'CV Pro Facials',
      price: '₹3800 - ₹5800'
    },
    { 
      id: 27,
      icon: '✨', 
      title: 'Signature Facial', 
      desc: 'Our premium CV Pro Signature Facial is suitable for all skin types, designed to nourish, lighten, and deeply hydrate skin for a revitalized complexion.', 
      category: 'CV Pro Facials',
      price: '₹4200 - ₹6200'
    },
    { 
      id: 28,
      icon: '⏳', 
      title: 'Anti-Aging Facial', 
      desc: 'Specialized CV Pro treatment that targets fine lines and wrinkles, promoting youthful, glowing skin with improved elasticity and firmness.', 
      category: 'CV Pro Facials',
      price: '₹4500 - ₹6500'
    },
    { 
      id: 29,
      icon: '🌟', 
      title: 'Pure Pore Facial', 
      desc: 'Targeted treatment focused on minimizing and refining open pores for smoother, more even skin texture.', 
      category: 'Seasoul Facials',
      price: '₹3000 - ₹4500'
    },
    { 
      id: 30,
      icon: '💧', 
      title: 'Pure Moist Facial', 
      desc: 'Intensive hydration facial providing deep moisturizing benefits for dehydrated skin, restoring suppleness and glow.', 
      category: 'Derma Facials',
      price: '₹2800 - ₹4200'
    },
    { 
      id: 31,
      icon: '❄️', 
      title: 'C.C. Derma Facial', 
      desc: 'Specialized ice facial designed for skin lightening and brightening, reducing pigmentation for a more even complexion.', 
      category: 'Derma Facials',
      price: '₹3200 - ₹4800'
    },
    { 
      id: 32,
      icon: '🌸', 
      title: 'Korean Facial', 
      desc: 'Advanced K-beauty inspired facial particularly suitable for fair skin, delivering a flawless, luminous glow.', 
      category: 'Derma Facials',
      price: '₹3500 - ₹5000'
    },
    { 
      id: 33,
      icon: '🌟', 
      title: 'Red Carpet Facial', 
      desc: 'Premium anti-aging facial treatment that visibly reduces fine lines and wrinkles for a red-carpet ready appearance.', 
      category: 'Lotus Facials',
      price: '₹4500 - ₹6500'
    },
    { 
      id: 34,
      icon: '✨', 
      title: '4 Layers Advanced Radiance Facial', 
      desc: 'Perfect for all skin types, this multi-layer facial significantly improves skin tone and texture for a radiant, refined complexion.', 
      category: 'Lotus Facials',
      price: '₹4000 - ₹6000'
    },
    { 
      id: 35,
      icon: '⏳', 
      title: '4 Layers Advanced Anti-Aging Facial', 
      desc: 'Specialized multi-step facial therapy designed to combat signs of aging, resulting in visibly younger-looking skin with reduced fine lines.', 
      category: 'Lotus Facials',
      price: '₹4500 - ₹6500'
    },
    { 
      id: 36,
      icon: '💠', 
      title: 'Ultimo Platinum Facial', 
      desc: 'Luxurious facial treatment infused with platinum particles that stimulates collagen production for firmer, more resilient skin.', 
      category: 'Lotus Facials',
      price: '₹5000 - ₹7000'
    },
    { 
      id: 37,
      icon: '🌟', 
      title: 'Ultimo Pearl Facial', 
      desc: 'Premium pearl-infused facial that effectively detoxifies skin and regulates discoloration for a more even-toned, luminous appearance.', 
      category: 'Lotus Facials',
      price: '₹4000 - ₹6000'
    },
    { 
      id: 38,
      icon: '🌓', 
      title: 'Dipegmentone Facial', 
      desc: 'Advanced skin brightening facial specially formulated to lighten and even out skin tone, addressing pigmentation concerns.', 
      category: 'Lotus Facials',
      price: '₹3500 - ₹5500'
    },
    { 
      id: 39,
      icon: '👔', 
      title: 'Intensive Repair Whitening Facial', 
      desc: "Men's specialized facial suitable for all skin types, improving radiance, boosting luminosity, and evening out skin tone for a healthier appearance.", 
      category: 'CV Pro Facials',
      price: '₹3800 - ₹5800'
    },
    { 
      id: 40,
      icon: '✨', 
      title: 'Signature Facial', 
      desc: 'Our premium CV Pro Signature Facial is suitable for all skin types, designed to nourish, lighten, and deeply hydrate skin for a revitalized complexion.', 
      category: 'CV Pro Facials',
      price: '₹4200 - ₹6200'
    },
    { 
      id: 41,
      icon: '⏳', 
      title: 'Anti-Aging Facial', 
      desc: 'Specialized CV Pro treatment that targets fine lines and wrinkles, promoting youthful, glowing skin with improved elasticity and firmness.', 
      category: 'CV Pro Facials',
      price: '₹4500 - ₹6500'
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
      <div className="container">
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
              Our Services
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Welcome to <b>VOGUE 360</b> – where beauty meets wellness.<br/>
              Explore our all-in-one destination for hair, beauty, skin, nails and rejuvenation treatments designed to bring out your best self.
            </motion.p>
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
          
          {/* Featured Services - Removed as per user request */}
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
            className="text-center"
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
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="service-card"
            >
              <div className="service-badge">{service.category}</div>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="tel:+919944471130" className="call-now-btn">CALL NOW</a>
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
            <h3 className="price-category-title">Hair Care</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Haircut & Blow Dry</div>
                <div className="price-item-value">₹800+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Color & Highlights</div>
                <div className="price-item-value">₹1200+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Balayage</div>
                <div className="price-item-value">₹4000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Brazilian Blowout</div>
                <div className="price-item-value">₹7000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hair Extensions</div>
                <div className="price-item-value">₹10000+</div>
              </div>
            </div>

            <h3 className="price-category-title">Beauty Services</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Makeup Application</div>
                <div className="price-item-value">₹1500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Brow Shaping</div>
                <div className="price-item-value">₹400+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Lash Extensions</div>
                <div className="price-item-value">₹2000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Facial</div>
                <div className="price-item-value">₹1200+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hydrafacial Treatment</div>
                <div className="price-item-value">₹3500+</div>
              </div>
            </div>

            <h3 className="price-category-title">Spa Services</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Swedish Massage</div>
                <div className="price-item-value">₹2500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Deep Tissue Massage</div>
                <div className="price-item-value">₹3000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hot Stone Massage</div>
                <div className="price-item-value">₹3500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Therapy</div>
                <div className="price-item-value">₹2000+</div>
              </div>
            </div>

            <h3 className="price-category-title">Nail Services</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Manicure</div>
                <div className="price-item-value">₹600+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Pedicure</div>
                <div className="price-item-value">₹800+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Gel Polish</div>
                <div className="price-item-value">₹1000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Nail Art</div>
                <div className="price-item-value">₹300+</div>
              </div>
            </div>

            <h3 className="price-category-title">Treatments</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Keratin Treatment</div>
                <div className="price-item-value">₹6000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Scalp Treatment</div>
                <div className="price-item-value">₹1500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Hair Mask</div>
                <div className="price-item-value">₹1000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Split End Treatment</div>
                <div className="price-item-value">₹1200+</div>
              </div>
            </div>

            <h3 className="price-category-title">Seasoul Facials</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Cleanup</div>
                <div className="price-item-value">₹1200+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Dead Sea Mineral Facial</div>
                <div className="price-item-value">₹2500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Gold Moroccan Facial</div>
                <div className="price-item-value">₹3000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Chocolate Mint Facial</div>
                <div className="price-item-value">₹2800+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Pure Pore Facial</div>
                <div className="price-item-value">₹2200+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Pure Moist Facial</div>
                <div className="price-item-value">₹2400+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Korean Facial</div>
                <div className="price-item-value">₹3500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Red Carpet Facial</div>
                <div className="price-item-value">₹4000+</div>
              </div>
            </div>

            <h3 className="price-category-title">Lotus Facials</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">4 Layers Advanced Radiance Facial</div>
                <div className="price-item-value">₹3500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">4 Layers Advanced Anti-Aging Facial</div>
                <div className="price-item-value">₹4000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ultimo Platinum Facial</div>
                <div className="price-item-value">₹4500+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Ultimo Pearl Facial</div>
                <div className="price-item-value">₹4200+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Dipegmentone Facial</div>
                <div className="price-item-value">₹3800+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Intensive Repair Whitening Facial</div>
                <div className="price-item-value">₹3500+</div>
              </div>
            </div>

            <h3 className="price-category-title">CV Pro Facials</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">Signature Facial</div>
                <div className="price-item-value">₹3000+</div>
              </div>
              <div className="price-item">
                <div className="price-item-name">Aging Facial</div>
                <div className="price-item-value">₹3500+</div>
              </div>
            </div>

            <h3 className="price-category-title">Derma Facials</h3>
            <div className="price-list-table">
              <div className="price-item">
                <div className="price-item-name">C.C. Derma Facial</div>
                <div className="price-item-value">₹3200+</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

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