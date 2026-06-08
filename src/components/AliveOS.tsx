import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { 
  Target, 
  ArrowRight, 
  User, 
  TrendingUp, 
  BadgeCheck, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Lock 
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[#E8EDF2]/70 relative z-10">
          
          {/* Left Block: Tag & Headline */}
          <div className="lg:col-span-7">
            {/* Tag / Label */}
            <div className="flex items-center gap-4 text-xs mb-6 font-sans">
              <span className="font-bold text-[#2BC48A] text-sm tracking-wide">05</span>
              <span className="text-[#E2E8F0] font-light text-sm">|</span>
              <span className="font-bold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
                ALIVE O.S.
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-[1.08] font-sans">
              THE INTELLIGENCE <span className="text-[#2BC48A]">LAYER</span>
            </h2>

            {/* Accent divider line */}
            <div className="w-[72px] h-[3.5px] bg-[#2BC48A] rounded-full mt-6" />
          </div>

          {/* Right Block: Intro Copy */}
          <div className="lg:col-span-5 lg:pt-14 font-sans">
            <p className="text-[#0F172A] font-extrabold text-[16px] sm:text-[18px] leading-normal mb-3">
              The continuous intelligence system behind every health decision.
            </p>
            <p className="text-[#475467] text-[14px] sm:text-[15px] leading-[1.7]">
              ALIVE O.S. is the central engine powering the entire GOQii ecosystem. By fusing biometrics, medical diagnostics, lifestyle telemetry, and human coaching inputs, it resolves risks early and orchestrates optimal health actions.
            </p>
          </div>

        </div>

        {/* ================= 4 & 5 & 6. INTERACTIVE PANEL GRID (Left: Architecture & behavioral card, Right: Diagram) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-14 items-center relative z-10">
          
          {/* LEFT COLUMN: ARCHITECTURE MODULES & BEHAVIORAL NEUROCODING */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div className="mb-6">
              <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#667085] uppercase mb-1 block">
                SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight font-sans">
                Detect → Predict → Guide
              </h3>
              <p className="text-xs text-[#667085] mt-1 font-sans">
                Hover over each operational phase to trace the real-time biometric loops in the diagram.
              </p>
            </div>

            {/* Architecture Steps stack */}
            <div className="flex flex-col gap-4 mb-8">
              
              {/* PHASE 1: DETECT */}
              <div 
                onMouseEnter={() => setHoveredNode("detection")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative group ${
                  hoveredNode === "detection"
                    ? "bg-[#F4FBF9] border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.06)] scale-[1.01]"
                    : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#2BC48A]/40 hover:bg-white"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  hoveredNode === "detection" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] scale-105" 
                    : "bg-[#F1F5F9] text-slate-500 group-hover:scale-105"
                }`}>
                  <Target className="w-5 h-5" strokeWidth={hoveredNode === "detection" ? 2.5 : 2} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">PHASE 01</span>
                    <h4 className="text-[15px] font-black text-[#0F172A] font-sans">DETECT</h4>
                  </div>
                  <p className="text-xs text-[#475467] leading-relaxed mt-1 font-sans">
                    Continuously aggregates silent biological markers (resting HR, HRV, sleep metrics, blood diagnostics) to map your baseline and identify subtle signs of stress.
                  </p>
                </div>
                {hoveredNode === "detection" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2BC48A] hidden sm:block animate-pulse">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* PHASE 2: PREDICT */}
              <div 
                onMouseEnter={() => setHoveredNode("prediction")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative group ${
                  hoveredNode === "prediction"
                    ? "bg-[#F4FBF9] border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.06)] scale-[1.01]"
                    : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#2BC48A]/40 hover:bg-white"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  hoveredNode === "prediction" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] scale-105" 
                    : "bg-[#F1F5F9] text-slate-500 group-hover:scale-105"
                }`}>
                  <TrendingUp className="w-5 h-5" strokeWidth={hoveredNode === "prediction" ? 2.5 : 2} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">PHASE 02</span>
                    <h4 className="text-[15px] font-black text-[#0F172A] font-sans">PREDICT</h4>
                  </div>
                  <p className="text-xs text-[#475467] leading-relaxed mt-1 font-sans">
                    Translates complex multi-parametric drifts into long-term risk forecasts. Recognizes health trajectory deviations early so you can pivot before illnesses establish.
                  </p>
                </div>
                {hoveredNode === "prediction" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2BC48A] hidden sm:block animate-pulse">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* PHASE 3: GUIDE */}
              <div 
                onMouseEnter={() => setHoveredNode("guidance")}
                onMouseLeave={() => setHoveredNode(null)}
                className={`p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex gap-4 items-start relative group ${
                  hoveredNode === "guidance"
                    ? "bg-[#F4FBF9] border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.06)] scale-[1.01]"
                    : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#2BC48A]/40 hover:bg-white"
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                  hoveredNode === "guidance" 
                    ? "bg-[#2BC48A]/10 text-[#2BC48A] scale-105" 
                    : "bg-[#F1F5F9] text-slate-500 group-hover:scale-105"
                }`}>
                  <User className="w-5 h-5" strokeWidth={hoveredNode === "guidance" ? 2.5 : 2} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#2BC48A]">PHASE 03</span>
                    <h4 className="text-[15px] font-black text-[#0F172A] font-sans">GUIDE</h4>
                  </div>
                  <p className="text-xs text-[#475467] leading-relaxed mt-1 font-sans">
                    Synthesizes customized micro-actions and direct coaching routes tailored to change metrics in real-time — making preventative wellness incredibly seamless.
                  </p>
                </div>
                {hoveredNode === "guidance" && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2BC48A] hidden sm:block animate-pulse">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

            </div>

            {/* BEHAVIORAL NEUROCODING™ CALLOUT BOX */}
            <div className="rounded-2xl border border-[#2BC48A]/20 bg-[#F4FBF9] p-5 relative overflow-hidden font-sans">
              <div className="absolute top-0 right-0 p-3 opacity-10">
                <Zap className="w-12 h-12 text-[#2BC48A]" strokeWidth={2.5} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center justify-center py-1 px-2.5 rounded-full text-[9px] font-black tracking-wider bg-[#2BC48A] text-white uppercase select-none">
                  PROPRIETARY MOTOR
                </span>
                <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wide">
                  Behavioral Neurocoding™
                </h4>
              </div>

              <p className="text-xs text-[#475467] leading-relaxed mb-3">
                At the core of the guidance phase resides our proprietary Behavioral Neurocoding™ model. It bypasses clinical friction, automated loop creation, and hardcodes sustainable health habits with zero cognitive drag.
              </p>
              
              <div className="pl-3 border-l-2 border-[#2BC48A] text-[11px] leading-relaxed text-[#475467] italic font-medium">
                "Bypassing clinical friction to establish permanent, automated daily healthy patterns."
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: RE-SIZED ALIVE O.S. NETWORK DIAGRAM */}
          <div className="lg:col-span-5 flex justify-center h-full">
            <div 
              ref={graphicContainerRef}
              className="relative w-full max-w-[420px] aspect-square bg-[#FAFBFB] border border-[#E8EDF2] rounded-[36px] shadow-[0_16px_36px_rgba(15,23,42,0.01)] overflow-hidden flex flex-col items-center justify-center mx-auto"
            >
              {/* Inner Scaled Canvas wrapper */}
              <div 
                className="relative w-[480px] h-[480px] shrink-0 pointer-events-auto select-none"
                style={{ 
                  transform: `scale(${scale})`, 
                  transformOrigin: "center center"
                }}
              >
                {/* Soft grid overlay inside container */}
                <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

                {/* Highly aesthetic glowing atmosphere */}
                <motion.div
                  style={{ scale: coreGlowScale }}
                  className="absolute w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#2BC48A]/12 to-[#00ADC7]/2 blur-[50px] z-0 pointer-events-none top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                />

                {/* SVG Network Fibre and Orbit Pipes */}
                <svg 
                  className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                  viewBox="0 0 480 480"
                  fill="none"
                >
                  {/* Outer Concentric Orbit boundaries */}
                  <circle cx="240" cy="216" r="95" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.08" />
                  <circle cx="240" cy="216" r="135" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.06" />
                  <circle cx="240" cy="216" r="175" stroke="#2BC48A" strokeWidth="0.8" strokeOpacity="0.04" />

                  {/* Connecting lines from Nodes to Center Core (240, 216) */}
                  <line 
                    x1="64" y1="96" x2="240" y2="216" 
                    stroke="#2BC48A" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity={hoveredNode === "detection" ? "0.6" : "0.18"} 
                    className="transition-all duration-300"
                  />
                  <line 
                    x1="416" y1="96" x2="240" y2="216" 
                    stroke="#2BC48A" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity={hoveredNode === "prediction" ? "0.6" : "0.18"} 
                    className="transition-all duration-300"
                  />
                  <line 
                    x1="240" y1="392" x2="240" y2="216" 
                    stroke="#2BC48A" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity={hoveredNode === "guidance" ? "0.6" : "0.18"} 
                    className="transition-all duration-300"
                  />

                  {/* Laser Pulses moving down the connectors */}
                  <circle cx="168" cy="166" r="4.5" fill="#2BC48A" fillOpacity={hoveredNode === "detection" ? "1" : "0.4"} />
                  {hoveredNode === "detection" && <circle cx="168" cy="166" r="9" fill="#2BC48A" fillOpacity="0.25" className="animate-ping" />}

                  <circle cx="312" cy="166" r="4.5" fill="#2BC48A" fillOpacity={hoveredNode === "prediction" ? "1" : "0.4"} />
                  {hoveredNode === "prediction" && <circle cx="312" cy="166" r="9" fill="#2BC48A" fillOpacity="0.25" className="animate-ping" />}

                  <circle cx="240" cy="288" r="4.5" fill="#2BC48A" fillOpacity={hoveredNode === "guidance" ? "1" : "0.4"} />
                  {hoveredNode === "guidance" && <circle cx="240" cy="288" r="9" fill="#2BC48A" fillOpacity="0.25" className="animate-ping" />}
                </svg>

                {/* CENTRAL ALIVE O.S. REPLICATING CORE MODULE */}
                <div className="absolute top-[216px] left-[240px] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <div className="absolute w-[170px] h-[170px] rounded-full border border-[#2BC48A]/10 animate-pulse duration-1000" />
                  <div className="relative w-[130px] h-[130px] rounded-full bg-[#0E1B17] flex flex-col items-center justify-center shadow-[0_0_48px_rgba(43,196,138,0.22),inset_0_0_24px_rgba(43,196,138,0.45)] border border-[#2BC48A]/35">
                    <span className="text-[12px] font-sans font-black tracking-[0.25em] text-[#2BC48A]">ALIVE O.S.</span>
                    <span className="text-[8px] font-mono tracking-[0.22em] text-slate-400 mt-1 uppercase font-semibold">CORE ENGINE</span>
                  </div>
                </div>

                {/* NODE A: DETECTION */}
                <motion.div
                  style={{ left: "13.3%", top: "20%" }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[100px] h-[100px] rounded-full bg-white border flex flex-col items-center justify-center p-2 text-center group cursor-pointer transition-all duration-300 ${
                    hoveredNode === "detection"
                      ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                      : "border-[#E8EDF2] shadow-sm hover:border-[#2BC48A]/40"
                  }`}
                  onMouseEnter={() => setHoveredNode("detection")}
                  onMouseLeave={() => setHoveredNode(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1">
                    <Target className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <h4 className="text-[8.5px] font-sans font-black tracking-[0.16em] text-[#0F172A] uppercase">
                    DETECT
                  </h4>
                  <p className="text-[8px] font-sans text-[#667085] leading-tight font-semibold mt-0.5 max-w-[80px]">
                    Identify Signals
                  </p>
                </motion.div>

                {/* NODE B: PREDICTION */}
                <motion.div
                  style={{ left: "86.7%", top: "20%" }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[100px] h-[100px] rounded-full bg-white border flex flex-col items-center justify-center p-2 text-center group cursor-pointer transition-all duration-300 ${
                    hoveredNode === "prediction"
                      ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                      : "border-[#E8EDF2] shadow-sm hover:border-[#2BC48A]/40"
                  }`}
                  onMouseEnter={() => setHoveredNode("prediction")}
                  onMouseLeave={() => setHoveredNode(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1">
                    <TrendingUp className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <h4 className="text-[8.5px] font-sans font-black tracking-[0.16em] text-[#0F172A] uppercase">
                    PREDICT
                  </h4>
                  <p className="text-[8px] font-sans text-[#667085] leading-tight font-semibold mt-0.5 max-w-[80px]">
                    Risk Horizons
                  </p>
                </motion.div>

                {/* NODE C: GUIDANCE */}
                <motion.div
                  style={{ left: "50%", top: "81.6%" }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 w-[100px] h-[100px] rounded-full bg-white border flex flex-col items-center justify-center p-2 text-center group cursor-pointer transition-all duration-300 ${
                    hoveredNode === "guidance"
                      ? "border-[#2BC48A] shadow-[0_12px_28px_rgba(43,196,138,0.08)]"
                      : "border-[#E8EDF2] shadow-sm hover:border-[#2BC48A]/40"
                  }`}
                  onMouseEnter={() => setHoveredNode("guidance")}
                  onMouseLeave={() => setHoveredNode(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-7 h-7 rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-1">
                    <User className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <h4 className="text-[8.5px] font-sans font-black tracking-[0.16em] text-[#0F172A] uppercase">
                    GUIDE
                  </h4>
                  <p className="text-[8px] font-sans text-[#667085] leading-tight font-semibold mt-0.5 max-w-[80px]">
                    Decide Interventions
                  </p>
                </motion.div>

                {/* Real-time status display centered at the very bottom inside the diagram container */}
                <div className="absolute bottom-[24px] left-6 right-6 text-center">
                  <p className="text-[10px] font-mono tracking-[0.18em] text-[#94A3B8] uppercase font-black transition-colors duration-200">
                    {hoveredNode === "detection" && "Analyzing raw biosignals..."}
                    {hoveredNode === "prediction" && "Compiling predictive risk patterns..."}
                    {hoveredNode === "guidance" && "Formulating behavioral routines..."}
                    {!hoveredNode && "Interactive telemetry system"}
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ================= 7. COMPLIANCE & TRUST STRIP ================= */}
        <div className="w-full pt-12 mt-16 border-t border-[#E8EDF2]">
          
          <div className="text-center mb-6">
            <span className="text-[9px] font-mono font-black tracking-[0.22em] text-[#94A3B8] uppercase block">
              CLINICAL COMPLIANCE & REGULATORY ALIGNMENT
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center max-w-4xl mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300">
            
            {/* Badge 1: HIPAA */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r border-[#E8EDF2]/65 last:border-0">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <ShieldCheck className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">HIPAA Compliant</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">PHI Data Secured</div>
              </div>
            </div>

            {/* Badge 2: SOC 2 TYPE II */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r border-[#E8EDF2]/65 last:border-0 md:border-r">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <Lock className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">SOC 2 Type II</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">Audited Safe Infra</div>
              </div>
            </div>

            {/* Badge 3: GDPR Ready */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r border-[#E8EDF2]/65 last:border-0">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <BadgeCheck className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">GDPR Ready</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">Global Privacy Standards</div>
              </div>
            </div>

            {/* Badge 4: NHS DCB0129 */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 last:border-0">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <Activity className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">DCB0129 Clinical</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">UK NHS Safety Aligned</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
