import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SmartText from "./SmartText";

export default function AliveOS() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook scroll progress for subtle core expansion effects on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const coreGlowScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.9, 1.15, 0.95]);
  const coreOrbitSpeed = useTransform(scrollYProgress, [0, 1], [0, 180]); // Rotate 180 deg across scroll range

  return (
    <div
      id="section-aliveos"
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
          Section 05 / Alive O.S.
        </motion.div>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
        {/* Left column: Text */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] leading-[0.95] mb-8"
          >
            Intelligence behind <br />
            <span className="text-emerald-500">every decision.</span>
          </motion.h2>

          <span className="text-xs font-bold tracking-widest text-[#667085] uppercase mb-4 block">CORE ARCHITECTURE</span>
          
          <div className="flex items-center space-x-4 mb-8">
            <span className="text-sm font-mono tracking-wider font-semibold text-[#0F172A] bg-white border border-[#E8EDF2] px-3.5 py-1.5 rounded-full">Detect</span>
            <span className="text-xs text-[#667085]">→</span>
            <span className="text-sm font-mono tracking-wider font-semibold text-[#0F172A] bg-white border border-[#E8EDF2] px-3.5 py-1.5 rounded-full">Predict</span>
            <span className="text-xs text-[#667085]">→</span>
            <span className="text-sm font-mono tracking-wider font-semibold text-[#0F172A] bg-white border border-[#E8EDF2] px-3.5 py-1.5 rounded-full">Guide</span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
            className="text-lg md:text-xl font-normal text-[#667085] leading-relaxed max-w-lg"
          >
            <SmartText>Alive O.S. acts as a quiet, ambient clinical intelligence companion. It continuously cross-analyzes behavioral vectors and biomarker patterns to pre-empt risk and steer longevity.</SmartText>
          </motion.p>
        </div>

        {/* Right column: Concentric Abstract Intelligence Core (Human + AI) */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] md:min-h-[550px] w-full rounded-3xl bg-white border border-[#E8EDF2] p-6 overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8EDF2_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />

          {/* Deep center intelligence core with multiple glowing layers */}
          <div className="relative w-80 h-80 flex items-center justify-center z-10">
            
            {/* Ambient Background Glow Expansion (Scroll-driven scaling) */}
            <motion.div
              style={{ scale: coreGlowScale }}
              className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-[#2BC48A]/10 to-emerald-400/5 blur-[50px] pointer-events-none"
            />

            {/* Core Orbit Rotating Rings (Scroll-driven rotation) */}
            <motion.div
              style={{ rotate: coreOrbitSpeed }}
              className="absolute w-64 h-64 rounded-full border border-[#2BC48A]/10 border-t-[#2BC48A]/60 flex items-center justify-center pointer-events-none"
            />
            <motion.div
              style={{ rotate: useTransform(scrollYProgress, [0, 1], [360, 0]) }}
              className="absolute w-52 h-52 rounded-full border border-slate-200 border-b-slate-500/40 border-r-slate-500/10 pointer-events-none"
            />

            {/* Center Heartbeat/Core */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-36 h-36 rounded-full bg-slate-900 border border-emerald-500/30 flex flex-col items-center justify-center shadow-2xl"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#1E293B] to-slate-800 shadow-inner flex items-center justify-center border border-slate-700">
                {/* Central active neural glow */}
                <span className="w-5 h-5 rounded-full bg-[#2BC48A] shadow-[0_0_20px_#2BC48A] animate-pulse" />
              </div>
              
              {/* Spinning core perimeter dots */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-[#2BC48A]/20 animate-spin" style={{ animationDuration: "16s" }} />
            </motion.div>

            {/* FLOATING LABELS with micro motion floats */}
            
            {/* Label 1: Detection */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-[15px] -left-[10px] bg-slate-100/90 backdrop-blur-xs border border-slate-200 px-4 py-2 rounded-full flex items-center space-x-2 shadow-xs"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-ping" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0F172A]">Detection</span>
            </motion.div>

            {/* Label 2: Prediction */}
            <motion.div
              animate={{
                y: [0, 8, 0],
                x: [0, -6, 0]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-[80px] -right-[25px] bg-slate-100/90 backdrop-blur-xs border border-slate-200 px-4 py-2 rounded-full flex items-center space-x-2 shadow-xs"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0F172A]">Prediction</span>
            </motion.div>

            {/* Label 3: Guidance */}
            <motion.div
              animate={{
                y: [0, -7, 0],
                x: [0, -5, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-[15px] left-[50px] bg-slate-100/90 backdrop-blur-xs border border-slate-200 px-4 py-2 rounded-full flex items-center space-x-2 shadow-xs"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#2BC48A]" />
              <span className="text-[10px] font-mono tracking-widest uppercase font-bold text-[#0F172A]">Guidance</span>
            </motion.div>

            {/* Pointer fiber links overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 320">
              {/* Detection Pointer */}
              <line x1="50" y1="35" x2="110" y2="110" stroke="#667085" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
              {/* Prediction Pointer */}
              <line x1="280" y1="120" x2="200" y2="140" stroke="#667085" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
              {/* Guidance Pointer */}
              <line x1="110" y1="280" x2="140" y2="200" stroke="#667085" strokeWidth="0.5" strokeDasharray="2 3" opacity="0.4" />
            </svg>
          </div>

          <div className="absolute bottom-4 font-mono text-[9px] text-[#667085] tracking-widest uppercase pointer-events-none">
            HYBRID AI CORE MODULE
          </div>
        </div>
      </div>
    </div>
  );
}
