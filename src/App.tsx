import { motion } from "motion/react";
import HeroSection from "./components/HeroSection";
import SectionProblem from "./components/SectionProblem";
import SectionGap from "./components/SectionGap";
import SectionSolution from "./components/SectionSolution";
import ConnectedEcosystem from "./components/ConnectedEcosystem";
import AliveOS from "./components/AliveOS";
import SectionXPrize from "./components/SectionXPrize";
import HumanStories from "./components/HumanStories";
import TrustRegulatory from "./components/TrustRegulatory";
import Leadership from "./components/Leadership";
import AboutGOQii from "./components/AboutGOQii";
import FinalCTA from "./components/FinalCTA";

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
    </motion.div>
  );
}
