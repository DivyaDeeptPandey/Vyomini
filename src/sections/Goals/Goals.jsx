import { useEffect, useState } from 'react';
import styles from './Goals.module.css';
import { motion } from 'framer-motion';
import GoalImg1 from '../../assets/goals1.png';
import GoalImg2 from '../../assets/goals2.jpg';
import GoalImg3 from '../../assets/goals3.jpg';

const goals = [
  {
    img: GoalImg1,
    title: 'Creating women entrepreneur',
  },
  {
    img: GoalImg2,
    title: 'Provide Sustainable Sanitary Health across Rural and Urban India',
  },
  {
    img: GoalImg3,
    title: 'Generate Widespread Awareness about Menstrual Sanitation',
  },
  {
    img: GoalImg3,
    title: 'Generate Widespread Awareness about Menstrual Sanitation',
  },

];

const GoalsSection = () => {
  const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary-color').trim(),
      secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
    });
  }, []);

  return (
    <section className={`${styles.section} ${hovering ? styles.blur : ''}`}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        OUR GOALS
      </motion.h2>

      <div className={styles.cardsContainer}>
        {goals.map((goal, index) => {
          const bgColor = index % 2 === 0 ? colors.primary : colors.secondary;
          return (
            <motion.div
              className={styles.card}
              key={index}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              viewport={{ once: true }}
            >
              <img src={goal.img} alt={goal.title} className={styles.cardImage} />
              <div className={styles.cardContent} style={{ backgroundColor: bgColor, filter: 'saturate(85%)' }}>
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