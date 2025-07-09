import React from 'react';
import { motion } from 'framer-motion';
import styles from './TeamMember.module.css';

/**
 * TeamMember component displays individual team member info:
 * - Profile image
 * - Name
 * - Designation
 * - About text
 * 
 * Animated using Framer Motion when scrolled into view.
 */
const TeamMember = ({ image, name, designation, about }) => {
  return (
    <motion.div
      className={styles.memberBox} // Card-style container with green line (styled via CSS)
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.imageTextWrapper}>
        {/* Profile Image */}
        <div className={styles.imageWrapper}>
          <img
            src={image}
            alt={`Portrait of ${name}`}
            className={styles.profileImage}
            loading="lazy"
          />
        </div>

        {/* Text Content: Name, Designation, About */}
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
