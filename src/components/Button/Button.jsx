// src/components/Button.jsx
import React from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

/**
 * Reusable animated button with optional internal or external navigation.
 *
 * Props:
 * - text (string): The button label
 * - color (string): Background color
 * - style (object): Inline styles to override default styling
 * - link (string): Internal route or external URL
 * - onClick (function): Optional click handler
 */
const Button = ({ text, color, styles: inlineStyles = {}, link, onClick }) => {
  const navigate = useNavigate();

  // Dynamically calculate hover color using CSS color-mix
  const calculatedHoverColor = `color-mix(in srgb, ${color}, black 20%)`;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(link);
      }
    } else {
      console.warn("No link provided.");
    }
  };

  return (
    <button
      type="button"
      className={styles.btn}
      style={{
        '--btn-background-color': color,
        '--hover-color': calculatedHoverColor,
        ...inlineStyles,
      }}
      onClick={handleClick}
      aria-label={text}
    >
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default Button;
