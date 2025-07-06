import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhotoGallery.module.css';
import Button from '../../components/Button/Button';
import media_img1 from "../../assets/MediaGalleryImgs/media1.jpg";
import media_img2 from "../../assets/MediaGalleryImgs/media2.jpg";
import media_img3 from "../../assets/MediaGalleryImgs/media3.jpg";
import media_img4 from "../../assets/MediaGalleryImgs/media4.jpg";

const PhotoGallery = ({ autoPlay = true, interval = 5000 }) => {
  const galleryItems = [
    {
      image: media_img1,
      title: 'Beautiful Landscape',
      description: 'Scenic view of mountains at sunset'
    },
    {
      image: media_img2,
      title: 'Ocean Waves',
      description: 'Calming ocean waves crashing on shore'
    },
    {
      image: media_img3,
      title: 'City Skyline',
      description: 'Night view of downtown skyscrapers'
    },
    {
      image: media_img4,
      title: 'City Skyline',
      description: 'Night view of downtown skyscrapers'
    }
  ];
  const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });
  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary-color').trim(),
      secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
    });
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextSlide = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 'right' : 'left');
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => clearTimeout(timer);
  }, [currentIndex, autoPlay, interval]);

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  };

  const thumbnailVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <div className={styles.mediaGallerySection}>
      <h2 className={styles.heading}>Photo Gallery</h2>
      <div className={styles.carousel}>
        <div className={styles.carouselMain}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.slide}
              variants={slideVariants}
              initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
              animate="visible"
              exit="exit"
            >
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className={styles.slideImage}
              />
              {galleryItems[currentIndex].title && (
                <motion.div
                  className={styles.slideCaption}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <h3>{galleryItems[currentIndex].title}</h3>
                  {galleryItems[currentIndex].description && (
                    <p>{galleryItems[currentIndex].description}</p>
                  )}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          <button
            className={`${styles.navButton} ${styles.prevButton}`}
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            &lt;
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            onClick={nextSlide}
            aria-label="Next slide"
          >
            &gt;
          </button>
        </div>

        <div className={styles.thumbnails}>
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
              onClick={() => goToSlide(index)}
              variants={thumbnailVariants}
              initial="initial"
              animate="animate"
              custom={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={item.image}
                alt={`Thumbnail ${index + 1}`}
                className={styles.thumbnailImage}
              />
            </motion.div>
          ))}
        </div>

        <div className={styles.dots}>
          {galleryItems.map((_, index) => (
            <motion.div
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
      <motion.button className={styles.button}>
        <Button text="VIEW MORE" link ="/media" color={colors.primary} styles={{ width: "150px", height: "50px", fontSize: "0.815rem" }} />

      </motion.button>
    </div>
  );
};

export default PhotoGallery;