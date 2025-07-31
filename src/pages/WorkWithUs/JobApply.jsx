import { motion } from 'framer-motion';
import styles from './Card.module.css';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

const JobApply = () => {
    const [colors, setColors] = useState({
        primary: "#429122",
        secondary: "#ABA104",
      });
      useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        setColors({
            primary: rootStyles.getPropertyValue("--primary-color").trim(),
            secondary: rootStyles.getPropertyValue("--secondary-color").trim(),
        });
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={`${styles.card} ${styles.job}`}
            variants={cardVariants}
            transition={{ duration: 0.3, delay: 0.2 }}
        >
            <h2 className={styles.cardTitle}>Apply for Jobs</h2>
            <p className={styles.cardSubtitle}>Be a core part of our mission</p>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>CURRENT OPENINGS</h3>
                <p className={styles.sectionContent}>
                    We are looking for dedicated professionals who are passionate about women’s health, sustainable innovation, and social impact.
                    Join our full-time team and bring your expertise to a purpose-driven organization.
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>DESIRED ROLES</h3>
                <ul className={styles.skillsList}>
                    <li>UI/UX Designer</li>
                    <li>Program Coordinator</li>
                    <li>Field Research Analyst</li>
                    <li>Content & Communication Lead</li>
                </ul>
            </div>

            <div className={styles.questions}>
                <p>Want your career to make real-world impact?</p>
                <p>Excited to contribute to a mission that matters?</p>
            </div>

            <Button
                text="Apply Now"
                color={colors.primary}
                link="/jobs"
                styles={{
                    height: "50px",
                    width: "100%",
                    maxWidth: "450px",
                    margin: "0 auto"
                }}
            />
        </motion.div>
    );
};

export default JobApply;
