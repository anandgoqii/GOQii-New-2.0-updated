import { useState, useEffect, ReactNode } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
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
import HumanStories from "./components/HumanStories";
import TrustRegulatory from "./components/TrustRegulatory";
import OurStory from "./components/OurStory";
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
import FaqPage from "./components/FaqPage";
import WarrantyPage from "./components/WarrantyPage";
import SmartSciencePage from "./components/SmartSciencePage";
import TrackOrderPage from "./components/TrackOrderPage";
import PlansPage from "./components/PlansPage";

declare global {
  interface Window {
    navigateToPage?: (pageName: "home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers" | "faqs" | "warranty" | "smart-science" | "trackingorder" | "plans") => void;
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
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers" | "faqs" | "warranty" | "smart-science" | "trackingorder" | "plans">("home");

  useEffect(() => {
    // Detect initial route safeguards
    let pathName = "";
    try {
      pathName = window.location.pathname.replace(/^\/|\/$/g, "");
    } catch (e) {
      console.warn("Failed to read window.location.pathname:", e);
    }

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
    } else if (pathName === "faqs" || pathName === "support") {
      setCurrentPage("faqs");
    } else if (pathName === "warranty" || pathName === "claim-warranty") {
      setCurrentPage("warranty");
    } else if (pathName === "smart-science" || pathName === "science") {
      setCurrentPage("smart-science");
    } else if (pathName === "trackingorder" || pathName === "track-order" || pathName === "trackorder") {
      setCurrentPage("trackingorder");
    } else if (pathName === "plans") {
      setCurrentPage("plans");
    }

    window.navigateToPage = (pageName: "home" | "about" | "sanjeevini" | "trust" | "privacy" | "terms" | "careers" | "faqs" | "warranty" | "smart-science" | "trackingorder" | "plans") => {
      setCurrentPage(pageName);
      const urlPath = pageName === "home" ? "/" : `/${pageName}`;
      try {
        window.history.pushState(null, "", urlPath);
      } catch (e) {
        console.warn("Skipping pushState inside iframe sandbox restriction:", e);
      }
      try {
        window.scrollTo({ top: 0, behavior: "auto" });
      } catch (e) {
        console.warn("Failed to scrollTo top:", e);
      }
    };

    const handlePopState = () => {
      let currentPath = "";
      try {
        currentPath = window.location.pathname.replace(/^\/|\/$/g, "");
      } catch (e) {
        console.warn("Failed to read location.pathname in popstate:", e);
      }

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
      } else if (currentPath === "faqs" || currentPath === "support") {
        setCurrentPage("faqs");
      } else if (currentPath === "warranty" || currentPath === "claim-warranty") {
        setCurrentPage("warranty");
      } else if (currentPath === "smart-science" || currentPath === "science") {
        setCurrentPage("smart-science");
      } else if (currentPath === "trackingorder" || currentPath === "track-order" || currentPath === "trackorder") {
        setCurrentPage("trackingorder");
      } else if (currentPath === "plans") {
        setCurrentPage("plans");
      } else {
        setCurrentPage("home");
      }
    };

    try {
      window.addEventListener("popstate", handlePopState);
    } catch (e) {
      console.warn("Failed to bind popstate:", e);
    }

    return () => {
      window.navigateToPage = undefined;
      try {
        window.removeEventListener("popstate", handlePopState);
      } catch (e) {
        console.warn("Failed to unbind popstate:", e);
      }
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
      className="relative min-h-screen bg-[#F8FAFB] w-full max-w-full overflow-x-hidden"
    >
      {/* Global Floating Header Navigation Bar */}
      <Header />

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

          {/* 12. Section 08: Human Stories */}
          <ScrollRevealSection>
            <HumanStories />
          </ScrollRevealSection>

          {/* 10 & 11. Section 10 & 11: Trust + Regulatory */}
          <ScrollRevealSection>
            <TrustRegulatory />
          </ScrollRevealSection>

          {/* 12. Section 12: Our Story */}
          <ScrollRevealSection>
            <OurStory />
          </ScrollRevealSection>

          {/* 13. Section 13: Leadership */}
          <ScrollRevealSection>
            <Leadership />
          </ScrollRevealSection>

          {/* 14. Section 14: About GOQii Journey */}
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
      ) : currentPage === "faqs" ? (
        <FaqPage />
      ) : currentPage === "warranty" ? (
        <WarrantyPage />
      ) : currentPage === "smart-science" ? (
        <SmartSciencePage />
      ) : currentPage === "trackingorder" ? (
        <TrackOrderPage />
      ) : currentPage === "plans" ? (
        <PlansPage />
      ) : (
        <SanjeeviniPage />
      )}

      {/* 14. Responsive Brand Footer */}
      <Footer />
    </motion.div>
  );
}
