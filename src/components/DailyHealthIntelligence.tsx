import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, ComponentType } from "react";
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
  const [cycleCount, setCycleCount] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = FEATURES.findIndex((f) => f.id === prev);
        const nextIndex = (currentIndex + 1) % FEATURES.length;
        return FEATURES[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [cycleCount]);

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setCycleCount((prev) => prev + 1);
  };

  return (
    <div
      id="section-intelligence"
      className="relative min-h-screen w-full bg-[#FAFBFB] py-16 md:py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-6xl mx-auto z-10">
        
        {/* ================= HEADER LAYOUT ================= */}
        <div className="w-full text-left mb-16">
          {/* Tag, Numbering */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">06</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
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
                          
                          {/* Animated Progress line duration pointer (5s) */}
                          {isActive && (
                            <div className="w-24 h-[3px] bg-slate-200/60 rounded-full overflow-hidden mt-3.5 relative">
                              <motion.div 
                                key={`progress-${feat.id}-${cycleCount}`}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="h-full absolute left-0 top-0 rounded-full"
                                style={{ backgroundColor: feat.themeColor }}
                              />
                            </div>
                          )}
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
          <div className="lg:col-span-7 flex justify-center items-center w-full min-h-[450px] sm:min-h-[580px] relative">
            
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
              className="relative w-[280px] sm:w-[320px] h-[550px] sm:h-[620px] bg-[#090D16] rounded-[48px] p-2.5 shadow-[0_32px_80px_rgba(15,23,42,0.18)] border-[4px] border-[#222E42] z-10 overflow-hidden flex flex-col"
            >
              {/* Phone Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#090D16] rounded-full z-40 flex items-center justify-between px-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#1A2536] border border-[#2D3A4F]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#111A28]" />
              </div>

              {/* Speaker pill notch contour */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-14 h-1 bg-[#1A2536] rounded-full z-40" />

              {/* Status Bar */}
              <div className="flex justify-between items-center px-6 pt-3 pb-2 text-[9px] font-bold text-slate-400 z-30 font-sans tracking-wide">
                <span>9:41 AM</span>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-[1.5px] items-end h-2">
                    <span className="w-[1.5px] h-1 bg-slate-400 rounded-full" />
                    <span className="w-[1.5px] h-1.5 bg-slate-400 rounded-full" />
                    <span className="w-[1.5px] h-2 bg-slate-400 rounded-full" />
                  </div>
                  <span>5G</span>
                  <div className="w-4 h-2.5 border border-slate-400/80 rounded-sm p-[1px] flex items-center">
                    <div className="h-full w-3 bg-slate-400 rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Dynamic App Content Body */}
              <div className="flex-1 bg-[#0F172A] rounded-[38px] overflow-hidden relative flex flex-col p-4 shadow-inner border border-white/5">
                
                {/* Simulated App Header */}
                <div className="flex justify-between items-center mt-3 pb-3 border-b border-white/5 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#2BC48A] to-[#00ADC7] flex items-center justify-center text-white text-[10px] font-black">
                      Q
                    </div>
                    <span className="text-[11px] font-black font-sans text-white tracking-widest uppercase">
                      GOQII ALIVE
                    </span>
                  </div>
                  <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center font-mono text-[8px] text-white">
                    A
                  </div>
                </div>

                {/* Screens Slider with AnimatePresence */}
                <div className="flex-1 relative z-20 overflow-hidden mt-3 text-left">
                  <AnimatePresence mode="wait">
                    {activeTab === "nutrition" && (
                      <motion.div
                        key="nutri-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        {/* Nutrition Screen Header */}
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-black text-white/95">Nutrition AI</span>
                            <span className="text-[9px] font-semibold text-[#2BC48A] bg-[#2BC48A]/10 px-2 py-0.5 rounded-full">Camera Active</span>
                          </div>

                          {/* Scanned Food Viewport */}
                          <div className="relative aspect-[4/2.6] bg-slate-900 rounded-xl overflow-hidden border border-white/10 flex items-center justify-center group mb-3">
                            <img 
                              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=350&auto=format&fit=crop" 
                              alt="Scan Preview"
                              className="w-full h-full object-crop opacity-85"
                            />
                            {/* Scanning HUD overlay */}
                            <div className="absolute inset-0 border-2 border-dashed border-[#2BC48A]/30 rounded-xl m-2 animate-pulse flex items-center justify-center">
                              {/* Glowing bounding box */}
                              <div className="absolute left-6 top-5 w-24 h-16 border-2 border-[#2BC48A] rounded-lg">
                                <span className="absolute -top-4 -left-1 px-1.5 py-0.5 bg-[#2BC48A] text-white font-black text-[7px] tracking-wide rounded">94% AVOCADO</span>
                              </div>
                              <div className="absolute right-6 bottom-4 w-20 h-14 border-2 border-[#00ADC7] rounded-lg">
                                <span className="absolute -top-4 -left-1 px-1.5 py-0.5 bg-[#00ADC7] text-white font-black text-[7px] tracking-wide rounded">88% EGG</span>
                              </div>
                            </div>
                          </div>

                          {/* Food details */}
                          <div className="bg-slate-900/60 border border-white/5 rounded-xl p-3 flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                              <span className="text-[11px] font-bold text-white">Avocado & Egg Salad</span>
                              <span className="text-[11px] font-black text-[#2BC48A]">340 kcal</span>
                            </div>
                            
                            {/* Macro bars */}
                            <div className="grid grid-cols-3 gap-2 text-[8px] font-bold text-slate-400 mt-1">
                              <div>
                                <div className="flex justify-between mb-0.5">
                                  <span>Carbs</span>
                                  <span className="text-white">12g</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                  <div className="h-full bg-indigo-400 w-[30%]" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-0.5">
                                  <span>Protein</span>
                                  <span className="text-white">14g</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-400 w-[55%]" />
                                </div>
                              </div>
                              <div>
                                <div className="flex justify-between mb-0.5">
                                  <span>Fat</span>
                                  <span className="text-white">26g</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                  <div className="h-full bg-amber-400 w-[80%]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Nutrition Tips footer */}
                        <div className="bg-[#2BC48A]/10 border border-[#2BC48A]/20 rounded-xl p-2.5 flex items-start gap-2.5">
                          <Camera className="w-4 h-4 text-[#2BC48A] flex-shrink-0 mt-0.5" />
                          <p className="text-[9.5px] font-medium leading-normal text-slate-300">
                            Snap any meal. AI instantly estimates nutrients and synchronises to your coaching plan.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "safe-score" && (
                      <motion.div
                        key="safe-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-black text-white/95">S.A.F.E. Score Analysis</span>
                            <span className="text-[9px] font-semibold text-[#00ADC7] bg-[#00ADC7]/15 px-2 py-0.5 rounded-full">Optimal Pace</span>
                          </div>

                          {/* Massive Score Gauge widget card */}
                          <div className="bg-slate-900/40 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center relative mb-3">
                            {/* Circle speedometer clip */}
                            <div className="relative w-28 h-28 flex items-center justify-center mb-1">
                              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                <circle 
                                  cx="50" 
                                  cy="50" 
                                  r="40" 
                                  stroke="#1E293B" 
                                  strokeWidth="6" 
                                  fill="transparent" 
                                />
                                <circle 
                                  cx="50" 
                                  cy="50" 
                                  r="40" 
                                  stroke="#00ADC7" 
                                  strokeWidth="6" 
                                  fill="transparent" 
                                  strokeDasharray="251.2"
                                  strokeDashoffset="37.6" // 85% full circle path
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className="text-3xl font-black text-white tracking-tighter">85</span>
                                <span className="text-[8px] font-black text-[#00ADC7] uppercase tracking-wider">LONGEVITY GAP</span>
                              </div>
                            </div>
                            
                            <p className="text-[10px] text-slate-400 font-bold">Aging Pace: 0.82x (Delayed aging)</p>
                          </div>

                          {/* Interactive stats list */}
                          <div className="space-y-2">
                            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
                              <span className="text-[10px] text-slate-300 font-medium">Biological DNA Age</span>
                              <span className="text-[11px] font-black text-[#2BC48A]">34.5 Years</span>
                            </div>
                            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
                              <span className="text-[10px] text-slate-300 font-medium">Chronological Base</span>
                              <span className="text-[11px] font-black text-slate-400">38.0 Years</span>
                            </div>
                            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
                              <span className="text-[10px] text-slate-300 font-medium">Healthspan Projected Buffer</span>
                              <span className="text-[11px] font-black text-[#00ADC7]">+6.4 Years</span>
                            </div>
                          </div>
                        </div>

                        {/* S.A.F.E insight message bottom */}
                        <div className="bg-[#00ADC7]/10 border border-[#00ADC7]/20 rounded-xl p-2.5 flex items-start gap-2.5">
                          <Activity className="w-4 h-4 text-[#00ADC7] flex-shrink-0 mt-0.5" />
                          <p className="text-[9.5px] font-medium leading-normal text-slate-300">
                            Calculated dynamically from resting heart-rate variability, physical exercises, active recovery and sleep stages.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "locker" && (
                      <motion.div
                        key="locker-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-black text-white/95">Secure Health Locker</span>
                            <span className="text-[9.2px] font-semibold text-indigo-400 bg-indigo-400/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Lock className="w-2.5 h-2.5" /> ISO-Secure
                            </span>
                          </div>

                          {/* Quick Search */}
                          <div className="relative mb-3.5">
                            <input 
                              type="text" 
                              placeholder="Search lab tests, prescriptions..." 
                              disabled 
                              className="w-full bg-slate-900/80 border border-white/5 text-[9.5px] py-1.8 pl-8 pr-3 rounded-xl text-slate-400 placeholder:text-slate-600 focus:outline-none"
                            />
                            <Search className="w-3 h-3 text-slate-600 absolute left-2.5 top-1/2 -translate-y-1/2" />
                          </div>

                          {/* Folder lists or document items */}
                          <div className="space-y-2">
                            <div className="bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 rounded-xl p-3 flex justify-between items-center transition-colors">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                                  <FileText className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h5 className="text-[11px] font-bold text-white">Full Blood Panel Report</h5>
                                  <span className="text-[8.5px] text-slate-500 font-medium">May 21, 2026 • Wellness Clinic</span>
                                </div>
                              </div>
                              <span className="text-[9px] font-bold text-[#2BC48A] bg-[#2BC48A]/10 px-2 py-0.5 rounded-lg border border-[#2BC48A]/20">Synced</span>
                            </div>

                            <div className="bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 rounded-xl p-3 flex justify-between items-center transition-colors">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-[#2BC48A]/10 flex items-center justify-center text-[#2BC48A]">
                                  <TrendingUp className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h5 className="text-[11px] font-bold text-white">HbA1c Blood Glucose Trends</h5>
                                  <span className="text-[8.5px] text-slate-500 font-medium">Linked biomarker records</span>
                                </div>
                              </div>
                              <span className="text-[9px] font-bold text-white/90">5.4 %</span>
                            </div>

                            <div className="bg-slate-900/50 hover:bg-slate-900/80 border border-white/5 rounded-xl p-3 flex justify-between items-center transition-colors">
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                                  <FolderHeart className="w-4 h-4" />
                                </div>
                                <div className="text-left">
                                  <h5 className="text-[11px] font-bold text-white">Cardio-Vascular Fitness</h5>
                                  <span className="text-[8.5px] text-slate-500 font-medium">3 trend charts synced</span>
                                </div>
                              </div>
                              <span className="text-[9px] font-serif italic text-amber-400 font-bold">Smart AI</span>
                            </div>
                          </div>
                        </div>

                        {/* Locker info message footer */}
                        <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-xl p-2.5 flex items-start gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                          <p className="text-[9.5px] font-medium leading-normal text-slate-300">
                            Secure health repository verified to HIPAA and ISO/IEC regulatory and cloud privacy frameworks.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "coaching" && (
                      <motion.div
                        key="coaching-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        {/* Conversation window */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            {/* Profile Header */}
                            <div className="flex items-center gap-3 mb-4">
                              <div className="relative">
                                <img 
                                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
                                  alt="Coach Portrait" 
                                  className="w-9 h-9 rounded-full object-cover border border-[#2BC48A]"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-slate-900" />
                              </div>
                              <div className="text-left">
                                <h5 className="text-xs font-black text-white">Coach Neha Shah</h5>
                                <span className="text-[8.5px] text-[#2BC48A] font-extrabold tracking-widest uppercase">Certified Longevity Expert</span>
                              </div>
                            </div>

                            {/* Dialogue Boxes */}
                            <div className="space-y-3 mb-4">
                              <div className="bg-slate-900/80 border border-white/5 rounded-xl p-3 text-[10.5px] text-slate-300 max-w-[85%] self-start leading-relaxed">
                                <span className="text-[8.5px] font-black text-indigo-400 block mb-1">GOQii AI Summary</span>
                                Glycemic vector stays excellent today following your Avocado & Egg lunch. Keep active recovery up.
                              </div>

                              <div className="bg-[#2BC48A]/10 border border-[#2BC48A]/20 rounded-xl p-3 text-[10.5px] text-slate-200 max-w-[90%] self-start leading-relaxed">
                                <span className="text-[8.5px] font-black text-[#2BC48A] block mb-1">Coach Neha Shah</span>
                                Hey Anand! Wonderful metabolic parameters today. Let's aim to hit a 15-minute cellular recovery sequence this evening to secure your active streak.
                              </div>
                            </div>
                          </div>

                          {/* Recommended Actions */}
                          <div className="bg-slate-900/40 border border-white/5 rounded-xl p-2.5 mb-2">
                            <span className="text-[8px] font-black tracking-widest text-[#667085] uppercase block mb-2">Daily Coaching Goals</span>
                            <div className="space-y-1 text-[9px] font-bold text-slate-300">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-[#2BC48A]" />
                                <span className="line-through text-slate-500">Scan nutritious lunch photo</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-3.5 h-3.5 text-slate-600" />
                                <span>15m Evening Cellular Recovery</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Input bar mockup */}
                        <div className="border-t border-white/5 pt-2 flex gap-2">
                          <input 
                            type="text" 
                            placeholder="Message coach or ask AI..." 
                            disabled 
                            className="flex-1 bg-slate-900 border border-white/5 rounded-full px-4 py-2 text-[10px] text-slate-400"
                          />
                          <button className="w-7 h-7 rounded-full bg-[#2BC48A] text-white flex items-center justify-center">
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === "rewards" && (
                      <motion.div
                        key="rewards-screen"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3.5">
                            <span className="text-xs font-black text-white/95">Health Premium Rewards</span>
                            <span className="text-[9px] font-semibold text-amber-400 bg-amber-400/15 px-2 py-0.5 rounded-full flex items-center gap-1">
                              <Trophy className="w-2.5 h-2.5" /> Top Tier
                            </span>
                          </div>

                          {/* Golden Cash Wallet representation */}
                          <div className="bg-gradient-to-tr from-[#1E293B] to-slate-900 border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-28 relative mb-4">
                            <div className="flex justify-between items-start">
                              <div className="text-left">
                                <span className="text-[8.5px] font-black tracking-widest text-[#2BC48A] uppercase">Active Balance</span>
                                <h3 className="text-xl font-black text-white tracking-tight mt-0.5">1,250 UHT</h3>
                              </div>
                              <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                                <Trophy className="w-4 h-4" />
                              </div>
                            </div>
                            <div className="flex justify-between items-end text-[9px] font-bold text-slate-400">
                              <span>Universal Health Token</span>
                              <span className="text-[#2BC48A] flex items-center gap-0.5">
                                <Flame className="w-3 h-3 fill-current" /> 18 Days Streak
                              </span>
                            </div>
                          </div>

                          {/* Reward item progress */}
                          <div className="space-y-3">
                            <h6 className="text-[9px] font-black tracking-widest text-slate-500 uppercase text-left">Unlockable Milestones</h6>
                            
                            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-2.5 flex flex-col gap-2">
                              <div className="flex justify-between text-[10px] font-bold text-slate-300">
                                <span>Insurance Premium Credit (15%)</span>
                                <span className="text-[#2BC48A]">1,500 UHT</span>
                              </div>
                              {/* progress bar */}
                              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-[#2BC48A] to-[#00ADC7] w-[83%]" />
                              </div>
                              <span className="text-[8px] text-slate-500 text-left">Only 250 UHT tokens to unlock</span>
                            </div>

                            <div className="bg-slate-900/60 border border-white/5 rounded-xl p-2.5 flex justify-between items-center">
                              <span className="text-[10px] text-slate-400 font-bold line-through">Certified DNA Biomarker Screening</span>
                              <span className="text-[9px] font-black bg-[#2BC48A]/10 text-[#2BC48A] border border-[#2BC48A]/20 px-2 py-0.5 rounded-lg">Unlocked</span>
                            </div>
                          </div>
                        </div>

                        {/* Rewards Motivation bottom footer */}
                        <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-2.5 flex items-start gap-2.5">
                          <Flame className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                          <p className="text-[9.5px] font-medium leading-normal text-slate-300">
                            Consistency breeds health. Earn tokens directly when metabolic and cardiac indices hit daily parameters.
                          </p>
                        </div>
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

      </div>
    </div>
  );
}
