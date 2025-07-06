import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Testimonial.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Anupam Mishra',
    role: 'CEO',
    content: 'VYOMINI model of Sustaianable Sanittaion is the real answer to all sanitation isuues which is affordable also.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Shivalika Mishra',
    role: 'CSR Manager, NSF',
    content: 'We have worked with VYOMINI in 2019 they are committed organization deliver activities in time.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 4
  },
  {
    id: 3,
    name: 'Meenu',
    role: 'SHG members, Hisar',
    content: 'VYOMINI UDYAMI consortium helped me in my business development.',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const starVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 175
      }
    })
  };

  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Testimonial</h2>
        
        <div className={styles.testimonialWrapper}>
          <AnimatePresence custom={1} mode='wait'>
            <motion.div
              key={testimonials[currentIndex].id}
              custom={1}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className={styles.testimonialCard}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.testimonialContent}>
                {testimonials[currentIndex].content}
              </p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={starVariants}
                    className={`${styles.star} ${i < testimonials[currentIndex].rating ? styles.filled : ''}`}
                  >
                    ★
                  </motion.span>
                ))}
              </div>
              <div className={styles.authorInfo}>
                <motion.img 
                  src={testimonials[currentIndex].avatar} 
                  alt={testimonials[currentIndex].name}
                  className={styles.avatar}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                />
                <div>
                  <h4 className={styles.authorName}>{testimonials[currentIndex].name}</h4>
                  <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className={styles.controls}>
            <button 
              onClick={prevTestimonial}
              className={styles.controlButton}
              aria-label="Previous testimonial"
            >
              &lt;
            </button>
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