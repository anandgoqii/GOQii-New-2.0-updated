import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Globe, Play, X } from "lucide-react";

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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">08</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              SANJEEVINI
            </span>
          </div>

          {/* 2. Main High-contrast Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-[1.08] font-sans">
            Extending Healthy Life.<br />
            <span className="text-[#2BC48A]">The Next Frontier Of Preventive Healthcare.</span>
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
          <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-4 mb-6" />

          {/* 5. Description Text with custom serif italic ending */}
          <p className="text-[#475467] font-sans text-[15px] sm:text-[16px] leading-[1.75] max-w-md mb-6">
            A global initiative combining longevity science, diagnostics, coaching, AI, and continuous health intelligence to help people live healthier for longer.
          </p>

          {/* Supporting checklist points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E5F7F0] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#2BC48A] stroke-[4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-[#0F172A] leading-tight font-sans">
                  $101M XPRIZE Semifinalist
                </span>
                <span className="text-[10px] text-[#667085] font-medium leading-normal mt-0.5">
                  Competing globally to validate therapeutic solutions that restore muscle, cognitive, and immune function by 10+ years.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E5F7F0] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#2BC48A] stroke-[4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-[#0F172A] leading-tight font-sans">
                  Longevity Biomarker Tracking
                </span>
                <span className="text-[10px] text-[#667085] font-medium leading-normal mt-0.5">
                  Continuous assessment of biological age, epigenetic scores, telomere health, and metabolic trajectories.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E5F7F0] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#2BC48A] stroke-[4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-[#0F172A] leading-tight font-sans">
                  Clinical Research Consortium
                </span>
                <span className="text-[10px] text-[#667085] font-medium leading-normal mt-0.5">
                  Validating life-extension interventions in collaboration with world-leading medical centers and longevity labs.
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded-full bg-[#E5F7F0] flex items-center justify-center shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-[#2BC48A] stroke-[4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs font-extrabold text-[#0F172A] leading-tight font-sans">
                  Behavioral Neurocoding
                </span>
                <span className="text-[10px] text-[#667085] font-medium leading-normal mt-0.5">
                   Proprietary habit framing layer converting scientific protocols into autonomous biological compliance.
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="https://goqii.com/sanjeevini"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0F172A] text-white text-sm font-semibold tracking-wider uppercase rounded-full hover:bg-[#2BC48A] transition-colors shadow-sm cursor-pointer"
            >
              See Platform <span className="text-base">→</span>
            </a>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 text-sm font-semibold tracking-wide text-[#475467] hover:text-[#2BC48A] transition-colors px-6 py-3.5 rounded-full border border-[#E8EDF2] bg-white cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" strokeWidth={2.5} />
              Watch the film
            </button>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: CONCENTRIC DNA ORB CARD ================= */}
        <div className="lg:col-span-7 flex justify-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[540px] aspect-[4/3.2] bg-white border border-[#E8EDF2] rounded-[24px] sm:rounded-[32px] overflow-hidden p-2 shadow-[0_16px_40px_rgba(15,23,42,0.02)] flex items-center justify-center group"
          >
            <div className="relative w-full h-full rounded-[18px] sm:rounded-[24px] overflow-hidden bg-[#FAFBFB] flex items-center justify-center p-4">
              <img
                src="https://appcdn.goqii.com/storeimg/20784_1780386295.png"
                alt="Sanjeevini Longevity Intelligence Framework"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.025]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* ================= VISUAL TIMELINE ================= */}
      <div className="mt-20 w-full max-w-6xl mx-auto bg-white rounded-[24px] sm:rounded-[32px] border border-[#E8EDF2] p-5 sm:p-10 relative overflow-hidden z-10 shadow-sm">
        <div className="text-left sm:text-center mb-10">
          <span className="text-[11px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-2 block">
            OUR JOURNEY
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
            Sanjeevini Development Milestones
          </h3>
        </div>

        <div className="relative">
          {/* Connection line on desktop */}
          <div className="hidden md:block absolute top-[21px] left-8 right-8 h-[2px] bg-[#E8EDF2] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { year: "2023", title: "Finalist", desc: "Selected as an official XPRIZE Healthspan Semifinalist" },
              { year: "2024", title: "Clinical Validation", desc: "Rigorous clinical trials in biological age diagnostics" },
              { year: "2025", title: "AI Enhancement", desc: "Integration of deep predictive longevity neural networks" },
              { year: "2026", title: "Global Scale", desc: "Launch of international preventative age-reversal cohorts" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-start text-left group">
                {/* Circle Indicator */}
                <div className="w-11 h-11 rounded-full bg-white border-2 border-[#2BC48A] flex items-center justify-center font-black text-xs text-[#2BC48A] shadow-md mb-4 group-hover:bg-[#2BC48A] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                  {item.year}
                </div>
                
                {/* Content */}
                <div className="text-sm font-black text-[#0F172A] tracking-tight flex items-center gap-1.5 mb-1.5 justify-start uppercase">
                  <span className="text-[#2BC48A] font-extrabold">{item.year}</span>
                  <span className="text-slate-300 font-normal">→</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-[#667085] leading-relaxed font-semibold max-w-[220px] md:max-w-none">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/85 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-[#2BC48A] text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/hQbBmRuAbOQ?autoplay=1&rel=0" 
              title="Sanjeevini Longevity and Science Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            />
          </motion.div>
        </div>
      )}

    </div>
  );
}
