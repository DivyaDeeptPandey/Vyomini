// sections/ProgramSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./Programs.module.css";
import ProgramCard from "../../components/ProgramCard/ProgramCard.jsx";

// Program images
import img1 from "../../assets/program1.jpg";
import img2 from "../../assets/program2.jpg";
import img3 from "../../assets/program3.jpeg";
import img4 from "../../assets/program4.jpg";

const ProgramSection = () => {
  const [colors, setColors] = useState({
    primary: "#429122",
    secondary: "#ABA104",
  });

  // 🌈 Get CSS variables from :root
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue("--primary-color").trim(),
      secondary: rootStyles.getPropertyValue("--secondary-color").trim(),
    });
  }, []);

  // 🧩 All program cards
  const programs = [
    {
      title: "Menstrual Health Management",
      description:
        'As the statistics suggests the status of Menstrual Health is poor across culture & communities. We have launched "Rakshak" — a low cost biodegradable sanitary pad with a campaign to address Menstrual Health Management related issues.',
      image: img1,
      buttonLink: "/menstrual-health-program",
      buttonColor: colors.primary,
    },
    {
      title: "Rural Outreach",
      description:
        "To penetrate deeper into rural and remote areas, we actively associate with block development groups, NGOs, SHGs under NRLM, and grassroots organizations.",
      image: img2,
      reverse: true,
      buttonLink: "/rural-outreach-program",
      buttonColor: colors.secondary,
    },
    {
      title: "Campus Connect",
      description:
        "Vyomini partners with educational institutions for change via workshops, research, and capacity-building. We promote leadership and sustainable menstrual health education.",
      image: img3,
      buttonLink: "/campus-connect-program",
      buttonColor: colors.primary,
    },
    {
      title: "Vyomini Udhyami Consortium",
      description:
        "Empowering aspiring entrepreneurs with training, legal guidance, financial literacy, and marketing access — all for just ₹500/year to support sustainable ventures.",
      image: img4,
      reverse: true,
      buttonLink: "/vyomini-udhyami-consortium",
      buttonColor: colors.secondary,
    },
  ];

  return (
    <section className={styles.programSection}>
      <h2 className={styles.heading}>OUR SERVICES</h2>

      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          title={program.title}
          description={program.description}
          image={program.image}
          reverse={program.reverse}
          buttonLink={program.buttonLink}
          buttonColor={program.buttonColor}
        />
      ))}
    </section>
  );
};

export default ProgramSection;
