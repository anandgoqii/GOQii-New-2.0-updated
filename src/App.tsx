import { useState, useEffect, ReactNode } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import FloatingTabs from "./components/FloatingTabs";
import HeroSection from "./components/HeroSection";
import ProofStrip from "./components/ProofStrip";
import AudienceSelector from "./components/AudienceSelector";
import SectionProblem from "./components/SectionProblem";
import SectionGap from "./components/SectionGap";
import SectionSolution from "./components/SectionSolution";
import ConnectedEcosystem from "./components/ConnectedEcosystem";
import AliveOS from "./components/AliveOS";
import SolutionsEcosystem from "./components/SolutionsEcosystem";
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
import TrustCenterPage from "./components/TrustCenterPage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import TermsOfServicePage from "./components/TermsOfServicePage";
import CareersPage from "./components/CareersPage";

declare global {
  interface Window {
    navigateToPage?: (pageName: "home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers") => void;
  }
}

interface ScrollRevealSectionProps {
  children: ReactNode;
}

function ScrollRevealSection({ children }: ScrollRevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers">("home");

  useEffect(() => {
    // Detect initial route
    const pathName = window.location.pathname.replace(/^\/|\/$/g, "");
    if (pathName === "sanjeevini") {
      setCurrentPage("sanjeevini");
    } else if (pathName === "about") {
      setCurrentPage("about");
    } else if (pathName === "trust") {
      setCurrentPage("trust");
    } else if (pathName === "privacy") {
      setCurrentPage("privacy");
    } else if (pathName === "terms") {
      setCurrentPage("terms");
    } else if (pathName === "careers") {
      setCurrentPage("careers");
    }

    window.navigateToPage = (pageName: "home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers") => {
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
      } else if (currentPath === "trust") {
        setCurrentPage("trust");
      } else if (currentPath === "privacy") {
        setCurrentPage("privacy");
      } else if (currentPath === "terms") {
        setCurrentPage("terms");
      } else if (currentPath === "careers") {
        setCurrentPage("careers");
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

          {/* Proof Strip with Social Proof and Partnership stats */}
          <ScrollRevealSection>
            <ProofStrip />
          </ScrollRevealSection>

          {/* Audience Selector Section */}
          <ScrollRevealSection>
            <AudienceSelector />
          </ScrollRevealSection>

          {/* 2. Section 01: The Problem */}
          <ScrollRevealSection>
            <SectionProblem />
          </ScrollRevealSection>

          {/* 3. Section 02: The Gap */}
          <ScrollRevealSection>
            <SectionGap />
          </ScrollRevealSection>

          {/* 4. Section 03: The Solution */}
          <ScrollRevealSection>
            <SectionSolution />
          </ScrollRevealSection>

          {/* 5. Section 04: The Connected Ecosystem */}
          <ScrollRevealSection>
            <ConnectedEcosystem />
          </ScrollRevealSection>

          {/* 7. Section 05: Alive O.S. */}
          <ScrollRevealSection>
            <AliveOS />
          </ScrollRevealSection>

          {/* Solutions Ecosystem Section */}
          <ScrollRevealSection>
            <SolutionsEcosystem />
          </ScrollRevealSection>

          {/* 8. Section 06: Daily Health Intelligence */}
          <ScrollRevealSection>
            <DailyHealthIntelligence />
          </ScrollRevealSection>

          {/* 9. Section 06-XP: Sanjeevini Longevity and Science */}
          <ScrollRevealSection>
            <SectionXPrize />
          </ScrollRevealSection>

          {/* 10. Clinical Proof Metrics Strip */}
          <ScrollRevealSection>
            <ClinicalMetricsStrip />
          </ScrollRevealSection>

          {/* 12. Section 08: Human Stories */}
          <ScrollRevealSection>
            <HumanStories />
          </ScrollRevealSection>

          {/* 12. Section 08 & 09: Trust + Regulatory */}
          <ScrollRevealSection>
            <TrustRegulatory />
          </ScrollRevealSection>

          {/* 13. Section 10: Leadership */}
          <ScrollRevealSection>
            <Leadership />
          </ScrollRevealSection>

          {/* 14. Section 11: About GOQii Journey */}
          <ScrollRevealSection>
            <AboutGOQii />
          </ScrollRevealSection>

          {/* 15. Section 14: Final CTA & Closing Interaction */}
          <ScrollRevealSection>
            <FinalCTA />
          </ScrollRevealSection>
        </>
      ) : currentPage === "about" ? (
        <AboutPage />
      ) : currentPage === "trust" ? (
        <TrustCenterPage />
      ) : currentPage === "privacy" ? (
        <PrivacyPolicyPage />
      ) : currentPage === "terms" ? (
        <TermsOfServicePage />
      ) : currentPage === "careers" ? (
        <CareersPage />
      ) : (
        <SanjeeviniPage />
      )}

      {/* 14. Responsive Brand Footer */}
      <Footer />
    </motion.div>
  );
}
