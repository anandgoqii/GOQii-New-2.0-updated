import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, ComponentType, useRef } from "react";
import { 
  Camera, 
  Apple, 
  Activity, 
  ShieldCheck, 
  FolderHeart, 
  FileText, 
  UserCheck, 
  MessageSquareCode, 
  Trophy, 
  Flame, 
  CheckCircle,
  TrendingUp,
  Search,
  Lock,
  Compass,
  ArrowRight
} from "lucide-react";

interface FeatureItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  themeColor: string;
  icon: ComponentType<{ className?: string }>;
}

const FEATURES: FeatureItem[] = [
  {
    id: "nutrition",
    number: "01",
    title: "Nutrition Intelligence",
    desc: "AI-powered meal recognition, calorie estimation and nutrition insights.",
    themeColor: "#2BC48A", // Emerald green
    icon: Apple,
  },
  {
    id: "safe-score",
    number: "02",
    title: "S.A.F.E. Score",
    desc: "Understand your pace of aging and measure lifestyle impact over time.",
    themeColor: "#00ADC7", // Teal
    icon: Activity,
  },
  {
    id: "locker",
    number: "03",
    title: "Health Locker",
    desc: "All your health records, reports and trends in one place.",
    themeColor: "#6366F1", // Indigo
    icon: FolderHeart,
  },
  {
    id: "coaching",
    number: "04",
    title: "Coaching & Guidance",
    desc: "Daily actions powered by real human coaches and AI.",
    themeColor: "#F59E0B", // Amber
    icon: UserCheck,
  },
  {
    id: "rewards",
    number: "05",
    title: "Rewards & Motivation",
    desc: "Earn rewards while building lasting healthy habits.",
    themeColor: "#EF4444", // Red
    icon: Trophy,
  },
];

