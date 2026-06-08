import { useState, useEffect, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Building2, ShieldEllipsis, ShieldCheck } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  targetId: string;
}

const TABS: TabItem[] = [
  {
    id: "individuals",
    label: "Individuals",
    icon: User,
    targetId: "section-intelligence",
  },
  {
    id: "enterprises",
    label: "Enterprises",
    icon: Building2,
    targetId: "section-ecosystem",
  },
  {
    id: "insurers",
    label: "Insurers",
    icon: ShieldCheck,
    targetId: "section-stories",
  },
  {
    id: "public-health",
    label: "Public Health",
    icon: ShieldEllipsis,
    targetId: "section-trust",
  },
];

export default function FloatingTabs() {
  const [activeTab, setActiveTab] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Only show when scrolled past the hero section
      if (scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Detect active section
      let currentActive = "";
      for (const tab of TABS) {
        const element = document.getElementById(tab.targetId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the element is within the viewport
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.1) {
            currentActive = tab.id;
          }
        }
      }
      
      if (currentActive) {
        setActiveTab(currentActive);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once at start
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (targetId: string, id: string) => {
    setActiveTab(id);
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      // Offset for sticky header
      const offsetY = elementPosition - 85; 
      
      window.scrollTo({
        top: offsetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] pointer-events-auto"
        >
          <div className="flex items-center bg-[#0F172A]/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-700/30 rounded-full px-2 py-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.3)] gap-1 md:gap-2">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.targetId, tab.id)}
                  className={`flex items-center gap-1.5 md:gap-2 px-4 md:px-6 py-2.5 rounded-full text-xs md:text-sm font-bold tracking-tight transition-all duration-300 relative cursor-pointer select-none ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFloatingIndicator"
                      className="absolute inset-0 bg-[#2BC48A] rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 26 }}
                      style={{ boxShadow: "0 4px 14px rgba(43, 196, 138, 0.4)" }}
                    />
                  )}
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
