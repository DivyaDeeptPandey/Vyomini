import { motion } from 'framer-motion';
import styles from './ContactUs.module.css';
import LocationCard from './LocationCard';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';

const ContactUs = () => {
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
                duration: 0.6
            }
        }
    };

    const locations = [
        {
            title: "Head Office",
            address: "40 Sultanpur Mazra, Delhi",
            pin: "110086",
            phone: "+91 9971700766 / +91 7982886017",
            landmark: "Near Diamond Park"
        },
        {
            title: "Regional Office (Haryana)",
            address: "120, VPO Beri, Ward No-8, District - Jhajjar, Haryana",
            pin: "124201",
            phone: "+91 9625708634"
        },
        {
            title: "Incubation Centre",
            address: "NSC Technical Centre, Okha Phase III, Delhi",
            phone: "9625708634"
        },
        {
            title: "Regional Office (West Bengal)",
            address: "977, Rabindra Sarani, Liluha, Howrah",
            pin: "711204",
            phone: "+91 9625708634"
        }
    ];

    return (
        <>
            <NavBar />
            <div className={styles.pageContainer}>
                <motion.section
                    className={styles.contactSection}
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <motion.h1
                        className={styles.mainHeading}
                        variants={headingVariants}
                    >
                        CONTACT US
                    </motion.h1>

                    <motion.p
                        className={styles.subHeading}
                        variants={headingVariants}
                    >
                        Reach out to us at any of our locations
                    </motion.p>

                    <div className={styles.locationsGrid}>
                        {locations.map((location, index) => (
                            <LocationCard
                                key={index}
                                title={location.title}
                                address={location.address}
                                pin={location.pin}
                                phone={location.phone}
                                landmark={location.landmark}
                                delay={index * 0.15}
                            />
                        ))}
                    </div>

                    <motion.div
                        className={styles.mapContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h3 className={styles.mapHeading}>OUR LOCATIONS</h3>
                        <div className={styles.mapEmbed}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566623874641!2d77.20686431508215!3d28.61272298242593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2e8d6e6a7a9%3A0x9d9a0b3b3b3b3b3b!2s40%2C%20Sultanpur%20Mazra%2C%20New%20Delhi%2C%20Delhi%20110086!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="400"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.chatSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <h3 className={styles.chatHeading}>LET'S CHAT!</h3>
                        <p className={styles.chatText}>
                            Have questions? Reach out to us directly through phone or email.
                        </p>
                        <Button
                            text="Send Us a Message"
                            color="#429122"
                            styles={{ height: "50px", width: "450px" }}></Button>

                    </motion.div>
                </motion.section>
                <Footer />
            </div>
        </>
    );
};

export default ContactUs;