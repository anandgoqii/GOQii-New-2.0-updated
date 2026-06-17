import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle2, MapPin, Building2, Globe, Sparkles, Mail, MessageSquare } from "lucide-react";

interface ContactUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactUsModal({ isOpen, onClose }: ContactUsModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 300);
  };

  const offices = [
    {
      country: "United States (HQ)",
      name: "GOQii Inc.",
      address: "1000 El Camino Real, Suite 150, Menlo Park, CA 94025, USA",
      highlight: "Silicon Valley Innovation Center",
      flag: "🇺🇸"
    },
    {
      country: "United Kingdom",
      name: "GOQii UK Limited",
      address: "29 West Way, Hove, England, BN3 8LS, United Kingdom",
      highlight: "NHS Integration & Clinical Hub",
      flag: "🇬🇧"
    },
    {
      country: "India (Core Development)",
      name: "GOQii Technologies Pvt. Ltd.",
      address: "101 Satyam Tower, Govandi East, Mumbai 400088, India",
      highlight: "Global Engineering & Operations HQ",
      flag: "🇮🇳"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 10, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md md:max-w-4xl bg-white border border-[#E8EDF2] shadow-2xl rounded-3xl z-10 text-left overflow-hidden flex flex-col md:flex-row my-8 max-h-[90vh] md:max-h-[85vh] overflow-y-auto"
          >
            {/* Top Branding Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#2BC48A]" />

            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-full border border-[#E8EDF2] bg-white hover:bg-slate-50 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer z-25"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Column: Corporate Office Addresses */}
            <div className="w-full md:w-5/12 bg-gradient-to-br from-[#F4FBF7] via-[#E8F7F0] to-[#DCF7EB] text-slate-800 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-[#2BC48A]/25">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#2BC48A]/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00ADC7]/8 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-[#E5F7F0] px-2.5 py-1 rounded-full text-[10px] tracking-wider uppercase font-mono font-bold text-[#047857] mb-3">
                    <Sparkles className="w-3 h-3 text-[#2BC48A]" />
                    <span>Global Presence</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-1 font-sans">
                    Our Global Offices
                  </h4>
                  <p className="text-slate-650 text-[11px] leading-relaxed font-semibold">
                    Connecting wellness pathways across major healthcare jurisdictions.
                  </p>
                </div>

                <div className="space-y-4">
                  {offices.map((office) => (
                    <div
                      key={office.country}
                      className="p-3.5 rounded-2xl bg-white/70 border border-[#2BC48A]/15 hover:bg-white hover:border-[#2BC48A]/30 transition-all duration-300 shadow-[0_4px_12px_rgba(43,196,138,0.03)]"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-base select-none">{office.flag}</span>
                        <span className="text-[10px] font-mono tracking-wider font-bold text-[#047857]">
                          {office.country.toUpperCase()}
                        </span>
                      </div>
                      <h5 className="text-[13px] font-black text-slate-900 leading-tight mb-1 font-sans">
                        {office.name}
                      </h5>
                      <p className="text-[11px] text-slate-600 leading-normal mb-2 flex items-start gap-1.5 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-[#2BC48A] shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </p>
                      <div className="flex items-center gap-1 text-[9px] font-bold text-[#007A94] uppercase tracking-wider font-mono bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100/40 w-fit">
                        <Building2 className="w-3 h-3" />
                        <span>{office.highlight}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Dedicated Contact Us Form */}
            <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center bg-white">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <span className="inline-block bg-[#E5F7F0] text-[#2BC48A] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-1">
                        Contact Us
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none mb-1">
                        Send Us A Message
                      </h3>
                      <p className="text-[#627D98] text-[11.5px] font-semibold leading-relaxed">
                        Have a general inquiry, partnership idea, or platform feedback? Let our team support you.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Full Name
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Email address
                        </label>
                        <input
                          required
                          type="email"
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Subject
                        </label>
                        <input
                          required
                          type="text"
                          placeholder="How can we help you?"
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50"
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-wider">
                          Message Details
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Please elaborate on your inquiry..."
                          className="w-full px-4 py-2.5 rounded-xl border border-[#E8EDF2] text-xs font-semibold focus:outline-none focus:border-[#2BC48A] transition-colors shadow-sm bg-slate-50/50 resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-[#21C083] to-[#00ADC7] hover:shadow-lg text-white font-extrabold text-xs tracking-wider uppercase rounded-xl mt-4 transition-all cursor-pointer text-center"
                      >
                        Send Message
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center text-center py-6 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="text-xl font-black text-slate-900 tracking-tight">Message Sent Successfully!</h4>
                      <p className="text-[#627D98] text-[11.5px] max-w-sm mx-auto leading-relaxed font-semibold">
                        Thank you, <span className="font-extrabold text-slate-800">{form.name}</span>. Your message about <span className="font-extrabold text-slate-800">&ldquo;{form.subject}&rdquo;</span> is registered. A GOQii representative will contact you at <span className="font-extrabold text-slate-800">{form.email}</span> within 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={handleClose}
                      className="px-6 py-2.5 rounded-full border border-[#E8EDF2] text-xs font-bold hover:bg-slate-50 text-slate-700 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
