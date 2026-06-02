import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Moon, Leaf, Star, Footprints } from "lucide-react";

export default function SectionGap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const graphicContainerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = graphicContainerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        setScale(Math.min(1, width / 500));
      }
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hook into viewport scroll progress for this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform offsets to simulate "unifying" scatter on scroll down
  const sleepY = useTransform(scrollYProgress, [0.1, 0.55], [-70, 0]);
  const sleepOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const nutritionX = useTransform(scrollYProgress, [0.1, 0.55], [70, 0]);
  const nutritionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const recoveryY = useTransform(scrollYProgress, [0.1, 0.55], [70, 0]);
  const recoveryOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  const movementX = useTransform(scrollYProgress, [0.1, 0.55], [-70, 0]);
  const movementOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0.6, 1]);

  // Curve draw factor on scroll progress
  const lineDraw = useTransform(scrollYProgress, [0.25, 0.6], [0.15, 1]);
  const coreScale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1.05]);

  return (
    <div
      id="section-gap"
      ref={containerRef}
      className="relative min-h-[100vh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#FAFBFB] py-12 md:py-20 px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        
        {/* Left column: Highly Polished Typography content */}
        <div className="lg:col-span-5 flex flex-col justify-center text-left">
          
          {/* Label structure: 02 | THE MISSING LINK */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">02</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              The Missing Link
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-[54px] font-black tracking-tight text-[#0F172A] leading-[1.05] mb-8 font-sans"
          >
            We know <br />
            <span className="text-[#5A6376]">what to do.</span>
            <br />
            We struggle <br />
            <span className="text-[#2BC48A]">to do it.</span>
          </motion.h2>

          {/* Green accent line as shown in the design */}
          <div className="w-[72px] h-[3px] bg-[#2BC48A] rounded-full mb-8" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
            className="text-base sm:text-[17px] font-sans text-[#475467] leading-[1.8] max-w-sm mb-12"
          >
            <p>
              Health information is abundant. <br />
              Consistent action is not. <br />
              Under guidance, vectors transform.
            </p>
          </motion.div>

          {/* Low pill tag "Guidance turns knowledge..." */}
          <div className="flex items-center self-start">
            <div className="inline-flex items-center gap-3.5 bg-white border border-[#F1F5F9]/80 px-5 py-3.5 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.025)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.04)] transition-all duration-500">
              <div className="w-8 h-8 rounded-full bg-[#E8F8F2] flex items-center justify-center text-[#2BC48A]">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12M12 12c-2-2.5-5-2-5-2s.5 4 5 2c2-2.5 5-2 5-2s-.5 4-5 2z"/>
                </svg>
              </div>
              <span className="text-[13px] font-sans font-medium text-[#475467] leading-relaxed">
                <span className="text-[#2BC48A] font-semibold">Guidance</span> turns knowledge <br className="hidden sm:inline" /> into lasting change.
              </span>
            </div>
          </div>
        </div>

        {/* Right column: Interactive Connected Orbits Canvas */}
        <div className="lg:col-span-1" /> {/* Layout cushion spacing */}
        
        <div 
          ref={graphicContainerRef}
          className="lg:col-span-6 relative w-full aspect-square max-w-[500px] lg:max-w-[520px] rounded-[32px] bg-white border border-[#E8EDF2]/40 shadow-[0_12px_40px_rgba(0,0,0,0.015)] flex items-center justify-center overflow-hidden mx-auto"
        >
          {/* Inner Scaled Canvas wrapper */}
          <div 
            className="relative w-[500px] h-[500px] shrink-0 pointer-events-auto"
            style={{ 
              transform: `scale(${scale})`, 
              transformOrigin: "center center"
            }}
          >
          
          {/* 1. Backdrop Ambient Rotating Celestial Grid Details */}
          <motion.svg 
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.28]" 
            viewBox="0 0 550 550"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, ease: "linear", duration: 100 }}
          >
            {/* Soft Concentric Orbits */}
            <circle cx="275" cy="275" r="50" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.12" />
            <circle cx="275" cy="275" r="105" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.09" />
            <circle cx="275" cy="275" r="160" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.07" />
            <circle cx="275" cy="275" r="220" fill="none" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.04" />
            
            {/* Elegant Data telemetry link dots positioned on Orbits */}
            <circle cx="349" cy="198" r="3.5" fill="#2BC48A" fillOpacity="0.5" className="animate-pulse" />
            <circle cx="162" cy="386" r="3" fill="#2BC48A" fillOpacity="0.4" />
            <circle cx="433" cy="383" r="3" fill="#2BC48A" fillOpacity="0.4" className="animate-pulse" />
            <circle cx="385" cy="148" r="3.5" fill="#2BC48A" fillOpacity="0.5" />
          </motion.svg>

          {/* 2. Static Connection Paths System */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 550 550">
            {/* Curving swooping data fibers from Movement (left: 125,275) to Core (center: 275,275) */}
            <motion.g style={{ opacity: lineDraw }}>
              {/* Curve 1 - Center Straightish */}
              <path d="M 125 275 Q 200 275, 275 275" stroke="#2BC48A" strokeWidth="1.2" fill="none" strokeOpacity="0.25" strokeDasharray="3 3" />
              {/* Curve 2 - Deep Swoop Bottom */}
              <path d="M 125 275 C 155 330, 220 315, 275 275" stroke="#2BC48A" strokeWidth="1" fill="none" strokeOpacity="0.18" />
              {/* Curve 3 - Swoop Top */}
              <path d="M 125 275 C 160 220, 225 240, 275 275" stroke="#2BC48A" strokeWidth="1" fill="none" strokeOpacity="0.18" />
              {/* Curve 4 - Dynamic lower split fibers */}
              <path d="M 125 275 C 145 355, 240 310, 275 275" stroke="#2BC48A" strokeWidth="0.8" fill="none" strokeOpacity="0.12" />
              {/* Curve 5 - Dynamic upper split fibers */}
              <path d="M 125 275 C 145 195, 240 240, 275 275" stroke="#2BC48A" strokeWidth="0.8" fill="none" strokeOpacity="0.12" />

              {/* Anchor line nodes to Sleep, Nutrition, Recovery */}
              <line x1="275" y1="125" x2="275" y2="230" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
              <line x1="425" y1="275" x2="320" y2="275" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
              <line x1="275" y1="425" x2="275" y2="320" stroke="#2BC48A" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="3 3" />
            </motion.g>

            {/* Glowing signal flow nodes */}
            <circle cx="235" cy="275" r="3" fill="#2BC48A" />
            <circle cx="235" cy="275" r="8" fill="#2BC48A" fillOpacity="0.15" className="animate-ping" />
          </svg>

          {/* 3. CENTRAL GLOWING CORE */}
          <motion.div
            style={{ scale: coreScale }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-[#2BC48A] flex flex-col items-center justify-center border-4 border-white shadow-[0_8px_32px_rgba(43,196,138,0.22)]"
          >
            <span className="text-[11.5px] font-sans font-bold tracking-[0.22em] text-white select-none">CORE</span>
            {/* Pulsing outer atmosphere rings */}
            <div className="absolute inset-[-12px] rounded-full border border-[#2BC48A]/20 scale-100 animate-pulse duration-1000" />
            <div className="absolute inset-[-24px] rounded-full border border-[#2BC48A]/5 scale-100" />
          </motion.div>

          {/* 4. CORE CHANNELS NODES (Pristine circular nodes with kinetic animations) */}
          
          {/* Channel A: SLEEP (Top - centered at Y: 22.5%, X: 50%) */}
          <motion.div
            style={{ y: sleepY, opacity: sleepOpacity }}
            className={`absolute top-[16%] left-1/2 -translate-x-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center p-1 cursor-pointer ${
              hoveredNode === "sleep" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.1)]" : "border-[#E8EDF2] shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            }`}
            onMouseEnter={() => setHoveredNode("sleep")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1">
                <Moon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </div>
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                Sleep
              </span>
            </motion.div>
          </motion.div>

          {/* Channel B: NUTRITION (Right - centered at Y: 50%, X: 77.5%) */}
          <motion.div
            style={{ x: nutritionX, opacity: nutritionOpacity }}
            className={`absolute right-[14%] top-1/2 -translate-y-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center p-1 cursor-pointer ${
              hoveredNode === "nutrition" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.1)]" : "border-[#E8EDF2] shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            }`}
            onMouseEnter={() => setHoveredNode("nutrition")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.8 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1">
                <Leaf className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </div>
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                Nutrition
              </span>
            </motion.div>
          </motion.div>

          {/* Channel C: RECOVERY (Bottom - centered at Y: 77.5%, X: 50%) */}
          <motion.div
            style={{ y: recoveryY, opacity: recoveryOpacity }}
            className={`absolute bottom-[16%] left-1/2 -translate-x-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center p-1 cursor-pointer ${
              hoveredNode === "recovery" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.1)]" : "border-[#E8EDF2] shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            }`}
            onMouseEnter={() => setHoveredNode("recovery")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1.6 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1">
                <Star className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </div>
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                Recovery
              </span>
            </motion.div>
          </motion.div>

          {/* Channel D: MOVEMENT (Left - centered at Y: 50%, X: 22.5%) */}
          <motion.div
            style={{ x: movementX, opacity: movementOpacity }}
            className={`absolute left-[14%] top-1/2 -translate-y-1/2 z-20 w-[84px] h-[84px] rounded-full bg-white border transition-all duration-300 flex flex-col items-center justify-center p-1 cursor-pointer ${
              hoveredNode === "movement" ? "border-[#2BC48A] shadow-[0_8px_24px_rgba(43,196,138,0.1)]" : "border-[#E8EDF2] shadow-[0_4px_16px_rgba(0,0,0,0.02)]"
            }`}
            onMouseEnter={() => setHoveredNode("movement")}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 2.4 }}
              className="flex flex-col items-center justify-center w-full"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#2BC48A] mb-1">
                <Footprints className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
              </div>
              <span className="text-[8.5px] font-sans font-extrabold tracking-[0.16em] text-[#0F172A] uppercase">
                Movement
              </span>
            </motion.div>
          </motion.div>

          {/* 5. DOWN POINTING HINT ARROW AND TEXT */}
          <div className="absolute bottom-6 flex flex-col items-center gap-2 pointer-events-none">
            <span className="text-[8.5px] font-sans font-extrabold tracking-[0.18em] text-[#94A3B8] uppercase">
              Scroll down to unify channels
            </span>
          </div>

          </div>
        </div>

      </div>
    </div>
  );
}
