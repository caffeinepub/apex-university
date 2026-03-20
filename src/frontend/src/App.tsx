import { useState } from "react";
import AboutSection from "./components/AboutSection";
import AdmissionModal from "./components/AdmissionModal";
import AdmissionsSection from "./components/AdmissionsSection";
import CTASection from "./components/CTASection";
import CampusSection from "./components/CampusSection";
import ContactSection from "./components/ContactSection";
import CoursesSection from "./components/CoursesSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PlacementsSection from "./components/PlacementsSection";
import ResultsSection from "./components/ResultsSection";
import { useFadeIn } from "./hooks/useFadeIn";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  useFadeIn();

  return (
    <div className="min-h-screen font-poppins">
      <Navbar onApplyClick={() => setModalOpen(true)} />

      <main>
        <HeroSection onApplyClick={() => setModalOpen(true)} />
        <AboutSection />
        <CoursesSection />
        <AdmissionsSection />
        <PlacementsSection />
        <CampusSection />
        <ResultsSection />
        <CTASection onApplyClick={() => setModalOpen(true)} />
        <ContactSection />
      </main>

      <Footer />

      <AdmissionModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
