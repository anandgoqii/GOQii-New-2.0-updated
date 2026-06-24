import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Building2, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, ArrowRight, X, PhoneCall, FileText } from "lucide-react";
import SmartText from "./SmartText";
import BookDemoModal from "./BookDemoModal";

interface AudienceCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  metric: { value: string; label: string };
  bullets: string[];
  ctaText: string;
  ctaType: "app" | "demo" | "doc" | "contact";
  image: string;
  imageAlt: string;
}

const AUDIENCES: AudienceCard[] = [
  {
    id: "individuals",
    title: "For Individuals",
    tagline: "Live Healthier, Longer",
    description: "Personalized health coaching, diagnostics, wearables, and longevity guidance.",
    icon: User,
    metric: { value: "5M+", label: "Registered Users" },
    bullets: [
      "1-on-1 human coaching & live interactions",
      "Continuous health & wearable telemetry tracking",
      "Dynamic biomarkers baseline analysis"
    ],
    ctaText: "Get the App",
    ctaType: "app",
    image: "https://appcdn.goqii.com/storeimg/96411_1782299255.png",
    imageAlt: "Individual analyzing personalized health telemetry metrics on a smart device"
  },
  {
    id: "employers",
    title: "For Employers",
    tagline: "Workforce Longevity & Vitality",
    description: "Workforce wellbeing, employee engagement, and population health programs.",
    icon: Building2,
    metric: { value: "300+", label: "Enterprise Deployments" },
    bullets: [
      "Habit-forming challenges & team rewards",
      "Comprehensive biomarker checks & clinical screening",
      "Measurable stress & chronic prevention indexes"
    ],
    ctaText: "Schedule Employer Demo",
    ctaType: "demo",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Highly motivated modern workforce participating in workspace wellbeing initiatives"
  },
  {
    id: "insurers",
    title: "For Insurers",
    tagline: "Preventive Risk Mitigation",
    description: "Claims reduction, member engagement, and preventive health intelligence.",
    icon: ShieldCheck,
    metric: { value: "Up to 25%", label: "Claims Cost Claims Reduction" },
    bullets: [
      "Actuarial health risk index classification",
      "Incentivized daily behavior dynamic adjustment",
      "Comprehensive regulatory & security compliance structure"
    ],
    ctaText: "Request Actuarial Framework",
    ctaType: "doc",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Predictive preventive health risk intelligence dashboard"
  },
  {
    id: "providers",
    title: "For Providers",
    tagline: "Continuous Coordinated Care",
    description: "Continuous patient monitoring and data-driven care pathways.",
    icon: HeartPulse,
    metric: { value: "94%", label: "Long-term Adherence Rate" },
    bullets: [
      "Works with your existing clinical systems and patient records",
      "Coached transitional care management tracking",
      "Real-time alerts on physiological drift metrics"
    ],
    ctaText: "Contact Clinical Solutions Team",
    ctaType: "contact",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Healthcare clinicians managing coordinates and patient baseline charts"
  }
];

