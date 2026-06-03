import { motion } from "motion/react";
import { LineChart, Smartphone, Users, Sparkles, Trophy, ArrowRight, Zap } from "lucide-react";

export default function DynamicMotivation() {
  const steps = [
    {
      label: "DATA",
      desc: "Wearable telemetry & continuous biomarkers",
      icon: LineChart,
      bg: "bg-[#EFF6FF] text-[#3B82F6]",
    },
    {
      label: "COACHING",
      desc: "Expert guidance & continuous steering",
      icon: Users,
      bg: "bg-[#F5F3FF] text-[#8B5CF6]",
    },
    {
      label: "ACTION",
      desc: "Micro-habits & behavior milestones",
      icon: Sparkles,
      bg: "bg-[#FFF7ED] text-[#F97316]",
    },
    {
      label: "HABIT",
      desc: "Incentivized daily consistency",
      icon: Smartphone,
      bg: "bg-[#F0FDF4] text-[#16A34A]",
    },
    {
      label: "OUTCOME",
      desc: "Reduced clinical risk & high parameters",
      icon: Trophy,
      bg: "bg-[#FEF08A] text-[#854D0E]",
    },
  ];

  return (
    <div id="section-motivation" className="w-full bg-white py-20 md:py-28 border-b border-[#E8EDF2] relative overflow-hidden select-none">
      {/* Subtle details */}
      <div className="absolute top-[10%] right-[5%] w-[350px] h-[350px] rounded-full bg-[#2BC48A]/3 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[5%] left-[5%] w-[250px] h-[250px] rounded-full bg-blue-100/10 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-4.5 h-4.5 text-[#2BC48A]" />
              <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#2BC48A] uppercase">
                BEHAVIORAL ENGINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black tracking-tight text-[#0F172A] leading-tight font-sans">
              The Science of <br />
              Lasting Behavior Change
            </h2>
          </div>
          <div className="lg:col-span-5 text-left pb-1">
            <p className="text-[#64748B] text-[15px] sm:text-[16px] leading-[1.75] font-medium max-w-md">
              Most platforms collect data. GOQii transforms that data into systematic, life-saving habits. Through human coaching, gamified rewards, and AI guidance.
            </p>
          </div>
        </div>

        {/* The Action Flow Visual representation */}
        <div className="relative w-full mb-16 pt-6">
          <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-[#E2E8F0] via-[#2BC48A]/30 to-[#E2E8F0] z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div key={idx} className="relative group">
                  <motion.div
                    whileHover={{ y: -6 }}
                    className="bg-white border border-[#E8EDF2] p-6 rounded-2xl shadow-xs hover:border-[#2BC48A]/30 transition-all duration-300 text-center flex flex-col items-center h-full"
                  >
                    {/* Circle badge */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${st.bg} mb-5 shadow-sm transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" strokeWidth={2.2} />
                    </div>

                    {/* Step number and name */}
                    <span className="text-[10px] font-bold font-mono text-[#64748B] uppercase tracking-[0.2em] mb-1.5 block">
                      STAGE 0{idx + 1}
                    </span>
                    <h3 className="text-sm font-black text-[#0F172A] tracking-wider mb-2.5 block">
                      {st.label}
                    </h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </motion.div>

                  {/* Connecting Arrow for large screens */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-5 translate-x-1 z-20 text-[#2BC48A]/55 font-bold animate-pulse">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Explanatory summary panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#FAFBFB] rounded-3xl border border-[#E8EDF2] p-8 md:p-10 text-left">
          
          <div className="space-y-3">
            <span className="text-[10.5px] font-bold font-mono tracking-widest text-[#2BC48A] uppercase">
              COACHING & SUPPORT
            </span>
            <h4 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
              Human-first Accountability
            </h4>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              We pair continuous physiological feeds with real human experts. That active relationship is proven to create habit retention that algorithms alone cannot mimic.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-[10.5px] font-bold font-mono tracking-widest text-orange-500 uppercase">
              REWARDS & REINFORCEMENT
            </span>
            <h4 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
              Gamified Habit Loops
            </h4>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              Active physical loops unlock real-world reward points, premium reductions, and curated health products. Healthy actions become immediate financial gains.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-[10.5px] font-bold font-mono tracking-widest text-blue-500 uppercase">
              AI PREEMPTION
            </span>
            <h4 className="text-lg font-extrabold text-[#0F172A] tracking-tight">
              Dynamic Action Loops
            </h4>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              As your digital biological parameters vary, ALIVE O.S. calculates immediate custom alerts to prevent potential downstream clinical crises.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
