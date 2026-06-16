import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Building2, 
  ShieldCheck, 
  HeartPulse, 
  FlaskConical, 
  Sparkles,
  ArrowRight,
  X,
  CheckCircle2,
  Smartphone,
  Apple
} from "lucide-react";
import SmartText from "./SmartText";

interface SolutionCard {
  id: string;
  title: string;
  tagline: string;
  descriptions: string[];
  icon: any;
  ctaText: string;
  ctaType: "app" | "demo" | "doc" | "contact";
}

const SOLUTIONS: SolutionCard[] = [
  {
    id: "individuals",
    title: "INDIVIDUALS",
    tagline: "Preventive Longevity",
    descriptions: [
      "Personalized health coaching, diagnostics, wearables, and longevity guidance designed to help people prevent illness before it starts.",
      "Supporting healthier lifestyles through continuous monitoring, real-time insights, and sustainable behavior change."
    ],
    icon: User,
    ctaText: "Get the App",
    ctaType: "app"
  },
  {
    id: "enterprises",
    title: "ENTERPRISES",
    tagline: "Corporate Wellbeing",
    descriptions: [
      "Workforce wellbeing, employee engagement, preventive health programs, and organizational health intelligence.",
      "Supporting healthier, more productive workforces through scalable health and wellness programs."
    ],
    icon: Building2,
    ctaText: "Book a Demo",
    ctaType: "demo"
  },
  {
    id: "insurance",
    title: "INSURANCE",
    tagline: "Incentivized Prevention",
    descriptions: [
      "Reduce claims costs, improve member engagement, and reward healthier behaviors through continuous health intelligence.",
      "Helping insurers shift from reactive care to prevention-driven member health management."
    ],
    icon: ShieldCheck,
    ctaText: "Talk to Sales",
    ctaType: "doc"
  },
  {
    id: "providers",
    title: "PROVIDERS",
    tagline: "Clinical Expansion",
    descriptions: [
      "Extend care beyond the clinic through continuous monitoring, patient engagement, and data-driven care pathways.",
      "Supporting proactive healthcare delivery and better long-term patient outcomes."
    ],
    icon: HeartPulse,
    ctaText: "Book a Demo",
    ctaType: "contact"
  },
  {
    id: "pharma",
    title: "PHARMA",
    tagline: "Next-gen Care & Tracking",
    descriptions: [
      "Patient support programs, adherence initiatives, and real-world health engagement powered by continuous data and coaching.",
      "Helping pharmaceutical organizations improve patient outcomes beyond treatment."
    ],
    icon: FlaskConical,
    ctaText: "Talk to Sales",
    ctaType: "contact"
  },
  {
    id: "health-engage",
    title: "HEALTH ENGAGE",
    tagline: "Population-scale Health",
    descriptions: [
      "Population-scale health engagement programs designed for governments, public health systems, and large-scale wellness initiatives.",
      "Driving preventive healthcare adoption through data, coaching, and continuous engagement."
    ],
    icon: Sparkles,
    ctaText: "See Platform",
    ctaType: "demo"
  }
];

