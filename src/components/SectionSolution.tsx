import { motion } from "motion/react";
import { useState, useRef } from "react";

const STEPS = [
  {
    num: "01",
    title: "Connect",
    description: "Connect continuous data from wearables, lab tests, and daily health check-ins into one unified health record.",
    image: "https://appcdn.goqii.com/storeimg/66031_1782298813.png",
    imageAlt: "A smartwatch tracking fitness metrics representing wearable connectivity"
  },
  {
    num: "02",
    title: "Understand",
    description: "GOQii's intelligence layer identifies emerging health risks and patterns before they become larger health concerns.",
    image: "https://appcdn.goqii.com/storeimg/59460_1782298881.png",
    imageAlt: "Clinician analyzing predictive telemetry graphs on a dashboard"
  },
  {
    num: "03",
    title: "Guide",
    description: "Personalized recommendations and coaching help members take the right action based on their latest health data.",
    image: "https://appcdn.goqii.com/storeimg/22367_1782298838.png",
    imageAlt: "User holding smartphone displaying active coach plans"
  },
  {
    num: "04",
    title: "Improve",
    description: "Small daily actions lead to measurable improvements in sleep, activity, nutrition, weight, and overall health.",
    image: "https://appcdn.goqii.com/storeimg/11034_1782298927.png",
    imageAlt: "Smiling active woman jogging outdoors in park"
  }
];

