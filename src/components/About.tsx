import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import BookNowModal from "./BookNowModal";
import WelcomeCarsSection from "./WelcomeCarsSection";

const features = [
  {
    icon: "🚗",
    title: "Modern Fleet",
    description: "Well-maintained vehicles with latest amenities for your comfort"
  },
  {
    icon: "👨‍✈️",
    title: "Expert Drivers",
    description: "Professional and experienced drivers with local knowledge"
  },
  {
    icon: "⭐",
    title: "Premium Service",
    description: "24/7 customer support and transparent pricing"
  }
];

const About = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    
    <main className={styles.main}>
      <WelcomeCarsSection />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.container}
      >
        <h2 className={styles.title}>About Us</h2>
        
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={styles.textContent}
          >
            <h3 className={styles.subtitle}>Trusted Taxi Service In Gorakhpur Since 2008</h3>
            <p className={styles.paragraph}>
              Best Gorakhpur Taxi is committed to providing the best-in-class taxi service in Gorakhpur and nearby destinations. Our experienced drivers, modern cars, transparent pricing, and 24/7 support ensure your ride is always smooth, safe, and affordable.
            </p>
            <p className={styles.paragraph}>
              Whether you need airport pickup, outstation journeys, or a city tour, trust us for professional, punctual, and courteous service every time.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className={styles.imageContainer}
          >
            <img 
              src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Luxury Taxi Service" 
              className={styles.image}
            />
          </motion.div>
        </div>

        <div className={styles.features}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className={styles.cta}
        >
          <h3 className={styles.ctaTitle}>Ready to Book Your Ride?</h3>
          <p className={styles.ctaText}>Experience the best taxi service in Gorakhpur</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
            onClick={() => setModalOpen(true)}
          >
            Book Now
          </motion.button>
        </motion.div>
      </motion.div>
      <BookNowModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
};

export default About; 