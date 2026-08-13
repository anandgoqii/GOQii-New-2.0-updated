import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Mail, CheckCircle2, ShieldCheck, HeartPulse, Users, Zap, Clock } from "lucide-react";
import BookDemoModal from "./BookDemoModal";

export default function PlansPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const upcomingPlans = [
    {
      title: "Personal Care",
      icon: HeartPulse,
      badge: "Individual",
      desc: "1-on-1 human health coaching, real-time biometric tracking, and personalized preventive nutrition routines.",
      highlights: ["Dedicated Certified Health Coach", "AI NutriGenius Food Logging", "Smart Wearable Integration"]
    },
    {
      title: "SuperLife Longevity",
      icon: Zap,
      badge: "Premium Care",
      desc: "Advanced biomarker analytics, cellular longevity tracking, and physician-guided preventive protocols.",
      highlights: ["Quarterly Comprehensive Blood Work", "Doctor-led Health Reviews", "Metabolic Optimization Protocols"]
    },
    {
      title: "Family & Corporate",
      icon: Users,
      badge: "Enterprise & Groups",
      desc: "Holistic health coverage for families and workforces with group insights, rewards, and proactive care.",
      highlights: ["Multi-member Care Hub", "Corporate Wellness Dashboard", "Custom Risk Reduction Incentives"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFB] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 select-none">
      <div className="max-w-5xl mx-auto">

        {/* Hero Banner Box */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-8 sm:p-14 mb-12 shadow-2xl border border-slate-800 text-center">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2BC48A]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2BC48A] bg-[#2BC48A]/10 border border-[#2BC48A]/20 px-4 py-1.5 rounded-full"
            >
              <Clock className="w-3.5 h-3.5" /> Launching Soon
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-white font-sans mb-3"
            >
              GOQii Health Plans <br />
              <span className="text-[#2BC48A]">Coming Soon.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed max-w-xl mx-auto"
            >
              We are finalizing our next-generation preventive health membership tiers. Get early access to personalized human coaching, smart wearable integration, and AI health intelligence.
            </motion.p>

            {/* Newsletter / Early Access Notify Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4 max-w-md mx-auto"
            >
              {submitted ? (
                <div className="bg-[#2BC48A]/10 border border-[#2BC48A]/30 rounded-2xl p-4 text-[#2BC48A] text-xs font-bold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! We will notify you when plans launch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-white/10 border border-slate-700 text-white placeholder:text-slate-400 text-xs sm:text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#2BC48A] hover:bg-[#22a372] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-lg shadow-[#2BC48A]/20"
                  >
                    Get Early Access
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>

        {/* Feature Teasers Preview */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#2BC48A] bg-[#E5F7F0] px-3.5 py-1 rounded-full inline-block mb-3">
              PREVIEW
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
              What to Expect in GOQii Plans
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
              Tailored memberships built around continuous prevention and measurable longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingPlans.map((plan, idx) => {
              const IconComp = plan.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#047857] bg-[#E5F7F0] px-2.5 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0F172A] mb-2">{plan.title}</h3>
                    <p className="text-xs text-[#64748B] font-medium leading-relaxed mb-6">
                      {plan.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#F1F5F9] space-y-2">
                    {plan.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2BC48A] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate / Customized Demo Callout */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/10 px-3 py-1 rounded-full inline-block">
              CORPORATE &amp; ENTERPRISE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">Need a custom plan for your organization?</h3>
            <p className="text-xs sm:text-sm text-[#64748B] font-medium max-w-md">
              Explore bespoke preventive healthcare solutions for insurance providers, corporate workforces, and healthcare systems.
            </p>
          </div>

          <button
            onClick={() => setDemoModalOpen(true)}
            className="bg-[#0F172A] hover:bg-slate-800 text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer shadow-md shrink-0"
          >
            Request Enterprise Demo
          </button>
        </div>

      </div>

      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </div>
  );
}
