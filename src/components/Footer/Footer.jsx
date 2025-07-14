import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Column 1: Useful Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Useful Links</h3>
          <ul className={styles.links}>
            <li><a href="/">Home</a></li>
            <li><a href="/work-with-us">Work With Us</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 2: Address and Social Icons */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Our Offices</h3>
          <p>Registered: 40 Sultanpur Mazra, Delhi - 110086</p>
          <p>Regional: Shri Ganesh City, Vrindavan - 281121</p>
          <p>NSIC Technical Service Center, Okhla Phase III, New Delhi</p>

          <div className={styles.socialIcons}>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
          </div>
        </div>

        {/* Column 3: Policy Links */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Legal</h3>
          <ul className={styles.links}>
            <a href="/Privacy_Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a><br />
            <a href="/Terms_of_Service.pdf" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className={styles.bottom}>
        <p>© 2016 All rights reserved — Vyomini Social Enterprise</p>
      </div>
    </footer>
  );
};

export default Footer;
