import React from "react";
import styles from "./ProgramCard.module.css";
import { motion } from "framer-motion";
import Button from "../Button/Button.jsx";
import { useNavigate } from 'react-router-dom';

const ProgramCard = ({ title, description, image, reverse, buttonColor = "#429122", buttonLink}) => {
  return (
    <motion.div
      className={`${styles.card} ${reverse ? styles.reverse : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        </div>
        <motion.div>
          <Button text="LEARN MORE" 
          color={buttonColor} 
          styles={{ width: "150px", height: "50px", fontSize:"0.815rem"}}
          link={buttonLink}/>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
