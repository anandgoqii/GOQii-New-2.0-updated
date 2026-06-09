import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  FileText,
  Cpu,
  User,
  Globe,
  AlertCircle,
  Database,
  RefreshCw,
  Mail,
  MessageSquare,
  Share2,
  LockKeyhole,
  Trash2,
  ExternalLink
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const handleBackToHome = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }
  };

  const personalInfoItems = [
    { label: "Full Name", value: "Primary identity details for profile creation and authentication." },
    { label: "Email Address", value: "Active username used for messaging, alerts, and registration access." },
    { label: "Gender & Profile Picture", value: "Voluntarily declared parameters to customize core metabolic estimations." },
    { label: "Contact Details & Address", value: "Enables shipping of tracking hardware, devices, or physiological components." },
    { label: "Date of Birth, Height & Weight", value: "Baseline metrics utilized to configure daily goals and tracking algorithms." },
    { label: "Dietary & Fitness Details", value: "Food logged, routines, workout intensities, and active exercise details." },
    { label: "Medical History & Medication", value: "Critical medical records uploaded voluntarily to guide human coaching safety." }
  ];

  const sharingCircumstances = [
    { title: "Business Transfers", desc: "During a corporate sale, merger, reorganization, dissolution, or similar transactional transitions.", icon: RefreshCw, bg: "bg-amber-50 text-amber-600" },
    { title: "Related Companies", desc: "Shared with our subsidiaries and affiliates for consistent health and coaching operational purposes.", icon: Share2, bg: "bg-indigo-50 text-indigo-600" },
    { title: "Legal Requirements", desc: "To comply with judicial rulings, statutory obligations, or protect GOQii's active operational safety.", icon: Shield, bg: "bg-rose-50 text-rose-600" },
    { title: "Third Parties", desc: "With wellness partners, Ecosystem coordinators, or Insurers strictly upon your specific authorization.", icon: User, bg: "bg-emerald-50 text-[#2BC48A]" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#F8FAFB] text-[#0F172A] selection:bg-[#2BC48A]/30 font-sans relative overflow-x-hidden"
    >
      {/* Dynamic background lighting */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-[#2BC48A]/3 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-[45vw] h-[45vw] bg-[#00ADC7]/3 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40">
        
        {/* Back navigation button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#64748B] hover:text-[#2BC48A] uppercase mb-10 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Platform
        </button>

        {/* Hero Header Section */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs mb-5 text-[#2BC48A] font-extrabold tracking-[0.25em] uppercase">
            <Shield className="w-4 h-4" />
            <span>GOQii Privacy Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#0F172A] mb-5 leading-[1.1]">
            PRIVACY POLICY
          </h1>
          <p className="text-[#64748B] text-xs font-extrabold tracking-wider uppercase bg-[#E8EDF2] py-1.5 px-3 rounded-md inline-block">
            LAST UPDATED: 01 OCT 2025
          </p>

          <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed mb-6">
            We, GOQii bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals. We know that the privacy of your personal data is very important to you.
          </p>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-normal">
            This Privacy Policy sets forth GOQii’s policy with respect to information including personally identifiable data (&quot;Personal Data&quot;) and other information that is collected from Platform visitors and users.
          </p>
        </div>

        {/* Modular Content Sections */}
        <div className="space-y-12">

          {/* 1. TrueDepth API & AI Skin Analysis */}
          <section id="truedepth-sdk" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-emerald-50 text-[#2BC48A] rounded-2xl">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">1. TrueDepth API & AI Skin Analysis</h2>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/50 rounded-2xl p-4 flex gap-3 text-amber-900 text-xs sm:text-sm">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
              <div>
                <span className="font-bold block mb-0.5">Use of TrueDepth API for AI Skin Analysis</span>
                Our <span className="font-semibold text-amber-955">Skin Wellness Assessment (Skinalyze)</span> feature uses your device's TrueDepth camera API. We handle this data strictly in conformity with the following protective guidelines:
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-semibold text-slate-500">
              <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/40 space-y-1.5 hover:bg-white hover:border-slate-200 transition-all">
                <div className="font-black text-[#0F172A] tracking-tight uppercase text-[10px] text-emerald-600">On-Device Processing</div>
                <p className="leading-relaxed font-medium">All TrueDepth camera data is processed in real time on your device only. It never leaves your device and is not collected, stored, or shared by us.</p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/40 space-y-1.5 hover:bg-white hover:border-slate-200 transition-all">
                <div className="font-black text-[#0F172A] tracking-tight uppercase text-[10px] text-[#00ADC7]">Purpose of Use</div>
                <p className="leading-relaxed font-medium">This data is used exclusively to power our AI Skin Analysis and augmented reality features that provide real-time skin health insights.</p>
              </div>

              <div className="p-4 border border-slate-100 rounded-xl bg-slate-50/40 space-y-1.5 hover:bg-white hover:border-slate-200 transition-all">
                <div className="font-black text-[#0F172A] tracking-tight uppercase text-[10px] text-rose-500">No Advertising</div>
                <p className="leading-relaxed font-medium">We do not use TrueDepth data for facial recognition, authentication, user identification, advertising, or marketing profiles.</p>
              </div>
            </div>

            <div className="text-xs text-slate-500 bg-slate-100 p-4 rounded-xl leading-relaxed">
              💡 <span className="font-bold text-slate-700">Optional profile storage:</span> While TrueDepth camera data itself is never stored, you may choose to save your skin analysis results or photos to your profile. These results are stored securely, and are never shared with third parties without your explicit consent.
            </div>
          </section>

          {/* 2. Personal Data Collection */}
          <section id="data-collection" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <User className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">2. Personal Data Collection</h2>
            </div>

            <p className="text-slate-605 text-sm sm:text-base leading-relaxed">
              We collect Personal Data from you when you voluntarily provide such information, such as when you contact us, use the GOQii Band, post comments, or register for GOQii Services.
            </p>

            <div>
              <h3 className="text-xs font-black tracking-widest text-[#2BC48A] uppercase mb-4">Information We Collect Includes:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personalInfoItems.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-200">
                    <div className="text-xs font-black text-[#0F172A] mb-1 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2BC48A] rounded-full" />
                      {item.label}
                    </div>
                    <p className="text-xs text-[#64748B] leading-relaxed font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-xs text-slate-500 font-semibold leading-relaxed">
              🌍 <span className="text-[#0F172A] font-bold">Informed Consent & Transfer:</span> By voluntarily providing us with Personal Data, you are consenting to our use of it, in accordance with this Privacy Policy. Such data may be transferred to and processed at our authorized offices and servers worldwide.
            </div>
          </section>

          {/* 3. Non-Identifiable Data & Cookies */}
          <section id="non-identifiable-records" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">3. Non-Identifiable Data & Cookies</h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              When you interact with the Platform, we receive and store certain personally non-identifiable information which cannot presently be used to specifically identify you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-slate-50/50 border border-slate-100 rounded-2xl space-y-2">
                <span className="text-xs font-black text-pink-600 uppercase tracking-widest block">Cookies</span>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  We use &quot;cookies&quot; to provide additional functionality and analyze usage more accurately (e.g., remembering your password for a visit). You can turn cookies off in your browser settings, though some features may then be unavailable.
                </p>
              </div>

              <div className="p-5 bg-slate-50/50 border border-slate-100 rounded-2xl space-y-2">
                <span className="text-xs font-black text-indigo-500 uppercase tracking-widest block">Flash Cookies</span>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  Our Platform may use Adobe Flash cookies to remember user settings and preferences. You can control these through the Adobe Flash settings manager.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Aggregated & Location Information */}
          <section id="aggregated-location" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-cyan-50 text-[#00ADC7] rounded-2xl">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">4. Aggregated & Location Information</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <h4 className="text-sm font-black text-[#0F172A] tracking-tight">Aggregated Data Research</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  We conduct research on customer demographics and behavior based on Personal Data. This information is analyzed on an aggregate basis and does not identify you personally.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-black text-[#0F172A] tracking-tight">Location Services</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Our Service may collect and use location info (GPS on mobile or GOQii wearable Band) to provide specific functionality. We may use this in conjunction with your Personal Data or in an aggregate way.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Use of HealthKit & Personal Data */}
          <section id="healthkit-usage-policy" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">5. Use of HealthKit & Personal Data</h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              We use Personal Data consistent with this Privacy Policy. If you provide it for a reason (e.g., an email query), we will use it for that specific purpose. Our Related Companies may also use this info to improve Platform functionality and content.
            </p>

            <div className="bg-slate-900 text-white rounded-2xl p-6 border border-white/5 relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-[#2BC48A]/10 blur-[30px] rounded-full" />
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h4 className="text-sm font-black text-[#2BC48A] uppercase tracking-wider mb-1">Opting-Out Rights</h4>
                  <p className="text-slate-300 text-xs max-w-lg leading-relaxed">
                    Email and SMS/IVR communications contain instructions to opt-out. You can also write to support@goqii.com to have your name deleted from our mailing lists.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white shrink-0">
                  support@goqii.com
                </div>
              </div>
            </div>
          </section>

          {/* 6. Sharing Collected Data */}
          <section id="sharing-criteria" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-5">
              6. Sharing Collected Data
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              GOQii is not in the business of selling your information. However, we may share Personal Data in the following circumstances:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sharingCircumstances.map((sc, idx) => {
                const IconComponent = sc.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 flex gap-3.5 items-start">
                    <div className={`p-2 rounded-lg shrink-0 ${sc.bg}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="text-xs font-extrabold text-[#0F172A] block">{sc.title}</span>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">{sc.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 7. Social Media & Links */}
          <section id="social-integration" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-4">
              7. Social Media & Links
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              This Platform may contain links to Third Party Sites or enable access to Social Media Services (Facebook, Twitter). The information you share with them is governed by their respective privacy policies.
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold text-slate-500 leading-relaxed">
              * Note: If you log in via Social Media Services, we will collect relevant info required for integration. We are not responsible for the privacy practices of these third-party platforms.
            </div>
          </section>

          {/* 8. Security & Storage */}
          <section id="security-framework" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-cyan-50 text-[#00ADC7] rounded-2xl">
                <LockKeyhole className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">8. Security & Storage</h2>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              GOQii takes reasonable steps to protect Personal Data from loss, misuse, and unauthorized access. We have adopted technical and operational security practices and procedures to ensure data is secure.
            </p>

            <div className="bg-rose-50/50 border border-rose-150 p-4 rounded-xl text-xs text-rose-900 font-bold leading-relaxed">
              ⚠️ Internet Transmission Advisory: No Internet transmission is ever fully secure. While we endeavor to keep info secure, we cannot guarantee absolute security for email or online data transfers. Keep this in mind when releasing personal information.
            </div>
          </section>

          {/* 9. Data Retention & Deletion */}
          <section id="retention-deletes" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl">
                <Trash2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-black text-[#0F172A] tracking-tight">9. Data Retention & Deletion</h2>
            </div>
            
            <p className="text-slate-650 text-sm leading-relaxed">
              You have control over your data. You can choose not to provide certain Personal Data, though it may limit your use of core GOQii Services.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed font-semibold bg-slate-50 border border-slate-100 p-4 rounded-xl">
              <span className="font-extrabold text-[#0F172A]">Requesting Deletion:</span> You can request data deletion through the app's settings at any time. Our Privacy Policy does not apply to unsolicited info you provide through public areas of the Platform.
            </p>
          </section>

          {/* 10. Policy Changes & Contact */}
          <section id="policy-changes-contact" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-pink-50 text-pink-600 rounded-2xl">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">10. Policy Changes & Contact</h2>
            </div>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed font-semibold">
              We may update this policy over time. Your continued use of the Platform after changes constitutes your agreement to the new terms.
            </p>
          </section>

          {/* Corporate Legal Footer Contact Section */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#2BC48A]/10 blur-[70px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md space-y-3">
                <div className="flex items-center gap-2 text-[#2BC48A] text-xs font-black uppercase tracking-widest">
                  <Shield className="w-4 h-4" />
                  <span>Privacy Compliance</span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Privacy queries?</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For further clarifications about TrueDepth policies, data porting, or to submit legal complaints, contact our operational privacy hubs:
                </p>
              </div>

              <div className="flex flex-col gap-3 min-w-[240px] tracking-wide shrink-0 font-bold">
                <a
                  href="mailto:support@goqii.com"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-[#2BC48A] text-xs uppercase"
                >
                  <Mail className="w-4 h-4 text-[#2BC48A]" />
                  support@goqii.com
                </a>
                <div className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs uppercase">
                  <div className="w-1.5 h-1.5 bg-[#00ADC7] rounded-full shrink-0" />
                  Live Chat via GOQii App
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
