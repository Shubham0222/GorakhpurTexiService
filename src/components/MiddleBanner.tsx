import React from 'react';
import { motion } from 'framer-motion';
import styles from './MiddleBanner.module.css';

const MiddleBanner = () => {
  return (
    <motion.div 
      className={styles.ctaSection}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className={styles.ctaContent}>
        <h3 className={styles.ctaTitle}>Ready to Book Your Ride?</h3>
        <p className={styles.ctaText}>Experience premium car rental service in Gorakhpur</p>
        <motion.button 
          className={styles.ctaButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Now
          <svg className={styles.arrowIcon} viewBox="0 0 24 24">
            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MiddleBanner; 