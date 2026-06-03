import { motion } from "motion/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ComplianceTrustBar from "./components/ComplianceTrustBar";
import ScaleAndMetrics from "./components/ScaleAndMetrics";
import SectionProblem from "./components/SectionProblem";
import SectionGap from "./components/SectionGap";
import SectionSolution from "./components/SectionSolution";
import WhyGOQiiWins from "./components/WhyGOQiiWins";
import ConnectedEcosystem from "./components/ConnectedEcosystem";
import IndustryVerticals from "./components/IndustryVerticals";
import AliveOS from "./components/AliveOS";
import DynamicMotivation from "./components/DynamicMotivation";
import SectionXPrize from "./components/SectionXPrize";
import HumanStories from "./components/HumanStories";
import TrustRegulatory from "./components/TrustRegulatory";
import Leadership from "./components/Leadership";
import AboutGOQii from "./components/AboutGOQii";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import PersonaNavigation from "./components/PersonaNavigation";

export default function App() {
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

      {/* 1. Hero Section */}
      <HeroSection onExplore={handleExplore} />

      {/* 1.5. Compliance Trust Bar */}
      <ComplianceTrustBar />

      {/* 1.6. Key Metrics Higher & Scale Section (Within first 2 scrolls) */}
      <ScaleAndMetrics />

      {/* 2. Section 01: The Problem */}
      <SectionProblem />

      {/* 3. Section 02: The Gap */}
      <SectionGap />

      {/* 4. Section 03: The Solution */}
      <SectionSolution />

      {/* 4.5. Why GOQii Wins Side-by-Side Comparison */}
      <WhyGOQiiWins />

      {/* 5. Section 04: The Connected Ecosystem */}
      <ConnectedEcosystem />

      {/* 5.5. B2B Industry Verticals */}
      <IndustryVerticals />

      {/* 7. Section 05: Alive O.S. (with interactive Healthstack visual) */}
      <AliveOS />

      {/* 7.5. Dynamic Motivation Section (The Science of Lasting Behavior Change) */}
      <DynamicMotivation />

      {/* 8. Section 08: XPRIZE Sanjeevini */}
      <SectionXPrize />

      {/* 9. Section 09: Human Stories */}
      <HumanStories />

      {/* 10. Section 10 & 11: Trust + Regulatory */}
      <TrustRegulatory />

      {/* 11. Section 12: Leadership */}
      <Leadership />

      {/* 12. Section 13: About GOQii Journey */}
      <AboutGOQii />

      {/* 13. Section 14: Final CTA & Closing Interaction */}
      <FinalCTA />

      {/* 14. Responsive Brand Footer */}
      <Footer />

      {/* 15. Sticky/Floating Persona-Forked Navigation Routes */}
      <PersonaNavigation />
    </motion.div>
  );
}
