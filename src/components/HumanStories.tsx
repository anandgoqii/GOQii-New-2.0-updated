import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import SmartText from "./SmartText";

const STORIES = [
  {
    category: "Insurance Partner",
    title: "Global Insurance Partner",
    desc: "Scaling prevention across millions of policyholders, turning silent actuarial risks into automated daily interventions and healthier lifespans.",
    subtext: "We integrated Alive O.S. directly with our digital claim layers, offering members tailored premium credits when metabolic vectors stay optimal.",
    metric: "34%",
    metricLabel: "Claims Reduction",
    themeColor: "indigo-400",
    videoClip: "https://picsum.photos/seed/insurance/1200/800?blur=5",
    colorOverlay: "rgba(99, 102, 241, 0.08)",
  },
  {
    category: "Corporate health",
    title: "Fortune 500 Corporate",
    desc: "Healthier employees, stronger organizations. Moving from administrative benefit logs to continuous prevention and active energy loops.",
    subtext: "Employees gained direct access to tailored sleep, nutrition, and metabolic guidance pathways—creating a physical workplace culture aligned to longevity.",
    metric: "85%",
    metricLabel: "Engagement",
    themeColor: "emerald-400",
    videoClip: "https://picsum.photos/seed/corporate/1200/800?blur=5",
    colorOverlay: "rgba(43, 196, 138, 0.08)",
  },
  {
    category: "Public Health",
    title: "Public Health Initiative",
    desc: "Prevention at population scale. Establishing public health infrastructure that targets vascular and cellular health before hospitalization indexes surge.",
    subtext: "Deployed across national health channels to pre-emptively trace and guide glucose and biometric indices on millions of patients offline.",
    metric: "90%",
    metricLabel: "Patient Satisfaction",
    themeColor: "cyan-400",
    videoClip: "https://picsum.photos/seed/public/1200/800?blur=5",
    colorOverlay: "rgba(6, 182, 212, 0.08)",
  },
];

export default function HumanStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStory = STORIES[activeIndex];

  return (
    <div
      id="section-stories"
      className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#F8FAFB] py-24 px-6 md:px-16 select-none"
    >
      {/* Background Section Subtitle */}
      <div className="w-full max-w-6xl mx-auto mb-12 flex flex-col items-start font-bold">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-caps !text-[#2BC48A] mb-4"
        >
          Section 07 / Human Stories
        </motion.div>
      </div>

      {/* Main headings */}
      <div className="w-full max-w-6xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] leading-[0.95] mb-4"
        >
          Real people. <br />
          <span className="text-[#667085]">Real transformation.</span>
        </motion.h2>
      </div>

      {/* Main Large Immersive Viewport + Story Panel */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-white border border-[#E8EDF2] rounded-3xl overflow-hidden p-6 md:p-8">
        
        {/* Left Grid: Large "Video" Visualizer Layer */}
        <div className="lg:col-span-7 relative aspect-video md:aspect-auto min-h-[300px] lg:min-h-[440px] rounded-2xl bg-slate-900 overflow-hidden flex items-center justify-center">
          
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
                className="w-full h-full object-cover brightness-[0.4] grayscale opacity-90 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              {/* Dynamic ambient color overlay matched with story */}
              <div className="absolute inset-0" style={{ backgroundColor: activeStory.colorOverlay }} />

              {/* Decorative sound/wave signal animating in center to simulate video/intelligence playback */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="flex items-end space-x-1.5 h-16 opacity-35 z-0">
                  <motion.div animate={{ height: [12, 38, 12] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.1 }} className="w-1 bg-[#2BC48A] rounded-full" />
                  <motion.div animate={{ height: [18, 54, 18] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-1 bg-white rounded-full" />
                  <motion.div animate={{ height: [24, 62, 24] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} className="w-1 bg-[#2BC48A] rounded-full" />
                  <motion.div animate={{ height: [14, 46, 14] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-1 bg-white rounded-full" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Floated Metric Glass Plate Card on top of clip */}
          <div className="absolute top-6 left-6 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-black/40 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl text-white shadow-xl flex items-center space-x-4 pr-10"
              >
                <div className="text-4xl md:text-5xl font-extrabold font-sans tracking-tight text-[#2BC48A]">
                  {activeStory.metric}
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-mono tracking-widest text-[#667085] uppercase">METRIC INDEX</span>
                  <span className="text-xs font-semibold text-slate-100 uppercase tracking-wider">{activeStory.metricLabel}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtitle label in video */}
          <div className="absolute bottom-6 left-6 font-mono text-[9px] text-[#667085] tracking-widest uppercase pointer-events-none z-10">
            HEALTH INTEL CASE CHRONICLE
          </div>
        </div>

        {/* Right Grid: Detailed Story Text & Navigation */}
        <div className="lg:col-span-5 flex flex-col justify-between py-4 pl-0 lg:pl-4">
          
          {/* Active Story Details with graceful AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col justify-center space-y-6"
            >
              <div className="text-xs font-mono tracking-widest text-[#2BC48A] uppercase">
                {activeStory.category}
              </div>

              <h3 className="text-3xl font-extrabold text-[#0F172A] tracking-tighter">
                {activeStory.title}
              </h3>

              <p className="text-md md:text-lg text-[#0F172A] leading-relaxed font-normal">
                <SmartText>{activeStory.desc}</SmartText>
              </p>

              <div className="border-l border-[#E8EDF2] pl-4">
                <SmartText className="text-sm text-[#667085] leading-relaxed italic">
                  {"\"" + activeStory.subtext + "\""}
                </SmartText>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail / Pill Selector Segment */}
          <div className="mt-8 pt-8 border-t border-[#E8EDF2]">
            <span className="text-[10px] font-mono tracking-widest text-[#667085] uppercase mb-4 block">SELECT PARTNER CHANNEL</span>
            <div className="flex flex-wrap gap-2">
              {STORIES.map((story, i) => {
                const isActive = activeIndex === i;
                return (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`px-4 py-2 text-xs font-semibold rounded-full tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#0F172A] text-white"
                        : "bg-[#F8FAFB] text-[#667085] hover:bg-slate-200/50"
                    }`}
                  >
                    {story.title.split(" ")[0]}
                  </button>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
