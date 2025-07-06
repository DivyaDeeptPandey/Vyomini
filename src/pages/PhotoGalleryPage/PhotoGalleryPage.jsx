import { motion } from 'framer-motion';
import styles from './PhotoGalleryPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import img1 from "../../assets/PhotoGalleryImgs/img1.jpg";
import img2 from "../../assets/PhotoGalleryImgs/img2.jpg";
import img3 from "../../assets/PhotoGalleryImgs/img3.jpg";
import img4 from "../../assets/PhotoGalleryImgs/img4.jpg";


const images = [
  { src: img1, alt: "Community health workshop" },
  { src: img2, alt: "Outreach event" },
  { src: img3, alt: "Youth education session" },
  { src: img4, alt: "Empowerment activity" },
];
export default function PhotoGalleryPage() {
  return (
    <div>
      <NavBar />
      <motion.section
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.heading}>Gallery: Moments of Impact</h2>

        <div className={styles.grid}>
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={img.src} alt={img.alt} className={styles.image} />
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Our gallery showcases real-life moments from our events in India, Africa, and the UK—where we come together for health, education, and empowerment.
        </motion.p>
      </motion.section>
      <Footer />
    </div>
  );
}
