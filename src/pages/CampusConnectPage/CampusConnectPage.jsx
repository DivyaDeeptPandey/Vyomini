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

                {/* === Description Section === */}
                <motion.section
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants}>
                        <strong>Campus Connect</strong> is Vyomini's youth-centric initiative that bridges awareness and action.
                        Through engaging seminars, interactive workshops, and student-led campaigns across colleges and universities,
                        we aim to spark meaningful conversations around health, hygiene, and empowerment.
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        By fostering leadership and social responsibility among students, Campus Connect transforms educational
                        institutions into powerful platforms for change — encouraging young minds to champion causes that impact
                        their communities.
                    </motion.p>
                </motion.section>

                {/* === New Detailed Information Section === */}
                <motion.section 
                    className={styles.detailedSection}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className={styles.programOverview} variants={itemVariants}>
                        <h3 className={styles.detailedHeading}>Our Flagship Youth Empowerment Program</h3>
                        <p className={styles.programDescription}>
                            Our flagship program to empower youth in right direction for the nation building is connecting 
                            education institution and supporting youth for entrepreneurship development, menstrual health 
                            awareness, positive engagement, field visit, internship, personality development, exposure to 
                            rural lifestyle etc. We have done MoU with various education institutions to promote sustainable 
                            sanitation, entrepreneurship and internship opportunities.
                        </p>
                    </motion.div>

                    {/* Statistics */}
                    <motion.div className={styles.statsContainer} variants={itemVariants}>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>50+</div>
                            <div className={styles.statLabel}>Institutions Reached Out</div>
                        </div>
                        <div className={styles.statItem}>
                            <div className={styles.statNumber}>5500+</div>
                            <div className={styles.statLabel}>Students Engaged</div>
                        </div>
                    </motion.div>

                    {/* Program Activities */}
                    <motion.div className={styles.activitiesSection} variants={itemVariants}>
                        <h4 className={styles.activitiesHeading}>Program Activities Include:</h4>
                        <div className={styles.activitiesGrid}>
                            <div className={styles.activityCard}>
                                <h5>Entrepreneurship Development</h5>
                                <p>Nurturing young entrepreneurs with skills and opportunities</p>
                            </div>
                            <div className={styles.activityCard}>
                                <h5>Menstrual Health Awareness</h5>
                                <p>Breaking taboos and promoting hygiene education</p>
                            </div>
                            <div className={styles.activityCard}>
                                <h5>Positive Engagement</h5>
                                <p>Creating meaningful youth participation platforms</p>
                            </div>
                            <div className={styles.activityCard}>
                                <h5>Field Visits & Rural Exposure</h5>
                                <p>Connecting urban youth with rural realities</p>
                            </div>
                            <div className={styles.activityCard}>
                                <h5>Internship Programs</h5>
                                <p>Practical learning and career development opportunities</p>
                            </div>
                            <div className={styles.activityCard}>
                                <h5>Personality Development</h5>
                                <p>Building confident and responsible future leaders</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div className={styles.ctaSection} variants={itemVariants}>
                        <div className={styles.ctaContent}>
                            <h4 className={styles.ctaHeading}>Join the Movement!</h4>
                            <p className={styles.ctaDescription}>
                                Connect your institution, explore internship opportunities, or invite us as speakers 
                                for your next campus event. Together, let's build a brighter future.
                            </p>
                            <div className={styles.ctaButtons}>
                                <button className={styles.ctaButtonPrimary}>Connect Your Institution</button>
                                <button className={styles.ctaButtonSecondary}>Invite as Speaker</button>
                                <button className={styles.ctaButtonSecondary}>Internship Opportunities</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
            </main>
            <Footer />
        </>
    );
}