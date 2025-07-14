import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop'; // Ensures scroll resets on page change
import Loader from './components/Loader/Loader'; // Custom loading screen
import './App.css'; // Global styles

// 🌐 Lazy-load all route components to improve initial load performance
const HomePage = lazy(() => import('./pages/Homepage/homepage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const MenstrualHealthPage = lazy(() => import('./pages/MenstrualHealthProgramPage/MenstrualHealthProgramPage'));
const OurTeamPage = lazy(() => import('./pages/OurTeamPage/OurTeamPage'));
const WorkWithUs = lazy(() => import('./pages/WorkWithUs/WorkWithUs'));
const MediaGallery = lazy(() => import('./pages/MediaGallery/MediaGallery'));
const ContactUs = lazy(() => import('./pages/ContactUs/ContactUs'));
const RuralOutreachProgram = lazy(() => import('./pages/RuralOutreachProgramPage/RuralOutreachProgramPage'));
const CampusConnectPage = lazy(() => import('./pages/CampusConnectPage/CampusConnectPage'));
const VyominiUdhyamiPage = lazy(() => import('./pages/VyominiUdhyamiPage/VyominiUdhyamiPage'));
const MediaGalleryPage = lazy(() => import('./pages/PhotoGalleryPage/MediaGallery'));
const DonatePage = lazy(() => import('./pages/DonationPage/DonationPage'));

function App() {
  return (
    <Router>
      {/* Ensures the page scrolls to top on route change */}
      <ScrollToTop />

      {/* Suspense is required to show a fallback while lazy-loaded components are being fetched */}
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Define app routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menstrual-health-program" element={<MenstrualHealthPage />} />
          <Route path="/rural-outreach-program" element={<RuralOutreachProgram />} />
          <Route path="/campus-connect-program" element={<CampusConnectPage />} />
          <Route path="/vyomini-udhyami-consortium" element={<VyominiUdhyamiPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/work-with-us" element={<WorkWithUs />} />
          <Route path="/media-gallery" element={<MediaGallery />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/media" element={<MediaGalleryPage />} />
          <Route path="/donate" element={<DonatePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
