import React from 'react';
import styles from './Button.module.css';
import { useNavigate } from 'react-router-dom';

const Button = ({text, color, styles: inlineStyles={}, link, onClick}) => {
  const navigate = useNavigate();
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
      className={styles.btn}
      style={{
        '--btn-background-color': color,
        '--hover-color': calculatedHoverColor,
        ...inlineStyles,
        }}
        onClick={handleClick}
  
    >
      {text}
    </button>
  );
};
export default Button;