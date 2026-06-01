import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SmartText from "./SmartText";

// Reuse the generated premium human portrait
import heroImage from "../assets/images/goqii_hero_portrait_1780319171867.png";

export default function SectionProblem() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect of 10% on the image relative to scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      id="section-problem"
      ref={containerRef}
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden bg-white py-20 md:py-32 px-6 md:px-16"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text Content and Label */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* Label structure: 01 | THE PROBLEM */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">01</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              The Problem
            </span>
          </div>

          {/* Editorial Headline with Playfair Display normal weight */}
          <h2 className="font-serif text-[#0F172A] text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight mb-6 font-normal">
            Most healthcare <br />
            <span className="text-[#5A6376]">reacts too late.</span>
          </h2>

          {/* Green accent line directly below as shown in the design */}
          <div className="w-[72px] h-[3px] bg-[#2BC48A] rounded-full mb-8" />

          {/* Precise paragraph typography with leaf/prevention italic-serif styled in green */}
          <p className="text-[#475467] font-sans text-[15px] sm:text-[17px] leading-[1.8] max-w-sm mb-12">
            By the time symptoms appear, <br />
            the problem is already progressing. <br />
            True <span className="italic-serif text-[#2BC48A] font-medium tracking-wide">prevention</span> happens in the <br />
            unmeasured space before crisis.
          </p>

          {/* Low pill tag "Prevention is the new cure." */}
          <div className="flex items-center self-start">
            <div className="inline-flex items-center gap-3.5 bg-white border border-[#F1F5F9]/80 px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] transition-all duration-500">
              {/* Soft circle green plant icon */}
              <div className="w-8 h-8 rounded-full bg-[#E8F8F2] flex items-center justify-center text-[#2BC48A]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M14 9a2 2 0 1 0-4 0v4h4V9z"/>
                  <path d="M12 13V9"/>
                </svg>
              </div>
              <span className="text-[13px] font-sans font-medium text-[#475467]">
                <span className="text-[#2BC48A] font-semibold">Prevention</span> is the new cure.
              </span>
            </div>
          </div>

        </div>

        {/* Right Column: Embedded Portrait (with soft realistic shadowing & green concentric signal rings) */}
        <div className="lg:col-span-7 relative w-full aspect-[5/4] sm:aspect-[4/3] rounded-[32px] overflow-hidden bg-white border border-[#E8EDF2]/40 shadow-xs">
          
          {/* Real movement inside the frame */}
          <motion.div
            style={{ y: yParallax }}
            className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] pointer-events-none"
          >
            <img
              src={heroImage}
              alt="Subtle preventative clinical insight portrait"
              className="w-full h-full object-cover brightness-100 contrast-[1.03] opacity-95 scale-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Concentric Prevention Ring Overlays around her mental space as seen in image */}
          <div className="absolute inset-0 z-10 pointer-events-none select-none">
            {/* The Green Dot on her face/temple coordinate */}
            <div className="absolute top-[41.5%] left-[76.5%] -translate-x-1/2 -translate-y-1/2">
              {/* Solid Green Pulse Core */}
              <div className="relative flex items-center justify-center">
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-[#2BC48A] opacity-20 animate-ping" />
                <div className="h-4.5 w-4.5 rounded-full bg-[#2BC48A]" />
              </div>

              {/* Concentric rings styled perfectly as ultra-thin light lines */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Ring 1 */}
                <div className="w-24 h-24 rounded-full border border-[#2BC48A]/15" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Ring 2 */}
                <div className="w-48 h-48 rounded-full border border-[#2BC48A]/10" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Ring 3 */}
                <div className="w-80 h-80 rounded-full border border-[#2BC48A]/8" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {/* Ring 4 */}
                <div className="w-[440px] h-[440px] rounded-full border border-[#2BC48A]/5" />
              </div>
            </div>
          </div>

          {/* Smooth overlay shading mapping window shadow feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
