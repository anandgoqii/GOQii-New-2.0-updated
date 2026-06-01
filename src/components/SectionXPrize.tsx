import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Particles from "./Particles";
import SmartText from "./SmartText";

// Import the generated pristine DNA structure asset
import dnaStructureImage from "../assets/images/goqii_dna_structure_1780319199140.png";

export default function SectionXPrize() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Translate scroll sequence to standard 25% parallax for DNA alignment
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-12.5%", "12.5%"]);
  const pulseSphere = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.85, 1.05, 0.9]);

  return (
    <div
      id="section-xprize"
      ref={containerRef}
      className="relative min-h-[95vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFB] py-24 px-6 md:px-16"
    >
      {/* Background Section Subtitle */}
      <div className="w-full max-w-6xl mx-auto mb-16 flex flex-col items-start font-bold">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="label-caps !text-[#2BC48A] mb-4"
        >
          Section 06 / XPRIZE Sanjeevini
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left column: Text details */}
        <div className="flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] leading-[0.95] mb-8"
          >
            Extending healthy life. <br />
            <span className="text-[#667085]">For everyone.</span>
          </motion.h2>

          <span className="text-xs font-bold tracking-widest text-[#2BC48A] uppercase mb-4 block">GLOBAL LONGEVITY CHALLENGE</span>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl font-normal text-[#667085] leading-relaxed max-w-md"
          >
            <SmartText>A global mission to add healthy years to human life. Partnering with the world's most visionary scientists, clinicians, and technologies to push back the boundaries of cellular age.</SmartText>
          </motion.p>
        </div>

        {/* Right column: DNA slow rotation + drifting particles + soft light sphere */}
        <div className="relative w-full aspect-[1/1] max-w-[480px] mx-auto rounded-full bg-white border border-[#E8EDF2] flex items-center justify-center overflow-hidden">
          {/* Subtle grid nodes behind */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8EDF2_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />

          {/* Soft background light sphere pulsing */}
          <motion.div
            style={{ scale: pulseSphere }}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#2BC48A]/10 to-indigo-500/5 blur-[45px] pointer-events-none"
          />

          {/* Drifting cosmic particles */}
          <Particles count={15} color="bg-[#2BC48A]" speedMultiplier={1.2} />

          {/* Rotating DNA Structure Layer with 25% parallax */}
          <motion.div
            style={{ y: yParallax }}
            animate={{ rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            className="relative w-[85%] h-[85%] flex items-center justify-center p-4"
          >
            <img
              src={ dnaStructureImage }
              alt="Priscilla DNA Double-helix representation"
              className="w-full h-full object-contain opacity-90 scale-102"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Abstract central human core layout outline */}
          <div className="absolute inset-0 border border-slate-100 rounded-full scale-95 pointer-events-none" />
          <div className="absolute inset-0 border border-[#2BC48A]/10 rounded-full scale-[0.88] pointer-events-none" />
          
          <div className="absolute bottom-6 font-mono text-[9px] text-[#667085] tracking-widest uppercase pointer-events-none">
            XPRIZE COHORT INTEGRATED
          </div>
        </div>
      </div>
    </div>
  );
}
