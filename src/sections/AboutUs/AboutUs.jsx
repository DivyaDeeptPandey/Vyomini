import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import aboutImage from '../../assets/about.jpeg';
import { Link } from 'react-router-dom';


const AboutUsSection = () => {
  return (
    <section className={styles.aboutSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT US
      </motion.h2>

      <div className={styles.contentWrapper}>
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Community" className={styles.image} />
        </motion.div>

        <motion.div
          className={styles.textBox}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7}}
          viewport={{ once: true }}
        >
          <p>
            In 2017 <strong className={styles.highlight}>VYOMINI</strong> was founded by young women
            social activist to provide solution to social, economic and environmental challenges.
            It is registered under Company Section 8 as a not for profit entity.
          </p>
          <p>
            The first project launched by VYOMINI was Menstrual Health Management program at Jhajjar
            District of Haryana and Delhi Slums with 360 degree approach with 3As that is Awareness,
            Accessibility and Affordability of the MHM.
          </p>
          <Link to="/about" className={styles.readMore} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>read more...</Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
