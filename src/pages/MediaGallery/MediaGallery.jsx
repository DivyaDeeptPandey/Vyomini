import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MediaGallery.module.css';
import PressCard from './PressCard';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// Logos
import bwLogo from '../../assets/PressLogos/businessworld.png';
import yourStoryLogo from '../../assets/PressLogos/yourstory.png';
import tgmLogo from '../../assets/PressLogos/theglitzmedia.png';
import pibLogo from '../../assets/PressLogos/pib.png';
import expressLogo from '../../assets/PressLogos/indianexpress.png';
import gpjLogo from '../../assets/PressLogos/gpj.png';
import herZindagiLogo from '../../assets/PressLogos/herzindagi.png';
import sheThePeopleLogo from '../../assets/PressLogos/shethepeopleLogo.png';
import scoopWhoopLogo from '../../assets/PressLogos/scoopwhoop.png';
import wordpressLogo from '../../assets/PressLogos/wordpressLogo.png';
import theDailyGuardianLogo from '../../assets/PressLogos/theDailyGuardian.png';

// === ALL ARTICLES ===
const allArticles = [
  {
    id: 1,
    title: 'Global Press Journal',
    excerpt: 'Prachi Kaushik founded Vyomini to drive India’s “Green Menstruation Movement,” training rural women to make eco‑friendly pads.',
    logo: gpjLogo,
    link: 'https://globalpressjournal.com/asia/india/women-india-creating-menstrual-products-need/',
    publishedDate: '2024-06-01',
  },
  {
    id: 2,
    title: 'YourStory',
    excerpt: 'Empowering rural women through India’s first sanitary‑ware incubator.',
    logo: yourStoryLogo,
    link: 'https://yourstory.com/herstory/2019/05/women-prachi-kaushik-vyomini-menstruation',
    publishedDate: '2019-05-10',
  },
  {
    id: 3,
    title: 'The Glitz Media',
    excerpt: 'Prachi Kaushik—dubbed “Super Woman”—empowers 100,000+ women via Vyomini.',
    logo: tgmLogo,
    link: 'https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/',
    publishedDate: '2023-08-21',
  },
  {
    id: 4,
    title: 'Press Information Bureau',
    excerpt: 'Honoured on India’s 75th Independence Day for empowering rural women.',
    logo: pibLogo,
    link: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1808751&s=09',
    publishedDate: '2022-08-15',
  },
  {
    id: 5,
    title: 'SheThePeople TV',
    excerpt: 'Uplifting 20,000+ women with menstrual-health education and eco‑pad production.',
    logo: sheThePeopleLogo,
    link: 'https://www.shethepeople.tv/interviews/prachi-kaushik-vyomini-menstrual-health-2472939',
    publishedDate: '2021-11-10',
  },
  {
    id: 6,
    title: 'The Indian Express',
    excerpt: 'Launched “Rakshak” — low-cost biodegradable pads in Hyderabad.',
    logo: expressLogo,
    link: 'https://www.newindianexpress.com/cities/hyderabad/2018/may/28/lowcost-bio-degradable-rakshak-sanitary-pads-now-in-city-1820613.html',
    publishedDate: '2018-05-28',
  },
  {
    id: 7,
    title: 'HerZindagi',
    excerpt: 'Impacted 2 lakh+ women through workshops and awareness.',
    logo: herZindagiLogo,
    link: 'https://www.herzindagi.com/inspiration/prachi-kaushik-ending-period-stigma-and-empowering-millions-article-274504',
    publishedDate: '2024-03-12',
  },
  {
    id: 8,
    title: 'BW Disrupt',
    excerpt: 'Empowering marginalized rural women through eco‑menstrual products.',
    logo: bwLogo,
    link: 'https://www.bwdisrupt.com/article/vyomini-social-enterprises-prachi-kaushik-is-fostering-economic-sustainability-518849',
    publishedDate: '2024-02-01',
  },
  {
    id: 9,
    title: 'ScoopWhoop (Hindi)',
    excerpt: '500+ women empowered through Vyomini in rural India.',
    logo: scoopWhoopLogo,
    link: 'https://hindi.scoopwhoop.com/women/meet-prachi-kaushik-who-aims-to-transform-rural-india-by-promoting-female-entrepreneurship/?ref=clipboardcopy',
    publishedDate: '2023-04-10',
  },
  {
    id: 10,
    title: 'Wattview',
    excerpt: 'Vyomini’s “3 A” model — awareness, affordability, accessibility.',
    logo: wordpressLogo,
    link: 'https://wattviewcom.wordpress.com/2018/09/06/every-woman-deserves-sanitary-napkin/comment-page-1/#co',
    publishedDate: '2018-09-06',
  },
  {
    id: 11,
    title: 'The Daily Guardian',
    excerpt: 'Menstrual hygiene tips: hydration, hygiene, and dignity.',
    logo: theDailyGuardianLogo,
    link: 'https://thedailyguardian.com/women/your-hygiene-regime-can-impact-your-periods/',
    publishedDate: '2024-05-10',
  },
];

// === Top Articles (manually curated) ===
const topArticles = [
  allArticles[0], // Global Press
  allArticles[7], // BW Disrupt
  allArticles[6], // HerZindagi
];

// === Available years ===
const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];

// === Animation Variants ===
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const MediaGallery = () => {
  const [activeTab, setActiveTab] = useState('Top Articles');

  const getArticlesToShow = () => {
    if (activeTab === 'Top Articles') return topArticles;
    if (activeTab === 'All Articles')
      return [...allArticles].sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    return allArticles
      .filter((item) => new Date(item.publishedDate).getFullYear().toString() === activeTab)
      .sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  };

  return (
    <>
      <NavBar />
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      >
        {/* Heading */}
        <div className={styles.headingContainer}>
          <div className={styles.headingLine}></div>
          <motion.h1
            className={styles.title}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            MEDIA GALLERY
          </motion.h1>
        </div>

        <motion.p
          className={styles.subtitle}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our impact through press coverage and publications
        </motion.p>

        {/* Content Area */}
        <div className={styles.contentWrapper}>
          {/* Scrollable Article Cards */}
          <div className={styles.scrollContainer}>
            <motion.div
              className={styles.galleryGrid}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {getArticlesToShow().map((item) => (
                <motion.div key={item.id} variants={containerVariants}>
                  <PressCard {...item} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            <button
              onClick={() => setActiveTab('Top Articles')}
              className={`${styles.tabButton} ${activeTab === 'Top Articles' ? styles.active : ''}`}
            >
              Top Articles
            </button>
            <button
              onClick={() => setActiveTab('All Articles')}
              className={`${styles.tabButton} ${activeTab === 'All Articles' ? styles.active : ''}`}
            >
              All Articles
            </button>
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveTab(year)}
                className={`${styles.tabButton} ${activeTab === year ? styles.active : ''}`}
              >
                {year}
              </button>
            ))}
          </aside>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default MediaGallery;
