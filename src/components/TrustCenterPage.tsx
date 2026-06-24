import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, Award, Lock, Cpu, Stethoscope, Eye, Mail, MessageSquare, Shield, CheckCircle2 } from "lucide-react";

export default function TrustCenterPage() {
  const handleBackToHome = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }
  };

  const privacyPoints = [
    "Privacy-by-design product development",
    "Secure data handling practices",
    "Encryption of sensitive information",
    "Access controls and authentication safeguards",
    "Continuous monitoring and security reviews",
    "Responsible data governance policies"
  ];

  const complianceStandards = [
    { name: "HIPAA", desc: "Health Insurance Portability and Accountability Act standards for protecting health information." },
    { name: "GDPR", desc: "General Data Protection Regulation standards governing secure personal data of EU individuals." },
    { name: "SOC 2", desc: "Rigorous standards for security, availability, processing integrity, confidentiality, and privacy." },
    { name: "ISO 27001", desc: "International standard for managing information security systems." },
    { name: "ISO 9001", desc: "Standard for quality management systems and operational efficiency." },
    { name: "ISO 13485", desc: "Medical devices quality management systems standard." },
    { name: "CDSCO", desc: "Central Drugs Standard Control Organisation alignment for clinical compliance." },
    { name: "Cyber Essentials", desc: "UK government-backed scheme safeguarding against common cyber threats." },
    { name: "DPDPA Readiness", desc: "Preparedness for the Digital Personal Data Protection Act to secure user privacy." },
    { name: "FDA Registered Class II", desc: "Federal Drug Administration quality registration for eligible platform components." }
  ];

  const securityControls = [
    "Data encryption in transit and at rest",
    "Role-based access management",
    "Infrastructure monitoring",
    "Secure cloud architecture",
    "Vulnerability assessments",
    "Security incident response procedures"
  ];

  const aiPrinciples = [
    "Human oversight",
    "Transparency",
    "Clinical relevance",
    "Privacy protection",
    "Bias awareness",
    "Continuous improvement"
  ];

  const ecosystemPartners = [
    "Health coaches",
    "Medical professionals",
    "Diagnostics partners",
    "Healthcare organizations",
    "Public health collaborators"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#F8FAFB] text-[#0F172A] selection:bg-[#2BC48A]/30 font-sans"
    >
      {/* Decorative gradient layout background shapes */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#2BC48A]/3 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[45vw] h-[45vw] bg-emerald-100/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-40">
        {/* Back navigation button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-slate-500 hover:text-[#2BC48A] uppercase mb-10 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Platform
        </button>

        {/* Hero Section */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs mb-5 text-[#2BC48A] font-extrabold tracking-[0.25em] uppercase">
            <Shield className="w-4 h-4 text-[#2BC48A]" />
            <span>GOQii TRUST CENTER</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
            TRUST CENTER
          </h1>
          <p className="text-base sm:text-lg text-slate-500 font-medium leading-relaxed mb-6">
            Building trust through security, privacy, compliance, and responsible healthcare innovation.
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            At GOQii, trust is fundamental to everything we build. As a prevention-first health platform serving individuals, enterprises, insurers, healthcare providers, and public health systems, we are committed to protecting data, maintaining compliance, and operating with transparency.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="space-y-12">
          
          {/* 1. Our Commitment Section */}
          <section id="commitment" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 rounded-2xl text-[#2BC48A]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Our Commitment</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  GOQii combines healthcare, coaching, diagnostics, wearable technology, and artificial intelligence into one connected ecosystem.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We recognize that health information is deeply personal. Every product, service, and technology decision is designed with privacy, security, and responsible data stewardship at its core.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Side-by-Side: Privacy & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Privacy & Data Protection */}
            <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-2.5 bg-emerald-50 text-[#2BC48A] rounded-xl">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">Privacy & Data Protection</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  We are committed to protecting personal and health information through industry-recognized privacy and security practices. Our approach includes:
                </p>
                <ul className="space-y-3">
                  {privacyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#2BC48A] mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Platform Security */}
            <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-2.5 bg-cyan-50 text-[#00ADC7] rounded-xl">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">Platform Security</h3>
                </div>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                  Security is integrated throughout the GOQii ecosystem to secure your critical platform logs and telemetry. Key controls include:
                </p>
                <ul className="space-y-3">
                  {securityControls.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#00ADC7] mt-0.5 shrink-0" />
                      <span className="text-slate-600 text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Compliance & Certifications */}
          <section id="compliance" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Compliance & Certifications</h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8">
              GOQii aligns with internationally recognized standards and healthcare compliance frameworks. Compliance requirements are continuously reviewed and strengthened as regulations evolve.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {complianceStandards.map((std, index) => (
                <div key={index} className="border border-slate-100 rounded-2xl p-4 bg-slate-50/50 hover:bg-white hover:border-[#2BC48A]/30 transition-all">
                  <span className="inline-block text-xs font-black tracking-wider text-[#2BC48A] bg-emerald-50 px-2.5 py-1 rounded-sm mb-2.5">
                    {std.name}
                  </span>
                  <p className="text-[#64748B] text-xs leading-relaxed font-medium">
                    {std.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Side-by-Side: Responsible AI & Healthcare Responsibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Responsible AI */}
            <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-pink-50 text-pink-600 rounded-xl">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">Responsible AI</h3>
              </div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Artificial intelligence within GOQii is designed to support prevention, engagement, coaching, and health decision-making:
              </p>
              <ul className="space-y-3 mb-6">
                {aiPrinciples.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-pink-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 font-medium bg-slate-50 rounded-xl p-3 border border-slate-100 italic">
                * AI supports health outcomes but does not replace qualified medical professionals.
              </p>
            </div>

            {/* Healthcare & Clinical Responsibility */}
            <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3.5 mb-5">
                <div className="p-2.5 bg-red-50 text-red-500 rounded-xl">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight">Healthcare & Clinical Responsibility</h3>
              </div>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                GOQii combines technology with human expertise. Our ecosystem links multiple clinical entities together:
              </p>
              <ul className="space-y-3 mb-6">
                {ecosystemPartners.map((point, index) => (
                  <li key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                    <span className="text-slate-600 text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-slate-400 font-medium bg-slate-50 rounded-xl p-3 border border-slate-100 italic">
                * Clinical decisions should always be discussed with qualified healthcare providers.
              </p>
            </div>
          </div>

          {/* 5. Transparency */}
          <section id="transparency" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-10 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-50 rounded-2xl text-amber-500">
                <Eye className="w-6 h-6" />
              </div>
              <div className="space-y-3 flex-1">
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Transparency</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We believe trust is earned through openness. We continuously strive to:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-700 text-sm font-semibold">Clearly explain how data is used</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-700 text-sm font-semibold">Communicate product capabilities responsibly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-700 text-sm font-semibold">Maintain transparent privacy practices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-500" />
                    <span className="text-slate-700 text-sm font-semibold">Continuously improve security standards</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Contact and Footer Message */}
          <section id="contact" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#2BC48A]/10 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md space-y-3">
                <div className="flex items-center gap-2 text-[#2BC48A] text-xs font-black uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Reach out</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">Trust & Security Team</h2>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For security, compliance, privacy, or trust-related inquiries, contact our specialized taskforce directly. We'll be glad to help.
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[240px]">
                <a
                  href="mailto:trust@goqii.com"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 px-4 py-3.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 text-sm transition-all font-semibold"
                >
                  <Mail className="w-4 h-4 text-[#2BC48A]" />
                  trust@goqii.com
                </a>
                <a
                  href="mailto:support@goqii.com"
                  className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-white/20 px-4 py-3.5 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 text-sm transition-all font-semibold"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  support@goqii.com
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500 font-medium">
              Together, we are building a prevention-first future for human health.
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
