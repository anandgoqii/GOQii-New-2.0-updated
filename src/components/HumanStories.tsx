import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Play, X } from "lucide-react";
import SmartText from "./SmartText";

const STORIES = [
  {
    category: "INDIVIDUAL METABOLIC HEALTH",
    title: "Member Health Transformation Story",
    pillLabel: "Individuals",
    desc: "Every health journey starts with a single decision. Meet people who improved their health through coaching, consistency, and small daily actions.",
    subtext: "The biggest change wasn't my weight. It was building habits I could sustain.",
    metric: "15kg+",
    metricLabel: "Weight Loss",
    videoClip: "https://appcdn.goqii.com/storeimg/1455_1780915912.jpg",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
    videoUrl: "https://www.youtube.com/embed/wfUk6-A891k",
    impact: [
      { value: "15kg+ Loss", label: "Weight Journey" },
      { value: "Improved", label: "Metabolic Health" },
      { value: "365 Days", label: "Active Cohort" },
    ],
    capabilities: [
      "Custom Habit Calibration",
      "Weight & Metabolic Management",
      "Lifestyle Improvement Guides",
      "Continuous Companion Coaching"
    ],
    cta: "Get the App →"
  },
  {
    category: "CORPORATE HEALTH & WELLNESS",
    title: "HEALTHIER EMPLOYEES. STRONGER ORGANIZATIONS.",
    pillLabel: "Enterprises",
    desc: "Helping organizations improve workforce wellbeing, engagement, productivity, and long-term health outcomes through continuous health intelligence.",
    subtext: "We transformed employee wellness from a program into an everyday behavior.",
    metric: "85%",
    metricLabel: "Workforce Engagement",
    videoClip: "https://appcdn.goqii.com/storeimg/88400_1779880196.png",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
    videoUrl: "https://www.youtube.com/embed/ycTIWOo_F2g",
    impact: [
      { value: "85%", label: "Workforce Engagement" },
      { value: "50K+", label: "Employees Supported" },
      { value: "Fortune 500", label: "Deployments" },
    ],
    capabilities: [
      "Sleep Recovery Protocols",
      "Active Workplace Performance",
      "Metabolic Risk Screenings",
      "Continuous Human Coaching"
    ],
    cta: "Book a Demo →"
  },
  {
    category: "PUBLIC HEALTH INITIATIVES",
    title: "HEALTHIER COMMUNITIES. BETTER OUTCOMES.",
    pillLabel: "Public Health",
    desc: "Supporting governments and public health systems through prevention-first healthcare and continuous population engagement.",
    subtext: "Extending preventive healthcare beyond hospitals and into everyday life.",
    metric: "15M+",
    metricLabel: "Population Scale",
    videoClip: "https://appcdn.goqii.com/storeimg/46626_1779880112.png",
    colorOverlay: "rgba(43, 196, 138, 0.04)",
    videoUrl: "https://www.youtube.com/embed/jMxC0WCxNYA",
    impact: [
      { value: "Regional Scale", label: "Deployments" },
      { value: "Community Health", label: "Programs" },
      { value: "Population Health", label: "Initiatives" },
    ],
    capabilities: [
      "Preventive Care Protocols",
      "Population Health Intelligence",
      "Localized Community Engagement",
      "Decentralized Risk Interception"
    ],
    cta: "Talk to Sales →"
  },
];

