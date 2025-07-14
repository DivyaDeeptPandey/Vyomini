import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
import Button from '../Button/Button.jsx';
import { useLocation, Link } from 'react-router-dom';

export default function NavBar() {
  // 📱 UI state hooks
  const [isMenuOpen, setIsMenuOpen] = useState(false); // mobile menu toggle
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // desktop dropdown toggle
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // mobile dropdown toggle

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      {/* === Main Navbar === */}
      <nav className={styles.navbar}>
        {/* 🔗 Logo (click to go to homepage) */}
        <Link to="/" className={styles['nav-logo']}>
          <img src={logo} alt="Vyomini Logo" />
        </Link>

        {/* === Desktop Links === */}
        <div className={styles['nav-links']}>
          <Link to="/" className={pathname === '/' ? styles.active : ''}>Home</Link>

          {/* 🔽 Dropdown (Programs) */}
          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span
              className={`${styles.dropdownTrigger} ${pathname.startsWith('/menstrual-health-program') ||
                  pathname.startsWith('/campus-connect-program') ||
                  pathname.startsWith('/rural-outreach-program') ||
                  pathname.startsWith('/vyomini-udhyami-consortium')
                  ? styles.active
                  : ''
                }`}
            >
              Programs
            </span>

            {/* Desktop Dropdown Content */}
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <Link to="/menstrual-health-program">Menstrual Health Program</Link>
                <Link to="/campus-connect-program">Campus Connect</Link>
                <Link to="/rural-outreach-program">Rural Outreach</Link>
                <Link to="/vyomini-udhyami-consortium">Vyomini Udhyami Consortium</Link>
              </div>
            )}
          </div>

          {/* Other Static Links */}
          <Link to="/our-team" className={pathname === '/our-team' ? styles.active : ''}>Our Team</Link>
          <Link to="/work-with-us" className={pathname === '/work-with-us' ? styles.active : ''}>Work With Us</Link>
          <Link to="/media-gallery" className={pathname === '/media-gallery' ? styles.active : ''}>Media</Link>
          <Link to="/media" className={pathname === '/media' ? styles.active : ''}>Gallery</Link>
          <Link to="/contact-us" className={pathname === '/contact-us' ? styles.active : ''}>Contact Us</Link>
        </div>

        {/* 💰 Desktop Donate Button */}
        <div className={styles['donate-btn']}>
          <Button text="Donate" color="#429122" styles={{ height: "50px", width: "150px" }} />
        </div>

        {/* 🍔 Hamburger Menu for Mobile */}
        <div
          className={styles.hamburger}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </nav>

      {/* === Mobile Navigation === */}
      <div className={`${styles['mobile-menu']} ${isMenuOpen ? styles.active : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>

        {/* 🔽 Mobile Dropdown (Programs) */}
        <div className={styles.mobileDropdown}>
          <div
            className={styles.mobileDropdownHeader}
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
          >
            Programs
            <span className={styles.dropdownArrow}>
              {isMobileDropdownOpen ? '▼' : '▶'}
            </span>
          </div>

          {/* Mobile Dropdown Content */}
          {isMobileDropdownOpen && (
            <div className={styles.mobileDropdownContent}>
              <Link to="/menstrual-health-program" onClick={() => setIsMenuOpen(false)}>
                Menstrual Health Program
              </Link>
              <Link to="/campus-connect-program" onClick={() => setIsMenuOpen(false)}>
                Campus Connect
              </Link>
              <Link to="/rural-outreach-program" onClick={() => setIsMenuOpen(false)}>
                Rural Outreach
              </Link>
              <Link to="/vyomini-udhyami-consortium" onClick={() => setIsMenuOpen(false)}>
                Vyomini Udhyami Consortium
              </Link>
            </div>
          )}
        </div>

        {/* 📱 Other Mobile Links */}
        <Link to="/our-team" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
        <Link to="/work-with-us" onClick={() => setIsMenuOpen(false)}>Work With Us</Link>
        <Link to="/media-gallery" onClick={() => setIsMenuOpen(false)}>Media</Link>
        <Link to="/media" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>

        {/* 📱 Donate Button in Mobile */}
        <Button
          text="Donate"
          color="#429122"
          style={{ marginTop: '20px', fontSize: '0.75rem' }}
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  );
}
