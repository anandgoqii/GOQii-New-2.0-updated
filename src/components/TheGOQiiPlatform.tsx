import { motion } from "motion/react";
import { useState } from "react";
import { 
  ArrowRight,
  Briefcase,
  HeartHandshake,
  Pill,
  ShieldCheck,
  Stethoscope
} from "lucide-react";

interface Ecosystem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  link: string;
  ctaText: string;
}

const ECOSYSTEMS: Ecosystem[] = [
  {
    id: "healthengage",
    title: "HEALTHENGAGE",
    subtitle: "A configurable health engagement platform enabling healthcare organizations to launch prevention, wellness, chronic care, and population health programs at scale.",
    desc: "Built for providers, payers, employers, and healthcare ecosystems.",
    icon: HeartHandshake,
    color: "#EC4899",
    bgColor: "bg-[#FDF2F8]",
    borderColor: "hover:border-pink-500/40 hover:shadow-[0_16px_40px_rgba(236,72,153,0.06)]",
    link: "https://goqii.com/healthengage",
    ctaText: "See Platform"
  },
  {
    id: "insurance",
    title: "INSURANCE",
    subtitle: "Prevention-first engagement programs designed to improve member participation, encourage healthier lifestyles, and reduce long-term health risks.",
    desc: "Helping insurers shift from claims management to continuous prevention.",
    icon: ShieldCheck,
    color: "#10B981",
    bgColor: "bg-[#ECFDF5]",
    borderColor: "hover:border-emerald-500/40 hover:shadow-[0_16px_40px_rgba(16,185,129,0.06)]",
    link: "https://goqii.com/healthengage-insurance",
    ctaText: "Talk to Sales"
  },
  {
    id: "hospitals",
    title: "HOSPITALS",
    subtitle: "Extending patient engagement beyond hospital walls through remote monitoring, coaching, follow-up care, and preventive pathways.",
    desc: "Supporting continuity of care across the entire patient journey.",
    icon: Stethoscope,
    color: "#EF4444",
    bgColor: "bg-[#FEF2F2]",
    borderColor: "hover:border-red-500/40 hover:shadow-[0_16px_40px_rgba(239,68,68,0.06)]",
    link: "https://go-qii-connected-care-7c49.vercel.app/",
    ctaText: "Book a Demo"
  },
  {
    id: "pharmaceuticals",
    title: "PHARMA",
    subtitle: "Patient support programs, therapy adherence, chronic disease management, and health engagement initiatives.",
    desc: "Improving outcomes through sustained patient participation and behavioral support.",
    icon: Pill,
    color: "#8B5CF6",
    bgColor: "bg-[#F5F3FF]",
    borderColor: "hover:border-violet-500/40 hover:shadow-[0_16px_40px_rgba(139,92,246,0.06)]",
    link: "https://goqii.com/healthengage-pharma",
    ctaText: "Talk to Sales"
  },
  {
    id: "corporates",
    title: "CORPORATES",
    subtitle: "Workforce wellbeing, employee engagement, preventive health programs, and organizational health intelligence.",
    desc: "Supporting healthier, more productive workforces through scalable health and wellness programs.",
    icon: Briefcase,
    color: "#00ADC7",
    bgColor: "bg-[#E0F2FE]/45",
    borderColor: "hover:border-[#00ADC7]/40 hover:shadow-[0_16px_40px_rgba(0,173,199,0.06)]",
    link: "https://goqii.com/healthengage-corporate",
    ctaText: "Book a Demo"
  }
];

