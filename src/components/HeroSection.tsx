import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Particles from "./Particles";
import SmartText from "./SmartText";

// Reference the exact generated image asset path
import heroImage from "../assets/images/goqii_hero_portrait_1780319171867.png";

export default function HeroSection({ onExplore }: { onExplore: () => void }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Create 20% parallax scrolling effect on the image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  // Text animation configuration (reveal word by word or line by line)
  const line1 = "Health should begin";
  const line2 = "before illness.";

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
          <img
            src={heroImage}
            alt="Serene health reflection portrait"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient edges & overlays requested in Bold Typography design */}
          <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#2BC48A]/15 via-blue-100/25 to-transparent blur-[110px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[#2BC48A]/8 blur-[90px] pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFB]/10 via-transparent to-[#F8FAFB]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F8FAFB] to-transparent" />
        </motion.div>
      </div>

      {/* Decorative frame border for high-end structure */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] h-[90%] border border-[#E8EDF2] opacity-40 pointer-events-none z-0 rounded-2xl" />

      {/* Atmospheric signals drifting */}
      <Particles count={25} color="bg-[#2BC48A]" speedMultiplier={0.8} />

      {/* Top Header Navigation bar placeholder (Minimal) */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-[#2BC48A] flex items-center justify-center text-white font-extrabold text-xs">G</div>
          <span className="font-extrabold text-xl tracking-tighter text-[#0F172A]">
            GOQii <span className="text-[#2BC48A] font-light">2.0</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-[13px] font-medium text-[#667085]">
          <span>People</span>
          <span>Ecosystem</span>
          <span className="text-[#2BC48A]">Alive O.S.</span>
        </div>
      </div>

      {/* Hero Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto my-auto flex flex-col items-center text-center mt-20 md:mt-32">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="label-caps mb-6 md:mb-8"
        >
          Operating System for Human Health
        </motion.div>

        {/* Big Large Typography (Reveal line by line using the explicit hero-heading class) */}
        <h1 className="hero-heading text-[#0F172A] mb-8 flex flex-col items-center">
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="inline-block"
            >
              {line1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-2">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="inline-block text-[#2BC48A]"
            >
              before illness.
            </motion.span>
          </span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="text-lg md:text-2xl font-normal text-[#667085] max-w-xl md:max-w-2xl leading-relaxed mb-10"
        >
          <SmartText>Continuous health intelligence for people, enterprises and populations.</SmartText>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
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
      </div>

      {/* Tiny footer tracker */}
      <div className="relative z-10 w-full flex justify-between items-center text-[10px] font-mono tracking-widest text-[#667085] uppercase">
        <span>PREVENTIVE HEALTHCARE</span>
        <span>SCROLL TO DISCOVER</span>
      </div>
    </div>
  );
}
