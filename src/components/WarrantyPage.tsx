import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  Upload,
  ArrowLeft,
  HelpCircle,
  Package,
  FileText,
  AlertCircle,
  Watch,
  Smartphone,
  ChevronRight,
  Headphones,
  Check
} from "lucide-react";

interface ProductOption {
  id: string;
  name: string;
  model: string;
  image: string;
}

const PRODUCTS: ProductOption[] = [
  {
    id: "smart-vital",
    name: "GOQii Smart Vital",
    model: "SpO2 & Temp Tracker",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "vital-3",
    name: "GOQii Vital 3.0",
    model: "Continuous Temp Band",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "vital-ecg",
    name: "GOQii Vital ECG",
    model: "Lead-1 ECG Sensor",
    image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "smart-scale",
    name: "GOQii Smart Scale",
    model: "18 BIA Metrics Scale",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: "other",
    name: "Other GOQii Device",
    model: "Band, Tracker & Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
  }
];

const ISSUE_TYPES = [
  "Tracker not charging",
  "Tracker touch not working",
  "Tracker display issue",
  "Item damaged on arrival",
  "Some tracker feature not working",
  "Missing/faulty parts (charger, straps etc.)"
];

export default function WarrantyPage() {
  const [orderId, setOrderId] = useState("");
  const [issueType, setIssueType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [submittedClaimNumber, setSubmittedClaimNumber] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const scrollToForm = () => {
    const el = document.getElementById("warranty-claim-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f: File) => f.name);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!orderId.trim()) {
      setErrorMessage("Please enter your Order ID.");
      return;
    }
    if (!issueType) {
      setErrorMessage("Please select the Issue / Defect.");
      return;
    }
    if (!remarks.trim()) {
      setErrorMessage("Please elaborate on the defect in the remarks field.");
      return;
    }
    if (!captchaChecked) {
      setErrorMessage("Please check 'I'm not a robot' to verify.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API claim registration
    setTimeout(() => {
      const claimNum = `GQ-WRN-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedClaimNumber(claimNum);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000);
  };

  const handleResetForm = () => {
    setSubmittedClaimNumber(null);
    setOrderId("");
    setIssueType("");
    setRemarks("");
    setUploadedFiles([]);
    setCaptchaChecked(false);
    setErrorMessage("");
  };

  const handleContactSupport = () => {
    if (window.navigateToPage) {
      window.navigateToPage("faqs");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFB] text-[#0F172A] font-sans pt-24 pb-20 select-none">
      
      {/* Top Breadcrumb */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <button
            onClick={() => {
              if (window.navigateToPage) window.navigateToPage("home");
            }}
            className="hover:text-[#2BC48A] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </button>
          <span>/</span>
          <span className="text-[#0F172A]">Warranty Support</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-8 sm:p-14 lg:p-16 mb-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#2BC48A]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#2BC48A] bg-[#2BC48A]/10 px-3.5 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" /> GOQii Warranty Support
            </div>

            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
              GOQii Device Warranty &amp; Support
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium mb-8 leading-relaxed">
              Need help with your GOQii device? Submit your warranty claim and our support team will assist you with diagnosis, repairs, or an immediate hardware replacement.
            </p>

            <button
              onClick={scrollToForm}
              className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-8 py-4 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg shadow-[#2BC48A]/20 transition-all flex items-center gap-3 cursor-pointer"
            >
              Start Warranty Claim <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* CLAIM SUBMITTED CONFIRMATION STATE */}
        {submittedClaimNumber ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm text-center max-w-2xl mx-auto mb-16"
          >
            <div className="w-16 h-16 rounded-full bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="text-xs font-bold uppercase tracking-widest text-[#2BC48A] bg-[#E5F7F0] px-3.5 py-1 rounded-full inline-block mb-3">
              Claim Submitted Successfully
            </span>

            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mb-2">
              Warranty claim submitted.
            </h2>

            <div className="bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl p-6 my-6 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">YOUR CLAIM NUMBER</span>
              <div className="text-2xl sm:text-3xl font-bold text-[#2BC48A] tracking-wider mt-1">
                {submittedClaimNumber}
              </div>
            </div>

            <p className="text-sm text-[#64748B] font-medium leading-relaxed mb-8 max-w-md mx-auto">
              Our technical evaluations team will connect with you within <strong>48 hours</strong> via SMS and WhatsApp to verify defect details and arrange doorstep pickup.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleResetForm}
                className="w-full sm:w-auto bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
              >
                Submit Another Claim
              </button>

              <button
                onClick={handleContactSupport}
                className="w-full sm:w-auto bg-[#2BC48A] hover:bg-[#22a372] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                Help &amp; FAQs →
              </button>
            </div>
          </motion.div>
        ) : (
          /* WARRANTY CLAIM FORM - MATCHING ATTACHED SCREENSHOT EXACTLY */
          <div id="warranty-claim-form" className="max-w-xl mx-auto bg-white rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-md mb-16">
            
            <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] mb-6">
              Please enter details
            </h2>

            {errorMessage && (
              <div className="mb-6 p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* ORDER ID */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  ORDER ID <span className="text-red-600 font-bold ml-0.5">*</span>:
                </label>
                <input
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  placeholder="Enter your Order ID"
                  className="w-full bg-white border border-[#D1D5DB] rounded px-3 py-2 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#28A745] focus:border-[#28A745] transition-all"
                />
              </div>

              {/* ISSUE/DEFECT DROPDOWN */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  ISSUE/DEFECT <span className="text-red-600 font-bold ml-0.5">*</span>:
                </label>
                <select
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                  className="w-full bg-white border border-[#D1D5DB] rounded px-3 py-2 text-sm text-[#1F2937] focus:outline-none focus:ring-1 focus:ring-[#28A745] focus:border-[#28A745] transition-all cursor-pointer"
                >
                  <option value="">--- Select ---</option>
                  {ISSUE_TYPES.map((iss, idx) => (
                    <option key={idx} value={iss}>
                      {iss}
                    </option>
                  ))}
                </select>
              </div>

              {/* REMARKS */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1.5">
                  REMARKS <span className="text-red-600 font-bold ml-0.5">*</span>:
                </label>
                <textarea
                  rows={3}
                  value={remarks}
                  onChange={(e) => setRemarks(e.target.value)}
                  placeholder="Elaborate Defect"
                  className="w-full bg-white border border-[#D1D5DB] rounded px-3 py-2 text-sm text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-1 focus:ring-[#28A745] focus:border-[#28A745] transition-all resize-none"
                />
              </div>

              {/* ADD A PHOTO OR VIDEO */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-2">
                  ADD A PHOTO OR VIDEO <span className="text-red-600 font-bold ml-0.5">*</span>:
                </label>
                
                <div className="relative inline-block">
                  <input
                    type="file"
                    id="photo-video-upload"
                    multiple
                    accept="image/*,video/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="photo-video-upload"
                    className="bg-[#28A745] hover:bg-[#218838] text-white px-5 py-2 rounded-lg text-sm font-medium inline-flex items-center gap-2 cursor-pointer transition-all shadow-sm"
                  >
                    Upload Photo/Video
                  </label>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {uploadedFiles.map((fn, idx) => (
                      <span key={idx} className="text-[11px] font-medium text-[#28A745] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <FileText className="w-3.5 h-3.5" /> {fn}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* reCAPTCHA BOX */}
              <div className="bg-[#F9FAFB] border border-[#D1D5DB] rounded-md p-3.5 max-w-[302px] flex items-center justify-between shadow-xs my-6 select-none">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCaptchaChecked(!captchaChecked)}>
                  <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${captchaChecked ? "bg-[#28A745] border-[#28A745] text-white" : "border-slate-300 bg-white"}`}>
                    {captchaChecked && <Check className="w-4 h-4 stroke-[3]" />}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#374151]">
                    I&apos;m not a robot
                  </span>
                </div>
                
                <div className="flex flex-col items-center justify-center pl-2">
                  <div className="w-6 h-6 text-[#4285F4]">
                    <svg viewBox="0 0 48 48" className="w-full h-full fill-current">
                      <path d="M24 8V0L14 10l10 10v-8c7.73 0 14 6.27 14 14 0 2.76-.81 5.33-2.21 7.5l2.92 2.92C40.91 33.3 42 28.8 42 24c0-9.94-8.06-18-18-18zM11.21 11.58L8.29 8.66C6.09 12.7 5 17.2 5 22c0 9.94 8.06 18 18 18v8l10-10-10-10v8c-7.73 0-14-6.27-14-14 0-2.76.81-5.33 2.21-7.5z"/>
                    </svg>
                  </div>
                  <span className="text-[8px] text-[#6B7280] font-medium tracking-tight mt-0.5">reCAPTCHA</span>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#28A745] hover:bg-[#218838] text-white text-base font-bold px-14 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>

            </form>
          </div>
        )}

        {/* NEED HELP? SECTION */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/10 px-3 py-1 rounded-full inline-block mb-2">
              NEED ASSISTANCE?
            </span>
            <h3 className="text-xl sm:text-2xl font-semibold mb-1">Can&apos;t complete your warranty claim?</h3>
            <p className="text-xs text-slate-300 font-medium">Our customer care representatives are ready to help you manually over call or live chat.</p>
          </div>

          <button
            onClick={handleContactSupport}
            className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-6 py-3 rounded-full text-xs font-bold shadow-md transition-all whitespace-nowrap cursor-pointer"
          >
            Contact Support
          </button>
        </div>

        {/* RELATED SUPPORT LINKS */}
        <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm">
          <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] mb-6">
            Related Support Resources
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <a
              href="https://store.goqii.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#F8FAFB] hover:bg-[#E5F7F0] border border-[#E2E8F0] hover:border-[#2BC48A] transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-[#2BC48A]" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2BC48A]">Track Order</h4>
                  <span className="text-[10px] text-[#64748B] font-medium">View courier status</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2BC48A] group-hover:translate-x-1 transition-all" />
            </a>

            <div
              onClick={handleContactSupport}
              className="p-5 rounded-2xl bg-[#F8FAFB] hover:bg-[#E5F7F0] border border-[#E2E8F0] hover:border-[#2BC48A] transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#2BC48A]" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2BC48A]">Help &amp; FAQs</h4>
                  <span className="text-[10px] text-[#64748B] font-medium">Browse knowledge base</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2BC48A] group-hover:translate-x-1 transition-all" />
            </div>

            <div
              onClick={handleContactSupport}
              className="p-5 rounded-2xl bg-[#F8FAFB] hover:bg-[#E5F7F0] border border-[#E2E8F0] hover:border-[#2BC48A] transition-all flex items-center justify-between group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#2BC48A]" />
                <div>
                  <h4 className="text-xs font-bold text-[#0F172A] group-hover:text-[#2BC48A]">Warranty Policy</h4>
                  <span className="text-[10px] text-[#64748B] font-medium">Read terms &amp; conditions</span>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2BC48A] group-hover:translate-x-1 transition-all" />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
