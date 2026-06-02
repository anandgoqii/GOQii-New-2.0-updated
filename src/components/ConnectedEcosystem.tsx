import { motion } from "motion/react";
import { useState } from "react";
import { User, Building2, FlaskConical, Shield, Hospital, Users, Sparkles } from "lucide-react";

const STAKEHOLDERS = [
  {
    id: "individuals",
    title: "Individuals",
    subtitle: "Better health, every day",
    icon: User,
    side: "left",
    style: { left: "85px", top: "71px" },
    // SVG Connection Coordinates in a 1000x520 box
    linePath: "M 440,210 C 390,210 380,110 350,110",
    dotStart: { x: 440, y: 210 },
    dotEnd: { x: 350, y: 110 }
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Healthier teams, stronger organizations",
    icon: Building2,
    side: "left",
    style: { left: "35px", top: "221px" },
    linePath: "M 420,260 L 300,260",
    dotStart: { x: 420, y: 260 },
    dotEnd: { x: 300, y: 260 }
  },
  {
    id: "pharma",
    title: "Pharma",
    subtitle: "Better adherence, better outcomes",
    icon: FlaskConical,
    side: "left",
    style: { left: "85px", top: "371px" },
    linePath: "M 440,310 C 390,310 380,410 350,410",
    dotStart: { x: 440, y: 310 },
    dotEnd: { x: 350, y: 410 }
  },
  {
    id: "insurance",
    title: "Insurance",
    subtitle: "Lower risk, better outcomes",
    icon: Shield,
    side: "right",
    style: { left: "650px", top: "71px" },
    linePath: "M 560,210 C 610,210 620,110 650,110",
    dotStart: { x: 560, y: 210 },
    dotEnd: { x: 650, y: 110 }
  },
  {
    id: "hospitals",
    title: "Hospitals",
    subtitle: "Care beyond the hospital",
    icon: Hospital,
    side: "right",
    style: { left: "700px", top: "221px" },
    linePath: "M 580,260 L 700,260",
    dotStart: { x: 580, y: 260 },
    dotEnd: { x: 700, y: 260 }
  },
  {
    id: "publichealth",
    title: "Public Health",
    subtitle: "Healthier communities, stronger nations",
    icon: Users,
    side: "right",
    style: { left: "650px", top: "371px" },
    linePath: "M 560,310 C 610,310 620,410 650,410",
    dotStart: { x: 560, y: 310 },
    dotEnd: { x: 650, y: 410 }
  }
];

