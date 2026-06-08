import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SmartText from "./SmartText";

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
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden bg-white py-12 md:py-20 px-6 md:px-16"
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

          {/* Main High-contrast Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.05] mb-6 font-sans">
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
              src="https://appcdn.goqii.com/storeimg/11912_1780901386.png"
              alt="Subtle preventative clinical insight portrait"
              className="w-full h-full object-cover brightness-100 contrast-[1.03] opacity-95 scale-100"
              referrerPolicy="no-referrer"
            />
          </motion.div>


          {/* Smooth overlay shading mapping window shadow feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.02] via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
