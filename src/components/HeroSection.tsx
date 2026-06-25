import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { X, CheckCircle2, Apple, Play, Smartphone, ArrowRight, Sparkles, Watch, FlaskConical, Clipboard, User } from "lucide-react";
import Particles from "./Particles";
import SmartText from "./SmartText";
import BookDemoModal from "./BookDemoModal";

const slides = [
  {
    id: 1,
    label: "Operating System for Human Health",
    lines: [
      { text: "Health should begin", highlight: false },
      { text: "before illness.", highlight: true }
    ],
    subtext: "GOQii combines wearables, diagnostics, AI, and human coaching into one continuous health platform for individuals, employers, insurers, and healthcare providers.",
    bgImage: "https://appcdn.goqii.com/storeimg/9522_1781597016.png",
    mobileBgImage: "https://appcdn.goqii.com/storeimg/50283_1781000672.jpg",
    objectPosition: "object-right-bottom md:object-right-bottom"
  },
  {
    id: 2,
    label: "GOQii HealthEngage",
    lines: [
      { text: "Predict.", highlight: false },
      { text: "Personalize.", highlight: false },
      { text: "Prevent.", highlight: true }
    ],
    subtext: "GOQii combines wearables, diagnostics, AI, and human coaching into one continuous health platform for individuals, employers, insurers, and healthcare providers.",
    bgImage: "https://appcdn.goqii.com/storeimg/48777_1781616000.jpg",
    mobileBgImage: "https://appcdn.goqii.com/storeimg/54302_1781000743.jpg",
    objectPosition: "object-right-bottom md:object-right-bottom"
  },
  {
    id: 3,
    label: "BUILT FOR GLOBAL SCALE",
    lines: [
      { text: "Intelligence for", highlight: false },
      { text: "every human.", highlight: true }
    ],
    subtext: "GOQii combines wearables, diagnostics, AI, and human coaching into one continuous health platform for individuals, employers, insurers, and healthcare providers.",
    bgImage: "https://appcdn.goqii.com/storeimg/30233_1781615916.jpg",
    mobileBgImage: "https://appcdn.goqii.com/storeimg/88832_1781000753.jpg",
    objectPosition: "object-right-bottom md:object-right-bottom"
  },
  {
    id: 4,
    label: "Preventive Health, Made Continuous",
    lines: [
      { text: "Preventive Health,", highlight: false },
      { text: "Made Continuous.", highlight: true }
    ],
    subtext: "GOQii combines AI, diagnostics, wearables and human coaching into one connected health platform.",
    bgImage: "https://appcdn.goqii.com/storeimg/70526_1781689373.jpg",
    mobileBgImage: "https://appcdn.goqii.com/storeimg/50283_1781000672.jpg",
    objectPosition: "object-right-bottom md:object-right-bottom"
  }
];