export default function AudienceSelector() {
  const [activeTab, setActiveTab] = useState<string>("individuals");
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [demoRole, setDemoRole] = useState("Employer");
  const [imageLoaded, setImageLoaded] = useState(false);

  // Reset image loaded trigger on tab switch
  useEffect(() => {
    setImageLoaded(false);
  }, [activeTab]);
  
  // Handlers for localized CTA routing
  const handleCtaClick = (type: "app" | "demo" | "doc" | "contact") => {
    if (type === "app") {
      setIsGetAppOpen(true);
    } else if (type === "demo") {
      setDemoRole("EmployerOnly");
      setIsBookDemoOpen(true);
    } else if (type === "doc") {
      setDemoRole("InsurerOnly");
      setIsBookDemoOpen(true);
    } else if (type === "contact") {
      setDemoRole("ProviderOnly");
      setIsBookDemoOpen(true);
    }
  };

  const activeAudience = AUDIENCES.find((aud) => aud.id === activeTab) || AUDIENCES[0];

  return (
    <div 
      id="audience-solutions-section" 
      className="relative w-full bg-[#FFFFFF] py-10 md:py-12 overflow-hidden border-b border-[#E8EDF2]"
    >
      {/* Decorative clean radial graphics to prevent generic visual slop */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2BC48A]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2BC48A]/[0.02] blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
          <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-2. block">
            TAILORED ENGAGEMENT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F172A] tracking-tight font-sans">
            Who are you?
          </h2>
          <p className="text-xs sm:text-xs text-[#667085] mt-2 max-w-lg mx-auto font-sans leading-relaxed">
            Select your segment below to discover how our continuous health platform bridges real-time care loops and personal coaching.
          </p>
        </div>

        {/* 1. HORIZONTAL TABS SELECTOR PANEL FOR DESKTOPS & HIGHLIGHT INDICATORS */}
        <div className="flex md:flex-wrap md:justify-center overflow-x-auto gap-2.5 mb-8 w-full max-w-4xl mx-auto no-scrollbar scroll-smooth px-4 md:px-0">
          {AUDIENCES.map((aud) => {
            const Icon = aud.icon;
            const isActive = activeTab === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[11.5px] font-bold tracking-tight cursor-pointer transition-all duration-300 relative select-none shrink-0 ${
                  isActive
                    ? "bg-[#E6FDF4] border-[#2BC48A] text-[#0F172A] shadow-xs font-black ring-1 ring-[#2BC48A]/30"
                    : "bg-white border-[#E8EDF2] text-slate-500 hover:text-slate-800 hover:border-[#2BC48A]/30 hover:bg-[#FAFBFB]"
                }`}
              >
                <div className={`p-1 rounded-lg transition-colors ${
                  isActive ? "bg-[#2BC48A]/10 text-[#2BC48A]" : "bg-slate-50 text-slate-400"
                }`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <span>{aud.title}</span>
              </button>
            );
          })}
        </div>

        {/* 2. DYNAMIC INTERACTIVE DISPLAY WORKSPACE PANEL */}
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.99, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.99, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch bg-white border border-[#E8EDF2] rounded-3xl p-4 sm:p-6 shadow-[0_12px_36px_rgba(15,23,42,0.02)]"
            >
              
              {/* Left Side: Overview & Core Description */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-4 py-1">
                <div>
                  <div className="mb-2">
                    <span className="text-[9px] bg-[#E5F7F0] text-[#2BC48A] py-0.5 px-2.5 rounded-full font-bold tracking-wider uppercase font-mono">
                      {activeAudience.title}
                    </span>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
                    {activeAudience.tagline}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-slate-600 mt-2 leading-relaxed font-sans font-medium">
                    <SmartText>{activeAudience.description}</SmartText>
                  </p>
                </div>

                {/* Bullets lists */}
                <div className="space-y-2.5 pt-3 border-t border-slate-100">
                  <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest font-sans">
                    Key Solution Scope
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeAudience.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2BC48A] shrink-0 mt-0.5" />
                        <span className="text-[#475467] text-[11.5px] font-semibold leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <motion.button
                    onClick={() => handleCtaClick(activeAudience.ctaType)}
                    whileHover={{ scale: 1.01, x: 1 }}
                    whileTap={{ scale: 0.99 }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2BC48A] text-white text-[11px] font-black tracking-wider uppercase rounded-xl cursor-pointer shadow-md shadow-[#2BC48A]/10 font-sans"
                  >
                    <span>{activeAudience.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

              {/* Right Side: Re-designed space-efficient premium mockup card with integrated KPI Metric Overlay */}
              <div className="lg:col-span-5 flex flex-col justify-end relative rounded-2xl overflow-hidden border border-[#E8EDF2] shadow-[0_12px_32px_rgba(15,23,42,0.02)] min-h-[260px] lg:min-h-[290px] bg-slate-100 group/img">
                
                {/* Image Section */}
                <div className="absolute inset-0 w-full h-full bg-slate-50">
                  {/* High fidelity inline card loading placeholder */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-[#F4FBF8] flex flex-col items-center justify-center p-6 text-center z-10 transition-all duration-300">
                      <div className="relative w-10 h-10 rounded-full bg-[#2BC48A]/10 border border-[#2BC48A]/20 flex items-center justify-center animate-pulse mb-2">
                        <Sparkles className="w-4 h-4 text-[#2BC48A]" />
                        <span className="absolute inset-0 rounded-full border border-[#2BC48A]/25 animate-ping duration-1000" />
                      </div>
                      <span className="text-[9px] uppercase font-black tracking-widest text-[#2BC48A] font-mono">
                        GOQii Telemetry
                      </span>
                      <span className="text-[8px] text-slate-400 font-sans mt-0.5">
                        Securing active network link...
                      </span>
                    </div>
                  )}
                  
                  <img
                    src={activeAudience.image}
                    alt={activeAudience.imageAlt}
                    onLoad={() => setImageLoaded(true)}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover/img:scale-105 ${
                      imageLoaded ? "opacity-100 scale-100 filter blur-0" : "opacity-0 scale-95 filter blur-xs"
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute visual gradient overlays to maximize legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                </div>

                {/* Floating Category Badge (Top) */}
                <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md py-1 px-2.5 rounded-lg border border-white/20 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] animate-pulse" />
                  <span className="text-[8px] uppercase tracking-wider text-slate-800 font-extrabold font-mono">
                    {activeAudience.id} Solutions
                  </span>
                </div>

                {/* Premium Frosted Overlaid Metric Panel (At the bottom of the photo container) */}
                <div className="relative z-10 p-4 bg-slate-950/45 backdrop-blur-md border-t border-white/10 text-white">
                  
                  {/* Metric details */}
                  <div className="mb-1.5">
                    <span className="text-[8px] font-mono tracking-widest text-[#2BC48A] uppercase font-black leading-none block">
                      CORE AUDIENCE METRIC
                    </span>
                    <div className="text-xl sm:text-2xl font-black text-white tracking-tight mt-0.5 leading-none font-sans flex items-baseline gap-1.5">
                      {activeAudience.metric.value}
                      <span className="text-[9px] font-bold text-slate-300 tracking-wider uppercase font-sans">
                        / {activeAudience.metric.label}
                      </span>
                    </div>
                  </div>

                  {/* Operational Strategy summary */}
                  <div className="pt-2 border-t border-white/10 text-left">
                    <div className="text-[8px] text-[#2BC48A] font-sans uppercase font-bold leading-normal">
                      Verified Impact Strategy
                    </div>
                    <p className="text-[10px] text-slate-200 font-sans leading-relaxed mt-0.5">
                      GOQii continuous telemetry combined with human coaching structures accountable behaviors to validate daily clinical outcomes.
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ================= MODAL: LOCALIZED GET THE APP ================= */}
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
                    Download GOQii app
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    Start Your Healthspan Journey
                  </h3>
                  <p className="text-[#667085] text-xs mt-2 font-medium leading-relaxed">
                    Access personalized diagnostics, certified coaching, AI risk evaluation, and wearable sync options directly in the mobile workspace.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#F8FAFB] rounded-2xl border border-[#E8EDF2]">
                  {/* Real QR Code Image */}
                  <div className="w-24 h-24 bg-white border border-[#E8EDF2] p-1.5 rounded-xl shrink-0 flex items-center justify-center relative shadow-sm">
                    <img
                      src="https://appcdn.goqii.com/storeimg/94397_1781604569.png"
                      alt="Download GOQii APP"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full">
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
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= MODAL: AUDIENCE SPECIFIC DEMO CONSULTATION ================= */}
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} initialRole={demoRole} />

    </div>
  );
}
