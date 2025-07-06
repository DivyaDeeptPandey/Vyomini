import { motion } from 'framer-motion';
import styles from './MediaGallery.module.css';
import PressCard from './PressCard';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

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

const MediaGallery = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const pressItems = [
    {
      id: 1,
      title: 'Global Press Journal',
      excerpt: 'Prachi Kaushik founded Vyomini to drive India’s “Green Menstruation Movement,” training rural women to make eco‑friendly pads and menstrual cups, ensuring dignity, income, and better menstrual health.',
      logo: gpjLogo,
      links: [
        { label: 'Global Press Journal: Women creating menstrual products', href: 'https://globalpressjournal.com/asia/india/women-india-creating-menstrual-products-need/' },
      ],
    },
    {
      id: 2,
      title: 'YourStory',
      excerpt: 'Prachi Kaushik founded Vyomini in 2016–17 to empower rural women by launching India’s first sanitary‑ware incubator, offering menstrual‑health education, manufacturing biodegradable pads, and fostering women entrepreneurs.',
      logo: yourStoryLogo,
      links: [
        { label: 'YourStory: Vyomini’s menstrual‑health mission', href: 'https://yourstory.com/herstory/2019/05/women-prachi-kaushik-vyomini-menstruation?&utm_source=share&utm_medium=app' },
        { label: 'YourStory: social entrepreneur spotlight', href: 'https://yourstory.com/socialstory/2022/10/social-entrepreneur-prachi-kaushik-menstrual-health-women-empowerment' },
      ],
    },
    {
      id: 3,
      title: 'The Glitz Media',
      excerpt: 'Prachi Kaushik—dubbed “Super Woman” by The Glitz—forged VYOMINI to empower 100,000+ grassroots women through menstrual health, entrepreneurship & sustainable solutions.',
      logo: tgmLogo,
      links: [
        { label: 'The Glitz: Super Woman feature', href: 'https://theglitz.media/theglitz-super-woman-prachi-kaushik-founder-director-vyomini-social-enterprise/' },
      ],
    },
    {
      id: 4,
      title: 'Press Information Bureau',
      excerpt: 'In India’s 75th year of independence, the PIB honored Prachi Kaushik—founder of Vyomini Social Enterprise—for empowering rural women since 2017 through menstrual‑health solutions, eco‑friendly hygiene kits, and sustainable entrepreneurship.',
      logo: pibLogo,
      links: [
        { label: 'PIB press release: Women honoured on Independence Day', href: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1808751&s=09' },
      ],
    },
    {
      id: 5,
      title: 'SheThePeople TV',
      excerpt: 'In an exclusive interview, Prachi Kaushik—driven by her own experiences—has uplifted 20,000+ grassroots women through menstrual-health education, eco‑pad production, legal aid, and pathways to financial independence.',
      logo: sheThePeopleLogo,
      links: [
        { label: 'SheThePeople: redefining menstrual-health narrative', href: 'https://www.shethepeople.tv/interviews/prachi-kaushik-vyomini-menstrual-health-2472939' },
        { label: 'SheThePeople हिंदी: उद्यमिता की राह पर', href: 'https://hindi.shethepeople.tv/interview/prachi-kaushik-entrepreneurship-journey' }
      ],
    },
    {
      id: 6,
      title: 'The Indian Express',
      excerpt: 'Featured for launching “Rakshak” — low-cost, biodegradable sanitary pads — in Hyderabad, supporting menstrual hygiene and sustainability under Swachh Bharat and Make in India.',
      logo: expressLogo,
      links: [
        { label: 'New Indian Express: Rakshak pads launch', href: 'https://www.newindianexpress.com/amp/story/cities/hyderabad/2018/may/28/lowcost-bio-degradable-rakshak-sanitary-pads-now-in-city-1820613.html' },
      ],
    },
    {
      id: 7,
      title: 'HerZindagi',
      excerpt: 'Recognized as Woman Social Entrepreneur by Her Zindagi, Prachi Kaushik has impacted 2 lakh+ women via Vyomini through menstrual-health workshops, eco‑pad training, and awareness campaigns.',
      logo: herZindagiLogo,
      links: [
        { label: 'HerZindagi recognition & Period Party', href: 'https://www.herzindagi.com/hindi/inspiration/vyomini-social-foundation-founder-prachi-kaushik-raising-awareness-about-menstrual-health-article-261893' },
        { label: 'HerZindagi Womenpreneur Awards 2024', href: 'https://www.herzindagi.com/inspiration/womenpreneur-awards-2024-winners-and-highlights-article-273142' },
        { label: 'HerZindagi: ending period stigma', href: 'https://www.herzindagi.com/inspiration/prachi-kaushik-ending-period-stigma-and-empowering-millions-article-274504' }
      ],
    },
    {
      id: 8,
      title: 'BW Disrupt',
      excerpt: 'Prachi Kaushik founded Vyomini in 2017 to foster economic sustainability and social progress, empowering marginalized rural women through eco‑menstrual products, entrepreneurship training, and grassroots-led impact.',
      logo: bwLogo,
      links: [
        { label: 'BW Disrupt: fostering economic sustainability', href: 'https://www.bwdisrupt.com/article/vyomini-social-enterprises-prachi-kaushik-is-fostering-economic-sustainability-518849' },
        { label: 'BW Disrupt WEISA 2024 honour', href: 'https://www.bwdisrupt.com/article/weisa-2024-women-entrepreneurs-succeeding-unconventionally-unconditionally-514927' },
        { label: 'WEISA 2024: Prachi Kaushik honored', href: 'https://businessnewsthisweek.com/business/prachi-kaushik-receives-prestigious-social-women-entrepreneur-award/' },
        { label: 'Startup Success Stories: award announcement', href: 'https://startupsuccessstories.in/prachi-kaushik-receives-social-women-entrepreneur-award-for-empowering-women-in-menstrual-hygiene-management/' },
        { label: 'Smart Business News: WEISA 2024 award story', href: 'https://smartbusinesnews.com/business/prachi-kaushik-receives-prestigious-social-women-entrepreneur-award/' },


      ],
    },
    {
      id: 9,
      title: 'ScoopWhoop (Hindi)',
      excerpt: 'भारत के ग्रामीण क्षेत्रों में महिला उद्यमिता को बढ़ावा देते हुए, प्राची कौशिक ने Vyomini के माध्यम से 500+ महिलाओं को स्वावलंबी बनाया है और मनोबल बढ़ाया है—महत्वपूर्ण उपलब्धि ग्रामीण भारत को नया रूप देने की दिशा में।',
      logo: scoopWhoopLogo,
      links: [
        { label: 'ScoopWhoop हिंदी: महिला उद्यमिता की मिसाल', href: 'https://hindi.scoopwhoop.com/women/meet-prachi-kaushik-who-aims-to-transform-rural-india-by-promoting-female-entrepreneurship/?ref=clipboardcopy' },
      ],
    },
    {
      id: 10,
      title: 'Wattview',
      excerpt: 'Prachi Kaushik champions menstrual health through Vyomini’s “3 A” model—awareness campaigns, affordable eco‑pad production, and accessibility via sanitary‑napkin vending and yoga for women’s health.',
      logo: wordpressLogo,
      links: [
        { label: 'Wattview: “Every Woman Deserves Sanitary Napkin”', href: 'https://wattviewcom.wordpress.com/2018/09/06/every-woman-deserves-sanitary-napkin/comment-page-1/#co' },
      ],
    },
    {
      id: 11,
      title: 'The Daily Guardian',
      excerpt: 'In a May 2024 byline, Prachi Kaushik (Founder & Director, Vyomini) outlines key menstrual-hygiene tips—highlighting regular pad changes, disposal practices, breathable clothing, eco-friendly products, and hydration to improve women’s health and dignity.',
      logo: theDailyGuardianLogo,
      links: [
        { label: 'The Daily Guardian: Menstrual hygiene tips', href: 'https://thedailyguardian.com/women/your-hygiene-regime-can-impact-your-periods/' },
      ],
    }
  ];

  return (
    <>
      <NavBar />
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className={styles.title}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          MEDIA GALLERY
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our impact through press coverage and publications
        </motion.p>

        <motion.div className={styles.galleryGrid} variants={containerVariants}>
          {pressItems.map((item, index) => (
            <PressCard
              key={item.id}
              title={item.title}
              excerpt={item.excerpt}
              logo={item.logo}
              links={item.links}
            />
          ))}
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default MediaGallery;
