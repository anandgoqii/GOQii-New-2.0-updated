import { motion } from "motion/react";
import { ArrowLeft, Brain, ShieldCheck, Heart, Sparkles, Activity, Award } from "lucide-react";

export default function SanjeeviniPage() {
  const handleBackToHome = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }
  };

  const pillars = [
    {
      icon: Sparkles,
      title: "Longevity Intelligence",
      desc: "Comprehensive molecular & lifestyle risk scoring using AI clinical companion engines trained on over a decade of continuous telemetry."
    },
    {
      icon: Brain,
      title: "Behavioral Neurocoding",
      desc: "Translating diagnostic metrics into real-world lifestyle alignment via automated motivation vectors and clinical coaching loops."
    },
    {
      icon: Activity,
      title: "Clinical Biomarkers",
      desc: "Advanced DNA testing, metabolic indexing, and routine blood diagnostics to pre-empt risk state shifts before signs emerge."
    },
    {
      icon: Award,
      title: "Global Collaboration",
      desc: "Co-developed with XPRIZE Healthspan networks to establish validated clinical benchmarks for healthy lifespan extension."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-white text-[#0F172A] selection:bg-[#2BC48A]/30 font-sans"
    >
      {/* Visual background gradient accents */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#2BC48A]/3 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-emerald-100/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Hero Header Area */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16 md:pt-40">
        
        {/* Back navigation */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#667085] hover:text-[#2BC48A] uppercase mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Platform
        </button>

        {/* Section title */}
        <div className="flex items-center gap-3 text-xs mb-6 text-[#2BC48A] font-bold tracking-[0.2em] uppercase">
          <span>🏆 XPRIZE Healthspan Semifinalist</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-[68px] font-black tracking-tight text-[#0F172A] leading-[1.05] mb-6 max-w-4xl">
          Sanjeevini.<br />
          <span className="text-[#2BC48A]">Extending Healthy Lifespan.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#475467] font-medium max-w-3xl leading-relaxed mb-10">
          A global health intelligence initiative combining longevity science, diagnostics, coaching, AI, and continuous tracking to help people live healthier for decades longer.
        </p>

        {/* Film / Infographic Card Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#FAFBFB] border border-[#E8EDF2] p-8 sm:p-12 rounded-[40px] shadow-[0_24px_50px_rgba(15,23,42,0.015)] mb-20">
          <div className="lg:col-span-6 text-left">
            <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-4 block">
              THE RESEARCH MISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
              Pushing back the boundaries of biological age.
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-medium">
              Sanjeevini was built to solve the ultimate challenge of modern health: compressing morbidity. By pairing state-of-the-art diagnostic screening with automated behavioral compliance, we are moving the threshold of wellness from disease treatment to continuous biological rejuvenation.
            </p>
            
            {/* XPrize Sanjeevini Logo */}
            <div className="flex items-center gap-6 mt-8 p-4 bg-white border border-[#E8EDF2] rounded-2xl self-start">
              <img
                src="https://appcdn.goqii.com/storeimg/96760_1780031032.png"
                alt="XPrize Sanjeevini Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="text-left">
                <div className="text-xs font-black text-[#0F172A] tracking-tight uppercase">XPRIZE Healthspan</div>
                <div className="text-[10px] font-bold text-[#667085] mt-0.5 uppercase tracking-wider">Official Semifinalist Pool</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="relative w-full max-w-[480px] aspect-[4/3] bg-white border border-[#E8EDF2] p-2 rounded-[24px]">
              <div className="w-full h-full rounded-[18px] bg-slate-50 overflow-hidden flex items-center justify-center relative">
                <img
                  src="https://appcdn.goqii.com/storeimg/20784_1780386295.png"
                  alt="Sanjeevini Longevity Intelligence Framework"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-[11px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-2 block">
              SYSTEM MECHANICS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              The Longevity Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#E8EDF2] p-8 rounded-[28px] hover:border-[#2BC48A]/35 transition-all duration-300 shadow-[0_12px_24px_rgba(0,0,0,0.005)]"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A] mb-6">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-[#667085] text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call To Action Block */}
        <div className="bg-[#0F172A] rounded-[44px] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] border border-slate-800 opacity-40 pointer-events-none rounded-3xl" />
          
          <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-4 block">
            ACCELERATE HEALTHSPAN
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-6 leading-tight max-w-2xl mx-auto">
            Ready to live healthier, for longer?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed font-medium">
            Contact our clinical Research division to inquire about Sanjeevini cohort enrollments, partner deployments, and longevity tracking pilots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleBackToHome}
              className="px-8 py-4 bg-[#2BC48A] hover:bg-emerald-500 text-white text-xs font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer"
            >
              Back to Home
            </button>
            <a
              href="mailto:sanjeevini@goqii.com"
              className="px-8 py-4 bg-transparent border border-slate-700 hover:border-white text-white text-xs font-bold tracking-widest uppercase rounded-full transition-colors cursor-pointer"
            >
              Inquire Now
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
