import { motion } from "motion/react";
import { useState } from "react";

const TIMELINE_STEPS = [
  {
    year: "2014",
    title: "GOQii Founded",
    description: "Launched with a radical mission: combine wearable technology with human coaching to build a sustainable preventative health ecosystem.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2016",
    title: "Wearables & IoT Integration",
    description: "Pioneered smart wearable trackers integrated directly into daily health loops, shifting parameters from static reports to continuous data streams.",
    image: "https://images.unsplash.com/photo-1510017808632-95f06e681897?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2018",
    title: "Coaching Ecosystem",
    description: "Scaled a network of certified health coaches, doctors, and nutritionists, translating algorithmic suggestions into deep human habit transformation.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2020",
    title: "Health Marketplace",
    description: "Created a comprehensive preventative marketplace, integrating clean nutrition, diagnostic screenings, and therapeutic options into one app experience.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2021",
    title: "Insurance Layer",
    description: "Merged preventive compliance with interactive risk scoring tools, partnering with prime insurance bodies to lower premiums based on healthy habits.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2022",
    title: "Healthcare Integrations",
    description: "Integrated deep clinical compliance, enabling continuous monitoring channels for clinics, diabetes support, and post-discharge protocols.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "AI Intelligence Ecosystem",
    description: "Injected initial generative models to synthesize coach metrics, streamlining administrative processes and enhancing feedback cycles.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "ALIVE O.S.",
    description: "Engineered a low-latency, ambient clinical operating system, continuously calculating risk trajectories behind the scenes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2026",
    title: "GOQii 2.0",
    description: "Unified humans, continuous biomarker intelligence, and autonomous medical networks into an absolute system for lifetime health optimization.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AboutGOQii() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="section-about"
      className="relative min-h-screen w-full flex flex-col justify-center bg-[#F8FAFB] py-24 px-6 md:px-16 overflow-hidden select-none border-t border-[#E8EDF2]"
    >
      {/* Label Title */}
      <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col items-start font-bold">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-caps !text-[#2BC48A] mb-4"
        >
          Section 13 / Our Journey
        </motion.div>
      </div>

      {/* Primary Editorial Info */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] leading-[0.95] mb-4"
          >
            A decade of <br />
            <span className="text-[#667085]">preventive healthcare.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#667085] max-w-xl"
          >
            Founded in 2014, GOQii has helped transform the relationship between technology, human coaching, and real health outcomes.
          </motion.p>
        </div>
      </div>

      {/* Interactive Editorial Timeline Layout */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Dynamic Editorial Image Panel */}
        <div className="lg:col-span-5 h-[500px] rounded-3xl overflow-hidden border border-[#E8EDF2] relative bg-slate-100 shadow-xs">
          <motion.img
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            src={TIMELINE_STEPS[activeIndex].image}
            alt={TIMELINE_STEPS[activeIndex].title}
            className="w-full h-full object-cover grayscale brightness-95"
            referrerPolicy="no-referrer"
          />
          {/* Overlay aesthetic indicator */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-end text-white">
            <span className="text-sm font-mono tracking-widest text-[#2BC48A] font-extrabold uppercase mb-1">
              EST. {TIMELINE_STEPS[activeIndex].year}
            </span>
            <h4 className="text-xl font-black tracking-tight">{TIMELINE_STEPS[activeIndex].title}</h4>
          </div>
        </div>

        {/* Right Side: Editorial Year-Select List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative border-l-2 border-[#E8EDF2] ml-4 pl-8 space-y-12">
            {TIMELINE_STEPS.map((step, index) => {
              const isSelected = activeIndex === index;
              return (
                <div
                  key={step.year}
                  onClick={() => setActiveIndex(index)}
                  className="relative group cursor-pointer"
                >
                  {/* Glowing Node Marker */}
                  <div
                    className={`absolute left-[-42px] top-1 w-[20px] h-[20px] rounded-full border-4 bg-white transition-all duration-300 ${
                      isSelected
                        ? "border-[#2BC48A] scale-125 bg-[#2BC48A]"
                        : "border-[#E8EDF2] group-hover:border-[#2BC48A]"
                    }`}
                  />

                  {/* Year Tag label */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <span
                      className={`text-xl font-bold tracking-tight font-mono transition-colors duration-300 ${
                        isSelected ? "text-[#2BC48A]" : "text-[#667085] group-hover:text-[#0F172A]"
                      }`}
                    >
                      {step.year}
                    </span>
                    <span
                      className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                        isSelected ? "text-[#0F172A]" : "text-[#667085] group-hover:text-[#0F172A]"
                      }`}
                    >
                      {step.title}
                    </span>
                  </div>

                  {/* Collapsible/Expandable Description */}
                  {isSelected && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-lg mt-1"
                    >
                      {step.description}
                    </motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </div>
  );
}
