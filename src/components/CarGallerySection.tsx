import React from 'react';
import { motion } from 'framer-motion';
import styles from './CarGallerySection.module.css';
import { getWhatsAppLink } from '../utils/whatsapp';

const cars = [
  {
    id: 1,
    name: 'Dzire',
    image: '/assets/image/cars/dzire.jpg',
    category: 'Sedan',
    features: ['Comfortable seating', 'Air conditioning', 'Spacious trunk'],
    price: '₹2000/day'
  },
  {
    id: 2,
    name: 'Amaze',
    image: '/assets/image/cars/amaze.jpg',
    category: 'Sedan',
    features: ['Fuel efficient', 'Modern design', 'Smooth ride'],
    price: '₹2100/day'
  },
  {
    id: 3,
    name: 'Zest',
    image: '/assets/image/cars/zest.jpg',
    category: 'Sedan',
    features: ['Spacious interior', 'Good mileage', 'Comfort drive'],
    price: '₹2200/day'
  },
  {
    id: 4,
    name: 'Ertiga',
    image: '/assets/image/cars/ertiga.jpg',
    category: 'MUV',
    features: ['7 seats', 'Family friendly', 'Large boot'],
    price: '₹2500/day'
  },
  {
    id: 5,
    name: 'Innova',
    image: '/assets/image/cars/innova.jpg',
    category: 'MUV',
    features: ['8 seats', 'Premium comfort', 'Long trips'],
    price: '₹3000/day'
  },
  {
    id: 6,
    name: 'Chevrolet Tavera',
    image: '/assets/image/cars/tavera.jpg',
    category: 'SUV',
    features: ['9 seats', 'Spacious', 'Reliable for groups'],
    price: '₹2800/day'
  },
  {
    id: 7,
    name: 'Innova Crysta',
    image: '/assets/image/cars/innova-crysta.webp',
    category: 'MUV',
    features: ['Luxury interior', '8 seats', 'Smooth ride'],
    price: '₹3500/day'
  },
  {
    id: 8,
    name: 'Tempo Traveller',
    image: '/assets/image/cars/tempo-traveller.webp',
    category: 'Van',
    features: ['12-17 seats', 'Group travel', 'Spacious & comfortable'],
    price: '₹5000/day'
  },
  {
    id: 9,
    name: 'Tempo Urbania',
    image: '/assets/image/cars/tempo-urbania.jpg',
    category: 'Van',
    features: ['13-17 seats', 'Modern design', 'Luxury group travel'],
    price: '₹5500/day'
  }
];

const CarGallerySection = () => {
  return (
    <section className={styles.carGallery}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={styles.title}>Our Car Collection</h2>
          <p className={styles.subtitle}>Explore our premium fleet of vehicles</p>
        </motion.div>

        <div className={styles.galleryGrid}>
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              className={styles.carCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={car.image} alt={car.name} className={styles.carImage} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{car.category}</span>
                  <span className={styles.price}>{car.price}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.carName}>{car.name}</h3>
                <div className={styles.features}>
                  {car.features.map((feature, i) => (
                    <span key={i} className={styles.feature}>
                      <svg className={styles.checkIcon} viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
                <motion.a 
                  href={getWhatsAppLink('car', `Car: ${car.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                  <svg className={styles.arrowIcon} viewBox="0 0 24 24">
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <p className={styles.ctaText}>Looking for a specific vehicle?</p>
          <motion.button 
            className={styles.contactButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <svg className={styles.phoneIcon} viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CarGallerySection;
