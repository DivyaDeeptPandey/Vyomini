import { motion } from 'framer-motion';
import styles from './Card.module.css';
import Button from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar';
const VolunteerCard = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={`${styles.card} ${styles.volunteer}`}
            variants={cardVariants}
            transition={{ duration: 0.3, delay: 0.1 }}
        >
            <h2 className={styles.cardTitle}>Apply as Volunteer</h2>
            <p className={styles.cardSubtitle}>Join our movement for change</p>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>WHO CAN APPLY</h3>
                <p className={styles.sectionContent}>
                    Individuals passionate about women's health who want to contribute their
                    time and skills to promote menstrual hygiene awareness and education.
                </p>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>YOU WILL GAIN</h3>
                <ul className={styles.skillsList}>
                    <li>Community Impact</li>
                    <li>Networking</li>
                    <li>Skill Development</li>
                    <li>Personal Growth</li>
                    <li>Satisfaction of Giving Back</li>
                </ul>
            </div>

            <div className={styles.questions}>
                <p>Do you believe in making menstrual health accessible to all?</p>
                <p>Are you ready to be part of a transformative movement?</p>
            </div>

            <Button
                text="Join Us"
                color="#ABA104"
                link = "https://docs.google.com/forms/d/e/1FAIpQLSfAq7NLBC_XogH533Ha1yKQt_cood7N9W4pQyFkRUKUaAzK9Q/viewform"
                styles={{
                    height: "50px",
                    width: "100%",          
                    maxWidth: "450px",        
                    margin: "0 auto"          
                }}></Button>
        </motion.div>
    );



};

export default VolunteerCard;