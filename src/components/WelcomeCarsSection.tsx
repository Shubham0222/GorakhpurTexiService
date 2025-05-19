import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./WelcomeCarsSection.module.css";



const useCountAnimation = (end: number, duration: number = 2) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

const StatItem = ({ number, label, duration = 2 }: { number: number; label: string; duration?: number }) => {
  const { count, ref } = useCountAnimation(number, duration);

  return (
    <motion.div 
      className={styles.statItem}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
    >
      <span className={styles.statNumber}>{count}+</span>
      <span className={styles.statLabel}>{label}</span>
    </motion.div>
  );
};

const WelcomeCarsSection = () => (
  <section className={styles.section}>
    <motion.div 
      className={styles.logoSection}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.logoWrapper}>
        <img 
          src="/assets/image/logo.jpg" 
          alt="Gorakhpur Taxi Booking Logo" 
          className={styles.logo}
        />
      </div>
      <motion.h1 
        className={styles.logoTitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        Gorakhpur Taxi Booking
      </motion.h1>
    </motion.div>

    <div className={styles.container}>
      <motion.div 
        className={styles.welcomeCol}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <h2 className={styles.heading}>Welcome to Gorakhpur Taxi Service</h2>
        <p className={styles.text}>
          For the past 5 years, we have proudly provided creative and reliable taxi services throughout Gorakhpur. Our mission is to deliver world-class car rentals with transparent pricing, modern vehicles, and well-trained, courteous drivers. We offer safe travel, on-time pickups, and a seamless online booking experience for every journey, big or small.
        </p>
        <div className={styles.stats}>
          <StatItem number={5} label="Years Experience" duration={1.5} />
          <StatItem number={1800} label="Happy Customers" duration={2} />
          <StatItem number={24} label="Service" duration={1} />
        </div>
      </motion.div>

      <motion.div 
        className={styles.carsCol}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      >
        <div className={styles.galleryGrid}>
          {[1,2,3,4,5,6].map((_, idx) => (
            <motion.div 
              className={styles.galleryImgWrapper}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <img 
                src={`/assets/image/userimg/P${idx+1}.jpg`} 
                alt={`Gallery ${idx+1}`} 
                className={styles.galleryImg}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default WelcomeCarsSection;
