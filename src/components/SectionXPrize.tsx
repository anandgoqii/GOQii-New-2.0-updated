import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Globe, Play } from "lucide-react";

// Import the generated pristine DNA structure asset
import dnaStructureImage from "../assets/images/goqii_dna_structure_1780319199140.png";

// Sparkling starry particles inside the glass sphere to create spatial three-dimensional depth
const whiteSparkles = [
  { id: 1, x: -75, y: -65, size: 3.5, delay: 0.1, duration: 4.5 },
  { id: 2, x: 65, y: -75, size: 4, delay: 1.2, duration: 5.2 },
  { id: 3, x: -90, y: 25, size: 2.2, delay: 0.5, duration: 3.8 },
  { id: 4, x: 85, y: 65, size: 4.5, delay: 2.3, duration: 6.0 },
  { id: 5, x: -45, y: 85, size: 3.2, delay: 1.1, duration: 4.8 },
  { id: 6, x: 55, y: -80, size: 4, delay: 1.7, duration: 5.5 },
  { id: 7, x: -25, y: -45, size: 2.5, delay: 0.3, duration: 3.9 },
  { id: 8, x: 75, y: -15, size: 3.5, delay: 1.6, duration: 4.9 },
  { id: 9, x: -65, y: -20, size: 3, delay: 0.8, duration: 4.3 },
  { id: 10, x: 45, y: 50, size: 4.2, delay: 2.5, duration: 5.1 },
  { id: 11, x: -35, y: -85, size: 3, delay: 2.0, duration: 4.6 },
  { id: 12, x: 80, y: -50, size: 2, delay: 0.5, duration: 3.7 },
  { id: 13, x: -85, y: -40, size: 4, delay: 1.3, duration: 5.3 },
  { id: 14, x: 30, y: 85, size: 3.5, delay: 0.9, duration: 4.7 },
  { id: 15, x: -70, y: 70, size: 2.5, delay: 1.5, duration: 4.1 },
];

const emeraldSparkles = [
  { id: 21, x: -40, y: -30, size: 3.5, delay: 0.3, duration: 4.4 },
  { id: 22, x: 60, y: 20, size: 2.5, delay: 1.0, duration: 3.7 },
  { id: 23, x: -50, y: 50, size: 3, delay: 2.2, duration: 4.9 },
  { id: 24, x: 30, y: -60, size: 4.2, delay: 0.7, duration: 5.3 },
];

export default function SectionXPrize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Translate scroll sequence to standard subtle parallax for core background glow
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const coreGlowScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.08, 0.98]);

  return (
    <div
      id="section-xprize"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-14 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* ================= LEFT COLUMN: TEXT LAYOUT & STEP PROCESS FLOW ================= */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* 1. Subtitle Alignment */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">06</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              XPRIZE SANJEEVINI
            </span>
          </div>

          {/* 2. Main High-contrast Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans">
            Extending <br />
            healthy life. <br />
            <span className="text-[#2BC48A]">For everyone.</span>
          </h2>

          {/* XPrize Sanjeevini Logo */}
          <div className="mt-8 mb-4 flex items-center">
            <img
              src="https://appcdn.goqii.com/storeimg/96760_1780031032.png"
              alt="XPrize Sanjeevini Logo"
              className="h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* 3. Small green thick divider block */}
          <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-4 mb-10" />

          {/* 4. Global Longevity Challenge Section with Globe Icon */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-10 h-10 rounded-full border border-[#E8EDF2] bg-white flex items-center justify-center text-[#2BC48A] shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
              <Globe className="w-5 h-5" strokeWidth={2} />
            </div>
            <span className="text-[12px] font-sans font-bold tracking-[0.16em] text-[#2BC48A] uppercase">
              GLOBAL LONGEVITY CHALLENGE
            </span>
          </div>

          {/* 5. Description Text with custom serif italic ending */}
          <p className="text-[#475467] font-sans text-[15px] sm:text-[16px] leading-[1.75] max-w-md mb-10">
            A global mission to add healthy years to human life. Partnering with the world's most visionary scientists, clinicians, and technologies to <span className="italic-serif text-[#2BC48A] font-medium font-serif italic">push back the boundaries of cellular age.</span>
          </p>

          {/* 6. Capsule Pill Buttons Container */}
          <div className="flex items-center self-start">
            <div className="inline-flex items-center gap-6 bg-white border border-[#E8EDF2] px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(15,23,42,0.012)] hover:shadow-[0_12px_40px_rgba(43,196,138,0.06)] transition-all duration-300">
              <button className="flex items-center gap-2.5 group/btn text-sm font-semibold tracking-wide text-[#0F172A] hover:text-[#2BC48A] transition-colors">
                <div className="w-8 h-8 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] group-hover/btn:scale-110 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5 animate-pulse" strokeWidth={2.5} />
                </div>
                Watch the film
              </button>
              <div className="w-[1px] h-4 bg-[#E2E8F0]" />
              <a
                href="https://goqii.com/sanjeevini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold tracking-wide text-[#475467] hover:text-[#2BC48A] transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: CONCENTRIC DNA ORB CARD ================= */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[540px] aspect-[4/3.2] bg-white border border-[#E8EDF2] rounded-[32px] overflow-hidden p-2 shadow-[0_16px_40px_rgba(15,23,42,0.02)] flex items-center justify-center group"
          >
            <div className="relative w-full h-full rounded-[24px] overflow-hidden bg-[#FAFBFB] flex items-center justify-center p-4">
              <img
                src="https://appcdn.goqii.com/storeimg/20784_1780386295.png"
                alt="Sanjeevini Longevity Infographic"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
