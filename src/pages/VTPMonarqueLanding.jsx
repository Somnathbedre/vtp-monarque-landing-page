import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AmenitiesSection from "../components/AmenitiesSection";
import WowFeatures from "../components/WowFeatures";
import FloorPlansSection from "../components/FloorPlansSection";
import LocationSection from "../components/LocationSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';
import ProjectGallery from '../components/ProjectGallery';

export default function VTPMonarqueLanding() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AmenitiesSection />
      <WowFeatures />
      <FloorPlansSection />
      <LocationSection />
      <ProjectGallery /> 
      <ContactSection />
      <Footer />
    </div>
  );
}