export default function TheGOQiiPlatform() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div
      id="section-platform"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-white py-24 px-4 sm:px-6 md:px-16 border-t border-[#E8EDF2]"
    >
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#f1f5f9_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-70 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="w-full text-left mb-16">
          <div className="flex items-center gap-4 text-xs mb-8 font-sans">
            <span className="font-black text-[#2BC48A] text-sm tracking-wide">07</span>
            <span className="text-[#E2E8F0] font-light text-sm">|</span>
            <span className="font-extrabold text-[#64748B] text-[11px] tracking-[0.25em] uppercase">
              GOQii HEALTHENGAGE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="text-sm font-black tracking-widest text-[#2BC48A] uppercase block mb-3">
                ONE PLATFORM.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.08] font-sans">
                Multiple healthcare <br />
                ecosystems.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed font-sans mt-2">
                GOQii powers prevention, engagement, coaching, diagnostics, and health intelligence across individuals, employers, insurers, healthcare providers, pharmaceutical organizations, and public health systems through one connected platform.
              </p>
            </div>
          </div>
        </div>

        {/* Ecosystems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {ECOSYSTEMS.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === item.id;
            
            return (
              <motion.a
                key={item.id}
                id={`platform-${item.id}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative bg-white border border-[#E8EDF2] rounded-[24px] p-5 text-left flex flex-col justify-between transition-all duration-300 min-h-[360px] sm:min-h-[380px] lg:min-h-[390px] xl:min-h-[410px] group cursor-pointer block ${item.borderColor}`}
              >
                {/* Visual Highlight background badge */}
                <div className="flex flex-col gap-5">
                  <div 
                    className="w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 shrink-0 bg-[#F8FAFB] border border-[#E8EDF2]"
                    style={{ 
                      backgroundColor: isHovered ? `${item.color}14` : undefined,
                      borderColor: isHovered ? `${item.color}40` : undefined
                    }}
                  >
                    <Icon className="w-5.5 h-5.5 transition-transform duration-300" style={{ color: item.color }} strokeWidth={1.65} />
                  </div>

                  <div>
                    <h3 className="text-[14px] font-black tracking-wider font-sans mb-3 text-slate-900" style={{ color: isHovered ? item.color : "#0F172A" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-800 leading-relaxed tracking-tight mb-2 font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 border-t border-slate-100/80 pt-4">
                  <p className="text-[11px] text-slate-400 font-semibold leading-normal font-sans">
                    {item.desc}
                  </p>
                  
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-extrabold tracking-tight" style={{ color: item.color }}>
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
                
                {/* Floating active neon indicator line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" style={{ backgroundColor: item.color }} />
              </motion.a>
            );
          })}
        </div>

        {/* Dynamic Connected Visual Footer of the Platform Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#F4FBF9] to-white rounded-[32px] border border-[#2BC48A]/20 shadow-[0_16px_40px_rgba(43,196,138,0.03)] relative overflow-hidden text-center flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(43,196,138,0.08),transparent_70%)] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <span className="text-[10px] font-black tracking-[0.2em] text-[#2BC48A] uppercase block mb-3">
              ONE CONNECTED PREVENTATIVE PLATFORM
            </span>
            <h4 className="text-lg sm:text-xl font-extrabold text-[#0F172A] mb-4 tracking-tight">
              A single unified intelligence layer scaling across key global health ecosystems.
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-slate-600 mt-6">
              <span className="px-3.5 py-1.5 bg-white border border-[#2BC48A]/15 rounded-full shadow-sm hover:border-[#2BC48A]/30 transition-colors">Wearables</span>
              <span className="text-slate-300">•</span>
              <span className="px-3.5 py-1.5 bg-white border border-[#2BC48A]/15 rounded-full shadow-sm hover:border-[#2BC48A]/30 transition-colors">Diagnostics</span>
              <span className="text-slate-300">•</span>
              <span className="px-3.5 py-1.5 bg-white border border-[#2BC48A]/15 rounded-full shadow-sm hover:border-[#2BC48A]/30 transition-colors">Coaching</span>
              <span className="text-slate-300">•</span>
              <span className="px-3.5 py-1.5 bg-white border border-[#2BC48A]/15 rounded-full shadow-sm hover:border-[#2BC48A]/30 transition-colors">Health Records</span>
              <span className="text-slate-300">•</span>
              <span className="px-3.5 py-1.5 bg-white border border-[#2BC48A]/15 rounded-full shadow-sm hover:border-[#2BC48A]/30 transition-colors">AI Intelligence</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