export default function DailyHealthIntelligence() {
  const [activeTab, setActiveTab] = useState<string>("nutrition");
  const scrollTabsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollTabsRef.current) {
      const activeEl = scrollTabsRef.current.querySelector('[data-active="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center"
        });
      }
    }
  }, [activeTab]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
  };

  return (
    <div
      id="section-intelligence"
      className="relative min-h-0 lg:min-h-screen w-full bg-[#FAFBFB] py-14 lg:py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-7xl mx-auto z-10">
        
        {/* ================= HEADER LAYOUT ================= */}
        <div className="w-full text-left mb-16">
          {/* Tag, Numbering */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">07</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              DAILY HEALTH INTELLIGENCE
            </span>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
          >
            One App. <br />
            <span className="text-[#2BC48A]">Every Health Action.</span>
          </motion.h2>
        </div>

        {/* ================= TWO-COLUMN INTERACTIVE PANEL ================= */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: MINIMALIST INTERACTIVE FEATURE LIST */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="h-[1px] bg-[#E8EDF2] w-full mb-6" />
            
            <div className="flex flex-col gap-6">
              {FEATURES.map((feat) => {
                const isActive = activeTab === feat.id;
                const FeatIcon = feat.icon;
                return (
                  <div key={feat.id} className="relative group">
                    <button
                      onClick={() => handleTabClick(feat.id)}
                      className="w-full text-left focus:outline-none cursor-pointer flex gap-5 items-start py-4 px-3 rounded-2xl transition-all duration-300 hover:bg-[#F1F5F9]/50 relative"
                    >
                      {/* Interactive Icon badge instead of radio button */}
                      <div className="flex-shrink-0 mt-0.5 relative z-10">
                        <div 
                          className="w-11 h-11 rounded-2xl border flex items-center justify-center transition-all duration-300"
                          style={{ 
                            borderColor: isActive ? `${feat.themeColor}50` : "#E2E8F0",
                            backgroundColor: isActive ? `${feat.themeColor}12` : "#FFFFFF",
                            color: isActive ? feat.themeColor : "#64748B",
                            boxShadow: isActive ? `0 4px 12px ${feat.themeColor}15` : "none"
                          }}
                        >
                          <FeatIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      </div>

                      {/* Content block */}
                      <div className="flex-1 relative z-10">
                        <h4 
                          className="text-lg font-bold tracking-tight font-sans transition-colors duration-200"
                          style={{
                            color: isActive ? "#0F172A" : "#475467"
                          }}
                        >
                          {feat.title}
                        </h4>
                        
                        {/* Animated Expand Description */}
                        <div 
                          className="overflow-hidden transition-all duration-300 ease-in-out"
                          style={{ 
                            maxHeight: isActive ? "120px" : "0px",
                            opacity: isActive ? 1 : 0,
                            marginTop: isActive ? "6px" : "0px"
                          }}
                        >
                          <p className="text-sm font-medium text-[#64748B] leading-relaxed font-sans pr-4">
                            {feat.desc}
                          </p>
                          

                        </div>
                      </div>

                      {/* Side pointer accent line */}
                      {isActive && (
                        <motion.div 
                          layoutId="activePointerIndicator"
                          className="absolute left-0 top-3 bottom-3 w-[4px] rounded-r-md"
                          style={{ backgroundColor: feat.themeColor }}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Minimalist dividing line */}
                    <div className="h-[1px] bg-[#E8EDF2] w-full" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM MOBILE DEVICE MOCKUP */}
          <div className="lg:col-span-7 flex justify-center items-center w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[530px] xl:min-h-[580px] relative">
            
            {/* Ambient Background Glow matching the active feature */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`glow-${activeTab}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 w-72 h-72 sm:w-96 sm:h-96 rounded-full blur-[80px] pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  backgroundColor: FEATURES.find(f => f.id === activeTab)?.themeColor || "#2BC48A"
                }}
              />
            </AnimatePresence>

            {/* Hardware Chassis */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[240px] sm:max-w-[280px] lg:max-w-[305px] xl:max-w-[320px] h-[450px] sm:h-[530px] lg:h-[570px] xl:h-[620px] bg-[#090D16] rounded-[36px] sm:rounded-[48px] p-2 sm:p-2.5 shadow-[0_32px_80px_rgba(15,23,42,0.18)] border-[3px] sm:border-[4px] border-[#222E42] z-10 overflow-hidden flex flex-col"
            >
              {/* Dynamic App Content Body */}
              <div 
                className="flex-1 bg-[#0F172A] rounded-[32px] sm:rounded-[38px] overflow-hidden relative flex flex-col shadow-inner border border-white/5 p-0"
                style={{
                  transform: "translate3d(0,0,0)",
                  WebkitTransform: "translate3d(0,0,0)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden"
                }}
              >

                {/* Screens Slider with AnimatePresence */}
                <div className="flex-1 relative z-20 overflow-hidden text-left bg-[#0F172A]">
                  <AnimatePresence mode="wait">
                    {activeTab === "nutrition" && (
                      <motion.div
                        key="nutri-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                        style={{
                          transform: "translate3d(0,0,0)",
                          WebkitTransform: "translate3d(0,0,0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <img 
                          src="https://appcdn.goqii.com/storeimg/96020_1780557384.png" 
                          alt="Nutrition Intelligence"
                          className="w-full h-full object-cover bg-[#0F172A]"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            // @ts-ignore
                            imageRendering: "high-quality",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                          }}
                        />
                      </motion.div>
                    )}

                    {activeTab === "safe-score" && (
                      <motion.div
                        key="safe-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                        style={{
                          transform: "translate3d(0,0,0)",
                          WebkitTransform: "translate3d(0,0,0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <img 
                          src="https://appcdn.goqii.com/storeimg/82027_1780557626.png" 
                          alt="S.A.F.E. Score Analysis"
                          className="w-full h-full object-cover bg-[#0F172A]"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            // @ts-ignore
                            imageRendering: "high-quality",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                          }}
                        />
                      </motion.div>
                    )}

                    {activeTab === "locker" && (
                      <motion.div
                        key="locker-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                        style={{
                          transform: "translate3d(0,0,0)",
                          WebkitTransform: "translate3d(0,0,0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <img 
                          src="https://appcdn.goqii.com/storeimg/62662_1780558012.png" 
                          alt="Secure Health Locker"
                          className="w-full h-full object-cover bg-[#0F172A]"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            // @ts-ignore
                            imageRendering: "high-quality",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                          }}
                        />
                      </motion.div>
                    )}

                    {activeTab === "coaching" && (
                      <motion.div
                        key="coaching-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                        style={{
                          transform: "translate3d(0,0,0)",
                          WebkitTransform: "translate3d(0,0,0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <img 
                          src="https://appcdn.goqii.com/storeimg/83435_1780558423.png" 
                          alt="Coaching & Guidance"
                          className="w-full h-full object-cover bg-[#0F172A]"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            // @ts-ignore
                            imageRendering: "high-quality",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                          }}
                        />
                      </motion.div>
                    )}

                    {activeTab === "rewards" && (
                      <motion.div
                        key="rewards-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden"
                        style={{
                          transform: "translate3d(0,0,0)",
                          WebkitTransform: "translate3d(0,0,0)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden"
                        }}
                      >
                        <img 
                          src="https://appcdn.goqii.com/storeimg/70019_1780558199.png" 
                          alt="Rewards & Motivation"
                          className="w-full h-full object-cover bg-[#0F172A]"
                          referrerPolicy="no-referrer"
                          loading="eager"
                          style={{
                            imageRendering: "-webkit-optimize-contrast",
                            // @ts-ignore
                            imageRendering: "high-quality",
                            transform: "translate3d(0,0,0)",
                            WebkitTransform: "translate3d(0,0,0)",
                            backfaceVisibility: "hidden",
                            WebkitBackfaceVisibility: "hidden"
                          }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Simulated iPhone Home Swipe bar indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full z-30" />

              </div>
            </motion.div>
          </div>

        </div>

        {/* ================= MOBILE INTERACTIVE LAYOUT (lg:hidden) ================= */}
        <div className="block lg:hidden w-full mt-2">
          {/* Swipable Tabs Track */}
          <div 
            ref={scrollTabsRef}
            className="flex overflow-x-auto gap-2.5 pb-4 px-1 -mx-4 sm:mx-0 snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {FEATURES.map((feat) => {
              const isActive = activeTab === feat.id;
              const FeatIcon = feat.icon;
              return (
                <button
                  key={feat.id}
                  onClick={() => handleTabClick(feat.id)}
                  data-active={isActive ? "true" : "false"}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-bold tracking-tight transition-all duration-300 snap-center shrink-0 cursor-pointer"
                  style={{
                    borderColor: isActive ? `${feat.themeColor}50` : "#E2E8F0",
                    backgroundColor: isActive ? `${feat.themeColor}12` : "#FFFFFF",
                    color: isActive ? "#0F172A" : "#64748B",
                    boxShadow: isActive ? `0 4px 12px ${feat.themeColor}12` : "none"
                  }}
                >
                  <div 
                    className="w-5 h-5 rounded-md flex items-center justify-center transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? `${feat.themeColor}15` : "transparent",
                      color: isActive ? feat.themeColor : "#64748B"
                    }}
                  >
                    <FeatIcon className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat.title}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile screen mock + centered sub text */}
          <div className="flex flex-col items-center justify-center mt-2">
            {/* Ambient Background Glow matching the active feature */}
            <div className="relative w-full flex justify-center items-center min-h-[350px] xs:min-h-[390px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-glow-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.15, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-60 h-60 rounded-full blur-[60px] pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{
                    backgroundColor: FEATURES.find(f => f.id === activeTab)?.themeColor || "#2BC48A"
                  }}
                />
              </AnimatePresence>

              {/* Hardware Chassis */}
              <div
                className="relative w-full max-w-[210px] xs:max-w-[230px] h-[390px] xs:h-[430px] bg-[#090D16] rounded-[36px] p-1.5 xs:p-2 shadow-[0_20px_50px_rgba(15,23,42,0.12)] border-[3px] border-[#222E42] z-10 overflow-hidden flex flex-col"
              >
                <div 
                  className="flex-1 bg-[#0F172A] rounded-[31px] overflow-hidden relative flex flex-col shadow-inner border border-white/5 p-0"
                >
                  {/* Screens Slider with AnimatePresence */}
                  <div className="flex-1 relative z-20 overflow-hidden text-left bg-[#0F172A]">
                    <AnimatePresence mode="wait">
                      {FEATURES.map((feat) => {
                        if (feat.id !== activeTab) return null;
                        let imgSrc = "https://appcdn.goqii.com/storeimg/96020_1780557384.png";
                        if (feat.id === "safe-score") imgSrc = "https://appcdn.goqii.com/storeimg/82027_1780557626.png";
                        else if (feat.id === "locker") imgSrc = "https://appcdn.goqii.com/storeimg/62662_1780558012.png";
                        else if (feat.id === "coaching") imgSrc = "https://appcdn.goqii.com/storeimg/83435_1780558423.png";
                        else if (feat.id === "rewards") imgSrc = "https://appcdn.goqii.com/storeimg/70019_1780558199.png";

                        return (
                          <motion.div
                            key={`mobile-screen-${feat.id}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0 flex items-center justify-center overflow-hidden bg-[#0F172A]"
                          >
                            <img 
                              src={imgSrc} 
                              alt={feat.title}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                              loading="eager"
                            />
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </div>
                  {/* Simulated Home Indicator bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/30 rounded-full z-30" />
                </div>
              </div>
            </div>

            {/* Sub text that appears/animates below the screen */}
            <div className="w-full max-w-[340px] mt-4 px-2 text-center">
              <AnimatePresence mode="wait">
                {FEATURES.map((feat) => {
                  if (feat.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={`desc-${feat.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center"
                    >
                      <h3 
                        className="text-lg font-extrabold tracking-tight font-sans mb-1.5 transition-colors duration-200 animate-fade-in"
                        style={{ color: feat.themeColor }}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-sm font-medium text-[#475467] leading-relaxed font-sans">
                        {feat.desc}
                      </p>


                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
