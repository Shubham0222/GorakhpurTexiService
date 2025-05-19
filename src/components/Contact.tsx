import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <main className={styles.main}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Contact Us
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.infoCard}
      >
        <div className={styles.infoItem}>
          <div className={styles.label}>Call Us:</div>
          <a className={styles.phone} href="tel:+918887537960">+91 8887537960</a>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Email:</div>
          <a className={styles.email} href="mailto:gorakhpurtaxibooking@gmail.com">
            gorakhpurtaxibooking@gmail.com
          </a>
        </div>
        <div className={styles.infoItem}>
          <div className={styles.label}>Address:</div>
          <div className={styles.address}>
            Sanik Kunj, Sector B, Nandanagar, Gorakhpur, Uttar Pradesh
          </div>
        </div>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={styles.form}
      >
        <div className={styles.formGroup}>
          <input 
            className={styles.input} 
            type="text" 
            placeholder="Your Name"
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <input 
            className={styles.input} 
            type="email" 
            placeholder="Your Email"
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <textarea 
            className={styles.textarea} 
            placeholder="Your Message"
            required 
          />
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit" 
          className={styles.submitButton}
        >
          Send Message
        </motion.button>
      </motion.form>
    </main>
  );
};

export default Contact; 