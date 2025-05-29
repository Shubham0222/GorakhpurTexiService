import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      console.error('Form validation failed:', formData);
      setStatus({ submitting: false, submitted: false, error: true });
      return;
    }

    try {
      console.log('Sending form data:', formData);

      // Send email to admin
      const adminResponse = await emailjs.sendForm(
        'service_tkzamlj',
        'template_noxpo18',
        formRef.current!,
        'j6uLqy9d8m4i9mxPP'
      );
      console.log('Admin email sent:', adminResponse);

      // Send thank you email to customer
      const customerResponse = await emailjs.sendForm(
        'service_tkzamlj',
        'template_lfu6pna',
        formRef.current!,
        'j6uLqy9d8m4i9mxPP'
      );
      console.log('Customer email sent:', customerResponse);

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Email sending error:', error);
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>We're here to help and answer any questions you might have</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.contactInfo}
          >
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Owner</h3>
                  <p className={styles.infoValue}>Shailesh Bharti</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Call Us</h3>
                  <a className={styles.infoValue} href="tel:+919026793233">+91 9026793233</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Email Us</h3>
                  <div className={styles.emailLinks}>
                    <a className={styles.infoValue} href="mailto:support@bestgorakhpurtaxi.com">
                      support@bestgorakhpurtaxi.com
                    </a>
                    <a className={styles.infoValue} href="mailto:bestgorakhpurtaxi@gmail.com">
                      bestgorakhpurtaxi@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg className={styles.icon} viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3 className={styles.infoTitle}>Visit Us</h3>
                  <p className={styles.infoValue}>
                    House No. 12, Dalmeal Mirzapur Gorakhpur, Uttar Pradesh, 273005
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.form}
          >
            <div className={styles.formGroup}>
              <input 
                className={styles.input} 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                className={styles.input} 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                className={styles.input} 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                className={styles.textarea} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required 
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit" 
              className={styles.submitButton}
              disabled={status.submitting}
            >
              {status.submitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {status.submitted && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.successMessage}
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}

            {status.error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.errorMessage}
              >
                Sorry, there was an error sending your message. Please try again.
              </motion.div>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.mapContainer}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0521479781647!2d83.349249!3d26.751063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991f5e5c0c00001%3A0x0!2zMjbCsDQ1JzAzLjgiTiA4M8KwMjAnNTcuMyJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Best Gorakhpur Taxi Location"
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact; 