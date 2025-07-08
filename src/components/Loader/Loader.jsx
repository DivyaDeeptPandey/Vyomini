// src/components/Loader.jsx
import React from 'react';
import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner} />
      <p className={styles.loaderText}>Loading content...</p>
    </div>
  );
}
