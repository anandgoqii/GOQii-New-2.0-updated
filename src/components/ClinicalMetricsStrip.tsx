import { motion } from "motion/react";

export default function ClinicalMetricsStrip() {
  const stats = [
    { value: "34%", label: "Reduction In Claims" },
    { value: "90%", label: "Patient Satisfaction" },
    { value: "85%", label: "Workforce Engagement" },
    { value: "5M+", label: "Active Users" },
    { value: "300+", label: "Enterprise Partners" }
  ];

  return (
    <div className="w-full bg-[#FAFBFB] py-16 sm:py-20 border-y border-[#E8EDF2] select-none">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12 text-center justify-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-[56px] font-black font-sans text-[#0F172A] tracking-tighter leading-none mb-3">
                {stat.value}
              </div>
              <div className="text-[10px] font-sans font-extrabold tracking-[0.18em] text-[#2BC48A] uppercase max-w-[140px] leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
