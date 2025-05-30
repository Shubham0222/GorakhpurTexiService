import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './AdventurePreview.module.css';

const featuredActivities = [
  {
    id: 1,
    title: 'Paragliding',
    description: 'Experience the thrill of flying like a bird over the beautiful landscapes of Nepal.',
    image: '/assets/image/adventure/paragliding/P1_Paragliding.jpg',
    duration: '1-2 hours',
    difficulty: 'Beginner friendly'
  },
  {
    id: 2,
    title: 'Bungee Jumping',
    description: 'Take the ultimate leap of faith from one of the highest bungee jumping spots in the world.',
    image: '/assets/image/adventure/Bungee_Jumping/P1.jpg',
    duration: '2-3 hours',
    difficulty: 'Moderate'
  },
  {
    id: 3,
    title: 'Trekking',
    description: 'Explore the majestic Himalayas through various trekking routes suitable for all levels.',
    image: '/assets/image/adventure/Trekking/P1.jpg',
    duration: '4-5 days',
    difficulty: 'Moderate'
  }
];

const AdventurePreview = () => {
  return (
    <section className={styles.adventurePreview}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Adventure Activities</h2>
          <p className={styles.subtitle}>Experience the thrill of Nepal's most exciting adventures</p>
        </motion.div>

        <div className={styles.activitiesGrid}>
          {featuredActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={styles.activityCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={`/adventure/${activity.id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={activity.image} alt={activity.title} className={styles.activityImage} />
                  {/* <div className={styles.overlay}>
                    <div className={styles.details}>
                      <span className={styles.duration}>{activity.duration}</span>
                      <span className={styles.difficulty}>{activity.difficulty}</span>
                    </div>
                  </div> */}
                </div>
                <div className={styles.content}>
                  <h3 className={styles.activityTitle}>{activity.title}</h3>
                  <p className={styles.activityDescription}>{activity.description}</p>
                  <button className={styles.exploreButton}>Explore More</button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className={styles.viewAll}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link to="/adventure" className={styles.viewAllButton}>
            View All Adventures
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AdventurePreview; 