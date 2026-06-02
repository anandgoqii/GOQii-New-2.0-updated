import { motion } from "motion/react";
import { useState } from "react";

const TIMELINE_STEPS = [
  {
    year: "2014",
    title: "GOQii Founded",
    description: "Launched with a radical mission: combine wearable technology with human coaching to build a sustainable preventative health ecosystem.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
    boldWord: "ecosystem.",
  },
  {
    year: "2016",
    title: "Wearables & IoT Integration",
    description: "Pioneered smart wearable trackers integrated directly into daily health loops, shifting parameters from static reports to continuous data streams.",
    image: "https://images.unsplash.com/photo-1510017808632-95f06e681897?q=80&w=1000&auto=format&fit=crop",
    boldWord: "streams.",
  },
  {
    year: "2018",
    title: "Coaching Ecosystem",
    description: "Scaled a network of certified health coaches, doctors, and nutritionists, translating algorithmic suggestions into deep human habit transformation.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
    boldWord: "transformation.",
  },
  {
    year: "2020",
    title: "Health Marketplace",
    description: "Created a comprehensive preventative marketplace, integrating clean nutrition, diagnostic screenings, and therapeutic options into one app experience.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
    boldWord: "experience.",
  },
  {
    year: "2021",
    title: "Insurance Layer",
    description: "Merged preventive compliance with interactive risk scoring tools, partnering with prime insurance bodies to lower premiums based on healthy habits.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    boldWord: "habits.",
  },
  {
    year: "2022",
    title: "Healthcare Integrations",
    description: "Integrated deep clinical compliance, enabling continuous monitoring channels for clinics, diabetes support, and post-discharge protocols.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
    boldWord: "protocols.",
  },
  {
    year: "2023",
    title: "AI Intelligence Ecosystem",
    description: "Injected initial generative models to synthesize coach metrics, streamlining administrative processes and enhancing feedback cycles.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    boldWord: "cycles.",
  },
  {
    year: "2024",
    title: "ALIVE O.S.",
    description: "Engineered a low-latency, ambient clinical operating system, continuously calculating risk trajectories behind the scenes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    boldWord: "scenes.",
  },
  {
    year: "2026",
    title: "GOQii 2.0",
    description: "Unified humans, continuous biomarker intelligence, and autonomous medical networks into an absolute system for lifetime health optimization.",
    image: "https://images.unsplash.com/photo-1630839437035-dac17da580d0?q=80&w=1000&auto=format&fit=crop", // high-contrast brain cell structure
    boldWord: "optimization.",
  },
];

