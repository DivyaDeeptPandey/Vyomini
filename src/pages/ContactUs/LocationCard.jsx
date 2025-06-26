import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';

const LocationCard = ({ title, address, pin, phone, landmark, delay }) => {
  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className={styles.locationCard}
      variants={cardVariants}
      whileHover="hover"
    >
      <h3 className={styles.locationTitle}>{title}</h3>
      <div className={styles.locationDetails}>
        <p className={styles.locationAddress}>{address}</p>
        {pin && <p className={styles.locationPin}>Pin code: {pin}</p>}
        <p className={styles.locationPhone}>Phone: {phone}</p>
        {landmark && <p className={styles.locationLandmark}>Landmark: {landmark}</p>}
      </div>
    </motion.div>
  );
};

export default LocationCard;