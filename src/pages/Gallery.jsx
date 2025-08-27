import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './Gallery.css';

const LazyImage = ({ id, src, alt, className }) => {
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

    const imageElement = document.getElementById(`img-${id}`);
    if (imageElement) {
      observer.observe(imageElement);
    }

    return () => observer.disconnect();
  }, [id]);

  return (
    <div id={`img-${id}`} className={className} style={{ position: 'relative' }}>
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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload first few images
    const preloadImages = [
      '/images/vogue360int-1.png',
      '/images/vogue360int-2.png',
      '/images/vogue360int-3.png',
      '/images/vogue360int-4.png'
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
    { id: 1, src: '/images/vogue360int-1.png', alt: 'Vogue360 Salon Gallery Image 1' },
    ...Array.from({ length: 23 }, (_, i) => ({
      id: i + 2,
      src: `/images/vogue360int-${i + 2}.png`,
      alt: `Vogue360 Salon Gallery Image ${i + 2}`
    }))
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
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="gallery-item"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <div className="image-wrapper">
                <LazyImage id={image.id} src={image.src} alt={image.alt} className="gallery-image" />
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

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages}
        index={index}
        carousel={{
          finite: false,
          preload: 1,
          imageFit: 'contain',
          padding: 0,
          spacing: 0,
          imageProps: { 
            style: { 
              maxHeight: '100vh',
              objectFit: 'contain',
              maxWidth: '100%',
              height: 'auto',
              width: 'auto',
              margin: '0 auto',
            } 
          },
          styles: {
            slide: {
              padding: 0,
              margin: 0,
              width: '100vw',
              height: '100vh',
            },
            container: {
              width: '100vw',
              height: '100vh',
            }
          }
        }}
        styles={{
          container: { 
            '--yarl__color_backdrop': 'rgba(0, 0, 0, 0.95)',
            '--yarl__slide_padding': '0',
            '--yarl__slide_height': '100vh',
            '--yarl__slide_margin': '0',
            '--yarl__thumbnails_container_padding': '0',
            '--yarl__thumbnails_thumbnail_margin': '0',
            '--yarl__thumbnails_thumbnail_border_radius': '0',
            '--yarl__thumbnails_thumbnail_border_color_selected': 'rgba(212, 175, 55, 0.8)',
            '--yarl__thumbnails_thumbnail_border_width': '2px',
          },
          navigationPrev: {
            padding: '1rem',
            left: '10px',
            '@media (max-width: 768px)': {
              left: '5px',
            },
          },
          navigationNext: {
            padding: '1rem',
            right: '10px',
            '@media (max-width: 768px)': {
              right: '5px',
            },
          },
          slide: {
            padding: '0',
            margin: '0',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          slideImage: {
            maxWidth: '100%',
            maxHeight: '100vh',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
          },
          thumbnailsContainer: {
            display: 'none',
          },
        }}
        controller={{ 
          closeOnPullUp: true, 
          closeOnBackdropClick: true,
          touchAction: 'pan-y',
        }}
        render={{
          buttonPrev: window.innerWidth <= 768 ? undefined : undefined,
          buttonNext: window.innerWidth <= 768 ? undefined : undefined,
          iconClose: () => (
            <svg width="32" height="32" viewBox="0 0 24 24" style={{ 
              color: '#fff',
              position: 'absolute',
              top: '20px',
              right: '20px',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              borderRadius: '50%',
              padding: '4px',
              cursor: 'pointer'
            }}>
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              />
            </svg>
          ),
        }}
        on={{ view: ({ index: currentIndex }) => setIndex(currentIndex) }}
      />
    </div>
  );
};

export default Gallery;