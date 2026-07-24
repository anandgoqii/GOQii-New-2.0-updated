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
  "Device Not Charging / Power Issue",
  "Display / Screen Non-responsive or Blank",
  "Bluetooth Pairing & Sync Failure",
  "Inaccurate Sensor Readings (SpO2 / HR / Temp)",
  "Physical / Strap Mount Defect",
  "Water Ingress / Liquid Moisture Issue",
  "Other Hardware Defect"
];

export default function WarrantyPage() {
  const [orderId, setOrderId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<string>("");
  const [issueType, setIssueType] = useState("");
  const [remarks, setRemarks] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
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
      setErrorMessage("Please enter a valid Order ID or Mobile Number.");
      return;
    }
    if (!selectedProduct) {
      setErrorMessage("Please select your GOQii product.");
      return;
    }
    if (!issueType) {
      setErrorMessage("Please select the issue/defect category.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API claim registration
    setTimeout(() => {
      const claimNum = `GQ-WRN-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedClaimNumber(claimNum);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmittedClaimNumber(null);
    setOrderId("");
    setSelectedProduct("");
    setIssueType("");
    setRemarks("");
    setUploadedFiles([]);
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
            <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#2BC48A] bg-[#2BC48A]/10 px-3.5 py-1.5 rounded-full mb-6">
              <ShieldCheck className="w-4 h-4" /> GOQii Warranty Support
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-4 text-white">
              Need help with your GOQii device?
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-medium mb-8 leading-relaxed">
              Submit your warranty claim and our support team will assist you with diagnosis, repairs, or an immediate hardware replacement.
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

            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2BC48A] bg-[#E5F7F0] px-3.5 py-1 rounded-full inline-block mb-3">
              Claim Submitted Successfully
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] mb-2">
              Warranty claim submitted.
            </h2>

            <div className="bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl p-6 my-6 max-w-md mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">YOUR CLAIM NUMBER</span>
              <div className="text-2xl sm:text-3xl font-black text-[#2BC48A] tracking-wider mt-1">
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
          /* WARRANTY CLAIM FORM */
          <div id="warranty-claim-form" className="bg-white rounded-3xl p-6 sm:p-12 border border-[#E2E8F0] shadow-sm mb-16">
            
            <div className="mb-10 pb-6 border-b border-[#F1F5F9]">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A]">
                WARRANTY CLAIM FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1">
                Register Your Hardware Defect
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                All official GOQii devices carry a 1-year limited warranty against manufacturing defects.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-3">
                <AlertCircle className="w-5 h-5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-10">
              
              {/* STEP 01: Find Your Order */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    01
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">Find Your Order</h3>
                </div>

                <div className="pl-10">
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Order ID / Registered Mobile Number *
                  </label>
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter Order ID (e.g. GQ-108924) or 10-digit mobile number..."
                    className="w-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all"
                  />
                  <span className="text-[11px] text-[#94A3B8] font-medium mt-1 inline-block">
                    Order ID can be found in your order confirmation email or app purchase receipt.
                  </span>
                </div>
              </div>

              {/* STEP 02: Select Your Product */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    02
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">Select Your Product</h3>
                </div>

                <div className="pl-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {PRODUCTS.map((prod) => {
                    const isSelected = selectedProduct === prod.id;
                    return (
                      <div
                        key={prod.id}
                        onClick={() => setSelectedProduct(prod.id)}
                        className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-3.5 ${
                          isSelected
                            ? "bg-[#E5F7F0] border-[#2BC48A] shadow-sm"
                            : "bg-[#F8FAFB] border-[#E2E8F0] hover:border-slate-300"
                        }`}
                      >
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-12 h-12 rounded-xl object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-bold text-[#0F172A] truncate">{prod.name}</h4>
                          <span className="text-[10px] text-[#64748B] font-medium truncate block">{prod.model}</span>
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-[#2BC48A] text-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* STEP 03: Tell Us the Issue */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    03
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">Tell Us the Issue</h3>
                </div>

                <div className="pl-10 space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      Issue / Defect Category *
                    </label>
                    <select
                      value={issueType}
                      onChange={(e) => setIssueType(e.target.value)}
                      className="w-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-xl px-4 py-3.5 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all cursor-pointer"
                    >
                      <option value="">-- Select Hardware Issue --</option>
                      {ISSUE_TYPES.map((iss, idx) => (
                        <option key={idx} value={iss}>
                          {iss}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                      Remarks / Description
                    </label>
                    <textarea
                      rows={3}
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      placeholder="Describe what happens when you try to use or charge the device..."
                      className="w-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-xl px-4 py-3 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 04: Upload Evidence */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shrink-0">
                    04
                  </span>
                  <h3 className="text-base font-bold text-[#0F172A]">Upload Evidence</h3>
                </div>

                <div className="pl-10">
                  <div className="border-2 border-dashed border-[#CBD5E1] hover:border-[#2BC48A] bg-[#F8FAFB] rounded-2xl p-6 text-center transition-all relative cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-8 h-8 text-[#2BC48A] mx-auto mb-2" />
                    <span className="text-xs font-bold text-[#0F172A] block mb-1">
                      Drag &amp; drop photos or short video clip showing the defect
                    </span>
                    <span className="text-[11px] text-[#64748B] font-medium">
                      Supports JPG, PNG, MP4 (Max 25MB). Optional but accelerates claim approval.
                    </span>
                  </div>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {uploadedFiles.map((fn, idx) => (
                        <span key={idx} className="text-[11px] font-bold text-[#2BC48A] bg-[#E5F7F0] px-3 py-1 rounded-full flex items-center gap-1.5">
                          <FileText className="w-3.5 h-3.5" /> {fn}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* STEP 05: Submit Claim */}
              <div className="pl-10 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#2BC48A] hover:bg-[#22a372] text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-[#2BC48A]/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Registering Claim...</span>
                  ) : (
                    <span>SUBMIT WARRANTY CLAIM</span>
                  )}
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
            <h3 className="text-xl sm:text-2xl font-black mb-1">Can&apos;t complete your warranty claim?</h3>
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
