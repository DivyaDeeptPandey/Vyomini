import { motion } from "framer-motion";
import styles from "./RuralOutreachProgramPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ruralOutreachImg from "../../assets/RuralOutreachProgramImgs/Rural_Outreach_Program_Img.jpg";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function RuralOutreachProgram() {
  return (
    <div>
      <NavBar />
      <motion.section
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className={styles.heading}
          variants={itemVariants}
        >
          RURAL OUTREACH PROGRAM
        </motion.h2>

        <motion.div
          className={styles.imageWrapper}
          variants={itemVariants}
        >
          <img
            src={ruralOutreachImg}
            alt="Rural Outreach Program"
            className={styles.image}
          />
        </motion.div>

        <motion.div
          className={styles.content}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>

            INDIA is a country where majority of population(68.84%) still lives in Rural set up, there are 6,40,867 villages in INDIA and as the research suggests that awareness, accessibility and affordability of resources is a big challenge for population living in villages.          </motion.p>

          <motion.p variants={itemVariants}>
            Therefore VYOMINI taken the initiative to cover all villages for the Menstrual Health Awareness, affordability & accessibility.          </motion.p>

          <motion.p variants={itemVariants}>
            In order to penetrate deeper into the rural and remote areas of India, we have actively associated ourselves with multiple block development groups, NGOs and Self-Help groups under National Rural Livelihood Mission GoI, and other grassroots level organizations.          </motion.p>

          <motion.p variants={itemVariants}>
            We have already held awareness workshops in the villages of Haryana, Odisha, Rajasthan, Jharkhand, Bihar, Uttrakhand, Uttar Pardesh and hope to reach at least 15 more Indian states in 2018 alone.          </motion.p>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
}
