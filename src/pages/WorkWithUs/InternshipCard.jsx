import { motion, scale } from 'framer-motion';
import styles from './Card.module.css';
import Button from '../../components/Button/Button';

const InternshipCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };


  return (
    <motion.div
      className={`${styles.card} ${styles.internship}`}
      variants={cardVariants}
      transition={{ duration: 0.3 }}
    >
      <h2 className={styles.cardTitle}>Apply for Internship</h2>
      <p className={styles.cardSubtitle}>Shape the future of menstrual equity</p>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>WE'RE LOOKING FOR</h3>
        <p className={styles.sectionContent}>
          Creative minds ready to revolutionize period care through innovation.
          Whether you're a researcher, designer, or activist, we'll help you
          turn your passion into tangible impact.
        </p>
      </div>
      
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>YOUR IMPACT</h3>
        <ul className={styles.skillsList}>
          <li>Pioneer sustainable solutions</li>
          <li>Design inclusive campaigns</li>
          <li>Mobilize communities</li>
          <li>Lead the menstrual revolution</li>
        </ul>
      </div>
      
      <div className={styles.questions}>
        <p>Ready to challenge the status quo of menstrual health?</p>
        <p>Want to be at the forefront of systemic change?</p>
      </div>
      
      <Button 
        text="Apply Now" 
        color="#429122" 
        styles={{ height: "50px", width: "450px" }}></Button>
    </motion.div>
  );
};

export default InternshipCard;