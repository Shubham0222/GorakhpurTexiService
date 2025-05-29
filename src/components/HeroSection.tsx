import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HeroSection.module.css";
import { getWhatsAppLink } from "../utils/whatsapp";

const sliderImages = [
 "/assets/image/famousTourist/FT_Jankim.jpg",
 "/assets/image/famousTourist/FT_jomsom.jpg",
 "/assets/image/famousTourist/FT_pashupati.jpg",
 "/assets/image/famousTourist/FT_pumdikot_shiva_statue.jpg",
];

const HeroSection = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className={styles.hero}>
      <div className={styles.bgSliderWrapper}>
        <AnimatePresence initial={false}>
          <motion.div
            key={bgIndex}
            className={styles.bgSlider}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: false }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ backgroundImage: `url('${sliderImages[bgIndex]}')` }}
          />
        </AnimatePresence>
        <div className={styles.bgOverlay}></div>
      </div>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Find Your Ride with <span className={styles.gold}>Best Gorakhpur Taxi</span>
      </motion.h1>
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        Safe. Reliable. Affordable.<br />
        Travel anywhere in style and comfort — 24/7 Service, Best Cars & Drivers in Gorakhpur.
      </motion.p>
      <motion.a
        href={getWhatsAppLink('hero')}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.ctaBtn}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7, delay: 0.7, type: "spring", stiffness: 180 }}
        whileHover={{ scale: 1.07, boxShadow: "0 8px 32px rgba(255,214,0,0.18)" }}
        whileTap={{ scale: 0.97 }}
      >
        Book Now
      </motion.a>
    </section>
    </>
  );
};

export default HeroSection;
