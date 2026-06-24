import { Users, Building2, Database, Activity } from "lucide-react";
import { motion } from "motion/react";

interface ProofItem {
  value: string;
  label: string;
  icon: any;
  description: string;
}

const PROOF_ITEMS: ProofItem[] = [
  {
    value: "5M+",
    label: "Lives Impacted",
    icon: Users,
    description: "Active individuals engaging in active daily health habits."
  },
  {
    value: "300+",
    label: "Enterprise Partners",
    icon: Building2,
    description: "Global corporations, insurers, and clinical institutions."
  },
  {
    value: "10+ Years",
    label: "of Health Data",
    icon: Database,
    description: "Continuous longitudinal biometric and behavior telemetry."
  },
  {
    value: "NHS",
    label: "Primary Care Partnership",
    icon: Activity,
    description: "Direct preventative integration via Modality Partnership."
  }
];

export default function ProofStrip() {
  return (
    <div className="w-full bg-white border-y border-[#E8EDF2] py-8 sm:py-10 relative overflow-hidden">
      {/* Visual background accents to maintain clean editorial aesthetic */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[#2BC48A]/[0.015] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/[0.01] blur-[80px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 md:gap-x-12">
          {PROOF_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`flex flex-col items-start text-left group ${
                  index > 0 ? "pt-6 sm:pt-0 border-t sm:border-t-0 border-[#E8EDF2]/60" : ""
                } ${
                  index > 0 ? "lg:border-l lg:pl-8 xl:pl-10 border-[#E8EDF2]/60" : ""
                } ${
                  index === 1 || index === 3 ? "sm:border-l sm:pl-8 border-[#E8EDF2]/60 lg:border-l lg:pl-8 xl:pl-10" : ""
                }`}
              >
                {/* Header block combining Icon + Value */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center shrink-0 border border-[#2BC48A]/10 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight font-sans leading-none">
                    {item.value}
                  </span>
                </div>

                {/* Text Block */}
                <div>
                  <h4 className="text-[11.5px] font-black uppercase text-slate-800 tracking-wider">
                    {item.label}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1 font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
