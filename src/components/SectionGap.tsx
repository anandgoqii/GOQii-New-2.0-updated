import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SmartText from "./SmartText";

export default function SectionGap() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into viewport scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform offsets to simulate "unifying" scatter on scroll down
  const sleepY = useTransform(scrollYProgress, [0.1, 0.55], [-70, 0]);
  const sleepOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const nutritionX = useTransform(scrollYProgress, [0.1, 0.55], [70, 0]);
  const nutritionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const recoveryY = useTransform(scrollYProgress, [0.1, 0.55], [70, 0]);
  const recoveryOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const movementX = useTransform(scrollYProgress, [0.1, 0.55], [-70, 0]);
  const movementOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  // Curve draw factor on scroll progress
  const lineDraw = useTransform(scrollYProgress, [0.25, 0.6], [0.15, 1]);
  const coreScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1.05]);

  return (
    <div
      id="section-gap"
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-20 md:py-32 px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left column: Highly Polished Typography content */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* Label structure: 02 | THE MISSING LINK */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">02</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              The Missing Link
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-[76px] font-black tracking-tight text-[#0F172A] leading-[1.05] mb-8 font-sans"
          >
            We know <br />
            <span className="text-[#5A6376]">what to do.</span>
            <br />
            We struggle <br />
            <span className="text-[#2BC48A]">to do it.</span>
          </motion.h2>

          {/* Green accent line as shown in the design */}
          <div className="w-[72px] h-[3px] bg-[#2BC48A] rounded-full mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="text-base sm:text-[17px] font-sans text-[#475467] leading-[1.8] max-w-sm mb-12"
          >
            <p>
              Health information is abundant. <br />
              Consistent action is not. <br />
              Under guidance, vectors transform.
            </p>
          </motion.div>

          {/* Low pill tag "Guidance turns knowledge..." */}
          <div className="flex items-center self-start">
            <div className="inline-flex items-center gap-3.5 bg-white border border-[#F1F5F9]/80 px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] transition-all duration-500">
              <div className="w-8 h-8 rounded-full bg-[#E8F8F2] flex items-center justify-center text-[#2BC48A]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12M12 12c-2-2.5-5-2-5-2s.5 4 5 2c2-2.5 5-2 5-2s-.5 4-5 2z"/>
                </svg>
              </div>
              <span className="text-[13px] font-sans font-medium text-[#475467] leading-relaxed">
                <span className="text-[#2BC48A] font-semibold">Guidance</span> turns knowledge <br className="hidden sm:inline" /> into lasting change.
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Connected Orbits Canvas */}
        <div className="lg:col-span-1" /> {/* Layout cushion spacing */}
        
        <div className="lg:col-span-6 relative w-full aspect-square max-w-[500px] lg:max-w-[520px] rounded-[32px] bg-white border border-[#E8EDF2]/40 shadow-xs flex items-center justify-center p-8 overflow-hidden">
          
          {/* 1. Backdrop Concentric Orbits Overlay - Vector Perfect coordinates mapped in 550x550 system */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 550">
            {/* Soft Concentric Orbits */}
            <circle cx="275" cy="275" r="50" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="275" cy="275" r="105" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.08" />
            <circle cx="275" cy="275" r="160" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.06" />
            <circle cx="275" cy="275" r="220" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.03" />
            
            {/* Elegant Data telemetry link dots positioned on Orbits */}
            <circle cx="349" cy="198" r="3.5" fill="#2BC48A" fillOpacity="0.5" />
            <circle cx="162" cy="386" r="3" fill="#2BC48A" fillOpacity="0.4" />
            <circle cx="433" cy="383" r="3" fill="#2BC48A" fillOpacity="0.4" />
            <circle cx="385" cy="148" r="3.5" fill="#2BC48A" fillOpacity="0.5" />

            {/* Curving swooping data fibers from Movement (left: 125,275) to Core (center: 275,275) */}
            <motion.g style={{ opacity: lineDraw }}>
              {/* Curve 1 - Center Straightish */}
              <path d="M 125 275 Q 200 275, 275 275" stroke="#2BC48A" strokeWidth="1.2" fill="none" strokeOpacity="0.25" strokeDasharray="3 3" />
              {/* Curve 2 - Deep Swoop Bottom */}
              <path d="M 125 275 C 155 330, 220 315, 275 275" stroke="#2BC48A" strokeWidth="1" fill="none" strokeOpacity="0.2" />
              {/* Curve 3 - Swoop Top */}
              <path d="M 125 275 C 160 220, 225 240, 275 275" stroke="#2BC48A" strokeWidth="1" fill="none" strokeOpacity="0.2" />
              {/* Curve 4 - Dynamic lower split fibers */}
              <path d="M 125 275 C 145 355, 240 310, 275 275" stroke="#2BC48A" strokeWidth="0.8" fill="none" strokeOpacity="0.15" />
              {/* Curve 5 - Dynamic upper split fibers */}
              <path d="M 125 275 C 145 195, 240 240, 275 275" stroke="#2BC48A" strokeWidth="0.8" fill="none" strokeOpacity="0.15" />

              {/* Anchor line nodes to Sleep, Nutrition, Recovery */}
              <line x1="275" y1="125" x2="275" y2="235" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
              <line x1="425" y1="275" x2="315" y2="275" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
              <line x1="275" y1="425" x2="275" y2="315" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="3 3" />
            </motion.g>

            {/* Golden glowing touchpoints inside core entrance space */}
            <circle cx="235" cy="275" r="3" fill="#FBBF24" className="animate-pulse" />
            <circle cx="235" cy="275" r="8" fill="#FBBF24" fillOpacity="0.15" />
          </svg>

          {/* 2. CENTRAL GLOWING CORE */}
          <motion.div
            style={{ scale: coreScale }}
            className="absolute z-10 w-22 h-22 rounded-full bg-gradient-to-br from-[#4CD6A1] to-[#1FA875] flex flex-col items-center justify-center border border-white/20 shadow-[0_8px_32px_rgba(43,196,138,0.25)]"
          >
            <span className="text-[11px] font-sans font-bold tracking-[0.2em] text-white">CORE</span>
            {/* Pulsing outer atmosphere rings */}
            <div className="absolute inset-[-12px] rounded-full border border-[#2BC48A]/20 scale-100 animate-pulse duration-1000" />
            <div className="absolute inset-[-24px] rounded-full border border-[#2BC48A]/5 scale-100" />
          </motion.div>

          {/* 3. CORE CHANNELS NODES (Premium white circular cards with rich icons) */}
          
          {/* Channel A: SLEEP (Top - centered at Y: 22.5%, X: 50%) */}
          <motion.div
            style={{ y: sleepY, opacity: sleepOpacity }}
            className="absolute top-[16%] left-1/2 -translate-x-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border border-[#E8EDF2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 flex flex-col items-center justify-center p-1 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            </div>
            <span className="text-[8px] font-sans font-extrabold tracking-[0.15em] text-[#0F172A] uppercase">
              Sleep
            </span>
          </motion.div>

          {/* Channel B: NUTRITION (Right - centered at Y: 50%, X: 77.5%) */}
          <motion.div
            style={{ x: nutritionX, opacity: nutritionOpacity }}
            className="absolute right-[14%] top-1/2 -translate-y-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border border-[#E8EDF2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 flex flex-col items-center justify-center p-1 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" className="opacity-10" />
                <path d="M12 5V2M12 5c-1.3-.8-3-1-4.5-.5a4 4 0 0 0-2.5 3.5c0 4 3 6.5 5 8.5 2-2 5-4.5 5-8.5a4 4 0 0 0-2.5-3.5C15 4 13.3 4.2 12 5z" />
              </svg>
            </div>
            <span className="text-[8px] font-sans font-extrabold tracking-[0.15em] text-[#0F172A] uppercase">
              Nutrition
            </span>
          </motion.div>

          {/* Channel C: RECOVERY (Bottom - centered at Y: 77.5%, X: 50%) */}
          <motion.div
            style={{ y: recoveryY, opacity: recoveryOpacity }}
            className="absolute bottom-[16%] left-1/2 -translate-x-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border border-[#E8EDF2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 flex flex-col items-center justify-center p-1 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.886H3.886L9.773 12.5 7.86 18.386 12 14.773l4.14 3.613-1.913-5.886 5.887-3.614h-6.202L12 3Z" />
              </svg>
            </div>
            <span className="text-[8px] font-sans font-extrabold tracking-[0.15em] text-[#0F172A] uppercase">
              Recovery
            </span>
          </motion.div>

          {/* Channel D: MOVEMENT (Left - centered at Y: 50%, X: 22.5%) */}
          <motion.div
            style={{ x: movementX, opacity: movementOpacity }}
            className="absolute left-[14%] top-1/2 -translate-y-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border border-[#E8EDF2] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 flex flex-col items-center justify-center p-1 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1 group-hover:scale-110 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18.8 6c-.4-.5-.9-.9-1.5-1.2C16.1 4.3 14.6 4 13 4c-4.4 0-8 3.6-8 8H3l3.5 3.5L10 12H7c0-3.3 2.7-6 6-6 1.1 0 2.2.3 3.1.9c.5.3.9.7 1.2 1.2h1.5z" />
                <path d="m14 11 3 3 5-5-1.5-1.5L17 11l-1.5-1.5L14 11z" />
              </svg>
            </div>
            <span className="text-[8px] font-sans font-extrabold tracking-[0.15em] text-[#0F172A] uppercase">
              Movement
            </span>
          </motion.div>

          {/* 4. DOWN POINTING HINT ARROW AND TEXT */}
          <div className="absolute bottom-6 flex flex-col items-center gap-2 pointer-events-none">
            <div className="w-7 h-7 rounded-full border border-[#E2E8F0] flex items-center justify-center text-[#2BC48A]">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <span className="text-[8px] font-sans font-extrabold tracking-[0.18em] text-[#94A3B8] uppercase">
              Scroll down to unify channels
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
