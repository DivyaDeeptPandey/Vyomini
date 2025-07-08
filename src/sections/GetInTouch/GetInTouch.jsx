import { useState, useEffect } from 'react';
import styles from './GetInTouch.module.css';
import Button from '../../components/Button/Button';

// Functional component for the "Get In Touch" contact form
const GetInTouchForm = () => {
  // State to hold primary and secondary colors pulled from CSS variables
  const [colors, setColors] = useState({ primary: '#429122', secondary: '#ABA104' });

  // Extract CSS custom properties on mount
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
        {/* Section title */}
        <h2 className={styles.cardTitle}>Get In Touch</h2>

        {/* Form submission uses FormSubmit service to send data to an email */}
        <form
          action="https://formsubmit.co/divyadeeptpandey@gmail.com" 
          method="POST"
          className={styles.form}
        >
          {/* Redirects to a thank-you page after submission */}
          <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
          {/* Disables CAPTCHA for easier testing (enable in production if needed) */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Two side-by-side inputs for first and last name */}
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="First Name*" name="First Name" required />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Last Name*" name="Last Name" required />
            </div>
          </div>

          {/* Email input */}
          <div className={styles.formGroup}>
            <input type="email" placeholder="Email*" name="Email" required />
          </div>

          {/* Optional phone number input */}
          <div className={styles.formGroup}>
            <input type="tel" placeholder="Phone" name="Phone" />
          </div>

          {/* Message input area */}
          <div className={styles.formGroup}>
            <textarea placeholder="Message*" name="Message" rows="3" required></textarea>
          </div>

          {/* Submit button using custom Button component with dynamic color */}
          <Button type="submit" text="Submit" color={colors.primary} />
        </form>
      </div>
    </div>
  );
};

export default GetInTouchForm;
