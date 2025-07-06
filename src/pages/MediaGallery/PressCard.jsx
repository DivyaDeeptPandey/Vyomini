import { useState } from 'react';
import styles from './PressCard.module.css';

const PressCard = ({ title, excerpt, links, logo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.pressTitle}>{title}</h3>
        <img src={logo} alt={title} className={styles.logo} />
      </div>
      <p className={styles.pressExcerpt}>{excerpt}</p>

      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {isOpen ? 'Hide Links ▲' : 'View Articles ▼'}
      </button>

      {isOpen && (
        <div className={styles.linksList}>
          {links.map((item, index) => (
            <a key={index} href={item.href} className={styles.link} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default PressCard;
