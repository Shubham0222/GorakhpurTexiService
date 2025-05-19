import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './AdventureActivities.module.css';

const activities = [
  {
    id: 1,
    title: 'Paragliding',
    description: 'Experience the thrill of flying like a bird over the beautiful landscapes of Nepal.',
    image: '/assets/image/adventure/paragliding/Card.jpg'
  },
  {
    id: 2,
    title: 'Bungee Jumping',
    description: 'Take the ultimate leap of faith from one of the highest bungee jumping spots in the world.',
    image: '/assets/image/adventure/Bungee_Jumping/Card.jpg'
  },
  {
    id: 3,
    title: 'Trekking',
    description: 'Explore the majestic Himalayas through various trekking routes suitable for all levels.',
    image: '/assets/image/adventure/Trekking/Card.jpg'
  },
  {
    id: 4,
    title: 'Mountaineering',
    description: 'Challenge yourself with professional mountaineering expeditions in the Himalayas.',
    image: '/assets/image/adventure/Mountaineering/Card.jpg'
  },
  {
    id: 5,
    title: 'Rafting',
    description: 'Navigate through exciting rapids in Nepal\'s pristine rivers.',
    image: '/assets/image/adventure/Rafting/Card.jpg'
  },
  {
    id: 6,
    title: 'Jungle Safari',
    description: 'Experience wildlife through jeep safari, elephant safari, and walking safari in Nepal\'s national parks.',
    image: '/assets/image/adventure/Jungle_Safari/Card.jpg'
  },
  {
    id: 7,
    title: 'Mountain Biking',
    description: 'Ride through scenic trails and challenging terrains of Nepal.',
    image: '/assets/image/adventure/Mountain_Biking/Card.jpg'
  },
  {
    id: 8,
    title: 'Rock Climbing',
    description: 'Test your skills on natural rock formations and artificial climbing walls.',
    image: '/assets/image/adventure/Rock_Climbing/Card.jpg'
  },
  {
    id: 9,
    title: 'Zip-lining',
    description: 'Soar through the air on Nepal\'s longest and fastest zip lines.',
    image: '/assets/image/adventure/Zip-lining/Card.jpg'
  }
];

const AdventureActivities = () => {
  return (
    <section className={styles.adventureSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Adventure Activities in Nepal
        </motion.h2>
        <div className={styles.activitiesGrid}>
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className={styles.activityCard}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link to={`/adventure/${activity.id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={activity.image} alt={activity.title} className={styles.activityImage} />
                </div>
                <div className={styles.activityContent}>
                  <h3 className={styles.activityTitle}>{activity.title}</h3>
                  <p className={styles.activityDescription}>{activity.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureActivities; 