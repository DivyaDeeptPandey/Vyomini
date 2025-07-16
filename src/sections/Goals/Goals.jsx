import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Goals.module.css';

import GoalImg1 from '../../assets/OurGoalsImg/goals1.avif';
import GoalImg2 from '../../assets/OurGoalsImg/goals2.avif';
import GoalImg3 from '../../assets/OurGoalsImg/goals3.avif';
import GoalImg4 from '../../assets/OurGoalsImg/goals4.avif';

// 💡 Centralized goal data
const goals = [
  {
    img: GoalImg1,
    title: 'Creating Women Entrepreneurs',
  },
  {
    img: GoalImg2,
    title: 'Provide Sustainable Sanitary Health across Rural and Urban India',
  },
  {
    img: GoalImg3,
    title: 'Youth Empowerment',
  },
  {
    img: GoalImg4,
    title: 'Reduce Carbon Footprint',
  },
];

const GoalsSection = () => {
  const [colors, setColors] = useState({
    primary: '#429122',
    secondary: '#ABA104',
  });

  const [hovering, setHovering] = useState(false);

  // 🌈 Sync with CSS custom properties
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary-color').trim(),
      secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
    });
  }, []);

  return (
    <section className={`${styles.section} ${hovering ? styles.blur : ''}`}>
      {/* 🧭 Section Heading */}
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR GOALS
      </motion.h2>

      {/* 🧱 Cards Layout */}
      <div className={styles.cardsContainer}>
        {goals.map((goal, index) => {
          const bgColor = index % 2 === 0 ? colors.primary : colors.secondary;

          return (
            <motion.div
              key={index}
              className={styles.card}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.2 },
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <img
                src={goal.img}
                alt={goal.title}
                className={styles.cardImage}
              />

              {/* 🟩 Colored Title Box */}
              <div
                className={styles.cardContent}
                style={{
                  backgroundColor: bgColor,
                  filter: 'saturate(85%)',
                }}
              >
                {goal.title}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default GoalsSection;
