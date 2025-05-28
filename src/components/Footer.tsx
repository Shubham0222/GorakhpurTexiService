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
    slug: "delhi",
    title: "Gorakhpur to Delhi Taxi Service",
    description: "National Capital Region",
    image: "/assets/image/destinations/delhi.jpg"
  },
  {
    id: 11,
    slug: "allahabad",
    title: "Gorakhpur to Allahabad Taxi Service",
    description: "Sangam City",
    image: "/assets/image/destinations/allahabad.jpg"
  },
  {
    id: 12,
    slug: "kanpur",
    title: "Gorakhpur to Kanpur Taxi Service",
    description: "Industrial City",
    image: "/assets/image/destinations/kanpur.jpg"
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
    id: 18,
    slug: "agra",
    title: "Gorakhpur to Agra Taxi Service",
    description: "Taj Mahal City",
    image: "/assets/image/destinations/agra.jpg"
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
  },
  {
    id: 22,
    slug: "sitapur",
    title: "Gorakhpur to Sitapur Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/sitapur.jpg"
  },
  {
    id: 23,
    slug: "ghaziabad",
    title: "Gorakhpur to Ghaziabad Taxi Service",
    description: "Delhi NCR Industrial Hub",
    image: "/assets/image/destinations/ghaziabad.jpg"
  },
  {
    id: 24,
    slug: "bareilly",
    title: "Gorakhpur to Bareilly Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/bareilly.jpg"
  },
  {
    id: 25,
    slug: "gurgaon",
    title: "Gorakhpur to Gurgaon Taxi Service",
    description: "Delhi NCR Business District",
    image: "/assets/image/destinations/gurgaon.jpg"
  },
  {
    id: 26,
    slug: "darbhanga",
    title: "Gorakhpur to Darbhanga Taxi Service",
    description: "Bihar Cultural Hub",
    image: "/assets/image/destinations/darbhanga.jpg"
  },
  {
    id: 27,
    slug: "chapra",
    title: "Gorakhpur to Chapra Taxi Service",
    description: "Bihar District",
    image: "/assets/image/destinations/chapra.jpg"
  },
  {
    id: 28,
    slug: "ghazipur",
    title: "Gorakhpur to Ghazipur Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/ghazipur.jpg"
  },
  {
    id: 29,
    slug: "gaya",
    title: "Gorakhpur to Gaya Taxi Service",
    description: "Buddhist Pilgrimage Site",
    image: "/assets/image/destinations/gaya.jpg"
  },
  {
    id: 30,
    slug: "sitamarhi",
    title: "Gorakhpur to Sitamarhi Taxi Service",
    description: "Bihar District",
    image: "/assets/image/destinations/sitamarhi.jpg"
  },
  {
    id: 31,
    slug: "begusarai",
    title: "Gorakhpur to Begusarai Taxi Service",
    description: "Bihar District",
    image: "/assets/image/destinations/begusarai.jpg"
  },
  {
    id: 32,
    slug: "motihari",
    title: "Gorakhpur to Motihari Taxi Service",
    description: "Bihar District",
    image: "/assets/image/destinations/motihari.jpg"
  },
  {
    id: 33,
    slug: "azamgarh",
    title: "Gorakhpur to Azamgarh Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/azamgarh.jpg"
  },
  {
    id: 34,
    slug: "sultanpur",
    title: "Gorakhpur to Sultanpur Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/sultanpur.jpg"
  },
  {
    id: 35,
    slug: "jaunpur",
    title: "Gorakhpur to Jaunpur Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/jaunpur.jpg"
  },
  {
    id: 36,
    slug: "basti",
    title: "Gorakhpur to Basti Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/basti.jpg"
  },
  {
    id: 37,
    slug: "balrampur",
    title: "Gorakhpur to Balrampur Taxi Service",
    description: "Uttar Pradesh District",
    image: "/assets/image/destinations/balrampur.jpg"
  },
  {
    id: 38,
    slug: "pashupatinath",
    title: "Gorakhpur to Pashupatinath Taxi Service",
    description: "Nepal Temple Route",
    image: "/assets/image/destinations/pashupatinath.jpg"
  }
];

const Footer: React.FC = () => {
  // Split destinations into three sections
  const popularDestinations = destinations.slice(0, 12);
  const moreDestinations = destinations.slice(12, 24);
  const additionalDestinations = destinations.slice(24);

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
            <h2 className={styles.brandTitle}>Best Gorakhpur Taxi</h2>
            <p className={styles.brandDescription}>
              Your trusted partner for safe and comfortable travel in Gorakhpur and beyond. 
              Experience premium taxi services with professional drivers.
            </p>
          </div>

          <div className={styles.destinationsGrid}>
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
              <h3 className={styles.sectionTitle}>Additional Routes</h3>
              <ul className={styles.list}>
                {additionalDestinations.map((destination) => (
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
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contact Us</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+919026793233" className={styles.contactHighlight}>
                  +91 9026793233
                </a>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactIcon}>✉️</span>
                <div className={styles.emailLinks}>
                  <a href="mailto:support@bestgorakhpurtaxi.com" className={styles.contactHighlight}>
                    support@bestgorakhpurtaxi.com
                  </a>
                  <a href="mailto:bestgorakhpurtaxi@gmail.com" className={styles.contactHighlight}>
                    bestgorakhpurtaxi@gmail.com
                  </a>
                </div>
              </li>
              <li className={`${styles.contactItem} ${styles.address}`}>
                <span className={styles.contactIcon}>📍</span>
                <span className={styles.contactHighlight}>
                  Head Office - House No. 12,<br />
                  Dalmeal Mirzapur Gorakhpur,<br />
                  Uttar Pradesh, 273005
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            &copy; {new Date().getFullYear()} Best Gorakhpur Taxi. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Instagram
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 