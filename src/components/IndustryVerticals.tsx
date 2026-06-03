import { motion } from "motion/react";
import { Users2, Shield, HeartPulse, Pill, Landmark, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function IndustryVerticals() {
  const [activeVertical, setActiveVertical] = useState(0);

  const verticals = [
    {
      title: "Employers",
      subtitle: "Enterprise Workforce Vitality",
      desc: "Drive measurable productivity, scale executive baseline health parameters, and significantly reduce employee absenteeism and healthcare premiums.",
      stat: "85% Engagement Rate",
      statLabel: "Workforce participation",
      icon: Users2,
      benefit: "Lower healthcare cost profiles & high workforce spirit.",
      cta: "Request Demo",
    },
    {
      title: "Payers",
      subtitle: "Claims Prevention & Risk Management",
      desc: "Implement active lifestyle rewards teamed with wellness policy upgrades to identify pre-clinical risks early and reduce healthcare expenditure.",
      stat: "34% Claims Reduction",
      statLabel: "In randomized trials",
      icon: Shield,
      benefit: "Defensive premium adjustments & dynamic biomarker risk scores.",
      cta: "Speak to Sales",
    },
    {
      title: "Providers",
      subtitle: "Continuous Outpatient Integration",
      desc: "Extend care beyond clinical walls with automated dashboards, continuous physiological feedback, and whitelabeled coaching support.",
      stat: "90% Patient Satisfaction",
      statLabel: "Continuous compliance",
      icon: HeartPulse,
      benefit: "Reduced readmission rates & high remote monitoring precision.",
      cta: "Learn More",
    },
    {
      title: "Pharma",
      subtitle: "Therapeutic Adherence & Evidence",
      desc: "Collect high-quality behavior telemetry, support patient adherence programs, and secure real-world clinical biomarker proof cycles.",
      stat: "28% Adherence Improvement",
      statLabel: "Prescription loop tracking",
      icon: Pill,
      benefit: "Pragmatic evidence collection & superior therapeutic outputs.",
      cta: "Partner With Us",
    },
    {
      title: "Government",
      subtitle: "Population-wide Prevention Scales",
      desc: "Scale clinical lifestyle intervention platforms across public health sectors, reducing systemic burdens on heavy state hospitals.",
      stat: "Regional Scale Deployment",
      statLabel: "Verified outcomes on citizens",
      icon: Landmark,
      benefit: "Socioeconomic savings & scalable preventions.",
      cta: "Explore Programs",
    },
  ];

  return (
    <div id="section-organizations" className="w-full bg-[#FAFBFB] py-20 md:py-28 border-b border-[#E8EDF2] select-none">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Intro */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] text-[#667085] uppercase mb-4 block">
            GOQII INDUSTRY VERTICALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-[#0F172A] leading-tight font-sans">
            Tailored outcomes. <br />
            For every enterprise.
          </h2>
          <div className="w-14 h-[3.5px] bg-[#2BC48A] rounded-full mt-6 mb-8 mx-auto" />
          <p className="text-[#64748B] text-[15px] font-medium leading-relaxed">
            From Fortune 500 corporations and private insurers to public healthcare systems and nation-state digital registers.
          </p>
        </div>

        {/* 2-Column interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Vertical selectors (Left Column) */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {verticals.map((v, idx) => {
              const Icon = v.icon;
              const isActive = activeVertical === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveVertical(idx)}
                  className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-white border-[#2BC48A]/30 shadow-[0_12px_24px_rgba(15,23,42,0.03)] text-[#0F172A]"
                      : "bg-transparent border-transparent hover:bg-slate-50 text-[#64748B] hover:text-[#0F172A]"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      isActive ? "bg-[#2BC48A] text-white" : "bg-white border border-[#E8EDF2] text-[#64748B]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[13.5px] font-black tracking-wide block">{v.title}</span>
                    <span className="text-[11px] font-medium text-[#c] mt-0.5 block opacity-80">
                      {v.subtitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive display card (Right Column) */}
          <div className="lg:col-span-8 flex">
            <motion.div
              key={activeVertical}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-[#E8EDF2] rounded-[32px] p-8 md:p-10 shadow-[0_12px_36px_rgba(0,0,0,0.01)] flex flex-col justify-between w-full"
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  {(() => {
                    const TargetIcon = verticals[activeVertical].icon;
                    return (
                      <div className="w-10 h-10 rounded-xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                        <TargetIcon className="w-5 h-5" />
                      </div>
                    );
                  })()}
                  <span className="text-xs font-black tracking-widest font-mono text-[#2BC48A] uppercase">
                    {verticals[activeVertical].subtitle}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mb-4">
                  For {verticals[activeVertical].title}
                </h3>
                
                <p className="text-[#475467] text-[15px] sm:text-[16px] leading-[1.75] mb-8 font-medium">
                  {verticals[activeVertical].desc}
                </p>

                {/* Stat Display Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAFBFB] border border-[#E8EDF2] rounded-2xl p-6 mb-8">
                  <div>
                    <span className="text-3xl font-black text-[#2BC48A] tracking-tight block">
                      {verticals[activeVertical].stat}
                    </span>
                    <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider block mt-1">
                      {verticals[activeVertical].statLabel}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] tracking-wide block mb-1">
                      Key Benefit
                    </span>
                    <span className="text-[12px] font-medium text-[#475467] leading-relaxed block">
                      {verticals[activeVertical].benefit}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="flex items-center self-start">
                <button
                  className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#2BC48A] text-white font-bold text-xs px-6 py-3.5 rounded-full shadow-sm transition-all duration-300 group cursor-pointer uppercase"
                >
                  <span>{verticals[activeVertical].cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
