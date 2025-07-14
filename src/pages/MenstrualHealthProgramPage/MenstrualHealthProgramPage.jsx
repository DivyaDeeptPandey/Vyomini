import { motion } from 'framer-motion';
import styles from './MenstrualHealthProgramPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// Animation configuration for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren'
    }
  }
};

// Animation for each item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function MenstrualHealthProgramPage() {
  return (
    <>
      <NavBar />

      <motion.main
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* === Section Heading === */}
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>MENSTRUAL HEALTH PROGRAM</h2>
        </div>

        {/* === Video Section === */}
        <motion.section
          className={styles.videoWrapper}
          aria-label="Menstrual Health Awareness Video"
          variants={itemVariants}
        >
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/Yk8eHs3U8e4"
            title="Menstrual Health Awareness Program Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.section>

        {/* === Descriptive Content === */}
        <motion.section className={styles.content} variants={containerVariants}>
          <motion.p variants={itemVariants}>
            At Vyomini, we believe menstrual health is a right, not a privilege.
            Our program empowers women and girls through a holistic model focused on the 3 A’s:
            <span className={styles.highlight}> Awareness</span>,
            <span className={styles.highlight}> Affordability</span>, and
            <span className={styles.highlight}> Accessibility</span>.
          </motion.p>

          <motion.p variants={itemVariants}>
            <span className={styles.highlight}>Awareness</span> campaigns include workshops, school drives,
            and community seminars that break taboos and promote hygienic practices.
          </motion.p>

          <motion.p variants={itemVariants}>
            <span className={styles.highlight}>Affordability</span> is addressed by training grassroots women to
            produce biodegradable sanitary pads and menstrual cups—creating employment and low-cost solutions.
          </motion.p>

          <motion.p variants={itemVariants}>
            <span className={styles.highlight}>Accessibility</span> is ensured by deploying sanitary napkin vending
            machines, conducting distribution drives, and providing doorstep delivery in underserved regions.
          </motion.p>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}
