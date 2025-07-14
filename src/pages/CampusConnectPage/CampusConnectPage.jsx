// CampusConnectPage.jsx
// This component displays a carousel/gallery of images with motion animations
// showcasing Vyomini's Campus Connect initiative

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CampusConnectPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// Importing gallery images
import campusImg1 from "../../assets/CampusConnectImgs/campus_connect_img1.jpg";
import campusImg2 from "../../assets/CampusConnectImgs/campus_connect_img2.jpg";
import campusImg3 from "../../assets/CampusConnectImgs/campus_connect_img3.jpeg";
import campusImg4 from "../../assets/CampusConnectImgs/campus_connect_img4.jpeg";
import campusImg5 from "../../assets/CampusConnectImgs/campus_connect_img5.jpeg";
import campusImg6 from "../../assets/CampusConnectImgs/campus_connect_img6.jpeg";

// === Animation Variants for Section + Items ===
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
};

export default function CampusConnectPage({ autoPlay = true, interval = 5000 }) {
    // Array of gallery items to be shown in carousel
    const galleryItems = [
        {
            image: campusImg1,
            title: 'Campus Drive',
            description: 'Students engaging in health awareness drive',
        },
        {
            image: campusImg2,
            title: 'Workshops',
            description: 'Interactive workshops with college students',
        },
        {
            image: campusImg3,
            title: 'Seminar',
            description: 'Vyomini speaker session at a university event',
        },
        {
            image: campusImg4,
            title: 'Youth Campaign',
            description: 'Spreading awareness through campus activities',
        },
        {
            image: campusImg5,
            title: 'Youth Campaign',
            description: 'Spreading awareness through campus activities',
        },
        {
            image: campusImg6,
            title: 'Youth Campaign',
            description: 'Spreading awareness through campus activities',
        }
    ];

    // For theme consistency from CSS variables
    const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });

    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        setColors({
            primary: rootStyles.getPropertyValue('--primary-color').trim(),
            secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
        });
    }, []);

    // Carousel state
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('right');

    // Move to next slide
    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Move to previous slide
    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
        );
    };

    // Navigate directly to a slide
    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    // Auto play effect
    useEffect(() => {
        if (!autoPlay) return;
        const timer = setTimeout(() => nextSlide(), interval);
        return () => clearTimeout(timer);
    }, [currentIndex, autoPlay, interval]);

    // Animation variants for slides
    const slideVariants = {
        hiddenRight: { x: '100%', opacity: 0 },
        hiddenLeft: { x: '-100%', opacity: 0 },
        visible: {
            x: '0',
            opacity: 1,
            transition: { duration: 0.5, ease: 'easeInOut' },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.3 },
        },
    };

    // Animation for thumbnail entry
    const thumbnailVariants = {
        initial: { opacity: 0, y: 20 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 },
        }),
    };

    return (
        <>
            <NavBar />
            <main className={styles.mediaGallerySection}>
                {/* === Page Heading with Green Line === */}
                <motion.div
                    className={styles.headingContainer}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={styles.line} variants={itemVariants}></motion.div>
                    <motion.h2 className={styles.heading} variants={itemVariants}>
                        CAMPUS CONNECT
                    </motion.h2>
                </motion.div>

                {/* === Carousel Section === */}
                <section className={styles.carousel} aria-label="Campus Connect Carousel">
                    <div className={styles.carouselMain} aria-live="polite">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className={styles.slide}
                                variants={slideVariants}
                                initial={direction === 'right' ? 'hiddenRight' : 'hiddenLeft'}
                                animate="visible"
                                exit="exit"
                            >
                                <figure>
                                    <img
                                        src={galleryItems[currentIndex].image}
                                        alt={galleryItems[currentIndex].title}
                                        className={styles.slideImage}
                                    />
                                    {/* Caption for current slide */}
                                    <motion.figcaption
                                        className={styles.slideCaption}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                    >
                                        <h3>{galleryItems[currentIndex].title}</h3>
                                        <p>{galleryItems[currentIndex].description}</p>
                                    </motion.figcaption>
                                </figure>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
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

                    {/* Thumbnails */}
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

                    {/* Navigation dots */}
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
                </section>

                {/* === Description Paragraph === */}
                <motion.section
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants}>
                        <strong>Campus Connect</strong> is Vyomini’s youth-centric initiative that bridges awareness and action.
                        Through engaging seminars, interactive workshops, and student-led campaigns across colleges and universities,
                        we aim to spark meaningful conversations around health, hygiene, and empowerment.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        By fostering leadership and social responsibility among students, Campus Connect transforms educational
                        institutions into powerful platforms for change — encouraging young minds to champion causes that impact
                        their communities.
                    </motion.p>
                </motion.section>
            </main>
            <Footer />
        </>
    );
}
