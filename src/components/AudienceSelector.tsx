import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Building2, ShieldCheck, HeartPulse, Sparkles, CheckCircle2, ArrowRight, X, PhoneCall, FileText } from "lucide-react";
import SmartText from "./SmartText";

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
    ctaType: "app"
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
    ctaType: "demo"
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
    ctaType: "doc"
  },
  {
    id: "providers",
    title: "For Providers",
    tagline: "Continuous Coordinated Care",
    description: "Continuous patient monitoring and data-driven care pathways.",
    icon: HeartPulse,
    metric: { value: "94%", label: "Long-term Adherence Rate" },
    bullets: [
      "Seamless integration with EHR & EMR data loops",
      "Coached transitional care management tracking",
      "Real-time alerts on physiological drift metrics"
    ],
    ctaText: "Contact Clinical Solutions Team",
    ctaType: "contact"
  }
];

export default function AudienceSelector() {
  const [activeTab, setActiveTab] = useState<string>("individuals");
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [demoRole, setDemoRole] = useState("Employer");
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "" });
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  
  // Handlers for localized CTA routing
  const handleCtaClick = (type: "app" | "demo" | "doc" | "contact") => {
    if (type === "app") {
      setIsGetAppOpen(true);
    } else if (type === "demo") {
      setDemoRole("Employer");
      setIsBookDemoOpen(true);
    } else if (type === "doc") {
      setDemoRole("Insurer");
      setIsBookDemoOpen(true);
    } else if (type === "contact") {
      setDemoRole("Healthcare Provider");
      setIsBookDemoOpen(true);
    }
  };

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const closeDemoModal = () => {
    setIsBookDemoOpen(false);
    setTimeout(() => {
      setDemoSubmitted(false);
      setDemoForm({ name: "", email: "", company: "" });
    }, 300);
  };

  const activeAudience = AUDIENCES.find((aud) => aud.id === activeTab) || AUDIENCES[0];

  return (
    <div 
      id="audience-solutions-section" 
      className="relative w-full bg-[#FFFFFF] py-20 md:py-24 overflow-hidden border-b border-[#E8EDF2]"
    >
      {/* Decorative clean radial graphics to prevent generic visual slop */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] rounded-full bg-[#2BC48A]/[0.02] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-[#2BC48A]/[0.02] blur-[120px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-2.5 block">
            TAILORED ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            Who are you?
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-3 max-w-lg mx-auto font-sans">
            Select your segment below to discover how our continuous health platform bridges real-time care loops and personal coaching.
          </p>
        </div>

        {/* 1. HORIZONTAL TABS SELECTOR PANEL FOR DESKTIPS & HIGHLIGHT INDICATORS */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 w-full max-w-4xl mx-auto">
          {AUDIENCES.map((aud) => {
            const Icon = aud.icon;
            const isActive = activeTab === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveTab(aud.id)}
                className={`flex items-center gap-2.5 px-6 py-4 rounded-xl border text-xs sm:text-sm font-bold tracking-tight cursor-pointer transition-all duration-300 relative select-none ${
                  isActive
                    ? "bg-[#F4FBF9] border-[#2BC48A]/60 text-[#0F172A] shadow-sm font-black"
                    : "bg-white border-[#E8EDF2] text-slate-500 hover:text-slate-800 hover:border-[#2BC48A]/30 hover:bg-[#FAFBFB]"
                }`}
              >
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? "bg-[#2BC48A]/10 text-[#2BC48A]" : "bg-slate-50 text-slate-400"
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span>{aud.title}</span>
                {isActive && (
                  <motion.div 
                    layoutId="activeTabUnderbar" 
                    className="absolute bottom-[-1px] left-8 right-8 h-[2px] bg-[#2BC48A]"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 2. DYNAMIC INTERACTIVE DISPLAY WORKSPACE PANEL */}
        <div className="w-full max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-10 shadow-[0_16px_48px_rgba(15,23,42,0.02)]"
            >
              
              {/* Left Side: Overview & Core Description */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left space-y-6">
                <div>
                  <div className="mb-2.5">
                    <span className="text-[10px] bg-[#E5F7F0] text-[#2BC48A] py-1 px-3 rounded-full font-bold tracking-wider uppercase font-mono">
                      {activeAudience.title}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {activeAudience.tagline}
                  </h3>
                  
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed font-sans font-medium">
                    <SmartText>{activeAudience.description}</SmartText>
                  </p>
                </div>

                {/* Bullets lists */}
                <div className="space-y-3.5 pt-4 border-t border-slate-100">
                  <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest font-sans">
                    Key Solution Scope
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {activeAudience.bullets.map((bullet, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#2BC48A] shrink-0 mt-0.5" />
                        <span className="text-[#475467] text-xs font-semibold leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <motion.button
                    onClick={() => handleCtaClick(activeAudience.ctaType)}
                    whileHover={{ scale: 1.02, x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#2BC48A] text-white text-xs font-black tracking-wider uppercase rounded-xl cursor-pointer shadow-md shadow-[#2BC48A]/10 font-sans"
                  >
                    <span>{activeAudience.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

              {/* Right Side: Visual Accent & Key Metric Highlight Card (Bento Block style) */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 flex flex-col justify-between overflow-hidden relative shadow-[0_12px_32px_rgba(0,0,0,0.15)] h-full min-h-[220px]">
                  
                  {/* Absolute visual wireframes */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2BC48A]/5 to-transparent pointer-events-none" />
                  <div className="absolute right-0 top-0 p-4 opacity-[0.05] pointer-events-none">
                    <Sparkles className="w-24 h-24 text-[#2BC48A]" />
                  </div>

                  <div className="relative z-10">
                    <span className="text-[9px] font-mono tracking-widest text-[#2BC48A] uppercase font-black leading-none block">
                      CORE AUDIENCE METRIC
                    </span>
                    
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-3 leading-none font-sans">
                      {activeAudience.metric.value}
                    </div>
                    
                    <div className="text-[11px] font-black text-slate-300 tracking-wider uppercase mt-1">
                      {activeAudience.metric.label}
                    </div>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-slate-800/80 mt-4 text-left">
                    <div className="text-[10px] text-slate-400 font-sans uppercase font-bold leading-normal">
                      Verified Impact Strategy
                    </div>
                    <p className="text-xs text-slate-300 font-sans leading-relaxed mt-1">
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
      <AnimatePresence>
        {isBookDemoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={closeDemoModal}
            />

            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-md bg-white border border-[#E8EDF2] shadow-2xl rounded-3xl p-6 md:p-8 z-10 text-left overflow-hidden"
            >
              <button
                onClick={closeDemoModal}
                className="absolute top-5 right-5 p-1.5 rounded-full border border-[#E8EDF2] hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!demoSubmitted ? (
                  <motion.div
                    key="audience-demo-input"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-5">
                      <div>
                        <span className="inline-block bg-[#E5F7F0] text-[#2BC48A] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                          {demoRole === "Insurer" ? "Insurer Consultation" : demoRole === "Healthcare Provider" ? "Clinical Collaboration" : "Corporate consultation"}
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                          Inquire for {demoRole} Solutions
                        </h3>
                        <p className="text-[#667085] text-xs mt-2 font-medium leading-relaxed">
                          Integrate our preventative biomarkers, clinical research support, and certified human coaching with your existing frameworks.
                        </p>
                      </div>

                      <form onSubmit={handleDemoSubmit} className="space-y-3.5">
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Your Name</label>
                          <input
                            required
                            type="text"
                            placeholder="Anand"
                            className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] text-sm focus:outline-none focus:border-[#2BC48A] transition-colors"
                            value={demoForm.name}
                            onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Corporate Email</label>
                          <input
                            required
                            type="email"
                            placeholder="anand@goqii.com"
                            className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] text-sm focus:outline-none focus:border-[#2BC48A] transition-colors"
                            value={demoForm.email}
                            onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Company / Entity</label>
                          <input
                            required
                            type="text"
                            placeholder="GOQii"
                            className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] text-sm focus:outline-none focus:border-[#2BC48A] transition-colors"
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider font-sans">Perspective Type</label>
                          <div className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] text-sm bg-slate-50 font-bold text-slate-700 select-none">
                            {demoRole}
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 bg-gradient-to-r from-[#21C083] to-[#00ADC7] hover:shadow-lg text-white font-extrabold text-sm tracking-wider uppercase rounded-xl mt-2 transition-all cursor-pointer text-center"
                        >
                          Request Professional Consultation
                        </button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="audience-demo-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-black text-slate-900 tracking-tight">Consultation Requested!</h4>
                      <p className="text-[#667085] text-xs max-w-xs mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-slate-800">{demoForm.name}</span>. A clinical/corporate health specialist will email you within 24 hours at <span className="font-bold text-slate-800">{demoForm.email}</span> to structure a custom walkthrough customized for <span className="font-bold text-slate-800">{demoForm.company}</span> under our <span className="font-bold text-emerald-600">{demoRole}</span> program scope.
                      </p>
                    </div>

                    <button
                      onClick={closeDemoModal}
                      className="px-6 py-2.5 rounded-full border border-[#E8EDF2] text-xs font-bold hover:bg-slate-50 text-slate-700 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
