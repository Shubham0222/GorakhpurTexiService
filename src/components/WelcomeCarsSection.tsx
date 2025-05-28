import React, { useEffect, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
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

const WelcomeCarsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imagesPerPage = 6;
  const totalPages = Math.ceil(24 / imagesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisibleImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    return Array.from({ length: 24 }, (_, i) => i + 1).slice(startIndex, endIndex);
  };

  const handleImageClick = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    buttons.push(
      <button
        key="prev"
        className={styles.pageButton}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span>←</span>
      </button>
    );

    // First page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          className={`${styles.pageButton} ${currentPage === 1 ? styles.active : ''}`}
          onClick={() => handlePageChange(1)}
        >
          <span>1</span>
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="start-ellipsis" className={styles.ellipsis}>
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
          onClick={() => handlePageChange(i)}
        >
          <span>{i}</span>
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="end-ellipsis" className={styles.ellipsis}>
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          className={`${styles.pageButton} ${currentPage === totalPages ? styles.active : ''}`}
          onClick={() => handlePageChange(totalPages)}
        >
          <span>{totalPages}</span>
        </button>
      );
    }

    // Next button
    buttons.push(
      <button
        key="next"
        className={styles.pageButton}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>→</span>
      </button>
    );

    return buttons;
  };

  return (
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
          Best Gorakhpur Taxi
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
          <h2 className={styles.heading}>Welcome to Best Gorakhpur Taxi</h2>
          <p className={styles.text}>
          Since 2008, we have been providing top-quality service, we have proudly provided creative and reliable taxi services throughout Gorakhpur. Our mission is to deliver world-class car rentals with transparent pricing, modern vehicles, and well-trained, courteous drivers. We offer safe travel, on-time pickups, and a seamless online booking experience for every journey, big or small.
          </p>
          <div className={styles.stats}>
            <StatItem number={16} label="Years Experience" duration={1.5} />
            <StatItem number={12000} label="Happy Customers" duration={2} />
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
            {getVisibleImages().map((idx) => (
              <motion.div 
                className={styles.galleryImgWrapper}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                onClick={() => handleImageClick(`/assets/image/userimg/P${idx}.jpg`)}
              >
                <img 
                  src={`/assets/image/userimg/P${idx}.jpg`} 
                  alt={`Gallery ${idx}`} 
                  className={styles.galleryImg}
                />
              </motion.div>
            ))}
          </div>

          <div className={styles.pagination}>
            {renderPaginationButtons()}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.imagePopup}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePopup}
          >
            <motion.div 
              className={styles.popupContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={handleClosePopup}>
                ×
              </button>
              <img 
                src={selectedImage} 
                alt="Full size" 
                className={styles.popupImage}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WelcomeCarsSection;
