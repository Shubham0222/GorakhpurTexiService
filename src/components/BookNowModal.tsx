import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BookNowModal.module.css";

interface BookNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const destinations = [
  "Lumbini",
  "Pokhara",
  "Varanasi",
  "Lucknow",
  "Kathmandu",
  "Ayodhya"
];

const carTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Luxury"
];

const BookNowModal: React.FC<BookNowModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("");
  const [carType, setCarType] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can handle the form data (e.g., send to backend)
  };

  const handleClose = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setDestination("");
    setCarType("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className={styles.modal}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className={styles.closeButton} onClick={handleClose} aria-label="Close">&times;</button>
            <h2 className={styles.title}>Book Your Ride</h2>
            {submitted ? (
              <div className={styles.success}>Thank you! We have received your booking request.</div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                  Name
                  <input 
                    className={styles.input} 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    required 
                  />
                </label>
                <label className={styles.label}>
                  Phone
                  <input 
                    className={styles.input} 
                    type="tel" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    required 
                    pattern="[0-9]{10,}"
                  />
                </label>
                <label className={styles.label}>
                  Destination
                  <select 
                    className={styles.input} 
                    value={destination} 
                    onChange={e => setDestination(e.target.value)} 
                    required
                  >
                    <option value="">Select Destination</option>
                    {destinations.map(dest => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                </label>
                <label className={styles.label}>
                  Car Type
                  <select 
                    className={styles.input} 
                    value={carType} 
                    onChange={e => setCarType(e.target.value)} 
                    required
                  >
                    <option value="">Select Car Type</option>
                    {carTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </label>
                <button className={styles.submitButton} type="submit">Book Now</button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookNowModal; 