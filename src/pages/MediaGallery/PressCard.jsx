import styles from './PressCard.module.css';

const PressCard = ({ title, excerpt, logo, link, publishedDate }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.pressTitle}>{title}</h3>
        <img src={logo} alt={title} className={styles.logo} />
      </div>
      <p className={styles.pressExcerpt}>{excerpt}</p>
      <a
        href={link}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Article →
      </a>
      {publishedDate && (
        <p className={styles.date}>{new Date(publishedDate).toLocaleDateString()}</p>
      )}
    </div>
  );
};

export default PressCard;
