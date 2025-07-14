import React from "react";
import { motion } from "framer-motion";
import styles from "./DonationPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function DonatePage() {
  return (
    <>
      <NavBar />
      <motion.section
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className={styles.headingContainer} variants={itemVariants}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>SUPPORT OUR MOVEMENT</h2>
        </motion.div>

        <motion.p className={styles.description} variants={itemVariants}>
          Your <strong>donations</strong> are crucial for our movement! Your{" "}
          <strong>contributions</strong> will ensure women do <u>NOT</u> have to
          compromise on menstrual hygiene.
        </motion.p>

        <motion.ul className={styles.donationList} variants={itemVariants}>
          <li>
            • Donate <span className={styles.amount}>INR 300</span> for helping one
            underprivileged woman with a year-round supply of sanitary napkins.
          </li>
          <li>
            • Donate <span className={styles.amount}>INR 5,000</span> for a Menstrual
            Awareness Workshop in remote areas.
          </li>
          <li>
            • Donate <span className={styles.amount}>INR 7,000</span> to install a vending
            machine.
          </li>
          <li>
            • Donate <span className={styles.amount}>INR 12,000</span> to install an
            incinerator.
          </li>
          <li>
            • Donate <span className={styles.amount}>INR 1,00,000</span> to set up a
            manufacturing unit in backward regions.
          </li>
          <li>
            • Donate <span className={styles.amount}>INR 10,00,000</span> to adopt villages
            and ensure all menstruating women receive pads & awareness.
          </li>
        </motion.ul>

        <motion.p className={styles.impact} variants={itemVariants}>
          We will ensure that every Rupee counts!
        </motion.p>

        <motion.p className={styles.infoText} variants={itemVariants}>
          All Indian contributions will receive a{" "}
          <strong>Tax Exemption Certificate</strong> under section 80G. Please send us
          your email/address to receive the certificate. Contact us at{" "}
          <a href="mailto:info@vyomini.org">info@vyomini.org</a>.
        </motion.p>

        <motion.div className={styles.bankSection} variants={itemVariants}>
          <h3 className={styles.subheading}>Bank Details for NEFT/RTGS Transfer:</h3>
          <div className={styles.bankBoxWrapper}>
            <motion.div className={styles.bankBox} whileHover={{ scale: 1.02 }}>
              <p><strong>Account Name:</strong> VYOMINI SOCIAL FOUNDATION</p>
              <p><strong>Account No:</strong> 9971700766</p>
              <p><strong>Bank Name:</strong> KOTAK MAHINDRA</p>
              <p><strong>IFSC:</strong> KKBK0004601</p>
            </motion.div>

            <motion.div className={styles.bankBox} whileHover={{ scale: 1.02 }}>
              <p><strong>FCRA</strong></p>
              <p><strong>SBI:</strong> 42410642032</p>
              <p><strong>IFSC CODE:</strong> SBIN0000691</p>
              <p><strong>SWIFT CODE:</strong> SBININBB104</p>
              <p><strong>BRANCH:</strong> NEW DELHI MAIN BRANCH</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
      <Footer />
    </>
  );
}
