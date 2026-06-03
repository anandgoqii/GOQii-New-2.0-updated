import { motion } from "motion/react";
import { Check, X, ShieldCheck } from "lucide-react";

export default function WhyGOQiiWins() {
  const comparisons = [
    {
      criteria: "Primary Objective",
      others: "Collect & display basic heart rate, step count, and sleep data.",
      goqii: "Creates sustainable behavior change through active expert feedback.",
      othersCheck: false,
      goqiiCheck: true,
    },
    {
      criteria: "System Architecture",
      others: "Isolated wellness application or basic dashboard widget.",
      goqii: "An integrated healthcare & longevity operating system (ALIVE O.S.).",
      othersCheck: false,
      goqiiCheck: true,
    },
    {
      criteria: "Core Offering",
      others: "Standard commercial wearables with high obsolescence rates.",
      goqii: "Continuous health intelligence, bio-diagnostics, and real coaching.",
      othersCheck: false,
      goqiiCheck: true,
    },
    {
      criteria: "Financial Value",
      others: "User registers data with zero impact on premium costs.",
      goqii: "Up to 34% reduction in insurance claims via validated health scores.",
      othersCheck: false,
      goqiiCheck: true,
    },
  ];

  return (
    <div id="section-why-goqii" className="w-full bg-[#0B1220] py-20 md:py-28 text-white relative overflow-hidden select-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-white/5 opacity-40 pointer-events-none rounded-3xl" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-[#2BC48A]" />
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#64748B] uppercase font-bold">
              THE DEFENSIVE ADVANTAGE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white leading-tight">
            Why GOQii Wins
          </h2>
          <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-5 mx-auto mb-6" />
          <p className="text-[#64748B] text-sm font-medium leading-relaxed">
            A side-by-side comparison illustrating how GOQii delivers long-term medical and financial defensibility over standard physical tracking applications.
          </p>
        </div>

        {/* Dynamic comparison tables */}
        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-white/5 py-4 px-6 text-[11px] font-bold tracking-wider uppercase text-[#64748B] font-mono text-left">
            <div className="md:col-span-3">CRITERIA</div>
            <div className="md:col-span-4 mt-2 md:mt-0">TRADITIONAL WEARABLES / OTHERS</div>
            <div className="md:col-span-5 mt-2 md:mt-0 text-[#2BC48A]">THE GOQII DIFFERENCE</div>
          </div>

          <div className="divide-y divide-white/10">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 py-6 px-6 items-center text-left gap-4 hover:bg-white/2 transition-colors">
                
                {/* Criteria */}
                <div className="md:col-span-3">
                  <span className="text-xs font-black tracking-normal uppercase text-white/95">
                    {item.criteria}
                  </span>
                </div>

                {/* Others */}
                <div className="md:col-span-4 flex items-start gap-2.5">
                  <div className="w-4.5 h-4.5 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" strokeWidth={3} />
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed font-semibold">
                    {item.others}
                  </p>
                </div>

                {/* GOQii */}
                <div className="md:col-span-5 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#2BC48A]/10 text-[#2BC48A] flex items-center justify-center shrink-0 mt-0.5 border border-[#2BC48A]/20">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  <p className="text-xs text-white/90 leading-relaxed font-bold">
                    {item.goqii}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
