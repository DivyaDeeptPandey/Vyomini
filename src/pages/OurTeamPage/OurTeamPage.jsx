import React from 'react';
import { motion } from 'framer-motion';
import styles from './OurTeamPage.module.css';

// Components
import TeamMember from '../../components/TeamMember/TeamMember';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// === Team Member Images ===
import prachiImg from '../../assets/TeamMembers/prachiImg.jpeg';
import sangeetaImg from '../../assets/TeamMembers/sangeetaImg.jpeg';
import bhagyashreeImg from '../../assets/TeamMembers/bhagyashreeImg.png';
import sheetalImg from '../../assets/TeamMembers/sheetal.jpg';
import kusumImg from '../../assets/TeamMembers/kusum.jpg';
import komalImg from '../../assets/TeamMembers/komal.jpg';

// === Advisory Member Images ===
import pawanImg from '../../assets/Advisory/pawan_sharma.jpeg';
import udayImg from '../../assets/Advisory/uday_kumar.jpeg';
import arpitaImg from '../../assets/Advisory/arpita_mishra.png';
import sanjayImg from '../../assets/Advisory/sanjay_bharadwaj.jpg';
import rkImg from '../../assets/Advisory/r.k_chandra.jpg';
import manvendraImg from '../../assets/Advisory/manvendra_yadav.jpg';

// === Animation Variants ===
// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: 'beforeChildren',
    },
  },
};

const headingVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
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
      ease: 'easeOut',
    },
  },
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};


// === Component Function ===
const TeamPage = () => {
  // === Team Members Data ===
  const teamMembers = [
    {
      image: prachiImg,
      name: 'Prachi Kaushik',
      designation: 'Founder and Director',
      about: 'Prachi Kaushik is the Founder & Director of VYOMINI SOCIAL FOUNDATION (VSF), based in Delhi, India. She founded VYOMINI to build a robust ecosystem for women-led entrepreneurship in high-impact sectors such as clean energy, agriculture, health, and sanitation.',
    },
    {
      image: bhagyashreeImg,
      name: 'Bhagyashree Sagar',
      designation: 'Communication Professional',
      about: 'With 5 years of experience in major Indian media houses, Bhagyashree works to amplify women’s voices and improve access to opportunities in India.',
    },
    {
      image: kusumImg,
      name: 'Kusum Kanojia',
      designation: 'Writer',
      about: 'With over 8 years in media and government PR, Kusum helps women amplify their voices and currently works with VYOMINI as a content writer.',
    },
    {
      image: sheetalImg,
      name: 'Naresh Kaushik',
      designation: 'Project Manager – Delhi',
      about: 'Mrs. Sheetal manages operations in Delhi and leads a large team of women entrepreneurs. She holds a degree in Education.',
    },
    {
      image: komalImg,
      name: 'Komal',
      designation: 'Master Trainer',
      about: 'Komal, a Gender & Development Studies graduate, works as a master trainer, conducting awareness programs on reproductive health across rural India.',
    },
  ];

  // === Advisory Board Data ===
  const advisoryMembers = [
    { image: pawanImg, name: 'Pawan Sharma', designation: 'IT Professional' },
    { image: udayImg, name: 'P Uday Kumar', designation: 'Consultant' },
    { image: arpitaImg, name: 'Arpita Mishra', designation: 'Professor, DDU College, DU' },
    { image: sanjayImg, name: 'Sanjay Bhardwaj', designation: 'Dy. Director' },
    { image: rkImg, name: 'R. K. Chandra', designation: 'Ex Financial Adviser' },
    { image: manvendraImg, name: 'Manvendra Yadav', designation: 'Professor, ARSD College' },
  ];

  return (
    <>
      <NavBar />

      {/* === OUR TEAM Section === */}
      <motion.section
        className={styles.teamSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>OUR TEAM</h2>
        </div>

        {teamMembers.map((member, i) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            custom={i}
            whileHover="hover"
            className={styles.memberBox}
          >
            <TeamMember {...member} />
          </motion.div>
        ))}
      </motion.section>

      {/* === ADVISORY BOARD Section === */}
      <motion.section
        className={styles.teamSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>ADVISORY BOARD</h2>
        </div>
        <ul className={styles.advisoryGrid}>
          {advisoryMembers.map((member, i) => (
            <motion.li
              key={member.name}
              className={styles.advisoryCard}
              variants={itemVariants}
              custom={i}
              whileHover="hover"
            >
              <img
                src={member.image}
                alt={`Portrait of ${member.name}`}
                className={styles.advisoryImage}
              />
              <h4 className={styles.advisoryName}>{member.name}</h4>
              <p className={styles.advisoryRole}>{member.designation}</p>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <Footer />
    </>
  );
};

export default TeamPage;
