import React from 'react';
import { motion } from 'framer-motion';
import styles from './FamousTouristPoints.module.css';

const touristPoints = [
  {
    id: 1,
    title: 'Phewa Lake',
    description: 'The second largest lake in Nepal, offering stunning views of the Annapurna range and water activities.',
    image: '/assets/image/tourist-points/phewa-lake.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 2,
    title: 'Sarangkot',
    description: 'Famous viewpoint offering panoramic views of the Annapurna range and Pokhara Valley.',
    image: '/assets/image/tourist-points/sarangkot.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 3,
    title: 'Begnas Lake',
    description: 'A serene lake surrounded by hills, perfect for boating and relaxation.',
    image: '/assets/image/tourist-points/begnas-lake.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 4,
    title: 'Rupa Lake',
    description: 'A beautiful lake known for its tranquility and bird watching opportunities.',
    image: '/assets/image/tourist-points/rupa-lake.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 5,
    title: 'Bindhyabasini Temple',
    description: 'Ancient temple dedicated to Goddess Durga, offering panoramic views of Pokhara.',
    image: '/assets/image/tourist-points/bindhyabasini.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 6,
    title: 'International Mountain Museum',
    description: 'Museum showcasing the history of mountaineering in Nepal and the Himalayas.',
    image: '/assets/image/tourist-points/mountain-museum.jpg',
    location: 'Pokhara Valley'
  }
];

const FamousTouristPoints = () => {
  return (
    <section className={styles.touristPoints}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Famous Tourist Points</h2>
          <p className={styles.subtitle}>Discover the most popular attractions in Pokhara</p>
        </motion.div>

        <div className={styles.pointsGrid}>
          {touristPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.pointCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={point.image} alt={point.title} className={styles.pointImage} />
                <div className={styles.overlay}>
                  <span className={styles.location}>{point.location}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointDescription}>{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousTouristPoints; 