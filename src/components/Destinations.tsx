import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Destinations.module.css";

const destinations = [
  {
    id: 1,
    slug: "lumbini",
    title: "Gorakhpur to Lumbini Taxi Service",
    description: "Nepal Pilgrim Transfer",
    image: "/assets/image/popularDestination/PD_Lumbini.jpg",
    distance: "120 km from Gorakhpur",
    duration: "3-4 hours",
    bestTime: "October to March"
  },
  {
    id: 2,
    slug: "gorakhnath",
    title: "Gorakhpur to Gorakhnath Temple Taxi Service",
    description: "Ancient temple dedicated to Guru Gorakhnath",
    image: "/assets/image/popularDestination/PD_Gorakhnath.jpg",
    distance: "2 km from city center",
    duration: "30 minutes",
    bestTime: "All year round"
  },
  {
    id: 3,
    slug: "pokhara",
    title: "Gorakhpur to Pokhara Taxi Service",
    description: "Nepal Tourist Route",
    image: "/assets/image/popularDestination/PD_Pokhara.jpg",
    distance: "385 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    id: 4,
    slug: "varanasi",
    title: "Gorakhpur to Varanasi Taxi Service",
    description: "Spiritual City",
    image: "/assets/image/popularDestination/PD_Varanasi.jpg",
    distance: "240 km from Gorakhpur",
    duration: "5-6 hours",
    bestTime: "October to March"
  },
  {
    id: 5,
    slug: "lucknow",
    title: "Gorakhpur to Lucknow Taxi Service",
    description: "Uttar Pradesh Capital",
    image: "/assets/image/popularDestination/PD_Lucknow.jpg",
    distance: "270 km from Gorakhpur",
    duration: "6-7 hours",
    bestTime: "October to March"
  },
  {
    id: 6,
    slug: "kathmandu",
    title: "Gorakhpur to Kathmandu Taxi Service",
    description: "Nepal Capital Transfer",
    image: "/assets/image/popularDestination/PD_Kathmandu.jpg",
    distance: "380 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    id: 7,
    slug: "ayodhya",
    title: "Gorakhpur to Ayodhya Taxi Service",
    description: "Ram Janmabhoomi Route",
    image: "/assets/image/popularDestination/PD_Ayodhya.jpg",
    distance: "150 km from Gorakhpur",
    duration: "4-5 hours",
    bestTime: "October to March"
  },
  {
    id: 8,
    slug: "sonauli",
    title: "Gorakhpur to Sonauli Taxi Service",
    description: "India-Nepal Border Crossing",
    image: "/assets/image/popularDestination/PD_Sonauli.jpg",
    distance: "85 km from Gorakhpur",
    duration: "2-3 hours",
    bestTime: "October to May"
  },
  {
    id: 9,
    slug: "butwal",
    title: "Gorakhpur to Butwal Taxi Service",
    description: "Gateway to Western Nepal",
    image: "/assets/image/popularDestination/PD_Butwal.jpg",
    distance: "180 km from Gorakhpur",
    duration: "4-5 hours",
    bestTime: "October to May"
  },
  {
    id: 13,
    slug: "muzaffarpur",
    title: "Gorakhpur to Muzaffarpur Taxi Service",
    description: "Litchi Capital of India",
    image: "/assets/image/popularDestination/PD_Muzaffarpur.jpg",
    distance: "200 km from Gorakhpur",
    duration: "5-6 hours",
    bestTime: "October to March"
  },
  {
    id: 14,
    slug: "prayagraj",
    title: "Gorakhpur to Prayagraj Taxi Service",
    description: "Sangam City",
    image: "/assets/image/popularDestination/PD_Prayagraj.jpg",
    distance: "280 km from Gorakhpur",
    duration: "6-7 hours",
    bestTime: "October to March"
  },
  {
    id: 15,
    slug: "patna",
    title: "Gorakhpur to Patna Taxi Service",
    description: "Bihar Capital",
    image: "/assets/image/destinations/patna.jpg",
    distance: "320 km from Gorakhpur",
    duration: "7-8 hours",
    bestTime: "October to March"
  },
  {
    id: 16,
    slug: "ranchi",
    title: "Gorakhpur to Ranchi Taxi Service",
    description: "Jharkhand Capital",
    image: "/assets/image/destinations/ranchi.jpg",
    distance: "450 km from Gorakhpur",
    duration: "10-11 hours",
    bestTime: "October to March"
  },
  {
    id: 17,
    slug: "kolkata",
    title: "Gorakhpur to Kolkata Taxi Service",
    description: "City of Joy",
    image: "/assets/image/destinations/kolkata.jpg",
    distance: "650 km from Gorakhpur",
    duration: "14-15 hours",
    bestTime: "October to March"
  },
  {
    id: 18,
    slug: "darjeeling-gangtok",
    title: "Gorakhpur to Darjeeling & Gangtok Taxi Service",
    description: "Hill Station Tour",
    image: "/assets/image/destinations/darjeeling.jpg",
    distance: "550 km from Gorakhpur",
    duration: "12-13 hours",
    bestTime: "October to May"
  },
  {
    id: 19,
    slug: "noida",
    title: "Gorakhpur to Noida Taxi Service",
    description: "Delhi NCR Business Hub",
    image: "/assets/image/destinations/noida.jpg",
    distance: "750 km from Gorakhpur",
    duration: "15-16 hours",
    bestTime: "October to March"
  },
  {
    id: 20,
    slug: "nainital",
    title: "Gorakhpur to Nainital Taxi Service",
    description: "Lake District of India",
    image: "/assets/image/destinations/nainital.jpg",
    distance: "400 km from Gorakhpur",
    duration: "9-10 hours",
    bestTime: "October to May"
  },
  {
    id: 21,
    slug: "char-dham",
    title: "Gorakhpur to Char Dham Taxi Service",
    description: "Himalayan Pilgrimage",
    image: "/assets/image/destinations/char-dham.jpg",
    distance: "500 km from Gorakhpur",
    duration: "11-12 hours",
    bestTime: "May to June, September to October"
  }
];

const Destinations = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Popular Destinations</h2>
          <p className={styles.subtitle}>Explore our most popular taxi routes from Gorakhpur</p>
        </motion.div>

        <div className={styles.destinationsGrid}>
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              className={styles.destinationCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/destinations/${destination.slug}`} className={styles.cardLink}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={destination.image} 
                    alt={destination.title}
                    className={styles.image}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.details}>
                      <span className={styles.duration}>{destination.duration}</span>
                      <span className={styles.distance}>{destination.distance}</span>
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3 className={styles.destinationTitle}>{destination.title}</h3>
                  <p className={styles.description}>{destination.description}</p>
                  <div className={styles.metaInfo}>
                    <span className={styles.bestTime}>Best Time: {destination.bestTime}</span>
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

export default Destinations; 