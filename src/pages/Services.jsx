import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import './Services.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [activeCategory, setActiveCategory] = useState('All Services');
  const [activeBrandCategory, setActiveBrandCategory] = useState('All Products');
  
  const featuredServiceCategories = [
    { title: 'All Services', icon: '✨' },
    { title: 'Haircuts & Styling', icon: '✂️' },
    { title: 'Hair Spa & Treatments', icon: '💆‍♀️' },
    { title: 'Hair Colouring', icon: '🎨' },
    { title: 'Facials & Skin Treatments', icon: '🧖‍♀️' },
    { title: 'Body Spa & Massages', icon: '🧖' },
    { title: 'Waxing', icon: '🌿' },
    { title: 'Nail Care', icon: '💅' },
    { title: 'Bridal & Groom Packages', icon: '👰' }
  ];


  const brandCategories = [
    'All Products',
    'Haircare',
    'Skincare'
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
      icon: '✨',
      price: 'Price on request'
    },
  ];

  const topServices = [
    { title: 'Hair Care', icon: '💇‍♀️', desc: 'Advanced haircuts, highlights, global hair color, straightening & volumizing.' },
    { title: 'Hair Treatments', icon: '💆‍♀️', desc: 'Keratin, Hair Botoliss, Botoliss, Anti-Dandruff & Hair-loss solutions.' },
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

  const priceList = [
    {
      category: 'Haircuts & Styling',
      items: [
        { id: 1, name: 'Top Stylist', category: 'Haircuts & Styling', description: 'A precision haircut from one of our top-tier stylists.', price: '₹650', icon: '✂️' },
        { id: 2, name: 'Creative Director', category: 'Haircuts & Styling', description: 'A transformative haircut experience with our creative director.', price: '₹1300', icon: '✨' },
        { id: 3, name: 'Beard Trim', category: 'Haircuts & Styling', description: 'Expert shaping and trimming to keep your beard looking sharp.', price: '₹180', icon: '🧔' },
        { id: 4, name: 'Kids Cut', category: 'Haircuts & Styling', description: 'A fun and gentle haircut experience for children.', price: '₹295', icon: '👶' },
        { id: 5, name: 'Wash & Blast Dry', category: 'Haircuts & Styling', description: 'A quick wash and blow-dry for a fresh look.', price: '₹1000', icon: '💨' },
        { id: 6, name: 'Straight Blow Dry', category: 'Haircuts & Styling', description: 'A classic blow-dry for a sleek, straight finish.', price: '₹1000 ', icon: '🌬️' },
        { id: 7, name: 'Wash & Styling', category: 'Haircuts & Styling', description: 'A wash followed by professional styling for any occasion.', price: '₹1500', icon: '💇‍♀️' },
        { id: 8, name: 'Ironing', category: 'Haircuts & Styling', description: 'Professional flat ironing for a perfectly smooth and sleek style.', price: '₹1500 (onwards)', icon: '🔥' },
        { id: 9, name: 'Tongs', category: 'Haircuts & Styling', description: 'Create beautiful curls or waves with professional tongs.', price: '₹1500 (onwards)', icon: '💈' },
      ]
    },
    {
      category: 'Hair Spa & Treatments',
      items: [
        { id: 10, name: 'Smoothening', category: 'Hair Spa & Treatments', description: 'Tame frizz and flyaways for silky, smooth hair.', price: '₹4999 (onwards)', icon: '🌿' },
        { id: 11, name: 'Straightening', category: 'Hair Spa & Treatments', description: 'Achieve a permanently sleek, straight look.', price: '₹3999 (onwards)', icon: '🌿' },
        { id: 12, name: 'Botoliss', category: 'Hair Spa & Treatments', description: 'An intensive deep conditioning treatment to rejuvenate and repair hair.', price: '₹6999 (onwards)', icon: '💉' },
        { id: 13, name: 'Keratin', category: 'Hair Spa & Treatments', description: 'A protein treatment to strengthen hair, reduce frizz, and add shine.', price: '₹5999 (onwards)', icon: '💊' },
        { id: 14, name: 'Systein', category: 'Hair Spa & Treatments', description: 'An advanced treatment for long-lasting smoothness and shine.', price: '₹8999 (onwards)', icon: '🔬' },
        { id: 15, name: 'Nanoblast', category: 'Hair Spa & Treatments', description: 'A revolutionary treatment for ultimate hair repair and rejuvenation.', price: '₹10999 (onwards)', icon: '⚛️' },
        { id: 16, name: 'Kera Blast', category: 'Hair Spa & Treatments', description: 'An intense keratin treatment for maximum smoothness and hair health.', price: '₹12999 (onwards)', icon: '💥' },
        { id: 17, name: 'Deep Nourishing', category: 'Hair Spa & Treatments', description: 'Rich hydration to revive dull, dry strands.', price: '₹2000 (onwards)', icon: '💧' },
        { id: 18, name: 'Express Alchemy', category: 'Hair Spa & Treatments', description: 'Quick luxury treatment for instant shine & softness.', price: '₹2500 (onwards)', icon: '⚗️' },
        { id: 19, name: 'Intense Alchemy', category: 'Hair Spa & Treatments', description: 'Deep repair for over-processed or damaged hair.', price: '₹2800 (onwards)', icon: '🧪' },
        { id: 20, name: 'Dandruff Treatment', category: 'Hair Spa & Treatments', description: 'Targets flakes and itchiness while soothing the scalp.', price: '₹2000 (onwards)', icon: '❄️' },
        { id: 21, name: 'Anti-Hairfall Treatment', category: 'Hair Spa & Treatments', description: 'Strengthens roots and reduces breakage.', price: '₹3500 (onwards)', icon: '🛡️' },
        { id: 22, name: 'Butter Hair Spa', category: 'Hair Spa & Treatments', description: 'Ultra-nourishing formula for silky smoothness.', price: '₹4500 (onwards)', icon: '🧈' },
        { id: 23, name: 'Wellaplex', category: 'Hair Spa & Treatments', description: 'Rebuilds hair bonds for healthier, stronger strands.', price: '₹3000 (onwards)', icon: '💪' },
      ]
    },
    {
      category: 'Hair Colouring',
      items: [
        { id: 24, name: 'Root Touch Up', category: 'Hair Colouring', description: 'Seamlessly cover regrowth and maintain your hair color’s vibrancy.', price: '₹1000', icon: '🎨' },
        { id: 25, name: 'Global', category: 'Hair Colouring', description: 'A full hair color application from roots to ends for a uniform, stunning look.', price: '₹1500', icon: '🌍' },
        { id: 26, name: 'Streaks', category: 'Hair Colouring', description: 'Add beautiful, subtle streaks of color to enhance your hairstyle.', price: '₹450 per streak', icon: '🌈' },
        { id: 27, name: 'Fashion Highlights', category: 'Hair Colouring', description: 'Bold and vibrant highlights to create a trendy, fashionable look.', price: '₹3999 (onwards)', icon: '🌟' },
        { id: 28, name: 'Advanced Hair Colouring', category: 'Hair Colouring', description: 'Customized color techniques like balayage, ombre, or creative coloring.', price: '₹6999 (onwards)', icon: '💡' },
      ]
    },
    {
      category: 'Facials & Skin Treatments',
      items: [
        { id: 29, name: 'Basic Facial', category: 'Facials & Skin Treatments', description: 'A refreshing cleanse to restore your skin’s natural glow.', price: '₹2499', icon: '😊' },
        { id: 30, name: 'Aroma Lightening Facial', category: 'Facials & Skin Treatments', description: 'Infused with calming aromas to brighten & even skin tone.', price: '₹3500', icon: '🌸' },
        { id: 31, name: 'Gold Facial', category: 'Facials & Skin Treatments', description: 'Enriched with gold extracts to add a radiant, luxurious sheen.', price: '₹2500', icon: '🥇' },
        { id: 32, name: 'Diamond Facial', category: 'Facials & Skin Treatments', description: 'Polishes & refines skin for a smooth, luminous finish.', price: '₹2500', icon: '💎' },
        { id: 33, name: 'Fruit Blast', category: 'Facials & Skin Treatments', description: 'Packed with fruit enzymes to hydrate, refresh, & revive dull skin.', price: '₹3000', icon: '🍓' },
        { id: 34, name: 'Mineral Facial', category: 'Facials & Skin Treatments', description: 'Mineral-rich formula to nourish and strengthen skin.', price: '₹3000', icon: '🗻' },
        { id: 35, name: 'Skin Brightening', category: 'Facials & Skin Treatments', description: 'Advanced treatment to lighten pigmentation and boost radiance.', price: '₹5500', icon: '✨' },
        { id: 36, name: 'Gold Moroccan', category: 'Facials & Skin Treatments', description: 'Deep hydration with Moroccan gold essence for a rich, glowing look.', price: '₹6000', icon: '🇲🇦' },
        { id: 37, name: 'Derma Ice Facial', category: 'Facials & Skin Treatments', description: 'Cooling therapy to soothe, tighten, & refresh skin instantly.', price: '₹7000', icon: '🧊' },
        { id: 38, name: 'Advanced Tan Removal', category: 'Facials & Skin Treatments', description: 'Targets stubborn tan for a clearer, even-toned complexion.', price: '₹4500', icon: '☀️' },
        { id: 39, name: 'Anti-Ageing Facial', category: 'Facials & Skin Treatments', description: 'Smooths fine lines and promotes youthful firmness.', price: '₹5000', icon: '⏳' },
        { id: 40, name: 'Acne Control Facial', category: 'Facials & Skin Treatments', description: 'Clears breakouts and controls excess oil without over-drying.', price: '₹6500', icon: '🧼' },
        { id: 41, name: 'Korean Glassy Skin Facial', category: 'Facials & Skin Treatments', description: 'Gives a flawless, translucent “glass skin” finish.', price: '₹8000', icon: '🇰🇷' },
        { id: 42, name: 'Red Carpet DNA Facial', category: 'Facials & Skin Treatments', description: 'High-performance facial for instant, event-ready radiance.', price: '₹8500', icon: '🧬' },
        { id: 43, name: 'Bridal Glow Facial', category: 'Facials & Skin Treatments', description: 'Deep nourishment for a lasting bridal-day glow.', price: '₹9000', icon: '👰' },
        { id: 44, name: 'Under Eye Treatment', category: 'Facials & Skin Treatments', description: 'Reduces puffiness & dark circles for a rested look.', price: '₹2500', icon: '👁️' },
        { id: 45, name: 'Vita-C Glow Mask', category: 'Facials & Skin Treatments', description: 'Brightens & energizes dull skin with vitamin C power.', price: '₹2000', icon: '🍊' },
        { id: 46, name: 'Dead Sea Mud Mask', category: 'Facials & Skin Treatments', description: 'Purifies and detoxifies with mineral-rich mud.', price: '₹3000', icon: '🌊' },
        { id: 47, name: 'Clean Up', category: 'Facials & Skin Treatments', description: 'Gently removes impurities for refreshed, healthy skin.', price: '₹1799', icon: '🧹' },
        { id: 48, name: 'Face & Neck', category: 'Facials & Skin Treatments', description: 'Lightens tan and restores even skin tone.', price: '₹1300', icon: '☀️' },
        { id: 49, name: 'Full Arms', category: 'Facials & Skin Treatments', description: 'Targets sun damage for brighter, smoother arms.', price: '₹2500', icon: '☀️' },
        { id: 50, name: 'Half Back', category: 'Facials & Skin Treatments', description: 'Removes tan & evens tone for a cleaner back appearance.', price: '₹3000', icon: '☀️' },
        { id: 51, name: 'Full Back', category: 'Facials & Skin Treatments', description: 'Deep tan removal for smooth, uniform skin.', price: '₹4000', icon: '☀️' },
        { id: 52, name: 'Feet', category: 'Facials & Skin Treatments', description: 'Refreshes and lightens tanned feet for a neat look.', price: '₹1500', icon: '☀️' },
        { id: 53, name: 'Full Body Detan', category: 'Facials & Skin Treatments', description: 'Complete head-to-toe tan removal for all-over brightness.', price: '₹6000', icon: '☀️' },
        { id: 54, name: 'Deep Hydration Mask', category: 'Facials & Skin Treatments', description: 'Infuses skin with moisture for a plump, dewy finish.', price: '₹3000', icon: '💧' },
        { id: 55, name: 'Anti-Ageing Mask', category: 'Facials & Skin Treatments', description: 'Firms and smooths skin while boosting elasticity.', price: '₹3000', icon: '⏳' },
        { id: 56, name: 'Clean Up Ritual', category: 'Facials & Skin Treatments', description: 'Blended botanicals for a clean, soft, & bright complexion.', price: '₹1899', icon: '🌿' },
        { id: 57, name: 'Brazilian Clean Up', category: 'Facials & Skin Treatments', description: 'Deep-cleansing ritual for clear, smooth skin.', price: '₹2499', icon: '🇧🇷' },
        { id: 58, name: 'Ageing Clean Up', category: 'Facials & Skin Treatments', description: 'Revitalizing cleanse to refresh mature skin.', price: '₹2599', icon: '⏳' },
      ]
    },
    {
      category: 'Body Spa & Massages',
      items: [
        { id: 48, name: 'Basic Body Spa', category: 'Body Spa & Massages', description: 'A general full-body massage that promotes relaxation and improves blood circulation. It typically uses gentle to moderate pressure with aromatic oils.', price: '₹4999', icon: '🛀' },
        { id: 49, name: 'Deep Tissue Massage', category: 'Body Spa & Massages', description: 'Targets deeper layers of muscles and connective tissues to relieve chronic pain and tension. It’s ideal for people with muscle stiffness or sports-related injuries.', price: '₹6999', icon: '💪' },
        { id: 50, name: 'Aroma Therapy', category: 'Body Spa & Massages', description: 'Combines gentle massage with essential oils to enhance physical and emotional well-being. The scents are chosen to calm the mind, energize, or relieve stress.', price: '₹8999', icon: '🌸' },
        { id: 51, name: 'Thai Massage', category: 'Body Spa & Massages', description: 'A dry massage that involves stretching, pulling, and yoga-like movements. It improves flexibility, energy flow, and overall body alignment.', price: '₹9999', icon: '🇹🇭' },
        { id: 52, name: 'Steam Massage', category: 'Body Spa & Massages', description: 'Begins with a massage followed by steam therapy to open pores and detox the skin. It relaxes muscles and enhances the benefits of the massage.', price: '₹10999', icon: '💨' },
        { id: 53, name: 'Potli Massage', category: 'Body Spa & Massages', description: 'Uses warm herbal pouches (potlis) applied to the body to relieve muscle pain and stiffness. The herbs help improve circulation and soothe inflammation.', price: '₹12999', icon: '👜' },
        { id: 54, name: 'Hot Stone Massage with Swedish', category: 'Body Spa & Massages', description: 'Involves placing heated stones on key points of the body while massaging with them. The heat relaxes muscles deeply and promotes a sense of calm.', price: '₹14999', icon: '🔥' },
        { id: 55, name: 'Head Massage', category: 'Body Spa & Massages', description: 'A relaxing massage focused on the head, neck, and shoulders to relieve stress.', price: '₹1000', icon: '💆' },
        { id: 56, name: 'Foot Massage', category: 'Body Spa & Massages', description: 'Soothe tired feet with a relaxing massage that improves circulation.', price: '₹1500', icon: '👣' },
      ]
    },
    {
      category: 'Waxing',
      items: [
        { id: 57, name: 'Underarms', category: 'Waxing', description: 'Quick and effective underarm waxing for smooth skin.', price: '₹295', icon: '🙋‍♀️' },
        { id: 58, name: 'Half Arms', category: 'Waxing', description: 'Smooth, hair-free skin on your lower or upper arms.', price: '₹750', icon: '💪' },
        { id: 59, name: 'Full Arms', category: 'Waxing', description: 'Complete arm waxing for a perfectly smooth finish.', price: '₹1500', icon: '🙌' },
        { id: 60, name: 'Half Legs', category: 'Waxing', description: 'Waxing for your lower or upper legs.', price: '₹850', icon: '🦵' },
        { id: 61, name: 'Full Legs', category: 'Waxing', description: 'Get completely smooth legs from top to bottom.', price: '₹1700', icon: '🦵' },
        { id: 62, name: 'Full Body', category: 'Waxing', description: 'A complete waxing service for silky smooth skin all over.', price: '₹5000', icon: '🧘‍♀️' },
        { id: 63, name: 'Brazilian', category: 'Waxing', description: 'A professional and hygienic Brazilian wax for a clean look.', price: '₹499', icon: '🇧🇷' },
      ]
    },
    {
      category: 'Nail Care',
      items: [
        { id: 64, name: 'Basic Manicure', category: 'Nail Care', description: 'Cut, file, and shape for neat, healthy nails.', price: '₹500', icon: '💅' },
        { id: 65, name: 'Basic Pedicure', category: 'Nail Care', description: 'Cut, file, and shape for neat, healthy nails.', price: '₹800', icon: '👣' },
        { id: 66, name: 'AVL Express Manicure', category: 'Nail Care', description: 'Quick refresh with essential care.', price: '₹800', icon: '💅' },
        { id: 67, name: 'Chakra Manicure', category: 'Nail Care', description: 'Gentle scrub and massage for soft, smooth hands.', price: '₹900', icon: '💅' },
        { id: 68, name: 'Chocolate Mint Manicure', category: 'Nail Care', description: 'Indulgent blend of chocolate and mint for hydration.', price: '₹1000', icon: '💅' },
        { id: 69, name: 'Strawberry Manicure', category: 'Nail Care', description: 'Fruity exfoliation and nourishment.', price: '₹1100', icon: '💅' },
        { id: 70, name: 'Ice Cream Manicure', category: 'Nail Care', description: 'Rich, creamy treatment for deep moisturisation.', price: '₹2600', icon: '🍦' },
        { id: 71, name: 'Ice Cream Pedicure', category: 'Nail Care', description: 'Rich, creamy treatment for deep moisturisation.', price: '₹3500', icon: '🍦' },
        { id: 72, name: 'Candle Spa Manicure', category: 'Nail Care', description: 'Warm candle oil therapy for ultimate relaxation.', price: '₹2500', icon: '🕯️' },
        { id: 73, name: 'Candle Spa Pedicure', category: 'Nail Care', description: 'Warm candle oil therapy for ultimate relaxation.', price: '₹4000', icon: '🕯️' },
        { id: 74, name: 'Heel Peel Treatment', category: 'Nail Care', description: 'An intensive treatment to soften and remove calluses for smooth heels.', price: '₹3500', icon: '🦶' },
      ]
    },
    {
      category: 'Bridal & Groom Packages',
      items: [
        { id: 75, name: 'Pre-Bridal Groom Package', category: 'Bridal & Groom Packages', description: 'Gold/Diamond Facial, Shave/Beard Shape-Up, Deluxe Pedicure & Manicure, Hair Spa, Senior Stylist Haircut.', price: '₹8000', icon: '💍' },
        { id: 76, name: 'Pre-Bridegroom Package', category: 'Bridal & Groom Packages', description: 'Seasoul/Comfort Zone Treatment, Shave/Beard Design, Luxury Pedicure & Manicure, Hair Spa, Top Stylist Haircut.', price: '₹12000', icon: '🤵' },
        { id: 77, name: 'Pre-Bridal Package', category: 'Bridal & Groom Packages', description: 'Gold/Diamond Facial, Full Body Waxing (Regular), Threading, Deluxe Manicure & Pedicure, Hair Spa, Senior Stylist Haircut.', price: '₹15000', icon: '👰' },
        { id: 78, name: 'Saree Draping', category: 'Bridal & Groom Packages', description: 'Expert draping for a flawless and elegant saree look for any occasion.', price: '₹1500', icon: '💃' },
        { id: 79, name: 'Hair & Makeup', category: 'Bridal & Groom Packages', description: 'Complete hair and makeup services for a polished, event-ready look.', price: '₹6000', icon: '💄' },
        { id: 80, name: 'Advanced Hairdo', category: 'Bridal & Groom Packages', description: 'Intricate and stylish hairdos for weddings, parties, and special events.', price: '₹3500', icon: '👱‍♀️' },
        { id: 81, name: 'Elegant Bride', category: 'Bridal & Groom Packages', description: 'A complete bridal package for a timeless and elegant look on your special day.', price: '₹9000', icon: '👰' },
        { id: 82, name: 'Gorgeous Bride', category: 'Bridal & Groom Packages', description: 'A luxurious bridal package to make you look and feel absolutely gorgeous.', price: '₹12000', icon: '👸' },
        { id: 83, name: 'High Definition Makeup', category: 'Bridal & Groom Packages', description: 'Flawless, camera-ready makeup that looks perfect both in person and on screen.', price: '₹18000', icon: '🎥' },
        { id: 84, name: 'Airbrush Makeup', category: 'Bridal & Groom Packages', description: 'A lightweight, long-lasting makeup application for a seamless, perfect finish.', price: '₹30000', icon: '💨' },
      ]
    }
  ];

  const filteredServices = activeCategory === 'All Services' 
    ? priceList.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })))
    : priceList.find(cat => cat.category === activeCategory)?.items || [];

  // Filter brand products based on active brand category
  const filteredBrandProducts = activeBrandCategory === 'All Products' 
    ? servicesList.filter(service => ['Haircare', 'Skincare'].includes(service.category))
    : servicesList.filter(service => service.category === activeBrandCategory);

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
        <motion.div variants={fadeInUp} className="banner-content">
          <motion.h1 variants={fadeInUp}>
            {serviceBanner.title}
          </motion.h1>
          <motion.div variants={fadeInUp} className="banner-subtitle">
            {serviceBanner.subtitle}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Featured Services Section */}
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
          <motion.p variants={fadeInUp}>
            Discover our most popular treatments and services
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Service Categories Filter */}
      <div className="service-categories">
        {featuredServiceCategories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category.title ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.title)}
          >
            {category.icon} {category.title}
          </button>
        ))}
      </div>

      {/* Filterable Services Grid */}
      <div className="services-list">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="service-card"
            variants={fadeInUp}
            whileHover={{ scale: 1.04 }}
          >
            <div className="service-card-icon">{service.icon}</div>
            <div className="service-badge">{service.category}</div>
            <h3>{service.name}</h3>
            <p className="service-desc">{service.description}</p>
            <a href="https://wa.me/919944471130" target="_blank" rel="noopener noreferrer" className="call-now-btn">Call Now</a>
          </motion.div>
        ))}
      </div>

      {/* Brand Products Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="services-header"
      >
        <motion.div variants={fadeInUp} className="services-header-content">
          <motion.h1 variants={fadeInUp} className="section-title">
            Discover Our Brand Products We Use
          </motion.h1>
          <motion.p variants={fadeInUp}>
            Explore our premium brand products across all categories
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Brand Product Categories */}
      <div className="service-categories">
        {brandCategories.map((category, index) => (
          <button 
            key={index} 
            className={`category-btn ${activeBrandCategory === category ? 'active' : ''}`}
            onClick={() => setActiveBrandCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Brand Products Grid */}
      <div className="services-list">
        {filteredBrandProducts.map(service => (
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
            <a href="https://wa.me/919944471130" target="_blank" rel="noopener noreferrer" className="call-now-btn">Call Now</a>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="container cta-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp}>
            Ready for Your Transformation?
          </motion.h2>
          <motion.p variants={fadeInUp}>
            Call us today and experience the Vouge360 difference
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a href="https://wa.me/919944471130" className="btn btn-large" target="_blank" rel="noopener noreferrer">Call Now</a>
          </motion.div>
        </motion.div>
      </div>

  </div>
);
};

export default Services;