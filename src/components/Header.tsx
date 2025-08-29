import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdventureOpen, setIsAdventureOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen(!isDestinationsOpen);
  };

  const toggleAdventure = () => {
    setIsAdventureOpen(!isAdventureOpen);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/adventure",
      label: "Activities",
      submenu: [
        { path: "/adventure", label: "Activities in Nepal" },
      ]
    },
    {
      path: "/destinations",
      label: "Destinations",
      submenu: [
        { path: "/destinations", label: "Popular Destinations" },
        // { path: "/FamousTouristPoints", label: "Famous Tourist Points" },
        // { path: "/pokhara", label: "Famous Tourist Points In Pokhara" }
      ]
    },
    { path: "/fare", label: "Fleet Partners" },
    { path: "/contact", label: "Contact" }
  ];

  return (
    <header className={styles.header}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}> Haridwar || Rishikesh || Nainital || Mussoorie || Pokhara || Kathmandu || Janakpur || Darjeeling || Gangtok || Sikkim || Jharkhand || Chhattisgarh || Bihar || Mustang || Jomsom || Muktinath || Ranikhet || Munsiyari || Varanasi || Ayodhya || Prayagraj
        </div>
      </div>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} aria-label="Best Gorakhpur Taxi">
          <img src="/assets/image/logo.jpg" alt="Gorakhpur Taxi Booking Logo" className={styles.logoImg} />
          <span className={styles.logoTextGroup}>
            <span className={styles.logoTextMain}>Best Gorakhpur Taxi</span>
            <span className={styles.logoTextSub}>Nepal Tour Packages</span>
          </span>
        </Link>

         <nav className={styles.desktopNav}>
          {menuItems.map((item) => (
            <div
              key={item.path}
              className={styles.navItem}
            >
              {item.path === "/destinations" ? (
                <div
                  className={styles.navLink}
                  onClick={toggleDestinations}
                  onMouseEnter={() => setIsDestinationsOpen(true)}
                  onMouseLeave={() => setIsDestinationsOpen(false)}
                >
                  Destinations
                  <span className={styles.dropdownArrow}>▼</span>
                  {isDestinationsOpen && (
                    <div className={styles.dropdown}>
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={styles.dropdownItem}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.path === "/adventure" ? (
                <div
                  className={styles.navLink}
                  onClick={toggleAdventure}
                  onMouseEnter={() => setIsAdventureOpen(true)}
                  onMouseLeave={() => setIsAdventureOpen(false)}
                >
                  Activities
                  <span className={styles.dropdownArrow}>▼</span>
                  {isAdventureOpen && (
                    <div className={styles.dropdown}>
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={styles.dropdownItem}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link to={item.path} className={styles.navLink}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className={styles.toggelPartnerwrap}>
          <Link to="/" className={styles.logoRight} aria-label="Group of Baba Travels">
            <img
              src="/assets/image/logo2.jpg"
              alt="Group of Baba Travels Logo"
              className={styles.logoImgRight}
            />
            <span className={styles.logoTextGroupRight}>
              <span className={styles.logoTextMain}>Group of Baba Travels</span>
              <span className={styles.logoTextSub}>Trusted Travel Partner</span>
            </span>
          </Link>
          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`}></span>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {menuItems.map((item) => (
                <div key={item.path}>
                  {item.path === "/destinations" ? (
                    <div className={styles.mobileSubmenu}>
                      <div className={styles.mobileNavLink}>Destinations</div>
                      <Link
                        to="/destinations"
                        className={styles.mobileSubmenuItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Popular Destinations
                      </Link>
                      {/* <Link
                        to="/FamousTouristPoints"
                        className={styles.mobileSubmenuItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Famous Tourist Points
                      </Link>
                      
                      <Link
                        to="/pokhara"
                        className={styles.mobileSubmenuItem}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Famous Tourist Points In Pokhara
                      </Link> */}

                    </div>
                  ) : item.path === "/adventure" ? (
                    <div className={styles.mobileSubmenu}>
                      <div className={styles.mobileNavLink}>Activities</div>
                      {item.submenu?.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className={styles.mobileSubmenuItem}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
