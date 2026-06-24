import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Moon, Leaf, Heart, Footprints, UserCheck, Sparkles, ClipboardList, Trophy } from "lucide-react";

export default function SectionGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const graphicContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [selectedMobilePillar, setSelectedMobilePillar] = useState<string>("coaching");

  useEffect(() => {
    const el = graphicContainerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setScale(Math.min(1, width / 500));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hook into viewport scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Sequential, progressive scroll-animation triggers for the human-centered design
  const humanOpacity = useTransform(scrollYProgress, [0.10, 0.20], [0, 1]);
  const humanScale = useTransform(scrollYProgress, [0.10, 0.20], [0.85, 1]);

  const sleepOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0, 1]);
  const sleepScale = useTransform(scrollYProgress, [0.18, 0.28], [0.85, 1]);

  const movementOpacity = useTransform(scrollYProgress, [0.22, 0.32], [0, 1]);
  const movementScale = useTransform(scrollYProgress, [0.22, 0.32], [0.85, 1]);

  const nutritionOpacity = useTransform(scrollYProgress, [0.26, 0.36], [0, 1]);
  const nutritionScale = useTransform(scrollYProgress, [0.26, 0.36], [0.85, 1]);

  const recoveryOpacity = useTransform(scrollYProgress, [0.30, 0.40], [0, 1]);
  const recoveryScale = useTransform(scrollYProgress, [0.30, 0.40], [0.85, 1]);

  const coachingOpacity = useTransform(scrollYProgress, [0.34, 0.44], [0, 1]);
  const coachingScale = useTransform(scrollYProgress, [0.34, 0.44], [0.85, 1]);

  const aiOpacity = useTransform(scrollYProgress, [0.38, 0.48], [0, 1]);
  const aiScale = useTransform(scrollYProgress, [0.38, 0.48], [0.85, 1]);

  const diagnosticsOpacity = useTransform(scrollYProgress, [0.42, 0.52], [0, 1]);
  const diagnosticsScale = useTransform(scrollYProgress, [0.42, 0.52], [0.85, 1]);

  const motivationOpacity = useTransform(scrollYProgress, [0.46, 0.56], [0, 1]);
  const motivationScale = useTransform(scrollYProgress, [0.46, 0.56], [0.85, 1]);

  return (
    <div
      id="section-gap"
      ref={containerRef}
      className="relative min-h-0 lg:min-h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-14 md:py-18 px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10">
        
        {/* Left column: Highly Polished Typography content */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* Label structure: 02 | THE MISSING LINK */}
          <div className="flex items-center gap-4 text-xs mb-6 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">02</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              The Missing Link
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-[#0F172A] leading-[1.08] mb-6 font-sans"
          >
            We know <br className="hidden sm:inline" />{" "}
            <span className="text-[#5A6376]">what to do.</span>{" "}
            <br className="hidden sm:inline" />{" "}
            We struggle <br className="hidden sm:inline" />{" "}
            <span className="text-[#2BC48A]">to do it.</span>
          </motion.h2>

          {/* Green accent line as shown in the design */}
          <div className="w-[72px] h-[3px] bg-[#2BC48A] rounded-full mb-6" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
            className="text-sm sm:text-base font-sans text-[#475467] leading-[1.7] max-w-sm mb-6"
          >
            <p className="font-medium text-slate-600">
              Health information is abundant. Consistent habits are not. Under certified human guidance, passive data translates into life changes.
            </p>
          </motion.div>

          {/* Low pill tag "Guidance turns knowledge..." */}
          <div className="flex items-center self-start mb-6">
            <div className="inline-flex items-center gap-3 bg-white border border-[#F1F5F9]/80 px-4 py-2.5 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.015)] transition-all duration-300 hover:shadow-[0_8px_24px_rgba(43,196,138,0.06)]">
              <div className="w-7 h-7 rounded-full bg-[#E8F8F2] flex items-center justify-center text-[#2BC48A] shrink-0">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12M12 12c-2-2.5-5-2-5-2s.5 4 5 2c2-2.5 5-2 5-2s-.5 4-5 2z"/>
                </svg>
              </div>
              <span className="text-[12px] font-sans font-medium text-[#475467] leading-relaxed">
                <span className="text-[#2BC48A] font-semibold">Guidance</span> turns knowledge into lasting change.
              </span>
            </div>
          </div>


        </div>

        {/* Right column: Interactive Connected Orbits Canvas */}
        <div className="lg:col-span-1 hidden lg:block" /> {/* Layout cushion spacing */}
        
        {/* DESKTOP ONLY: 3D CONNECTED ORBITS DIAL */}
        <div 
          className="lg:col-span-6 relative w-full h-auto max-w-[500px] lg:max-w-[520px] rounded-[32px] bg-white border border-[#E8EDF2]/40 shadow-[0_12px_40px_rgba(0,0,0,0.015)] flex flex-col items-center p-6 mx-auto hidden lg:flex"
        >
          {/* Dial container of fixed proportional boundaries */}
          <div 
            ref={graphicContainerRef}
            className="relative w-full aspect-square max-w-[430px] overflow-hidden flex items-center justify-center shrink-0 pointer-events-none"
          >
            {/* Inner Scaled Canvas wrapper */}
            <div 
              className="relative w-[500px] h-[500px] shrink-0 pointer-events-auto select-none"
              style={{ 
                transform: `scale(${scale})`, 
                transformOrigin: "center center"
              }}
            >
            
            {/* 1. Backdrop Grid Details & Ambient Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
              {/* Soft backdrop rings around center */}
              <circle cx="250" cy="220" r="160" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.04" />
              <circle cx="250" cy="220" r="135" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.03" />
              
              {/* Sleep line (Top) */}
              <motion.line 
                x1="250" y1="60" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3"
                style={{ opacity: sleepOpacity }}
              />
              {/* Nutrition line (Right) */}
              <motion.line 
                x1="410" y1="220" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3"
                style={{ opacity: nutritionOpacity }}
              />
              {/* Recovery line (Bottom) */}
              <motion.line 
                x1="250" y1="380" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3"
                style={{ opacity: recoveryOpacity }}
              />
              {/* Movement line (Left) */}
              <motion.line 
                x1="90" y1="220" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1.2" strokeOpacity="0.3" strokeDasharray="3 3"
                style={{ opacity: movementOpacity }}
              />
              
              {/* Coaching line (Top-Left) */}
              <motion.line 
                x1="155" y1="125" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"
                style={{ opacity: coachingOpacity }}
              />
              {/* AI Guidance line (Top-Right) */}
              <motion.line 
                x1="345" y1="125" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"
                style={{ opacity: aiOpacity }}
              />
              {/* Diagnostics line (Bottom-Right) */}
              <motion.line 
                x1="345" y1="315" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"
                style={{ opacity: diagnosticsOpacity }}
              />
              {/* Motivation Reward line (Bottom-Left) */}
              <motion.line 
                x1="155" y1="315" x2="250" y2="220" 
                stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="3 3"
                style={{ opacity: motivationOpacity }}
              />
            </svg>

            {/* 2. CENTRAL HUMAN NODE */}
            <motion.div
              style={{ opacity: humanOpacity, scale: humanScale }}
              className="absolute left-[250px] top-[220px] -ml-11 -mt-11 z-10 w-22 h-22 rounded-full bg-[#FAFBFB] flex items-center justify-center border-2 border-[#2BC48A]/40 shadow-[0_4px_24px_rgba(43,196,138,0.06)] group"
            >
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#2BC48A]/90 transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21C5.5 17 8.5 14 12 14C15.5 14 18.5 17 18.5 21" />
                </svg>
                {/* Outer soft dynamic breeding rings */}
                <div className="absolute inset-[-6px] rounded-full border border-[#2BC48A]/10 animate-pulse duration-1000" />
              </div>
            </motion.div>

            {/* 3. PRIMARY LAYER NODES (4 core behaviors) */}
            
            {/* SLEEP (Top) */}
            <motion.div
              style={{ opacity: sleepOpacity, scale: sleepScale }}
              className={`absolute left-[250px] top-[60px] -ml-10 -mt-10 z-20 w-20 h-20 rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "sleep" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.12)]" : "border-[#E8EDF2] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("sleep")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Moon className="w-5 h-5 text-[#2BC48A] mb-1" strokeWidth={2} />
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.12em] text-[#0F172A] uppercase">Sleep</span>
            </motion.div>

            {/* NUTRITION (Right) */}
            <motion.div
              style={{ opacity: nutritionOpacity, scale: nutritionScale }}
              className={`absolute left-[410px] top-[220px] -ml-10 -mt-10 z-20 w-20 h-20 rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "nutrition" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.12)]" : "border-[#E8EDF2] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("nutrition")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Leaf className="w-5 h-5 text-[#2BC48A] mb-1" strokeWidth={2} />
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.12em] text-[#0F172A] uppercase">Nutrition</span>
            </motion.div>

            {/* RECOVERY (Bottom) */}
            <motion.div
              style={{ opacity: recoveryOpacity, scale: recoveryScale }}
              className={`absolute left-[250px] top-[380px] -ml-10 -mt-10 z-20 w-20 h-20 rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "recovery" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.12)]" : "border-[#E8EDF2] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("recovery")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Heart className="w-5 h-5 text-[#2BC48A] mb-1" strokeWidth={2} />
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.12em] text-[#0F172A] uppercase">Recovery</span>
            </motion.div>

            {/* MOVEMENT (Left) */}
            <motion.div
              style={{ opacity: movementOpacity, scale: movementScale }}
              className={`absolute left-[90px] top-[220px] -ml-10 -mt-10 z-20 w-20 h-20 rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "movement" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.12)]" : "border-[#E8EDF2] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("movement")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Footprints className="w-5 h-5 text-[#2BC48A] mb-1" strokeWidth={2} />
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.12em] text-[#0F172A] uppercase">Movement</span>
            </motion.div>

            {/* 4. SECONDARY LAYER NODES (4 ecosystem facilitators) */}
            
            {/* COACHING (Top-Left) */}
            <motion.div
              style={{ opacity: coachingOpacity, scale: coachingScale }}
              className={`absolute left-[155px] top-[125px] -ml-[34px] -mt-[34px] z-20 w-[68px] h-[68px] rounded-full bg-slate-50 border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "coaching" ? "border-[#00ADC7] bg-white shadow-[0_6px_20px_rgba(0,173,199,0.1)]" : "border-[#E2E8F0] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("coaching")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <UserCheck className="w-4 h-4 text-[#00ADC7] mb-1" strokeWidth={2} />
              <span className="text-[8px] font-sans font-extrabold tracking-[0.08em] text-[#0F172A] uppercase">Coaching</span>
            </motion.div>

            {/* AI GUIDANCE (Top-Right) */}
            <motion.div
              style={{ opacity: aiOpacity, scale: aiScale }}
              className={`absolute left-[345px] top-[125px] -ml-[34px] -mt-[34px] z-20 w-[68px] h-[68px] rounded-full bg-slate-50 border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "ai" ? "border-[#A855F7] bg-white shadow-[0_6px_20px_rgba(168,85,247,0.1)]" : "border-[#E2E8F0] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("ai")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Sparkles className="w-4 h-4 text-[#A855F7] mb-1" strokeWidth={2} />
              <span className="text-[8px] font-sans font-extrabold tracking-[0.08em] text-[#0F172A] uppercase">AI</span>
            </motion.div>

            {/* DIAGNOSTICS (Bottom-Right) */}
            <motion.div
              style={{ opacity: diagnosticsOpacity, scale: diagnosticsScale }}
              className={`absolute left-[345px] top-[315px] -ml-[34px] -mt-[34px] z-20 w-[68px] h-[68px] rounded-full bg-slate-50 border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "diagnostics" ? "border-[#F97316] bg-white shadow-[0_6px_20px_rgba(249,115,22,0.1)]" : "border-[#E2E8F0] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("diagnostics")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <ClipboardList className="w-4 h-4 text-[#F97316] mb-1" strokeWidth={2} />
              <span className="text-[8px] font-sans font-extrabold tracking-[0.08em] text-[#0F172A] uppercase">Diagnosis</span>
            </motion.div>

            {/* MOTIVATION / REWARDS (Bottom-Left) */}
            <motion.div
              style={{ opacity: motivationOpacity, scale: motivationScale }}
              className={`absolute left-[155px] top-[315px] -ml-[34px] -mt-[34px] z-20 w-[68px] h-[68px] rounded-full bg-slate-50 border transition-all duration-300 flex flex-col items-center justify-center cursor-pointer ${
                hoveredNode === "motivation" ? "border-[#EAB308] bg-white shadow-[0_6px_20px_rgba(234,179,8,0.1)]" : "border-[#E2E8F0] shadow-sm"
              }`}
              onMouseEnter={() => setHoveredNode("motivation")}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <Trophy className="w-4 h-4 text-[#EAB308] mb-1" strokeWidth={2} />
              <span className="text-[8px] font-sans font-extrabold tracking-[0.08em] text-[#0F172A] uppercase">Rewards</span>
            </motion.div>

            </div>
          </div>

          {/* 5. Dynamic Context Description Bar at Bottom (Safely separated as static relative flex block) */}
          <div className="w-full border-t border-[#E8EDF2]/60 pt-5 mt-2 flex items-center justify-center font-sans text-center min-h-[56px]">
            {hoveredNode ? (
              <motion.p 
                key={hoveredNode}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11.5px] text-[#475467] font-medium leading-relaxed max-w-sm"
              >
                {hoveredNode === "sleep" && <span className="text-[#2BC48A] font-bold">Sleep</span>}
                {hoveredNode === "movement" && <span className="text-[#2BC48A] font-bold">Movement</span>}
                {hoveredNode === "nutrition" && <span className="text-[#2BC48A] font-bold">Nutrition</span>}
                {hoveredNode === "recovery" && <span className="text-[#2BC48A] font-bold">Recovery</span>}
                {hoveredNode === "coaching" && <span className="text-[#00ADC7] font-bold">Coaching</span>}
                {hoveredNode === "ai" && <span className="text-[#A855F7] font-bold">AI Guidance</span>}
                {hoveredNode === "diagnostics" && <span className="text-[#F97316] font-bold">Diagnostics</span>}
                {hoveredNode === "motivation" && <span className="text-[#EAB308] font-bold">Motivation</span>}
                {" — "}
                {hoveredNode === "sleep" && "Recovery, rest and critical cellular restoration"}
                {hoveredNode === "movement" && "Consistent daily physical actions & cardiovascular activity"}
                {hoveredNode === "nutrition" && "Nourishing choices, glucose stability and metabolic health"}
                {hoveredNode === "recovery" && "Stress mitigation, resilience, mindfulness and down-regulation"}
                {hoveredNode === "coaching" && "Human empathy, accountability, guidance and goal pacing"}
                {hoveredNode === "ai" && "Generative personalized recommendations & active feedback loop"}
                {hoveredNode === "diagnostics" && "Biomarker data tracking, test evaluations and regular inputs"}
                {hoveredNode === "motivation" && "Engaging rewards, habit reinforcement and consistent motivation"}
              </motion.p>
            ) : (
              <p className="text-[10px] text-[#94A3B8] tracking-widest uppercase font-extrabold max-w-sm">
                Hover elements to explore the ecosystem
              </p>
            )}
          </div>
        </div>

        {/* MOBILE & TABLET ONLY: PRECISE BENTO GRID EXPLORER (Avoids coordinate overlapping on narrow layouts) */}
        <div className="lg:hidden col-span-1 w-full mt-2">
          <div className="bg-white border border-[#E8EDF2] rounded-3xl p-5 shadow-[0_8px_30px_rgba(15,23,42,0.015)]">
            <div className="mb-4 text-center">
              <span className="text-[9px] font-mono tracking-widest text-[#2BC48A] uppercase font-black">
                Interactive Ecosystem
              </span>
              <h3 className="text-base font-black text-slate-800 tracking-tight mt-1">
                The 8 Lifestyle Transformation Pillars
              </h3>
              <p className="text-[10.5px] text-slate-400 mt-1 max-w-sm mx-auto leading-normal">
                Select any habit driver or system facilitator below to explore how they interact.
              </p>
            </div>

            {/* Grid of touch-friendly buttons with active states */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[
                { id: "sleep", label: "Sleep", icon: Moon, activeClass: "bg-[#2BC48A] border-[#2BC48A] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-[#2BC48A]/40 text-slate-700" },
                { id: "movement", label: "Move", icon: Footprints, activeClass: "bg-[#2BC48A] border-[#2BC48A] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-[#2BC48A]/40 text-slate-700" },
                { id: "nutrition", label: "Eat", icon: Leaf, activeClass: "bg-[#2BC48A] border-[#2BC48A] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-[#2BC48A]/40 text-slate-700" },
                { id: "recovery", label: "Rest", icon: Heart, activeClass: "bg-[#2BC48A] border-[#2BC48A] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-[#2BC48A]/40 text-slate-700" },
                { id: "coaching", label: "Coach", activeClass: "bg-[#00ADC7] border-[#00ADC7] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-cyan-300 text-slate-700", icon: UserCheck },
                { id: "ai", label: "AI Guide", activeClass: "bg-[#A855F7] border-[#A855F7] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-purple-300 text-slate-700", icon: Sparkles },
                { id: "diagnostics", label: "Labs", activeClass: "bg-[#F97316] border-[#F97316] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-orange-300 text-slate-700", icon: ClipboardList },
                { id: "motivation", label: "Rewards", activeClass: "bg-[#EAB308] border-[#EAB308] text-white", normalClass: "bg-slate-50 border-slate-100 hover:border-yellow-300 text-slate-700", icon: Trophy }
              ].map((pill) => {
                const IconComponent = pill.icon;
                const isActive = selectedMobilePillar === pill.id;
                return (
                  <button
                    key={pill.id}
                    onClick={() => setSelectedMobilePillar(pill.id)}
                    className={`flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                      isActive ? pill.activeClass : pill.normalClass
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mb-1 shrink-0" strokeWidth={isActive ? 2.5 : 1.8} />
                    <span className="text-[9px] font-extrabold tracking-tight truncate w-full">{pill.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Description Display Card */}
            <div className="bg-[#FAFBFB] rounded-2xl p-4 border border-[#E8EDF2] min-h-[90px] flex items-center justify-center text-center">
              <motion.div
                key={selectedMobilePillar}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col items-center"
              >
                <div className={`w-8 h-8 rounded-full mb-1.5 flex items-center justify-center ${
                  ["sleep", "movement", "nutrition", "recovery"].includes(selectedMobilePillar)
                    ? "bg-[#E8F8F2] text-[#2BC48A]"
                    : selectedMobilePillar === "coaching"
                    ? "bg-cyan-50 text-[#00ADC7]"
                    : selectedMobilePillar === "ai"
                    ? "bg-purple-50 text-[#A855F7]"
                    : selectedMobilePillar === "diagnostics"
                    ? "bg-orange-50 text-[#F97316]"
                    : "bg-yellow-50 text-[#EAB308]"
                }`}>
                  {selectedMobilePillar === "sleep" && <Moon className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "movement" && <Footprints className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "nutrition" && <Leaf className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "recovery" && <Heart className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "coaching" && <UserCheck className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "ai" && <Sparkles className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "diagnostics" && <ClipboardList className="w-4.5 h-4.5" />}
                  {selectedMobilePillar === "motivation" && <Trophy className="w-4.5 h-4.5" />}
                </div>

                <h4 className="text-[11.5px] font-black uppercase tracking-wider text-slate-800">
                  {selectedMobilePillar === "sleep" && "Sleep Restoration"}
                  {selectedMobilePillar === "movement" && "Cardio-Structural Movement"}
                  {selectedMobilePillar === "nutrition" && "Metabolic Nutrition"}
                  {selectedMobilePillar === "recovery" && "Physiological Recovery"}
                  {selectedMobilePillar === "coaching" && "High-Touch Human Coaching"}
                  {selectedMobilePillar === "ai" && "Generative AI Guidance"}
                  {selectedMobilePillar === "diagnostics" && "Integrative Clinical Diagnostics"}
                  {selectedMobilePillar === "motivation" && "Behavior-Habit Rewards"}
                </h4>

                <p className="text-[11px] text-slate-500 max-w-sm mt-1 leading-normal">
                  {selectedMobilePillar === "sleep" && "Recovery, rest and critical cellular restoration supporting cognitive wellness."}
                  {selectedMobilePillar === "movement" && "Consistent daily physical actions & cardiovascular pathways mapped to bio-feedback."}
                  {selectedMobilePillar === "nutrition" && "Nourishing choices, glucose stability, metabolic index scaling and dietary planning."}
                  {selectedMobilePillar === "recovery" && "Stress mitigation, resilience, physiological down-regulation and high cortisol management."}
                  {selectedMobilePillar === "coaching" && "Empathetic real specialists providing daily checkins, visual feedback, and customized boundaries."}
                  {selectedMobilePillar === "ai" && "24/7 hyper-personalized digital assistant evaluating physiological telemetry on the fly."}
                  {selectedMobilePillar === "diagnostics" && "Scheduled dynamic bio-marker review, baseline mapping, and routine diagnostic updates."}
                  {selectedMobilePillar === "motivation" && "Frictionless habits and routine gaming tied to corporate perks, premium rewards, and coins."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
