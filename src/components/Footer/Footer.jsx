import React from "react";
import styles from "./footer.module.css";
import { FaLinkedin, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Useful Links */}
        <div className={styles.section}>
          <h3>Useful Links</h3>
          <ul className={styles.links}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Office Info */}
        <div className={styles.section}>
          <p>Registered Office:- 40 Sultanpur Mazra, Delhi</p>
          <p>Pin code: 110086</p>
          <p>Regional Office:- Shri Ganesh City Vrindavan - 281121</p>
          <p>NSIC Technical Service Center, near Govind Puri Metro Station, Okhla Phase III New Delhi</p>
          <div className={styles.socialIcons}>
            <FaLinkedin />
            <FaYoutube />
            <FaXTwitter />
            <FaInstagram />
            <FaFacebookF />
          </div>
        </div>

        {/* Policies */}
        <div className={styles.section}>
          <ul className={styles.links}>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Conditions</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <p>@2016 all rights reserved vyomini social enterprise</p>
      </div>
    </footer>
  );
};

export default Footer;
