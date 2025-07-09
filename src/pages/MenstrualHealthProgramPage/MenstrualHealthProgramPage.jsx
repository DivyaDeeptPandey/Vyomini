// MenstrualHealthProgramPage.jsx
// This page presents Vyomini’s Menstrual Health Program, highlighting its three pillars with video and description.

import styles from './MenstrualHealthProgramPage.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

export default function MenstrualHealthProgramPage() {
  return (
    <>
      <NavBar />

      <main className={styles.container}>
        {/* === Section Heading with green line via CSS ::before === */}
        <div className={styles.headingContainer}>
          <div className={styles.line}></div>
          <h2 className={styles.heading}>MENSTRUAL HEALTH PROGRAM</h2>
        </div>
        {/* === Responsive YouTube Video Embed === */}
        <section className={styles.videoWrapper} aria-label="Menstrual Health Awareness Video">
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/Yk8eHs3U8e4"
            title="Menstrual Health Awareness Program Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </section>

        {/* === Descriptive content explaining the 3 A’s === */}
        <section className={styles.content}>
          <p>
            At Vyomini, we believe menstrual health is a right, not a privilege.
            Our program empowers women and girls through a holistic model focused on the 3 A’s:
            <span className={styles.highlight}> Awareness</span>,
            <span className={styles.highlight}> Affordability</span>, and
            <span className={styles.highlight}> Accessibility</span>.
          </p>

          <p>
            <span className={styles.highlight}>Awareness</span> campaigns include workshops, school drives,
            and community seminars that break taboos and promote hygienic practices.
          </p>

          <p>
            <span className={styles.highlight}>Affordability</span> is addressed by training grassroots women to
            produce biodegradable sanitary pads and menstrual cups—creating employment and low-cost solutions.
          </p>

          <p>
            <span className={styles.highlight}>Accessibility</span> is ensured by deploying sanitary napkin vending
            machines, conducting distribution drives, and providing doorstep delivery in underserved regions.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
