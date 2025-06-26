// TeamMember.jsx
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TeamMember.module.css';

const TeamMember = ({ image, name, designation, about }) => {
  return (
    <motion.div
      className={styles.memberContainer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.imageTextWrapper}>
        <div className={styles.imageWrapper}>
          <img src={image} alt={name} className={styles.profileImage} />
        </div>
        <div className={styles.textBlock}>
          <div className={styles.headerBlock}>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.designation}>{designation}</p>
          </div>
          <p className={styles.aboutText}>{about}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;