import { motion } from "framer-motion";
import styles from "./MenstrualHealthProgramPage.module.css";
import NavBar from "../../components/NavBar/NavBar";

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

const videoVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};

export default function MenstrualHealthSection() {
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
          TOTAL MENSTRUAL HEALTH SOLUTION
        </motion.h2>

        <motion.div 
          className={styles.videoWrapper}
          variants={videoVariants}
        >
          <iframe
            src="https://www.youtube.com/embed/Yk8eHs3U8e4"
            title="Menstrual Health Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.video}
          ></iframe>
        </motion.div>

        <motion.div 
          className={styles.content}
          variants={containerVariants}
        >
          <motion.p variants={itemVariants}>
            As the statistics suggest the status of Menstrual Health is poor across culture & communities.
            <br /><br />
            We have launched "Rakshak" — a low-cost biodegradable sanitary pad with a campaign to address Menstrual Health Management related issues, with our 3 As approach that is.....
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong>1. <span className={styles.highlight}>Awareness:-</span></strong> Awareness about female hygiene products available in the market, their right usage and disposal.
            <br />
            So far 1000 awareness workshops with NGOs, SHGs, Education Institutions to consistently promote Menstrual Health and hygiene.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong>2. <span className={styles.highlight}>Affordability:-</span></strong> Vyomini is manufacturing low-cost biodegradable, herbal, and premium sanitary napkins at affordable cost for the masses to classes. Ensuring the availability of premium quality but Low-Cost Sanitary napkins, to negate any economic factors which prevent women from adopting hygienic menstrual health management practices.
            <br />
            To fulfill this goal, we have ensured that our product is not only competitive in the market, but additionally ensured its top quality. Our product is being manufactured indigenously, making a bigger dent into the existing taboos surrounding periods, as we employ, engage and encourage women into the production process, providing them a respectable source of livelihood.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong>3. <span className={styles.highlight}>Accessibility:-</span></strong> Menstrual Health in India has been ignored to say the least, partially due to the complete ignorance of policymakers and the rest due to the social taboo existing around the biological process. It is a pity, that there are such limited stakeholders in the country, even willing to work towards uplifting the hygiene standards available to women, given the pitiable mortality rates caused by the lack of it.
            <br />
            Vyomini is reaching out to the unreached and covering all menstruating women across the globe.
          </motion.p>
        </motion.div>
      </motion.section>
    </div>
  );
}