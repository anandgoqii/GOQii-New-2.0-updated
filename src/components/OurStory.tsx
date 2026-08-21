import React from "react";
import { motion } from "motion/react";
import { Sparkles, Layers, Globe2, Zap, ArrowRight } from "lucide-react";

interface Milestone {
  yearOrEra: string;
  badge: string;
  title: string;
  description: string;
  icon: React.ElementType;
  isHighlight?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    yearOrEra: "2014",
    badge: "Origin",
    title: "The Beginning",
    description: "A vision to make preventive healthcare proactive and personal.",
    icon: Sparkles
  },
  {
    yearOrEra: "The Evolution",
    badge: "Synergy",
    title: "Smart Health Ecosystem",
    description: "Technology, coaching, intelligence, and motivation come together.",
    icon: Layers
  },
  {
    yearOrEra: "India & Beyond",
    badge: "Expansion",
    title: "Health at Scale",
    description: "Taking preventive health engagement to individuals, organizations, and communities.",
    icon: Globe2
  },
  {
    yearOrEra: "Today",
    badge: "GOQii 2.0",
    title: "GOQii 2.0",
    description: "A new generation of intelligent, personalized health engagement.",
    icon: Zap,
    isHighlight: true
  }
];

export const OurStory: React.FC = () => {
  return (
    <section
      id="section-story"
      className="relative w-full bg-[#FAFBFB] text-[#0F172A] py-16 lg:py-24 px-4 sm:px-6 md:px-16 overflow-hidden select-none border-t border-[#E8EDF2] scroll-mt-24"
    >
      {/* Subtle Ambient Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2BC48A]/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00ADC7]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        {/* ================= 1. SECTION INDEX & TAG ================= */}
        <div className="flex items-center gap-4 text-xs mb-8 font-sans">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">12</span>
          <span className="text-[#E2E8F0] font-light text-sm">|</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase font-sans">
            OUR STORY
          </span>
        </div>

        {/* ================= 2. MAIN HEADER & NARRATIVE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          {/* Left Column: Display Typography & Accent Bar */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#0F172A] leading-[1.08] font-sans"
            >
              A Vision for Health.
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[32px] font-medium tracking-tight text-[#475467] leading-[1.2] mt-2 font-sans"
            >
              A Journey That <span className="text-[#2BC48A] font-semibold">Keeps Evolving.</span>
            </motion.h3>

            {/* Accent Line in GOQii Mint Green */}
            <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-6" />
          </div>

          {/* Right Column: Clean Editorial Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 space-y-4 text-base sm:text-lg text-[#475467] leading-relaxed font-sans"
          >
            <p>
              In <strong className="font-semibold text-[#0F172A]">2014</strong>, Vishal Gondal set out with a simple belief: healthcare should focus on prevention, not just treating illness.
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-[#0F172A] tracking-tight">
              That vision became <span className="text-[#2BC48A]">GOQii</span>.
            </p>
            <p className="text-[#475467] text-sm sm:text-base leading-relaxed">
              Over the years, GOQii has evolved into a <strong className="font-semibold text-[#0F172A]">Smart Health Ecosystem</strong>, bringing together technology, AI, health intelligence, behavioral science, expert coaching, and motivation to help people build healthier habits.
            </p>
            <p className="text-[#475467] text-sm sm:text-base leading-relaxed">
              Today, GOQii has grown from an Indian health-tech pioneer into a global health platform, while staying focused on one mission: <span className="font-medium text-[#0F172A]">making preventive health personal, actionable, and sustainable.</span>
            </p>

            <div className="pt-2">
              <button
                id="btn-our-story-read-more"
                onClick={() => {
                  if (window.navigateToPage) {
                    window.navigateToPage("about");
                  }
                }}
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#2BC48A] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 shadow-sm hover:shadow-[0_8px_20px_rgba(43,196,138,0.25)] group cursor-pointer"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= 3. TIMELINE HEADER ================= */}
        <div className="mb-10 pt-8 border-t border-[#E8EDF2]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold text-[#2BC48A] uppercase tracking-[0.25em] block mb-1 font-sans">
                MILESTONES & GROWTH
              </span>
              <h4 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0F172A] font-sans">
                FROM PREVENTION. TO ACTION. TO IMPACT.
              </h4>
            </div>

            {/* Quick Flow Indicator */}
            <div className="hidden md:flex items-center gap-2 text-xs font-medium text-[#64748B] bg-white px-4 py-2 rounded-full border border-[#E8EDF2] shadow-sm">
              <span className="text-[#0F172A] font-semibold">2014</span>
              <ArrowRight className="w-3 h-3 text-[#2BC48A]" />
              <span className="text-[#0F172A] font-semibold">Evolution</span>
              <ArrowRight className="w-3 h-3 text-[#2BC48A]" />
              <span className="text-[#0F172A] font-semibold">India & Beyond</span>
              <ArrowRight className="w-3 h-3 text-[#2BC48A]" />
              <span className="text-[#2BC48A] font-semibold">GOQii 2.0</span>
            </div>
          </div>
        </div>

        {/* ================= 4. HORIZONTAL CONNECTED TIMELINE ================= */}
        <div className="relative pt-4 pb-2">
          {/* Continuous Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[6%] right-[6%] h-[2px] bg-gradient-to-r from-[#2BC48A]/30 via-[#2BC48A] to-[#2BC48A]/40 z-0" />

          {/* Timeline Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {MILESTONES.map((milestone, idx) => {
              const IconComponent = milestone.icon;
              return (
                <motion.div
                  key={milestone.yearOrEra}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group relative flex flex-col p-6 sm:p-7 rounded-2xl transition-all duration-300 ${
                    milestone.isHighlight
                      ? "bg-white border-2 border-[#2BC48A] shadow-[0_12px_32px_rgba(43,196,138,0.08)]"
                      : "bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 hover:shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                  }`}
                >
                  {/* Timeline Node Point */}
                  <div className="flex items-center justify-between mb-5">
                    {/* Node Dot / Icon Circle */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                        milestone.isHighlight
                          ? "bg-[#2BC48A] text-white shadow-[0_4px_14px_rgba(43,196,138,0.25)]"
                          : "bg-[#E5F7F0] text-[#2BC48A]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Milestone Era Tag */}
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        milestone.isHighlight
                          ? "bg-[#E5F7F0] text-[#2BC48A]"
                          : "bg-[#F1F5F9] text-[#475467]"
                      }`}
                    >
                      {milestone.yearOrEra}
                    </span>
                  </div>

                  {/* Year / Era Sub-label */}
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#2BC48A] uppercase tracking-wider block">
                      {milestone.yearOrEra === "2014"
                        ? "Foundation"
                        : milestone.yearOrEra === "The Evolution"
                        ? "Phase II"
                        : milestone.yearOrEra === "India & Beyond"
                        ? "Scale"
                        : "Next-Gen"}
                    </span>
                    <h5 className="text-lg sm:text-xl font-semibold text-[#0F172A] tracking-tight mt-0.5 font-sans">
                      {milestone.title}
                    </h5>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#475467] leading-relaxed mt-1 flex-grow font-sans">
                    {milestone.description}
                  </p>

                  {/* Bottom Milestone Indicator / Step Number */}
                  <div className="mt-6 pt-4 border-t border-[#F1F5F9] flex items-center justify-between text-xs text-[#94A3B8] font-sans">
                    <span className="font-medium">STEP 0{idx + 1}</span>
                    {idx < MILESTONES.length - 1 ? (
                      <span className="text-[#2BC48A] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Next <ArrowRight className="w-3 h-3" />
                      </span>
                    ) : (
                      <span className="text-[#2BC48A] font-semibold">Active Now</span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurStory;

