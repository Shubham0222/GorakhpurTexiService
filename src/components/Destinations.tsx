import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./Destinations.module.css";

const destinations = [
  {
    slug: "lumbini",
    title: "Gorakhpur to Lumbini Taxi Service",
    desc: "Nepal Pilgrim Transfer",
    image: "/assets/image/destinations/lumbini.jpg"
  },
  {
    slug: "gorakhnath",
    title: "Gorakhpur to Gorakhnath Temple Taxi Service",
    desc: "Ancient temple dedicated to Guru Gorakhnath",
    image: "/assets/image/destinations/gorakhnath-temple.jpg"
  },
  {
    slug: "pokhara",
    title: "Gorakhpur to Pokhara Taxi Service",
    desc: "Nepal Tourist Route",
    image: "/assets/image/destinations/pokhara.jpg"
  },
  {
    slug: "varanasi",
    title: "Gorakhpur to Varanasi Taxi Service",
    desc: "Spiritual City",
    image: "/assets/image/destinations/varanasi.jpg"
  },
  {
    slug: "lucknow",
    title: "Gorakhpur to Lucknow Taxi Service",
    desc: "Uttar Pradesh Capital",
    image: "/assets/image/destinations/lucknow.jpg"
  },
  {
    slug: "kathmandu",
    title: "Gorakhpur to Kathmandu Taxi Service",
    desc: "Nepal Capital Transfer",
    image: "https://t4.ftcdn.net/jpg/03/10/24/63/360_F_310246341_869grfwR1b87MN3qyFPe6yZZIRC83X31.jpg"
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
    <main className={styles.main}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={styles.title}
      >
        Popular Destinations
      </motion.h2>
      <ul className={styles.grid}>
        {destinations.map((item, idx) => (
          <Link to={`/destinations/${item.slug}`} key={item.slug} style={{ textDecoration: 'none' }}>
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <img src={item.image} alt={item.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <strong className={styles.cardTitle}>{item.title}</strong>
                <span className={styles.cardDesc}>{item.desc}</span>
              </div>
            </motion.li>
          </Link>
        ))}
      </ul>
    </main>
  );
};

export default Destinations; 