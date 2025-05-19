import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

// Import destinations data
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
    id: 7,
    slug: "ayodhya",
    title: "Gorakhpur to Ayodhya Taxi Service",
    description: "Ram Janmabhoomi Route",
    image: "/assets/image/destinations/ayodhya.jpg"
  },
  {
    id: 8,
    slug: "sonauli",
    title: "Gorakhpur to Sonauli Taxi Service",
    description: "India-Nepal Border Crossing",
    image: "/assets/image/destinations/sonauli.jpg"
  },
  {
    id: 9,
    slug: "butwal",
    title: "Gorakhpur to Butwal Taxi Service",
    description: "Gateway to Western Nepal",
    image: "/assets/image/destinations/butwal.jpg"
  },
  {
    id: 10,
    slug: "deoria",
    title: "Gorakhpur to Deoria Taxi Service",
    description: "Eastern UP Town",
    image: "/assets/image/destinations/deoria.jpg"
  },
  {
    id: 11,
    slug: "bahraich",
    title: "Gorakhpur to Bahraich Taxi Service",
    description: "Near Nepal Border",
    image: "/assets/image/destinations/bahraich.jpg"
  },
  {
    id: 12,
    slug: "gopalganj",
    title: "Gorakhpur to Gopalganj Taxi Service",
    description: "Bihar Border Town",
    image: "/assets/image/destinations/gopalganj.jpg"
  },
  {
    id: 13,
    slug: "muzaffarpur",
    title: "Gorakhpur to Muzaffarpur Taxi Service",
    description: "Litchi Capital of India",
    image: "/assets/image/destinations/muzaffarpur.jpg"
  },
  {
    id: 14,
    slug: "prayagraj",
    title: "Gorakhpur to Prayagraj Taxi Service",
    description: "Sangam City",
    image: "/assets/image/destinations/prayagraj.jpg"
  },
  {
    id: 15,
    slug: "patna",
    title: "Gorakhpur to Patna Taxi Service",
    description: "Bihar Capital",
    image: "/assets/image/destinations/patna.jpg"
  },
  {
    id: 16,
    slug: "ranchi",
    title: "Gorakhpur to Ranchi Taxi Service",
    description: "Jharkhand Capital",
    image: "/assets/image/destinations/ranchi.jpg"
  },
  {
    id: 17,
    slug: "kolkata",
    title: "Gorakhpur to Kolkata Taxi Service",
    description: "City of Joy",
    image: "/assets/image/destinations/kolkata.jpg"
  },
  {
    id: 19,
    slug: "noida",
    title: "Gorakhpur to Noida Taxi Service",
    description: "Delhi NCR Business Hub",
    image: "/assets/image/destinations/noida.jpg"
  },
  {
    id: 20,
    slug: "nainital",
    title: "Gorakhpur to Nainital Taxi Service",
    description: "Lake District of India",
    image: "/assets/image/destinations/nainital.jpg"
  },
  {
    id: 21,
    slug: "char-dham",
    title: "Gorakhpur to Char Dham Taxi Service",
    description: "Himalayan Pilgrimage",
    image: "/assets/image/destinations/char-dham.jpg"
  }
];

const Footer: React.FC = () => {
  // Split destinations into three sections
  const popularDestinations = destinations.slice(0, 6);
  const moreDestinations = destinations.slice(6, 12);
  const additionalDestinations = destinations.slice(12);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandSection}>
            <div className={styles.logoContainer}>
              <img 
                src="/assets/image/logo.jpg" 
                alt="Gorakhpur Taxi Service Logo" 
                className={styles.logo}
              />
            </div>
            <h2 className={styles.brandTitle}>Gorakhpur Taxi Service</h2>
            <p className={styles.brandDescription}>
              Your trusted partner for safe and comfortable travel in Gorakhpur and beyond. 
              Experience premium taxi services with professional drivers.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Popular Routes</h3>
            <ul className={styles.list}>
              {popularDestinations.map((destination) => (
                <li key={destination.id}>
                  <Link 
                    to={`/destinations/${destination.slug}`} 
                    className={styles.link}
                  >
                    {destination.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>More Routes</h3>
            <ul className={styles.list}>
              {moreDestinations.map((destination) => (
                <li key={destination.id}>
                  <Link 
                    to={`/destinations/${destination.slug}`} 
                    className={styles.link}
                  >
                    {destination.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+918887537960" className={styles.contactHighlight}>
                  +91 8887537960
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:gorakhpurtaxibooking@gmail.com" className={styles.contactHighlight}>
                  gorakhpurtaxibooking@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactHighlight}>
                  Head Office - Sanik Kunj, Sector B, Nandanagar Gorakhpur Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} Gorakhpur Taxi Service. All rights reserved.
          </p>
          {/* <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Instagram
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 