// src/pages/JobOpenings.jsx
import { motion } from 'framer-motion';
import styles from './JobOpenings.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { mark } from 'framer-motion/client';

const jobOpenings = [
  {
    title: 'UI/UX Designer',
    description: 'Design intuitive and visually engaging user interfaces for our web and mobile platforms.',
    link: 'https://example.com/apply/ui-ux',
  },
  {
    title: 'Program Coordinator',
    description: 'Coordinate field operations, community outreach, and partner collaborations.',
    link: 'https://example.com/apply/program-coordinator',
  },
  {
    title: 'Field Research Analyst',
    description: 'Collect, analyze, and report data to support impact measurement and program design.',
    link: 'https://example.com/apply/research-analyst',
  },
  {
    title: 'Content & Communication Lead',
    description: 'Craft compelling narratives across our digital and print platforms to amplify our mission.',
    link: 'https://example.com/apply/content-lead',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const JobOpenings = () => {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <motion.h1
          className={styles.title}
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Job Openings
        </motion.h1>

        <motion.div
          className={styles.cardsContainer}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {jobOpenings.map((job, index) => (
            <motion.div key={index} className={styles.card} variants={cardVariants}>
              <h2 className={styles.jobTitle}>{job.title}</h2>
              <p className={styles.description}>{job.description}</p>
              <Button
                text="Apply"
                link={job.link}
                color="var(--primary-color)"
                styles={{
                  height: '25px',
                  width: '50px',
                  alignSelf: 'center',
                  marginTop: '20px',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default JobOpenings;
