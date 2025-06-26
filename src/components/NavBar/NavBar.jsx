import React, { useState } from 'react';
import styles from './NavBar.module.css';
import logo from '../../assets/logo.png';
import Button from '../Button/Button.jsx';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
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
          <Link to="/" className={pathname === '/' ? styles.active : ''}>Home</Link>

          <div
            className={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className={`${styles.dropdownTrigger} ${pathname.startsWith('/menstrual-health-program') ? styles.active : ''}`}>
              Programs
            </span>
            {isDropdownOpen && (
              <div className={styles.dropdownContent}>
                <Link to="/menstrual-health-program">Menstrual Health Program</Link>
                <Link to="/vyomini-suvidha-kendra">Vyomini Suvidha Kendra</Link>
                <Link to="/rural-outreach">Rural Outreach</Link>
                <Link to="/women-empowerment">Women Empowerment</Link>
                <Link to="/franchise-model">Franchise Model</Link>
              </div>
            )}
          </div>

          <Link to="/our-team" className={pathname === '/our-team' ? styles.active : ''}>Our Team</Link>
          <Link to="/work-with-us" className={pathname === '/work-with-us' ? styles.active : ''}>Work With Us</Link>
          <Link to="/media-gallery" className={pathname === '/media-gallery' ? styles.active : ''}>Gallery</Link>
          <Link to="/contact-us" className={pathname === '/contact-us' ? styles.active : ''}>Contact Us</Link>
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
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        
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
          {isMobileDropdownOpen && (
            <div className={styles.mobileDropdownContent}>
              <Link to="/menstrual-health-program" onClick={() => setIsMenuOpen(false)}>Menstrual Health Program</Link>
              <Link to="/vyomini-suvidha-kendra" onClick={() => setIsMenuOpen(false)}>Vyomini Suvidha Kendra</Link>
              <Link to="/rural-outreach" onClick={() => setIsMenuOpen(false)}>Rural Outreach</Link>
              <Link to="/women-empowerment" onClick={() => setIsMenuOpen(false)}>Women Empowerment</Link>
              <Link to="/franchise-model" onClick={() => setIsMenuOpen(false)}>Franchise Model</Link>
            </div>
          )}
        </div>

        <Link to="/our-team" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
        <Link to="/work-with-us" onClick={() => setIsMenuOpen(false)}>Work With Us</Link>
        <Link to="/media-gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
        <Link to="/contact-us" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
        <Button text="Donate" color="#429122" onClick={() => setIsMenuOpen(false)} />
      </div>
    </>
  );
}