import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Target, ArrowRight, User, Brain, TrendingUp } from "lucide-react";

export default function AliveOS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Hook scroll progress for subtle core expansion effects on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const coreGlowScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.08, 0.98]);

  return (
    <div
      id="section-aliveos"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* ================= LEFT COLUMN: TEXT LAYOUT & STEP PROCESS FLOW ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* 1. Subtitle Alignment */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">05</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              ALIVE O.S.
            </span>
          </div>

          {/* 2. Main High-contrast Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans">
            Intelligence <br />
            behind <br />
            <span className="text-[#2BC48A]">every decision.</span>
          </h2>

          {/* 3. Small green thick divider block */}
          <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-6 mb-10" />

          {/* 4. Core Architecture Subsection */}
          <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-[#667085] uppercase mb-6 block">
            CORE ARCHITECTURE
          </span>

          {/* 5. Clean Step Process Horizontal Node Row */}
          <div className="flex items-center gap-6 mb-10">
            {/* Step A: Detect */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-[#E8EDF2] bg-white flex items-center justify-center text-[#2BC48A] shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#2BC48A]/30 transition-colors duration-300">
                <Target className="w-5.5 h-5.5 text-[#2BC48A]" strokeWidth={2} />
              </div>
              <span className="text-[12.5px] font-sans font-extrabold text-[#0F172A] mt-2.5">Detect</span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-[#94A3B8] -mt-5">
              <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </div>

            {/* Step B: Predict */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-[#E8EDF2] bg-white flex items-center justify-center text-[#2BC48A] shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#2BC48A]/30 transition-colors duration-300">
                <svg className="w-5.5 h-5.5 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                  <circle cx="12" cy="6" r="2.5" />
                  <circle cx="6" cy="16" r="2.5" />
                  <circle cx="18" cy="16" r="2.5" />
                  <line x1="10.5" y1="8" x2="7.5" y2="14" />
                  <line x1="13.5" y1="8" x2="16.5" y2="14" />
                </svg>
              </div>
              <span className="text-[12.5px] font-sans font-extrabold text-[#0F172A] mt-2.5">Predict</span>
            </div>

            {/* Connecting Arrow */}
            <div className="text-[#94A3B8] -mt-5">
              <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
            </div>

            {/* Step C: Guide */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-[#E8EDF2] bg-white flex items-center justify-center text-[#2BC48A] shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-[#2BC48A]/30 transition-colors duration-300">
                <User className="w-5.5 h-5.5 text-[#2BC48A]" strokeWidth={2} />
              </div>
              <span className="text-[12.5px] font-sans font-extrabold text-[#0F172A] mt-2.5">Guide</span>
            </div>
          </div>

          {/* 6. Description Text with longevity styled */}
          <p className="text-[#475467] font-sans text-[15px] sm:text-[16px] leading-[1.75] max-w-md mb-10">
            Alive O.S. acts as a quiet, ambient clinical intelligence companion. It continuously cross-analyzes behavioral vectors and biomarker patterns to pre-empt risk and steer <span className="italic-serif text-[#2BC48A] font-medium font-serif">longevity.</span>
          </p>

          {/* 7. Beautiful Brain Icon Ambient Pill */}
          <div className="flex items-center self-start">
            <div className="inline-flex items-center gap-3 bg-white border border-[#E8EDF2] px-5 py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.01)] hover:shadow-[0_8px_24px_rgba(43,196,138,0.04)] transition-all duration-300">
              <div className="w-8 h-8 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A]">
                <Brain className="w-4.5 h-4.5" />
              </div>
              <span className="text-[13px] font-sans font-medium text-[#475467] leading-relaxed">
                Ambient. Predictive. Personal. <span className="text-[#2BC48A] font-bold">Always-on.</span>
              </span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: CONCENTRIC INTEL GRAPHICS CARD ================= */}
        <div className="lg:col-span-7 flex justify-center">
          
          <div className="relative w-full max-w-[500px] aspect-[500/580] bg-white border border-[#E8EDF2] rounded-[44px] shadow-[0_24px_64px_rgba(15,23,42,0.015)] overflow-hidden flex flex-col items-center justify-center p-6">
            
            {/* Soft grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#E8EDF2_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

            {/* Glowing background radial blur orb to lift core atmosphere */}
            <motion.div
              style={{ scale: coreGlowScale }}
              className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#2BC48A]/8 to-emerald-400/2 blur-[44px] z-0 pointer-events-none top-[44.8%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            />

            {/* ================= SVG NETWORK & CONCENTRIC FIBERS (Scale mapped to layout space) ================= */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
              viewBox="0 0 500 580"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Concentric Circle Orbits centered at (250, 260) */}
              <circle cx="250" cy="260" r="110" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.08" />
              <circle cx="250" cy="260" r="150" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.06" />
              <circle cx="250" cy="260" r="190" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.04" />

              {/* Connecting Dashed Grey Lines */}
              {/* Node Detection (74, 115) to Center Core (250, 260) */}
              <line 
                x1="74" y1="115" x2="250" y2="260" 
                stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.18" 
              />
              
              {/* Node Prediction (426, 115) to Center Core (250, 260) */}
              <line 
                x1="426" y1="115" x2="250" y2="260" 
                stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.18" 
              />
              
              {/* Node Guidance (250, 465) to Center Core (250, 260) */}
              <line 
                x1="250" y1="465" x2="250" y2="260" 
                stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.18" 
              />

              {/* Green active highlight points situated along the coordinates */}
              {/* Left active point on the inner boundary intersection */}
              <circle cx="186" cy="207" r="4" fill="#2BC48A" />
              <circle cx="186" cy="207" r="8" fill="#2BC48A" fillOpacity="0.15" className="animate-ping" />

              {/* Right active point on the inner boundary intersection */}
              <circle cx="314" cy="207" r="4" fill="#2BC48A" />
              <circle cx="314" cy="207" r="8" fill="#2BC48A" fillOpacity="0.15" />

              {/* Bottom active node highlight point */}
              <circle cx="250" cy="340" r="4" fill="#2BC48A" />

              {/* Left sidebar accessory indicators on concentric rings */}
              <circle cx="138" cy="260" r="3.5" fill="#2BC48A" fillOpacity="0.8" />
              {/* Right sidebar accessory indicators on concentric rings */}
              <circle cx="362" cy="260" r="3.5" fill="#2BC48A" fillOpacity="0.8" />
            </svg>

            {/* ================= CENTRAL NEURAL GLOWING CORE SPHERE ================= */}
            <div 
              className="absolute top-[44.8%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 select-none flex items-center justify-center"
            >
              {/* Pulsing atmospheric outer rings */}
              <div className="absolute w-[214px] h-[214px] rounded-full border border-[#2BC48A]/10 animate-pulse duration-1000" />
              
              {/* Main Sphere Body */}
              <div 
                className="relative w-[172px] h-[172px] rounded-full bg-[#0E1B17] flex flex-col items-center justify-center shadow-[0_0_60px_rgba(43,196,138,0.22),inset_0_0_32px_rgba(43,196,138,0.45)] border border-[#2BC48A]/35"
              >
                <span className="text-[14px] font-sans font-extrabold tracking-[0.25em] text-[#2BC48A]">ALIVE O.S.</span>
                <span className="text-[9.5px] font-mono tracking-[0.25em] text-slate-400 mt-2 uppercase font-medium">AI CORE</span>

                {/* Light reflection detail for depth */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/6 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* ================= FLOATING INTELLIGENCE LABELS/NODES ================= */}
            
            {/* 1. NODE: DETECTION (Top Left) */}
            <motion.div
              style={{ left: "14.8%", top: "19.8%" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[114px] h-[114px] rounded-full bg-white border flex flex-col items-center justify-center p-2.5 text-center group transition-all duration-300 ${
                hoveredNode === "detection"
                  ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                  : "border-[#E8EDF2] shadow-[0_6px_20px_rgba(0,0,0,0.015)] hover:border-[#2BC48A]/40"
              }`}
              onMouseEnter={() => setHoveredNode("detection")}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.04 }}
            >
              {/* Icon Bubble */}
              <div className="w-8 h-8 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1.5 transition-colors duration-300 group-hover:bg-[#2BC48A]/5 group-hover:border-[#2BC48A]/20">
                <Target className="w-4.5 h-4.5" strokeWidth={2.2} />
              </div>
              <h4 className="text-[9.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                DETECTION
              </h4>
              <p className="text-[8.5px] font-sans text-[#667085] leading-tight font-medium mt-0.5 max-w-[85px] mx-auto">
                Identify early signals
              </p>
            </motion.div>

            {/* 2. NODE: PREDICTION (Top Right) */}
            <motion.div
              style={{ left: "85.2%", top: "19.8%" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[114px] h-[114px] rounded-full bg-white border flex flex-col items-center justify-center p-2.5 text-center group transition-all duration-300 ${
                hoveredNode === "prediction"
                  ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                  : "border-[#E8EDF2] shadow-[0_6px_20px_rgba(0,0,0,0.015)] hover:border-[#2BC48A]/40"
              }`}
              onMouseEnter={() => setHoveredNode("prediction")}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.04 }}
            >
              <div className="w-8 h-8 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1.5 transition-colors duration-300 group-hover:bg-[#2BC48A]/5 group-hover:border-[#2BC48A]/20">
                <TrendingUp className="w-4.5 h-4.5" strokeWidth={2.2} />
              </div>
              <h4 className="text-[9.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                PREDICTION
              </h4>
              <p className="text-[8.5px] font-sans text-[#667085] leading-tight font-medium mt-0.5 max-w-[85px] mx-auto">
                Anticipate risk trajectories
              </p>
            </motion.div>

            {/* 3. NODE: GUIDANCE (Bottom Center) */}
            <motion.div
              style={{ left: "50%", top: "80.2%" }}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[114px] h-[114px] rounded-full bg-white border flex flex-col items-center justify-center p-2.5 text-center group transition-all duration-300 ${
                hoveredNode === "guidance"
                  ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                  : "border-[#E8EDF2] shadow-[0_6px_20px_rgba(0,0,0,0.015)] hover:border-[#2BC48A]/40"
              }`}
              onMouseEnter={() => setHoveredNode("guidance")}
              onMouseLeave={() => setHoveredNode(null)}
              whileHover={{ scale: 1.04 }}
            >
              {/* Profile Icon with overlapping solid micro-heart */}
              <div className="relative w-8 h-8 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1.5 transition-colors duration-300 group-hover:bg-[#2BC48A]/5 group-hover:border-[#2BC48A]/20">
                <User className="w-4.5 h-4.5" strokeWidth={2.2} />
                <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5">
                  <svg className="w-2.5 h-2.5 text-[#2BC48A]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <h4 className="text-[9.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                GUIDANCE
              </h4>
              <p className="text-[8.5px] font-sans text-[#667085] leading-tight font-medium mt-0.5 max-w-[85px] mx-auto">
                Personalized next best action
              </p>
            </motion.div>

            {/* ================= CARD FOOTER METADATA LABEL ================= */}
            <div className="absolute bottom-[28px] font-mono text-[9px] text-[#94A3B8] tracking-[0.25em] uppercase font-bold pointer-events-none select-none">
              HYBRID AI CORE MODULE
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
