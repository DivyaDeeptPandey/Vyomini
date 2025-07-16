import { motion } from 'framer-motion';
import styles from './WorkWithUs.module.css';
import InternshipCard from './InternshipCard';
import VolunteerCard from './VolunteerCard';
import JobApply from './JobApply';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const WorkWithUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
    <NavBar />
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        WORK WITH US
      </motion.h1>
      
      <motion.p 
        className={styles.subtitle}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join our movement for better menstrual health management
      </motion.p>
      
      <div className={styles.cardsContainer}>
        <InternshipCard />
        <VolunteerCard />
        <JobApply />
      </div>
    </motion.div>
    <Footer />
    </>
  );
};

export default WorkWithUs;