export default function HumanStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const activeStory = STORIES[activeIndex];

  return (
    <div
      id="section-stories"
      className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-14 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      
      {/* 1. Subtitle & Title Header Layout */}
      <div className="w-full max-w-6xl mx-auto mb-10 text-left">
        {/* Section Index Marker */}
        <div className="flex items-center gap-4 text-xs mb-8 font-sans">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">09</span>
          <span className="text-[#E2E8F0] font-light text-sm">|</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase font-sans">
            HUMAN STORIES
          </span>
        </div>

        {/* Main High-contrast Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
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
          className="text-[#667085] text-sm sm:text-base font-medium mt-4 max-w-3xl"
        >
          Every health journey starts with a single decision. Meet people from different walks of life who chose to prioritise their health and went on to achieve remarkable changes through guidance, commitment and small daily improvements.
        </motion.p>
      </div>

      {/* 1.5. FLOATING STORY TABS */}
      <div className="w-full max-w-6xl mx-auto mb-10 flex justify-center px-4">
        <div className="flex flex-wrap sm:inline-flex bg-white border border-[#E8EDF2] p-1.5 rounded-[22px] sm:rounded-full shadow-[0_12px_32px_rgba(15,23,42,0.03)] backdrop-blur-md relative gap-1 sm:gap-2 isolate justify-center">
          {STORIES.map((story, i) => {
            const isActive = activeIndex === i;
            return (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  setIsPlayingVideo(false);
                }}
                className={`px-4 sm:px-8 py-2 sm:py-2.5 text-[11px] sm:text-sm font-extrabold tracking-tight rounded-full transition-all duration-300 relative select-none cursor-pointer ${
                  isActive
                    ? "text-[#0F172A]"
                    : "text-[#64748B] hover:text-[#0F172A]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStoryTab"
                    className="absolute inset-0 bg-[#F1F5F9] rounded-full -z-10 border border-[#E2E8F0]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {story.pillLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Large Immersive Viewport + Story Panel Grid */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-[#E8EDF2] rounded-[32px] overflow-hidden p-6 md:p-8 shadow-[0_24px_64px_rgba(15,23,42,0.015)]">
        
        {/* Left Column Visualizer: Realistic, full-color landscape background */}
        <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px] rounded-[24px] bg-slate-950 overflow-hidden flex items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
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

          {/* Floated Metric Glass Plate Card on top left of visualizer screen - Hidden on mobile to keep background image fully visible */}
          <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-20 hidden sm:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#0b0f17]/70 backdrop-blur-md border border-white/10 px-3.5 py-2.5 sm:px-6 sm:py-4 rounded-[16px] sm:rounded-[20px] text-white shadow-xl flex items-center gap-2.5 sm:gap-4"
              >
                <div className="text-xl sm:text-4xl font-black font-sans tracking-tight text-[#2BC48A]">
                  {activeStory.metric}
                </div>
                
                {/* Visual vertical separation stroke */}
                <div className="w-[1px] h-6 sm:h-8 bg-white/15" />

                <div className="flex flex-col text-left">
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-white uppercase leading-normal">
                    {activeStory.metricLabel}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-300 font-medium opacity-80 mt-0.5">
                    Metric Index
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Floated "Watch the story" Button with glass outline on bottom left - Circular & ultra-compact on mobile */}
          {activeStory.videoUrl && (
            <button
              onClick={() => setIsPlayingVideo(true)}
              className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2 sm:gap-3 bg-white p-2.5 sm:px-5 sm:py-3 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.25)] transition-all duration-300 group cursor-pointer"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Play className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-current ml-0.5" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-xs font-bold text-[#0F172A] leading-tight flex items-center">Watch the story</span>
                <span className="text-[10px] text-[#667085] font-medium mt-0.5">3:45 min</span>
              </div>
            </button>
          )}

          {/* Subtly animated dynamic green soundwave overlay situated at the bottom right */}
          <div className="absolute bottom-6 right-6 flex items-end gap-[4px] h-7 opacity-35 pointer-events-none z-20">
            <motion.div animate={{ height: [6, 20, 6] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [12, 28, 12] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [16, 22, 16] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="w-1 bg-[#2BC48A] rounded-full" />
            <motion.div animate={{ height: [8, 24, 8] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-1 bg-[#2BC48A] rounded-full" />
          </div>

        </div>

        {/* Right Column details panel content */}
        <div className="lg:col-span-6 flex flex-col justify-between py-2 pl-0 lg:pl-6 text-left">
          
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
              <p className="text-base sm:text-lg text-[#475467] leading-[1.6] font-normal font-sans">
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

              {/* Impact Section */}
              <div className="pt-4 border-t border-[#E8EDF2]">
                <h4 className="text-xs font-black tracking-[0.15em] text-[#64748B] uppercase mb-3">
                  Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeStory.impact?.map((item: any, idx: number) => (
                    <div key={idx} className="bg-[#FAFBFB] border border-[#E8EDF2] p-3 rounded-[12px] text-left">
                      <div className="text-base sm:text-lg font-black text-[#2BC48A] tracking-tight whitespace-normal break-words sm:truncate">
                        {item.value}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-[#64748B] font-semibold leading-tight mt-0.5 whitespace-normal break-words">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Capabilities */}
              <div className="pt-2">
                <h4 className="text-xs font-black tracking-[0.15em] text-[#64748B] uppercase mb-2.5">
                  Key Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {activeStory.capabilities?.map((cap: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-[#475467] font-medium font-sans">
                      <span className="text-[#2BC48A] font-bold mt-0.5">•</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Explore Link */}
              <div className="pt-4">
                <button className="inline-flex items-center gap-2 group text-sm font-extrabold text-[#0F172A] hover:text-[#2BC48A] transition-colors duration-300 cursor-pointer">
                  <span>{activeStory.cta}</span>
                </button>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>

      {/* 3. Pagination dots below main card block */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {STORIES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIndex(i);
              setIsPlayingVideo(false);
            }}
            className={`transition-all duration-300 ${
              activeIndex === i
                ? "w-6 h-2 bg-[#2BC48A] rounded-full"
                : "w-2 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1] rounded-full"
            }`}
          />
        ))}
      </div>

      {/* Video Modal Overlay Popup */}
      <AnimatePresence>
        {isPlayingVideo && activeStory.videoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsPlayingVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl aspect-video rounded-2xl bg-black border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button overlay */}
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 hover:scale-105 transition-all duration-200 cursor-pointer"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>

              {/* YouTube Iframe Embed */}
              <iframe
                src={`${activeStory.videoUrl}?autoplay=1&rel=0`}
                title={`${activeStory.title} video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
