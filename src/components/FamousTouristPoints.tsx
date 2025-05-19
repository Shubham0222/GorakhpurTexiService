import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styles from './FamousTouristPoints.module.css';

const touristPoints = [
  {
    id: 1,
    title: 'Pashupatinath Temple',
    description: 'One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River.',
    image: '/assets/image/tourist/pashupatinath.jpg',
    location: 'Kathmandu',
    category: 'Religious',
    highlights: [
      'Ancient temple architecture',
      'Sacred cremation ghats',
      'Spiritual atmosphere',
      'UNESCO World Heritage Site'
    ]
  },
  {
    id: 2,
    title: 'Guheswari Temple',
    description: 'A sacred temple dedicated to Goddess Guheswari, one of the most important Shakti Peethas.',
    image: '/assets/image/tourist/guheswari.jpg',
    location: 'Kathmandu',
    category: 'Religious',
    highlights: [
      'Ancient temple',
      'Religious significance',
      'Cultural heritage',
      'Spiritual experience'
    ]
  },
  {
    id: 3,
    title: 'Bhaktapur Durbar Square',
    description: 'A UNESCO World Heritage Site featuring ancient palaces, temples, and traditional architecture.',
    image: '/assets/image/tourist/bhaktapur.jpg',
    location: 'Bhaktapur',
    category: 'Cultural',
    highlights: [
      'Ancient architecture',
      'Traditional pottery',
      'Cultural heritage',
      'Local crafts'
    ]
  },
  {
    id: 4,
    title: 'Thamel',
    description: 'The vibrant tourist hub of Kathmandu, known for its shops, restaurants, and nightlife.',
    image: '/assets/image/tourist/thamel.jpg',
    location: 'Kathmandu',
    category: 'Urban',
    highlights: [
      'Shopping district',
      'Local cuisine',
      'Nightlife',
      'Cultural diversity'
    ]
  },
  {
    id: 5,
    title: 'Muktinath Temple',
    description: 'A sacred temple for both Hindus and Buddhists, located at an altitude of 3,710 meters.',
    image: '/assets/image/tourist/muktinath.jpg',
    location: 'Mustang',
    category: 'Religious',
    highlights: [
      'High altitude temple',
      'Natural springs',
      'Mountain views',
      'Spiritual significance'
    ]
  },
  {
    id: 6,
    title: 'Jomsom',
    description: 'A beautiful town in the Mustang region, known for its apple orchards and mountain views.',
    image: '/assets/image/tourist/jomsom.jpg',
    location: 'Mustang',
    category: 'Natural',
    highlights: [
      'Apple orchards',
      'Mountain scenery',
      'Local culture',
      'Trekking routes'
    ]
  },
  {
    id: 7,
    title: 'Upper & Lower Mustang',
    description: 'The hidden kingdom of Mustang, featuring ancient monasteries and unique landscapes.',
    image: '/assets/image/tourist/mustang.jpg',
    location: 'Mustang',
    category: 'Cultural',
    highlights: [
      'Ancient monasteries',
      'Desert landscape',
      'Tibetan culture',
      'Trekking paradise'
    ]
  },
  {
    id: 8,
    title: 'Gupteshwar Mahadev',
    description: 'A sacred cave temple dedicated to Lord Shiva, featuring natural formations.',
    image: '/assets/image/tourist/gupteshwar.jpg',
    location: 'Pokhara',
    category: 'Religious',
    highlights: [
      'Cave temple',
      'Natural formations',
      'Religious significance',
      'Spiritual experience'
    ]
  },
  {
    id: 9,
    title: 'Pumdikot Shiva Statue',
    description: 'A massive statue of Lord Shiva with panoramic views of Pokhara valley.',
    image: '/assets/image/tourist/pumdikot.jpg',
    location: 'Pokhara',
    category: 'Religious',
    highlights: [
      'Giant statue',
      'Panoramic views',
      'Sunset views',
      'Photography spot'
    ]
  },
  {
    id: 10,
    title: 'World Peace Pagoda',
    description: 'A Buddhist stupa offering panoramic views of Pokhara and the Annapurna range.',
    image: '/assets/image/tourist/peace-pagoda.jpg',
    location: 'Pokhara',
    category: 'Religious',
    highlights: [
      'Buddhist stupa',
      'Panoramic views',
      'Peaceful atmosphere',
      'Sunrise/sunset views'
    ]
  },
  {
    id: 11,
    title: 'Boudhanath Stupa',
    description: 'One of the largest stupas in the world and a UNESCO World Heritage Site.',
    image: '/assets/image/tourist/boudhanath.jpg',
    location: 'Kathmandu',
    category: 'Religious',
    highlights: [
      'World\'s second largest stupa',
      'Tibetan culture',
      'Prayer wheels',
      'Monasteries'
    ]
  },
  {
    id: 12,
    title: 'Janaki Mandir',
    description: 'The birthplace of Goddess Sita, featuring beautiful architecture and religious significance.',
    image: '/assets/image/tourist/janaki.jpg',
    location: 'Janakpur',
    category: 'Religious',
    highlights: [
      'Ancient temple',
      'Religious significance',
      'Beautiful architecture',
      'Cultural heritage'
    ]
  },
  {
    id: 13,
    title: 'Madimandap',
    description: 'The sacred site where Lord Ram and Goddess Sita were married.',
    image: '/assets/image/tourist/madimandap.jpg',
    location: 'Janakpur',
    category: 'Religious',
    highlights: [
      'Wedding site',
      'Religious significance',
      'Cultural heritage',
      'Historical importance'
    ]
  },
  {
    id: 14,
    title: 'Dhanush Dham',
    description: 'The sacred site where Lord Ram broke Lord Shiva\'s bow.',
    image: '/assets/image/tourist/dhanush.jpg',
    location: 'Janakpur',
    category: 'Religious',
    highlights: [
      'Religious significance',
      'Historical site',
      'Cultural heritage',
      'Spiritual importance'
    ]
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
          <p className={styles.subtitle}>Discover the most beautiful and significant places in Nepal</p>
        </motion.div>

        <div className={styles.filterContainer}>
          <motion.div 
            className={styles.filters}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className={`${styles.filterButton} ${styles.active}`}>All</button>
            <button className={styles.filterButton}>Religious</button>
            <button className={styles.filterButton}>Cultural</button>
            <button className={styles.filterButton}>Natural</button>
          </motion.div>
        </div>

        <div className={styles.grid}>
          {touristPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={point.image} alt={point.title} className={styles.image} />
                <div className={styles.overlay}>
                  <span className={styles.category}>{point.category}</span>
                </div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.location}>{point.location}</p>
                <p className={styles.description}>{point.description}</p>
                <div className={styles.highlights}>
                  {point.highlights.map((highlight, i) => (
                    <span key={i} className={styles.highlight}>{highlight}</span>
                  ))}
                </div>
                <Link to={`/tourist-point/${point.id}`} className={styles.exploreButton}>
                  Explore More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamousTouristPoints; 