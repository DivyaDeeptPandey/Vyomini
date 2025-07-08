import React from 'react';
import { motion } from 'framer-motion';
import styles from './AboutUs.module.css';
import aboutImage from '../../assets/AboutImg/about.avif';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
  return (
    <section className={styles.aboutSection} id="about-us">
      {/* 🧭 Section Title */}
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        ABOUT US
      </motion.h2>

      {/* 📖 Main Content */}
      <div className={styles.contentWrapper}>
        {/* 🖼️ Image */}
        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="Community" className={styles.image} loading="lazy" />
        </motion.div>

        {/* 📝 Text */}
        <motion.div
          className={styles.textBox}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p>
            In 2017, <strong className={styles.highlight}>VYOMINI</strong> was founded by young women
            social activists to address social, economic, and environmental challenges.
            It is registered as a Section 8 not-for-profit company.
          </p>

          <p>
            Our first initiative was the Menstrual Health Management program in Jhajjar District, Haryana,
            and Delhi slums — a 360-degree approach focusing on <strong>Awareness, Accessibility, and Affordability (3As)</strong>.
          </p>

          <p>
            Over time, our development efforts expanded across multiple districts in Haryana and
            into other Indian states — impacting over <strong>1 million women</strong> through our MHM programs.
          </p>

          {/* 🔗 Read More */}
          <Link
            to="/about"
            className={styles.readMore}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Read more...
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
