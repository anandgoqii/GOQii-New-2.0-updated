import { useState, useEffect, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Activity, 
  Sparkles, 
  ShieldCheck, 
  Heart, 
  Compass, 
  User, 
  Cpu, 
  CheckCircle, 
  FileText,
  Play,
  Volume2,
  VolumeX,
  Globe,
  Database
} from "lucide-react";

interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
  metric: string;
}

const ARCHITECTURE_STEPS: StepItem[] = [
  {
    step: "STEP 01",
    title: "Track continuously",
    desc: "Continuous biometric capture mapping real-time lifestyle metrics.",
    icon: Activity,
    color: "#2BC48A",
    metric: "24/7 Biosync"
  },
  {
    step: "STEP 02",
    title: "Understand deeply",
    desc: "AI and clinical engines decode genomic, metabolic, and habit biomarkers.",
    icon: Cpu,
    color: "#00ADC7",
    metric: "Deep Genomics"
  },
  {
    step: "STEP 03",
    title: "Act proactively",
    desc: "Direct health guides provide interventions before symptoms escalate.",
    icon: Compass,
    color: "#6366F1",
    metric: "Instant Action"
  },
  {
    step: "STEP 04",
    title: "Improve continuously",
    desc: "Tailored micro-adjustments driven by progressive validation cycles.",
    icon: Sparkles,
    color: "#F59E0B",
    metric: "Closed Loop"
  }
];

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlayingDoc, setIsPlayingDoc] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>("UK");

  const jurisdictions = {
    "UK": { city: `London, UK Hub`, stat: "NHS App Integrations", compliance: "GDPR / Class I SaMD" },
    "US": { city: "San Francisco, USA", stat: "HIPAA Cloud Engine", compliance: "FDA Registered Ecosystem" },
    "IN": { city: "Mumbai, India Core", stat: "4.8M Active Users", compliance: "CDSCO Compliant Nodes" },
    "SG": { city: "Singapore Regional", stat: "Gov-Wellness Sandbox", compliance: "PDPA Strict Security" },
    "AE": { city: "Dubai Hub, UAE", stat: "Metabolic Longevity Trials", compliance: "DHA Validated Pathways" }
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % ARCHITECTURE_STEPS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleExploreEcosystem = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
      setTimeout(() => {
        const ecolink = document.getElementById("section-ecosystem");
        if (ecolink) {
          const elementPosition = ecolink.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - 90,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#0F172A] w-full font-sans pt-24 overflow-hidden relative selection:bg-[#2BC48A]/20 selection:text-[#0F172A]">
      
      {/* SECTION 1: CINEMATIC HERO BLOCK */}
      <section className="relative min-h-[90vh] md:min-h-screen px-4 sm:px-8 lg:px-16 flex flex-col justify-center items-center text-center py-20 bg-gradient-to-b from-[#FAFBFB] via-[#FFFFFF] to-[#F1F5F9]/50 overflow-hidden">
        
        {/* Subtle Ambient Floating Background Gradients */}
        <div className="absolute top-[20%] left-[10%] w-[450px] h-[450px] bg-[#2BC48A]/6 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#00ADC7]/6 rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10000ms]" />

        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white border border-[#E8EDF2] py-2 px-4 rounded-full shadow-[0_8px_20px_rgba(15,23,42,0.02)] mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#2BC48A]" />
            <span className="text-[11px] font-black tracking-[0.25em] text-[#667085] uppercase">
              ABOUT GOQii
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl lg:text-[84px] font-black tracking-tight text-[#0F172A] leading-[1.02] mb-8"
          >
            Healthcare was built <br />
            <span className="text-slate-400">to treat illness.</span> <br />
            <span className="bg-gradient-to-r from-[#2BC48A] to-[#00ADC7] bg-clip-text text-transparent">
              We built it to prevent it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl md:text-2xl font-light text-[#475467] leading-[1.6] max-w-3xl mb-12 sm:px-6"
          >
            GOQii combines AI, wearables, coaching, and preventive intelligence into one continuous health ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center shrink-0 mb-16"
          >
            <button
              onClick={handleExploreEcosystem}
              className="px-8 py-4 sm:py-5 text-sm font-extrabold tracking-tight text-white bg-[#0F172A] rounded-full hover:bg-[#2BC48A] hover:scale-[1.02] shadow-[0_16px_32px_rgba(15,23,42,0.15)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore the Ecosystem</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Cinematic health and mindfulness flow layout - Beautiful floating visual layer */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="w-full max-w-4xl aspect-[1.4] sm:aspect-[16/9] lg:aspect-[21/9] bg-[#0B1220] rounded-[24px] sm:rounded-[32px] border border-slate-800/70 shadow-[0_32px_80px_rgba(15,23,42,0.18)] p-2 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(43,196,138,0.2),transparent_70%)] z-10 pointer-events-none" />
            
            {/* Visual ambient waves - representing biometric streams & mindfulness flow */}
            <div className="absolute inset-0 flex items-center justify-center opacity-60 z-0">
              <div className="absolute w-[80%] h-[30%] border border-emerald-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute w-[60%] h-[40%] border border-teal-500/15 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute w-[40%] h-[50%] border border-indigo-500/10 rounded-full animate-[spin_8s_linear_infinite]" />
            </div>

            {/* Glowing moving health pulse wave */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#2BC48A]/80 to-transparent z-10 flex justify-center items-center">
              <div className="absolute w-4 h-4 rounded-full bg-[#2BC48A] shadow-[0_0_20px_#2BC48A] animate-ping" />
              <div className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#2BC48A]" />
            </div>

            {/* Corner UI telemetry label indicators for visual authenticity */}
            <div className="absolute top-6 left-6 flex items-center gap-2 z-20 font-mono text-[10px] text-emerald-400 font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span>CINEMATIC HEALTH & MINDFULNESS FLOW</span>
            </div>

            {/* Bottom floating telemetry details */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 z-20 font-mono text-[9px] text-slate-400">
              <div className="flex gap-4">
                <span className="hidden sm:inline">VECTORS: [ RESPIRATION, HEART_RATE, GALVANIC_SYNC ]</span>
                <span className="sm:hidden">SYS_VECTORS: [ RESP, HR, GSR ]</span>
                <span className="hidden md:inline">SYSTEM: ACTIVE</span>
              </div>
              <span>PREVENTIVE METABOLISM OS v2.04</span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: BIOMODULATION LAYERS */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#0F172A] text-white relative overflow-hidden border-t sm:border-y border-slate-800">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2BC48A]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left">
            <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 block">
              // HIGH RE-SOLUTION BIOMODULATION LAYERS
            </span>
            <div className="text-white text-xs font-black tracking-[0.25em] uppercase mb-4 opacity-50">
              REDESIGNING LIFE
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-white mb-6 font-sans">
              A mission to <br />
              <span className="text-[#2BC48A]">redefine healthcare.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
              Founded in 2014 by Vishal Gondal, GOQii was built to shift healthcare from reactive sick-care to continuous preventive intelligence.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
              Through a curated, multi-layered environment covering advanced telemetry tracker data, genomics, diagnostics, clinical coaches, and secure healthcare architectures, we close the healthcare gap completely.
            </p>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-extrabold tracking-wide">
                <CheckCircle className="w-4 h-4" />
                <span>Continuous Scientific Validation</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-400 font-extrabold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Medical-grade Compliance Layers</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-center items-center">
            {/* Visual presentation of Biomodulation Layers */}
            <div className="relative w-full aspect-square max-w-[420px] flex items-center justify-center">
              
              {/* Spinning circular visual rings with layer labels */}
              <div className="absolute inset-0 rounded-full border border-slate-800 flex items-center justify-center animate-[spin_50s_linear_infinite]">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-full text-[9px] font-mono text-slate-400 font-bold">
                  TELEMETRY DATA
                </div>
              </div>

              <div className="absolute inset-8 rounded-full border border-dashed border-slate-700/60 flex items-center justify-center animate-[spin_35s_linear_infinite_reverse]">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-full text-[9px] font-mono text-emerald-400 font-bold">
                  GENOMICS ENGINE
                </div>
              </div>

              <div className="absolute inset-16 rounded-full border border-slate-800 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                <div className="absolute top-0 -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-full text-[9px] font-mono text-teal-400 font-bold">
                  CLINICAL COACHES
                </div>
              </div>

              <div className="absolute inset-24 rounded-full border border-slate-700/30 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2BC48A]/10 to-[#00ADC7]/10 animate-pulse" />
              </div>

              {/* Core symbol */}
              <div className="w-20 h-20 rounded-full bg-[#2BC48A]/20 border border-[#2BC48A] flex flex-col items-center justify-center z-10 shadow-[0_0_35px_rgba(43,196,138,0.3)] shrink-0">
                <Heart className="w-7 h-7 text-[#2BC48A] animate-[pulse_2s_infinite]" />
                <span className="text-[8px] font-mono font-bold tracking-wider text-white mt-1">ALIVE</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CORE ARCHITECTURE */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 block">
              CORE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-[#0F172A] font-sans">
              One connected <br />
              <span className="text-[#2BC48A]">health platform.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed mt-6">
              GOQii integrates wearable technology, AI intelligence, coaching, diagnostics, and medical services into one continuous experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch relative">
            {ARCHITECTURE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`border rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-[0_24px_50px_rgba(15,23,42,0.12)] scale-[1.02]"
                      : "bg-[#FAFBFB] hover:bg-white border-[#E8EDF2] hover:border-slate-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.02)]"
                  }`}
                >
                  <div>
                    {/* Step label / Index */}
                    <div className="flex justify-between items-center mb-6">
                      <span className={`text-xs font-mono font-extrabold tracking-widest ${
                        isActive ? "text-[#2BC48A]" : "text-[#94A3B8]"
                      }`}>
                        {step.step}
                      </span>
                      <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full ${
                        isActive ? "bg-white/10 text-emerald-400" : "bg-slate-100 text-[#64748B]"
                      }`}>
                        {step.metric}
                      </span>
                    </div>

                    <div className="mb-6 flex-shrink-0">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{
                          backgroundColor: isActive ? `${step.color}20` : "#FFFFFF",
                          border: isActive ? `1px solid ${step.color}50` : "1px solid #E2E8F0",
                          color: isActive ? "#FFFFFF" : step.color
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className={`text-lg sm:text-xl font-bold tracking-tight mb-3 font-sans ${
                      isActive ? "text-white" : "text-[#0F172A]"
                    }`}>
                      {step.title}
                    </h3>

                    <p className={`text-xs sm:text-sm leading-relaxed ${
                      isActive ? "text-slate-300" : "text-[#64748B]"
                    }`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Progressive visual state pointer */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeStepUnderline"
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ backgroundColor: step.color }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 4: THE BEHAVIORAL SYNC */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#FAFBFB] border-t border-[#E8EDF2] relative overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-[#6366F1]/4 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          <div className="lg:col-span-6 relative aspect-video rounded-3xl bg-slate-950 overflow-hidden flex items-center justify-center border border-slate-800 shadow-[0_24px_50px_rgba(0,0,0,0.06)]">
            {/* Live mockup background of a Human Coaching documentary */}
            <img 
              src="https://appcdn.goqii.com/storeimg/46626_1779880112.png" 
              alt="Coaching Documentary"
              className={`w-full h-full object-cover transition-transform duration-[4000ms] ${isPlayingDoc ? "scale-105" : "scale-100 opacity-90"}`}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 z-10" />

            {/* Video Player Mock Overlay Controls */}
            <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
              <div className="flex justify-between items-center w-full">
                <span className="font-mono text-[9px] text-[#2BC48A] font-bold tracking-widest bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-emerald-500/20">
                  HUMAN CONNECTION DOCUMENTARY
                </span>
                
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all cursor-pointer pointer-events-auto"
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>

              {/* Play symbol button */}
              <button
                onClick={() => setIsPlayingDoc(!isPlayingDoc)}
                className="w-16 h-16 rounded-full bg-[#2BC48A] text-[#0F172A] flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_12px_24px_rgba(43,196,138,0.4)] cursor-pointer self-center"
              >
                {isPlayingDoc ? (
                  <div className="flex gap-1 items-center justify-center">
                    <span className="w-1.5 h-4 bg-slate-900 rounded-full animate-pulse" />
                    <span className="w-1.5 h-4 bg-slate-900 rounded-full animate-pulse" />
                  </div>
                ) : (
                  <Play className="w-6 h-6 fill-[#0F172A] translate-x-0.5" />
                )}
              </button>

              <div className="flex justify-between items-center text-left font-mono text-[9px] text-slate-300">
                <span>02:18 / 04:30</span>
                <span>STREAM: 1080P COMPRESSED</span>
              </div>
            </div>

            {/* Subtitles Overlay if playing */}
            {isPlayingDoc && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 max-w-[80%] text-center">
                <span className="bg-black/80 text-white font-medium text-xs sm:text-sm font-sans tracking-tight px-4 py-2 rounded-xl backdrop-blur-sm shadow-md block">
                  "At GOQii, we integrate the precision of clinical data streams with authentic human mentorship..."
                </span>
              </div>
            )}
          </div>

          <div className="lg:col-span-6 text-left">
            <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 block">
              THE BEHAVIORAL SYNC
            </span>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-[#0F172A] font-sans">
              Technology alone <br />
              <span className="text-slate-400">cannot change health.</span> <br />
              <span className="text-[#2BC48A]">Human behavior can.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed mt-6 mb-8">
              GOQii combines AI intelligence with expert human coaching to create long-term behavior change and measurable health outcomes.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#2BC48A]/10 border border-[#2BC48A]/30 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-3.5 h-3.5 text-[#2BC48A]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A] tracking-tight">Real-time Biometric Feedback</h4>
                  <p className="text-xs sm:text-sm text-[#475467] mt-0.5">Your coach receives immediate structural parameter alerts when metabolic indices fall out of synchronization.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#00ADC7]/10 border border-[#00ADC7]/30 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#00ADC7]" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0F172A] tracking-tight">Empathetic Micro-coaching Pathways</h4>
                  <p className="text-xs sm:text-sm text-[#475467] mt-0.5">We avoid boring robotic AI reports. Guided human conversations shape sustainable, daily habit evolution instead.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: WORLDWIDE INFRASTRUCTURE */}
      <section className="py-20 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#0B1220] text-white overflow-hidden relative border-t border-slate-800">
        
        {/* Glowing planetary light glow */}
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[600px] h-[600px] bg-gradient-to-r from-[#2BC48A]/5 to-[#00ADC7]/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-extrabold tracking-widest uppercase mb-4 block">
              // CONTINUOUS PROFESSIONAL CALIBRATION SYSTEM
            </span>
            <div className="font-mono text-[9px] tracking-[0.2em] font-extrabold uppercase text-slate-400 mb-3 block">
              Active in over five global wellness jurisdictions.
            </div>
            
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.05] text-white">
              Worldwide Infrastructure.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 font-medium leading-relaxed mt-6">
              Built globally. Connected continuously.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Interactive World Map Node selector */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[320px] bg-slate-900/60 border border-slate-800 p-8 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-[#0F172A]/45 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
              
              <div className="relative w-full max-w-[480px] aspect-[16/9] opacity-90 z-10 flex items-center justify-center">
                
                {/* Visual global paths interconnect schema layout */}
                <svg viewBox="0 0 400 200" className="w-full h-full text-slate-700 pointer-events-none">
                  {/* Continental guidelines lines */}
                  <path d="M50,80 Q100,50 150,90 T250,70 T350,90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="opacity-40" />
                  <path d="M60,130 Q140,110 200,150 T310,120" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="opacity-30" />
                  
                  {/* Integrated dynamic nodes linked mapping lines to selected */}
                  {selectedJurisdiction === "UK" && (
                    <path d="M160,65 L290,140" fill="none" stroke="#2BC48A" strokeWidth="1.5" className="animate-pulse" />
                  )}
                  {selectedJurisdiction === "US" && (
                    <path d="M80,75 L290,140" fill="none" stroke="#2BC48A" strokeWidth="1.5" className="animate-pulse" />
                  )}
                  {selectedJurisdiction === "IN" && (
                    <path d="M260,110 L290,140" fill="none" stroke="#2BC48A" strokeWidth="1.5" className="animate-pulse" />
                  )}
                  {selectedJurisdiction === "SG" && (
                    <path d="M290,130 L290,140" fill="none" stroke="#2BC48A" strokeWidth="1.5" className="animate-pulse" />
                  )}
                  {selectedJurisdiction === "AE" && (
                    <path d="M210,95 L290,140" fill="none" stroke="#2BC48A" strokeWidth="1.5" className="animate-pulse" />
                  )}
                </svg>

                {/* USA Node */}
                <button 
                  onClick={() => setSelectedJurisdiction("US")}
                  className="absolute left-[20%] top-[35%] pointer-events-auto cursor-pointer"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <span className={`absolute -inset-2.5 rounded-full ${selectedJurisdiction === "US" ? "bg-[#2BC48A]/30 animate-ping" : "bg-transparent"}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${selectedJurisdiction === "US" ? "bg-[#2BC48A] scale-125" : "bg-slate-500"}`} />
                  </div>
                </button>

                {/* UK Node */}
                <button 
                  onClick={() => setSelectedJurisdiction("UK")}
                  className="absolute left-[40%] top-[30%] pointer-events-auto cursor-pointer"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <span className={`absolute -inset-2.5 rounded-full ${selectedJurisdiction === "UK" ? "bg-[#2BC48A]/30 animate-ping" : "bg-transparent"}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${selectedJurisdiction === "UK" ? "bg-[#2BC48A] scale-125" : "bg-slate-500"}`} />
                  </div>
                </button>

                {/* UAE Node */}
                <button 
                  onClick={() => setSelectedJurisdiction("AE")}
                  className="absolute left-[52%] top-[45%] pointer-events-auto cursor-pointer"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <span className={`absolute -inset-2.5 rounded-full ${selectedJurisdiction === "AE" ? "bg-[#2BC48A]/30 animate-ping" : "bg-transparent"}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${selectedJurisdiction === "AE" ? "bg-[#2BC48A] scale-125" : "bg-slate-500"}`} />
                  </div>
                </button>

                {/* India Node */}
                <button 
                  onClick={() => setSelectedJurisdiction("IN")}
                  className="absolute left-[65%] top-[55%] pointer-events-auto cursor-pointer"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <span className={`absolute -inset-2.5 rounded-full ${selectedJurisdiction === "IN" ? "bg-[#2BC48A]/30 animate-ping" : "bg-transparent"}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${selectedJurisdiction === "IN" ? "bg-[#2BC48A] scale-125" : "bg-slate-500"}`} />
                  </div>
                </button>

                {/* Singapore Node */}
                <button 
                  onClick={() => setSelectedJurisdiction("SG")}
                  className="absolute left-[72%] top-[65%] pointer-events-auto cursor-pointer"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <div className="relative">
                    <span className={`absolute -inset-2.5 rounded-full ${selectedJurisdiction === "SG" ? "bg-[#2BC48A]/30 animate-ping" : "bg-transparent"}`} />
                    <div className={`w-3.5 h-3.5 rounded-full border-2 border-white transition-all duration-300 ${selectedJurisdiction === "SG" ? "bg-[#2BC48A] scale-125" : "bg-slate-500"}`} />
                  </div>
                </button>

              </div>
            </div>

            {/* Jurisdiction Details Content Panel Card */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center h-full">
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl relative">
                
                <div className="flex items-center gap-2 mb-6">
                  <Globe className="w-5 h-5 text-[#2BC48A]" />
                  <span className="font-mono text-[11px] font-bold text-slate-400 tracking-widest uppercase">
                    CALIBRATED COMPLIANCE INDEX
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedJurisdiction}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none mb-3">
                      {jurisdictions[selectedJurisdiction as keyof typeof jurisdictions].city}
                    </h3>

                    <div className="text-xl font-bold text-[#2BC48A] mb-8">
                      {jurisdictions[selectedJurisdiction as keyof typeof jurisdictions].stat}
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400 font-mono">
                      <span>STRICT STANDARD</span>
                      <span className="text-white font-extrabold">
                        {jurisdictions[selectedJurisdiction as keyof typeof jurisdictions].compliance}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* Action grid nodes helper list */}
              <div className="grid grid-cols-5 gap-2 mt-4">
                {(Object.keys(jurisdictions) as Array<keyof typeof jurisdictions>).map((k) => (
                  <button
                    key={k}
                    onClick={() => setSelectedJurisdiction(k)}
                    className={`py-2 text-xs font-black tracking-tight rounded-xl border transition-all pointer-events-auto cursor-pointer select-none ${
                      selectedJurisdiction === k
                        ? "bg-[#2BC48A] text-slate-950 border-[#2BC48A] font-extrabold shadow-[0_4px_12px_rgba(43,196,138,0.25)]"
                        : "bg-slate-900/40 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
