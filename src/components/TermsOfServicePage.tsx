import React from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  BookOpen,
  Scale,
  FileText,
  UserCheck,
  ShieldCheck,
  HeartPulse,
  Mail,
  AlertCircle,
  Database,
  RefreshCw,
  Cpu,
  Info,
  ExternalLink,
  Shield,
  Trash2,
  Lock,
  UserCheck2,
  Calendar,
  AlertOctagon
} from "lucide-react";

export default function TermsOfServicePage() {
  const handleBackToHome = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }
  };

  const handleGoToPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.navigateToPage) {
      window.navigateToPage("privacy");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Section details
  const ageRules = [
    { label: "All Users 13–17", value: "Parental permission is strictly required; parent or guardian is fully bound by these Terms." },
    { label: "India DPDP Sec. 9", value: "Verifiable parental consent is mandatory via the consent flow before account activation. Tracking or profiling is strictly prohibited." },
    { label: "USA COPPA", value: "Children under 13 are not permitted to use any service; dedicated COPPA deletion request process applies." },
    { label: "EU GDPR Art. 8", value: "Verification conforms to country-specific age of digital consent (typically 13–16)." },
    { label: "Minor Safety Commitment", value: "Advertising of any kind is permanently disabled for all users verified under the age of 18." }
  ];

  const connectedPlatforms = [
    { title: "Apple HealthKit Restrictions", desc: "Data access is solely limited to fitness/health insights. HealthKit data will never be sold to third parties, used for advertising, or utilized beyond disclosed privacy scopes per App Store Review Guidelines §5.1.3." },
    { title: "Google Health Connect Restrictions", desc: "Google Health Connect integration is bound strictly to service delivery and personal progress metrics, per Google Health Connect Permission Policy guidelines." },
    { title: "Retention After Disconnection", desc: "Imported health data is retained for 3 months after platform disconnection and then permanently purged, unless an immediate erasure request is issued." }
  ];

  const dataPrincipalRights = [
    { title: "Right to Access (30 Days)", desc: "Request and view a comprehensive, secure copy of all personal details collected." },
    { title: "Right to Correction (30 Days)", desc: "Submit corrections to fix inaccurate, outdated, or incomplete details in our workspace." },
    { title: "Right to Erasure (30 Days)", desc: "Request deletion of user records within 30 days of consent withdrawal, subject to statutory limits." },
    { title: "Data Portability (30 Days)", desc: "Download activity registries in standardized JSON or CSV format via user settings panels." },
    { title: "Right to Nominate (DPDP Sec. 13)", desc: "Nominate a representative in writing to exercise your data rights in the event of incapacity or death." },
    { title: "Right to Grievance Redressal", desc: "Escalate grievances directly to our appointed Grievance Officer, or to the Data Protection Board of India." }
  ];

  const childrenDataRules = [
    "No advertising of any kind displayed on minor sessions",
    "No commercial data sharing with external brokers or third-party networks",
    "No behavioral and commercial profiling or automated ad targeting",
    "HealthKit and Health Connect data utilized exclusively for core service delivery",
    "Parental deletion rights actioned within 30 days (5 business days for COPPA/USA)",
    "Full parental access. Requests should be submitted to privacy@goqii.com subject 'Minor Account Request'"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-[#F8FAFB] text-[#0F172A] selection:bg-[#2BC48A]/30 font-sans relative overflow-x-hidden"
    >
      {/* Background shape layers */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-[#2BC48A]/4 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-[45vw] h-[45vw] bg-[#00ADC7]/4 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40">
        
        {/* Back navigation button */}
        <button
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#64748B] hover:text-[#2BC48A] uppercase mb-10 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Platform
        </button>

        {/* Hero Section */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 text-xs mb-5 text-[#2BC48A] font-extrabold tracking-[0.25em] uppercase">
            <BookOpen className="w-4 h-4" />
            <span>GOQii Legal Services Grid</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#0F172A] mb-5 leading-[1.1]">
            TERMS OF SERVICE
          </h1>
          <p className="text-[#64748B] text-xs font-extrabold tracking-wider uppercase bg-[#E8EDF2] py-1.5 px-3 rounded-md inline-block">
            Last Updated: May 2026 | Version 2.0 | Minimum age: 13+
          </p>

          <p className="text-base sm:text-lg text-slate-700 font-bold leading-relaxed mb-6">
            We, GOQii (collectively used to refer to GOQii Inc., GOQii Technologies Pvt. Ltd. and its affiliates, successors and assigns) bring to you a digital health and fitness subscription service that combines one-on-one mobile personal coaching and fitness tracking technology to help you shift to a healthier lifestyle and reach your goals.
          </p>
          
          <div className="bg-white border border-[#E8EDF2] rounded-3xl p-6 shadow-xs text-sm text-slate-500 leading-relaxed mb-6">
            <p className="mb-4">
              These Terms of Service along with the Privacy Policy govern your access to and use of the Services. By accessing and using any of the Services, you agree to be bound by these Terms. If you do not agree, please do not access or use the Services.
            </p>
            <p className="font-semibold text-[#0F172A]">
              We may revise these Terms at any time. We will notify you of any material changes via email or in-app notification at least 30 days before the revised Terms take effect. If you do not agree to the revised Terms, you must stop using the Services before they take effect.
            </p>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="space-y-12">
          
          {/* Section: Your Use of Services & Age limits */}
          <section id="use-of-services" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-emerald-50 text-[#2BC48A] rounded-2xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Your Use of Services</h2>
            </div>

            <div className="space-y-4">
              <h3 className="text-xs font-black tracking-widest text-slate-500 uppercase">Age Restrictions & Minor Protections</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ageRules.map((rule, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors">
                    <span className="text-xs font-extrabold text-[#0F172A] block mb-1">{rule.label}</span>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">{rule.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-3">
              <h3 className="text-xs font-black tracking-widest text-[#2BC48A] uppercase">Registration Requirements</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Once you purchase GOQii Services, you may learn more about the Services via information available on the Platform, including the FAQs available at <a href="https://goqiisupport.zendesk.com/hc/en-us" target="_blank" rel="noreferrer" className="text-[#2BC48A] hover:underline inline-flex items-center gap-0.5 font-bold">goqiisupport.zendesk.com <ExternalLink className="w-3 h-3" /></a>.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                In order to register, you may be required to provide: <span className="font-bold text-slate-700">full name, email address, account credentials (hashed password), gender, profile picture, contact details, address, date of birth, height, weight, dietary information, fitness and exercise details, medical history and conditions, and medication details.</span> You are responsible for maintaining the accuracy and completeness of this information.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                You may register through your existing email accounts. Your email address constitutes your username. You are responsible for maintaining the confidentiality of your username and password.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200/50 rounded-2xl p-4 flex gap-3 text-amber-900 text-xs text-slate-600">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Account Verification:</span> GOQii reserves the right to verify your age at registration and at any point during your use. Accounts found in breach of these age requirements will be suspended. Parents or guardians who become aware of an unauthorised minor account should contact <a href="mailto:privacy@goqii.com" className="font-bold underline text-amber-900">privacy@goqii.com</a> immediately.
              </div>
            </div>
          </section>

          {/* Section: Your Privacy Rights */}
          <section id="privacy-rights" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <Lock className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Your Privacy Rights</h2>
            </div>
            <p className="text-slate-650 text-sm leading-relaxed">
              Your personal data collected through your use of the Services is processed in accordance with our Privacy Policy (available at <a href="#privacy" onClick={handleGoToPrivacy} className="text-[#2BC48A] font-bold hover:underline inline-flex items-center gap-0.5">goqii.com/privacypolicy <ExternalLink className="w-3.5 h-3.5" /></a>).
            </p>
            <p className="text-xs text-slate-500 leading-relaxed font-medium bg-slate-50 border border-slate-100 p-4 rounded-xl">
              Under applicable data protection law, including the <span className="font-bold text-[#0F172A]">Digital Personal Data Protection Act 2023</span>, you have the right to access, correct, erase, and port your personal data; to withdraw consent; to nominate another individual to exercise your rights; and to raise grievances with our Grievance Officer. Please refer to our Privacy Policy for full details and contact information.
            </p>
          </section>

          {/* Section: Connected Health Platforms */}
          <section id="connected-platforms" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                <Cpu className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Connected Health Platforms</h2>
            </div>
            
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              By connecting <span className="font-bold text-slate-900">Apple Health, Google Fit, or Google Health Connect</span> to GOQii, you grant permission to read and/or write specified health data types (steps, heart rate, sleep, activity, body measurements, and related metrics) to provide personalized coaching and wellness insights.
            </p>

            <div className="space-y-4">
              {connectedPlatforms.map((pt, idx) => (
                <div key={idx} className="border-l-2 border-[#2BC48A] pl-4 space-y-1">
                  <h4 className="text-sm font-black text-[#0F172A]">{pt.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{pt.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-3">
              <h4 className="text-xs font-black tracking-wider text-slate-600 uppercase">How to Disconnect</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px] font-bold text-slate-500">
                <div className="p-2 bg-white rounded border border-slate-100">
                  <span className="text-slate-800 block text-xs mb-1">Apple Health</span>
                  iPhone Settings &gt; Health &gt; Data Access &amp; Devices &gt; GOQii
                </div>
                <div className="p-2 bg-white rounded border border-slate-100">
                  <span className="text-slate-800 block text-xs mb-1">Google Fit / Health Connect</span>
                  Android Settings &gt; Health Connect &gt; App permissions &gt; GOQii
                </div>
                <div className="p-2 bg-white rounded border border-slate-100">
                  <span className="text-slate-800 block text-xs mb-1">GOQii App</span>
                  Settings &gt; Privacy &gt; Connected Platforms
                </div>
              </div>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed font-semibold">
              * Disconnecting stops future data sync but does not auto-delete data already imported (which is stored for 3 months). To request immediate erasure of your data, please follow the data erasure request process described in our Privacy Policy. For minors under 18, explicit parental consent must be configured via registration flow or Connected Platforms Settings.
            </p>
          </section>

          {/* Section: We Do Not Provide Medical Advice */}
          <section id="no-medical-advice" className="bg-rose-50/30 border border-rose-100 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <div className="flex items-center gap-3.5 border-b border-rose-100 pb-4">
              <div className="p-3 bg-rose-50 text-rose-500 rounded-2xl">
                <HeartPulse className="w-5 h-5 animate-pulse" />
              </div>
              <h2 className="text-xl font-black text-rose-950 tracking-tight">We Do Not Provide Medical Advice</h2>
            </div>

            <div className="space-y-3 text-slate-605">
              <p className="text-sm font-semibold text-rose-950 leading-relaxed">
                The Services provided by GOQii, including information provided through personalised coaching services, does not constitute medical advice of any kind. Nothing on the Platform should be construed as an attempt to offer or render a medical opinion, or otherwise engage in the practice of medicine.
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                You should consult with your physician before making any changes to your diet or exercise programme. GOQii is not responsible for any medical or mental health problems you may face as a result of accessing or using the Services.
              </p>
            </div>

            {/* HIPAA Notice */}
            <div className="bg-white border border-rose-100 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-black text-rose-600 uppercase tracking-widest block">HIPAA Notice for US Users</span>
              <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                If you are a user in the United States and your health information constitutes Protected Health Information (PHI) under HIPAA, your PHI is handled in accordance with our HIPAA Notice of Privacy Practices, available by contacting <a href="mailto:privacy@goqii.com" className="text-rose-600 underline">privacy@goqii.com</a> or writing to our Grievance Officer. GOQii complies with applicable HIPAA requirements in its role as a business associate of covered entities.
              </p>
            </div>

            <div className="p-4 bg-rose-50/70 border border-rose-100 rounded-xl">
              <span className="text-[10px] font-black text-rose-700 uppercase tracking-wider block mb-1">For Users Under 18</span>
              <p className="text-xs text-rose-900 leading-relaxed">
                Parents and guardians should actively supervise their minor's use of the Services and consult a qualified medical professional before acting on any health recommendations made to their minor child through the platform. Coaching guidance provided to minor users is general wellness and fitness information only and is not a substitute for professional paediatric or adolescent medical care.
              </p>
            </div>
          </section>

          {/* Section: Modifications to Services and Data */}
          <section id="modifications-services" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-4">Modifications to Services and Data</h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              The Services may change over time as we add more features. We may modify, suspend or discontinue, temporarily or permanently, the Services (or a part of the Services) from time to time.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              If we intend to discontinue a material feature or the entire Service, we will provide <span className="font-bold">at least 30 days' prior notice</span> and maintain data export functionality throughout that period.
            </p>
            <div className="p-3.5 bg-slate-50 border border-slate-150 rounded-xl text-xs font-bold text-slate-600">
              💡 Data Export Check: You may export your personal data at any time via Settings &gt; Privacy &gt; Download My Data. GOQii takes reasonable steps to maintain data integrity and availability.
            </div>
          </section>

          {/* Section: User Content */}
          <section id="user-content" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-4">User Content</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              You are solely responsible for all information, data, text, photographs, and other materials (<span className="font-bold">User Content</span>) that you upload, transmit, or post on the Platform. You agree not to use the Services to post any content that is unlawful, threatening, spam, or that contains software viruses.
            </p>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              You grant GOQii a non-exclusive, worldwide, royalty-free licence to use, copy, display, reproduce, modify, adapt, and distribute the User Content you post on the Platform solely for the purpose of operating, providing, and improving the Services. This licence terminates when you delete your User Content or close your account, except to the extent GOQii is required by law to retain it.
            </p>

            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-xs text-slate-600 space-y-2">
              <span className="font-extrabold text-[#2BC48A] block uppercase tracking-wider">Health & Minor Protection Standards</span>
              <p>
                GOQii will not use your health data or sensitive personal data in User Content for advertising or commercial profiling without your separate explicit consent.
              </p>
              <p className="font-bold">
                For users under 18: the licence granted to GOQii does not permit GOQii to use the personal data or health data of users under 18 for advertising, marketing, or commercial profiling, regardless of any general consent granted at registration.
              </p>
            </div>
          </section>

          {/* Section: Data Protection and DPDP Compliance */}
          <section id="dpdp-compliance" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3.5 border-b border-slate-100 pb-5">
              <div className="p-3 bg-cyan-50 text-[#00ADC7] rounded-2xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">Data Protection & DPDP Compliance</h2>
            </div>

            <div className="bg-[#0F172A] text-white p-5 rounded-2xl space-y-2">
              <span className="text-[10px] bg-[#2BC48A] font-extrabold text-[#0F172A] px-2.5 py-1 rounded-md uppercase tracking-wider">
                India Fiduciary Status
              </span>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                GOQii Technologies Private Limited acts as a <span className="text-[#2BC48A]">Data Fiduciary</span> under the Digital Personal Data Protection Act, 2023 (DPDP Act) in respect of personal data of Indian residents processed through the Services.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-[#0F172A]">Data Principal Rights & SLAs (Response within 30 days)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {dataPrincipalRights.map((rt, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <span className="text-xs font-black text-[#0F172A] flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 bg-[#00ADC7] rounded-full" />
                      {rt.title}
                    </span>
                    <p className="text-xs text-slate-500 leading-relaxed font-semibold">{rt.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Retention Schedules */}
            <div className="border border-slate-100 p-5 rounded-2xl bg-slate-50/30 space-y-3">
              <span className="text-xs font-black text-slate-700 block uppercase tracking-widest">Key Data Retention Periods</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[10px] text-slate-500 font-bold">
                <div className="p-2 border border-slate-100 bg-white rounded">Profile Data: 3 months post-deletion</div>
                <div className="p-2 border border-slate-100 bg-white rounded">Health Data: 3 months post-deletion</div>
                <div className="p-2 border border-slate-100 bg-white rounded">Sync Channels: 3 months post-revocation</div>
                <div className="p-2 border border-slate-100 bg-white rounded">Coach Chats: 1 year period</div>
                <div className="p-2 border border-slate-100 bg-white rounded">Consent & Audit Trails: 7 years</div>
                <div className="p-2 border border-slate-100 bg-white rounded">Support Ticketing Logs: 2 years</div>
              </div>
              <p className="text-[10px] text-slate-400 font-semibold pt-1">
                For users under 18: personal data is deleted within 30 days of a parental/guardian deletion request or account closure, with no retention beyond strict necessity.
              </p>
            </div>

            {/* Breach Notification */}
            <div className="bg-[#F8FAFB] border border-[#E8EDF2] p-5 rounded-2xl space-y-4">
              <span className="text-xs font-black text-[#0F172A] block uppercase tracking-wider flex items-center gap-2">
                <AlertOctagon className="w-4 h-4 text-red-500" />
                Breach Notification Protocols
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                In the event of a personal data breach likely to affect your rights, GOQii will notify the Data Protection Board of India (DPBI) as required under DPDP Sec. 17, and notify CERT-In within 6 hours per CERT-In Directions 2022. If US Protected Health Information is involved, we will notify the U.S. Department of Health and Human Services (HHS) under HIPAA.
              </p>
              <div className="text-[10px] bg-red-50 text-red-700 px-3 py-2 rounded-lg border border-red-100 font-bold inline-block">
                Security Incident Reporting: security@goqii.com
              </div>
            </div>
          </section>

          {/* Section: Children's Data and Minor User Protections */}
          <section id="childrens-data" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-5">
              Children's Data & Minor User Protections
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              As a responsible health partner, GOQii enforces 6 bullet-point protection commitments for all identified minor accounts:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-2">
              {childrenDataRules.map((line, idx) => (
                <div key={idx} className="flex gap-3 items-start p-3 bg-emerald-50/20 border border-emerald-100/50 rounded-xl">
                  <div className="p-1 bg-[#2BC48A]/10 text-[#2BC48A] rounded-md shrink-0">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs text-slate-650 font-bold leading-relaxed">{line}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#94A3B8] font-bold">
              * Note: Parental deletion rights are completed within 30 days (5 business days for COPPA/USA). Address inquiries to privacy@goqii.com.
            </p>
          </section>

          {/* Section: Subscription Cancellation / Refund & Return Page rules */}
          <section id="cancel-refund-policy" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-5">
              Cancellation and Return Policy
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-amber-400 pl-4 space-y-1">
                <h4 className="text-sm font-black text-[#0F172A]">7-Day Cancel & Return</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  You may return your GOQii physical device inside 7 days from delivery dispatch by triggering a "Cancel Order" via the app. Only unused, unopened items in pristine initial packaging can be returned.
                </p>
              </div>

              <div className="border-l-4 border-indigo-400 pl-4 space-y-1">
                <h4 className="text-sm font-black text-[#0F172A]">Subscription Cancellation Rules</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  You may configure cancellation at any point via Subscription Settings or emailing renewals@goqii.com. Access continues through paid periods. For annual packages cancelled inside 30 days (with zero utilized human coaching sessions), a pro-rata refund (minus a 10% administration charge) will process inside 14 working days.
                </p>
              </div>

              <div className="border-l-4 border-rose-400 pl-4 space-y-1">
                <h4 className="text-sm font-black text-[#0F172A]">Parental Subscription Override</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                  A parent or guardian of a user under 18 may trigger termination of minor subscriptions and full data erasure at any time via renewals@goqii.com. Erasures are finished within 30 days.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Doctor Policy, Terms, etc */}
          <section id="miscellaneous-legal" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-5">
              General Operations & Clauses
            </h2>

            <div className="space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest block">Strict Doctor Policy</span>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  GOQii services connect you with GOQii Doctors (General Practitioners) to aid on routine lifestyle and metabolic concerns. GOQii Health is NOT clinical diagnostics. No formal medical diagnosis, specialist treatment, or prescription medications can be offered. See physical clinical physicians in person for formal assessments.
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black text-slate-500 uppercase tracking-widest block">Interest-Based Advertisement</span>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  We will not share health, clinical, biomarker, Apple HealthKit or Google Health Connect data with external advertisers. General interest-based advertising uses strictly non-sensitive parameters and requires your direct authorization preferences via Settings panel. Users under 18 have advertising permanently disabled.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 text-xs text-slate-500 font-medium">
                  <span className="font-bold text-[#0F172A] block mb-1">Indemnity</span>
                  You agree to defend, indemnify and hold harmless GOQii from any losses, liabilities, damages, or attorneys' fees arising out of violation of these Terms of use.
                </div>

                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 text-xs text-slate-500 font-medium">
                  <span className="font-bold text-[#0F172A] block mb-1">Warranty Details</span>
                  We cover manufacturing defects for 1 year or your active subscription length (whichever ends earlier). Does not apply to bands, physical straps or personal loss.
                </div>
              </div>
            </div>
          </section>

          {/* Section: Dispute Resolution & Governing Law */}
          <section id="disputes-resolution" className="bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-black text-[#0F172A] tracking-tight border-b border-slate-100 pb-4">Disputes & Governing Jurisdiction</h2>
            <p className="text-slate-605 text-xs sm:text-sm leading-relaxed font-medium">
              These Terms are governed by the laws of India, including the Information Technology Act 2000, the Digital Personal Data Protection Act 2023, and the Consumer Protection Act 2019.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-[11px] text-slate-500 font-bold">
              <div className="p-3 border border-slate-100 bg-slate-50/30 rounded">
                <span className="text-[#0F172A] block mb-1">1. Friendly Discussion</span>
                Contact support@goqii.com to seek initial friendly, informal resolution.
              </div>
              <div className="p-3 border border-slate-100 bg-slate-50/30 rounded">
                <span className="text-[#0F172A] block mb-1">2. Online Dispute</span>
                Refer unresolved cases to online dispute resolution via NCH portal (consumerhelpline.gov.in).
              </div>
              <div className="p-3 border border-slate-100 bg-slate-50/30 rounded">
                <span className="text-[#0F172A] block mb-1">3. Courts of Mumbai</span>
                Unresolved litigation is governed under exclusive jurisdiction in Mumbai, India.
              </div>
            </div>
          </section>

          {/* Corporate Legal Footer Contacts */}
          <section className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl">
            <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#2BC48A]/10 blur-[70px] rounded-full pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-md space-y-3">
                <div className="flex items-center gap-2 text-[#2BC48A] text-xs font-black uppercase tracking-widest">
                  <Shield className="w-4 h-4" />
                  <span>Corporate Legal</span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">Need clarification?</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  For formal compliance alerts, renewals inquiry, or diagnostic legal documentation, contact our corporate compliance services:
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
                <a
                  href="mailto:renewals@goqii.com"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 text-slate-300 text-xs uppercase"
                >
                  <RefreshCw className="w-4 h-4 text-[#00ADC7]" />
                  renewals@goqii.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-500 font-semibold">
              If any provision of these Terms is held to be invalid or unenforceable, that provision will be limited to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
            </div>
          </section>

        </div>
      </div>
    </motion.div>
  );
}
