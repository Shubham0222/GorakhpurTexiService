import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './PokharaAdventures.module.css';

const pokharaActivities = [
  {
    id: 1,
    title: 'Tal Barahi Temple',
    description: 'Visit the sacred temple located in the middle of Phewa Lake, accessible by boat.',
    image: '/assets/image/adventure/pokhara/talbarahi.jpg',
    duration: '2-3 hours',
    difficulty: 'Easy',
    location: 'Phewa Lake, Pokhara',
    bestTime: 'October to May',
    details: [
      'Boat ride to the temple',
      'Religious significance',
      'Beautiful lake views',
      'Photography opportunities'
    ]
  },
  {
    id: 2,
    title: 'Gupteshwar Mahadev',
    description: 'Explore the sacred cave temple dedicated to Lord Shiva.',
    image: '/assets/image/adventure/pokhara/gupteshwar.jpg',
    duration: '1-2 hours',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Ancient cave temple',
      'Religious significance',
      'Natural cave formations',
      'Cultural experience'
    ]
  },
  {
    id: 3,
    title: 'Devi\'s Fall',
    description: 'Witness the spectacular waterfall where the Pardi Khola stream disappears underground.',
    image: '/assets/image/adventure/pokhara/devis-fall.jpg',
    duration: '1 hour',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Monsoon season',
    details: [
      'Spectacular waterfall',
      'Natural wonder',
      'Viewing platforms',
      'Photography spot'
    ]
  },
  {
    id: 4,
    title: 'World Peace Pagoda',
    description: 'Visit the Buddhist stupa offering panoramic views of Pokhara and the Annapurna range.',
    image: '/assets/image/adventure/pokhara/peace-pagoda.jpg',
    duration: '2-3 hours',
    difficulty: 'Moderate',
    location: 'Anadu Hill, Pokhara',
    bestTime: 'October to May',
    details: [
      'Buddhist stupa',
      'Panoramic views',
      'Hiking trail',
      'Sunrise/sunset views'
    ]
  },
  {
    id: 5,
    title: 'Pumdikot Shiva Statue',
    description: 'Visit the massive statue of Lord Shiva with breathtaking views of Pokhara.',
    image: '/assets/image/adventure/pokhara/shiva-statue.jpg',
    duration: '2-3 hours',
    difficulty: 'Easy',
    location: 'Pumdikot, Pokhara',
    bestTime: 'Year-round',
    details: [
      'Religious site',
      'Panoramic views',
      'Cultural significance',
      'Photography spot'
    ]
  },
  {
    id: 6,
    title: 'Vindhyavasini Temple',
    description: 'Explore the ancient temple dedicated to Goddess Vindhyavasini.',
    image: '/assets/image/adventure/pokhara/vindhyavasini.jpg',
    duration: '1-2 hours',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Ancient temple',
      'Religious significance',
      'Cultural experience',
      'Local traditions'
    ]
  },
  {
    id: 7,
    title: 'Mountain Museum',
    description: 'Learn about the history of mountaineering in Nepal and the Himalayas.',
    image: '/assets/image/adventure/pokhara/mountain-museum.jpg',
    duration: '1-2 hours',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Mountaineering history',
      'Educational experience',
      'Exhibits and artifacts',
      'Cultural insights'
    ]
  },
  {
    id: 8,
    title: 'Mahendra Cave',
    description: 'Explore the natural limestone cave with fascinating stalactites and stalagmites.',
    image: '/assets/image/adventure/pokhara/mahendra-cave.jpg',
    duration: '1 hour',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Natural cave formations',
      'Adventure experience',
      'Photography opportunities',
      'Guided tours available'
    ]
  },
  {
    id: 9,
    title: 'Bat Cave',
    description: 'Discover the unique cave system inhabited by bats and featuring natural formations.',
    image: '/assets/image/adventure/pokhara/bat-cave.jpg',
    duration: '1 hour',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Bat habitat',
      'Natural formations',
      'Adventure experience',
      'Guided tours'
    ]
  },
  {
    id: 10,
    title: 'Seti River',
    description: 'Experience the unique white river flowing through deep gorges in Pokhara.',
    image: '/assets/image/adventure/pokhara/seti-river.jpg',
    duration: '2-3 hours',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'River views',
      'Photography spot',
      'Natural wonder',
      'Scenic beauty'
    ]
  },
  {
    id: 11,
    title: 'Gurkha Museum',
    description: 'Learn about the history and achievements of the legendary Gurkha soldiers.',
    image: '/assets/image/adventure/pokhara/gurkha-museum.jpg',
    duration: '1-2 hours',
    difficulty: 'Easy',
    location: 'Pokhara Valley',
    bestTime: 'Year-round',
    details: [
      'Military history',
      'Cultural heritage',
      'Exhibits and artifacts',
      'Educational experience'
    ]
  }
];

const PokharaAdventures = () => {
  return (
    <section className={styles.pokharaAdventures}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Pokhara Adventures</h2>
          <p className={styles.subtitle}>Discover the wonders of Pokhara Valley</p>
        </motion.div>

        <div className={styles.activitiesGrid}>
          {pokharaActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={styles.activityCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/adventure/pokhara/${activity.id}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img src={activity.image} alt={activity.title} className={styles.activityImage} />
                  <div className={styles.overlay}>
                    <div className={styles.details}>
                      <span className={styles.duration}>{activity.duration}</span>
                      <span className={styles.difficulty}>{activity.difficulty}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.activityTitle}>{activity.title}</h3>
                  <p className={styles.activityDescription}>{activity.description}</p>
                  <div className={styles.metaInfo}>
                    <span className={styles.location}>{activity.location}</span>
                    <span className={styles.bestTime}>{activity.bestTime}</span>
                  </div>
                  <button className={styles.exploreButton}>Explore More</button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokharaAdventures; 