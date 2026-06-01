import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import SmartText from "./SmartText";

// Counters hook to animate values in viewport
function AnimatedCounter({ endValue, suffix = "", duration = 2000 }: { endValue: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * endValue));
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-4xl sm:text-6xl font-black font-sans text-[#0F172A] tracking-tighter mb-2">
      {count}
      {suffix}
    </div>
  );
}

export default function TrustRegulatory() {
  const logosPartners = [
    "Insurance Partners",
    "Corporate Clients",
    "Healthcare Providers",
    "Government Bodies",
    "Global Partners"
  ];
  const logosRegulatory = ["CDSCO", "HIPAA", "FHIR", "ABDM", "NHS", "ISO", "SOC2", "GDPR"];

  return (
    <div className="w-full bg-[#F8FAFB] py-20 divide-y divide-[#E8EDF2] overflow-hidden select-none">
      
      {/* SECTION 10: TRUST */}
      <div id="section-trust" className="py-16 md:py-28 px-6 md:px-16 w-full flex flex-col items-center justify-center">
        {/* Label */}
        <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col items-start font-bold">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-caps !text-[#2BC48A] mb-4"
          >
            Section 10 / Global Scale
          </motion.div>
        </div>

        {/* Headline */}
        <div className="w-full max-w-6xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#0F172A] leading-[1]"
          >
            Built for millions. <br />
            <span className="text-[#667085]">Designed for every human.</span>
          </motion.h2>
        </div>

        {/* Logo Marquee */}
        <div className="w-full relative py-8 overflow-hidden mb-16 select-none pointer-events-none">
          {/* Subtle gradient edges */}
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#F8FAFB] to-transparent z-10" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#F8FAFB] to-transparent z-10" />

          {/* Marquee Track (Double content to keep it infinite) */}
          <div className="flex space-x-12 animate-marquee whitespace-nowrap w-max animate-infinite">
            {/* Set 1 */}
            {logosPartners.map((logo, i) => (
              <span key={`partner-1-${i}`} className="inline-block text-lg sm:text-2xl font-semibold tracking-wider text-[#667085] opacity-35 px-8 font-serif italic uppercase">
                {logo}
              </span>
            ))}
            {/* Set 2 */}
            {logosPartners.map((logo, i) => (
              <span key={`partner-2-${i}`} className="inline-block text-lg sm:text-2xl font-semibold tracking-wider text-[#667085] opacity-35 px-8 font-serif italic uppercase">
                {logo}
              </span>
            ))}
          </div>

          {/* Inline CSS animation Injection for marquee and CDSCO loop cleanly */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 25s linear infinite;
            }
          `}} />
        </div>

        {/* Minimal Metrics Grid */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-4 text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center justify-center p-4 border-r border-[#E8EDF2]/10 last:border-0"
          >
            <AnimatedCounter endValue={1} suffix="M+" />
            <div className="text-xs font-mono tracking-widest text-[#667085] uppercase">
              Lives Covered
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center justify-center p-4 border-r border-[#E8EDF2]/10 last:border-0"
          >
            <AnimatedCounter endValue={50} suffix="K+" />
            <div className="text-xs font-mono tracking-widest text-[#667085] uppercase">
              Employees Engaged
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center p-4 border-r border-[#E8EDF2]/10 last:border-0"
          >
            <AnimatedCounter endValue={34} suffix="%" />
            <div className="text-xs font-mono tracking-widest text-[#667085] uppercase">
              Claims Reduction
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-center justify-center p-4"
          >
            <AnimatedCounter endValue={90} suffix="%" />
            <div className="text-xs font-mono tracking-widest text-[#667085] uppercase">
              Patient Satisfaction
            </div>
          </motion.div>

        </div>
      </div>

      {/* SECTION 11: REGULATORY COMPLIANCE */}
      <div id="section-regulatory" className="py-16 md:py-28 px-6 md:px-16 w-full flex flex-col items-center justify-center bg-white border-y border-[#E8EDF2]">
        
        {/* Label */}
        <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col items-start font-bold animate-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label-caps !text-[#2BC48A] mb-4"
          >
            Section 11 / Secure By Design
          </motion.div>
        </div>

        {/* Headline */}
        <div className="w-full max-w-6xl mx-auto mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-bold tracking-tighter text-[#0F172A] leading-[1]"
          >
            Secure. Scalable. <br />
            <span className="text-[#667085]">Regulatory Grade.</span>
          </motion.h2>
        </div>

        {/* Subtext */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-[#667085] max-w-xl"
          >
            Built to support healthcare organizations, governments and enterprises globally.
          </motion.p>
        </div>

        {/* Logo Strip Continuous Marquee without description / borders card */}
        <div className="w-full relative py-6 overflow-hidden select-none pointer-events-none">
          {/* Subtle gradient edges over white background */}
          <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Infinite reverse loop and smooth continuous flow */}
          <div className="flex space-x-16 animate-marquee-reverse whitespace-nowrap w-max">
            {logosRegulatory.map((reg, i) => (
              <span key={`reg-1-${i}`} className="inline-block text-xl sm:text-2xl font-mono tracking-widest text-[#0F172A] opacity-60 font-black px-12">
                {reg}
              </span>
            ))}
            {logosRegulatory.map((reg, i) => (
              <span key={`reg-2-${i}`} className="inline-block text-xl sm:text-2xl font-mono tracking-widest text-[#0F172A] opacity-60 font-black px-12">
                {reg}
              </span>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 30s linear infinite;
            }
          `}} />
        </div>

      </div>

    </div>
  );
}
