import { motion } from 'framer-motion';
import styles from './MediaGallery.module.css';
import PressCard from './PressCard';
import NavBar from '../../components/NavBar/NavBar';
const MediaGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Sample press data - replace with your actual press items
  const pressItems = [
    {
      id: 1,
      title: "Global Press Journal",
      excerpt: "Featured in international media coverage",
      link: "#"
    },
    {
      id: 2,
      title: "YourStory",
      excerpt: "Highlighted as a social impact startup",
      link: "#"
    },
    {
      id: 3,
      title: "PIB",
      excerpt: "Recognized by Press Information Bureau",
      link: "#"
    },
    {
      id: 4,
      title: "Her Zindagi",
      excerpt: "Women's health feature story",
      link: "#"
    },
    {
      id: 5,
      title: "Sisterhood Saath Saath",
      excerpt: "Community impact coverage",
      link: "#"
    },
    {
      id: 6,
      title: "The Indian Express",
      excerpt: "National newspaper feature",
      link: "#"
    },
    {
      id: 7,
      title: "Scoop Whoop Hindi",
      excerpt: "Digital media coverage",
      link: "#"
    },
    {
      id: 8,
      title: "BW Businessworld",
      excerpt: "Business and social impact feature",
      link: "#"
    }
  ];

  return (
    <>
    <NavBar />
    <motion.div
      className={styles.container}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className={styles.title}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        MEDIA GALLERY
      </motion.h1>
      
      <motion.p 
        className={styles.subtitle}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Our impact through press coverage and publications
      </motion.p>
      
      <motion.div 
        className={styles.galleryGrid}
        variants={containerVariants}
      >
        {pressItems.map((item, index) => (
          <PressCard 
            key={item.id}
            title={item.title}
            excerpt={item.excerpt}
            link={item.link}
            delay={index * 0.1}
          />
        ))}
      </motion.div>
    </motion.div>
    </>
  );
};

export default MediaGallery;