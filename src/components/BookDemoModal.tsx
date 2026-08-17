import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Building2,
  Briefcase,
  Users,
  Globe,
  PenLine,
  Lock,
  ArrowRight,
  Calendar,
  MessageSquare,
  Clock,
  ShieldCheck,
  Heart,
  Headphones
} from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
  initialTab?: "demo" | "contact";
}

export default function BookDemoModal({
  isOpen,
  onClose,
  initialRole,
  initialTab = "demo"
}: BookDemoModalProps) {
  const [activeTab, setActiveTab] = useState<"demo" | "contact">("demo");
  const [whoAreYou, setWhoAreYou] = useState<string>("Employer");
  
  // Demo Form State
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    companySize: "",
    country: "India",
    goals: ""
  });
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  // Contact Us Form State
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const whoAreYouOptions = [
    { id: "Employer", label: "Employer" },
    { id: "Insurer", label: "Insurer" },
    { id: "Healthcare Provider", label: "Healthcare Provider" },
    { id: "Pharma", label: "Pharma" },
    { id: "Individual", label: "Individual" }
  ];

  const roleOptions = [
    "Select Role",
    "Founder / CXO / Executive",
    "VP / Director of HR & People",
    "Chief Medical Officer / Clinician",
    "Wellness & Benefits Manager",
    "Actuary / Underwriting Lead",
    "Product / Innovation Lead",
    "Healthcare Provider / Administrator",
    "Broker / Consultant",
    "Other"
  ];

  const companySizeOptions = [
    "Select Company Size",
    "1 - 50 employees",
    "51 - 200 employees",
    "201 - 1,000 employees",
    "1,001 - 5,000 employees",
    "5,000+ employees"
  ];

  const countryOptions = [
    "India",
    "United States",
    "United Kingdom",
    "United Arab Emirates",
    "Singapore",
    "Japan",
    "Germany",
    "Australia",
    "Canada",
    "Saudi Arabia",
    "Other"
  ];

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    if (initialRole) {
      if (initialRole === "EmployerOnly" || initialRole.toLowerCase().includes("employer")) {
        setWhoAreYou("Employer");
      } else if (initialRole === "InsurerOnly" || initialRole.toLowerCase().includes("insurer")) {
        setWhoAreYou("Insurer");
      } else if (initialRole === "ProviderOnly" || initialRole.toLowerCase().includes("provider")) {
        setWhoAreYou("Healthcare Provider");
      } else if (initialRole === "PharmaOnly" || initialRole.toLowerCase().includes("pharma")) {
        setWhoAreYou("Pharma");
      } else if (initialRole.toLowerCase().includes("individual")) {
        setWhoAreYou("Individual");
      }
    }
  }, [initialRole, isOpen]);

  const handleDemoSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const handleContactSubmit = (e: FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setDemoSubmitted(false);
      setContactSubmitted(false);
      setActiveTab("demo");
      setDemoForm({
        name: "",
        email: "",
        company: "",
        role: "",
        companySize: "",
        country: "India",
        goals: ""
      });
      setContactForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative w-full max-w-5xl bg-white border border-[#E8EDF2] shadow-[0_30px_90px_rgba(15,23,42,0.22)] rounded-[28px] sm:rounded-[32px] z-10 text-left my-auto overflow-hidden max-h-[92vh] flex flex-col lg:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full border border-slate-200 bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer z-30 shadow-xs"
            >
              <X className="w-4 h-4" />
            </button>

            {/* ================= LEFT SIDEBAR (GLOBAL BRAND & PRESENCE) ================= */}
            <div className="w-full lg:w-[38%] bg-[#F3FAF7] border-b lg:border-b-0 lg:border-r border-[#E2EFEB] p-6 sm:p-8 flex flex-col justify-between shrink-0 overflow-y-auto">
              <div className="space-y-6">
                {/* Brand Logo with 4-grid emblem */}
                <div className="flex items-center gap-3">
                  <div className="grid grid-cols-2 gap-0.5 p-1 bg-white rounded-lg border border-slate-200/80 shadow-xs">
                    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#F59E0B] flex items-center justify-center text-[8px] font-black text-white leading-none">
                      - +
                    </div>
                    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#EF4444] flex items-center justify-center text-[9px] font-black text-white leading-none">
                      +
                    </div>
                    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#10B981] flex items-center justify-center text-[9px] font-black text-white leading-none">
                      +
                    </div>
                    <div className="w-3.5 h-3.5 rounded-[2px] bg-[#3B82F6] flex items-center justify-center text-[9px] font-black text-white leading-none">
                      +
                    </div>
                  </div>
                  <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
                    GOQii
                  </span>
                </div>

                {/* Global Presence Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F7F0] border border-[#2BC48A]/30 text-[#0F9E6C] text-[10px] font-black tracking-wider uppercase font-sans shadow-xs">
                  <Globe className="w-3.5 h-3.5 text-[#0F9E6C]" />
                  <span>GLOBAL PRESENCE</span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold text-slate-900 tracking-tight leading-[1.18] font-sans">
                  Connecting{" "}
                  <span className="text-[#16A34A] block">healthier futures,</span>
                  across the world.
                </h3>

                {/* Subtitle */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  We partner with organizations and individuals to build a healthier, more productive tomorrow.
                </p>

                <div className="w-full h-px bg-[#E2EFEB]" />

                {/* Feature Bullet Points with rounded icons */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#E5F7F0] border border-[#2BC48A]/30 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                      Trusted by enterprises, insurers, and providers worldwide.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#E5F7F0] border border-[#2BC48A]/30 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5 shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                      AI-powered preventive healthcare solutions that drive measurable outcomes.
                    </p>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-full bg-[#E5F7F0] border border-[#2BC48A]/30 flex items-center justify-center text-[#16A34A] shrink-0 mt-0.5 shadow-xs">
                      <Heart className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-[13px] font-medium text-slate-700 leading-snug">
                      Human-first approach backed by science and technology.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Direct Assistance Support */}
              <div className="mt-8 pt-6 border-t border-[#E2EFEB] space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#E5F7F0] text-[#16A34A] flex items-center justify-center shrink-0">
                    <Headphones className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-900 block leading-tight">
                      Need immediate assistance?
                    </span>
                    <a
                      href="mailto:hello@goqii.com"
                      className="text-xs font-bold text-[#16A34A] hover:underline"
                    >
                      hello@goqii.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-1 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1" />
                  <span>Mon – Fri, 9 AM – 6 PM (IST)</span>
                </div>
              </div>
            </div>

            {/* ================= RIGHT MAIN SECTION ================= */}
            <div className="w-full lg:w-[62%] p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-y-auto bg-white">
              <div className="space-y-6">
                {/* Header Title & Subtitle */}
                <div>
                  <h3 className="text-2xl sm:text-[28px] font-black text-slate-900 tracking-tight leading-tight font-sans">
                    Talk to the Right Team
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                    Tell us what you need and we’ll connect you with the right person.
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="grid grid-cols-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab("demo")}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                      activeTab === "demo"
                        ? "bg-white text-[#16A34A] border border-[#2BC48A]/40 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Calendar className="w-4 h-4 text-[#16A34A]" />
                    <span>Book a Demo</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("contact")}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-bold transition-all cursor-pointer ${
                      activeTab === "contact"
                        ? "bg-white text-[#16A34A] border border-[#2BC48A]/40 shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#16A34A]" />
                    <span>Contact Us</span>
                  </button>
                </div>

                {/* ================= TAB 1: BOOK A DEMO FORM ================= */}
                {activeTab === "demo" && (
                  <div>
                    {!demoSubmitted ? (
                      <form onSubmit={handleDemoSubmit} className="space-y-5">
                        {/* WHO ARE YOU Selector */}
                        <div className="space-y-2">
                          <label className="text-[11px] font-extrabold uppercase text-slate-900 tracking-wider flex items-center gap-1 font-sans">
                            <span>WHO ARE YOU?</span>
                            <span className="text-red-500">*</span>
                          </label>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                            {whoAreYouOptions.map((opt) => {
                              const isSelected = whoAreYou === opt.id;
                              return (
                                <button
                                  key={opt.id}
                                  type="button"
                                  onClick={() => setWhoAreYou(opt.id)}
                                  className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer text-left ${
                                    isSelected
                                      ? "border-[#2BC48A] bg-[#F4FBF7] text-slate-900 shadow-xs"
                                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50/80"
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                                      isSelected
                                        ? "border-[#16A34A] bg-white"
                                        : "border-slate-300 bg-white"
                                    }`}
                                  >
                                    {isSelected && (
                                      <div className="w-2 h-2 rounded-full bg-[#16A34A]" />
                                    )}
                                  </div>
                                  <span className="truncate">{opt.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Input Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {/* Full Name */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              required
                              type="text"
                              placeholder="Full Name *"
                              value={demoForm.name}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, name: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white"
                            />
                          </div>

                          {/* Work Email */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              required
                              type="email"
                              placeholder="Work Email *"
                              value={demoForm.email}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, email: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white"
                            />
                          </div>

                          {/* Company Name */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <input
                              required
                              type="text"
                              placeholder="Company Name *"
                              value={demoForm.company}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, company: e.target.value })
                              }
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white"
                            />
                          </div>

                          {/* Your Role */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Briefcase className="w-4 h-4" />
                            </div>
                            <select
                              required
                              value={demoForm.role}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, role: e.target.value })
                              }
                              className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Your Role *
                              </option>
                              {roleOptions.slice(1).map((r) => (
                                <option key={r} value={r}>
                                  {r}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>

                          {/* Company Size */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Users className="w-4 h-4" />
                            </div>
                            <select
                              required
                              value={demoForm.companySize}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, companySize: e.target.value })
                              }
                              className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Company Size *
                              </option>
                              {companySizeOptions.slice(1).map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>

                          {/* Country */}
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Globe className="w-4 h-4" />
                            </div>
                            <select
                              required
                              value={demoForm.country}
                              onChange={(e) =>
                                setDemoForm({ ...demoForm, country: e.target.value })
                              }
                              className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white appearance-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Country *
                              </option>
                              {countryOptions.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        {/* Goals Textarea */}
                        <div className="relative">
                          <div className="absolute top-3.5 left-3.5 flex items-center pointer-events-none text-slate-400">
                            <PenLine className="w-4 h-4" />
                          </div>
                          <textarea
                            rows={3}
                            maxLength={500}
                            placeholder="Tell us a bit about your goals (optional)"
                            value={demoForm.goals}
                            onChange={(e) =>
                              setDemoForm({ ...demoForm, goals: e.target.value })
                            }
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2BC48A] focus:ring-1 focus:ring-[#2BC48A] transition-all bg-white resize-none"
                          />
                          <div className="text-right text-[10px] text-slate-400 mt-1">
                            {demoForm.goals.length}/500
                          </div>
                        </div>

                        {/* Privacy Statement */}
                        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                          <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>
                            We respect your privacy. Your information is safe with us and will never be shared.
                          </span>
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="w-full py-4 bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-xs sm:text-[13px] tracking-widest uppercase rounded-xl transition-all shadow-[0_8px_20px_rgba(22,163,74,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <span>BOOK MY DEMO</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </form>
                    ) : (
                      /* Demo Success View */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10 text-center space-y-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                          Demo Request Received!
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-[13px] max-w-md mx-auto leading-relaxed">
                          Thank you, <strong className="text-slate-900">{demoForm.name}</strong>. Our enterprise health specialist for the{" "}
                          <span className="text-[#16A34A] font-bold">{whoAreYou}</span> segment will contact you at{" "}
                          <strong className="text-slate-900">{demoForm.email}</strong> to schedule a tailored session for{" "}
                          <strong className="text-slate-900">{demoForm.company}</strong>.
                        </p>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* ================= TAB 2: SEND US A MESSAGE FORM ================= */}
                {activeTab === "contact" && (
                  <div className="space-y-4">
                    {!contactSubmitted ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4">
                        {/* Heading & Subtitle */}
                        <div className="space-y-1">
                          <h4 className="text-2xl sm:text-[26px] font-extrabold text-[#111827] tracking-tight font-sans">
                            Send Us A Message
                          </h4>
                          <p className="text-slate-500 text-xs sm:text-[13px] font-normal leading-relaxed">
                            Have a general inquiry, partnership idea, or platform feedback? Let our team support you.
                          </p>
                        </div>

                        {/* FULL NAME */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold uppercase text-[#475569] tracking-wider block font-sans">
                            FULL NAME
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Your Name"
                            value={contactForm.name}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, name: e.target.value })
                            }
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#22B69E] focus:ring-1 focus:ring-[#22B69E] transition-all bg-white shadow-xs"
                          />
                        </div>

                        {/* EMAIL ADDRESS */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold uppercase text-[#475569] tracking-wider block font-sans">
                            EMAIL ADDRESS
                          </label>
                          <input
                            required
                            type="email"
                            placeholder="you@company.com"
                            value={contactForm.email}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, email: e.target.value })
                            }
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#22B69E] focus:ring-1 focus:ring-[#22B69E] transition-all bg-white shadow-xs"
                          />
                        </div>

                        {/* SUBJECT */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold uppercase text-[#475569] tracking-wider block font-sans">
                            SUBJECT
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="How can we help you?"
                            value={contactForm.subject}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, subject: e.target.value })
                            }
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#22B69E] focus:ring-1 focus:ring-[#22B69E] transition-all bg-white shadow-xs"
                          />
                        </div>

                        {/* MESSAGE DETAILS */}
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-extrabold uppercase text-[#475569] tracking-wider block font-sans">
                            MESSAGE DETAILS
                          </label>
                          <textarea
                            required
                            rows={4}
                            placeholder="Please elaborate on your inquiry..."
                            value={contactForm.message}
                            onChange={(e) =>
                              setContactForm({ ...contactForm, message: e.target.value })
                            }
                            className="w-full px-4 py-3 sm:py-3.5 rounded-xl border border-slate-200 text-xs sm:text-[13px] font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#22B69E] focus:ring-1 focus:ring-[#22B69E] transition-all bg-white resize-none shadow-xs"
                          />
                        </div>

                        {/* SEND MESSAGE BUTTON */}
                        <button
                          type="submit"
                          className="w-full py-3.5 sm:py-4 bg-[#22B69E] hover:bg-[#1CA08B] text-white font-extrabold text-xs sm:text-[13px] tracking-wider uppercase rounded-xl transition-all shadow-[0_6px_18px_rgba(34,182,158,0.28)] flex items-center justify-center cursor-pointer mt-2"
                        >
                          <span>SEND MESSAGE</span>
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-10 text-center space-y-4"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h4 className="text-2xl font-black text-slate-900 tracking-tight">
                          Message Dispatched!
                        </h4>
                        <p className="text-slate-600 text-xs sm:text-[13px] max-w-md mx-auto leading-relaxed">
                          Thank you, <strong className="text-slate-900">{contactForm.name}</strong>. Your message regarding{" "}
                          <strong className="text-slate-900">"{contactForm.subject || "General Inquiry"}"</strong> has been sent to our team. We'll get back to you at{" "}
                          <strong className="text-slate-900">{contactForm.email}</strong> shortly.
                        </p>
                        <button
                          type="button"
                          onClick={handleClose}
                          className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                        >
                          Close Window
                        </button>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