export default function HeroSection({ onExplore }: { onExplore: () => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Custom dialog modals state
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);

  // Detect if current screen width is mobile
  useEffect(() => {
    const checkMobileState = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobileState();
    window.addEventListener("resize", checkMobileState);
    return () => window.removeEventListener("resize", checkMobileState);
  }, []);
  
  // Auto-play the slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Create subtle parallax scrolling effect on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.00, 1.04]);

  return (
    <div
      id="hero-section"
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#F8FAFB] py-12 md:py-16 select-none"
    >
      {/* Absolute image background with subtle parallax translation - visible on all screens */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden block">
        <motion.div
          style={{ y: yParallax, scale: imageScale }}
          className="absolute -top-[3%] left-0 w-full h-[106%] origin-center"
        >
          <AnimatePresence>
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45 }}
              src={isMobile && slides[currentSlide].mobileBgImage ? slides[currentSlide].mobileBgImage : slides[currentSlide].bgImage}
              alt="GOQii Healthspan Hero Image"
              className={`absolute inset-0 w-full h-full object-cover ${slides[currentSlide].objectPosition || "object-right-bottom"}`}
              style={{ imageRendering: "auto" }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* Subtle gradient edges & overlays requested in Bold Typography design */}
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2BC48A]/8 via-blue-100/5 to-transparent blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2BC48A]/3 blur-[90px] pointer-events-none" />
          
          {/* Left-to-right legibility mask gradient specifically for left-aligned text */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[65%] bg-gradient-to-r from-[#F8FAFB]/92 md:from-[#F8FAFB]/75 via-[#F8FAFB]/75 md:via-[#F8FAFB]/30 to-[#F8FAFB]/40 md:to-transparent z-[1]" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFB]/50" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F8FAFB] to-transparent" />
        </motion.div>
      </div>

      {/* Decorative frame border for high-end structure */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-[90%] border border-[#E8EDF2] opacity-40 pointer-events-none z-0 rounded-2xl" />

      {/* Atmospheric signals drifting */}
      <Particles count={25} color="bg-[#2BC48A]" speedMultiplier={0.8} />

       {/* Hero Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex-grow flex flex-col justify-center px-6 md:px-16">
        <div className="relative max-w-3xl mr-auto my-auto flex flex-col items-start text-left mt-20 md:mt-32 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="flex flex-col items-start text-left w-full min-h-[460px] sm:min-h-[390px] md:min-h-[380px] lg:min-h-[370px] justify-start"
            >
              {/* Label */}
              <div className="label-caps mb-6 md:mb-8 tracking-[0.25em] text-[#2BC48A] font-bold">
                {slides[currentSlide].label}
              </div>

              {/* Big Large Typography (Reveal line by line using the explicit hero-heading class) */}
              <h1 className="hero-heading text-[#0F172A] mb-8 flex flex-col items-start leading-[1.08] min-h-[110px] sm:min-h-[130px] lg:min-h-[160px] xl:min-h-[180px]">
                {slides[currentSlide].id === 1 ? (
                  <>
                    <span>Health should begin&nbsp;</span>
                    <span className="text-[#2BC48A]">before illness.</span>
                  </>
                ) : (
                  slides[currentSlide].lines.map((line, idx) => (
                    <span key={idx} className="block overflow-hidden pb-1">
                      <span className={`inline-block ${line.highlight ? "text-[#2BC48A]" : "text-[#0F172A]"}`}>
                        {line.text}
                      </span>
                    </span>
                  ))
                )}
              </h1>

              {/* Subtext */}
              <p className="text-xs sm:text-sm md:text-base font-normal text-[#667085] max-w-[340px] md:max-w-[420px] lg:max-w-[460px] xl:max-w-[480px] leading-relaxed mb-4">
                <SmartText>{slides[currentSlide].subtext}</SmartText>
              </p>

              {/* Slide 4 specific trust text badge and interactive tracks */}
              {slides[currentSlide].id === 4 && (
                <div className="w-full space-y-4 mb-4 select-none">
                  {/* Distinctive trust line */}
                  <div className="text-[11px] font-black text-[#667085] tracking-wider uppercase font-mono bg-[#E5F7F0]/40 border border-[#2BC48A]/10 px-3.5 py-2 rounded-xl inline-block max-w-full">
                    🛡️ Trusted by 5M+ users, 300+ enterprises, NHS partners & Fortune 500 organizations.
                  </div>

                  {/* Horizontal visual tracks [ For Me ], [ For Employers ], [ For Insurers ], [ For Providers ] */}
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://consult.goqii.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#2BC48A]/20 bg-white hover:bg-[#E5F7F0] hover:border-[#2BC48A] text-[9.5px] font-black uppercase text-slate-800 tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A]" />
                      For Me
                    </a>

                    <a
                      href="https://goqii.com/healthengage-corporate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-[#E5F7F0] hover:border-[#2BC48A] text-[9.5px] font-black uppercase text-slate-800 tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      For Employers
                    </a>

                    <a
                      href="https://goqii.com/healthengage-insurance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-[#E5F7F0] hover:border-[#2BC48A] text-[9.5px] font-black uppercase text-slate-800 tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      For Insurers
                    </a>

                    <a
                      href="https://go-qii-connected-care-7c49.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-slate-200 bg-white hover:bg-[#E5F7F0] hover:border-[#2BC48A] text-[9.5px] font-black uppercase text-slate-800 tracking-wider transition-all cursor-pointer shadow-xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      For Providers
                    </a>
                  </div>
                </div>
              )}

              {/* XPRIZE Premium Badge */}
              {slides[currentSlide].id !== 4 && (
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
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dedicated Slide-Specific Card/Banner for mobile screens removed as requested to keep only text */}

          {/* CTA Group: Get the App & Book a Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="mt-6 flex flex-wrap items-center gap-4 relative z-10"
          >
            <motion.button
              onClick={() => slides[currentSlide].id === 4 ? setIsBookDemoOpen(true) : setIsGetAppOpen(true)}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(43, 196, 138, 0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-[#2BC48A] text-white text-sm font-bold tracking-wider uppercase rounded-full cursor-pointer transition-shadow shadow-[0_4px_12px_rgba(43,196,138,0.2)]"
            >
              {slides[currentSlide].id === 4 ? "Book a Demo" : "Get the App"}
            </motion.button>

            <motion.button
              onClick={() => slides[currentSlide].id === 4 ? document.getElementById("section-problem")?.scrollIntoView({ behavior: "smooth" }) : setIsBookDemoOpen(true)}
              whileHover={{ scale: 1.03, backgroundColor: "#E9FBF6" }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-4 bg-white text-[#0F172A] border border-[#E8EDF2] text-sm font-bold tracking-wider uppercase rounded-full cursor-pointer transition-colors shadow-sm"
            >
              {slides[currentSlide].id === 4 ? "See How It Works" : "Book a Demo"}
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


        </div>
      </div>

      {/* ================= MODAL: GET THE APP ================= */}
      <AnimatePresence>
        {isGetAppOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setIsGetAppOpen(false)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-md bg-white border border-[#E8EDF2] shadow-2xl rounded-3xl p-6 md:p-8 z-10 text-left overflow-hidden"
            >
              <button
                onClick={() => setIsGetAppOpen(false)}
                className="absolute top-5 right-5 p-1.5 rounded-full border border-[#E8EDF2] hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-[#E5F7F0] text-[#2BC48A] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                    Download GOQii
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    Start Your Healthspan Journey
                  </h3>
                  <p className="text-[#667085] text-xs mt-2 font-medium leading-relaxed">
                    Access personalized diagnostics, certified coaching, AI risk evaluation, and wearable sync options directly in the mobile workspace.
                  </p>
                </div>

                {/* QR Code and App Badges Section */}
                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#F8FAFB] rounded-2xl border border-[#E8EDF2]">
                  {/* Real QR Code Image */}
                  <div className="w-28 h-28 bg-white border border-[#E8EDF2] p-1.5 rounded-xl shrink-0 flex items-center justify-center relative shadow-sm">
                    <img
                      src="https://appcdn.goqii.com/storeimg/94397_1781604569.png"
                      alt="Download GOQii APP"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-2.5 w-full">
                    <span className="text-[10px] font-bold text-[#667085] uppercase tracking-wider text-center sm:text-left">
                      Scan to install on iOS & Android
                    </span>
                    
                    <a
                      href="https://apps.apple.com/in/app/goqii-smart-preventative-healthcare/id916183921"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2.5 bg-[#0F172A] text-white py-2 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      <img
                        src="https://appcdn.goqii.com/storeimg/80934_1781605746.png"
                        alt="App Store"
                        className="w-4.5 h-4.5 object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-left font-sans">
                        <div className="text-[8px] font-medium text-slate-300 leading-none">Download on the</div>
                        <div className="text-xs font-black leading-tight mt-0.5">App Store</div>
                      </div>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.goqii.doctor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2.5 bg-[#0F172A] text-white py-2 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-sm"
                    >
                      <img
                        src="https://appcdn.goqii.com/storeimg/23798_1781605739.png"
                        alt="Google Play"
                        className="w-4.5 h-4.5 object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <div className="text-left font-sans">
                        <div className="text-[8px] font-medium text-slate-300 leading-none">Get it on</div>
                        <div className="text-xs font-black leading-tight mt-0.5">Google Play</div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-slate-500 text-[11px] font-semibold">
                  <span>✨ Semifinalist XPRIZE Healthspan</span>
                  <span>•</span>
                  <span>Trusted by 5M+ Users</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: BOOK A DEMO ================= */}
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} />

    </div>
  );
}
