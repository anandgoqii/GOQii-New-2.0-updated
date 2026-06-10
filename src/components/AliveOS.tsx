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
                    Continuously aggregates biological markers (resting HR, HRV, sleep metrics, blood diagnostics) to map your baseline and identify subtle signs of stress.
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
                <span className="inline-flex items-center justify-center py-1 px-2.5 rounded-full text-[9px] font-black tracking-wider bg-[#2BC48A] text-white uppercase select-none font-mono">
                  PROPRIETARY ENGINE
                </span>
                <h4 className="text-sm font-black text-[#0F172A] uppercase tracking-wide">
                  Behavioral Neurocoding™
                </h4>
              </div>

              <div className="text-xs font-bold text-[#0F172A] mb-2 leading-relaxed">
                The proprietary engine behind every GOQii prescription.
              </div>

              <p className="text-xs text-[#475467] leading-relaxed mb-2.5">
                Built on more than a decade of real-world health engagement, Behavioral Neurocoding™ combines coaching, motivation, rewards, accountability, and habit science to help people turn health insights into lasting behavior change.
              </p>

              <p className="text-xs text-[#475467] leading-relaxed mb-3">
                Refined through millions of coaching interactions and continuous health journeys, it is the human layer that transforms recommendations into action.
              </p>
              
              <div className="mt-3 pt-3 border-t border-[#2BC48A]/10">
                <div className="text-xs font-semibold text-[#0F172A] leading-relaxed pl-3 border-l-2 border-[#2BC48A]">
                  AI identifies risk.<br />
                  <span className="text-[#2BC48A]">Behavioral Neurocoding™</span> helps people act on it.
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: BEHAVIORAL NEUROCODING FLOW SCHEMA */}
          <div className="lg:col-span-5 flex justify-center h-full">
            <div 
              ref={graphicContainerRef}
              className="relative w-full max-w-[420px] bg-gradient-to-b from-[#FDFDFD] to-[#FAFBFB] border border-[#E8EDF2] rounded-[36px] shadow-[0_16px_36px_rgba(15,23,42,0.015)] p-5 sm:p-6 flex flex-col items-center justify-between mx-auto overflow-hidden text-left"
            >
              {/* Soft decorative background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#2BC48A]/5 rounded-full blur-[65px] pointer-events-none z-0" />

              <div 
                className="relative z-10 w-full flex flex-col items-center justify-center gap-3"
                style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
              >
                
                {/* STAGE 1: AI Intelligence */}
                <motion.div 
                  whileHover={{ y: -1 }}
                  className="w-full bg-[#0F172A] text-white rounded-2xl p-3.5 border border-[#1E293B] shadow-[0_4px_12px_rgba(15,23,42,0.04)] flex items-center gap-3 relative group overflow-hidden"
                >
                  <div className="absolute -right-2 -bottom-2 opacity-[0.03] text-white pointer-events-none">
                    <Activity className="w-16 h-16" />
                  </div>
                  <div className="w-8.5 h-8.5 rounded-xl bg-[#2BC48A]/10 border border-[#2BC48A]/25 text-[#2BC48A] flex items-center justify-center shrink-0">
                    <Activity className="w-4.5 h-4.5 text-[#2BC48A]" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-[#2BC48A] tracking-[0.15em] uppercase font-mono">STAGE 01 • INTELLIGENCE</div>
                    <h4 className="text-xs sm:text-sm font-black tracking-wide font-sans mt-0.5">AI Intelligence</h4>
                    <p className="text-[10px] text-[#94A3B8] leading-tight mt-0.5">Aggregates biomarkers & predicts risk trends</p>
                  </div>
                </motion.div>

                {/* Vertical Connector Line 1 */}
                <div className="flex flex-col items-center my-0.5 shrink-0">
                  <div className="w-[1.5px] h-4 bg-gradient-to-b from-[#0F172A] to-[#2BC48A]" />
                  <div className="text-[9px] text-[#2BC48A] font-bold leading-none mt-0.5">↓</div>
                </div>

                {/* STAGE 2: Behavioral Neurocoding™ Center Hub */}
                <motion.div 
                  whileHover={{ scale: 1.005 }}
                  className="w-full bg-[#F4FBF9] border-2 border-[#2BC48A] rounded-2xl p-4 shadow-[0_10px_20px_rgba(43,196,138,0.06)] relative group overflow-hidden"
                >
                  <div className="absolute right-0 top-0 p-3 opacity-10 pointer-events-none">
                    <Zap className="w-12 h-12 text-[#2BC48A]" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8.5 h-8.5 rounded-xl bg-[#2BC48A]/15 border border-[#2BC48A]/35 text-[#2BC48A] flex items-center justify-center shrink-0">
                      <Zap className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="inline-flex items-center justify-center py-0.5 px-2 rounded-full text-[8px] font-black tracking-wider bg-[#2BC48A] text-white uppercase font-mono">
                        PROPRIETARY ENGINE
                      </span>
                      <h4 className="text-xs sm:text-sm font-black text-[#0F172A] tracking-wider uppercase font-sans mt-0.5">
                        Behavioral Neurocoding™
                      </h4>
                    </div>
                  </div>
                  <p className="text-[10.5px] text-[#475467] font-medium leading-relaxed mt-2 pl-2 border-l-2 border-[#2BC48A]/40">
                    The active translation system that overcomes friction, building permanent daily patterns.
                  </p>
                </motion.div>

                {/* Vertical Connector Line 2 */}
                <div className="flex flex-col items-center my-0.5 shrink-0">
                  <div className="w-[1.5px] h-4 bg-[#2BC48A]" />
                  <div className="text-[9px] text-[#2BC48A] font-bold leading-none mt-0.5">↓</div>
                </div>

                {/* STAGE 3: Core 4 Action Channels Grid */}
                <div className="grid grid-cols-2 gap-2 w-full">
                  {/* Pillar: Coach */}
                  <div className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 rounded-xl p-2.5 flex flex-col items-start gap-1 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <div className="w-5.5 h-5.5 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] font-sans">Coach</span>
                      <p className="text-[9.5px] text-[#667085] leading-tight">Human accountability</p>
                    </div>
                  </div>

                  {/* Pillar: Rewards */}
                  <div className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 rounded-xl p-2.5 flex flex-col items-start gap-1 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <div className="w-5.5 h-5.5 rounded-lg bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] font-sans">Rewards</span>
                      <p className="text-[9.5px] text-[#667085] leading-tight">UHT positive loops</p>
                    </div>
                  </div>

                  {/* Pillar: Accountability */}
                  <div className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 rounded-xl p-2.5 flex flex-col items-start gap-1 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <div className="w-5.5 h-5.5 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] font-sans">Accountability</span>
                      <p className="text-[9.5px] text-[#667085] leading-tight">Biometric feedback</p>
                    </div>
                  </div>

                  {/* Pillar: Habits */}
                  <div className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 rounded-xl p-2.5 flex flex-col items-start gap-1 transition-all duration-200 hover:shadow-[0_4px_12px_rgba(0,0,0,0.01)]">
                    <div className="w-5.5 h-5.5 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#0F172A] font-sans">Habits</span>
                      <p className="text-[9.5px] text-[#667085] leading-tight">Coached routines</p>
                    </div>
                  </div>
                </div>

                {/* Vertical Connector Line 3 */}
                <div className="flex flex-col items-center my-0.5 shrink-0">
                  <div className="w-[1.5px] h-4 bg-gradient-to-b from-[#2BC48A] to-[#00ADC7]" />
                  <div className="text-[9px] text-[#00ADC7] font-bold leading-none mt-0.5">↓</div>
                </div>

                {/* STAGE 4: Better Outcomes */}
                <motion.div 
                  whileHover={{ y: 1 }}
                  className="w-full bg-gradient-to-r from-[#2BC48A] to-[#00ADC7] text-white rounded-2xl p-3.5 border border-transparent shadow-[0_6px_20px_rgba(43,196,138,0.12)] flex items-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute -right-2 -bottom-2 opacity-10 text-white pointer-events-none">
                    <TrendingUp className="w-16 h-16" />
                  </div>
                  <div className="w-8.5 h-8.5 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4.5 h-4.5 text-white" />
                  </div>
                  <div>
                    <div className="text-[9px] font-bold text-teal-100 tracking-[0.15em] uppercase font-mono font-black">STAGE 04 • OUTCOME</div>
                    <h4 className="text-xs sm:text-sm font-black tracking-wide font-sans mt-0.5 leading-none">Better Outcomes</h4>
                    <p className="text-[10px] text-teal-50/90 leading-tight mt-1">Sustained premium health, vitality, and longevity</p>
                  </div>
                </motion.div>

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
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r border-[#E8EDF2]/65 sm:border-r">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <ShieldCheck className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">HIPAA Compliant</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">PHI Data Secured</div>
              </div>
            </div>

            {/* Badge 2: SOC 2 TYPE II */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r-0 lg:border-r border-[#E8EDF2]/65">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <Lock className="w-5 h-5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">SOC 2 Type II</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">Audited Safe Infra</div>
              </div>
            </div>

            {/* Badge 3: GDPR Ready */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-r border-[#E8EDF2]/65 sm:border-r">
              <div className="w-10 h-10 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0">
                <BadgeCheck className="w-5.5 h-5.5" strokeWidth={2} />
              </div>
              <div className="text-left font-sans">
                <div className="text-xs font-black text-[#0F172A] tracking-tight leading-tight">GDPR Ready</div>
                <div className="text-[9px] font-medium text-[#667085] mt-0.5 leading-none">Global Privacy Standards</div>
              </div>
            </div>

            {/* Badge 4: NHS DCB0129 */}
            <div className="flex items-center gap-3 justify-center sm:justify-start pl-2 sm:pl-6 border-0">
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
