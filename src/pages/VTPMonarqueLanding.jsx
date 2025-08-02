
import { useState } from 'react';
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
import InquiryForm from '../components/InquiryForm';
import WhatsAppWidget from "../components/WhatsAppWidget";

export default function VTPMonarqueLanding() {
  const [showPopup, setShowPopup] = useState(false); // ✅ Popup state

  return (
    <div className="font-sans relative">
      {/* Main Content */}
      <Navbar setShowPopup={setShowPopup} />
      <HeroSection setShowPopup={setShowPopup} />
      <AboutSection />
      <AmenitiesSection onEnquireClick={() => setShowPopup(true)} />
      <WowFeatures />
      <FloorPlansSection onEnquireClick={() => setShowPopup(true)} /> {/* ✅ Fixed */}
      <LocationSection onEnquireClick={() => setShowPopup(true)} />
      <ProjectGallery /> 
      <WhatsAppWidget />
      <ContactSection />
      <Footer />

      {/* ✅ Popup Form Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-lg relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-amber-600">Enquire Now</h2>
            <InquiryForm />
          </div>
        </div>
      )}
    </div>
  );
}
