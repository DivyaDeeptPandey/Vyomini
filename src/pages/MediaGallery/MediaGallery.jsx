import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './MediaGallery.module.css';
import PressCard from './PressCard';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

// Logos
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
import siliconIndiaLogo from '../../assets/PressLogos/siliconIndiaLogo.png';
import htTeluguLogo from '../../assets/PressLogos/htTeluguLogo.png';
import cxQuestLogo from '../../assets/PressLogos/cxQuestLogo.png';
import businessNewsThisWeekLogo from '../../assets/PressLogos/businessNewsThisWeekLogo.png';
import nationalBizNewsLogo from '../../assets/PressLogos/nationalBizNewsLogo.png';
import businessNewsMattersLogo from '../../assets/PressLogos/businessNewsMattersLogo.png';
import onlineMediaCafeLogo from '../../assets/PressLogos/onlineMediaCafeLogo.png';
import bwHealthcareWorldLogo from '../../assets/PressLogos/bwHealthcareWorldLogo.png';
import indiaCsrLogo from '../../assets/PressLogos/indiaCsrLogo.png';
import higherEducationPlusLogo from '../../assets/PressLogos/higherEducationPlusLogo.png';
import deccanChronicleLogo from '../../assets/PressLogos/deccanChronicleLogo.png';
import dailyGuardianLogo from '../../assets/PressLogos/dailyGuardianLogo.png';
import bwDisruptLogo from '../../assets/PressLogos/bwDisruptLogo.png';
import mediaExpress24Logo from '../../assets/PressLogos/mediaExpress24Logo.png';
import startuptalkyLogo from '../../assets/PressLogos/startuptalkyLogo.png';
import economicTimesLogo from '../../assets/PressLogos/economicTimesLogo.png';
import lifeAndMoreLogo from '../../assets/PressLogos/lifeAndMoreLogo.png';
import opEdMopedLogo from '../../assets/PressLogos/opEdMopedLogo.png';
import medGateTodayLogo from '../../assets/PressLogos/medGateTodayLogo.png';
import healthCareRadiusLogo from '../../assets/PressLogos/healthCareRadiusLogo.png';



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
    logo: bwDisruptLogo,
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
  {
    id: 12,
    title: 'SiliconIndia',
    excerpt: 'In 2025, women‑founded startups across AI, fintech, e‑commerce and waste management are breaking glass ceilings and driving inclusive innovation in India.',
    logo: siliconIndiaLogo, 
    link: 'https://www.siliconindia.com/news/startups/top-5-womenfounded-established-startups-largely-empowering-ecommerce-landscape-nid-235721-cid-19.html',
    publishedDate: '2025-04-26',
  },
  {
    id: 13,
    title: 'HT Telugu',
    excerpt: 'Rural India is slowly embracing sanitary napkins — usage among young women rose from 33.6 % to 58.9 % between 2015–16 and 2019–21, highlighting progress but also ongoing gaps.',
    logo: htTeluguLogo, 
    link: 'https://telugu.hindustantimes.com/lifestyle/breaking-the-cloth-barrier-encouraging-safe-menstrual-practices-in-rural-india-121748433649425.html',
    publishedDate: '2025-05-28', 
  },
  {
    id: 14,
    title: 'CX Quest',
    excerpt: 'Menstrual health is a vital CX issue—schools, workplaces and public systems must be designed with dignity and empathy, says Prachi Kaushik on World Menstrual Hygiene Day.',
    logo: cxQuestLogo,
    link: 'https://cxquest.com/menstrual-health-experience-matters-in-every-system/',
    publishedDate: '2025-05-29', 
  },
  {
    id: 15,
    title: 'Business News This Week',
    excerpt: 'Renowned social entrepreneur Prachi Kaushik delivered an inspiring talk at the BioEnviroCon 2025 National Conference hosted at IIT Delhi, highlighting rural empowerment.',
    logo: businessNewsThisWeekLogo,
    link: 'https://businessnewsthisweek.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/',
    publishedDate: '2025-07-21',
  },
  {
    id: 16,
    title: 'National Biz News',
    excerpt: 'Renowned social entrepreneur Prachi Kaushik delivered an inspiring talk at the BioEnviroCon 2025 National Conference hosted at IIT Delhi, highlighting rural empowerment.',
    logo: nationalBizNewsLogo,
    link: 'https://nationalbiznews.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/',
    publishedDate: '2025-07-10',
  },
  {
    id: 17,
    title: 'Business News Matters',
    excerpt: 'Prachi Kaushik shared insights at BioEnviroCon 2025, hosted by IIT Delhi, on her work empowering rural India through eco‑menstrual solutions.',
    logo: businessNewsMattersLogo,
    link: 'https://businessnewsmatters.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/',
    publishedDate: '2025-07-10',
  },
  {
    id: 18,
    title: 'Online Media Cafe',
    excerpt: 'At IIT Delhi’s BioEnviroCon 2025, Prachi Kaushik highlighted the role of menstrual health in rural empowerment and sustainable development.',
    logo: onlineMediaCafeLogo,
    link: 'https://onlinemediacafe.com/news/prachi-kaushik-champions-rural-empowerment-at-iit-delhis-bioenvirocon-2025/',
    publishedDate: '2025-07-10', 
  },
  {
    id: 19,
    title: 'BW Healthcare World',
    excerpt: 'Vyomini distributed hygiene kits to 1,000 women, fostering awareness on the importance of hygiene in women’s health and dignity.',
    logo: bwHealthcareWorldLogo,
    link: 'https://www.bwhealthcareworld.com/article/vyomini-social-enterprise-distributes-hygiene-kits-to-1000-women-strengthening-health-and-dignity-551591',
    publishedDate: '2025-03-25',
  },
  {
    id: 20,
    title: 'India CSR',
    excerpt: 'Supported by SIDBI, Vyomini launched the “Swabhimaan” skill‑training initiative to empower 1,000 underserved individuals in Delhi NCR.',
    logo: indiaCsrLogo,
    link: 'https://indiacsr.in/vyomini-social-enterprise-empowers-1000-underserved-individuals-with-skill-development-program/',
    publishedDate: '2024-12-27',
  },
  {
    id: 21,
    title: 'Higher Education Plus',
    excerpt: 'The flagship “Swabhimaan” initiative, supported by SIDBI, offers 75 hours of training in domestic help, patient care, child & elderly care, home care and security services to migrant workers, women and youth.',
    logo: higherEducationPlusLogo, 
    link: 'http://highereducationplus.com/vyomini-launches-swabhimaan-skill-program-to-empower-underprivileged-communities/',
    publishedDate: '2025-07-13',
  },
  {
    id: 22,
    title: 'SheThePeople',
    excerpt: 'Drawing from her personal experience, Prachi Kaushik empowers 20,000+ grassroots women through Vyomini’s menstrual-health, skill training and reproductive-health initiatives.',
    logo: sheThePeopleLogo,
    link: 'https://www.shethepeople.tv/interviews/prachi-kaushik-vyomini-menstrual-health-2472939',
    publishedDate: '2024-02-07',
  },
  {
    id: 23,
    title: 'HerZindagi',
    excerpt: "Prachi Kaushik is challenging stigma and empowering millions via Vyomini—building awareness, biodegradable pads, and economic opportunities for grassroots women.",
    logo: herZindagiLogo,
    link: "https://www.herzindagi.com/inspiration/prachi-kaushik-ending-period-stigma-and-empowering-millions-article-274504",
    publishedDate: "2024-04-01",
  },
  {
    id: 24,
    title: 'YourStory',
    excerpt: 'Prachi Kaushik founded Vyomini to empower rural women by building their capacity in biodegradable menstrual product manufacturing and promoting menstrual health through the “3 A” model—awareness, affordability, accessibility.',
    logo: yourStoryLogo,
    link: 'https://yourstory.com/socialstory/2022/10/social-entrepreneur-prachi-kaushik-menstrual-health-women-empowerment',
    publishedDate: '2022-10-17',
  },
  {
    id: 25,
    title: 'Economic Times',
    excerpt: 'Vyomini inaugurated a skill training center in Bahraich district focusing on digital literacy, menstrual hygiene awareness, personality development and job opportunities for young girls.',
    logo: economicTimesLogo, 
    link: 'https://education.economictimes.indiatimes.com/news/skills/vyomini-social-enterprise-inaugurates-skill-training-center-to-empower-young-girls-in-uttar-pradesh/118349937',
    publishedDate: '2025-02-18',
  },
  {
    id: 26,
    title: 'SiliconIndia',
    excerpt: 'Prachi Kaushik urges moving beyond policies to action—supporting women with grassroots movements, safe spaces, SHGs, education access and entrepreneurship to enter traditionally male-dominated fields.',
    logo: siliconIndiaLogo, 
    link: 'https://startup.siliconindia.com/startup_talks/how-can-women-enter-maledominated-jobs-in-2025-nwid-48737.html',
    publishedDate: '2025-03-08',
  },
  {
    id: 27,
    title: 'Life & More',
    excerpt: 'On International Women’s Day (March 8, 2025), Prachi Kaushik emphasised that empowerment isn’t just policies—it’s action, calling for safe spaces, SHGs, education and real support at the grassroots.',
    logo: lifeAndMoreLogo,
    link: 'https://lifeandmore.in/special-stories/womens-day-2025-quotes/',
    publishedDate: '2025-03-08',
  },
  {
    id: 28,
    title: 'OpEd Moped',
    excerpt: 'Prachi Kaushik argues that when women support and uplift each other—through mentorship, networking, and advocacy—they create a multiplier effect of empowerment and economic freedom.',
    logo: opEdMopedLogo,
    link: 'https://opedmoped.com/business/women-supporting-women-the-importance-of-female-led-enterprises/',
    publishedDate: '2025-03-05',
  },
  {
    id: 29,
    title: 'MedGate Today',
    excerpt: 'Vyomini launched Project Swabhimaan on Menstrual Hygiene Day to empower women in the unorganized sector with menstrual health education and support.',
    logo: medGateTodayLogo,
    link: 'https://medgatetoday.com/vyomini-social-enterprise-launches-project-swabhimaan-to-empower-women-working-in-unorganized-sector-on-menstrual-hygiene-day/',
    publishedDate: '2024-05-30',
  },
  {
    id: 30,
    title: 'Healthcare Radius',
    excerpt: 'Vyomini conducted a menstrual hygiene awareness session for women employed in unorganized sectors like domestic help, laborers, and rag pickers.',
    logo: healthCareRadiusLogo,
    link: 'https://www.healthcareradius.in/events/unorganized-sector-women-educated-about-menstrual-hygiene',
    publishedDate: '2024-05-30',
  },
  {
    id: 31,
    title: 'Deccan Chronicle',
    excerpt: 'In Chinna Golconda (Hyderabad), women-led self‑help groups have established Prayatna—a sustainable sanitary napkin manufacturing unit that empowers rural women with livelihood and healthcare awareness.',
    logo: deccanChronicleLogo, 
    link: 'https://www.deccanchronicle.com/news/chinna-golconda-women-show-the-way-in-menstrual-hygiene-and-entrepreneurship-896033',
    publishedDate: '2024-05-27',
  },
  {
    id: 33,
    title: 'Daily Guardian',
    excerpt: 'Prachi Kaushik highlights essential menstrual hygiene practices that can prevent infections, boost psychological well-being, and reduce social stigma.',
    logo: dailyGuardianLogo,
    link: 'https://thedailyguardian.com/your-hygiene-regime-can-impact-your-periods/',
    publishedDate: '2024-05-18',
  },
  {
    id: 34,
    title: 'BW Disrupt',
    excerpt: 'Prachi Kaushik, founder of Vyomini since 2017, leads the nonprofit in empowering women entrepreneurs and driving economic sustainability through social impact initiatives.',
    logo: bwDisruptLogo, 
    link: 'https://bwdisrupt.com/article/vyomini-social-enterprises-prachi-kaushik-is-fostering-economic-sustainability-518849',
    publishedDate: '2024-05-06',
  },
  {
    id: 36,
    title: 'Media Express 24',
    excerpt: 'Vyomini conducted a two-day workshop to educate 100 female workers at Hero MotoCorp on personal hygiene, sustainable sanitation, menstrual waste management and dignity.',
    logo: mediaExpress24Logo, 
    link: 'https://mediaexpress24.com/business/vyomini-social-enterprise-conducts-workshop-on-menstrual-health-and-hygiene-for-female-workers-at-hero-motocorp/',
    publishedDate: '2024-04-27',
  },
  {
    id: 35,
    title: 'StartupTalky',
    excerpt: 'Prachi Kaushik (Founder & Director, VYOMINI Social Enterprise) outlines key tools like ILO‑WED’s GET Ahead program, Startup India, government initiatives, and mentorship networks to support women-led social ventures.',
    logo: startuptalkyLogo, 
    link: 'https://startuptalky.com/resources-training-opportunities-women-entrepreneurs-in-social-enterprises/',
    publishedDate: '2024-03-28',
  }
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
