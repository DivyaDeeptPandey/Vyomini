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
            Our program empowers women and girls through a holistic model focused on the 3 A's:
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

        {/* === New Initiatives Section === */}
        <motion.section className={styles.initiativesSection} variants={containerVariants}>
          <motion.h3 className={styles.initiativesHeading} variants={itemVariants}>
            Menstrual Hygiene Awareness Workshop and Hardware Installation
          </motion.h3>
          
          <motion.p className={styles.initiativesIntro} variants={itemVariants}>
            Revolutionized Menstrual Health & Hygiene through Awareness, Affordability and Accessibility of better menstrual hygiene resources.
          </motion.p>

          {/* Initiative 1 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>1. Pasti se Pads</h4>
            <p className={styles.initiativeDescription}>
              An initiative to end Period Poverty for low income groups, we are mobilizing RWAs, Offices and Students for supporting sanitary napkins supply to poor women and girls. Under this initiative we collect newspaper and scrap and sell it to agents and collected money is used to supply sanitary napkins to end period poverty.
            </p>
            <div className={styles.ctaContainer}>
              <span className={styles.ctaText}>Join the movement and contribute</span>
            </div>
          </motion.div>

          {/* Initiative 2 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>2. Periods Friendly Workplace</h4>
            <p className={styles.initiativeDescription}>
              All the menstruators must feel comfortable during periods wherever they go and visit, to motivate Offices, workplace to install all the necessary hardware at workplace or in toilets so that menstruating women can access products while working, create one MHM or medical room for their rest, flexible working hours and regular awareness program, can create inclusive and gender friendly workplace.
            </p>
            <p className={styles.initiativeStats}>
              We have done advocacy with 100+ corporates and assisted them in sustainable sanitation practices, hardware installation and awareness workshop for menstruating female workforce.
            </p>
          </motion.div>

          {/* Initiative 3 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>3. Menstrual Hygiene Hardware Installation</h4>
            <p className={styles.initiativeDescription}>
              We are promoting menstrual hygiene hardware installation for easy accessibility of sanitary napkins.
            </p>
            <p className={styles.initiativeStats}>
              Total 8000+ machines installed
            </p>
          </motion.div>

          {/* Initiative 4 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>4. MHM Educator</h4>
            <p className={styles.initiativeDescription}>
              We are supporting NGOs, ANM, ASHAs and SHGs, Teachers through ToT program, to mobilize communities we are creating MHM educators so that they can address MHM related stigma and taboos with proper guiding manuals.
            </p>
          </motion.div>

          {/* Initiative 5 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>5. Health Camp</h4>
            <p className={styles.initiativeDescription}>
              To awaken women about reproductive health, anemia and treating small infections and preventive care we organize health camps and motivate women to visit doctors in case of any disease they do not treat at home.
            </p>
          </motion.div>

          {/* Initiative 6 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>6. Menstrual Hygiene Policy Implementation</h4>
            <p className={styles.initiativeDescription}>
              We are supporting schools in implementation of menstrual hygiene policy, by advocacy, vending machine installation and awareness workshop, and menstrual waste management.
            </p>
          </motion.div>

          {/* Initiative 7 */}
          <motion.div className={styles.initiativeCard} variants={itemVariants}>
            <h4 className={styles.initiativeTitle}>7. Sanitary Napkin Manufacturing Training and Support</h4>
            <p className={styles.initiativeDescription}>
              We are supporting rural entrepreneurs in setting up sanitary napkins manufacturing units so that they can procure from local areas and give income generation opportunities.
            </p>
            <div className={styles.ctaContainer}>
              <span className={styles.ctaText}>Join us to promote local sanitary napkins manufacturing</span>
            </div>
          </motion.div>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}