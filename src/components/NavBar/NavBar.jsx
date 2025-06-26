import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
import Button from '../Button/Button.jsx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/" className={styles['nav-logo']}>
          <img src={logo} alt="Vyomini Logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles['nav-links']}>
          <a href="/" className={pathname === '/' ? styles.active : ''}>Home</a>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <a href="#" className={pathname.startsWith('/menstrual-health-program') ? styles.active : ''}>Programs</a>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <a href="/menstrual-health-program">Menstrual Health Program</a>
                <a href="/menstrual-health-program">Vyomini Suvidha Kendra</a>
                <a href="/menstrual-health-program">Rural Outreach</a>
                <a href="/menstrual-health-program">Women Empowerment</a>
                <a href="/menstrual-health-program">Franchise Model</a>
              </div>
            )}
          </div>

          <a href="/our-team" className={pathname === '/our-team' ? styles.active : ''}>Our Team</a>
          <a href="/work-with-us" className={pathname === '/work-with-us' ? styles.active : ''}>Work With Us</a>
          <a href="/media-gallery" className={pathname === '/media-gallery' ? styles.active : ''}>Gallery</a>
          <a href="/contact-us" className={pathname === '/contact-us' ? styles.active : ''}>Contact Us</a>
        </div>

        <div className={styles['donate-btn']}>
          <Button text="Donate" color="#429122" styles={{ height: "50px", width: "150px" }} />
        </div>

        {/* Mobile Hamburger */}
        <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles.active : ''}`}>
        <a href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="/menstrual-health-program" onClick={() => setIsMenuOpen(false)}>Programs</a>
        <a href="/our-team" onClick={() => setIsMenuOpen(false)}>Our Team</a>
        <a href="/work-with-us" onClick={() => setIsMenuOpen(false)}>Work With Us</a>
        <a href="/media-gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a>
        <a href="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
        <Button text="Donate" color="#429122" />
      </div>
    </>
  );
}
