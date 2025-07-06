import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/homepage';
import AboutPage from './pages/AboutPage/AboutPage';
import MenstrualHealthPage from './pages/MenstrualHealthProgramPage/MenstrualHealthProgramPage';
import OurTeamPage from './pages/OurTeamPage/OurTeamPage';
import WorkWithUs from './pages/WorkWithUs/WorkWithUs';
import MediaGallery from './pages/MediaGallery/MediaGallery';
import ContactUs from './pages/ContactUs/ContactUs';
import RuralOutreachProgram from './pages/RuralOutreachProgramPage/RuralOutreachProgramPage';
import CampusConnectPage from './pages/CampusConnectPage/CampusConnectPage';
import VyominiUdhyamiPage from './pages/VyominiUdhyamiPage/VyominiUdhyamiPage';
import MediaGalleryPage from './pages/PhotoGalleryPage/MediaGallery';
import ScrollToTop from './components/scrollToTop';
import './App.css';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;