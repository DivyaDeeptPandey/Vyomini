// sections/OurImpactSection.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./OurImpact.module.css";

// 💡 Impact cards data
const impacts = [
  {
    number: "01",
    title: "The Revolution of Menstrual Hygiene Starts Here with VYOMINI",
    description:
      "Vyomini is dedicated to creating long-term solutions to menstrual health and hygiene issues. Our projects are focused on empowering young girls with the knowledge and resources they need to navigate puberty and reproductive health with confidence.",
    linkText: "Report on MHM",
    pdfLink: "Report_On_MHM.pdf",
  },
  {
    number: "02",
    title: "Igniting the Entrepreneurial Journey",
    description:
      "We believe that every human has a unique set of skills that can be harnessed to generate income and live with dignity. We guide aspiring entrepreneurs in transforming their strengths into sustainable businesses.",
    linkText: "Report on EDP",
    pdfLink: "Report_On_EDP.pdf",
  },
  {
    number: "03",
    title: "A Compassionate Approach to Mobile Health Services",
    description:
      "Vyomini’s mobile health initiative delivers compassionate healthcare directly to underserved communities. Services include regular checkups, supplies, and medical referrals—regardless of income or status.",
    linkText: "Report on Health",
    pdfLink: "Report_On_Health.pdf",
  },
  {
    number: "04",
    title: "Incubation Center",
    description:
      "Vyomini empowers entrepreneurs through technical training on raw materials and machinery. This practical knowledge enables confident, independent business creation.",
    linkText: "More Information",
    pdfLink: "Incubation_Center_Information.pdf",
  },
];

const OurImpactSection = () => {
  const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });

  // 🎨 Dynamically fetch primary/secondary theme colors
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary-color').trim(),
      secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
    });
  }, []);

  return (
    <section className={styles.impactSection} id="OurImpactSection">
      <h2 className={styles.heading}>OUR IMPACT</h2>

      {/* 📦 Grid of Impact Cards */}
      <div className={styles.grid}>
        {impacts.map((item, idx) => (
          <motion.div
            key={idx}
            className={styles.card}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className={styles.number}>{item.number}</div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <a
              href={item.pdfLink}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.linkText}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurImpactSection;
