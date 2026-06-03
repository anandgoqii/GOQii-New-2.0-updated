import { motion } from "motion/react";
import { Users, Building, Activity, Heart, ShieldAlert, CheckSquare, Globe } from "lucide-react";

export default function ScaleAndMetrics() {
  const metrics = [
    {
      value: "5M+",
      label: "Active Users",
      desc: "Empowered globally",
      icon: Users,
    },
    {
      value: "300+",
      label: "Enterprise Partners",
      desc: "Corporate trust",
      icon: Building,
    },
    {
      value: "34%",
      label: "Claims Reduction",
      desc: "For premium payers",
      icon: ShieldAlert,
    },
    {
      value: "90%",
      label: "Patient Satisfaction",
      desc: "Clinical adherence",
      icon: Heart,
    },
    {
      value: "85%",
      label: "Workforce Engagement",
      desc: "Active health participation",
      icon: CheckSquare,
    },
    {
      value: "28%",
      label: "Adherence Improvement",
      desc: "Pharma prescription loops",
      icon: Activity,
    },
  ];

  const scaleLocations = [
    "India",
    "United Kingdom",
    "United Arab Emirates",
    "Saudi Arabia",
    "NHS Public Programs",
    "Fortune 500 Deployments",
  ];

  return (
    <div id="section-scale-metrics" className="w-full bg-white py-16 md:py-24 border-b border-[#E8EDF2] select-none">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Title layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#667085] uppercase mb-4 block">
              GOQII SCALE & CLINICAL SAVINGS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-tight font-sans">
              Measurable impact. <br />
              At population scale.
            </h2>
          </div>
          <div className="lg:col-span-6 text-left lg:text-right pb-2">
            <p className="text-[#64748B] text-[14.5px] font-medium leading-relaxed max-w-md lg:ml-auto">
              Most platforms collect data. GOQii translates continuous clinical signals into validated behavioral changes and significant financial savings.
            </p>
          </div>
        </div>

        {/* 6 Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="bg-[#F8FAFB] border border-[#E8EDF2] rounded-2xl p-5 text-left hover:border-[#2BC48A]/35 transition-all duration-300 flex flex-col justify-between aspect-square"
              >
                <div className="w-8 h-8 rounded-full bg-white border border-[#E8EDF2] flex items-center justify-center text-[#2BC48A] mb-4">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight block mb-1">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold text-[#0F172A] tracking-wide block mb-0.5">
                    {m.label}
                  </span>
                  <span className="text-[10.5px] font-medium text-[#64748B] block leading-normal">
                    {m.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global scale section embedded beautifully */}
        <div className="bg-[#FAFBFB] rounded-3xl border border-[#E8EDF2] p-8 md:p-10 text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-md shrink-0">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4 text-[#2BC48A]" />
              <span className="text-[10px] font-bold font-mono tracking-widest text-[#2BC48A] uppercase">
                GLOBAL FOOTPRINT & DEPLOYMENT
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight mb-2">
              Trusted Across Public & Private Sectors
            </h4>
            <p className="text-xs text-[#64748B] font-medium leading-relaxed">
              Clinically approved, locally optimized, and securely compliant with public regulation across multiple global regions.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2.5 justify-start lg:justify-end max-w-xl">
            {scaleLocations.map((loc, idx) => (
              <span
                key={idx}
                className="bg-white border border-[#E8EDF2] hover:border-[#2BC48A]/30 text-[#0F172A] font-bold text-xs px-4 py-2.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.015)] cursor-default transition-all duration-200"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
