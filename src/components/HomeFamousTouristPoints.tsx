import React from 'react';
import { motion } from 'framer-motion';
import styles from './HomeFamousTouristPoints.module.css';

const touristPoints = [
  {
    id: 1,
    title: 'Pashupatinath Temple',
    description: 'One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River.',
    image: '/assets/image/famousTourist/FT_pashupati.jpg',
    location: 'Kathmandu',
    category: 'Religious',
    highlights: ['Ancient temple architecture']
  },
  {
    id: 2,
    title: 'Boudhanath Stupa',
    description: 'One of the largest stupas in the world and a UNESCO World Heritage Site.',
    image: '/assets/image/famousTourist/FT_boudhanath.jpg',
    location: 'Kathmandu',
    category: 'Religious',
    highlights: ['World\'s second largest stupa', 'Tibetan culture', 'Prayer wheels']
  },
  {
    id: 3,
    title: 'Bhaktapur Durbar Square',
    description: 'A UNESCO World Heritage Site featuring ancient palaces, temples, and traditional architecture.',
    image: '/assets/image/famousTourist/FT_Bhaktapur.jpg',
    location: '',
    category: 'Cultural',
    highlights: ['Ancient architecture']
  }
];

const HomeFamousTouristPoints = () => {
  return (
    <section className={styles.touristPoints}>
      <div className={styles.container}>
        <motion.div 
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <h2 className={styles.sectionTitle}>Famous Tourist Points</h2>
          <p className={styles.sectionSubtitle}>Discover the most beautiful and significant places in Nepal</p>
        </motion.div>

        <div className={styles.touristGrid}>
          {touristPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.touristCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className={styles.imageWrapper}>
                <img src={point.image} alt={point.title} className={styles.image} />
                {/* <div className={styles.overlay}>
                  <span className={styles.category}>{point.category}</span>
                </div> */}
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{point.title}</h3>
                <p className={styles.location}>{point.location}</p>
                <p className={styles.description}>{point.description}</p>
                <div className={styles.highlights}>
                  {point.highlights.map((highlight, i) => (
                    <span key={i} className={styles.highlight}>{highlight}</span>
                  ))}
                </div>
                {/* <a href={`/tourist-point/${point.id}`} className={styles.exploreButton}>
                  Explore More
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div 
          className={styles.viewAllButton}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <a href="/FamousTouristPoints" className={styles.button}>
            View All Tourist Points
          </a>
        </motion.div> */}
      </div>
    </section>
  );
};

export default HomeFamousTouristPoints; 