// sections/ProgramSection.jsx
import React from "react";
import { useEffect, useState } from 'react';
import styles from "./Programs.module.css";
import ProgramCard from "../../components/ProgramCard/ProgramCard.jsx";
import img1 from "../../assets/program1.jpg";
import img2 from "../../assets/program2.jpg";
import img3 from "../../assets/program3.jpeg";
import img4 from "../../assets/program4.jpg";
import { color } from "framer-motion";


const ProgramSection = () => {
    const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });
  useEffect(() => {
      const rootStyles = getComputedStyle(document.documentElement);
      setColors({
        primary: rootStyles.getPropertyValue('--primary-color').trim(),
        secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
      });
    }, []);
    const programs = [
  {
    title: "Menstrual Health Management",
    description: "As the statistics suggests the status of Menstrual Health is poor across culture & communities.We have launched \"Rakshak\" a low cost biodegradable sanitary pad with a campaign to address Menstrual Health Management related issues",
    image: img1,
    buttonLink: "/menstrual-health-program",
  },
  {
    title: "Rural outreach",
    description: "In order to penetrate deeper into the rural and remote areas of India, we have actively associated ourselves with multiple block development groups, NGOs and Self-Help groups under National Rural Livelihood Mission GoI, and other grassroots level organizations.",
    image: img2,
    reverse: true,
    buttonColor: colors.secondary,
  },
  {
    title: "campus connect",
    description: "Vyomini collaborates with educational institutions to drive transformative change through knowledge exchange, interactive seminars and workshops, innovative field research, and capacity-building programs. Together, we empower communities with sustainable menstrual health solutions while fostering leadership, awareness, and long-term impact—because education is the foundation of empowerment.",
    image: img3,
  },
  {
    title: "Vyomini Udhyami Consortium",
    description: "The Vyomini Udhyami Consortium empowers aspiring entrepreneurs with end-to-end support—from capacity-building training and legal guidance to digital/financial literacy. For just ₹500/year, members gain access to marketing linkages, government scheme updates, and connections with financial institutions, ensuring a strong foundation to launch and grow their sustainable ventures. Start smart, start supported.",
    image: img4,
    reverse: true,
    buttonColor: colors.secondary,
  },
];
  return (
    <section className={styles.programSection}>
      <h2 className={styles.heading}>OUR PROGRAMS</h2>
      {programs.map((program, index) => (
        <ProgramCard {...program} />
      ))}
    </section>
  );
};

export default ProgramSection;