export default function SectionSolution() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;
    const totalWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    
    if (clientWidth > 0) {
      const stepWidth = totalWidth / STEPS.length;
      const index = Math.round(scrollLeft / stepWidth);
      const clampedIndex = Math.max(0, Math.min(STEPS.length - 1, index));
      setActiveMobileIdx(clampedIndex);
    }
  };

  return (
    <div
      id="section-solution"
      className="relative w-full bg-[#FAFBFB] py-16 md:py-24 px-6 md:px-16 overflow-hidden border-b border-[#E8EDF2]"
    >
      {/* Decorative internal blur orb to elevate background depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2BC48A]/[0.02] rounded-full blur-[120px] pointer-events-none -translate-y-24 translate-x-24" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        
        {/* 1. SECTION HEADER (Title & Intro aligned to match the image perfectly) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-[#E8EDF2]/70">
          
          <div className="lg:col-span-7">
            {/* Tag / Label exactly as in the image */}
            <div className="flex items-center gap-3 text-xs mb-5 font-sans">
              <span className="font-extrabold text-[#2BC48A] text-sm">03</span>
              <span className="text-slate-300 font-light text-sm">|</span>
              <span className="font-black text-slate-400 text-[10px] tracking-[0.25em] uppercase">
                The Solution
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black tracking-tight text-[#0F172A] leading-[1.1] font-sans">
              From information <br />
              to <span className="text-[#2BC48A]">transformation.</span>
            </h2>

            {/* Green accent line under the heading */}
            <div className="w-[72px] h-[3.5px] bg-[#2BC48A] rounded-full mt-6" />
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <p className="text-slate-500 font-sans text-sm sm:text-[15px] leading-[1.65] max-w-lg">
              GOQii helps people turn complex data into sustainable daily vitality. Our health intelligence system decodes silent biomodulation parameters, formulating a step-by-step journey designed for lifelong longevity and healthy preventive habit creation.
            </p>
          </div>

        </div>

        {/* 2. THE STEPS: 4 ROUNDED EDGE CARDS WITH TOP IMAGES & FLOATING BADGES */}
        <div className="relative mt-16">
          
          {/* Desktop Connecting horizontal dashed line running through the center of overlapping badges */}
          <div className="hidden lg:block absolute left-[12%] right-[12%] top-[176px] h-0.5 pointer-events-none z-10">
            <div className="w-full h-full border-t-[2px] border-dashed border-[#2BC48A]/30 relative" />
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 gap-5 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:snap-none sm:pb-0 sm:gap-6 relative z-20 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {STEPS.map((step, idx) => {
              const isHovered = hoveredIdx === idx;
              
              return (
                <motion.div
                  key={step.num}
                  className="relative bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/40 rounded-[24px] flex flex-col overflow-hidden cursor-pointer transition-all duration-400 shadow-[0_8px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(43,196,138,0.08)] group shrink-0 w-[290px] max-w-[85vw] snap-center sm:shrink sm:w-auto sm:snap-align-none"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  whileHover={{ y: -6 }}
                >
                  {/* Card Header Image Section */}
                  <div className="relative w-full h-44 overflow-hidden bg-slate-100">
                    <img
                      src={step.image}
                      alt={step.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Dark gradient vignette over image to enrich text pop */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>

                  {/* Card Body Wrapper containing floating overlapping sequence circle badge */}
                  <div className="relative p-6 pt-9 flex-1 flex flex-col items-start text-left">
                    
                    {/* Floating overlapping sequence badge */}
                    <div className={`absolute -top-6 left-6 w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-xs transition-all duration-300 z-20 ${
                      isHovered 
                        ? "border-[#2BC48A] text-[#2BC48A] scale-105" 
                        : "border-[#E8EDF2] text-[#2BC48A]"
                    }`}>
                      <span className="text-xs font-black font-sans tracking-tight">
                        {step.num}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className={`text-lg font-black tracking-tight mb-2 transition-colors duration-300 font-sans ${
                      isHovered ? "text-[#2BC48A]" : "text-[#0F172A]"
                    }`}>
                      {step.title}
                    </h3>

                    {/* Miniature green highlight separator under heading */}
                    <div className="w-8 h-[2px] bg-[#2BC48A] rounded-full mb-3.5" />

                    {/* Step Description */}
                    <p className="text-[12.5px] text-slate-500 leading-relaxed font-sans font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile indicator dots */}
          <div className="flex sm:hidden justify-center items-center gap-2 mt-4 pb-2">
            {STEPS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    const container = scrollRef.current;
                    const cardWidth = container.scrollWidth / STEPS.length;
                    container.scrollTo({
                      left: idx * cardWidth,
                      behavior: "smooth"
                    });
                    setActiveMobileIdx(idx);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeMobileIdx === idx 
                    ? "w-6 bg-[#2BC48A]" 
                    : "w-2 bg-[#E8EDF2] hover:bg-[#2BC48A]/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* 3. FOOTER UNIFIED PILL BAR (Styled exactly like the bottom banner in the image) */}
        <div className="mt-14 w-full bg-white border border-[#E8EDF2] rounded-2xl md:rounded-full p-4 md:p-1.5 pl-6 md:pl-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-[0_4px_24px_rgba(15,23,42,0.015)] relative z-10">
          
          {/* Left Side: Guidance highlights */}
          <div className="flex items-center gap-3.5 self-start md:self-auto">
            <div className="w-9 h-9 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] shrink-0 shadow-inner">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22V12M12 12c-2-2.5-5-2-5-2s.5 4 5 2c2-2.5 5-2 5-2s-.5 4-5 2z"/>
              </svg>
            </div>
            <span className="text-xs sm:text-[13px] font-sans font-medium text-slate-600 leading-relaxed">
              <span className="text-[#2BC48A] font-bold">Guidance</span> turns continuous knowledge into lasting healthy habits.
            </span>
          </div>

          {/* Vertical Separator for wide screens */}
          <div className="hidden md:block h-8 w-px bg-slate-100 mx-2" />

          {/* Right Side: Flow strategies list with green bullet points */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-sans font-black tracking-widest text-slate-400 uppercase justify-center md:justify-end pr-4 md:pr-6">
            <span className="flex items-center gap-1.5 hover:text-slate-700 transition-colors duration-200">
              Continuous Monitoring <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-700 transition-colors duration-200">
              Early Risk Detection <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-700 transition-colors duration-200">
              Personalized Guidance <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
            </span>
            <span className="flex items-center gap-1.5 hover:text-slate-700 transition-colors duration-200">
              Human Coaching <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}

