import React from 'react';
import { motion } from 'framer-motion';
import styles from './OurTeamPage.module.css';
import TeamMember from '../../components/TeamMember/TeamMember';
import prachiImg from '../../assets/TeamMembers/prachiImg.jpeg';
import sangeetaImg from '../../assets/TeamMembers/sangeetaImg.jpeg';
import bhagyashreeImg from '../../assets/TeamMembers/bhagyashreeImg.png';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

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

const headingVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.5
    }
  }
};

const memberVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
  hover: {
    y: -5,
    transition: { duration: 0.2 }
  }
};

const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <motion.section 
        className={styles.teamSection}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className={styles.heading}
          variants={headingVariants}
        >
          OUR TEAM
        </motion.h2>

        <motion.div
          variants={containerVariants}
        >
          <motion.div
            variants={memberVariants}
            custom={0}
            whileHover="hover"
          >
            <TeamMember
              image={prachiImg}
              name="Prachi Kaushik"
              designation="Founder and Director"
              about={`Prachi Kaushik is the Founder & Director of VYOMINI SOCIAL FOUNDATION (VSF), based in Delhi, India. At the core of VYOMINI belief is that excluded and resource-poor communities can be revitalized through economic growth and social progress if the true potential of grassroots women entrepreneurs is realized and tapped.
              
              Since 2008, Prachi working on various development issues and in 2017 she quit her government sector job and founded VYOMINI to build a robust ecosystem that enable women led entrepreneurship and leadership in emerging high impact sectors clean energy, agriculture and nutrition, health and sanitation.`}
            />
          </motion.div>

          <motion.div
            variants={memberVariants}
            custom={1}
            whileHover="hover"
          >
            <TeamMember
              image={sangeetaImg}
              name="Sangeeta Panda"
              designation="IT Professional - Senior Leader"
              about={`Sangeeta's dedication to social causes is truly inspiring. From her leadership in empowering women at her firm to her efforts in rural areas, she embodies compassion and drive for positive change. Her commitment to learning languages to better connect with communities reflects her genuine desire to make a difference. Sangeeta's empathetic nature and non-judgmental approach make her a beacon of support for all. In a world where many rush past the basic needs of others, she stands out for her ability to truly listen and understand. Through education, healthcare, skill training, and more, Sangeeta continues to transform lives for the better, leaving a lasting impact on those she touches.`}
            />
          </motion.div>

          <motion.div
            variants={memberVariants}
            custom={2}
            whileHover="hover"
          >
            <TeamMember
              image={bhagyashreeImg}
              name="Bhagyashree Sagar"
              designation="Communication Professional"
              about={`Bhagyashree Sagar, a communication professional is motivated to work for the social and health upliftment of women who are denied equal opportunities for a long. She is motivated to work for the social realities of India.
              She has experience of 5 years working with premier media organizations in India including Press Trust of India and Times Now as an editor and reporter. She holds degrees in English Literature and Journalism from the University of Delhi and IIMC, New Delhi respectively.`}
            />
          </motion.div>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default TeamPage;