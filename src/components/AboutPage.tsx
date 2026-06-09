import { useState, useEffect, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { APIProvider, Map, AdvancedMarker, Pin as MapPin } from "@vis.gl/react-google-maps";
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
  Database,
  Moon,
  Target,
  Watch,
  Dna,
  Stethoscope,
  Shield,
  Users,
  Layers,
  TrendingUp
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

const GOOGLE_MAPS_API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const HAS_VALID_MAPS_KEY = Boolean(GOOGLE_MAPS_API_KEY) && GOOGLE_MAPS_API_KEY !== 'YOUR_API_KEY';

const JURISDICTION_COORDS = {
  US: { lat: 37.4532, lng: -122.1813 },
  UK: { lat: 50.8407, lng: -0.1917 },
  IN: { lat: 19.0435, lng: 72.9152 }
};

export default function AboutPage() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlayingDoc, setIsPlayingDoc] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>("US");
  const [showMapInstructions, setShowMapInstructions] = useState<boolean>(false);

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
            className="flex flex-col sm:flex-row gap-4 items-center justify-center shrink-0"
          >
            <button
              onClick={handleExploreEcosystem}
              className="px-8 py-4 sm:py-5 text-sm font-extrabold tracking-tight text-white bg-[#0F172A] rounded-full hover:bg-[#2BC48A] hover:scale-[1.02] shadow-[0_16px_32px_rgba(15,23,42,0.15)] transition-all duration-300 cursor-pointer flex items-center gap-2 group"
            >
              <span>Explore the Ecosystem</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: BIOMODULATION LAYERS & CORE PLATFORM ORBIT (ALIGNED WITH PREMIUM SCREENSHOT) */}
      <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#020813] text-white relative overflow-hidden border-t sm:border-y border-slate-900" id="section-biomodulation">
        
        {/* Soft magical background premium glows */}
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[#2BC48A]/4 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-[#00ADC7]/4 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Decorative Grid Mesh */}
        <div className="absolute inset-0 bg-[#020813] bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">
          
          {/* LEFT COLUMN: THE MISSION & VALUE CARDS */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#2BC48A]/30 bg-[#2BC48A]/5 text-[#2BC48A] font-mono text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
              HIGH RE-SOLUTION BIOMODULATION LAYERS
            </div>
            
            <div className="text-slate-400 text-xs sm:text-[13px] font-bold tracking-[0.2em] uppercase mb-4">
              REDESIGNING LIFE
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] text-white font-sans">
              A mission to <br />
              <span className="text-[#2BC48A]">redefine healthcare.</span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-[#2BC48A] to-[#00ADC7] mt-5 mb-8 rounded-full" />

            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6">
              Founded in 2014 by Vishal Gondal, GOQii was built to shift healthcare from reactive sick-care to <span className="text-[#2BC48A] font-semibold">continuous preventive intelligence</span>.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10">
              Through a curated, multi-layered environment covering advanced telemetry tracker data, genomics, diagnostics, clinical coaches, and secure healthcare architectures, we close the healthcare gap completely.
            </p>

            {/* Checkmark Info boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-[#071324]/85 border border-[#162C45]/60 p-4.5 rounded-2xl shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#2BC48A] shrink-0 mt-0.5 border border-emerald-500/20">
                  <CheckCircle className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black text-white leading-tight">Continuous Scientific Validation</h4>
                  <p className="text-[12px] text-slate-400 mt-1 leading-normal">Backed by research. Driven by results.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-[#071324]/85 border border-[#162C45]/60 p-4.5 rounded-2xl shadow-[0_12px_24px_-10px_rgba(0,0,0,0.3)]">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-[#2BC48A] shrink-0 mt-0.5 border border-emerald-500/20">
                  <ShieldCheck className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[14px] font-black text-white leading-tight">Medical-grade Compliance Layers</h4>
                  <p className="text-[12px] text-slate-400 mt-1 leading-normal">Privacy first. Security always.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: BIOMODULATION ORBIT GRAPH (PIXEL-PERFECT GRAPH TO IMAGE) */}
          <div className="lg:col-span-7 flex justify-center items-center relative">
            
            {/* The beautiful desktop interactive orbit */}
            <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center select-none">
              
              {/* Concentric planetary orbit lines in SVG background */}
              <div className="absolute inset-0 z-0">
                <svg className="w-full h-full text-slate-700/30 pointer-events-none" viewBox="0 0 500 500" fill="none">
                  {/* Concentric ring paths */}
                  <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4,4" className="opacity-30" />
                  <circle cx="250" cy="250" r="170" stroke="currentColor" strokeWidth="1.5" className="opacity-40" />
                  <circle cx="250" cy="250" r="220" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" className="opacity-20" />
                  
                  {/* Outer active interactive planet glow track */}
                  <circle cx="250" cy="250" r="170" stroke="url(#activeGlowTrack)" strokeWidth="2.5" className="opacity-60 animate-[spin_40s_linear_infinite]" />
                  
                  <defs>
                    <linearGradient id="activeGlowTrack" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2BC48A" />
                      <stop offset="50%" stopColor="#00ADC7" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* CENTER HUB: ALIVE GLOBE */}
              <div className="relative z-10 w-44 h-44 rounded-full bg-[#030A16] border-2 border-emerald-500/40 shadow-[0_0_60px_-10px_rgba(43,196,138,0.4)] flex flex-col items-center justify-center shrink-0">
                {/* Inside green glowing ring */}
                <div className="absolute inset-2.5 rounded-full border border-emerald-500/25 bg-gradient-to-tr from-emerald-950/20 to-slate-900/40 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/5 animate-pulse" />
                  <Heart className="w-9 h-9 text-[#2BC48A] fill-emerald-500/10 mb-2 animate-pulse" />
                  <span className="font-sans font-black text-white text-base tracking-widest uppercase">ALIVE</span>
                  <p className="text-[#2BC48A] text-[10px] font-extrabold mt-1 tracking-tight leading-none text-center">
                    Better health. <br />
                    <span className="text-white/75 font-semibold mt-0.5 inline-block">Every day.</span>
                  </p>
                </div>
              </div>

              {/* NODE 1: TELEMETRY DATA (Top Right - 12:30 o'clock) */}
              <div className="absolute top-[2%] right-[5%] sm:right-[15%] z-20 flex flex-col items-end sm:items-start select-none">
                <div className="flex items-center gap-3">
                  {/* Telemetry line connection glow */}
                  <div className="relative group cursor-pointer shrink-0">
                    <span className="absolute -inset-2 bg-emerald-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity animate-pulse" />
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-[#030A16] flex items-center justify-center text-[#2BC48A] relative z-10">
                      <Watch className="w-5 h-5" />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-[#040D1A]/95 backdrop-blur-md border border-[#142940]/80 rounded-2xl p-3 shadow-2xl max-w-[180px] text-left">
                    <span className="text-[#2BC48A] font-mono text-[9.5px] font-black tracking-wider block mb-0.5 leading-none">TELEMETRY DATA</span>
                    <p className="text-xs text-slate-300 font-medium leading-tight">Real-time insights from wearables</p>
                  </div>
                </div>
              </div>

              {/* NODE 2: CLINICAL COACHES (Right Center - 3:15 o'clock) */}
              <div className="absolute top-[28%] right-[-10%] sm:right-[1%] z-20 flex items-center select-none">
                <div className="flex items-center gap-3">
                  {/* Icon Node */}
                  <div className="relative group cursor-pointer shrink-0">
                    <span className="absolute -inset-2 bg-blue-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-full border-2 border-blue-500 bg-[#030A16] flex items-center justify-center text-blue-400 relative z-10">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-[#040D1A]/95 backdrop-blur-md border border-[#142940]/80 rounded-2xl p-3 shadow-2xl max-w-[170px] text-left">
                    <span className="text-blue-400 font-mono text-[9.5px] font-black tracking-wider block mb-0.5 leading-none">CLINICAL COACHES</span>
                    <p className="text-xs text-slate-300 font-medium leading-tight">Expert guidance for lasting change</p>
                  </div>
                </div>
              </div>

              {/* NODE 3: SECURE HEALTHCARE (Bottom Center - 5:45 o'clock) */}
              <div className="absolute bottom-[2%] sm:bottom-[4%] right-[10%] sm:right-[18%] z-20 flex flex-col items-center select-none">
                <div className="flex flex-col items-center gap-2">
                  {/* Icon Node */}
                  <div className="relative group cursor-pointer shrink-0">
                    <span className="absolute -inset-2 bg-amber-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-full border-2 border-amber-500 bg-[#030A16] flex items-center justify-center text-amber-450 relative z-10">
                      <Shield className="w-5 h-5 text-amber-400" />
                    </div>
                  </div>

                  {/* Content Card container below it */}
                  <div className="bg-[#040D1A]/95 backdrop-blur-md border border-[#142940]/80 rounded-2xl p-3 shadow-2xl max-w-[185px] text-center">
                    <span className="text-amber-400 font-mono text-[9.5px] font-black tracking-wider block mb-0.5 leading-none">SECURE HEALTHCARE</span>
                    <p className="text-xs text-slate-300 font-medium leading-tight">Enterprise-grade security for your health data</p>
                  </div>
                </div>
              </div>

              {/* NODE 4: GENOMICS & OMICS (Left Center - 8:45 o'clock) */}
              <div className="absolute top-[32%] left-[-11%] sm:left-[0%] z-20 flex items-center select-none">
                <div className="flex items-center gap-3">
                  {/* Content Card */}
                  <div className="bg-[#040D1A]/95 backdrop-blur-md border border-[#142940]/80 rounded-2xl p-3 shadow-2xl max-w-[170px] text-left">
                    <span className="text-[#2BC48A] font-mono text-[9.5px] font-black tracking-wider block mb-0.5 leading-none">GENOMICS & OMICS</span>
                    <p className="text-xs text-slate-300 font-medium leading-tight">Decode your unique biological blueprint</p>
                  </div>

                  {/* Icon Node */}
                  <div className="relative group cursor-pointer shrink-0">
                    <span className="absolute -inset-2 bg-emerald-500/30 rounded-full blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-[#030A16] flex items-center justify-center text-[#2BC48A] relative z-10">
                      <Dna className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM METRICS/INFRASTRUCTURE BAR - ALIGNED PERFECTLY TO THE IMAGE FOOTER CONTAINER */}
        <div className="max-w-6xl mx-auto mt-20 relative z-20">
          <div className="w-full border border-slate-800/80 bg-[#08111D] rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]">
            
            {/* Top decorative gradient border line */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#2BC48A]/30 via-[#00ADC7]/30 to-[#F59E0B]/20" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
              
              {/* CARD 1: FOUNDED IN 2014 */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center text-[#2BC48A] border border-emerald-500/20">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-black text-white leading-tight">Founded in 2014</h4>
                    <p className="text-[13px] text-slate-400 font-medium mt-0.5">By Vishal Gondal</p>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-[#2BC48A] rounded-full mt-1" />
              </div>

              {/* CARD 2: OUR MISSION */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center text-[#2BC48A] border border-emerald-500/20">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-black text-white leading-tight">Our Mission</h4>
                    <p className="text-[13px] text-slate-400 font-medium mt-0.5">To make preventive healthcare continuous and accessible for all</p>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-[#2BC48A] rounded-full mt-1" />
              </div>

              {/* CARD 3: MULTI-LAYERED INTELLIGENCE */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-blue-500/10 flex items-center justify-center text-[#00ADC7] border border-blue-500/20">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-black text-white leading-tight">Multi-layered Intelligence</h4>
                    <p className="text-[13px] text-slate-400 font-medium mt-0.5">Connected data. Deeper insights. Better outcomes.</p>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-blue-500/80 rounded-full mt-1" />
              </div>

              {/* CARD 4: BETTER HEALTH EVERY DAY */}
              <div className="flex flex-col items-start text-left">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-amber-500/10 flex items-center justify-center text-[#F59E0B] border border-amber-500/20">
                    <TrendingUp className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-black text-white leading-tight">Better Health Every Day</h4>
                    <p className="text-[13px] text-slate-400 font-medium mt-0.5">Empowering you to live longer, stronger and happier.</p>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-amber-500/80 rounded-full mt-1" />
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
      <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#FAFBFB] border-t border-[#E8EDF2] relative overflow-hidden">
        <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] bg-[#2BC48A]/3 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: HIGH-POLISHED COACH & CLINICAL FEEDBACK CARD */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-[48px] border border-slate-100 bg-white shadow-[0_32px_64px_-16px_rgba(15,23,42,0.06)] group hover:shadow-[0_48px_80px_-24px_rgba(15,23,42,0.12)] transition-all duration-700">
              
              {/* Full Cover Coach Background Image */}
              <div className="absolute inset-0 rounded-[48px] overflow-hidden">
                <img 
                  src="https://appcdn.goqii.com/storeimg/46626_1779880112.png" 
                  alt="Personal Coaching Interaction"
                  className="w-full h-full object-cover transition-transform duration-[8000ms] group-hover:scale-105 select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/10" />
              </div>

              {/* OVERLAY 1: HEART RATE SPECTRUM WIDGET */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-[6%] left-[6%] right-[12%] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100/60 shadow-[0_12px_32px_rgba(15,23,42,0.08)] flex items-center justify-between z-20 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 shrink-0">
                    <Heart className="w-5 h-5 fill-rose-500/10 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block leading-none">Heart Rate</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-extrabold text-slate-900 leading-none">76</span>
                      <span className="text-xs font-semibold text-slate-400 font-mono">bpm</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-50 text-[#2BC48A] uppercase font-mono tracking-wider ml-1">
                        In Range
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Real-time electrocardiography curve */}
                <div className="w-16 h-8 text-[#2BC48A] shrink-0 opacity-85">
                  <svg className="w-full h-full overflow-visible" stroke="currentColor" strokeWidth="2.5" fill="none" viewBox="0 0 60 30">
                    <path d="M0,15 L10,15 L14,5 L18,25 L22,12 L26,17 L30,15 L40,15 L44,2 L48,28 L52,15 L60,15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>

              {/* OVERLAY 2: SLEEP SCORE INDEX COHORT */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-[26%] left-[6%] right-[12%] bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-100/60 shadow-[0_12px_32px_rgba(15,23,42,0.08)] flex items-center justify-between z-20 hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                    <Moon className="w-5 h-5 fill-indigo-500/10" />
                  </div>
                  <div>
                    <span className="text-[11px] font-medium text-slate-500 block leading-none">Sleep Score</span>
                    <div className="flex items-baseline gap-1.5 mt-1">
                      <span className="text-xl font-extrabold text-slate-900 leading-none">82</span>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-[#EBFDFA] text-[#2BC48A] uppercase font-mono tracking-wider ml-1">
                        Good
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vertical bar chart column stack */}
                <div className="flex items-end gap-1 h-8 shrink-0 pb-1 pr-1">
                  {[10, 18, 12, 22, 16, 26, 20, 24, 14, 21].map((h, idx) => (
                    <div 
                      key={idx} 
                      className="w-1 bg-indigo-500/80 rounded-full" 
                      style={{ height: `${h}px` }} 
                    />
                  ))}
                </div>
              </motion.div>

              {/* OVERLAY 3: INTERACTIVE COACH CHAT BUBBLE */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute bottom-[24%] left-[-6%] sm:left-[-10%] max-w-[250px] bg-white/98 backdrop-blur-md rounded-3xl rounded-tl-none p-4 border border-slate-100/70 shadow-[0_16px_36px_rgba(15,23,42,0.12)] z-30 flex gap-3 hover:scale-[1.02] transition-transform"
              >
                <div className="relative shrink-0">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" 
                    alt="GOQii Personal Wellness Coach" 
                    className="w-9 h-9 rounded-full object-cover border border-slate-100 shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#2BC48A] border-2 border-white ring-1 ring-[#2BC48A]/20" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-[#2BC48A] uppercase font-mono mb-1 leading-none">Coach</span>
                  <p className="text-[11px] font-medium text-slate-800 leading-snug">
                    Great job hitting your step goal today! 💪 Shall we plan your dinner together?
                  </p>
                </div>
              </motion.div>

              {/* OVERLAY 4: USER CHAT RESPOND INDEX */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute bottom-[10%] right-[-4%] max-w-[170px] bg-[#EBFDFA]/98 backdrop-blur-md border border-emerald-100 rounded-3xl rounded-tr-none py-3 px-4 shadow-[0_12px_28px_rgba(43,196,138,0.08)] z-30 flex items-end gap-1.5 hover:scale-[1.02] transition-transform"
              >
                <div className="flex flex-col">
                  <span className="text-[8.5px] font-black tracking-widest text-[#2BC48A]/80 uppercase font-mono mb-0.5 leading-none">You</span>
                  <p className="text-[11.5px] font-bold text-[#0F172A] leading-tight">
                    Yes, let's do it!
                  </p>
                </div>
                <div className="text-[#2BC48A] shrink-0 mb-0.5 pb-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M2 12l5 5L20 4M8 17l5 5L22 9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </motion.div>

              {/* OVERLAY 5: TODAY'S FOCUS ACCORDION */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-[4%] left-[4%] right-[22%] bg-white/95 backdrop-blur-md border border-slate-100/60 rounded-2xl px-4 py-3 shadow-[0_10px_24px_rgba(15,23,42,0.04)] z-20 flex items-center gap-3 hover:scale-[1.01] transition-transform"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#2BC48A] flex items-center justify-center shrink-0">
                  <Target className="w-4.5 h-4.5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black tracking-widest text-[#2BC48A] uppercase font-mono mb-0.5 leading-none">Today's Focus</span>
                  <p className="text-[10px] text-slate-500 font-semibold leading-normal">
                    Eat balanced • Move more <br />
                    Sleep well • Stay consistent
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

          {/* RIGHT COLUMN: RESTRUCTURED HUMAN-CENTRIC VALUE TEXT */}
          <div className="lg:col-span-6 text-left">
            
            <div className="flex flex-col mb-6">
              <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase">
                BEHAVIORAL NEUROCODING™
              </span>
              <div className="w-8 h-[2px] bg-[#2BC48A] mt-2.5 rounded-full" />
            </div>
            
            <h2 className="text-[34px] sm:text-[45px] lg:text-[48px] font-black tracking-tight leading-[1.12] text-[#0F172A] font-sans">
              Technology alone <br />
              <span className="text-slate-800">cannot change health.</span> <br />
              <span className="text-[#2BC48A] inline-block mt-1">Human behavior can.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#475467] font-medium leading-relaxed mt-6 mb-10 max-w-xl">
              GOQii combines AI intelligence with expert human coaching to create long-term behavior change and measurable health outcomes.
            </p>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4 hover:translate-x-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#EBFDFA] flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4.5 h-4.5 text-[#2BC48A]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0F172A] tracking-tight">Real-time Biometric Feedback</h4>
                  <p className="text-[13.5px] text-slate-500 mt-1 leading-relaxed leading-[1.4] pr-4">
                    Your coach receives immediate structural parameter alerts when metabolic indices fall out of synchronization.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:translate-x-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4.5 h-4.5 text-[#00ADC7]" />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0F172A] tracking-tight">Empathetic Micro-coaching Pathways</h4>
                  <p className="text-[13.5px] text-slate-500 mt-1 leading-relaxed leading-[1.4] pr-4">
                    We avoid boring robotic AI reports. Guided human conversations shape sustainable, daily habit evolution instead.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: WORLDWIDE INFRASTRUCTURE (ALIGNED WITH DESIGN MOCK) */}
      {(() => {
        const MAP_COMPONENTS = {
          US: {
            title: "GOQii Inc. HQ",
            fullAddress: "1000 El Camino Real, Suite 150, Menlo Park, CA 94025, USA",
            pinLabel: "MP"
          },
          UK: {
            title: "GOQii UK Limited",
            fullAddress: "29 West Way, Hove, England, BN3 8LS",
            pinLabel: "BN3"
          },
          IN: {
            title: "GOQii Technologies Ltd.",
            fullAddress: "101 Satyam Tower, Govandi East, Mumbai 400088, India",
            pinLabel: "Govandi"
          }
        };

        return (
          <section className="py-24 md:py-32 px-4 sm:px-8 lg:px-16 w-full bg-[#FAFBFB] relative overflow-hidden border-t border-[#E8EDF2]" id="section-global-presence">
            {/* Soft decorative background glow */}
            <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-[#2BC48A]/3 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-6xl mx-auto flex flex-col items-center">
              
              <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                <span className="text-[#2BC48A] font-mono text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3 block">
                  GLOBAL PRESENCE
                </span>
                <h2 className="text-[32px] sm:text-[42px] font-black tracking-tight text-[#0F172A] font-sans leading-[1.15]">
                  Built in Silicon Valley. Scaled Globally.
                </h2>
              </div>

              <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* LEFT COLUMN: INTERACTIVE COUNTRY CARDS */}
                <div className="lg:col-span-5 flex flex-col gap-6 w-full">
                  
                  {/* CARD 1: UNITED STATES */}
                  <div
                    onClick={() => setSelectedJurisdiction("US")}
                    className={`transition-all duration-500 rounded-[32px] p-8 text-left cursor-pointer border select-none ${
                      selectedJurisdiction === "US"
                        ? "bg-white border-2 border-[#2BC48A] shadow-[0_20px_48px_-10px_rgba(43,196,138,0.1)]"
                        : "bg-white border-slate-100 hover:border-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    <span className={`text-[17px] font-extrabold tracking-tight block mb-2 ${
                      selectedJurisdiction === "US" ? "text-[#2BC48A]" : "text-slate-400"
                    }`}>
                      United States
                    </span>
                    <span className="text-[19px] font-black text-[#0F172A] block mb-3 font-sans leading-none">
                      GOQii Inc
                    </span>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed max-w-[280px]">
                      1000 El Camino Real, Suite 150, Menlo Park, CA 94025
                    </p>
                  </div>

                  {/* CARD 2: UNITED KINGDOM */}
                  <div
                    onClick={() => setSelectedJurisdiction("UK")}
                    className={`transition-all duration-500 rounded-[32px] p-8 text-left cursor-pointer border select-none ${
                      selectedJurisdiction === "UK"
                        ? "bg-white border-2 border-[#2BC48A] shadow-[0_20px_48px_-10px_rgba(43,196,138,0.1)]"
                        : "bg-white border-slate-100 hover:border-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    <span className={`text-[17px] font-extrabold tracking-tight block mb-2 ${
                      selectedJurisdiction === "UK" ? "text-[#2BC48A]" : "text-slate-400"
                    }`}>
                      United Kingdom
                    </span>
                    <span className="text-[19px] font-black text-[#0F172A] block mb-3 font-sans leading-none">
                      GOQii UK Limited
                    </span>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                      29 West Way, Hove, England, BN3 8LS
                    </p>
                  </div>

                  {/* CARD 3: INDIA */}
                  <div
                    onClick={() => setSelectedJurisdiction("IN")}
                    className={`transition-all duration-500 rounded-[32px] p-8 text-left cursor-pointer border select-none ${
                      selectedJurisdiction === "IN"
                        ? "bg-white border-2 border-[#2BC48A] shadow-[0_20px_48px_-10px_rgba(43,196,138,0.1)]"
                        : "bg-white border-slate-100 hover:border-slate-300 shadow-[0_10px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                    }`}
                  >
                    <span className={`text-[17px] font-extrabold tracking-tight block mb-2 ${
                      selectedJurisdiction === "IN" ? "text-[#2BC48A]" : "text-slate-400"
                    }`}>
                      India
                    </span>
                    <span className="text-[19px] font-black text-[#0F172A] block mb-3 font-sans leading-none">
                      GOQii Technologies Pvt. Ltd.
                    </span>
                    <p className="text-[14px] text-slate-500 font-medium leading-relaxed pr-4">
                      101 Satyam Tower, Govandi East, Mumbai 400088, India
                    </p>
                  </div>

                </div>

                {/* RIGHT COLUMN: DETAIL MAP PANEL */}
                <div className="lg:col-span-7 w-full flex justify-center items-center">
                  
                  <div className="relative w-full aspect-[4/3] rounded-[40px] bg-[#E1F3EB] border border-slate-200/80 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col justify-between p-6">
                    
                    {/* 1. Styled Map lines container (Changes content dynamically!) */}
                    <div className="absolute inset-0 z-0">
                      {HAS_VALID_MAPS_KEY ? (
                        <APIProvider apiKey={GOOGLE_MAPS_API_KEY} version="weekly">
                          <Map
                            key={selectedJurisdiction}
                            defaultCenter={JURISDICTION_COORDS[selectedJurisdiction as keyof typeof JURISDICTION_COORDS]}
                            defaultZoom={15}
                            mapId="DEMO_MAP_ID"
                            disableDefaultUI={true}
                            zoomControl={true}
                            internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                            style={{ width: "100%", height: "100%" }}
                          >
                            <AdvancedMarker position={JURISDICTION_COORDS[selectedJurisdiction as keyof typeof JURISDICTION_COORDS]}>
                              <MapPin background="#EF4444" glyphColor="#fff" borderColor="#b91c1c" />
                            </AdvancedMarker>
                          </Map>
                        </APIProvider>
                      ) : (
                        <iframe
                          key={selectedJurisdiction}
                          title={`GOQii Location - ${selectedJurisdiction}`}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          className="absolute inset-0 w-full h-full"
                          loading="lazy"
                          allowFullScreen
                          referrerPolicy="no-referrer-when-downgrade"
                          src={`https://maps.google.com/maps?q=${encodeURIComponent(
                            MAP_COMPONENTS[selectedJurisdiction as keyof typeof MAP_COMPONENTS].fullAddress
                          )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                        />
                      )}
                    </div>

                    {/* Interactive Google Map online/offline status overlay badge */}
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 select-none">
                      <div className="flex items-center gap-1.5 bg-emerald-50 focus:outline-hidden border border-emerald-500/30 text-emerald-600 font-mono text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm text-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE GOOGLE MAP
                      </div>
                      {!HAS_VALID_MAPS_KEY && (
                        <button
                          onClick={() => setShowMapInstructions(true)}
                          className="w-5 h-5 rounded-full bg-white/90 hover:bg-white border border-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center font-sans font-bold text-xs cursor-pointer shadow-xs hover:scale-105 transition-all"
                          title="Get API Setup Instructions"
                        >
                          i
                        </button>
                      )}
                    </div>

                    {/* Instruction setup guide modal overlay */}
                    {showMapInstructions && (
                      <div className="absolute inset-0 z-40 bg-[#070E1ABF] backdrop-blur-md p-5 flex flex-col justify-center items-center text-white text-center">
                        <div className="max-w-[340px] bg-[#0C1524] border border-slate-800 rounded-3xl p-5 shadow-2xl relative">
                          <button 
                            onClick={() => setShowMapInstructions(false)}
                            className="absolute top-3.5 right-3.5 w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer text-[10px] font-bold"
                          >
                            ✕
                          </button>
                          
                          <h3 className="text-sm font-black text-white mb-1.5 tracking-tight uppercase font-sans">Active Google Map Setup</h3>
                          <p className="text-[11px] text-slate-400 mb-4 leading-normal">
                            Expose an active Google Maps component inside this address widget with your API credential steps:
                          </p>

                          <div className="text-left space-y-3.5 text-[11px] text-slate-350 leading-relaxed border-t border-slate-800 pt-3">
                            <div>
                              <strong className="text-[#2BC48A]">Step 1:</strong>{" "}
                              <a 
                                href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-[#2BC48A] underline hover:text-[#2BC48A]/90 font-bold"
                              >
                                Acquire an API Key
                              </a>
                            </div>
                            <div>
                              <strong className="text-[#2BC48A]">Step 2:</strong> Add in AI Studio Environment:
                              <ul className="list-disc pl-4 mt-1 space-y-1 text-slate-400 text-[10px]">
                                <li>Open <strong className="text-white font-semibold">Settings</strong> (⚙️ gear icon, top-right)</li>
                                <li>Select <strong className="text-white font-semibold">Secrets</strong></li>
                                <li>Key: <code className="bg-slate-950 px-1 py-0.5 rounded text-rose-300 font-mono">GOOGLE_MAPS_PLATFORM_KEY</code></li>
                                <li>Paste key value & hit <strong className="text-white font-semibold">Enter</strong></li>
                              </ul>
                            </div>
                          </div>

                          <button
                            onClick={() => setShowMapInstructions(false)}
                            className="mt-5 w-full py-2 rounded-xl bg-[#2BC48A] hover:bg-[#209c6c] text-slate-950 font-black tracking-wider uppercase transition-all text-[11px] cursor-pointer"
                          >
                            Continue Demo Mode
                          </button>
                        </div>
                      </div>
                    )}

                    {/* 2. Top address info block styled exactly like Google Maps */}
                    <div className="bg-white/98 backdrop-blur-md rounded-2xl p-4 border border-slate-100 shadow-[0_12px_28px_rgba(15,23,42,0.06)] flex items-center justify-between gap-4 max-w-[340px] z-10 self-start">
                      <div className="text-left">
                        <span className="font-sans font-bold text-[13.5px] text-slate-900 block leading-tight">
                          {MAP_COMPONENTS[selectedJurisdiction as keyof typeof MAP_COMPONENTS].title}
                        </span>
                        <span className="font-sans text-[11px] text-slate-500 font-medium block mt-1 leading-normal max-w-[210px]">
                          {MAP_COMPONENTS[selectedJurisdiction as keyof typeof MAP_COMPONENTS].fullAddress}
                        </span>
                      </div>
                      
                      {/* Google Maps Actions Round Controls */}
                      <div className="flex items-center gap-2 border-l border-slate-100 pl-3.5 shrink-0">
                        {/* Direction trigger button */}
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_COMPONENTS[selectedJurisdiction as keyof typeof MAP_COMPONENTS].fullAddress)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] transition-colors flex items-center justify-center text-white cursor-pointer"
                          title="Google Directions"
                        >
                          <svg className="w-4 h-4 fill-white translate-x-[0.5px]" viewBox="0 0 24 24">
                            <path d="M22.4 10.9L13.1 1.6C12.5 1 11.5 1 10.9 1.6L1.6 10.9C1 11.5 1 12.5 1.6 13.1L10.9 22.4C11.5 23 12.5 23 13.1 22.4L22.4 13.1C23 12.5 23 11.5 22.4 10.9ZM12.5 15.5V13H9.5C8.7 13 8 12.3 8 11.5V9.5H9.5V11.5H12.5V9L16 12.25L12.5 15.5Z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    {/* 3. Bottom left Satellite View layers card overlay */}
                    <div className="flex justify-between items-end w-full z-10 select-none">
                      <div className="w-12 h-12 rounded-xl border-2 border-white overflow-hidden shadow-[0_6px_16px_rgba(15,23,42,0.08)] bg-slate-800 shrink-0 transform hover:scale-105 active:scale-95 transition-transform cursor-pointer relative group">
                        <img 
                          src={
                            selectedJurisdiction === "US" 
                              ? "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=120"
                              : selectedJurisdiction === "UK"
                              ? "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=120"
                              : "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=120"
                          }
                          alt="Satellite Layers View Toggle" 
                          className="w-full h-full object-cover opacity-85 group-hover:scale-110 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                        {/* Small text in layers view box */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                          <span className="font-mono text-[7px] font-black text-white uppercase tracking-widest bg-black/40 px-1 py-0.5 rounded-sm text-center font-bold">MAP</span>
                        </div>
                      </div>

                      {/* 4. Google watermark logo + term list links styled on map */}
                      <div className="flex flex-col items-end gap-0.5">
                        <div className="inline-flex items-baseline gap-0.5 select-none opacity-85">
                          <span className="font-serif font-black text-[13px] text-slate-500 italic">G</span>
                          <span className="font-serif font-black text-[11px] text-slate-500 tracking-tighter">o</span>
                          <span className="font-serif font-black text-[11px] text-red-500 tracking-tighter">o</span>
                          <span className="font-serif font-black text-[11px] text-[#f1c40f] tracking-tighter">g</span>
                          <span className="font-serif font-black text-[11px] text-[#3498db] tracking-tighter">l</span>
                          <span className="font-serif font-black text-[11px] text-[#2ecc71] tracking-tighter">e</span>
                        </div>
                        {/* Scale and terms metadata footer row */}
                        <div className="inline-flex items-center gap-1.5 font-mono text-[7px] font-semibold text-slate-400 select-none bg-white/70 backdrop-blur-xs px-2 py-0.5 rounded">
                          <span>Keyboard shortcuts</span>
                          <span>•</span>
                          <span>Map data ©2026</span>
                          <span>•</span>
                          <a href="#" className="hover:underline">Terms</a>
                          <span>•</span>
                          <a href="#" className="hover:underline">Report a error</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>
          </section>
        );
      })()}

    </div>
  );
}