export default function SolutionsEcosystem() {
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [demoRole, setDemoRole] = useState("Individual");
  const [demoForm, setDemoForm] = useState({ name: "", email: "", company: "" });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const handleCtaClick = (type: "app" | "demo" | "doc" | "contact", roleName: string) => {
    if (type === "app") {
      setIsGetAppOpen(true);
    } else {
      setDemoRole(roleName);
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

  return (
    <section 
      id="solutions-ecosystem-section" 
      className="relative w-full bg-[#F8FAFC] py-20 md:py-[120px] overflow-hidden border-b border-[#E8EDF2]"
    >
      {/* Refined architectural graphics in corners */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] rounded-full bg-[#2BC48A]/[0.015] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] rounded-full bg-[#00ADC7]/[0.012] blur-[100px] pointer-events-none" />

      {/* Decorative clean outline grids matching high-end layout aesthetic */}
      <div className="absolute inset-0 border-[8px] border-[#E8EDF2]/10 pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Section Header & Subtitles */}
        <div className="text-left max-w-4xl mb-12 md:mb-16">
          <span className="text-[10px] font-sans font-black tracking-[0.25em] text-[#2BC48A] uppercase mb-3 block">
            STAKEHOLDER SYNERGY
          </span>
          <h2 id="solutions-ecosystem-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            SOLUTIONS ECOSYSTEM
          </h2>
          <p id="solutions-ecosystem-lead" className="text-base font-bold text-[#2BC48A] mt-2.5 max-w-2xl font-sans">
            One platform. Multiple healthcare stakeholders.
          </p>
          <p className="text-sm text-slate-500 mt-4 max-w-3xl leading-relaxed font-sans font-medium">
            GOQii powers preventive health, continuous monitoring, engagement, and longevity outcomes across individuals, employers, insurers, healthcare providers, pharmaceutical organizations, and public health ecosystems.
          </p>

          <div className="mt-8 pt-6 border-t border-slate-200/60 max-w-3xl">
            <h3 id="solutions-ecosystem-intro-sub" className="text-sm sm:text-base font-extrabold text-[#0F172A] racking-tight leading-snug">
              Designed for every participant in the healthcare ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 font-medium leading-relaxed max-w-3xl">
              Whether you&apos;re managing your personal health, supporting a workforce, improving insurance outcomes, extending patient care, or driving population health initiatives, GOQii provides a unified platform powered by continuous intelligence and human coaching.
            </p>
          </div>
        </div>

        {/* Dynamic Equal-Height Card Grid: 2 rows x 3 columns on desktop */}
        <div id="solutions-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SOLUTIONS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                id={`solutions-card-${card.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/45 hover:shadow-xl rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-300 relative"
              >
                {/* Active Accent Border Strip */}
                <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-[#21C083] to-[#00ADC7] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Small Icon at Top */}
                  <div className="w-10 h-10 rounded-xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#2BC48A] group-hover:text-white group-hover:scale-110 shadow-sm">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>

                  {/* Card Header Title representing segment */}
                  <div className="text-[10px] font-bold tracking-[0.15em] text-[#2BC48A] uppercase mb-1">
                    {card.title}
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight mb-4 group-hover:text-[#2BC48A] transition-colors leading-tight">
                    {card.tagline}
                  </h4>

                  {/* Body descriptions */}
                  <div className="space-y-3">
                    {card.descriptions.map((desc, i) => (
                      <p key={i} className="text-xs text-slate-500 font-sans font-semibold leading-relaxed">
                        <SmartText>{desc}</SmartText>
                      </p>
                    ))}
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-start">
                  <button
                    onClick={() => handleCtaClick(card.ctaType, card.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2BC48A] group-hover:text-[#2BC48A] hover:underline cursor-pointer tracking-wider uppercase"
                  >
                    <span>{card.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Equal-Height Outcomes Bottom Strip */}
        <motion.div
          id="solutions-outcome-strip"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 rounded-3xl border border-slate-800 relative overflow-hidden text-left"
        >
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-[#2BC48A]/5 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-4xl flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2BC48A] animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-[#2BC48A] uppercase font-black">
                  UNIFIED ECOSYSTEM MATRIX
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                One Intelligence Layer. Multiple Outcomes.
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-2xl font-medium">
                All solutions are powered by ALIVE O.S., GOQii&apos;s continuous health intelligence engine that combines wearables, diagnostics, AI, and human coaching to deliver measurable health outcomes at scale.
              </p>
            </div>

            <button
              onClick={() => handleCtaClick("demo", "Solutions Ecosystem")}
              className="px-6 py-3 bg-[#2BC48A] hover:bg-[#2bc48ab3] text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shrink-0 cursor-pointer transition-colors shadow-lg shadow-[#2BC48A]/10 text-center"
            >
              Consult an Expert
            </button>
          </div>
        </motion.div>

      </div>

      {/* ================= INLINE MODAL: GET THE APP ================= */}
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
                    Download GOQii
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                    Start Your Healthspan Journey
                  </h3>
                  <p className="text-[#667085] text-xs mt-2 font-medium leading-relaxed">
                    Access personalized diagnostics, certified coaching, AI risk evaluation, and wearable sync options directly in the mobile workspace.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 p-4 bg-[#F8FAFB] rounded-2xl border border-[#E8EDF2]">
                  {/* QR Pattern visual */}
                  <div className="w-24 h-24 bg-white border border-[#E8EDF2] p-2 rounded-xl shrink-0 flex items-center justify-center relative shadow-inner">
                    <div className="w-full h-full relative opacity-90">
                      <div className="absolute top-0 left-0 w-5 h-5 border-2 border-[#0F172A]" />
                      <div className="absolute top-0 right-0 w-5 h-5 border-2 border-[#0F172A]" />
                      <div className="absolute bottom-0 left-0 w-5 h-5 border-2 border-[#0F172A]" />
                      <div className="absolute bottom-1 right-1 w-4 h-4 bg-[#2BC48A]/10 border border-[#2BC48A]/40" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4.5 h-4.5 bg-white p-0.5 rounded shadow-sm">
                        <img src="https://appcdn.goqii.com/storeimg/36455_1779860387.png" alt="" className="w-full h-full object-contain" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 w-full">
                    <a
                      href="https://apps.apple.com/in/app/goqii-smart-preventative-healthcare/id916183921"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 bg-[#0F172A] text-white py-2 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-sm text-center"
                    >
                      <Apple className="w-4 h-4" />
                      <span className="text-[11px] font-black tracking-wide uppercase">App Store (iOS)</span>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=com.goqii.doctor"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center sm:justify-start gap-2 bg-[#0F172A] text-white py-2 px-4 rounded-xl hover:bg-slate-800 transition-colors shadow-sm text-center"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span className="text-[11px] font-black tracking-wide uppercase">Play Store (Android)</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= INLINE MODAL: CONSULTATION CHANNELS ================= */}
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
                    key="solutions-demo-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-5">
                      <div>
                        <span className="inline-block bg-[#E5F7F0] text-[#2BC48A] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                          ECOSYSTEM SOLUTIONS
                        </span>
                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                          Inquire for {demoRole}
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
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">Organization / Entity</label>
                          <input
                            required
                            type="text"
                            placeholder="GOQii"
                            className="w-full px-4 py-3 rounded-xl border border-[#E8EDF2] text-sm focus:outline-none focus:border-[#2BC48A] transition-colors"
                            value={demoForm.company}
                            onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 bg-[#2BC48A] hover:bg-[#25b57e] transition-colors text-white font-extrabold text-sm tracking-wider uppercase rounded-xl mt-2 cursor-pointer text-center"
                        >
                          Send Inquire Proposal
                        </button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="solutions-demo-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-black text-slate-900 tracking-tight">Walkthrough Scheduled!</h4>
                      <p className="text-[#667085] text-xs max-w-xs mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-slate-800">{demoForm.name}</span>. A health solution consultant will reach back within 24 hours at <span className="font-bold text-slate-800">{demoForm.email}</span> to structure a custom walkthrough for <span className="font-bold text-slate-800">{demoForm.company}</span>.
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

    </section>
  );
}
