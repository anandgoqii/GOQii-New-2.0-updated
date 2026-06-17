import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, User, Mail, Building2, Briefcase } from "lucide-react";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export default function BookDemoModal({ isOpen, onClose, initialRole }: BookDemoModalProps) {
  const [whoAreYou, setWhoAreYou] = useState<string>("Employer");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const options = ["Employer", "Insurer", "Provider", "Pharma", "Individual"];

  const isEmployerOnly = initialRole === "EmployerOnly";
  const isInsurerOnly = initialRole === "InsurerOnly";
  const isProviderOnly = initialRole === "ProviderOnly";
  const isPharmaOnly = initialRole === "PharmaOnly";

  const isSegmentSpecific = isEmployerOnly || isInsurerOnly || isProviderOnly || isPharmaOnly;

  useEffect(() => {
    if (initialRole) {
      if (initialRole === "EmployerOnly") {
        setWhoAreYou("Employer");
        return;
      }
      if (initialRole === "InsurerOnly") {
        setWhoAreYou("Insurer");
        return;
      }
      if (initialRole === "ProviderOnly") {
        setWhoAreYou("Provider");
        return;
      }
      if (initialRole === "PharmaOnly") {
        setWhoAreYou("Pharma");
        return;
      }
      const matched = options.find((opt) =>
        initialRole.toLowerCase().includes(opt.toLowerCase())
      );
      if (matched) {
        setWhoAreYou(matched);
      }
    }
  }, [initialRole]);

  const handleCreateNewForm = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", company: "", role: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", role: "" });
      setWhoAreYou("Employer");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-lg bg-white dark:bg-[#0B1220] border border-[#E8EDF2] dark:border-slate-800 shadow-[0_24px_64px_rgba(0,0,0,0.15)] rounded-3xl p-6 sm:p-8 z-10 text-left overflow-hidden"
          >
            {/* Top Branding Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2BC48A]" />

            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-full border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-800 dark:text-slate-400 transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="request-demo-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  {isEmployerOnly && (
                    <div className="flex flex-col">
                      <span className="text-[10px] bg-[#E5F7F0] text-[#047857] px-3 py-1 rounded-full font-bold tracking-wider uppercase font-mono self-start mb-2">
                        Employer Demo Request
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">
                        Employer Demo
                      </h3>
                      <p className="text-[#627D98] dark:text-slate-400 text-xs font-semibold leading-relaxed">
                        Fill in the details below to schedule your corporate health and employee wellbeing deep-dive.
                      </p>
                    </div>
                  )}
                  {isInsurerOnly && (
                    <div className="flex flex-col">
                      <span className="text-[10px] bg-[#E5F7F0] text-[#047857] px-3 py-1 rounded-full font-bold tracking-wider uppercase font-mono self-start mb-2">
                        Actuarial Framework & Demo
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">
                        Insurer Demo
                      </h3>
                      <p className="text-[#627D98] dark:text-slate-400 text-xs font-semibold leading-relaxed">
                        Fill in the details below to request our actuarial framework and schedule an insurance platform demo.
                      </p>
                    </div>
                  )}
                  {isProviderOnly && (
                    <div className="flex flex-col">
                      <span className="text-[10px] bg-[#E5F7F0] text-[#047857] px-3 py-1 rounded-full font-bold tracking-wider uppercase font-mono self-start mb-2">
                        Clinical Solutions & Demo
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">
                        Provider Demo
                      </h3>
                      <p className="text-[#627D98] dark:text-slate-400 text-xs font-semibold leading-relaxed">
                        Fill in the details below to connect with our Clinical Solutions team and schedule a provider demo.
                      </p>
                    </div>
                  )}
                  {isPharmaOnly && (
                    <div className="flex flex-col">
                      <span className="text-[10px] bg-[#E5F7F0] text-[#047857] px-3 py-1 rounded-full font-bold tracking-wider uppercase font-mono self-start mb-2">
                        Pharma Solutions & Demo
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1.5">
                        Pharma Demo
                      </h3>
                      <p className="text-[#627D98] dark:text-slate-400 text-xs font-semibold leading-relaxed">
                        Fill in the details below to schedule a custom pharmaceutical adherence & connected care demonstration.
                      </p>
                    </div>
                  )}
                  {!isSegmentSpecific && (
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">
                        Talk To The Right Team
                      </h3>
                      <p className="text-[#627D98] dark:text-slate-400 text-xs font-semibold leading-relaxed">
                        Select your target segment and fill in the details below to schedule your demo.
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Who are you? selector - HIDDEN for segment-specific views */}
                    {!isSegmentSpecific && (
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Who are you?
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {options.map((option) => {
                            const isSelected = whoAreYou === option;
                            return (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setWhoAreYou(option)}
                                className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                                  isSelected
                                    ? "border-[#2BC48A] bg-[#E6FDF4] dark:bg-[#064E3B] text-[#047857] dark:text-[#A7F3D0] ring-1 ring-[#2BC48A]/40"
                                    : "border-emerald-100 dark:border-emerald-950/20 text-[#15803D] dark:text-[#86EFAC] hover:bg-[#E8F7F0] dark:hover:bg-emerald-900/30"
                                }`}
                              >
                                <div
                                  className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                                    isSelected
                                      ? "border-[#047857] dark:border-[#A7F3D0]"
                                      : "border-emerald-300 dark:border-[#A7F3D0]"
                                  }`}
                                >
                                  {isSelected && (
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#047857] dark:bg-[#A7F3D0]" />
                                  )}
                                </div>
                                <span>{option}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Form Inputs */}
                    <div className="space-y-3 pt-1">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                          <User className="w-3 h-3 text-slate-400" />
                          <span>Name</span>
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50 dark:bg-slate-900/50 dark:text-white text-slate-800"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>

                      {/* Work Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <span>Work Email</span>
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50 dark:bg-slate-900/50 dark:text-white text-slate-800"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Company */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                            <Building2 className="w-3 h-3 text-slate-400" />
                            <span>Company</span>
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="Your Company Name"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50 dark:bg-slate-900/50 dark:text-white text-slate-800"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                          />
                        </div>

                        {/* Role */}
                        <div className="space-y-1">
                          <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider flex items-center gap-1">
                            <Briefcase className="w-3 h-3 text-slate-400" />
                            <span>Role</span>
                          </label>
                          <input
                            required
                            type="text"
                            placeholder="e.g. Wellness Director"
                            className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] dark:border-slate-800 text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50 dark:bg-slate-900/50 dark:text-white text-slate-800"
                            value={form.role}
                            onChange={(e) => setForm({ ...form, role: e.target.value })}
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#2BC48A] hover:bg-emerald-400 text-[#0F172A] font-extrabold text-xs tracking-widest uppercase rounded-xl mt-4 transition-all hover:scale-[1.01] shadow-[0_8px_24px_rgba(43,196,138,0.25)] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Book Demo</span>
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="demo-success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h4 className="text-xl font-black text-slate-900 dark:text-white tracking-tight">Demo Request Received!</h4>
                    <p className="text-[#627D98] dark:text-slate-400 text-[11.5px] max-w-sm mx-auto leading-relaxed font-semibold">
                      Thank you, <span className="font-extrabold text-slate-800 dark:text-white">{form.name}</span>! A representative specialized in digital health for <span className="font-extrabold text-[#2BC48A]">{whoAreYou}</span> segment will connect with you shortly at <span className="font-extrabold text-[#2BC48A]">{form.email}</span> to schedule a showcase for <span className="font-extrabold text-slate-800 dark:text-white">{form.company}</span>.
                    </p>
                  </div>

                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded-full border border-[#E8EDF2] dark:border-slate-800 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-350 transition-colors cursor-pointer"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
