import HeroSection from "../../sections/Hero/Hero";
import AboutUsSection from "../../sections/AboutUs/AboutUs";
import GoalsSection from "../../sections/Goals/Goals";
import ProgramSection from "../../sections/Programs/Programs";
import OurImpactSection from "../../sections/OurImpact/OurImpact";
import MediaGallery from "../../sections/PhotoGallery/PhotoGallery";
import Testimonial from "../../sections/Testimonial/Testimonial";
import ChatbotIcon from "../../components/ChatBot/ChatBot";
import GetInTouchForm from "../../sections/GetInTouch/GetInTouch";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import './Homepage.module.css';
const HomePage = () => {
  return (
    <div className="scrollContainer">
      <NavBar />
      <ChatbotIcon />
      <HeroSection />
      <AboutUsSection />
      <GoalsSection />
      <ProgramSection />
      <OurImpactSection />
      <MediaGallery 
        autoPlay={true} 
        interval={4000} 
      />
      <Testimonial />
      <GetInTouchForm />
      <Footer />
    </div>
  );
}
export default HomePage;