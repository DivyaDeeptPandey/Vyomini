import { useState,useEffect } from 'react';
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
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className={styles.container}>
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Get In Touch</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="First Name*"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="text"
              placeholder="Last Name*"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <input
            type="email"
            placeholder="Email*"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            placeholder="Message*"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <Button text='Submit' color= {colors.primary}></Button>
      </form>
    </div>
    </div>
  );
};

export default GetInTouchForm;