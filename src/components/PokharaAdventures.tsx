import React from 'react';
import { motion } from 'framer-motion';
import styles from './PokharaAdventures.module.css';

const pokharaActivities = [
  {
    id: 1,
    title: 'Tal Barahi Temple',
    description: 'Visit the sacred temple located in the middle of Phewa Lake, accessible by boat.',
    image: '/assets/image/adventure/pokhara/talbarahi.jpg',
    location: 'Phewa Lake, Pokhara'
  },
  {
    id: 2,
    title: 'Gupteshwar Mahadev',
    description: 'Explore the sacred cave temple dedicated to Lord Shiva.',
    image: '/assets/image/adventure/pokhara/gupteshwar.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 3,
    title: 'Devi\'s Fall',
    description: 'Witness the spectacular waterfall where the Pardi Khola stream disappears underground.',
    image: '/assets/image/adventure/pokhara/devis-fall.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 4,
    title: 'World Peace Pagoda',
    description: 'Visit the Buddhist stupa offering panoramic views of Pokhara and the Annapurna range.',
    image: '/assets/image/adventure/pokhara/peace-pagoda.jpg',
    location: 'Anadu Hill, Pokhara'
  },
  {
    id: 5,
    title: 'Pumdikot Shiva Statue',
    description: 'Visit the massive statue of Lord Shiva with breathtaking views of Pokhara.',
    image: '/assets/image/adventure/pokhara/shiva-statue.jpg',
    location: 'Pumdikot, Pokhara'
  },
  {
    id: 6,
    title: 'Vindhyavasini Temple',
    description: 'Explore the ancient temple dedicated to Goddess Vindhyavasini.',
    image: '/assets/image/adventure/pokhara/vindhyavasini.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 7,
    title: 'Mountain Museum',
    description: 'Learn about the history of mountaineering in Nepal and the Himalayas.',
    image: '/assets/image/adventure/pokhara/mountain-museum.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 8,
    title: 'Mahendra Cave',
    description: 'Explore the natural limestone cave with fascinating stalactites and stalagmites.',
    image: '/assets/image/adventure/pokhara/mahendra-cave.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 9,
    title: 'Bat Cave',
    description: 'Discover the unique cave system inhabited by bats and featuring natural formations.',
    image: '/assets/image/adventure/pokhara/bat-cave.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 10,
    title: 'Seti River',
    description: 'Experience the unique white river flowing through deep gorges in Pokhara.',
    image: '/assets/image/adventure/pokhara/seti-river.jpg',
    location: 'Pokhara Valley'
  },
  {
    id: 11,
    title: 'Gurkha Museum',
    description: 'Learn about the history and achievements of the legendary Gurkha soldiers.',
    image: '/assets/image/adventure/pokhara/gurkha-museum.jpg',
    location: 'Pokhara Valley'
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
              <div className={styles.imageWrapper}>
                <img src={activity.image} alt={activity.title} className={styles.activityImage} />
                <div className={styles.overlay}>
                  <span className={styles.location}>{activity.location}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.activityTitle}>{activity.title}</h3>
                <p className={styles.activityDescription}>{activity.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PokharaAdventures; 