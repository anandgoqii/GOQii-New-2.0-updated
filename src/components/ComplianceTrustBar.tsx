import { motion } from "motion/react";
import { Shield, Lock, FileCheck, CheckCircle2, Landmark, Activity } from "lucide-react";

export default function ComplianceTrustBar() {
  const complianceItems = [
    { label: "HIPAA READY", icon: Shield },
    { label: "SOC2 COMPLIANT", icon: Lock },
    { label: "GDPR READY", icon: FileCheck },
    { label: "CCPA COMPLIANT", icon: CheckCircle2 },
    { label: "ABDM INTEGRATED", icon: Landmark },
    { label: "NHS REGISTERED", icon: Activity },
  ];

  return (
    <div className="w-full bg-[#0B1220] py-6 border-y border-white/5 relative overflow-hidden select-none z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="inline-block w-2 h-2 rounded-full bg-[#2BC48A]" />
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#64748B] uppercase shrink-0 font-bold">
            GLOBAL TRUST & COMPLIANCE
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-12">
          {complianceItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, color: "#FFFFFF" }}
                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-200 cursor-default"
              >
                <Icon className="w-4 h-4 text-[#2BC48A]" strokeWidth={2.5} />
                <span className="text-xs font-black tracking-widest font-mono">{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
