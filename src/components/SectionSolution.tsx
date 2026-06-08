import { motion } from "motion/react";
import { useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Connect",
    description: "Connect continuous data from wearables, lab tests, and daily health check-ins into one unified health record.",
    icon: (
      <svg className="w-6 h-6 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Understand",
    description: "GOQii's intelligence layer identifies emerging health risks and patterns before they become larger health concerns.",
    icon: (
      <svg className="w-6 h-6 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Guide",
    description: "Personalized recommendations and coaching help members take the right action based on their latest health data.",
    icon: (
      <svg className="w-6 h-6 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043a3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Improve",
    description: "Small daily actions lead to measurable improvements in sleep, activity, nutrition, weight, and overall health.",
    icon: (
      <svg className="w-6 h-6 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
      </svg>
    )
  }
];

export default function SectionSolution() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div
      id="section-solution"
      className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#FAFBFB] py-14 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      {/* Dynamic Background subtle grid detail to elevate aesthetic depth */}
      <div className="absolute inset-0 opacity-[0.4] pointer-events-none select-none overflow-hidden">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sol-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2BC48A" strokeWidth="0.5" strokeOpacity="0.06" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sol-grid)" />
        </svg>
      </div>

      {/* Main Curved Box Section Container */}
      <div className="relative w-full max-w-6xl mx-auto bg-white border border-[#E8EDF2] rounded-[36px] md:rounded-[48px] p-8 sm:p-12 md:p-16 shadow-[0_32px_80px_rgba(15,23,42,0.02)] overflow-hidden z-10">
        
        {/* Subtle decorative internal blur orb for premium feel */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#2BC48A]/5 rounded-full blur-3xl pointer-events-none -translate-y-12 translate-x-12" />

        {/* 1. SECTION HEADER (Title & Intro aligned excellently) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E8EDF2]/70 relative z-10">
          
          <div className="lg:col-span-7">
            {/* Tag / Label */}
            <div className="flex items-center gap-4 text-xs mb-6 font-sans">
              <span className="font-bold text-[#2BC48A] text-sm tracking-wide">03</span>
              <span className="text-[#E2E8F0] font-light text-sm">|</span>
              <span className="font-bold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
                The Solution
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-[1.08] font-sans">
              From information <br className="hidden sm:inline" />
              to <span className="text-[#2BC48A]">transformation.</span>
            </h2>

            {/* Green accent line */}
            <div className="w-[72px] h-[3.5px] bg-[#2BC48A] rounded-full mt-6" />
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <p className="text-[#475467] font-sans text-[15px] sm:text-[16px] leading-[1.7] max-w-lg">
              GOQii helps people turn complex data into sustainable daily vitality. Our health intelligence system decodes silent biomodulation parameters, formulating a step-by-step journey designed for lifelong longevity and healthy preventative habit creation.
            </p>
          </div>

        </div>

        {/* 2. THE STEPS: 4 CURVED CORNER CARD BOXES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 relative z-10">
          {STEPS.map((step, idx) => {
            const isHovered = hoveredIdx === idx;
            
            return (
              <motion.div
                key={step.num}
                className="relative bg-[#FAFBFB] hover:bg-white border border-[#E8EDF2] hover:border-[#2BC48A] rounded-[24px] p-8 flex flex-col justify-between min-h-[260px] cursor-pointer transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:shadow-[0_16px_36px_rgba(43,196,138,0.06)] group"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                whileHover={{ y: -6 }}
              >
                {/* Step Number Top Banner */}
                <div className="flex justify-between items-center mb-6">
                  {/* Icon Container box with curved corners */}
                  <div className={`w-12 h-12 rounded-[16px] border flex items-center justify-center transition-all duration-300 ${
                    isHovered 
                      ? "border-[#2BC48A] bg-[#2BC48A]/5 text-[#2BC48A]" 
                      : "border-[#E8EDF2] bg-white text-[#667085]"
                  }`}>
                    {step.icon}
                  </div>

                  {/* Clean sequence number styled fine-mono */}
                  <span className={`text-[12px] font-mono font-extrabold tracking-wider px-3 py-1 rounded-full border transition-all duration-300 ${
                    isHovered 
                      ? "text-[#2BC48A] border-[#2BC48A]/25 bg-[#2BC48A]/5" 
                      : "text-[#667085] border-[#E8EDF2] bg-white"
                  }`}>
                    STEP {step.num}
                  </span>
                </div>

                {/* Step Text Body */}
                <div className="mt-4">
                  <h3 className={`text-xl font-bold tracking-tight mb-2.5 transition-colors duration-300 ${
                    isHovered ? "text-[#2BC48A]" : "text-[#0F172A]"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-[#475467] leading-relaxed select-text">
                    {step.description}
                  </p>
                </div>

                {/* Connecting subtle dots indicator inside each card on the right for flow linkage (except last card) */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-[50%] -right-3.5 translate-y-[-50%] z-20 pointer-events-none">
                    <svg className="w-7 h-2 text-[#E8EDF2]" fill="none" viewBox="0 0 28 8">
                      <line x1="1" y1="4" x2="27" y2="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 3. FOOTER CORE PILL AND METADATA */}
        <div className="mt-14 pt-8 border-t border-[#E8EDF2]/60 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex items-center">
            <div className="inline-flex items-center gap-3.5 bg-[#FAFBFB] border border-[#E8EDF2]/60 px-5 py-3.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.015)]">
              <div className="w-8 h-8 rounded-full bg-[#E8F8F2] flex items-center justify-center text-[#2BC48A]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12M12 12c-2-2.5-5-2-5-2s.5 4 5 2c2-2.5 5-2 5-2s-.5 4-5 2z"/>
                </svg>
              </div>
              <span className="text-[13px] font-sans font-medium text-[#475467] leading-relaxed">
                <span className="text-[#2BC48A] font-bold">Guidance</span> turns continuous knowledge into lasting cellular habits.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-5 text-[9px] font-sans font-bold tracking-[0.25em] text-[#667085] uppercase flex-wrap justify-center sm:justify-start">
            <span>Continuous Monitoring</span>
            <span className="text-[#2BC48A] select-none text-xs leading-none">·</span>
            <span>Early Risk Detection</span>
            <span className="text-[#2BC48A] select-none text-xs leading-none">·</span>
            <span>Personalized Guidance</span>
            <span className="text-[#2BC48A] select-none text-xs leading-none">·</span>
            <span>Human Coaching</span>
          </div>

        </div>

      </div>
    </div>
  );
}
