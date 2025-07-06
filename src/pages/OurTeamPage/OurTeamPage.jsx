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

import pawanImg from '../../assets/Advisory/pawan_sharma.jpeg';
import udayImg from '../../assets/Advisory/uday_kumar.jpeg';
import arpitaImg from '../../assets/Advisory/arpita_mishra.png';
import sanjayImg from '../../assets/Advisory/sanjay_bharadwaj.jpg';
import rkImg from '../../assets/Advisory/r.k_chandra.jpg';
import manvendraImg from '../../assets/Advisory/manvendra_yadav.jpg';

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
      about: `Prachi Kaushik is the Founder & Director of VYOMINI SOCIAL FOUNDATION (VSF), based in Delhi, India. At the core of VYOMINI belief is that excluded and resource-poor communities can be revitalized through economic growth and social progress if the true potential of grassroots women entrepreneurs is realized and tapped.Since 2008, Prachi working on various development issues and in 2017 she quit her government sector job and founded VYOMINI to build a robust ecosystem that enable women led entrepreneurship and leadership in emerging high impact sectors clean energy, agriculture and nutrition, health and sanitation.`,
    },
    {
      image: sangeetaImg,
      name: 'Sangeeta Panda',
      designation: 'IT Professional - Senior Leader',
      about: `Sangeeta's dedication to social causes is truly inspiring. From her leadership in empowering women at her firm to her efforts in rural areas, she embodies compassion and drive for positive change. Her commitment to learning languages to better connect with communities reflects her genuine desire to make a difference. Sangeeta's empathetic nature and non-judgmental approach make her a beacon of support for all. In a world where many rush past the basic needs of others, she stands out for her ability to truly listen and understand. Through education, healthcare, skill training, and more, Sangeeta continues to transform lives for the better, leaving a lasting impact on those she touches.`,
    },
    {
      image: bhagyashreeImg,
      name: 'Bhagyashree Sagar',
      designation: 'Communication Professional',
      about: `Bhagyashree Sagar, a communication professional is motivated to work for the social and health upliftment of women who are denied equal opportunities for a long. She is motivated to work for the social realities of India.She has experience of 5 years working with premier media organizations in India including Press Trust of India and Times Now as an editor and reporter. She holds degrees in English Literature and Journalism from the University of Delhi and IIMC, New Delhi respectively.`,
    },
    {
      image: kusumImg,
      name: 'Kusum Kanojia',
      designation: 'Writer',
      about: `Kusum Kanojia is a professional of communication and media for more than 8 years, she has expertise in government public relations and helping WOMAN to raise their voice at the bigger platform and providing them platform to speak about their issues. She is a writer and working with VYOMINI as Content writer. `,
    },
    {
      image: sheetalImg,
      name: 'Sheetal Sharma',
      designation: 'Project Manager Delhi(Branch)',
      about: `Mrs. Sheetal is Project Manager at VYOMINI Delhi branch. She is managing all activities related to manufacturing to product delivery within the Delhi State. She owns degree in Education and successfully leading a big team of women entrepreneurs in Delhi.`,
    },
    {
      image: komalImg,
      name: 'Komal',
      designation: 'Master Trainer',
      about: `Ms Komal is a development sector professional, she has studied Gender & Development studies. She is working in VYOMINI as master trainer on the issues of reproductive health & hygiene. This young girl is covering Rural India with her dynamic communication skills. She conduct workshop, training and seminar for the awareness and mobilization of masses to classes.

​`,
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
