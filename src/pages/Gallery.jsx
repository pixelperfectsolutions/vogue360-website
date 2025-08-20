import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './Gallery.css';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setHasError(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const imageElement = document.getElementById(`img-${alt}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => observer.disconnect();
  }, [alt]);

  return (
    <div id={`img-${alt}`} className={className} style={{ position: 'relative' }}>
      {!isLoaded && !hasError && (
        <div className="image-placeholder">
          <div className="loading-spinner"></div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
        />
      )}
      {hasError && (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload first few images
    const preloadImages = [
      '/images/1.jpg',
      '/images/2.jpg',
      'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=400'
    ];
    
    preloadImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  const galleryImages = [
    // Local Gallery Images (highest priority)
    { id: 11, src: '/images/1.jpg', alt: 'Vogue360 Salon Gallery Image 1' },
    { id: 12, src: '/images/2.jpg', alt: 'Vogue360 Salon Gallery Image 2' },
    { id: 13, src: '/images/3.jpg', alt: 'Vogue360 Salon Gallery Image 3' },
    { id: 14, src: '/images/4.jpg', alt: 'Vogue360 Salon Gallery Image 4' },
    
    // Hair Styling & Cuts (optimized for faster loading)
    { id: 1, src: 'https://images.pexels.com/photos/3993324/pexels-photo-3993324.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Professional Hair Styling' },
    { id: 2, src: 'https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Precision Haircut' },
    
    // Hair Coloring
    { id: 3, src: 'https://images.pexels.com/photos/3993310/pexels-photo-3993310.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Hair Coloring Process' },
    { id: 4, src: 'https://images.pexels.com/photos/3993466/pexels-photo-3993466.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Balayage Coloring' },
   
    // Spa & Facials
    { id: 5, src: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Facial Treatment' },
    
    // Nail Services
    { id: 6, src: 'https://images.pexels.com/photos/939836/pexels-photo-939836.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Nail Art Design' },
    { id: 7, src: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Elegant Nail Designs' },
    
    // Makeup & Beauty
    { id: 10, src: 'https://images.pexels.com/photos/3997375/pexels-photo-3997375.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop', alt: 'Bridal Makeup' }
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
      <Helmet>
        <title>Gallery - Vogue360 Salon | Hair & Beauty Transformations</title>
        <meta name="description" content="View our gallery of haircuts, coloring, spa treatments, and beauty services at Vogue360 Salon in Coimbatore. See real transformations and premium services." />
        <meta name="keywords" content="Vogue360 gallery, hair transformations, beauty services, salon gallery, Coimbatore, haircuts, coloring, spa treatments" />
        <meta property="og:title" content="Gallery - Vogue360 Salon | Hair & Beauty Transformations" />
        <meta property="og:description" content="View our gallery of haircuts, coloring, spa treatments, and beauty services at Vogue360 Salon in Coimbatore. See real transformations and premium services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vogue360.com/gallery" />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery - Vogue360 Salon" />
        <meta name="twitter:description" content="View our gallery of haircuts, coloring, spa treatments, and beauty services at Vogue360 Salon in Coimbatore. See real transformations and premium services." />
        <meta name="twitter:image" content="/images/logo.jpg" />
        <link rel="canonical" href="https://www.vogue360.com/gallery" />
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
            Our Gallery
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="section-subtitle"
          >
            Discover our transformations and premium services
          </motion.p>
        </motion.div>

        {/* Gallery heading spacing */}
        <div style={{ marginBottom: '40px' }}></div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="gallery-grid"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="gallery-item"
            >
              <div className="image-wrapper">
                <LazyImage src={image.src} alt={image.alt} />
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