import { motion } from "framer-motion";
import styles from "./RuralOutreachProgramPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ruralOutreachImg from "../../assets/RuralOutreachProgramImgs/Rural_Outreach_Program_Img.jpg";

// Animation configuration for container
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

// Animation for each item
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
      {/* Navigation Bar */}
      <NavBar />

      {/* Main Section */}
      <motion.section
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Section Heading */}
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>RURAL OUTREACH PROGRAM</h2>
        </div>

        {/* Featured Image */}
        <motion.div className={styles.imageWrapper} variants={itemVariants}>
          <img
            src={ruralOutreachImg}
            alt="Rural Outreach Program"
            className={styles.image}
          />
        </motion.div>

        {/* Paragraphs with animation */}
        <motion.div className={styles.content} variants={containerVariants}>
          <motion.p variants={itemVariants}>
            India is a country where a majority of the population (68.84%) still lives in rural areas. With over 6,40,000 villages, awareness, accessibility, and affordability of essential resources remain significant challenges.
          </motion.p>

          <motion.p variants={itemVariants}>
            VYOMINI has taken the initiative to address this gap by expanding menstrual health awareness, product accessibility, and affordability across Indian villages.
          </motion.p>

          <motion.p variants={itemVariants}>
            To penetrate deeper into remote areas, we’ve partnered with block development offices, NGOs, Self-Help Groups (SHGs) under the National Rural Livelihood Mission (NRLM), and other grassroots organizations.
          </motion.p>

          <motion.p variants={itemVariants}>
            Our awareness workshops have already reached villages across Haryana, Odisha, Rajasthan, Jharkhand, Bihar, Uttarakhand, and Uttar Pradesh — with a goal to impact 15 more states.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
