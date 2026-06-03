import { motion } from "motion/react";
import { User, Building2, Landmark } from "lucide-react";

export default function PersonaNavigation() {
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 100;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const personas = [
    { 
      fullLabel: "For Individuals", 
      shortLabel: "Individuals", 
      target: "section-solution", 
      icon: User 
    },
    { 
      fullLabel: "For Organizations", 
      shortLabel: "Organizations", 
      target: "section-organizations", 
      icon: Building2 
    },
    { 
      fullLabel: "Research & Government", 
      shortLabel: "Gov & Research", 
      target: "section-scale-metrics", 
      icon: Landmark 
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-[22rem] sm:max-w-xl md:max-w-2xl select-none">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md border border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_12px_36px_rgba(15,23,42,0.12)] rounded-full px-2 sm:px-4 py-1.5 flex items-center justify-center sm:justify-between gap-1"
      >
        <div className="hidden md:flex items-center pl-2 shrink-0">
          <span className="text-[9px] font-black tracking-widest text-[#64748B] uppercase font-mono">
            ROUTES
          </span>
        </div>
        
        <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-2 w-full sm:w-auto">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => handleScrollTo(p.target)}
                className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-2 rounded-full text-[9px] sm:text-[10.5px] font-extrabold text-[#334155] dark:text-[#E2E8F0] hover:text-[#2BC48A] dark:hover:text-[#2BC48A] hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer text-center shrink-0 uppercase tracking-wider border border-transparent hover:border-[#2BC48A]/20"
              >
                <Icon className="w-3.5 h-3.5 text-[#2BC48A] shrink-0" />
                <span>
                  <span className="hidden sm:inline">{p.fullLabel}</span>
                  <span className="inline sm:hidden">{p.shortLabel}</span>
                </span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
