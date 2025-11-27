import { motion } from "framer-motion";
import styles from "./VyominiUdhyamiPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import udhyamiImage from "../../assets/VyominiUdhyamiImgs/vyomini_udhyami_img.jpg";

// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function VyominiUdhyamiPage() {
  return (
    <div>
      {/* Top Navigation */}
      <NavBar />

      {/* Main Content Section */}
      <motion.section
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Page Heading */}
        <motion.div className={styles.headingContainer} variants={itemVariants}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>Vyomini Udhyami Consortium</h2>
        </motion.div>

        {/* Banner/Image */}
        <motion.img
          src={udhyamiImage}
          alt="Vyomini Udhyami Consortium"
          className={styles.image}
          loading="lazy"
          variants={itemVariants}
        />

        {/* Description Block */}
        <motion.div className={styles.descriptionBox} variants={containerVariants}>
          <motion.p className={styles.description} variants={itemVariants}>
            Project launched to support entrepreneurs wherein they receive a one-stop
            solution for all their needs to start their entrepreneurship journey from scratch.
          </motion.p>

          <motion.p className={styles.description} variants={itemVariants}>
            <strong>
              Annual membership charges for{" "}
              <span className={styles.highlight}>UDHYAMI CONSORTIUM</span> is Rs 500 per annum.
            </strong>
          </motion.p>

          {/* Subheading */}
          <motion.h3 className={styles.subheading} variants={itemVariants}>
            Benefits to Udhyami Consortium Members
          </motion.h3>

          {/* Benefits List */}
          <motion.ul className={styles.benefits} variants={containerVariants}>
            {[
              "Capacity Building Training",
              "Entity Registration and Legal Compliance Guidance",
              "Financial Literacy",
              "Digital Literacy to promote business online",
              "Linking with Financial Institutions",
              "Marketing Linkages and Support",
              "Regular Updates about Government Schemes",
            ].map((benefit, i) => (
              <motion.li key={i} variants={itemVariants}>
                {benefit}
              </motion.li>
            ))}
          </motion.ul>

          {/* Button CTA */}
          <motion.div className={styles.formLinkWrapper} variants={itemVariants}>
            <Button
              text="Fill the Membership Form"
              color="#429122"
              link="https://docs.google.com/forms/d/e/1FAIpQLSdjglByxGZ6h8GqThp5-e8wU1Sru0LxxiEe6r2Q323wCxOL7w/viewform?vc=0&c=0&w=1"
            />
          </motion.div>
        </motion.div>

        {/* === New Entrepreneurship Programs Section === */}
        <motion.section 
          className={styles.entrepreneurshipSection}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h3 className={styles.sectionHeading} variants={itemVariants}>
            Entrepreneurship Programs
          </motion.h3>

          {/* Entrepreneurship Development Training */}
          <motion.div className={styles.programCard} variants={itemVariants}>
            <h4 className={styles.programTitle}>Entrepreneurship Development Training Program</h4>
            <p className={styles.programDescription}>
              Addressing needs of small and marginalized entrepreneurs through digital Marketing, 
              e-commerce, technical training, packaging and product design.
            </p>
          </motion.div>

          {/* Incubation Program */}
          <motion.div className={styles.programCard} variants={itemVariants}>
            <h4 className={styles.programTitle}>Sanitary Napkins Incubation Program</h4>
            <p className={styles.programDescription}>
              In association with MSMS NSIC Okhla, Vyomini set up first of its kind sanitary napkins 
              incubation training program and trained 100+ entrepreneurs in offline mode wherein they 
              learned machine operation, sanitary napkin manufacturing.
            </p>
            <p className={styles.programUpdate}>
              During the COVID pandemic, we shifted the program to online mode, where participants 
              learn complete knowledge of entrepreneurship and marketing.
            </p>
          </motion.div>

          {/* Short Term Programs */}
          <motion.div className={styles.shortTermPrograms} variants={itemVariants}>
            <h4 className={styles.programsSubheading}>Short Term Entrepreneurship Development Programs</h4>
            <div className={styles.programsGrid}>
              <div className={styles.programItem}>
                <h5 className={styles.programItemTitle}>One Week Program</h5>
                <p className={styles.programItemDescription}>
                  One week entrepreneurship training program conducted with SHGs to promote local business
                </p>
              </div>
              <div className={styles.programItem}>
                <h5 className={styles.programItemTitle}>Two Days Program</h5>
                <p className={styles.programItemDescription}>
                  Two days entrepreneurship development program for education institutions and students
                </p>
              </div>
            </div>
          </motion.div>

          {/* Additional CTA */}
          <motion.div className={styles.ctaSection} variants={itemVariants}>
            <p className={styles.ctaText}>
              Ready to start your entrepreneurship journey? Join our consortium today!
            </p>
            <div className={styles.formLinkWrapper}>
              <Button
                text="Become a Member Now"
                color="#429122"
                link="https://docs.google.com/forms/d/e/1FAIpQLSdjglByxGZ6h8GqThp5-e8wU1Sru0LxxiEe6r2Q323wCxOL7w/viewform?vc=0&c=0&w=1"
              />
            </div>
          </motion.div>
        </motion.section>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}