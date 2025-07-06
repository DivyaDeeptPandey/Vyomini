import React, { useState } from "react";
import styles from "./MediaGallery.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { motion, AnimatePresence } from "framer-motion";

import headerImg from "../../assets/PhotoGalleryImgs/header.jpg";
import img1 from "../../assets/PhotoGalleryImgs/img1.jpg";
import img2 from "../../assets/PhotoGalleryImgs/img2.jpg";
import img3 from "../../assets/PhotoGalleryImgs/img3.jpg";
import img4 from "../../assets/PhotoGalleryImgs/img4.jpg";
import img5 from "../../assets/PhotoGalleryImgs/img5.jpg";
import img6 from "../../assets/PhotoGalleryImgs/img6.jpg";
import img7 from "../../assets/PhotoGalleryImgs/img7.jpg";
import img8 from "../../assets/PhotoGalleryImgs/img8.jpg";
import img9 from "../../assets/PhotoGalleryImgs/img9.jpg";
import img10 from "../../assets/PhotoGalleryImgs/img10.jpg";
import img11 from "../../assets/PhotoGalleryImgs/img11.jpg";
import img12 from "../../assets/PhotoGalleryImgs/img12.jpg";
import img13 from "../../assets/PhotoGalleryImgs/img13.jpg";
import img14 from "../../assets/PhotoGalleryImgs/img14.jpg";
import img15 from "../../assets/PhotoGalleryImgs/img15.jpg";
import img16 from "../../assets/PhotoGalleryImgs/img16.jpg";

const images = [
  { src: img1, alt: "Event 1" },
  { src: img2, alt: "Event 2" },
  { src: img3, alt: "Event 3" },
  { src: img4, alt: "Event 4" },
  { src: img5, alt: "Event 5" },
  { src: img6, alt: "Event 6" },
  { src: img7, alt: "Event 7" },
  { src: img8, alt: "Event 8" },
  { src: img9, alt: "Event 9" },
  { src: img10, alt: "Event 10" },
  { src: img11, alt: "Event 11" },
  { src: img12, alt: "Event 12" },
  { src: img13, alt: "Event 13" },
  { src: img14, alt: "Event 14" },
  { src: img15, alt: "Event 15" },
  { src: img16, alt: "Event 16" },
];

const videos = [
  {
    title: "Empowerment Workshop",
    url: "https://www.youtube.com/embed/Yk8eHs3U8e4",
  },
  {
    title: "Community Engagement",
    url: "https://www.youtube.com/embed/FmRLsRMpVx0",
  },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <NavBar />
      <img src={headerImg} alt="Media Banner" className={styles.headerImage} />

      <div className={styles.mediaContentWrapper}>
        <aside className={styles.sidebar}>
          <h2 className={styles.heading}>Media</h2>
          <div className={styles.links}>
            <span
              className={`${styles.link} ${
                activeTab === "photos" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("photos")}
            >
              PHOTOS
            </span>
            <span
              className={`${styles.link} ${
                activeTab === "videos" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("videos")}
            >
              VIDEOS
            </span>
          </div>
        </aside>

        <main className={styles.content}>
          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos"
                className={styles.grid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {images.map((img, index) => (
                  <motion.div
                    key={index}
                    className={styles.imageWrapper}
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    onClick={() => setModalImage(img)}
                  >
                    <img loading="lazy" src={img.src} alt={img.alt} className={styles.image} />
                    <p className={styles.caption}>{img.alt}</p>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                className={styles.videoGrid}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {videos.map((video, index) => (
                  <motion.div
                    key={index}
                    className={styles.videoWrapper}
                    whileHover={{ scale: 1.02 }}
                  >
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className={styles.video}
                    />
                    <p className={styles.caption}>{video.title}</p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
      {modalImage && (
        <div className={styles.modal} onClick={() => setModalImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={modalImage.src} alt={modalImage.alt} />
            <p className={styles.modalCaption}>{modalImage.alt}</p>
          </div>
        </div>
      )}
    </>
  );
}
