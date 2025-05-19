import React from "react";
import { motion } from "framer-motion";
import styles from "./Fare.module.css";

const fareData = [
  { category: "Local (10km)", fare: "200" },
  { category: "Airport Pickup/Drop", fare: "350" },
  { category: "Outstation (per km)", fare: "11" }
];

const Fare = () => {
  return (
    <main className={styles.main}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.title}
      >
        Taxi Fare
      </motion.h2>
      
      <motion.table 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={styles.table}
      >
        <thead>
          <tr>
            <th>Category</th>
            <th>Base Fare (₹)</th>
          </tr>
        </thead>
        <tbody>
          {fareData.map((item, idx) => (
            <motion.tr
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
            >
              <td>{item.category}</td>
              <td>{item.fare}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className={styles.note}
      >
        * Fares may vary slightly depending on car choice and date.
      </motion.p>
    </main>
  );
};

export default Fare; 