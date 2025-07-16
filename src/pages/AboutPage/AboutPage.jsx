import { motion } from "framer-motion";
import styles from "./AboutPage.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const AboutSection = () => {
  return (
    <div>
      <NavBar />
      <main className={styles.container}>
        {/* Page Heading */}
        <motion.h1
          className={styles.heading}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          ABOUT VYOMINI
        </motion.h1>

        {/* About Description */}
        <motion.article
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p>
            In 2017, VYOMINI was founded by young women social activists to provide solutions to
            social, economic, and environmental challenges. It is registered under Section 8 of the
            Companies Act as a not-for-profit entity.
          </p>

          <p>
            The first project launched was a Menstrual Health Management (MHM) program in Jhajjar
            District of Haryana and Delhi slums, using a 360-degree approach—Awareness,
            Accessibility, and Affordability.
          </p>

          <p>
            Over time, the program expanded to other districts and states. In a short span, over 10
            lakh women were covered under the MHM program—making a life-changing impact on both
            beneficiaries and founders.
          </p>

          <p>
            VYOMINI also began employment generation initiatives through capacity-building
            workshops for marginalized groups, SHGs, and NGOs. Today, we focus on entrepreneurship
            development and community health.
          </p>

          <p>
            We are building an ecosystem for women’s economic and social empowerment through
            financial inclusion, livelihood training, entrepreneurship support, marketing, and
            manufacturing.
          </p>

          <p>
            We are committed to delivering sustainable models with the theme{" "}
            <span className={styles.highlight}>"Woman First, Prosperity for All."</span> We believe
            that if women lead development, sustainable development goals will naturally follow.
          </p>
        </motion.article>

        {/* Resource Links Section */}
        <motion.section
          className={styles.links}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div>
            <motion.a
              href="/ANNUAL_REPORT_VYOMINI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.reportHeadingLink} ${styles.noUnderline}`}
              whileHover={{ scale: 1.05 }}
            >
              <h4>Annual Reports</h4>
            </motion.a>
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
            <a href="/donate">FCRA</a>
            <a href="/donate">Domestic</a>
          </div>

          <div>
            <h4>Audit Reports</h4>
            <a href="/Audit_Report_22-23.pdf" target="_blank" rel="noopener noreferrer">2022-23</a>
            <a href="/Audit_Report_21-22.pdf" target="_blank" rel="noopener noreferrer">2021-22</a>
            <a href="/Audit_Report_20-21.pdf" target="_blank" rel="noopener noreferrer">2020-21</a>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutSection;
