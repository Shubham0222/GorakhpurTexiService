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
    image: "/assets/image/destinations/lumbini.jpg",
    distance: "120 km from Gorakhpur",
    duration: "3-4 hours",
    bestTime: "October to March"
  },
  {
    id: 2,
    slug: "gorakhnath",
    title: "Gorakhpur to Gorakhnath Temple Taxi Service",
    description: "Ancient temple dedicated to Guru Gorakhnath",
    image: "/assets/image/destinations/gorakhnath-temple.jpg",
    distance: "2 km from city center",
    duration: "30 minutes",
    bestTime: "All year round"
  },
  {
    id: 3,
    slug: "pokhara",
    title: "Gorakhpur to Pokhara Taxi Service",
    description: "Nepal Tourist Route",
    image: "/assets/image/destinations/pokhara.jpg",
    distance: "385 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    id: 4,
    slug: "varanasi",
    title: "Gorakhpur to Varanasi Taxi Service",
    description: "Spiritual City",
    image: "/assets/image/destinations/varanasi.jpg",
    distance: "240 km from Gorakhpur",
    duration: "5-6 hours",
    bestTime: "October to March"
  },
  {
    id: 5,
    slug: "lucknow",
    title: "Gorakhpur to Lucknow Taxi Service",
    description: "Uttar Pradesh Capital",
    image: "/assets/image/destinations/lucknow.jpg",
    distance: "270 km from Gorakhpur",
    duration: "6-7 hours",
    bestTime: "October to March"
  },
  {
    id: 6,
    slug: "kathmandu",
    title: "Gorakhpur to Kathmandu Taxi Service",
    description: "Nepal Capital Transfer",
    image: "/assets/image/destinations/kathmandu.jpg",
    distance: "380 km from Gorakhpur",
    duration: "8-9 hours",
    bestTime: "October to May"
  },
  {
    slug: "ayodhya",
    title: "Gorakhpur to Ayodhya Taxi Service",
    desc: "Ram Janmabhoomi Route",
    image: "https://ayuryogpeeth.com/blog/wp-content/uploads/2024/03/1080p-ayodhya-ram-mandir-hd-wallpaper.png"
  },
  {
    slug: "sonauli",
    title: "Gorakhpur to Sonauli Taxi Service",
    desc: "India-Nepal Border Crossing",
    image: "https://www.gettyimages.com/photos/india-nepal-border"
  },
  {
    slug: "butwal",
    title: "Gorakhpur to Butwal Taxi Service",
    desc: "Gateway to Western Nepal",
    image: "https://unsplash.com/s/photos/butwal%2C-nepal"
  },
  {
    slug: "deoria",
    title: "Gorakhpur to Deoria Taxi Service",
    desc: "Eastern UP Town",
    image: "https://www.gettyimages.com/photos/deoria-district"
  },
  {
    slug: "bahraich",
    title: "Gorakhpur to Bahraich Taxi Service",
    desc: "Near Nepal Border",
    image: "https://bahraich.nic.in/photo-gallery/"
  },
  {
    slug: "gopalganj",
    title: "Gorakhpur to Gopalganj Taxi Service",
    desc: "Bihar Border Town",
    image: "https://www.gettyimages.com/photos/gopalganj-bihar"
  },
  {
    slug: "muzaffarpur",
    title: "Gorakhpur to Muzaffarpur Taxi Service",
    desc: "Litchi Capital of India",
    image: "https://www.shutterstock.com/search/muzaffarpur"
  },
  {
    slug: "prayagraj",
    title: "Gorakhpur to Prayagraj Taxi Service",
    desc: "Sangam City",
    image: "https://www.pexels.com/search/prayagraj/"
  },
  {
    slug: "patna",
    title: "Gorakhpur to Patna Taxi Service",
    desc: "Bihar Capital",
    image: "https://unsplash.com/s/photos/patna"
  },
  {
    slug: "ranchi",
    title: "Gorakhpur to Ranchi Taxi Service",
    desc: "Jharkhand Capital",
    image: "https://www.istockphoto.com/photos/ranchi"
  },
  {
    slug: "kolkata",
    title: "Gorakhpur to Kolkata Taxi Service",
    desc: "City of Joy",
    image: "https://unsplash.com/s/photos/kolkata"
  },
  {
    slug: "darjeeling-gangtok",
    title: "Gorakhpur to Darjeeling & Gangtok Taxi Service",
    desc: "Hill Station Tour",
    image: "https://unsplash.com/s/photos/darjeeling"
  },
  {
    slug: "noida",
    title: "Gorakhpur to Noida Taxi Service",
    desc: "Delhi NCR Business Hub",
    image: "https://unsplash.com/s/photos/noida"
  },
  {
    slug: "nainital",
    title: "Gorakhpur to Nainital Taxi Service",
    desc: "Lake District of India",
    image: "https://unsplash.com/s/photos/nainital%2C-india"
  },
  {
    slug: "char-dham",
    title: "Gorakhpur to Char Dham Taxi Service",
    desc: "Himalayan Pilgrimage",
    image: "https://www.istockphoto.com/photos/char-dham"
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