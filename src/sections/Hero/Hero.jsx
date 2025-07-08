import React from 'react';
import { motion } from 'framer-motion';
import CountUp from './CountUp';
import styles from './Hero.module.css';
import bgImage from '../../assets/HeroImg/hero.avif';
import Button from '../../components/Button/Button';

// 🔁 Parent container animation: stagger children
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// 🎯 Fade-up animation used for multiple elements
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroSection = () => {
  // ⬇ Scroll handler for smooth scrolling to #OurImpactSection
  const handleImpactScroll = () => {
    const element = document.getElementById('OurImpactSection');
    if (element) {
      const yOffset = -100; // Offset for sticky nav
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section
      className={styles.hero}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}>
        {/* 📦 Main Text & Buttons */}
        <motion.div
          className={styles.contentWrapper}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* 🔠 Main Headline */}
          <motion.h1 className={styles.heading} variants={fadeUp}>
            WOMAN FIRST,<br />
            PROSPERITY FOR ALL
          </motion.h1>

          {/* 💬 Subheadline */}
          <motion.p className={styles.subheading} variants={fadeUp}>
            Empowering women to lead sustainable change.
          </motion.p>

          {/* 🎯 Action Buttons */}
          <motion.div className={styles.buttons} variants={fadeUp}>
            <Button
              text="JOIN THE MOVEMENT"
              color="#429122"
              link="/work-with-us"
            />
            <Button
              text="OUR IMPACT"
              color="#ABA104"
              onClick={handleImpactScroll}
            />
          </motion.div>
        </motion.div>

        {/* 📊 Stats Section */}
        <motion.div
          className={styles.stats}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* 👩‍🦱 Women Reached */}
          <motion.div variants={fadeUp}>
            <span className={styles.statNumber}>
              <CountUp target={10000} /> +{' '}
            </span>
            Women Reached
          </motion.div>

          {/* 🧠 Awareness Camps */}
          <motion.div variants={fadeUp}>
            <span className={styles.statNumber}>
              <CountUp target={200} /> +{' '}
            </span>
            Awareness Camps
          </motion.div>

          {/* 🏞️ Districts Impacted */}
          <motion.div variants={fadeUp}>
            <span className={styles.statNumber}>
              <CountUp target={15} /> +{' '}
            </span>
            Districts Impacted
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
