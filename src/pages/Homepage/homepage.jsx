import React from "react";

// ⬇ Section imports
import HeroSection from "../../sections/Hero/Hero";
import AboutUsSection from "../../sections/AboutUs/AboutUs";
import GoalsSection from "../../sections/Goals/Goals";
import ProgramSection from "../../sections/Programs/Programs";
import OurImpactSection from "../../sections/OurImpact/OurImpact";
import AwardsCarousel from "../../sections/AwardsCarousel/AwardsCarousel";
import Testimonial from "../../sections/Testimonial/Testimonial";
import GetInTouchForm from "../../sections/GetInTouch/GetInTouch";

// ⬇ Component imports
import ChatbotIcon from "../../components/ChatBot/ChatBot";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

// ⬇ Styles
import styles from "./Homepage.module.css";

const HomePage = () => {
  return (
    <div className={styles.scrollContainer}>
      {/* 🌐 Site-wide Nav */}
      <NavBar />

      {/* 💬 Persistent ChatBot */}
      <ChatbotIcon />

      {/* 🧭 Landing Section */}
      <HeroSection />

      {/* 🧬 About the Organization */}
      <AboutUsSection />

      {/* 🎯 Our Goals */}
      <GoalsSection />

      {/* 📚 Programs Overview */}
      <ProgramSection />

      {/* 📊 Impact Showcase */}
      <OurImpactSection />

      {/* 🖼️ Media Carousel */}
      <AwardsCarousel autoPlay={true} interval={4000} />

      {/* 🗣️ Testimonials */}
      <Testimonial />

      {/* 📬 Contact Form */}
      <GetInTouchForm />

      {/* 🧱 Site Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
