import { useState } from "react";
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
import BookDemoModal from "./BookDemoModal";

interface SolutionCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  ctaText: string;
  ctaType: "app" | "demo" | "doc" | "contact";
  href?: string;
}

const SOLUTIONS: SolutionCard[] = [
  {
    id: "individuals",
    title: "INDIVIDUALS",
    tagline: "Preventive Longevity",
    description: "Personalized coaching, diagnostics, wearables, and health guidance designed to help people live healthier, longer lives.",
    icon: User,
    ctaText: "Get the App",
    ctaType: "app"
  },
  {
    id: "enterprises",
    title: "ENTERPRISES",
    tagline: "Corporate Wellbeing",
    description: "Workforce health programs that improve employee wellbeing, engagement, and productivity.",
    icon: Building2,
    ctaText: "Book a Demo",
    ctaType: "demo"
  },
  {
    id: "insurance",
    title: "INSURANCE",
    tagline: "Incentivized Prevention",
    description: "Reduce claims and improve member engagement through prevention-first health programs.",
    icon: ShieldCheck,
    ctaText: "Talk to Sales",
    ctaType: "doc"
  },
  {
    id: "providers",
    title: "PROVIDERS",
    tagline: "Clinical Expansion",
    description: "Extend care beyond the clinic with continuous monitoring and patient engagement.",
    icon: HeartPulse,
    ctaText: "Book a Demo",
    ctaType: "contact"
  },
  {
    id: "pharma",
    title: "PHARMA",
    tagline: "Next-Gen Care & Tracking",
    description: "Support patient adherence and health outcomes through connected care programs.",
    icon: FlaskConical,
    ctaText: "Talk to Sales",
    ctaType: "contact"
  },
  {
    id: "health-engage",
    title: "HEALTHENGAGE",
    tagline: "Population-Scale Health",
    description: "Drive preventive healthcare programs across communities, cities, and public health systems.",
    icon: Sparkles,
    ctaText: "See Platform",
    ctaType: "demo",
    href: "https://goqii.com/healthengage"
  }
];

export default function SolutionsEcosystem() {
  const [isGetAppOpen, setIsGetAppOpen] = useState(false);
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [demoRole, setDemoRole] = useState("Individual");

  const handleCtaClick = (type: "app" | "demo" | "doc" | "contact", roleName: string) => {
    if (type === "app") {
      setIsGetAppOpen(true);
    } else {
      let finalRole = roleName;
      if (roleName === "ENTERPRISES") {
        finalRole = "EmployerOnly";
      } else if (roleName === "INSURANCE") {
        finalRole = "InsurerOnly";
      } else if (roleName === "PROVIDERS") {
        finalRole = "ProviderOnly";
      } else if (roleName === "PHARMA") {
        finalRole = "PharmaOnly";
      }
      setDemoRole(finalRole);
      setIsBookDemoOpen(true);
    }
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
          {/* Label structure: 06 | SOLUTIONS ECOSYSTEM */}
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">06</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase">
              Solutions Ecosystem
            </span>
          </div>
          <h2 id="solutions-ecosystem-title" className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F172A] tracking-tight font-sans">
            One platform. Multiple healthcare stakeholders.
          </h2>
          <p className="text-sm text-slate-500 mt-4 max-w-3xl leading-relaxed font-sans font-medium">
            GOQii helps individuals, employers, insurers, providers, pharma organizations, and public health systems improve health outcomes through continuous intelligence and human coaching.
          </p>
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

                  {/* Body description */}
                  <div>
                    <p className="text-xs text-slate-500 font-sans font-semibold leading-relaxed">
                      <SmartText>{card.description}</SmartText>
                    </p>
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-start">
                  {card.href ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2BC48A] group-hover:text-[#2BC48A] hover:underline cursor-pointer tracking-wider uppercase"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleCtaClick(card.ctaType, card.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2BC48A] group-hover:text-[#2BC48A] hover:underline cursor-pointer tracking-wider uppercase"
                    >
                      <span>{card.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  )}
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
          className="mt-16 p-8 bg-gradient-to-r from-[#F4FBF8] to-[#EAF7F2] rounded-3xl border border-[#2BC48A]/20 relative overflow-hidden text-left shadow-sm"
        >
          <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-[#2BC48A]/10 to-transparent pointer-events-none" />
          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#2BC48A] animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-[#2BC48A] uppercase font-black">
                  ALIVE O.S. INTEGRATION
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                Powered by ALIVE O.S.
              </h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed max-w-2xl font-semibold">
                GOQii&apos;s continuous intelligence platform combining wearables, diagnostics, AI, and human coaching.
              </p>
            </div>

            <button
              onClick={() => handleCtaClick("demo", "Solutions Ecosystem")}
              className="px-6 py-3 bg-[#2BC48A] hover:bg-[#229e6f] text-white font-extrabold text-xs tracking-wider uppercase rounded-xl shrink-0 cursor-pointer transition-colors shadow-lg shadow-[#2BC48A]/15 text-center"
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

      {/* ================= INLINE MODAL: CONSULTATION CHANNELS ================= */}
      <BookDemoModal isOpen={isBookDemoOpen} onClose={() => setIsBookDemoOpen(false)} initialRole={demoRole} />

    </section>
  );
}
