import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesSection.module.css';
import StatStrip from './StatStrip';

const services = [
  {
    id: 1,
    title: "Airport Cab Service",
    image: "/assets/image/services/S_P1.jpg",
    description: "Reliable and comfortable airport transfers with professional drivers. Available 24/7 for all flights.",
    features: [

    ],
    icon: (
      <svg viewBox="0 0 24 24" className={styles.serviceIcon}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    )
  },
  {
    id: 2,
    title: "Local Cab Service",
    image: "/assets/image/services/S_P2.jpg",
    description: "Quick and convenient local transportation for all your city travel needs.",
    features: [
 
    ],
    icon: (
      <svg viewBox="0 0 24 24" className={styles.serviceIcon}>
        <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
      </svg>
    )
  },
  {
    id: 3,
    title: "Intercity Cab Service",
    image: "/assets/image/services/S_P3.jpg",
    description: "Comfortable long-distance travel with experienced drivers and well-maintained vehicles.",
    features: [

    ],
    icon: (
      <svg viewBox="0 0 24 24" className={styles.serviceIcon}>
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
      </svg>
    )
  }
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>Premium transportation solutions for every need</p>
        </motion.div>

        <StatStrip />

        <div className={styles.servicesGrid}>
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.imageContainer}>
                <img src={service.image} alt={service.title} className={styles.image} />
                <div className={styles.iconWrapper}>{service.icon}</div>
              </div>
              
              <div className={styles.contentContainer}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <ul className={styles.featuresList}>
                  {service.features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* <motion.button 
                  className={styles.bookButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                  </svg>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 