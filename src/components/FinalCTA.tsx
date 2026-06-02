import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Particles from "./Particles";

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Hook scroll progress specifically for the exit fading sequence
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // At the scroll end (progress from 0.4 to 0.95), everything fades to 0 except the main title
  const fadeOutElements = useTransform(scrollYProgress, [0.1, 0.65], [1, 0]);
  const scaleGlow = useTransform(scrollYProgress, [0, 0.7], [1, 1.3]);
  const titleY = useTransform(scrollYProgress, [0.1, 0.7], [0, 15]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div
      id="section-final"
      ref={containerRef}
      className="relative h-[150vh] w-full bg-[#F8FAFB]"
    >
      {/* Sticky viewport content that stays in place while scrolling through this 150vh exit track */}
      <div className="sticky top-0 left-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden px-6 text-center select-none">
        
        {/* Large faded circular glow background */}
        <motion.div
          style={{ scale: scaleGlow, opacity: fadeOutElements }}
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#2BC48A]/15 to-[#F8FAFB] blur-[70px] pointer-events-none z-0"
        />

        {/* Slow particle movements */}
        <motion.div style={{ opacity: fadeOutElements }} className="absolute inset-0 z-0">
          <Particles count={15} color="bg-[#2BC48A]" speedMultiplier={0.6} />
        </motion.div>

        {/* The main core headline - remains visible */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
          <motion.h2
            style={{ y: titleY }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter text-[#0F172A] leading-[0.9] text-center"
          >
            Human health deserves <br />
            <span className="text-[#2BC48A]">better systems.</span>
          </motion.h2>

          {/* Subtext - Fades away */}
          <motion.p
            style={{ opacity: fadeOutElements }}
            className="text-lg md:text-2xl font-normal text-[#667085] mt-8 mb-12 tracking-wide"
          >
            Welcome to GOQii 2.0
          </motion.p>

          {/* Email input join form - Fades away */}
          <motion.div
            style={{ opacity: fadeOutElements }}
            className="w-full max-w-md z-20"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-4 rounded-xl bg-white border border-[#E8EDF2] text-[#2BC48A] font-semibold text-sm shadow-xs"
              >
                Thank you. Welcome to the future.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white border border-[#E8EDF2] focus:border-[#2BC48A] focus:outline-none text-sm text-[#0F172A]"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0F172A] text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-slate-800 transition-colors pointer-events-auto cursor-pointer flex items-center justify-center"
                >
                  Join The Future
                </button>
              </form>
            )}
          </motion.div>

          {/* Scroll down hints at start of section */}
          <motion.div
            style={{ opacity: fadeOutElements }}
            className="absolute bottom-[-140px] font-mono text-[9px] text-[#667085] tracking-widest uppercase"
          >
            KEEP SCROLLING TO SEAL EXPERIENCE
          </motion.div>
        </div>
      </div>
    </div>
  );
}