export default function ConnectedEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  return (
    <div
      id="section-ecosystem"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-16 px-4 sm:px-6 md:px-16"
    >
      {/* Background Section Subtitle Anchor Label */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-start px-2 relative z-10">
        <div className="flex items-center gap-4 text-xs mb-8 font-sans">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">04</span>
          <span className="text-[#E2E8F0] font-light text-sm">|</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
            Connected Ecosystem
          </span>
        </div>
      </div>

      {/* Main Core Centered Typography Headers */}
      <div className="w-full max-w-4xl mx-auto text-center mb-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.05] mb-6 font-sans">
          One ecosystem.<br />
          Every <span className="text-[#2BC48A]">stakeholder.</span>
        </h2>
        <p className="text-[#667085] text-base md:text-[17px] font-sans font-medium tracking-tight max-w-xl mx-auto mt-4 leading-relaxed">
          GOQii connects individuals, organizations and systems through a unified intelligence platform.
        </p>
      </div>

      {/* 
        DIAGRAM BLOCK:
        - Desktop mode (lg and above): Floating curved vectors 
        - Tablet/Mobile mode (below lg): Grid columns
      */}
      <div className="relative w-full max-w-5xl mt-6 overflow-x-auto xl:overflow-x-visible">
        
        {/* ================= DESKTOP STAKEHOLDER GRAPHICS AT VIEW xl+ ================= */}
        <div className="hidden xl:block relative w-[1000px] h-[520px] mx-auto select-none">
          
          {/* Transparent Infinite mesh pattern layer */}
          <div className="absolute inset-0 bg-[radial-gradient(#E8EDF2_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          {/* SVG Connection Cables */}
          <svg viewBox="0 0 1000 520" className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <defs>
              <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2BC48A" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#2BC48A" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#2BC48A" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {STAKEHOLDERS.map((node) => {
              const isSelected = hoveredNode === node.id;
              return (
                <g key={`cable-${node.id}`} className="transition-opacity duration-300">
                  {/* Pale baseline cable path */}
                  <path
                    d={node.linePath}
                    fill="none"
                    stroke={isSelected ? "#2BC48A" : "#E2E8F0"}
                    strokeWidth={isSelected ? "2.5" : "1.8"}
                    strokeDasharray={isSelected ? "none" : "3 3"}
                    className="transition-all duration-300"
                  />

                  {/* Active bright light aura representation */}
                  {isSelected && (
                    <path
                      d={node.linePath}
                      fill="none"
                      stroke="#2BC48A"
                      strokeWidth="5"
                      strokeOpacity="0.12"
                      className="blur-xs"
                    />
                  )}

                  {/* Node Connector End-Points */}
                  {/* Anchor Point inside Concentric Hub */}
                  <circle
                    cx={node.dotStart.x}
                    cy={node.dotStart.y}
                    r={isSelected ? 5.5 : 4}
                    fill="#2BC48A"
                    className="transition-all duration-300 fill-current opacity-85"
                  />
                  
                  {/* Anchor Point touching the Card boundary */}
                  <circle
                    cx={node.dotEnd.x}
                    cy={node.dotEnd.y}
                    r={isSelected ? 5.5 : 4}
                    fill="#2BC48A"
                    className="transition-all duration-300 fill-current opacity-85"
                  />

                  {/* Orbit Glowing Flowing Transit Particles */}
                  <path
                    d={node.linePath}
                    fill="none"
                    stroke="url(#glow-grad)"
                    strokeWidth="3.5"
                    strokeDasharray="18 120"
                    className="stroke-lime-500 opacity-60"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;300"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              );
            })}
          </svg>

          {/* Central Active Hub Concentric Ring Assembly */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center pointer-events-none">
            {/* Ambient background blur circles */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-[#2BC48A]/5 bg-gradient-to-tr from-[#2BC48A]/3 to-transparent blur-md" />
            <div className="absolute w-[220px] h-[220px] rounded-full border border-[#2BC48A]/10 animate-pulse-slow" />
            <div className="absolute w-[184px] h-[184px] rounded-full border border-dashed border-[#2BC48A]/15" />

            {/* Platform Central Sphere Solid Card */}
            <div className="relative w-[160px] h-[160px] rounded-full bg-white border border-[#E8EDF2] flex flex-col items-center justify-center p-4 shadow-[0_16px_40px_rgba(43,196,138,0.06)] hover:shadow-[0_20px_48px_rgba(43,196,138,0.12)] transition-shadow duration-300">
              <span className="text-[9.5px] font-sans font-extrabold tracking-[0.25em] text-[#2BC48A]/85 uppercase mb-1">PLATFORM</span>
              <span className="font-extrabold text-[28px] tracking-tighter text-[#0F172A] leading-none">GOQii</span>
              
              {/* Internal pulsing soft dot indicator */}
              <div className="absolute bottom-[30px] flex items-center justify-center">
                <span className="absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#2BC48A] opacity-35 animate-ping" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-[#2BC48A]" />
              </div>
            </div>
          </div>

          {/* Render Stakeholder Cards in Desktop Space (Floating absolute coordinates) */}
          {STAKEHOLDERS.map((node) => {
            const IconComp = node.icon;
            const isHovered = hoveredNode === node.id;
            return (
              <motion.div
                key={node.id}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                style={node.style}
                className={`absolute w-[265px] h-[78px] bg-white border rounded-full px-5 py-3.5 flex items-center gap-4 cursor-pointer transition-all duration-300 z-20 group ${
                  isHovered 
                    ? "border-[#2BC48A] shadow-[0_12px_30px_rgba(43,196,138,0.07)]" 
                    : "border-[#E8EDF2]/90 shadow-[0_8px_24px_rgba(0,0,0,0.02)] hover:border-[#2BC48A] hover:shadow-[0_12px_30px_rgba(43,196,138,0.05)]"
                }`}
                whileHover={{ y: -3, scale: 1.015 }}
              >
                {/* Custom circular icon box connected beautifully */}
                <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center border transition-all duration-300 ${
                  isHovered
                    ? "bg-[#2BC48A]/5 border-[#2BC48A] text-[#2BC48A]"
                    : "bg-[#FAFBFB] border-[#E8EDF2] text-[#667085] group-hover:text-[#2BC48A]"
                }`}>
                  <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Text Labels block */}
                <div className="flex-1 min-w-0 pr-2">
                  <h4 className={`text-[14.5px] font-bold tracking-tight leading-snug transition-colors duration-300 ${
                    isHovered ? "text-[#2BC48A]" : "text-[#0F172A]"
                  }`}>
                    {node.title}
                  </h4>
                  <p className="text-[11.5px] text-[#667085] font-sans truncate leading-normal font-medium mt-0.5">
                    {node.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>


        {/* ================= RESPONSIVE TABLET/MOBILE STACK AT < xl ================= */}
        <div className="xl:hidden w-full max-w-4xl mx-auto flex flex-col gap-5 px-3">
          
          {/* central floating header pill */}
          <div className="mx-auto w-40 py-3.5 rounded-full border border-[#E8EDF2] bg-white flex flex-col items-center justify-center shadow-xs mb-4">
            <span className="text-[8px] font-sans font-extrabold tracking-[0.25em] text-[#2BC48A]/85 uppercase">PLATFORM</span>
            <span className="font-extrabold text-[#0F172A] text-lg tracking-tight">GOQii</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {STAKEHOLDERS.map((node) => {
              const IconComp = node.icon;
              return (
                <div
                  key={`mob-${node.id}`}
                  className="bg-white border border-[#E8EDF2] rounded-[20px] p-5 flex items-center gap-4 shadow-[0_4px_16px_rgba(0,0,0,0.015)] active:border-[#2BC48A] transition-colors"
                >
                  <div className="w-[42px] h-[42px] rounded-full bg-[#FAFBFB] border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[14.5px] font-bold text-[#0F172A] tracking-tight">
                      {node.title}
                    </h4>
                    <p className="text-[11.5px] text-[#667085] mt-0.5 font-sans leading-normal">
                      {node.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* FOOTER CORE INTEL LAYER AND SEAMLESS CONNECTIONS */}
      <div className="mt-14 relative z-10 flex items-center justify-center px-4 text-center">
        <div className="inline-flex items-center gap-3 bg-white border border-[#E2E8F0] px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(43,196,138,0.025)] hover:shadow-[0_12px_36px_rgba(43,196,138,0.05)] transition-all duration-300">
          <div className="w-8 h-8 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A]">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <span className="text-[13.5px] font-sans font-medium text-[#475467] leading-relaxed">
            One intelligence layer. <span className="text-[#2BC48A] font-bold">Seamless connections.</span> Real impact.
          </span>
        </div>
      </div>

    </div>
  );
}
