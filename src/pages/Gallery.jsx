import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState('all');

  const galleryImages = [
    { id: 1, category: 'haircut', src: 'https://images.unsplash.com/photo-1560066984-138dadb4c581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Precision Haircut' },
    { id: 2, category: 'coloring', src: 'https://images.unsplash.com/photo-1521490973542-449b7af6020e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Hair Coloring' },
    { id: 3, category: 'beard', src: 'https://images.unsplash.com/photo-1503944162410-978fcb343824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Beard Grooming' },
    { id: 4, category: 'spa', src: 'https://images.unsplash.com/photo-1597983342179-03e9414186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Spa Treatment' },
    { id: 5, category: 'haircut', src: 'https://images.unsplash.com/photo-1599557549036-0eed160c9b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Stylish Haircut' },
    { id: 6, category: 'coloring', src: 'https://images.unsplash.com/photo-1591354280047-48dc2c16571b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Balayage Coloring' },
    { id: 7, category: 'beard', src: 'https://images.unsplash.com/photo-1590343324624-68dbe4c136b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Beard Shaping' },
    { id: 8, category: 'spa', src: 'https://images.unsplash.com/photo-1597983342179-03e9414186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Facial Treatment' },
    { id: 9, category: 'haircut', src: 'https://images.unsplash.com/photo-1599557549036-0eed160c9b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Modern Hairstyle' },
    { id: 10, category: 'coloring', src: 'https://images.unsplash.com/photo-1521490973542-449b7af6020e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Hair Highlights' },
    { id: 11, category: 'beard', src: 'https://images.unsplash.com/photo-1503944162410-978fcb343824?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Beard Styling' },
    { id: 12, category: 'spa', src: 'https://images.unsplash.com/photo-1597983342179-03e9414186c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80', alt: 'Relaxing Spa' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'haircut', name: 'Haircuts' },
    { id: 'coloring', name: 'Coloring' },
    { id: 'beard', name: 'Beard' },
    { id: 'spa', name: 'Spa' }
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
    <div className="gallery-page page-container">
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
            Our Gallery
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-subtitle"
          >
            Discover our transformations and premium services
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="filter-buttons"
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="gallery-grid"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="gallery-item"
            >
              <div className="image-wrapper">
                <img src={image.src} alt={image.alt} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{image.alt}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;