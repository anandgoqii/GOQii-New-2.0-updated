import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Play } from "lucide-react";
import SmartText from "./SmartText";

const STORIES = [
  {
    category: "INSURANCE PARTNER",
    title: "Global Insurance Partner",
    pillLabel: "GLOBAL",
    desc: "Scaling prevention across millions of policyholders, turning silent actuarial risks into automated daily interventions and healthier lifespans.",
    subtext: "We integrated Alive O.S. directly with our digital claim layers, offering members tailored premium credits when metabolic vectors stay optimal.",
    metric: "34%",
    metricLabel: "Claims Reduction",
    videoClip: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
  },
  {
    category: "CORPORATE HEALTH",
    title: "Fortune 500 Corporate",
    pillLabel: "FORTUNE 500",
    desc: "Healthier employees, stronger organizations. Moving from administrative benefit logs to continuous prevention and active energy loops.",
    subtext: "Employees gained direct access to tailored sleep, nutrition, and metabolic guidance pathways—creating a physical workplace culture aligned to longevity.",
    metric: "85%",
    metricLabel: "Organization Engagement",
    videoClip: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
  },
  {
    category: "PUBLIC SECTOR",
    title: "Public Health Initiative",
    pillLabel: "PUBLIC SECTOR",
    desc: "Prevention at population scale. Establishing public health infrastructure that targets vascular and cellular health before hospitalization indexes surge.",
    subtext: "Deployed across national health channels to pre-emptively trace and guide glucose and biometric indices on millions of patients offline.",
    metric: "90%",
    metricLabel: "Patient Satisfaction",
    videoClip: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200&auto=format&fit=crop",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
  },
];

export default function HumanStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = STORIES[activeIndex];

  return (
    <div
      id="section-stories"
      className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      
      {/* 1. Subtitle & Title Header Layout */}
      <div className="w-full max-w-6xl mx-auto mb-10 text-left">
        {/* Section Index Marker */}
        <div className="flex items-center gap-4 text-xs mb-8 font-sans">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">07</span>
          <span className="text-[#E2E8F0] font-light text-sm">|</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
            HUMAN STORIES
          </span>
        </div>

        {/* Main High-contrast Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl lg:text-[72px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
        >
          Real people. <br />
          <span className="text-[#64748B]">Real </span>
          <span className="text-[#2BC48A]">transformation.</span>
        </motion.h2>

        {/* Dynamic subtext below heading as per the image attachment */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#667085] text-sm sm:text-base font-medium mt-4 max-w-xl"
        >
          Stories of impact, powered by prevention and intelligence.
        </motion.p>
      </div>

      {/* 2. Main Large Immersive Viewport + Story Panel Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-[#E8EDF2] rounded-[32px] overflow-hidden p-6 md:p-8 shadow-[0_24px_64px_rgba(15,23,42,0.015)]">
        
        {/* Left Column Visualizer: Realistic, full-color landscape background */}
        <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-[24px] bg-slate-950 overflow-hidden flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={activeStory.videoClip}
                alt={activeStory.title}
                className="w-full h-full object-cover brightness-[0.8] opacity-95 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              
              {/* Soft overlay matching design accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none z-[11]" />
              <div className="absolute inset-0" style={{ backgroundColor: activeStory.colorOverlay }} />
            </motion.div>
          </AnimatePresence>

          {/* Floated Metric Glass Plate Card on top left of visualizer screen */}
          <div className="absolute top-6 left-6 z-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#0b0f17]/70 backdrop-blur-md border border-white/10 px-6 py-4 rounded-[20px] text-white shadow-xl flex items-center gap-4"
              >
                <div className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#2BC48A]">
                  {activeStory.metric}
                </div>
                
                {/* Visual vertical separation stroke */}
                <div className="w-[1px] h-8 bg-white/15" />

                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold tracking-wider text-white uppercase leading-normal">
                    {activeStory.metricLabel}
                  </span>
                  <span className="text-[10px] text-slate-300 font-medium opacity-80 mt-0.5">
                    Metric Index
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floated "Watch the story" Button with glass outline on bottom left */}
          <button className="absolute bottom-6 left-6 z-20 flex items-center gap-3 bg-white px-5 py-3 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 group">
            <div className="w-8 h-8 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] group-hover:scale-110 transition-transform duration-300">
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-bold text-[#0F172A] leading-tight flex items-center">Watch the story</span>
              <span className="text-[10px] text-[#667085] font-medium mt-0.5">3:45 min</span>
            </div>
          </button>

          {/* Subtly animated dynamic green soundwave overlay situated at the bottom right */}
          <div className="absolute bottom-6 right-6 flex items-end gap-[4px] h-7 opacity-35 pointer-events-none z-20">
            <motion.div animate={{ height: [6, 20, 6] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [12, 28, 12] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [16, 22, 16] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [8, 24, 8] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-1 bg-[#2BC48A] rounded-full" />
          </div>

        </div>

        {/* Right Column details panel content */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4 pl-0 lg:pl-6 text-left">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col space-y-6"
            >
              {/* Category label styling matched exactly */}
              <div className="text-[11px] font-sans font-extrabold tracking-[0.2em] text-[#2BC48A] uppercase">
                {activeStory.category}
              </div>

              {/* Title typography */}
              <h3 className="text-3xl sm:text-[34px] font-black font-sans text-[#0F172A] tracking-tight leading-[1.1]">
                {activeStory.title}
              </h3>

              {/* Story Description paragraph using SmartText to format highlights */}
              <p className="text-base sm:text-lg text-[#0F172A] leading-[1.65] font-normal font-sans">
                <SmartText>{activeStory.desc}</SmartText>
              </p>

              {/* Quote Block Container */}
              <div className="relative border-l-2 border-[#2BC48A] pl-5 py-0.5 text-left flex gap-3">
                <span className="text-4xl font-serif text-[#2BC48A] leading-none select-none -mt-1">
                  “
                </span>
                <p className="text-sm text-[#475467] leading-[1.65] font-semibold italic">
                  {activeStory.subtext}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Pill Selector Panel Navigation */}
          <div className="mt-8 pt-8 border-t border-[#E8EDF2]">
            <span className="text-[10px] font-mono tracking-widest text-[#667085] uppercase mb-4 block font-bold">
              SELECT PARTNER CHANNEL
            </span>
            <div className="flex flex-wrap gap-2.5">
              {STORIES.map((story, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`px-5 py-2.5 text-[10px] font-bold rounded-full tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0F172A] text-white shadow-md shadow-slate-900/10"
                        : "bg-white text-[#667085] border border-[#E8EDF2] hover:bg-[#F8FAFB] hover:text-[#0F172A]"
                    }`}
                  >
                    {story.pillLabel}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

      {/* 3. Pagination dots below main card block */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`transition-all duration-300 ${
              activeIndex === i
                ? "w-6 h-2 bg-[#2BC48A] rounded-full"
                : "w-2 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1] rounded-full"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
