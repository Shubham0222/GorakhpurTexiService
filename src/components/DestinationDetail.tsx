import React from 'react';
import { motion } from 'framer-motion';
import styles from './DestinationDetail.module.css';

interface DestinationDetailProps {
  title: string;
  description: string;
  places: string[];
  terms: string[];
  image?: string;
}

const DestinationDetail: React.FC<DestinationDetailProps> = ({ title, description, places, terms, image }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {image && (
          <motion.img
            src={image}
            alt={title}
            className={styles.image}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {description}
        </motion.p>
        <motion.div
          className={styles.subsection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <h3 className={styles.subtitle}>Places to Visit in {title.split(' to ')[1] || title}:</h3>
          <ul className={styles.list}>
            {places.map((place, idx) => (
              <motion.li
                key={idx}
                className={styles.listItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.03 }}
              >
                {place}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className={styles.subsection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className={styles.subtitle}>Terms & Conditions*</h3>
          <ul className={styles.list}>
            {terms.map((term, idx) => (
              <motion.li
                key={idx}
                className={styles.listItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + idx * 0.03 }}
              >
                {term}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// Example usage for Lumbini
export const LumbiniDetail = () => (
  <DestinationDetail
    title="Gorakhpur to Lumbini Taxi Service"
    description="Lumbini Province is a province in western Nepal. The country's third largest province in terms of area as well as population, Lumbini is home to the World Heritage Site of Lumbini, where according to the Buddhist tradition, the founder of Buddhism, Gautama Buddha was born."
    image="/assets/image/destinations/lumbini.jpg"
    places={[
      'Maya Devi Temple',
      'Bodhi Tree',
      'Ashoka Pillar',
      'Lumbini Museum',
      'China Temple',
      'Royal Thai Monastery',
      'Dae Sung Shakya',
      'Eternal Peace Flame',
      'Myanmar Golden Monastery',
      'Kapilvastu',
      'Kudan Stupa',
      'World Peace Pagoda',
      'Lumbini Development Zone',
      'Lumbini Crane Sanctuary',
    ]}
    terms={[
      'If you are returning in same day then we will give you best possible discount',
      'Minimum Limit per day 250 KM',
      'Driver Allowance - Rs.250/Day',
      'Charge will be applicable garage to garage',
      'Toll and parking extra',
      'UP and Hariyana for state tax Free (Other state will be applicable)',
      'If you are choosing our service for only dropping then we will give you more discounted price',
    ]}
  />
);

export default DestinationDetail; 