import React from "react";
import styles from "./ProgramCard.module.css";
import { motion } from "framer-motion";
import Button from "../Button/Button.jsx";

// ⬇ ProgramCard displays a single program block with optional image/text layout reversal
const ProgramCard = ({
  title,
  description,
  image,
  reverse,                    // optional: reverses image/text layout
  buttonColor = "#429122",   // optional: custom button color
  buttonLink                 // link to program detail page
}) => {
  return (
    <motion.div
      className={`${styles.card} ${reverse ? styles.reverse : ""}`} // Apply reverse layout if true
      initial={{ opacity: 0, y: 40 }}        // Scroll-in animation
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* 📸 Program image block */}
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} />
      </div>

      {/* 📝 Text + Button Block */}
      <div className={styles.contentWrapper}>
        <div className={styles.textWrapper}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
        </div>

        {/* 🔗 Call to Action */}
        <motion.div>
          <Button 
            text="LEARN MORE" 
            color={buttonColor}
            styles={{
              width: "150px",
              height: "50px",
              fontSize: "0.815rem"
            }}
            link={buttonLink}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
