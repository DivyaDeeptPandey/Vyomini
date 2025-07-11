import React from "react";
import styles from "./VideoGalleryPage.module.css";

// Array of video objects with title and YouTube embed URLs
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

export default function VideoGalleryPage() {
  return (
    <div className={styles.videoContainer}>
      {/* Section Heading */}
      <h2 className={styles.heading}>Video Gallery</h2>

      {/* Video Grid */}
      <div className={styles.grid}>
        {videos.map((video, index) => (
          <div key={index} className={styles.videoWrapper}>
            <iframe
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
              loading="lazy" // ✅ Improves performance
            />
            <p className={styles.caption}>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
