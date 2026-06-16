import { motion } from "motion/react";
import { useState } from "react";
import { 
  Watch, 
  User, 
  Brain, 
  Shield, 
  Activity, 
  TrendingUp, 
  CheckCircle, 
  Flame, 
  ArrowRight 
} from "lucide-react";

export default function ConnectedEcosystem() {
  const [activeNode, setActiveNode] = useState<"wearables" | "coaching" | "ai" | "preventive" | null>(null);

  return (
    <div
      id="section-ecosystem"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFB] py-20 px-4 sm:px-6 md:px-16"
    >
      {/* Background Decorative Mesh Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Main Core Centered Typography Headers (Pristine Visual Hierarchy) */}
      <div className="w-full max-w-4xl mx-auto text-center mb-8 relative z-10">
        {/* Label structure: 04 | THE CONNECTED ECOSYSTEM */}
        <div className="flex items-center justify-center gap-4 text-xs mb-8 font-sans">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">04</span>
          <span className="text-[#E2E8F0] font-light text-sm">|</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
            The Connected Ecosystem
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12] mb-6 font-sans">
          GOQii combines AI, wearables, coaching,<br className="hidden md:block" />
          {" "}and preventive intelligence into one<br className="hidden md:block" />
          {" "}continuous <span className="text-[#2BC48A]">health ecosystem.</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg font-sans font-medium tracking-tight max-w-xl mx-auto mt-4 leading-relaxed">
          Every signal. Every insight. Every day — working together for a healthier you.
        </p>
      </div>

      {/* ================= STUNNING PREMIUM LIGHT ECOSYSTEM CARD (FIXED AS PER DEVICE WINDOW & LIGHT THEME) ================= */}
      <div className="w-full max-w-5xl bg-white border border-[#E8EDF2] rounded-[36px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-[0_24px_50px_rgba(15,23,42,0.03)] relative overflow-hidden">
        
        {/* Subtle ambient radial highlights */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#00ADC7]/[0.03] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#2BC48A]/[0.04] rounded-full blur-[110px] pointer-events-none" />

        {/* Top Header Row Inside Card */}
        <div className="flex flex-row justify-between items-center gap-4 w-full mb-10 text-[10px] sm:text-[11px] uppercase relative z-10">
          
          {/* Left Live Indicator Capsule */}
          <div className="inline-flex items-center bg-[#E5F7F0] border border-[#2BC48A]/30 px-3.5 py-1.5 rounded-full text-[#0F9E6C] font-sans tracking-wider text-[10px] font-black shadow-[0_2px_10px_rgba(43,196,138,0.04)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2BC48A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2BC48A]"></span>
            </span>
            LIVE ECOSYSTEM FLOW
          </div>

          {/* Right System Badge Capsule */}
          <div className="inline-flex items-center bg-slate-50 border border-slate-200/80 px-3.5 py-1.5 rounded-full text-slate-600 font-sans tracking-wider text-[10px] font-bold">
            <span className="text-slate-400">SYSTEM STATUS</span>
            <span className="text-[#2BC48A] font-extrabold ml-2 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] mr-1.5 animate-pulse" />
              OPTIMAL
            </span>
          </div>
        </div>

        {/* Card Title Block */}
        <div className="text-left mb-10 relative z-10 max-w-md">
          <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-2 font-sans">
            Your Health. Connected.
          </h3>
          <p className="text-slate-500 text-xs sm:text-sm font-semibold">
            Real-time signals working for your better health.
          </p>
        </div>

        {/* Dynamic Connected Node Structure Panel */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center w-full min-h-[380px]">
          
          {/* COLUMN 1: LEFT-HAND MODULES (Wearables & Coaching) */}
          <div className="flex flex-col gap-6 lg:gap-14 justify-center items-center lg:items-start order-2 lg:order-1 h-full">
            
            {/* WEARABLES NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("wearables")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "wearables"
                  ? "bg-[#F4FBF9] border-[#2BC48A] shadow-[0_8px_32px_rgba(43,196,138,0.1)]"
                  : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#2BC48A]/40 hover:bg-white"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute right-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 0 0 C 24 0, 24 15, 48 20"
                    fill="none"
                    stroke={activeNode === "wearables" ? "#2BC48A" : "rgba(15,23,42,0.08)"}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="transition-all duration-300"
                  />
                  {activeNode === "wearables" && (
                    <circle cx="0" cy="0" r="3.5" fill="#2BC48A" className="shadow-lg">
                      <animateMotion path="M 0 0 C 24 0, 24 15, 48 20" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                activeNode === "wearables" 
                  ? "bg-[#2BC48A]/10 text-[#2BC48A] scale-105" 
                  : "bg-slate-100 text-[#2BC48A]/80 group-hover:bg-[#2BC48A]/10 group-hover:text-[#2BC48A] group-hover:scale-105"
              }`}>
                <Watch className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-[#0F172A] mb-0.5 font-sans">Wearables</h4>
                <p className="text-xs text-slate-500 font-medium leading-normal font-sans">
                  Steps, HR, Sleep, Activity & more
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-5 top-5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "wearables" ? "bg-[#2BC48A] scale-125 shadow-[0_0_8px_#2BC48A]" : "bg-slate-200"
              }`} />
            </motion.div>

            {/* COACHING NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("coaching")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "coaching"
                  ? "bg-[#F0FAFC] border-[#00ADC7] shadow-[0_8px_32px_rgba(0,173,199,0.1)]"
                  : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#00ADC7]/40 hover:bg-white"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute right-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 0 0 C 24 0, 24 -15, 48 -20"
                    fill="none"
                    stroke={activeNode === "coaching" ? "#00ADC7" : "rgba(15,23,42,0.08)"}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="transition-all duration-300"
                  />
                  {activeNode === "coaching" && (
                    <circle cx="0" cy="0" r="3.5" fill="#00ADC7">
                      <animateMotion path="M 0 0 C 24 0, 24 -15, 48 -20" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                activeNode === "coaching" 
                  ? "bg-[#00ADC7]/10 text-[#00ADC7] scale-105" 
                  : "bg-slate-100 text-[#00ADC7]/80 group-hover:bg-[#00ADC7]/10 group-hover:text-[#00ADC7] group-hover:scale-105"
              }`}>
                <User className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-[#0F172A] mb-0.5 font-sans">Coaching</h4>
                <p className="text-xs text-slate-500 font-medium leading-normal font-sans">
                  Expert guidance, personalized support
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-5 top-5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "coaching" ? "bg-[#00ADC7] scale-125 shadow-[0_0_8px_#00ADC7]" : "bg-slate-200"
              }`} />
            </motion.div>

          </div>

          {/* COLUMN 2: CENTER PIECES (GOQii AI Concentric Glowing Reactor) */}
          <div className="flex flex-col items-center justify-center relative py-12 lg:py-0 order-1 lg:order-2 h-full min-h-[290px]">
            
            {/* Concentric rings decoration with heavy glowing aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Orbit dash boundary track */}
              <div className={`absolute w-[285px] h-[285px] rounded-full border border-dashed transition-all duration-700 ${
                activeNode ? "border-slate-300/80 scale-105" : "border-slate-200/40"
              }`} />

              {/* Spinning middle track for tech ambiance */}
              <div className="absolute w-[235px] h-[235px] rounded-full border border-slate-100/80 animate-spin-slow pointer-events-none" />

              {/* Orbit Node Glowing Dots (linked to active state) */}
              <div className={`absolute left-[13%] top-[14%] w-4 h-4 rounded-full border-[3px] border-white transition-all duration-300 ${
                activeNode === "wearables" ? "bg-[#2BC48A] scale-[1.3] shadow-[0_0_15px_rgba(43,196,138,0.5)]" : "bg-slate-200"
              }`} />

              <div className={`absolute left-[13%] bottom-[14%] w-4 h-4 rounded-full border-[3px] border-white transition-all duration-300 ${
                activeNode === "coaching" ? "bg-[#00ADC7] scale-[1.3] shadow-[0_0_15px_rgba(0,173,199,0.5)]" : "bg-slate-200"
              }`} />

              <div className={`absolute right-[13%] top-[14%] w-4 h-4 rounded-full border-[3px] border-white transition-all duration-300 ${
                activeNode === "ai" ? "bg-[#A855F7] scale-[1.3] shadow-[0_0_15px_rgba(168,85,247,0.5)]" : "bg-slate-200"
              }`} />

              <div className={`absolute right-[13%] bottom-[14%] w-4 h-4 rounded-full border-[3px] border-white transition-all duration-300 ${
                activeNode === "preventive" ? "bg-[#F97316] scale-[1.3] shadow-[0_0_15px_rgba(249,115,22,0.5)]" : "bg-slate-200"
              }`} />
            </div>

            {/* Core Circular Orb Container */}
            <div className={`relative w-[184px] h-[184px] rounded-full bg-white border flex flex-col items-center justify-center p-6 transition-all duration-500 z-10 ${
              activeNode === "wearables" ? "border-[#2BC48A] shadow-[0_12px_45px_rgba(43,196,138,0.15)]" :
              activeNode === "coaching" ? "border-[#00ADC7] shadow-[0_12px_45px_rgba(0,173,199,0.15)]" :
              activeNode === "ai" ? "border-[#A855F7] shadow-[0_12px_45px_rgba(168,85,247,0.15)]" :
              activeNode === "preventive" ? "border-[#F97316] shadow-[0_12px_45px_rgba(249,115,22,0.15)]" :
              "border-[#2BC48A]/60 shadow-[0_12px_36px_rgba(43,196,138,0.08)]"
            }`}>
              
              {/* Inner accent ring */}
              <div className="absolute inset-2.5 border border-slate-100 rounded-full pointer-events-none" />

              {/* Rotating radar graphic overlay when active to add extreme polish */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_30%,rgba(43,196,138,0.02)_100%)] pointer-events-none" />

              {/* Graphic Logo Segment representation inside Orb */}
              <div className="mb-2 uppercase">
                <svg className={`w-12 h-12 transition-all duration-500 ${
                  activeNode === "wearables" ? "text-[#2BC48A] drop-shadow-[0_0_4px_rgba(43,196,138,0.4)]" :
                  activeNode === "coaching" ? "text-[#00ADC7] drop-shadow-[0_0_4px_rgba(0,173,199,0.4)]" :
                  activeNode === "ai" ? "text-[#A855F7] drop-shadow-[0_0_4px_rgba(168,85,247,0.4)]" :
                  activeNode === "preventive" ? "text-[#F97316] drop-shadow-[0_0_4px_rgba(249,115,22,0.4)]" :
                  "text-[#2BC48A] drop-shadow-[0_0_6px_rgba(43,196,138,0.3)]"
                }`} viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15A35 35 0 0 0 15 50h12A23 23 0 0 1 50 27V15z" opacity="0.9" />
                  <path d="M85 50A35 35 0 0 0 50 15v12a23 23 0 0 1 23 23h12z" opacity="0.9" />
                  <path d="M50 85A35 35 0 0 0 85 50H73A23 23 0 0 1 50 73v12z" opacity="0.9" />
                  <path d="M15 50A35 35 0 0 0 50 85V73A23 23 0 0 1 27 50H15z" opacity="0.9" />
                  <circle cx="50" cy="50" r="11" className="animate-pulse" />
                </svg>
              </div>

              {/* Central text elements */}
              <span className="font-sans font-black text-[#0F172A] text-[16px] tracking-wider leading-none">
                GOQii AI
              </span>
              <span className="text-[9px] text-[#2BC48A] font-extrabold mt-1.5 uppercase tracking-widest text-center">
                Health Intelligence
              </span>
            </div>

          </div>

          {/* COLUMN 3: RIGHT-HAND MODULES (AI Intelligence & Preventive Care) */}
          <div className="flex flex-col gap-6 lg:gap-14 justify-center items-center lg:items-end order-3 h-full">
            
            {/* AI INTELLIGENCE NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("ai")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "ai"
                  ? "bg-[#FAF5FF] border-[#A855F7] shadow-[0_8px_32px_rgba(168,85,247,0.1)]"
                  : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#A855F7]/40 hover:bg-white"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute left-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 48 0 C 24 0, 24 15, 0 20"
                    fill="none"
                    stroke={activeNode === "ai" ? "#A855F7" : "rgba(15,23,42,0.08)"}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="transition-all duration-300"
                  />
                  {activeNode === "ai" && (
                    <circle cx="48" cy="0" r="3.5" fill="#A855F7">
                      <animateMotion path="M 48 0 C 24 0, 24 15, 0 20" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                activeNode === "ai" 
                  ? "bg-[#A855F7]/10 text-[#A855F7] scale-105" 
                  : "bg-slate-100 text-[#A855F7]/80 group-hover:bg-[#A855F7]/10 group-hover:text-[#A855F7] group-hover:scale-105"
              }`}>
                <Brain className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-[#0F172A] mb-0.5 font-sans">AI Intelligence</h4>
                <p className="text-xs text-slate-500 font-medium leading-normal font-sans">
                  Predictive insights & risk detection
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-5 top-5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "ai" ? "bg-[#A855F7] scale-125 shadow-[0_0_8px_#A855F7]" : "bg-slate-200"
              }`} />
            </motion.div>

            {/* PREVENTIVE CARE NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("preventive")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "preventive"
                  ? "bg-[#FFF7ED] border-[#F97316] shadow-[0_8px_32px_rgba(249,115,22,0.1)]"
                  : "bg-[#FAFBFB] border-[#E8EDF2] hover:border-[#F97316]/40 hover:bg-white"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute left-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 48 0 C 24 0, 24 -15, 0 -20"
                    fill="none"
                    stroke={activeNode === "preventive" ? "#F97316" : "rgba(15,23,42,0.08)"}
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="transition-all duration-300"
                  />
                  {activeNode === "preventive" && (
                    <circle cx="48" cy="0" r="3.5" fill="#F97316">
                      <animateMotion path="M 48 0 C 24 0, 24 -15, 0 -20" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                </svg>
              </div>

              {/* Icon Container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                activeNode === "preventive" 
                  ? "bg-[#F97316]/10 text-[#F97316] scale-105" 
                  : "bg-slate-100 text-[#F97316]/80 group-hover:bg-[#F97316]/10 group-hover:scale-105 group-hover:text-[#F97316]"
              }`}>
                <Shield className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-[#0F172A] mb-0.5 font-sans">Preventive Care</h4>
                <p className="text-xs text-slate-500 font-medium leading-normal font-sans">
                  Early action, better outcomes
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-5 top-5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "preventive" ? "bg-[#F97316] scale-125 shadow-[0_0_8px_#F97316]" : "bg-slate-200"
              }`} />
            </motion.div>

          </div>

        </div>

        {/* ================= GORGEOUS BOTTOM METRICS GRID BAR ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 xl:gap-8 p-5 sm:p-6 lg:p-6 xl:p-8 bg-[#F8FAFB] border border-[#E8EDF2] rounded-[28px] mt-16 relative z-10 text-left">
          
          {/* Module 1: Live Signals */}
          <div className="flex items-center gap-3 xl:gap-4">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-12 h-12 rounded-full bg-[#E5F7F0] text-[#2BC48A] border border-[#2BC48A]/20 flex items-center justify-center shrink-0">
              <Activity className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#2BC48A] mb-0.5 font-sans">
                Live Signals
              </span>
              <span className="text-2xl sm:text-[27px] lg:text-lg xl:text-xl 2xl:text-[27px] font-black text-[#0F172A] tracking-tight leading-none mb-1 font-sans">
                128
              </span>
              <span className="text-[11px] font-medium text-slate-500 font-sans">
                Active right now
              </span>
            </div>
          </div>

          {/* Module 2: Insights Generated */}
          <div className="flex items-center gap-3 xl:gap-4 border-t sm:border-t-0 sm:border-l border-slate-200/60 pt-6 sm:pt-0 sm:pl-6 lg:pl-4 xl:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-12 h-12 rounded-full bg-[#E0F2FE] text-[#00ADC7] border border-[#00ADC7]/20 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#00ADC7] mb-0.5 font-sans">
                Insights Generated
              </span>
              <span className="text-2xl sm:text-[27px] lg:text-lg xl:text-xl 2xl:text-[27px] font-black text-[#0F172A] tracking-tight leading-none mb-1 font-sans">
                24
              </span>
              <span className="text-[11px] font-medium text-slate-500 font-sans">
                In the last hour
              </span>
            </div>
          </div>

          {/* Module 3: Actions Completed */}
          <div className="flex items-center gap-3 xl:gap-4 border-t sm:border-t lg:border-t-0 lg:border-l border-slate-200/60 pt-6 sm:pt-6 lg:pt-0 sm:pl-0 lg:pl-4 xl:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-12 h-12 rounded-full bg-[#F3E8FF] text-[#A855F7] border border-[#A855F7]/40 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#A855F7] mb-0.5 font-sans">
                Actions Completed
              </span>
              <span className="text-2xl sm:text-[27px] lg:text-lg xl:text-xl 2xl:text-[27px] font-black text-[#0F172A] tracking-tight leading-none mb-1 font-sans">
                96%
              </span>
              <span className="text-[11px] font-medium text-slate-500 font-sans">
                Daily goal progress
              </span>
            </div>
          </div>

          {/* Module 4: Health Trend */}
          <div className="flex items-center gap-3 xl:gap-4 border-t sm:border-t lg:border-t-0 sm:border-l lg:border-l border-slate-200/60 pt-6 sm:pt-6 lg:pt-0 sm:pl-6 lg:pl-4 xl:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-12 h-12 rounded-full bg-[#FFEDD5] text-[#F97316] border border-[#F97316]/40 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#F97316] mb-0.5 font-sans">
                Health Trend
              </span>
              <span className="text-2xl sm:text-[27px] lg:text-lg xl:text-xl 2xl:text-[27px] font-black text-[#0F172A] tracking-tight leading-none mb-1 font-sans">
                Improving
              </span>
              <span className="text-[11px] font-medium text-slate-500 font-sans">
                Great going!
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
