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
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
