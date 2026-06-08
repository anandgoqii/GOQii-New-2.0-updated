import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Particles from "./Particles";
import SmartText from "./SmartText";

const slides = [
  {
    id: 1,
    label: "Operating System for Human Health",
    lines: [
      { text: "Health should begin", highlight: false },
      { text: "before illness.", highlight: true }
    ],
    subtext: "Continuous health intelligence for people, enterprises and populations.",
    bgImage: "https://appcdn.goqii.com/storeimg/70278_1780397805.png"
  },
  {
    id: 2,
    label: "THE GOQii PLATFORM",
    lines: [
      { text: "Predict.", highlight: false },
      { text: "Personalize.", highlight: false },
      { text: "Prevent.", highlight: true }
    ],
    subtext: "GOQii transforms everyday health signals into intelligent actions and better outcomes.",
    bgImage: "https://appcdn.goqii.com/storeimg/79890_1780900607.jpg"
  },
  {
    id: 3,
    label: "BUILT FOR GLOBAL SCALE",
    lines: [
      { text: "Intelligence for", highlight: false },
      { text: "every human.", highlight: true }
    ],
    subtext: "Trusted by enterprises, insurers, healthcare providers and governments worldwide.",
    bgImage: "https://appcdn.goqii.com/storeimg/33596_1780903515.jpg"
  }
];

export default function HeroSection({ onExplore }: { onExplore: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Auto-play the slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Create 20% parallax scrolling effect on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <div
      id="hero-section"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8FAFB] px-6 py-12 md:px-16 md:py-16 select-none"
    >
      {/* Absolute image background with 20% parallax translation */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          style={{ y: yParallax, scale: imageScale }}
          className="relative w-full h-full origin-center"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={slides[currentSlide].bgImage}
              alt="Serene health reflection portrait"
              className="w-full h-full object-cover object-right md:object-right-center"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* Subtle gradient edges & overlays requested in Bold Typography design */}
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2BC48A]/8 via-blue-100/5 to-transparent blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2BC48A]/3 blur-[90px] pointer-events-none" />
          
          {/* Left-to-right legibility mask gradient specifically for left-aligned text */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#F8FAFB]/75 via-[#F8FAFB]/30 to-transparent z-[1]" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFB]/50" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFB] to-transparent" />
        </motion.div>
      </div>

      {/* Decorative frame border for high-end structure */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-[90%] border border-[#E8EDF2] opacity-40 pointer-events-none z-0 rounded-2xl" />

      {/* Atmospheric signals drifting */}
      <Particles count={25} color="bg-[#2BC48A]" speedMultiplier={0.8} />

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-3xl mr-auto my-auto flex flex-col items-start text-left mt-20 md:mt-32 w-full lg:pl-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col items-start text-left w-full min-h-[300px] sm:min-h-[260px] md:min-h-[320px] justify-center"
          >
            {/* Label */}
            <div className="label-caps mb-6 md:mb-8 tracking-[0.25em] text-[#2BC48A] font-bold">
              {slides[currentSlide].label}
            </div>

            {/* Big Large Typography (Reveal line by line using the explicit hero-heading class) */}
            <h1 className="hero-heading text-[#0F172A] mb-8 flex flex-col items-start leading-[1.08] min-h-[84px] md:min-h-[112px] lg:min-h-[180px]">
              {slides[currentSlide].lines.map((line, idx) => (
                <span key={idx} className="block overflow-hidden pb-1">
                  <span className={`inline-block ${line.highlight ? "text-[#2BC48A]" : "text-[#0F172A]"}`}>
                    {line.text}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subtext */}
            <p className="text-xs sm:text-sm md:text-base font-normal text-[#667085] max-w-md md:max-w-lg leading-relaxed mb-4">
              <SmartText>{slides[currentSlide].subtext}</SmartText>
            </p>

            {/* XPRIZE Premium Badge */}
            <div className="inline-flex items-center gap-3 bg-[#FFFFFF]/90 border border-[#E8EDF2] py-2.5 px-4 rounded-xl shadow-[0_8px_20px_rgba(15,23,42,0.02)] mt-4 mb-2">
              <span className="text-lg">🏆</span>
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-black tracking-wider text-[#0F172A] uppercase">
                  XPRIZE Healthspan Semifinalist
                </span>
                <span className="text-[9px] font-extrabold text-[#667085] uppercase tracking-widest mt-0.5">
                  $101M Global Competition
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          className="mt-4"
        >
          <motion.button
            onClick={onExplore}
            whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(43, 196, 138, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#0F172A] text-white text-sm font-semibold tracking-wider uppercase rounded-full glow-accent cursor-pointer transition-shadow"
          >
            Explore GOQii
          </motion.button>
        </motion.div>

        {/* Slide indicators / dots */}
        <div className="flex items-center justify-start gap-3 mt-8">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(index)}
              className="group p-1 cursor-pointer transition-transform"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-[#2BC48A]" : "w-1.5 bg-[#667085]/30 hover:bg-[#667085]/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Enterprise Signals Proof Strip */}
        <div className="relative z-10 w-full border-t border-[#E8EDF2] pt-5 mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4 text-left max-w-xl">
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-none">5M+</div>
            <div className="text-[9px] font-mono tracking-widest text-[#667085] uppercase mt-1 font-bold">Active Users</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-none">300+</div>
            <div className="text-[9px] font-mono tracking-widest text-[#667085] uppercase mt-1 font-bold">Enterprise Partners</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-none">Fortune 500</div>
            <div className="text-[9px] font-mono tracking-widest text-[#667085] uppercase mt-1 font-bold">Deployments</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight leading-tight">NHS Primary Care</div>
            <div className="text-[8.5px] font-mono tracking-wider text-[#667085] uppercase mt-0.5 font-bold leading-tight">Modality Partnership</div>
          </div>
        </div>
      </div>


    </div>
  );
}
