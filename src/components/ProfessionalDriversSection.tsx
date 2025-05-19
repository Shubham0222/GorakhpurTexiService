import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProfessionalDrivers.module.css';

interface Driver {
  id: number;
  src: string;
  name: string;
  role: string;
  carNumber: string;
  mobile: string;
}

const drivers: Driver[] = [
  { id: 1, src: "/assets/image/userimg/G_P1.jpg", name: "Satyam Shrama", role: "Senior Driver", carNumber: "UP53 AB 1234", mobile: "+918318422045" },
  { id: 2, src: "/assets/image/userimg/G_P2.jpg", name: "Santosh Nishad", role: "Local Expert", carNumber: "UP53 CD 5678", mobile: "+919889520077" },
  { id: 3, src: "/assets/image/userimg/G_P3.jpg", name: "Vinay Gupta", role: "Airport Specialist", carNumber: "UP53 EF 9012", mobile: "+917905178645" },
  { id: 4, src: "/assets/image/userimg/G_P4.jpg", name: "Jitendra Gupta", role: "Outstation Expert", carNumber: "UP53 GH 3456", mobile: "+919984229916" },
  { id: 5, src: "/assets/image/userimg/G_P5.jpg", name: "M Aftab", role: "Professional Driver", carNumber: "UP53 FT 6939", mobile: "+919336251105" },
  { id: 6, src: "/assets/image/userimg/G_P6.jpg", name: "Pankaj", role: "Tour Specialist", carNumber: "UP53 KL 2345", mobile: "+918127837596" },
  { id: 7, src: "/assets/image/userimg/G_P7.jpg", name: "Harikesh Pandey", role: "City Driver", carNumber: "UP53 MN 6789", mobile: "+919807114119" },
  { id: 8, src: "/assets/image/userimg/G_P8.jpg", name: "Raj Mishra", role: "Long Route", carNumber: "UP53 OP 1235", mobile: "+917752954681" },
  { id: 9, src: "/assets/image/userimg/G_P9.jpg", name: "Amit Singh", role: "Family Trips", carNumber: "UP53 QR 6780", mobile: "+917355078362" },
  { id: 10, src: "/assets/image/userimg/G_P10.jpg", name: "Jaisraj Pandit", role: "Night Specialist", carNumber: "UP53 ST 2346", mobile: "+919839521455" },
  { id: 11, src: "/assets/image/userimg/G_P11.jpg", name: "Chandan Yadav", role: "Senior Driver", carNumber: "UP53 UV 7891", mobile: "+918425910050" },
  { id: 12, src: "/assets/image/userimg/G_P12.jpg", name: "Ram Bachan", role: "Tour Expert", carNumber: "UP53 WX 3457", mobile: "+919807209545" },
  { id: 13, src: "/assets/image/userimg/G_P13.jpg", name: "Umesh Pati Tripathi", role: "Airport Pickup", carNumber: "UP53 ET 6022", mobile: "+919434196310" },
  { id: 14, src: "/assets/image/userimg/G_P14.jpg", name: "Amit Paswan", role: "Outstation", carNumber: "UP53 AA 4568", mobile: "+919415834276" },
  { id: 15, src: "/assets/image/userimg/G_P15.jpg", name: "A N Shukla", role: "Local Driver", carNumber: "UP53 BB 7892", mobile: "+919910619968" },
  { id: 16, src: "/assets/image/userimg/G_P16.jpg", name: "Ravikant Gautam", role: "Tour Specialist", carNumber: "UP53 CC 2347", mobile: "+918887537960" },
  { id: 18, src: "/assets/image/userimg/G_P18.jpg", name: "Harikesh Yadav", role: "Professional Driver", carNumber: "UP53 EE 3458", mobile: "+919935455222" },
  { id: 19, src: "/assets/image/userimg/G_P19.jpg", name: "Ram Kishun Dubey", role: "Night Specialist", carNumber: "UP53 FF 9014", mobile: "+919867041585" },
  { id: 20, src: "/assets/image/userimg/G_P20.jpg", name: "Vijay ji", role: "Professional Driver", carNumber: "UP53 EE 3458", mobile: "+918303699195" },
  { id: 21, src: "/assets/image/userimg/G_P21.jpg", name: "Mukesh Thathera", role: "Night Specialist", carNumber: "UP53 FF 9014", mobile: "+919695768788" },
];

const ProfessionalDriversSection = () => {
  const [selected, setSelected] = useState<Driver | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our Professional Drivers</h2>
          <p className={styles.subtitle}>Meet our experienced and reliable drivers dedicated to your safe and comfortable journey</p>
        </div>
        <div className={styles.driversGrid}>
          {drivers.map(driver => (
            <motion.div
              key={driver.id}
              className={styles.driverCard}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
              onClick={() => setSelected(driver)}
            >
              <img src={driver.src} alt={driver.name} className={styles.driverImg} />
              <div className={styles.driverInfo}>
                <div className={styles.driverName}>{driver.name}</div>
                <div className={styles.driverCar}>Car: {driver.carNumber}</div>
                <div className={styles.driverMobile}>Mobile: <a href={`tel:${driver.mobile}`}>{driver.mobile}</a></div>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selected && (
            <motion.div
              className={styles.driverModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <div className={styles.driverModalContent} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={() => setSelected(null)}>
                  <svg viewBox="0 0 24 24" width="28" height="28"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                </button>
                <img src={selected.src} alt={selected.name} className={styles.driverModalImg} />
                <div className={styles.driverModalInfo}>
                  <div className={styles.driverName}>{selected.name}</div>
                  <div className={styles.driverCar}>Car: {selected.carNumber}</div>
                  <div className={styles.driverMobile}>Mobile: <a href={`tel:${selected.mobile}`}>{selected.mobile}</a></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProfessionalDriversSection; 