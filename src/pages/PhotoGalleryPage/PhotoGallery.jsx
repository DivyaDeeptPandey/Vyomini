import React, { useState } from "react";
import Masonry from "react-masonry-css";
import styles from "./PhotoGallery.module.css";
import NavBar from "../../components/NavBar/NavBar";
import { motion, AnimatePresence } from "framer-motion";

// Header image
import headerImg from "../../assets/PhotoGalleryImgs/Delhi/delhiImg1.webp";

// Dynamically import images grouped by state folders
const imageModules = import.meta.glob("../../assets/PhotoGalleryImgs/*/*.webp", { eager: true });

const stateImages = {};
for (const path in imageModules) {
  const match = path.match(/PhotoGalleryImgs\/([^/]+)\/([^/]+\.(?:webp|jpg|png))/);
  if (match) {
    const state = match[1];
    const fileName = match[2];
    const imgUrl = imageModules[path].default;

    if (!stateImages[state]) {
      stateImages[state] = [];
    }

    stateImages[state].push({
      src: imgUrl,
      alt: `${state} - ${fileName}`,
    });
  }
}

// Sort images per state by file name
for (const state in stateImages) {
  stateImages[state].sort((a, b) => a.alt.localeCompare(b.alt));
}

// Sample YouTube videos
const videos = [
  {
    title: "Woman Transforming India Winner | Prachi Kaushik | SAM Workshops | DJJS",
    url: "https://www.youtube.com/embed/SB_hbvyFWZs",
  },
  {
    title: "Prachi Kaushik, Vyomini Social Enterprise | BW Disrupt WEISA 2024",
    url: "https://www.youtube.com/embed/Y8JLI8xu22g",
  },
  {
    title: "Episode 2 'Pad Woman' of New India Prachi Kaushik Vyomini",
    url: "https://www.youtube.com/embed/Yk8eHs3U8e4",
  },
  {
    title: "Prachi Kaushik, Founder & Director, VYOMINI On Green TV HD",
    url: "https://www.youtube.com/embed/QIQTNQypRsg",
  },
  {
    title: "'Pad-Woman' of New India - Prachi Kaushik - Vyomini",
    url: "https://www.youtube.com/embed/d2NX83vb27g",
  },
  {
    title: "Vision for taboo-free menstruation and saving environment | Prachi Kaushik | TEDxJIET",
    url: "https://www.youtube.com/embed/XlAE822D0Pk",
  },
  {
    title: "Prachi Kaushik Social Entrepreneur",
    url: "https://www.youtube.com/embed/yBZo3cA2LzM",
  },
  {
    title: "SIrsa launch of Menstrual Health Campaign",
    url: "https://www.youtube.com/embed/NjhBa8ZIJPY",
  },
  {
    title: "Women's Week 2.0 | Prachi Kaushik - Founder & Director of Vyomini",
    url: "https://www.youtube.com/embed/XlqVyY1pQUA",
  },
  {
    title: "PADMAN met PADWOMAN Reel meet Real",
    url: "https://www.youtube.com/embed/Ur0xcQQVcis",
  },
  {
    title: "Short Term Entrepreneurship Development Program launched by NSIC",
    url: "https://www.youtube.com/embed/bnXCGSzPsfc",
  },
  {
    title: "Biodegradable Sanitary Pads in India | Pad Woman | Prachi Kaushik | VYOMINI SOCIAL ENTERPRISES",
    url: "https://www.youtube.com/embed/ox8AagmEmPQ",
  },
  {
    title: "Prachi Kaushik || Pad || Motivational Speech || Akshay Kumar || Girls | Interview Pad Woman | india|",
    url: "https://www.youtube.com/embed/RICpryHCKkM",
  },
  {
    title: "Biodegradable sanitary napkin vending machine & incinerators!",
    url: "https://www.youtube.com/embed/12CMY0_EZl8",
  },
  {
    title: "Menstruation and Hygiene in Rural India | Pad woman | Success story of VYOMINI SOCIAL ENTERPRISES",
    url: "https://www.youtube.com/embed/WXW75wDGfSg",
  },
];

export default function MediaGallery() {
  const [activeTab, setActiveTab] = useState("photos");
  const [selectedState, setSelectedState] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const handleBack = () => setSelectedState(null);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

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
                  <>
                    <button onClick={handleBack} className={styles.backButton}>
                      ← Back to States
                    </button>
                    <Masonry
                      breakpointCols={breakpointColumnsObj}
                      className={styles.masonryGrid}
                      columnClassName={styles.masonryColumn}
                    >
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
                    </Masonry>
                  </>
                )}
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

      {/* Modal Viewer */}
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
