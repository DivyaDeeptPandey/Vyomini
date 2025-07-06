import React from 'react';
import { motion } from 'framer-motion';
import styles from './OurTeamPage.module.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

import prachiImg from '../../assets/TeamMembers/prachiImg.jpeg';
import sangeetaImg from '../../assets/TeamMembers/sangeetaImg.jpeg';
import bhagyashreeImg from '../../assets/TeamMembers/bhagyashreeImg.png';
import sheetalImg from '../../assets/TeamMembers/sheetal.jpg';
import kusumImg from '../../assets/TeamMembers/kusum.jpg';
import komalImg from '../../assets/TeamMembers/komal.jpg';

import pawanImg from '../../assets/Advisory/pawan.jpg';
import udayImg from '../../assets/Advisory/uday.jpg';
import arpitaImg from '../../assets/Advisory/arpita.jpg';
import sanjayImg from '../../assets/Advisory/sanjay.jpg';
import rkImg from '../../assets/Advisory/rk.jpg';
import manvendraImg from '../../assets/Advisory/manvendra.jpg';

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
      damping: 10,
      duration: 0.5,
    },
  },
};

const memberVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 },
  },
};

const TeamPage = () => {
  const teamMembers = [
    {
      image: prachiImg,
      name: 'Prachi Kaushik',
      designation: 'Founder and Director',
      about: `Prachi Kaushik is the Founder & Director of VYOMINI SOCIAL FOUNDATION (VSF)...`,
    },
    {
      image: sangeetaImg,
      name: 'Sangeeta Panda',
      designation: 'IT Professional - Senior Leader',
      about: `Sangeeta's dedication to social causes is truly inspiring...`,
    },
    {
      image: bhagyashreeImg,
      name: 'Bhagyashree Sagar',
      designation: 'Communication Professional',
      about: `Bhagyashree Sagar, a communication professional...`,
    },
    {
      image: kusumImg,
      name: 'Kusum Kanojia',
      designation: 'Writer',
      about: `Kusum Kanojia is a professional of communication and media for more than 8 years...`,
    },
    {
      image: sheetalImg,
      name: 'Sheetal Sharma',
      designation: 'Project Manager Delhi(Branch)',
      about: `Mrs. Sheetal is Project Manager at VYOMINI Delhi branch...`,
    },
    {
      image: komalImg,
      name: 'Komal',
      designation: 'Master Trainer',
      about: `Ms Komal is a development sector professional...`,
    },
  ];

  const advisoryMembers = [
    {
      image: pawanImg,
      name: 'Pawan Sharma',
      designation: 'IT Professional',
    },
    {
      image: udayImg,
      name: 'P Uday Kumar',
      designation: 'Consultant',
    },
    {
      image: arpitaImg,
      name: 'Arpita Mishra',
      designation: 'Professor, DDU College, DU',
    },
    {
      image: sanjayImg,
      name: 'Sanjay Bhardwaj',
      designation: 'Dy. Director',
    },
    {
      image: rkImg,
      name: 'R. K. Chandra',
      designation: 'Ex Financial Adviser',
    },
    {
      image: manvendraImg,
      name: 'Manvendra Yadav',
      designation: 'Professor, ARSD College',
    },
  ];

  return (
    <div>
      <NavBar />

      {/* OUR TEAM Section */}
      <motion.section
        className={styles.teamSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className={styles.heading} variants={headingVariants}>
          OUR TEAM
        </motion.h2>

        {teamMembers.map((member, i) => (
          <motion.div
            key={i}
            variants={memberVariants}
            custom={i}
            whileHover="hover"
          >
            <TeamMember {...member} />
          </motion.div>
        ))}
      </motion.section>

      {/* ADVISORY BOARD Section */}
      <motion.section
        className={styles.teamSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 className={styles.heading} variants={headingVariants}>
          ADVISORY BOARD
        </motion.h2>

        <div className={styles.advisoryGrid}>
          {advisoryMembers.map((member, i) => (
            <motion.div
              key={i}
              className={styles.advisoryCard}
              variants={memberVariants}
              custom={i}
              whileHover="hover"
            >
              <img
                src={member.image}
                alt={member.name}
                className={styles.advisoryImage}
              />
              <h4 className={styles.advisoryName}>{member.name}</h4>
              <p className={styles.advisoryRole}>{member.designation}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default TeamPage;
