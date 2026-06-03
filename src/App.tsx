import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import FloatingTabs from "./components/FloatingTabs";
import HeroSection from "./components/HeroSection";
import SectionProblem from "./components/SectionProblem";
import SectionGap from "./components/SectionGap";
import SectionSolution from "./components/SectionSolution";
import ConnectedEcosystem from "./components/ConnectedEcosystem";
import AliveOS from "./components/AliveOS";
import DailyHealthIntelligence from "./components/DailyHealthIntelligence";
import HumanStories from "./components/HumanStories";
import TrustRegulatory from "./components/TrustRegulatory";
import Leadership from "./components/Leadership";
import AboutGOQii from "./components/AboutGOQii";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";

declare global {
  interface Window {
    navigateToPage?: (pageName: "home" | "about") => void;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");

  useEffect(() => {
    window.navigateToPage = (pageName: "home" | "about") => {
      setCurrentPage(pageName);
    };
    return () => {
      window.navigateToPage = undefined;
    };
  }, []);

  // Smooth scroll handler for the Explore CTA action
  const handleExplore = () => {
    document.getElementById("section-problem")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen bg-[#F8FAFB] w-full"
    >
      {/* Global Floating Header Navigation Bar */}
      <Header />

      {/* Floating Audience Group Tabs Navigation (Individuals, Enterprises, Public Health) */}
      {currentPage === "home" && <FloatingTabs />}

      {/* Main Content Router */}
      {currentPage === "home" ? (
        <>
          {/* 1. Hero Section */}
          <HeroSection onExplore={handleExplore} />

          {/* 2. Section 01: The Problem */}
          <SectionProblem />

          {/* 3. Section 02: The Gap */}
          <SectionGap />

          {/* 4. Section 03: The Solution */}
          <SectionSolution />

          {/* 5. Section 04: The Connected Ecosystem */}
          <ConnectedEcosystem />

          {/* 7. Section 05: Alive O.S. */}
          <AliveOS />

          {/* 8. Section 06: Daily Health Intelligence */}
          <DailyHealthIntelligence />

          {/* 9. Section 07: Human Stories */}
          <HumanStories />

          {/* 10. Section 08 & 09: Trust + Regulatory */}
          <TrustRegulatory />

          {/* 11. Section 10: Leadership */}
          <Leadership />

          {/* 12. Section 11: About GOQii Journey */}
          <AboutGOQii />

          {/* 13. Section 14: Final CTA & Closing Interaction */}
          <FinalCTA />
        </>
      ) : (
        <AboutPage />
      )}

      {/* 14. Responsive Brand Footer */}
      <Footer />
    </motion.div>
  );
}