export default function AboutGOQii() {
  const [activeIndex, setActiveIndex] = useState(8); // Default to 2026 active as per the image mock

  const renderDescription = (description: string, boldWord?: string) => {
    if (!boldWord) return description;
    const parts = description.split(boldWord);
    if (parts.length < 2) return description;
    return (
      <>
        {parts[0]}
        <strong className="text-[#0F172A] font-bold">{boldWord}</strong>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      id="section-about"
      className="relative min-h-screen w-full flex flex-col justify-center bg-[#FAFBFB] py-24 px-4 sm:px-6 md:px-16 overflow-hidden select-none border-t border-[#E8EDF2]"
    >
      {/* Two-Column Grid Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start z-10">
        
        {/* Left Column: Heading, Narrative, and Active Year Image Card */}
        <div className="lg:col-span-5 text-left flex flex-col justify-start">
          
          {/* Header Tag Index Layout */}
          <div className="w-full mb-10 flex flex-col items-start font-sans">
            <div className="flex items-center gap-4 text-xs tracking-wide">
              <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">13</span>
              <span className="text-[#E2E8F0] font-light text-sm">|</span>
              <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
                OUR JOURNEY
              </span>
            </div>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
          >
            A decade of <br />
            <span className="text-[#2BC48A] relative inline-block">
              preventive
              <span className="absolute left-0 bottom-1 w-14 h-[3.5px] bg-[#2BC48A] rounded-full" />
            </span>{" "}
            healthcare.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#667085] text-sm sm:text-base font-medium mt-6 max-w-md font-sans leading-relaxed"
          >
            Founded in 2014, GOQii has helped transform the relationship between technology, human coaching, and real health outcomes.
          </motion.p>

          {/* Glowing Target/Image Card with Concentric Rings */}
          <div className="relative mt-12 w-full flex items-center justify-start">
            
            {/* Background Concentric Rings (Centered behind the image card, extending out) */}
            <div className="absolute right-[-60px] top-[50%] -translate-y-[50%] w-[420px] h-[420px] pointer-events-none z-0 overflow-visible opacity-50">
              {/* Ring 1 outer */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#E2E8F0] flex items-center justify-center">
                {/* Ring 2 inner */}
                <div className="absolute w-[330px] h-[330px] rounded-full border border-[#CBD5E1]/40 flex items-center justify-center">
                  {/* Ring 3 inner */}
                  <div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-[#CBD5E1]/30 flex items-center justify-center" />
                </div>
              </div>

              {/* Pulsing indicator dot on one of the outer rings */}
              <div className="absolute right-[5%] top-[50%] w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_8px_#2BC48A] animate-pulse" />
            </div>

            {/* The Image Card itself */}
            <motion.div
              layout
              className="relative z-10 w-full aspect-[4/3.2] bg-white border border-[#E8EDF2] rounded-[28px] overflow-hidden p-2 shadow-[0_16px_40px_rgba(15,23,42,0.02)]"
            >
              <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-[#FAFBFB]">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  src={TIMELINE_STEPS[activeIndex].image}
                  alt={TIMELINE_STEPS[activeIndex].title}
                  className="w-full h-full object-cover grayscale brightness-90 contrast-[1.15] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Left Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* Card Text Content aligned bottom left */}
                <div className="absolute bottom-6 left-6 z-20 text-left">
                  <div className="text-[10.5px] tracking-[0.2em] font-extrabold uppercase text-[#2BC48A] mb-1">
                    EST. {TIMELINE_STEPS[activeIndex].year}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-none mb-1">
                    {TIMELINE_STEPS[activeIndex].title}
                  </h3>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Right Column: Timeline Year List */}
        <div className="lg:col-span-7 lg:pl-12 w-full mt-8 lg:mt-0 relative">
          
          {/* Main Continuous Timeline Line */}
          <div className="absolute left-[13px] top-6 bottom-6 w-[1.5px] bg-[#E8EDF2]" />

          <div className="space-y-1">
            {TIMELINE_STEPS.map((step, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={step.year}
                  onClick={() => setActiveIndex(index)}
                  className="relative group cursor-pointer flex items-start"
                >
                  {/* Glowing Node Marker */}
                  <div className="absolute left-[4px] top-[18px]">
                    {isSelected ? (
                      <div className="w-[19px] h-[19px] -ml-[1px] rounded-full border-[3px] border-[#2BC48A] bg-white ring-[4px] ring-[#E5F7F0]/90 z-20 transition-all duration-300" />
                    ) : (
                      <div className="w-[11px] h-[11px] rounded-full border border-slate-300 bg-white group-hover:border-[#2BC48A] group-hover:scale-110 z-20 transition-all duration-300" />
                    )}
                  </div>

                  {/* Step Content Card with a dashed border separation */}
                  <div className={`pl-10 w-full pt-3 pb-4 transition-all duration-300 ${
                    index !== TIMELINE_STEPS.length - 1 ? "border-b border-dashed border-[#E2E8F0]/70" : ""
                  }`}>
                    
                    {/* Year & Title row */}
                    <div className="flex items-baseline gap-4 text-left">
                      <span
                        className={`text-sm sm:text-base font-extrabold font-mono tracking-tight transition-colors duration-300 ${
                          isSelected ? "text-[#2BC48A]" : "text-[#2BC48A]/70 group-hover:text-[#2BC48A]"
                        }`}
                      >
                        {step.year}
                      </span>
                      <h4
                        className={`text-sm sm:text-base font-bold transition-all duration-300 ${
                          isSelected ? "text-[#0F172A] font-extrabold" : "text-[#334155]/85 group-hover:text-[#0F172A]"
                        }`}
                      >
                        {step.title}
                      </h4>
                    </div>

                    {/* Extended Description, visible only when active */}
                    {isSelected && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-[#667085] text-xs sm:text-sm font-medium leading-relaxed max-w-xl font-sans mt-3 text-left">
                          {renderDescription(step.description, step.boldWord)}
                        </p>
                      </motion.div>
                    )}

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}
