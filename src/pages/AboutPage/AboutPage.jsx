import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const AboutSection = () => {
  return (
    <div>
      <NavBar />
      <section className={styles.container}>
      <motion.h1
        className={styles.heading}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        ABOUT VYOMINI
      </motion.h1>

      <motion.div
        className={styles.content}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p>
          In 2017 VYOMINI was founded by young women social activist to provide solution to
          social, economic and environmental challenges. It is registered under Company Section 8
          as a not for profit entity.
        </p>

        <p>
          The first project launched by VYOMINI was Menstrual Health Management program at
          Jhajjar District of Haryana and Delhi Slums with 360 degree approach with 3As that is
          Awareness, Accessibility and Affordability of the MHM.
        </p>

        <p>
          With the passage of time development projects extended to other district of Haryana and
          also launched in different states of India. In a very short span of time 10 lakh women
          covered under MHM program. The impact created in two years become the life changer for
          founder and beneficiaries.
        </p>

        <p>
          In 2017 VYOMINI started employment generation program through capacity building workshop
          for underprivileged and marginalized section of the society, SHGs, NGOs. Now we are
          deliberately working on entrepreneurship development program and Community Health.
        </p>

        <p>
          We are creating eco-system for the women economic & social upliftment through financial
          inclusion, livelihood training, entrepreneurship development programs, marketing,
          trading and manufacturing activities.
        </p>

        <p>
          We are committed to provide sustainable model to the society while keeping the theme{" "}
          <span className={styles.highlight}>"Woman First Prosperity for All"</span>. We strongly
          believe if women are keep at the forefront of development and if they get opportunities
          to participate in the development process then there is no point that sustainable
          development goal is not achieved.
        </p>
      </motion.div>

      <motion.div
        className={styles.links}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div>
          <h4>Annual Report</h4>
          <a href="/Brief_Profile.pdf" target="_blank" rel="noopener noreferrer">Brief Profile</a>
          <a href="/Project_Report.pdf" target="_blank" rel="noopener noreferrer">Project Report</a>
          <a href="/MHM_Report.pdf" target="_blank" rel="noopener noreferrer">MHM Report</a>
        </div>
        <div>
          <h4>Policies</h4>
          <a href="/Policy_Manual.pdf" target="_blank" rel="noopener noreferrer">Policy Manual</a>
          <a href="/Finance_Manual.pdf" target="_blank" rel="noopener noreferrer">Finance Manual</a>
        </div>
        <div>
          <h4>Bank Details</h4>
          <a href="#">FCRA</a>
          <a href="#">Domestic</a>
        </div>
        <div>
          <h4>Audit Report</h4>
          <a href="/Audit_Report_22-23.pdf" target="_blank" rel="noopener noreferrer">2022-23</a>
          <a href="/Audit_Report_21-22.pdf" target="_blank" rel="noopener noreferrer">2021-22</a>
          <a href="/Audit_Report_20-21.pdf" target="_blank" rel="noopener noreferrer">2020-21</a>
        </div>
      </motion.div>
    </section>
    <Footer />
    </div>
  );
};

export default AboutSection;
