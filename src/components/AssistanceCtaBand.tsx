import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './AssistanceCtaBand.module.css';

const AssistanceCtaBand = () => {
  return (
    <section className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div 
          className={styles.textContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Need Assistance?</h2>
          <p className={styles.subtitle}>
            Our customer support team is available 24/7 to help you with any questions or concerns
          </p>
          <div className={styles.contactInfo}>
            <motion.div 
              className={styles.contactItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.label}>Email Us</span>
                <a href="mailto:gorakhpurtaxibooking@gmail.com" className={styles.value}>
                  gorakhpurtaxibooking@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.contactItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.label}>Call Us</span>
                <a href="tel:+918887537960" className={styles.value}>
                  +91 8887537960
                </a>
              </div>
            </motion.div>

            <motion.div 
              className={styles.contactItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={styles.iconWrapper}>
                <svg className={styles.icon} viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.label}>Visit Us</span>
                <span className={styles.value}>
                  Gorakhpur, Uttar Pradesh, India
                </span>
              </div>
            </motion.div>
          </div>
          <motion.button 
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
            <svg className={styles.arrowIcon} viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </motion.button>
          
        </motion.div>
      </div>
    </section>
  );
};

export default AssistanceCtaBand;
