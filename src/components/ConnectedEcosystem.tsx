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
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-slate-50 py-20 px-4 sm:px-6 md:px-16"
    >
      {/* Background Decorative Mesh Grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-70 pointer-events-none" />

      {/* Main Core Centered Typography Headers (Pristine Visual Hierarchy) */}
      <div className="w-full max-w-4xl mx-auto text-center mb-8 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12] mb-6 font-sans">
          GOQii combines AI, wearables, coaching,<br className="hidden md:block" />
          {" "}and preventive intelligence into one<br className="hidden md:block" />
          {" "}continuous <span className="text-[#2BC48A]">health ecosystem.</span>
        </h2>
        <p className="text-slate-500 text-base md:text-lg font-sans font-medium tracking-tight max-w-xl mx-auto mt-4 leading-relaxed">
          Every signal. Every insight. Every day — working together for a healthier you.
        </p>
      </div>

      {/* Elegant CTA Action Button */}
      <div className="mb-14 relative z-10">
        <motion.button 
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            document.getElementById("section-problem")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 bg-[#2BC48A] text-white font-black px-7 py-3.5 rounded-full shadow-[0_10px_25px_rgba(43,196,138,0.25)] hover:shadow-[0_15px_30px_rgba(43,196,138,0.35)] transition-all duration-300 text-sm md:text-base cursor-pointer"
        >
          Explore the Ecosystem
          <ArrowRight className="w-4 h-4 md:w-5 h-5" />
        </motion.button>
      </div>

      {/* ================= STUNNING PREMIUM DARK ECOSYSTEM CARD ================= */}
      <div className="w-full max-w-5xl bg-gradient-to-br from-[#070e17] to-[#0a1523] border border-white/5 rounded-[36px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-[0_32px_80px_rgba(8,19,36,0.65)] relative overflow-hidden">
        
        {/* Glowing ambient radial light enhancements inside card */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#2BC48A]/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Top Header Row Inside Card */}
        <div className="flex flex-row justify-between items-center gap-4 w-full mb-10 text-[10px] sm:text-[11px] uppercase relative z-10">
          
          {/* Left Live Indicator Capsule */}
          <div className="inline-flex items-center bg-[#091f17]/80 border border-[#2BC48A]/20 px-3.5 py-1.5 rounded-full text-[#2BC48A] font-sans tracking-wider text-[10px] font-black shadow-[0_2px_10px_rgba(43,196,138,0.08)]">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2BC48A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2BC48A]"></span>
            </span>
            LIVE ECOSYSTEM FLOW
          </div>

          {/* Right System Badge Capsule */}
          <div className="inline-flex items-center bg-[#111927] border border-white/10 px-3.5 py-1.5 rounded-full text-slate-300 font-sans tracking-wider text-[10px] font-bold">
            <span className="text-slate-400">SYSTEM STATUS</span>
            <span className="text-[#2BC48A] font-extrabold ml-2 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] mr-1.5 animate-pulse" />
              OPTIMAL
            </span>
          </div>
        </div>

        {/* Card Title Block */}
        <div className="text-left mb-10 relative z-10 max-w-md">
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2 font-sans">
            Your Health. Connected.
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm font-medium">
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
              className={`w-full max-w-sm p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "wearables"
                  ? "bg-[#0b1b17] border-[#2BC48A] shadow-[0_8px_30px_rgba(43,196,138,0.18)]"
                  : "bg-[#0f1d30]/65 border-white/5 hover:border-[#2BC48A]/40 hover:bg-[#0c1827]"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute right-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 0 0 C 24 0, 24 15, 48 20"
                    fill="none"
                    stroke={activeNode === "wearables" ? "#2BC48A" : "rgba(255,255,255,0.08)"}
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
                  ? "bg-[#2BC48A]/20 text-[#2BC48A] scale-105" 
                  : "bg-white/5 text-[#2BC48A] group-hover:bg-[#2BC48A]/10 group-hover:scale-105"
              }`}>
                <Watch className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-white mb-0.5">Wearables</h4>
                <p className="text-xs text-slate-400 font-medium leading-normal">
                  Steps, HR, Sleep, Activity & more
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-4 top-4.5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "wearables" ? "bg-[#2BC48A] scale-125 shadow-[0_0_8px_#2BC48A]" : "bg-white/10"
              }`} />
            </motion.div>

            {/* COACHING NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("coaching")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "coaching"
                  ? "bg-[#0b1c2b] border-[#00ADC7] shadow-[0_8px_30px_rgba(0,173,199,0.18)]"
                  : "bg-[#0f1d30]/65 border-white/5 hover:border-[#00ADC7]/40 hover:bg-[#0c1827]"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute right-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 0 0 C 24 0, 24 -15, 48 -20"
                    fill="none"
                    stroke={activeNode === "coaching" ? "#00ADC7" : "rgba(255,255,255,0.08)"}
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
                  ? "bg-[#00ADC7]/20 text-[#00ADC7] scale-105" 
                  : "bg-white/5 text-[#00ADC7] group-hover:bg-[#00ADC7]/10 group-hover:scale-105"
              }`}>
                <User className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-white mb-0.5">Coaching</h4>
                <p className="text-xs text-slate-400 font-medium leading-normal">
                  Expert guidance, personalized support
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-4 top-4.5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "coaching" ? "bg-[#00ADC7] scale-125 shadow-[0_0_8px_#00ADC7]" : "bg-white/10"
              }`} />
            </motion.div>

          </div>

          {/* COLUMN 2: CENTER PIECES (GOQii AI Concentric Glowing Reactor) */}
          <div className="flex flex-col items-center justify-center relative py-12 lg:py-0 order-1 lg:order-2 h-full min-h-[290px]">
            
            {/* Concentric rings decoration with heavy glowing aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              
              {/* Orbit dash boundary track */}
              <div className={`absolute w-[285px] h-[285px] rounded-full border border-dashed transition-all duration-700 ${
                activeNode ? "border-white/15 scale-105" : "border-white/5"
              }`} />

              {/* Spinning middle track for tech ambiance */}
              <div className="absolute w-[235px] h-[235px] rounded-full border border-white/[0.04] animate-spin-slow pointer-events-none" />

              {/* Orbit Node Glowing Dots (linked to active state) */}
              <div className={`absolute left-[13%] top-[14%] w-4 h-4 rounded-full border-[3px] border-[#070e17] transition-all duration-300 ${
                activeNode === "wearables" ? "bg-[#2BC48A] scale-[1.3] shadow-[0_0_15px_#2BC48A]" : "bg-slate-800 border-white/5"
              }`} />

              <div className={`absolute left-[13%] bottom-[14%] w-4 h-4 rounded-full border-[3px] border-[#070e17] transition-all duration-300 ${
                activeNode === "coaching" ? "bg-[#00ADC7] scale-[1.3] shadow-[0_0_15px_#00ADC7]" : "bg-slate-800 border-white/5"
              }`} />

              <div className={`absolute right-[13%] top-[14%] w-4 h-4 rounded-full border-[3px] border-[#070e17] transition-all duration-300 ${
                activeNode === "ai" ? "bg-[#A855F7] scale-[1.3] shadow-[0_0_15px_#A855F7]" : "bg-slate-800 border-white/5"
              }`} />

              <div className={`absolute right-[13%] bottom-[14%] w-4 h-4 rounded-full border-[3px] border-[#070e17] transition-all duration-300 ${
                activeNode === "preventive" ? "bg-[#F97316] scale-[1.3] shadow-[0_0_15px_#F97316]" : "bg-slate-800 border-white/5"
              }`} />
            </div>

            {/* Core Circular Orb Container */}
            <div className={`relative w-[184px] h-[184px] rounded-full bg-gradient-to-b from-[#0e1c2e] to-[#040a12] border flex flex-col items-center justify-center p-6 shadow-2xl transition-all duration-500 z-10 ${
              activeNode === "wearables" ? "border-[#2BC48A] shadow-[0_0_45px_rgba(43,196,138,0.35)]" :
              activeNode === "coaching" ? "border-[#00ADC7] shadow-[0_0_45px_rgba(0,173,199,0.35)]" :
              activeNode === "ai" ? "border-[#A855F7] shadow-[0_0_45px_rgba(168,85,247,0.35)]" :
              activeNode === "preventive" ? "border-[#F97316] shadow-[0_0_45px_rgba(249,115,22,0.35)]" :
              "border-[#2BC48A]/70 shadow-[0_0_35px_rgba(43,196,138,0.22)]"
            }`}>
              
              {/* Inner accent ring */}
              <div className="absolute inset-2.5 border border-white/5 rounded-full pointer-events-none" />

              {/* Rotating radar graphic overlay when active to add extreme polish */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,transparent_30%,rgba(43,196,138,0.03)_100%)] pointer-events-none" />

              {/* Graphic Logo Segment representation inside Orb */}
              <div className="mb-2 uppercase">
                <svg className={`w-12 h-12 transition-all duration-500 ${
                  activeNode === "wearables" ? "text-[#2BC48A] drop-shadow-[0_0_4px_#2BC48A]" :
                  activeNode === "coaching" ? "text-[#00ADC7] drop-shadow-[0_0_4px_#00ADC7]" :
                  activeNode === "ai" ? "text-[#A855F7] drop-shadow-[0_0_4px_#A855F7]" :
                  activeNode === "preventive" ? "text-[#F97316] drop-shadow-[0_0_4px_#F97316]" :
                  "text-[#2BC48A] drop-shadow-[0_0_6px_rgba(43,196,138,0.4)]"
                }`} viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15A35 35 0 0 0 15 50h12A23 23 0 0 1 50 27V15z" opacity="0.9" />
                  <path d="M85 50A35 35 0 0 0 50 15v12a23 23 0 0 1 23 23h12z" opacity="0.9" />
                  <path d="M50 85A35 35 0 0 0 85 50H73A23 23 0 0 1 50 73v12z" opacity="0.9" />
                  <path d="M15 50A35 35 0 0 0 50 85V73A23 23 0 0 1 27 50H15z" opacity="0.9" />
                  <circle cx="50" cy="50" r="11" className="animate-pulse" />
                </svg>
              </div>

              {/* Central text elements */}
              <span className="font-sans font-black text-white text-[16px] tracking-wider leading-none">
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
              className={`w-full max-w-sm p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "ai"
                  ? "bg-[#180b29] border-[#A855F7] shadow-[0_8px_30px_rgba(168,85,247,0.18)]"
                  : "bg-[#0f1d30]/65 border-white/5 hover:border-[#A855F7]/40 hover:bg-[#0c1827]"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute left-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 48 0 C 24 0, 24 15, 0 20"
                    fill="none"
                    stroke={activeNode === "ai" ? "#A855F7" : "rgba(255,255,255,0.08)"}
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
                  ? "bg-[#A855F7]/20 text-[#A855F7] scale-105" 
                  : "bg-white/5 text-[#A855F7] group-hover:bg-[#A855F7]/10 group-hover:scale-105"
              }`}>
                <Brain className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-white mb-0.5">AI Intelligence</h4>
                <p className="text-xs text-slate-400 font-medium leading-normal">
                  Predictive insights & risk detection
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-4 top-4.5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "ai" ? "bg-[#A855F7] scale-125 shadow-[0_0_8px_#A855F7]" : "bg-white/10"
              }`} />
            </motion.div>

            {/* PREVENTIVE CARE NODE CARD */}
            <motion.div
              onMouseEnter={() => setActiveNode("preventive")}
              onMouseLeave={() => setActiveNode(null)}
              className={`w-full max-w-sm p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center gap-4 relative group ${
                activeNode === "preventive"
                  ? "bg-[#1f1009] border-[#F97316] shadow-[0_8px_30px_rgba(249,115,22,0.18)]"
                  : "bg-[#0f1d30]/65 border-white/5 hover:border-[#F97316]/40 hover:bg-[#0c1827]"
              }`}
            >
              {/* Connector line for desktop */}
              <div className="hidden lg:block absolute left-[-48px] top-1/2 -translate-y-1/2 w-[48px] h-px pointer-events-none">
                <svg className="w-full h-full overflow-visible">
                  <path
                    d="M 48 0 C 24 0, 24 -15, 0 -20"
                    fill="none"
                    stroke={activeNode === "preventive" ? "#F97316" : "rgba(255,255,255,0.08)"}
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
                  ? "bg-[#F97316]/20 text-[#F97316] scale-105" 
                  : "bg-white/5 text-[#F97316] group-hover:bg-[#F97316]/10 group-hover:scale-105"
              }`}>
                <Shield className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-[15px] font-black text-white mb-0.5">Preventive Care</h4>
                <p className="text-xs text-slate-400 font-medium leading-normal">
                  Early action, better outcomes
                </p>
              </div>

              {/* Status active indicator dot */}
              <div className={`absolute right-4 top-4.5 w-2 h-2 rounded-full transition-all duration-300 ${
                activeNode === "preventive" ? "bg-[#F97316] scale-125 shadow-[0_0_8px_#F97316]" : "bg-white/10"
              }`} />
            </motion.div>

          </div>

        </div>

        {/* ================= GORGEOUS BOTTOM METRICS GRID BAR (HORIZONTAL FLEX MOCKUP SPEC) ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 p-6 sm:p-8 bg-white/[0.01] border border-white/[0.04] rounded-[28px] mt-16 relative z-10 text-left">
          
          {/* Module 1: Live Signals */}
          <div className="flex items-center gap-4.5">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-13 h-13 rounded-full bg-[#133126] text-[#2BC48A] border border-[#2BC48A]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(43,196,138,0.18)]">
              <Activity className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#2BC48A] mb-0.5">
                Live Signals
              </span>
              <span className="text-2xl sm:text-[27px] font-black text-white tracking-tight leading-none mb-1">
                128
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                Active right now
              </span>
            </div>
          </div>

          {/* Module 2: Insights Generated */}
          <div className="flex items-center gap-4.5 border-t sm:border-t-0 sm:border-l border-white/[0.05] pt-6 sm:pt-0 sm:pl-6 lg:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-13 h-13 rounded-full bg-[#0F293B] text-[#00ADC7] border border-[#00ADC7]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(0,173,199,0.18)]">
              <TrendingUp className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#00ADC7] mb-0.5">
                Insights Generated
              </span>
              <span className="text-2xl sm:text-[27px] font-black text-white tracking-tight leading-none mb-1">
                24
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                In the last hour
              </span>
            </div>
          </div>

          {/* Module 3: Actions Completed */}
          <div className="flex items-center gap-4.5 border-t lg:border-t-0 lg:border-l border-white/[0.05] pt-6 lg:pt-0 lg:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-13 h-13 rounded-full bg-[#241B3B] text-[#A855F7] border border-[#A855F7]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.18)]">
              <CheckCircle className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#A855F7] mb-0.5">
                Actions Completed
              </span>
              <span className="text-2xl sm:text-[27px] font-black text-white tracking-tight leading-none mb-1">
                96%
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                Daily goal progress
              </span>
            </div>
          </div>

          {/* Module 4: Health Trend */}
          <div className="flex items-center gap-4.5 border-t lg:border-t-0 lg:border-l border-white/[0.05] pt-6 lg:pt-0 lg:pl-8">
            {/* Glowing Icon Badge (Left) */}
            <div className="w-13 h-13 rounded-full bg-[#331E18] text-[#F97316] border border-[#F97316]/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.18)]">
              <Flame className="w-6 h-6" />
            </div>
            {/* Metrics Info (Right) */}
            <div className="flex flex-col">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#F97316] mb-0.5">
                Health Trend
              </span>
              <span className="text-2xl sm:text-[27px] font-black text-white tracking-tight leading-none mb-1">
                Improving
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                Great going!
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
