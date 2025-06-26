import styles from './PressCard.module.css';

const PressCard = ({ title, excerpt, link }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.pressTitle}>{title}</h3>
      <p className={styles.pressExcerpt}>{excerpt}</p>
      <a
        href={link}
        className={styles.readMore}
      >
        Read More
        <span className={styles.arrow}>→</span>
      </a>
    </div>
  );
};

export default PressCard;