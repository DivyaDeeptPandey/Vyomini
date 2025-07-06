import { useState, useEffect } from 'react';
import styles from './GetInTouch.module.css';
import Button from '../../components/Button/Button';

const GetInTouchForm = () => {
  const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    setColors({
      primary: rootStyles.getPropertyValue('--primary-color').trim(),
      secondary: rootStyles.getPropertyValue('--secondary-color').trim(),
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Get In Touch</h2>

        <form
          action="https://formsubmit.co/divyadeeptpandey@gmail.com" 
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="First Name*" name="First Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Last Name*" name="Last Name" required />
            </div>
          </div>

          <div className={styles.formGroup}>
            <input type="email" placeholder="Email*" name="Email" required />
          </div>

          <div className={styles.formGroup}>
            <input type="tel" placeholder="Phone" name="Phone" />
          </div>

          <div className={styles.formGroup}>
            <textarea placeholder="Message*" name="Message" rows="3" required></textarea>
          </div>

          <Button type="submit" text="Submit" color={colors.primary} />
        </form>
      </div>
    </div>
  );
};

export default GetInTouchForm;
