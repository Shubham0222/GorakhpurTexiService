import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeBanner.module.css';

const HomeBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className={styles.title}>
            Premium Car Rental Service
            <span className={styles.highlight}> in Gorakhpur</span>
          </h1>
          <p className={styles.subtitle}>
            Experience luxury and comfort with our premium fleet of vehicles
          </p>
          <div className={styles.ctaButtons}>
            <motion.button 
              className={styles.primaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
              <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
              </svg>
            </motion.button>
            <motion.button 
              className={styles.secondaryButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Fleet
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1000+</span>
            <span className={styles.statLabel}>Happy Customers</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>24/7</span>
            <span className={styles.statLabel}>Service</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner; 