import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './PopularDestinationsHome.module.css';

const destinations = [
  {
    id: 1,
    slug: "lumbini",
    name: "Gorakhpur to Lumbini Taxi Service",
    image: "/assets/image/popularDestination/PD_Lumbini.jpg",
    description: "Nepal Pilgrim Transfer",
    distance: "120 km from Gorakhpur"
  },
  {
    id: 2,
    slug: "gorakhnath",
    name: "Gorakhpur to Gorakhnath Temple Taxi Service",
    image: "/assets/image/popularDestination/PD_Gorakhnath.jpg",
    description: "Ancient temple dedicated to Guru Gorakhnath",
    distance: "2 km from city center"
  },
  {
    id: 3,
    slug: "pokhara",
    name: "Gorakhpur to Pokhara Taxi Service",
    image: "/assets/image/popularDestination/PD_Pokhara.jpg",
    description: "Nepal Tourist Route",
    distance: "385 km from Gorakhpur"
  },
  {
    id: 4,
    slug: "varanasi",
    name: "Gorakhpur to Varanasi Taxi Service",
    image: "/assets/image/popularDestination/PD_Varanasi.jpg",
    description: "Spiritual City",
    distance: "240 km from Gorakhpur"
  },
  {
    id: 5,
    slug: "lucknow",
    name: "Gorakhpur to Lucknow Taxi Service",
    image: "/assets/image/popularDestination/PD_Lucknow.jpg",
    description: "Uttar Pradesh Capital",
    distance: "270 km from Gorakhpur"
  },
  {
    id: 6,
    slug: "kathmandu",
    name: "Gorakhpur to Kathmandu Taxi Service",
    image: "/assets/image/popularDestination/PD_Kathmandu.jpg",
    description: "Nepal Capital Transfer",
    distance: "380 km from Gorakhpur"
  }
];

const PopularDestinationsHome = () => {
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
          <h2 className={styles.title}>Popular Destinations</h2>
          <p className={styles.subtitle}>Explore the best places in Gorakhpur</p>
        </motion.div>

        <div className={styles.destinationsGrid}>
          {destinations.map((destination, index) => (
            <Link to={`/destinations/${destination.slug}`} key={destination.id} style={{ textDecoration: 'none' }}>
              <motion.div
                className={styles.destinationCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className={styles.imageWrapper}>
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <span className={styles.distance}>{destination.distance}</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.name}>{destination.name}</h3>
                  <p className={styles.description}>{destination.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div 
          className={styles.viewAllWrapper}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Link to="/destinations" className={styles.viewAllButton}>
            View All Destinations
            <svg className={styles.arrowIcon} viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinationsHome; 