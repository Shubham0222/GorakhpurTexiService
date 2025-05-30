import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './AdventureActivities.module.css';

const activities = [
  {
    id: 1,
    title: 'Paragliding',
    description: 'Experience the thrill of flying like a bird over the beautiful landscapes of Nepal.',
    image: '/assets/image/adventure/paragliding/P1_Paragliding.jpg',
    duration: '1-2 hours',
    difficulty: 'Beginner friendly',
    location: 'Pokhara, Nepal',
    bestTime: 'September to November',
    details: [
      'Professional instructors and safety equipment provided',
      'Breathtaking views of the Annapurna range',
      'Perfect for beginners and experienced flyers',
      'Video and photo packages available'
    ]
  },
  {
    id: 2,
    title: 'Bungee Jumping',
    description: 'Take the ultimate leap of faith from one of the highest bungee jumping spots in the world.',
    image: '/assets/image/adventure/Bungee_Jumping/P1.jpg',
    duration: '2-3 hours',
    difficulty: 'Moderate',
    location: 'Kushma, Nepal',
    bestTime: 'October to May',
    details: [
      '160m drop from suspension bridge',
      'Professional safety equipment',
      'Video and photo packages',
      'Certified instructors'
    ]
  },
  {
    id: 3,
    title: 'Trekking',
    description: 'Explore the majestic Himalayas through various trekking routes suitable for all levels.',
    image: '/assets/image/adventure/Trekking/P1.jpg',
    duration: '4-15 days',
    difficulty: 'Moderate to Hard',
    location: 'Various locations in Nepal',
    bestTime: 'March to May, September to November',
    details: [
      'Experienced trekking guides',
      'Tea house accommodations',
      'Permits and documentation',
      'Porters available'
    ]
  },
  {
    id: 4,
    title: 'Mountaineering',
    description: 'Challenge yourself with professional mountaineering expeditions in the Himalayas.',
    image: '/assets/image/adventure/Mountaineering/mounting.jpg',
    duration: '10-30 days',
    difficulty: 'Advanced',
    location: 'Various peaks in Nepal',
    bestTime: 'April to May, September to October',
    details: [
      'Professional mountain guides',
      'Technical equipment provided',
      'Acclimatization programs',
      'Expedition support'
    ]
  },
  {
    id: 5,
    title: 'Rafting',
    description: 'Navigate through exciting rapids in Nepal\'s pristine rivers.',
    image: '/assets/image/adventure/Rafting/rafting.jpg',
    duration: '1-3 days',
    difficulty: 'Moderate',
    location: 'Trishuli, Bhote Koshi, Kali Gandaki',
    bestTime: 'October to May',
    details: [
      'Professional rafting guides',
      'Safety equipment provided',
      'Riverside camping options',
      'Multi-day expeditions available'
    ]
  },
  {
    id: 6,
    title: 'Jungle Safari',
    description: 'Experience wildlife through jeep safari, elephant safari, and walking safari in Nepal\'s national parks.',
    image: '/assets/image/adventure/Jungle_Safari/jungle-safari.jpg',
    duration: '1-3 days',
    difficulty: 'Easy',
    location: 'Chitwan, Bardia National Parks',
    bestTime: 'October to March',
    details: [
      'Professional naturalist guides',
      'Luxury lodge accommodations',
      'Wildlife viewing opportunities',
      'Cultural experiences included'
    ]
  },
  {
    id: 7,
    title: 'Mountain Biking',
    description: 'Ride through scenic trails and challenging terrains of Nepal.',
    image: '/assets/image/adventure/Mountain_Biking/mountain-biking.jpg',
    duration: 'Half-day to multi-day',
    difficulty: 'Moderate to Advanced',
    location: 'Kathmandu Valley, Mustang, Pokhara',
    bestTime: 'October to April',
    details: [
      'High-quality mountain bikes',
      'Professional cycling guides',
      'Support vehicle available',
      'Customizable routes'
    ]
  },
  {
    id: 8,
    title: 'Rock Climbing',
    description: 'Test your skills on natural rock formations and artificial climbing walls.',
    image: '/assets/image/adventure/Rock_Climbing/rock-climbing.jpg',
    duration: '2-4 hours',
    difficulty: 'Beginner to Advanced',
    location: 'Nagarjun Forest, Hattiban',
    bestTime: 'All year round',
    details: [
      'Certified instructors',
      'Safety equipment provided',
      'Various difficulty levels',
      'Indoor and outdoor options'
    ]
  },
  {
    id: 9,
    title: 'Zip-lining',
    description: 'Soar through the air on Nepal\'s longest and fastest zip lines.',
    image: '/assets/image/adventure/Zip-lining/zip-lining.jpg',
    duration: '1-2 hours',
    difficulty: 'Easy',
    location: 'Sarangkot, Pokhara',
    bestTime: 'All year round',
    details: [
      '1.8 km zip line course',
      'Professional safety equipment',
      'Breathtaking mountain views',
      'Photo and video packages'
    ]
  }
];

const AdventureActivities = () => {
  return (
    <section className={styles.adventureSection}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Adventure Activities in Nepal</h2>
          <p className={styles.subtitle}>Experience the thrill of Nepal's most exciting adventures</p>
        </motion.div>

        <div className={styles.activitiesGrid}>
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className={styles.activityCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

export default AdventureActivities; 