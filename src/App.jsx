import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import MenstrualHealthPage from './pages/MenstrualHealthProgramPage/MenstrualHealthProgramPage';
import OurTeamPage from './pages/OurTeamPage/OurTeamPage';
import WorkWithUs from './pages/WorkWithUs/WorkWithUs';
import MediaGallery from './pages/MediaGallery/MediaGallery';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menstrual-health-program" element={<MenstrualHealthPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/work-with-us" element={<WorkWithUs />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
      </Routes>
    </Router>
  );
}

export default App;