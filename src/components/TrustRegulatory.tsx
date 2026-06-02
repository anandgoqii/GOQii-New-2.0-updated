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
  const certificates = [
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-9.png",
      title: "SOC 2",
      desc: "Security, Availability & Confidentiality"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-6.png",
      title: "HIPAA Compliant",
      desc: "Health Insurance Portability & Accountability"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-5.png",
      title: "GDPR Compliant",
      desc: "EU General Data Protection Regulation"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-7.png",
      title: "Cyber Essentials Certified",
      desc: "UK National Cyber Security Centre Standards"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-4.png",
      title: "ISO/IEC 27001:2022",
      desc: "Information Security Management System"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-3.png",
      title: "ISO 13485:2016",
      desc: "Medical Devices Quality Management"
    },
    {
      img: "https://appcdn.goqii.com/storeimg/26305_1733141292.png",
      title: "CDSCO Medical Utility",
      desc: "Central Drugs Standard Control Organisation"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-8.png",
      title: "DPDPA Ready",
      desc: "Digital Personal Data Protection Act Compliant"
    },
    {
      img: "https://goqii.com/goqii_uk_home/assets/images/img-cetificate-2.png",
      title: "FDA Registered Class II",
      desc: "Food & Drug Administration Registered Device"
    }
  ];

  const logosPartners = [
    "Insurance Partners",
    "Corporate Clients",
    "Healthcare Providers",
    "Government Bodies",
    "Global Partners"
  ];
  const logosRegulatory = ["CDSCO", "HIPAA", "FHIR", "ABDM", "NHS", "ISO", "SOC2", "GDPR"];

  return (
    <div className="w-full bg-[#FAFBFB] py-12 divide-y divide-[#E8EDF2] overflow-hidden select-none">
      
      {/* SECTION 10: GLOBAL SCALE */}
      <div id="section-trust" className="py-10 md:py-16 px-4 sm:px-6 md:px-16 w-full flex flex-col items-center justify-center">
        
        {/* Header Tag Index Layout */}
        <div className="w-full max-w-6xl mx-auto mb-8 flex flex-col items-start font-sans">
          <div className="flex items-center gap-4 text-xs tracking-wide">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">10</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              GLOBAL SCALE
            </span>
          </div>
        </div>

        {/* Headline & Description */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
          >
            Built for millions. <br />
            Designed for <span className="text-[#2BC48A]">every human.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#667085] text-sm sm:text-base font-medium mt-4 max-w-xl font-sans"
          >
            A global impact across individuals, enterprises, health systems, and communities.
          </motion.p>
        </div>

        {/* ================= GLOBAL SCALE PARTNERS MARQUEE CARD ================= */}
        <div className="w-full max-w-6xl mx-auto bg-white border border-[#E8EDF2] rounded-[24px] p-8 sm:p-10 shadow-[0_12px_32px_rgba(15,23,42,0.01)] mb-12 overflow-hidden relative">
          <div className="text-[10px] font-sans font-black tracking-[0.2em] text-[#2BC48A] uppercase mb-6 text-center select-none opacity-85">
            GLOBAL PARTNERS & SCALE
          </div>
          <div className="relative w-full overflow-hidden py-2 select-none">
            {/* Edge blur mask overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/50 to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
              <motion.div
                animate={{ x: [0, "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 25,
                  repeat: Infinity,
                }}
                className="flex items-center gap-12 sm:gap-20 shrink-0 whitespace-nowrap pl-4 pr-1"
              >
                {[
                  "https://appcdn.goqii.com/storeimg/27854_1733133577.png",
                  "https://appcdn.goqii.com/storeimg/74067_1733133593.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-harvard.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-idc.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-device-world.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-swiss-re.png",
                  "https://appcdn.goqii.com/storeimg/83714_1733133635.png"
                ].concat([
                  "https://appcdn.goqii.com/storeimg/27854_1733133577.png",
                  "https://appcdn.goqii.com/storeimg/74067_1733133593.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-harvard.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-idc.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-device-world.png",
                  "https://storecdn.goqii.com/media/goqiiweb/assets/images/partners-logo-swiss-re.png",
                  "https://appcdn.goqii.com/storeimg/83714_1733133635.png"
                ]).map((logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt="Partner logo"
                    className="h-10 sm:h-12 w-auto object-contain filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= METRIC CARDS GRID ================= */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Lives Covered */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center bg-white border border-[#E8EDF2] rounded-[32px] p-8 shadow-[0_16px_48px_rgba(15,23,42,0.015)]"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-[#E5F7F0]/60 -z-10 blur-[8px]" />
              <div className="w-12 h-12 rounded-full border border-emerald-50 bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(43,196,138,0.06)] text-[#2BC48A]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>

            <div className="text-4xl lg:text-[44px] font-black font-sans text-[#0F172A] tracking-tight mb-2">
              <AnimatedCounter endValue={1} suffix="M+" />
            </div>

            <div className="text-[10px] font-sans font-extrabold tracking-[0.15em] text-[#2BC48A] uppercase mb-4 leading-none">
              LIVES COVERED
            </div>

            <p className="text-[#667085] text-[13px] leading-relaxed max-w-[200px] font-sans font-medium">
              Individuals and families using GOQii solutions globally.
            </p>
          </motion.div>

          {/* Card 2: Employees Engaged */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="flex flex-col items-center text-center bg-white border border-[#E8EDF2] rounded-[32px] p-8 shadow-[0_16px_48px_rgba(15,23,42,0.015)]"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-[#E5F7F0]/60 -z-10 blur-[8px]" />
              <div className="w-12 h-12 rounded-full border border-emerald-50 bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(43,196,138,0.06)] text-[#2BC48A]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>

            <div className="text-4xl lg:text-[44px] font-black font-sans text-[#0F172A] tracking-tight mb-2">
              <AnimatedCounter endValue={50} suffix="K+" />
            </div>

            <div className="text-[10px] font-sans font-extrabold tracking-[0.15em] text-[#2BC48A] uppercase mb-4 leading-none">
              EMPLOYEES ENGAGED
            </div>

            <p className="text-[#667085] text-[13px] leading-relaxed max-w-[200px] font-sans font-medium">
              Enterprise workforce thriving with preventive health.
            </p>
          </motion.div>

          {/* Card 3: Claims Reduction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center text-center bg-white border border-[#E8EDF2] rounded-[32px] p-8 shadow-[0_16px_48px_rgba(15,23,42,0.015)]"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-[#E5F7F0]/60 -z-10 blur-[8px]" />
              <div className="w-12 h-12 rounded-full border border-emerald-50 bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(43,196,138,0.06)] text-[#2BC48A]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>

            <div className="text-4xl lg:text-[44px] font-black font-sans text-[#0F172A] tracking-tight mb-2">
              <AnimatedCounter endValue={34} suffix="%" />
            </div>

            <div className="text-[10px] font-sans font-extrabold tracking-[0.15em] text-[#2BC48A] uppercase mb-4 leading-none">
              CLAIMS REDUCTION
            </div>

            <p className="text-[#667085] text-[13px] leading-relaxed max-w-[200px] font-sans font-medium">
              Average reduction in claims through proactive programs.
            </p>
          </motion.div>

          {/* Card 4: Patient Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col items-center text-center bg-white border border-[#E8EDF2] rounded-[32px] p-8 shadow-[0_16px_48px_rgba(15,23,42,0.015)]"
          >
            <div className="relative mb-6 flex items-center justify-center">
              <div className="absolute w-16 h-16 rounded-full bg-[#E5F7F0]/60 -z-10 blur-[8px]" />
              <div className="w-12 h-12 rounded-full border border-emerald-50 bg-white flex items-center justify-center shadow-[0_4px_12px_rgba(43,196,138,0.06)] text-[#2BC48A]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>

            <div className="text-4xl lg:text-[44px] font-black font-sans text-[#0F172A] tracking-tight mb-2">
              <AnimatedCounter endValue={90} suffix="%" />
            </div>

            <div className="text-[10px] font-sans font-extrabold tracking-[0.15em] text-[#2BC48A] uppercase mb-4 leading-none">
              PATIENT SATISFACTION
            </div>

            <p className="text-[#667085] text-[13px] leading-relaxed max-w-[200px] font-sans font-medium">
              Consistently high satisfaction across health programs.
            </p>
          </motion.div>

        </div>

        {/* ================= BOTTOM BANNER PILL ================= */}
        <div className="mt-16 flex justify-center w-full">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8EDF2] px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.01)] text-xs sm:text-sm font-semibold text-[#475467] font-sans">
            <div className="w-6 h-6 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A]">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <span>One mission. One platform. <span className="text-[#2BC48A] font-bold">Global impact.</span></span>
          </div>
        </div>

      </div>

      {/* SECTION 11: SECURE BY DESIGN */}
      <div id="section-regulatory" className="py-14 px-4 sm:px-6 md:px-16 w-full flex flex-col items-center justify-center bg-[#FAFBFB] border-t border-[#E8EDF2]">
        
        {/* Header Tag Index Layout */}
        <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col items-start font-sans">
          <div className="flex items-center gap-4 text-xs tracking-wide">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">11</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              SECURE BY DESIGN
            </span>
          </div>
        </div>

        {/* Two-Column Header Layout (Title/Desc on Left, Concentric Circles/Shield on Right) */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-[50px] font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
            >
              Secure. Scalable. <br />
              <span className="text-[#64748B]">Regulatory </span>
              <span className="text-[#2BC48A]">Grade.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#667085] text-sm sm:text-base font-medium mt-6 max-w-xl font-sans"
            >
              Built to support healthcare organizations, governments and enterprises globally.
            </motion.p>
          </div>

          {/* Right Column: Dynamic Shield concentric circles visualization */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[300px] select-none pointer-events-none">
            
            {/* Outer dotted circles with small pulsing green dots */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#E2E8F0]/80 flex items-center justify-center">
              
              {/* Ring 2 inner */}
              <div className="absolute w-[220px] h-[220px] rounded-full border border-dashed border-[#CBD5E1]/60 flex items-center justify-center">
                
                {/* Ring 3 inner */}
                <div className="absolute w-[160px] h-[160px] rounded-full border border-dashed border-[#CBD5E1]/40 flex items-center justify-center" />
                
              </div>

              {/* Little green dots positioned around the ring */}
              <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_8px_#2BC48A] animate-pulse" />
              <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_8px_#2BC48A] animate-pulse" style={{ animationDelay: "0.5s" }} />
              <div className="absolute top-[60%] left-[5%] w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_8px_#2BC48A] animate-pulse" style={{ animationDelay: "1s" }} />
              <div className="absolute bottom-[5%] left-[65%] w-1.5 h-1.5 rounded-full bg-[#2BC48A] shadow-[0_0_8px_#2BC48A] animate-pulse" style={{ animationDelay: "1.5s" }} />

            </div>

            {/* Glowing active central target area */}
            <div className="relative w-44 h-44 rounded-full bg-gradient-to-tr from-[#E5F7F0]/20 to-transparent flex items-center justify-center">
              
              {/* Radial gradient backing */}
              <div className="absolute inset-2 rounded-full bg-white shadow-[0_16px_40px_rgba(15,23,42,0.03)] border border-[#E8EDF2]" />
              
              {/* The Shield element */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-28 h-32 flex items-center justify-center"
              >
                {/* High quality Glassmorphism Shield Background */}
                <svg className="absolute inset-0 w-full h-full drop-shadow-[0_12px_24px_rgba(43,196,138,0.08)]" viewBox="0 0 100 120" fill="none">
                  {/* Outer shield borders */}
                  <path
                    d="M50 5 L90 20 V65 C90 95 50 115 50 115 C50 115 10 95 10 65 V20 L50 5 Z"
                    fill="url(#shieldGlassGrad)"
                    stroke="url(#shieldBorderGrad)"
                    strokeWidth="3"
                  />
                  <defs>
                    <linearGradient id="shieldGlassGrad" x1="50" y1="5" x2="50" y2="115" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFFFFF" stopOpacity="0.95" />
                      <stop offset="1" stopColor="#E5F7F0" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="shieldBorderGrad" x1="50" y1="5" x2="50" y2="115" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#2BC48A" stopOpacity="0.4" />
                      <stop offset="1" stopColor="#2BC48A" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Shield core centered Checkmark */}
                <div className="relative z-20 w-12 h-12 rounded-full bg-gradient-to-tr from-[#2BC48A] to-[#2ecc71] shadow-lg shadow-emerald-500/20 flex items-center justify-center text-white">
                  <svg className="w-5 h-5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

              </motion.div>

            </div>

          </div>

        </div>

        {/* Infinite Sliding Security & Regulatory Marquee */}
        <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-6 mb-14 select-none">
          {/* Edge blur mask overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFBFB] via-[#FAFBFB]/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFBFB] via-[#FAFBFB]/50 to-transparent z-10 pointer-events-none" />

          <div className="flex w-max">
            <motion.div
              animate={{ x: [0, "-50%"] }}
              transition={{
                ease: "linear",
                duration: 38,
                repeat: Infinity,
              }}
              className="flex gap-5 shrink-0 whitespace-nowrap pl-4 pr-1"
            >
              {[...certificates, ...certificates].map((cert, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-4 sm:gap-5 bg-white border border-[#E8EDF2] rounded-2xl p-4 sm:p-4.5 min-w-[290px] sm:min-w-[340px] shadow-[0_4px_16px_rgba(15,23,42,0.01)] hover:border-[#2BC48A] hover:bg-slate-50/40 transition-all duration-300 shrink-0"
                >
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-contain shrink-0 transition-transform duration-300 hover:scale-[1.05]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col text-left justify-center min-w-0">
                    <span className="text-sm sm:text-base font-black text-[#0F172A] tracking-tight truncate mb-1 leading-none">
                      {cert.title}
                    </span>
                    <span className="text-[#64748B] text-[11px] sm:text-xs font-semibold leading-normal truncate max-w-[190px] sm:max-w-[230px]">
                      {cert.desc}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Banner Pill */}
        <div className="flex justify-center w-full">
          <div className="inline-flex items-center gap-2.5 bg-white border border-[#E8EDF2] px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.01)] text-xs sm:text-sm font-semibold text-[#475467] font-sans">
            <div className="w-6 h-6 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A]">
              <svg className="w-3.5 h-3.5 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 013.107-.307 9.584 9.584 0 003.353.794c.18 2.22 1.432 4.116 3.249 5.178A12.07 12.07 0 0119 12a12.02 12.02 0 01-3.11 8.04 11.954 11.954 0 01-8.618 3.04A12.02 12.02 0 013 9c0-.756.07-1.496.206-2.214A3.42 3.42 0 005.152 4.14a3.42 3.42 0 012.683.557z" />
              </svg>
            </div>
            <span>Trusted. Compliant. <span className="text-[#2BC48A] font-bold">Always secure.</span></span>
          </div>
        </div>

      </div>

    </div>
  );
}
