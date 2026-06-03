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
    { label: "For Individuals", target: "section-solution", icon: User },
    { label: "For Organizations", target: "section-organizations", icon: Building2 },
    { label: "Research & Government", target: "section-scale-metrics", icon: Landmark },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-lg select-none">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="w-full bg-white/95 dark:bg-[#0B1220]/95 backdrop-blur-md border border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_12px_36px_rgba(15,23,42,0.15)] dark:shadow-[0_12px_36px_rgba(0,0,0,0.5)] rounded-full px-4 py-2 flex items-center justify-between gap-1"
      >
        <div className="hidden sm:flex items-center pl-2 shrink-0">
          <span className="text-[9px] font-black tracking-widest text-[#64748B] uppercase font-mono">
            ROUTES
          </span>
        </div>
        
        <div className="flex items-center justify-center gap-1.5 w-full sm:w-auto">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <button
                key={idx}
                onClick={() => handleScrollTo(p.target)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[11px] font-extrabold text-[#475467] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-200 cursor-pointer text-center shrink-0 uppercase tracking-wider border border-transparent hover:border-[#2BC48A]/20"
              >
                <Icon className="w-3.5 h-3.5 text-[#2BC48A]" />
                <span>{p.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
