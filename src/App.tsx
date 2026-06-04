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
import SectionXPrize from "./components/SectionXPrize";
import ClinicalMetricsStrip from "./components/ClinicalMetricsStrip";
import HumanStories from "./components/HumanStories";
import TrustRegulatory from "./components/TrustRegulatory";
import Leadership from "./components/Leadership";
import AboutGOQii from "./components/AboutGOQii";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import SanjeeviniPage from "./components/SanjeeviniPage";

declare global {
  interface Window {
    navigateToPage?: (pageName: "home" | "about" | "sanjeevini") => void;
  }
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "sanjeevini">("home");

  useEffect(() => {
    // Detect initial route
    const pathName = window.location.pathname.replace(/^\/|\/$/g, "");
    if (pathName === "sanjeevini") {
      setCurrentPage("sanjeevini");
    } else if (pathName === "about") {
      setCurrentPage("about");
    }

    window.navigateToPage = (pageName: "home" | "about" | "sanjeevini") => {
      setCurrentPage(pageName);
      const urlPath = pageName === "home" ? "/" : `/${pageName}`;
      window.history.pushState(null, "", urlPath);
      window.scrollTo({ top: 0, behavior: "instant" as any });
    };

    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\/|\/$/g, "");
      if (currentPath === "sanjeevini") {
        setCurrentPage("sanjeevini");
      } else if (currentPath === "about") {
        setCurrentPage("about");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.navigateToPage = undefined;
      window.removeEventListener("popstate", handlePopState);
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
      transition={{ duration: 0.35 }}
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

          {/* 9. Section 06-XP: Sanjeevini Longevity and Science */}
          <SectionXPrize />

          {/* 10. Clinical Proof Metrics Strip */}
          <ClinicalMetricsStrip />

          {/* 11. Section 07: Human Stories */}
          <HumanStories />

          {/* 12. Section 08 & 09: Trust + Regulatory */}
          <TrustRegulatory />

          {/* 13. Section 10: Leadership */}
          <Leadership />

          {/* 14. Section 11: About GOQii Journey */}
          <AboutGOQii />

          {/* 15. Section 14: Final CTA & Closing Interaction */}
          <FinalCTA />
        </>
      ) : currentPage === "about" ? (
        <AboutPage />
      ) : (
        <SanjeeviniPage />
      )}

      {/* 14. Responsive Brand Footer */}
      <Footer />
    </motion.div>
  );
}
