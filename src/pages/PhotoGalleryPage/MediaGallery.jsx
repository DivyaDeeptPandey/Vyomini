import React, { useState } from "react";
import styles from "./MediaGallery.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { motion, AnimatePresence } from "framer-motion";

// Header image
import headerImg from "../../assets/PhotoGalleryImgs/header.jpg";

// Import all gallery images
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

// Images grouped by state
const stateImages = {
  "Haryana": [
    { src: img1, alt: "Delhi Event 1" },
    { src: img2, alt: "Delhi Event 2" },
    { src: img3, alt: "Delhi Event 3" },
    { src: img4, alt: "Delhi Event 4" },
    { src: img5, alt: "Delhi Event 5" },
    { src: img6, alt: "Delhi Event 6" },
    { src: img7, alt: "Delhi Event 7" },
    { src: img8, alt: "Delhi Event 8" },
    { src: img9, alt: "Delhi Event 9" },
    { src: img10, alt: "Delhi Event 10" },
    { src: img11, alt: "Delhi Event 11" },
  ],
  "Kerala": [
    { src: img3, alt: "UP Event 1" },
    { src: img4, alt: "UP Event 2" },
    { src: img5, alt: "UP Event 3" },
    { src: img6, alt: "UP Event 4" },
    { src: img7, alt: "UP Event 5" },
    { src: img8, alt: "UP Event 6" },
    { src: img9, alt: "UP Event 7" },
    { src: img10, alt: "UP Event 8" },
    { src: img11, alt: "UP Event 9" },
    { src: img12, alt: "UP Event 10" },
    { src: img13, alt: "UP Event 11" },
    { src: img14, alt: "UP Event 12" },
    { src: img15, alt: "UP Event 13" },
    { src: img16, alt: "UP Event 14" },
  ],
  "Tamil Nadu": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Karnataka": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Maharashtra": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Andhra Pradesh": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Delhi": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Rajasthan": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "West Bengal": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Punjab": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Uttar Pradesh": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Bihar": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Orissa": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
  "Assam": [
    { src: img5, alt: "Rajasthan Event 1" },
    { src: img6, alt: "Rajasthan Event 2" },
  ],
};

// Sample YouTube videos
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
  const [activeTab, setActiveTab] = useState("photos"); // 'photos' or 'videos'
  const [selectedState, setSelectedState] = useState(null); // current state name
  const [modalImage, setModalImage] = useState(null); // currently enlarged image

  const handleBack = () => setSelectedState(null); // back to state cards

  return (
    <>
      <NavBar />
      <img src={headerImg} alt="Media Banner" className={styles.headerImage} />

      <div className={styles.mediaContentWrapper}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <h2 className={styles.heading}>Media</h2>
          <div className={styles.links}>
            <span
              className={`${styles.link} ${activeTab === "photos" ? styles.active : ""}`}
              onClick={() => {
                setActiveTab("photos");
                setSelectedState(null);
              }}
            >
              PHOTOS
            </span>
            <span
              className={`${styles.link} ${activeTab === "videos" ? styles.active : ""}`}
              onClick={() => {
                setActiveTab("videos");
                setSelectedState(null);
              }}
            >
              VIDEOS
            </span>
          </div>
        </aside>

        {/* Main content */}
        <main className={styles.content}>
          <AnimatePresence mode="wait">
            {activeTab === "photos" ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* State selection view */}
                {!selectedState ? (
                  <div className={styles.stateCardGrid}>
                    {Object.keys(stateImages).map((state) => (
                      <div
                        key={state}
                        className={styles.stateCard}
                        onClick={() => setSelectedState(state)}
                      >
                        <div className={styles.stateCardContent}>
                          <h3 className={styles.stateName}>{state}</h3>
                          <p className={styles.stateSubtitle}>Click to view images</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Image grid for selected state
                  <>
                    <button onClick={handleBack} className={styles.backButton}>
                      ← Back to States
                    </button>
                    <div className={styles.grid}>
                      {stateImages[selectedState].map((img, index) => (
                        <motion.div
                          key={index}
                          className={styles.imageWrapper}
                          whileHover={{ scale: 1.03 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          onClick={() => setModalImage(img)}
                        >
                          <img
                            loading="lazy"
                            src={img.src}
                            alt={img.alt}
                            className={styles.image}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
              </motion.div>
            ) : (
              // Videos view
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

      {/* Image modal viewer */}
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
