import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonial.module.css';

import Img1 from '../../assets/testimonials/1.jpeg';
import Img2 from '../../assets/testimonials/2.jpeg';
import Img3 from '../../assets/testimonials/3.jpeg';
import Img4 from '../../assets/testimonials/4.jpeg';
import Img5 from '../../assets/testimonials/5.jpeg';
import Img6 from '../../assets/testimonials/6.jpeg';
// Simplified testimonial data array with only images
const testimonials = [
  {
    id: 1,
    image: Img1
  },
  {
    id: 2,
    image: Img2
  },
  {
    id: 3,
    image: Img3
  },
  { 
    id: 4,
    image: Img4
  },
  {
    id: 5,
    image: Img5
  },
  {
    id: 6,
    image: Img6
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const testimonialVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    },
    exit: (dir) => ({
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }
    })
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Testimonials</h2>

        {/* Image Carousel Container */}
        <div className={styles.carouselContainer}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={testimonials[currentIndex].id}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.imageCard}
            >
              {/* Testimonial Image */}
              <div className={styles.imageWrapper}>
                <motion.img
                  src={testimonials[currentIndex].image}
                  alt={`Testimonial ${testimonials[currentIndex].id}`}
                  className={styles.testimonialImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className={styles.controls}>
            <button
              onClick={prevTestimonial}
              className={styles.controlButton}
              aria-label="Previous testimonial"
            >
              &lt;
            </button>

            {/* Navigation dots */}
            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className={styles.controlButton}
              aria-label="Next testimonial"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;