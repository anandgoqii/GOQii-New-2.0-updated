import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { 
  Target, 
  ArrowRight, 
  User, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Watch,
  FlaskConical,
  Clipboard,
  Brain,
  Check,
  BarChart3
} from "lucide-react";

export default function AliveOS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<"detection" | "prediction" | "guidance" | null>(null);
  const graphicContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = graphicContainerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setScale(Math.min(1, width / 480));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const coreGlowScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.08, 0.98]);

  return (
    <div
      id="section-aliveos"
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-[#FAFBFB] py-16 sm:py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      {/* Background Micro Decorative Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

      {/* Main Curved Box Section Container */}
      <div className="relative w-full max-w-6xl mx-auto bg-white border border-[#E8EDF2] rounded-[36px] md:rounded-[48px] p-6 sm:p-10 md:p-16 shadow-[0_32px_80px_rgba(15,23,42,0.02)] overflow-hidden z-10">
        
        {/* Soft internal gradient ambient highlights */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#2BC48A]/[0.02] rounded-full blur-[100px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.01] rounded-full blur-[90px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

        {/* ================= 1 & 2 & 3. SECTION HEADER ROW (Title & Intro aligned excellently) ================= */}
        <div className="border-b border-[#E8EDF2]/70 pb-8 relative z-10 w-full">
          {/* Tag / Label */}
          <div className="flex items-center gap-4 text-xs mb-4 font-sans">
            <span className="font-bold text-[#2BC48A] text-sm tracking-wide">05</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-bold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              ALIVE O.S.
            </span>
          </div>

          <div className="max-w-4xl font-sans">
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-4">
              THE INTELLIGENCE <span className="text-[#2BC48A]">LAYER</span>
            </h2>

            {/* Intro Copy stacked directly underneath with tight, human-crafted layout */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8 mt-2">
              <p className="text-[#0F172A] font-extrabold text-[16px] sm:text-[18px] leading-snug md:w-5/12 shrink-0">
                The continuous intelligence system behind every health decision.
              </p>
              <p className="text-[#475467] text-[14px] sm:text-[15px] leading-[1.6] md:w-7/12">
                ALIVE O.S. is the central engine powering the entire GOQii ecosystem. By fusing biometrics, medical diagnostics, lifestyle telemetry, and human coaching inputs, it resolves risks early and orchestrates optimal health actions.
              </p>
            </div>
          </div>
        </div>

        {/* ================= 4 & 5 & 6. INTERACTIVE PANEL GRID (Left: Architecture & behavioral card, Right: Diagram) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 items-start relative z-10">
          
          {/* LEFT COLUMN: SYSTEM ARCHITECTURE & BEHAVIORAL NEUROCODING */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left relative z-10">
            
            <div className="mb-6">
              <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-1 block">
                SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight font-sans">
                Detect → Predict → Guide
              </h3>
            </div>

            {/* Architecture Steps stack */}
            <div className="flex flex-col gap-4 mb-8 relative pl-1">
              {/* Running vertical dashed connector line exactly at the center of the left circles */}
              <div className="absolute left-[25px] top-8 bottom-8 w-[1px] border-l border-dashed border-[#2BC48A]/45 z-0 pointer-events-none" />
              
              {/* PHASE 1: DETECT */}
              <div 
                onMouseEnter={() => setHoveredNode("detection")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative z-10 group ${
                  hoveredNode === "detection"
                    ? "bg-[#F4FBF9] border-[#2BC48A]/60 shadow-[0_4px_20px_rgba(43,196,138,0.04)] scale-[1.01]"
                    : "bg-white border-[#E8EDF2] hover:border-[#2BC48A]/30 hover:bg-[#FAFBFB]"
                }`}
              >
                <div className={`w-[48px] h-[48px] rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 z-10 ${
                  hoveredNode === "detection" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] border-[#2BC48A]/30 scale-105" 
                    : "bg-white text-slate-500 border-[#E8EDF2] group-hover:scale-105"
                }`}>
                  <Target className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">01</span>
                    <h4 className="text-[13px] font-black text-[#0F172A] font-sans uppercase tracking-wider">DETECT</h4>
                  </div>
                  <p className="text-[11.5px] text-[#475467] leading-normal mt-1 font-sans">
                    Aggregates continuous biomarker baseline trends to recognize early physiological changes.
                  </p>
                </div>
              </div>

              {/* PHASE 2: PREDICT */}
              <div 
                onMouseEnter={() => setHoveredNode("prediction")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative z-10 group ${
                  hoveredNode === "prediction"
                    ? "bg-[#F4FBF9] border-[#2BC48A]/60 shadow-[0_4px_20px_rgba(43,196,138,0.04)] scale-[1.01]"
                    : "bg-white border-[#E8EDF2] hover:border-[#2BC48A]/30 hover:bg-[#FAFBFB]"
                }`}
              >
                <div className={`w-[48px] h-[48px] rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 z-10 ${
                  hoveredNode === "prediction" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] border-[#2BC48A]/30 scale-105" 
                    : "bg-white text-slate-500 border-[#E8EDF2] group-hover:scale-105"
                }`}>
                  <TrendingUp className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">02</span>
                    <h4 className="text-[13px] font-black text-[#0F172A] font-sans uppercase tracking-wider">PREDICT</h4>
                  </div>
                  <p className="text-[11.5px] text-[#475467] leading-normal mt-1 font-sans">
                    Transforms multi-parametric data into long-term risk scores and health trajectory forecasts.
                  </p>
                </div>
              </div>

              {/* PHASE 3: GUIDE */}
              <div 
                onMouseEnter={() => setHoveredNode("guidance")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative z-10 group ${
                  hoveredNode === "guidance"
                    ? "bg-[#F4FBF9] border-[#2BC48A]/60 shadow-[0_4px_20px_rgba(43,196,138,0.04)] scale-[1.01]"
                    : "bg-white border-[#E8EDF2] hover:border-[#2BC48A]/30 hover:bg-[#FAFBFB]"
                }`}
              >
                <div className={`w-[48px] h-[48px] rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 z-10 ${
                  hoveredNode === "guidance" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] border-[#2BC48A]/30 scale-105" 
                    : "bg-white text-slate-500 border-[#E8EDF2] group-hover:scale-105"
                }`}>
                  <User className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">03</span>
                    <h4 className="text-[13px] font-black text-[#0F172A] font-sans uppercase tracking-wider">GUIDE</h4>
                  </div>
                  <p className="text-[11.5px] text-[#475467] leading-normal mt-1 font-sans">
                    Generates personalized micro-actions and delivers real-time coaching support.
                  </p>
                </div>
              </div>

            </div>

            {/* BEHAVIORAL NEUROCODING CALLOUT BOX */}
            <div className="rounded-2xl bg-gradient-to-br from-[#F4FBF7] via-[#E8F7F0] to-[#DCF7EB] p-5 sm:p-6 text-slate-800 border border-[#2BC48A]/30 shadow-[0_20px_40px_rgba(43,196,138,0.06)] relative overflow-hidden font-sans">
              
              {/* Neural wire glow effect */}
              <div className="absolute right-0 bottom-0 pointer-events-none translate-x-3 translate-y-3 z-0">
                <svg viewBox="0 0 200 180" className="w-[180px] h-[160px] text-[#2BC48A] opacity-[0.14]" fill="none" stroke="currentColor">
                  <path d="M100,20 C60,20 30,50 30,90 C30,120 50,140 70,150 C75,152 80,155 85,160 C90,165 95,170 100,170 C105,170 110,165 115,160 C120,155 125,152 130,150 C150,140 170,120 170,90 C170,50 140,20 100,20 Z" strokeWidth="1" strokeDasharray="3 3" />
                  <path d="M100,30 C80,45 60,60 60,90 C60,110 75,130 100,140 C125,130 140,110 140,90 C140,60 120,45 100,30 Z" strokeWidth="1" />
                  <circle cx="100" cy="30" r="3.5" fill="#2BC48A" />
                  <circle cx="60" cy="90" r="3" fill="#2BC48A" />
                  <circle cx="140" cy="90" r="3" fill="#2BC48A" />
                  <circle cx="100" cy="140" r="4" fill="#2BC48A" />
                  <circle cx="115" cy="65" r="2" fill="#2BC48A" />
                  <circle cx="85" cy="65" r="2" fill="#2BC48A" />
                </svg>
              </div>

              <div className="flex flex-col gap-1.5 mb-4 relative z-10">
                <span className="self-start inline-flex items-center justify-center py-0.5 px-2 rounded bg-[#E5F7F0] text-[#047857] text-[8px] font-black tracking-wider uppercase font-mono leading-none">
                  PROPRIETARY ENGINE
                </span>
                <h4 className="text-[17px] font-black text-slate-900 tracking-wide uppercase font-sans mt-1">
                  BEHAVIORAL NEUROCODING
                </h4>
                <div className="text-xs font-semibold text-[#047857] font-sans leading-none -mt-0.5">
                  The Human Action Layer
                </div>
              </div>

              <div className="space-y-4 relative z-10 mb-4 font-semibold">
                <p className="text-[13px] text-slate-800 font-extrabold font-sans leading-relaxed">
                  GOQii's proprietary behavior engine transforms health signals into sustainable lifestyle change.
                </p>
                
                <div className="flex flex-col gap-2 pl-3 border-l-2 border-[#2BC48A]/60 text-xs font-black text-[#047857] tracking-wide font-sans">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] shrink-0" />
                    Not just tracking.
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] shrink-0" />
                    Not just coaching.
                  </div>
                </div>

                <p className="text-[12px] text-slate-500 leading-relaxed font-semibold font-sans">
                  A system designed to change behavior at scale.
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: INTERACTIVE FLOW DIAGRAM (MATCHING THE ATTACHED DESIGN SPEC) */}
          <div className="lg:col-span-7 flex justify-center w-full h-full relative z-10">
            <div className="w-full max-w-[570px] bg-white border border-[#E8EDF2] rounded-[32px] p-5 sm:p-7 md:p-8 flex flex-col items-center relative shadow-[0_24px_56px_rgba(15,23,42,0.015)] overflow-hidden text-left font-sans">
              
              {/* Soft grid/glow detail */}
              <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#2BC48A]/[0.02] rounded-full blur-[80px] pointer-events-none z-0" />

              {/* DATA INPUTS ROW */}
              <div className="w-full relative z-10 flex flex-col items-center">
                <span className="text-[9px] font-mono font-black tracking-[0.25em] text-[#2BC48A] uppercase text-center block mb-2">
                  DATA INPUTS
                </span>
                
                {/* Inputs container box */}
                <div className="grid grid-cols-4 bg-white border border-[#E8EDF2] rounded-2xl py-3.5 w-full divide-x divide-[#E8EDF2]/75 shadow-sm">
                  
                  {/* Wearables */}
                  <div className="flex flex-col items-center text-center px-1">
                    <div className="w-9 h-9 rounded-full bg-[#F8FAFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] shrink-0 mb-1.5 shadow-sm">
                      <Watch className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-black text-[#0F172A] leading-tight">Wearables</span>
                    <span className="text-[8.5px] text-[#667085] leading-tight mt-0.5">Biometrics</span>
                  </div>

                  {/* Labs & Diagnostics */}
                  <div className="flex flex-col items-center text-center px-1">
                    <div className="w-9 h-9 rounded-full bg-[#F8FAFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] shrink-0 mb-1.5 shadow-sm">
                      <FlaskConical className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-black text-[#0F172A] leading-tight">Labs &</span>
                    <span className="text-[8.5px] text-[#667085] leading-tight mt-0.5">Diagnostics</span>
                  </div>

                  {/* Lifestyle */}
                  <div className="flex flex-col items-center text-center px-1">
                    <div className="w-9 h-9 rounded-full bg-[#F8FAFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] shrink-0 mb-1.5 shadow-sm">
                      <Clipboard className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-black text-[#0F172A] leading-tight">Lifestyle</span>
                    <span className="text-[8.5px] text-[#667085] leading-tight mt-0.5">Telemetry</span>
                  </div>

                  {/* Coaching */}
                  <div className="flex flex-col items-center text-center px-1">
                    <div className="w-9 h-9 rounded-full bg-[#F8FAFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] shrink-0 mb-1.5 shadow-sm">
                      <User className="w-4.5 h-4.5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-black text-[#0F172A] leading-tight">Coaching</span>
                    <span className="text-[8.5px] text-[#667085] leading-tight mt-0.5">Inputs</span>
                  </div>

                </div>
              </div>

              {/* Connector 1: Inputs to Engine */}
              <div className="flex flex-col items-center w-full relative h-[32px] shrink-0 pointer-events-none z-10">
                <div className="absolute top-0 left-[12.5%] right-[12.5%] h-[1.5px] bg-[#2BC48A]/25" />
                <div className="absolute top-0 left-1/2 w-[1.5px] h-full bg-[#2BC48A]/45 -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] text-[#2BC48A] text-[7.5px] leading-none">▼</div>
              </div>

              {/* ALIVE O.S. INTELLIGENCE ENGINE BLOCK */}
              <div className="w-full bg-gradient-to-r from-[#F0FDF4] to-[#ECFDF5] text-slate-900 rounded-2xl p-4 border border-emerald-100 shadow-[0_8px_24px_rgba(43,196,138,0.06)] flex items-center gap-4 relative overflow-hidden z-20 group">
                {/* Grid Overlay Detail */}
                <div className="absolute inset-0 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.22] pointer-events-none" />
                
                {/* Radar / Heartbeat wave left */}
                <div className="w-10 h-10 rounded-full bg-[#E5F7F0] border border-[#2BC48A]/35 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(43,196,138,0.1)]">
                  <svg className="w-6 h-6 text-[#2BC48A]" viewBox="0 0 40 30" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M 0 15 L 12 15 L 16 5 L 20 25 L 24 11 L 26 18 L 28 15 L 40 15" />
                  </svg>
                </div>

                <div className="flex-1 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-black text-slate-900 tracking-widest font-sans">ALIVE O.S.</span>
                    <span className="text-[10px] bg-[#E5F7F0] text-[#047857] py-0.5 px-2 rounded-full font-black tracking-wider uppercase font-mono border border-[#2BC48A]/10 scale-95 origin-left">
                      INTELLIGENCE ENGINE
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-600 font-semibold leading-normal mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <span>AI models</span><span className="text-emerald-300">•</span>
                    <span>Risk algorithms</span><span className="text-emerald-300">•</span>
                    <span>Clinical rules</span><span className="text-emerald-300">•</span>
                    <span className="text-[#047857] font-extrabold">Longitudinal health memory</span>
                  </div>
                </div>
              </div>

              {/* Connector 2: Engine to 3 steps */}
              <div className="flex flex-col items-center w-full relative h-[32px] shrink-0 pointer-events-none z-10">
                <div className="absolute top-0 left-1/2 w-[1.5px] h-3.5 bg-[#2BC48A]/45 -translate-x-1/2" />
                <div className="absolute top-3.5 left-[16.6%] right-[16.6%] h-[1.5px] bg-[#2BC48A]/25" />
                <div className="absolute top-3.5 left-[16.6%] w-[1.5px] h-full bg-[#2BC48A]/45" />
                <div className="absolute top-3.5 left-1/2 w-[1.5px] h-full bg-[#2BC48A]/45 -translate-x-1/2" />
                <div className="absolute top-3.5 right-[16.6%] w-[1.5px] h-full bg-[#2BC48A]/45" />
                <div className="absolute bottom-0 left-[16.6%] -translate-x-1/2 translate-y-[2px] text-[#2BC48A] text-[7.5px] leading-none">▼</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] text-[#2BC48A] text-[7.5px] leading-none">▼</div>
                <div className="absolute bottom-0 right-[16.6%] translate-x-1/2 translate-y-[2px] text-[#2BC48A] text-[7.5px] leading-none">▼</div>
              </div>

              {/* 3 STEPS GRID (DETECT, PREDICT, GUIDE) */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full relative z-20">
                
                {/* Col 01 DETECT */}
                <div 
                  className={`bg-white border rounded-xl p-2.5 sm:p-3 flex flex-col items-center text-center transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.015)] ${
                    hoveredNode === "detection"
                      ? "border-[#2BC48A] bg-[#F4FBF9] scale-[1.025] shadow-[0_8px_20px_rgba(43,196,138,0.05)]"
                      : "border-[#E8EDF2]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mb-1 transition-colors ${
                    hoveredNode === "detection"
                      ? "bg-[#2BC48A]/10 border-transparent text-[#2BC48A]"
                      : "bg-[#F8FAFB] border-[#E8EDF2] text-slate-500"
                  }`}>
                    <Target className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[7.5px] font-mono font-black text-[#2BC48A] leading-none tracking-widest uppercase">01 DETECT</span>
                  <span className="text-[10px] font-black text-[#0F172A] leading-tight mt-0.5 uppercase tracking-wide">DETECT</span>
                  <span className="text-[8.5px] text-[#667085] leading-normal mt-1 block">
                    Real-time signal detection & biomarker tracking
                  </span>
                </div>

                {/* Col 02 PREDICT */}
                <div 
                  className={`bg-white border rounded-xl p-2.5 sm:p-3 flex flex-col items-center text-center transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.015)] ${
                    hoveredNode === "prediction"
                      ? "border-[#2BC48A] bg-[#F4FBF9] scale-[1.025] shadow-[0_8px_20px_rgba(43,196,138,0.05)]"
                      : "border-[#E8EDF2]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mb-1 transition-colors ${
                    hoveredNode === "prediction"
                      ? "bg-[#2BC48A]/10 border-transparent text-[#2BC48A]"
                      : "bg-[#F8FAFB] border-[#E8EDF2] text-slate-500"
                  }`}>
                    <TrendingUp className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[7.5px] font-mono font-black text-[#2BC48A] leading-none tracking-widest uppercase">02 PREDICT</span>
                  <span className="text-[10px] font-black text-[#0F172A] leading-tight mt-0.5 uppercase tracking-wide">PREDICT</span>
                  <span className="text-[8.5px] text-[#667085] leading-normal mt-1 block">
                    Risk forecasting & health trajectory modelling
                  </span>
                </div>

                {/* Col 03 GUIDE */}
                <div 
                  className={`bg-white border rounded-xl p-2.5 sm:p-3 flex flex-col items-center text-center transition-all duration-300 shadow-[0_2px_8px_rgba(15,23,42,0.015)] ${
                    hoveredNode === "guidance"
                      ? "border-[#2BC48A] bg-[#F4FBF9] scale-[1.025] shadow-[0_8px_20px_rgba(43,196,138,0.05)]"
                      : "border-[#E8EDF2]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mb-1 transition-colors ${
                    hoveredNode === "guidance"
                      ? "bg-[#2BC48A]/10 border-transparent text-[#2BC48A]"
                      : "bg-[#F8FAFB] border-[#E8EDF2] text-slate-500"
                  }`}>
                    <User className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-[7.5px] font-mono font-black text-[#2BC48A] leading-none tracking-widest uppercase">03 GUIDE</span>
                  <span className="text-[10px] font-black text-[#0F172A] leading-tight mt-0.5 uppercase tracking-wide">GUIDE</span>
                  <span className="text-[8.5px] text-[#667085] leading-normal mt-1 block">
                    Personalized recommendations & coaching support
                  </span>
                </div>

              </div>

              {/* Connector 3: Steps to Behavioral Neurocoding */}
              <div className="flex flex-col items-center w-full relative h-[32px] shrink-0 pointer-events-none z-10">
                <div className="absolute top-0 left-[16.6%] w-[1.5px] h-3.5 bg-[#E8EDF2]/90" />
                <div className="absolute top-0 left-1/2 w-[1.5px] h-3.5 bg-[#E8EDF2]/90 -translate-x-1/2" />
                <div className="absolute top-0 right-[16.6%] w-[1.5px] h-3.5 bg-[#E8EDF2]/90" />
                <div className="absolute top-3.5 left-[16.6%] right-[16.6%] h-[1.5px] bg-[#E8EDF2]/75" />
                <div className="absolute top-3.5 left-1/2 w-[1.5px] h-full bg-[#E8EDF2]/95 -translate-x-1/2" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] text-[#CDDBE5] text-[7.5px] leading-none">▼</div>
              </div>

              {/* BEHAVIORAL NEUROCODING BLOCK (GREEN PILL & PILLARS) */}
              <div className="w-full bg-gradient-to-br from-[#E6FDF4] via-[#F0FDF4] to-[#DCF7EB] text-slate-900 rounded-2xl p-4 border border-[#2BC48A]/25 shadow-[0_8px_24px_rgba(43,196,138,0.06)] relative overflow-hidden z-20 flex flex-col">
                <div className="absolute right-0 bottom-0 opacity-[0.05] pointer-events-none">
                  <Brain className="w-24 h-24 text-[#2BC48A]" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2BC48A]/10 border border-[#2BC48A]/25 flex items-center justify-center shrink-0">
                    <Brain className="w-4.5 h-4.5 text-[#2BC48A]" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-black tracking-wide uppercase text-slate-900 font-sans">
                      BEHAVIORAL NEUROCODING
                    </h4>
                    <p className="text-[10px] text-[#047857] leading-tight font-bold mt-0.5">
                      Human motivation engine that turns insights into consistent daily actions.
                    </p>
                  </div>
                </div>

                {/* Grid row splitting the 4 action columns */}
                <div className="grid grid-cols-4 pt-3 mt-3 border-t border-[#2BC48A]/20 text-center gap-1.5">
                  {/* Coach */}
                  <div className="flex flex-col items-center">
                    <div className="w-5.5 h-5.5 rounded bg-[#2BC48A]/15 flex items-center justify-center text-[#047857] shrink-0 mb-1">
                      <User className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 leading-tight">Coach</span>
                    <span className="text-[7.5px] text-slate-650 font-semibold leading-snug mt-0.5 block scale-90 sm:scale-100">Human accountability</span>
                  </div>

                  {/* Rewards */}
                  <div className="flex flex-col items-center">
                    <div className="w-5.5 h-5.5 rounded bg-[#2BC48A]/15 flex items-center justify-center text-[#047857] shrink-0 mb-1">
                      <Zap className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 leading-tight">Rewards</span>
                    <span className="text-[7.5px] text-slate-650 font-semibold leading-snug mt-0.5 block scale-90 sm:scale-100">Uplift positive loops</span>
                  </div>

                  {/* Accountability */}
                  <div className="flex flex-col items-center">
                    <div className="w-5.5 h-5.5 rounded bg-[#2BC48A]/15 flex items-center justify-center text-[#047857] shrink-0 mb-1">
                      <ShieldCheck className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 leading-tight">Acc.</span>
                    <span className="text-[7.5px] text-slate-650 font-semibold leading-snug mt-0.5 block scale-90 sm:scale-100">Biometric feedback</span>
                  </div>

                  {/* Habits */}
                  <div className="flex flex-col items-center">
                    <div className="w-5.5 h-5.5 rounded bg-[#2BC48A]/15 flex items-center justify-center text-[#047857] shrink-0 mb-1">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-[10px] font-black text-slate-900 leading-tight">Habits</span>
                    <span className="text-[7.5px] text-slate-650 font-semibold leading-snug mt-0.5 block scale-90 sm:scale-100">Behavioral routines</span>
                  </div>
                </div>

              </div>

              {/* Connector 4: Neurocoding to Outcomes */}
              <div className="flex flex-col items-center justify-center h-6 shrink-0 relative my-0.5 pointer-events-none z-10">
                <div className="w-[1.5px] h-full bg-[#2BC48A]/45" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px] text-[#2BC48A] text-[7.5px] leading-none">▼</div>
              </div>

              {/* OUTCOMES STRIP (STAGE 04 • OUTCOME) */}
              <div className="w-full bg-[#F8FAFB] hover:bg-[#F4FBF9] transition-all duration-300 border border-[#E8EDF2] rounded-xl p-3.5 flex items-center gap-3.5 relative shadow-sm z-20 group">
                <div className="w-10 h-10 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center shrink-0 border border-[#2BC48A]/10 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <BarChart3 className="w-5 h-5 text-[#2BC48A]" strokeWidth={1.8} />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-[8px] font-mono font-black text-[#2BC48A] tracking-wider uppercase">STAGE 04 • OUTCOME</span>
                  <h4 className="text-[13px] font-black text-[#0F172A] leading-tight mt-0.5">Better Outcomes</h4>
                  <p className="text-[11px] text-[#475467] leading-tight mt-1 font-medium">
                    Sustained prevention. Better health. Lower risk. Longer, healthier lives.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
