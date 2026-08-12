import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  HelpCircle,
  ShieldCheck,
  Search,
  ExternalLink,
  RefreshCw,
  Mail,
  Smartphone,
  UserCheck,
  ChevronRight
} from "lucide-react";

interface OrderTrackingData {
  orderId: string;
  awbNumber: string;
  courierPartner: string;
  shippedDate: string;
  estimatedDelivery: string;
  latestLocation: string;
  currentStage: number; // 0: Confirmed, 1: Packed, 2: Shipped, 3: Out for Delivery, 4: Delivered
  items: Array<{ name: string; qty: number; image: string }>;
}

export default function TrackOrderPage() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [orderInput, setOrderInput] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<OrderTrackingData | null>(null);
  const [errorType, setErrorType] = useState<"invalid_mobile" | "invalid_order" | "not_found" | "network" | null>(null);

  const steps = [
    { title: "Order Confirmed", desc: "Payment verified & order created" },
    { title: "Packed", desc: "Quality checked & sealed at warehouse" },
    { title: "Shipped", desc: "In transit with logistics courier" },
    { title: "Out for Delivery", desc: "With local delivery partner" },
    { title: "Delivered", desc: "Received at delivery address" }
  ];

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorType(null);
    setTrackingResult(null);

    const cleanMobile = mobileNumber.trim();
    const cleanOrder = orderInput.trim();

    // Validation checks
    if (!cleanMobile || cleanMobile.length < 10) {
      setErrorType("invalid_mobile");
      return;
    }

    if (!cleanOrder) {
      setErrorType("invalid_order");
      return;
    }

    setIsSearching(true);

    // Simulate API lookup
    setTimeout(() => {
      setIsSearching(false);

      // Demo simulation: if user types "0000" or "fail" -> simulate order not found
      if (cleanOrder.toLowerCase() === "fail" || cleanOrder === "000000") {
        setErrorType("not_found");
        return;
      }

      if (cleanOrder.toLowerCase() === "error") {
        setErrorType("network");
        return;
      }

      // Success payload mapping
      const mockResult: OrderTrackingData = {
        orderId: cleanOrder.startsWith("#") ? cleanOrder : `#${cleanOrder.toUpperCase()}`,
        awbNumber: `BLUEDART-${Math.floor(100000000 + Math.random() * 900000000)}`,
        courierPartner: "BlueDart Express",
        shippedDate: "July 21, 2026",
        estimatedDelivery: "July 26, 2026",
        latestLocation: "Mumbai Sorting Hub (In Transit)",
        currentStage: 2, // Shipped
        items: [
          {
            name: "GOQii Smart Vital Tracker",
            qty: 1,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=200&q=80"
          },
          {
            name: "3-Month Personal Health Coaching Plan",
            qty: 1,
            image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=200&q=80"
          }
        ]
      };

      setTrackingResult(mockResult);
    }, 1000);
  };

  const handleTryAgain = () => {
    setErrorType(null);
    setTrackingResult(null);
  };

  const handleNavigateTo = (page: "faqs" | "warranty" | "home") => {
    if (window.navigateToPage) {
      window.navigateToPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleContactSupport = () => {
    handleNavigateTo("faqs");
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFB] text-[#0F172A] font-sans pt-24 pb-20 select-none">
      
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#64748B]">
          <button
            onClick={() => handleNavigateTo("home")}
            className="hover:text-[#2BC48A] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Home
          </button>
          <span>/</span>
          <span>Support</span>
          <span>/</span>
          <span className="text-[#0F172A]">Track Order</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* ============================================================ */}
        {/* 01 — HERO / TRACKING FORM (2-COLUMN DESKTOP / STACKED MOBILE) */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#2BC48A]/10 border border-[#2BC48A]/20 px-3.5 py-1.5 rounded-full">
              <Package className="w-4 h-4 text-[#2BC48A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2BC48A]">
                ORDER SUPPORT
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold text-[#0F172A] tracking-tight leading-tight">
              Track your <br className="hidden sm:inline" />
              <span className="text-[#2BC48A]">GOQii order.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#64748B] font-medium leading-relaxed max-w-lg">
              Enter your order details to check the latest delivery status, dispatch updates, and live courier tracking.
            </p>

            <div className="hidden lg:flex items-center gap-6 pt-4 text-xs font-semibold text-[#64748B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2BC48A]" /> Live Courier Sync
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2BC48A]" /> Doorstep SMS Updates
              </div>
            </div>
          </div>

          {/* RIGHT: Tracking Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xl relative overflow-hidden">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-[#0F172A]">Find your order</h2>
                <p className="text-xs text-[#64748B] font-medium mt-1">
                  Enter your registered phone number and Order ID or AWB.
                </p>
              </div>

              <form onSubmit={handleTrackOrder} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="Enter registered 10-digit mobile number"
                      className="w-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all"
                    />
                    <Smartphone className="w-4 h-4 text-[#94A3B8] absolute left-4 top-4" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2">
                    Order ID / AWB *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={orderInput}
                      onChange={(e) => setOrderInput(e.target.value)}
                      placeholder="Enter Order ID (e.g. GQ123456) or AWB number"
                      className="w-full bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all"
                    />
                    <Search className="w-4 h-4 text-[#94A3B8] absolute left-4 top-4" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSearching}
                  className="w-full bg-[#2BC48A] hover:bg-[#22a372] text-white py-4 rounded-2xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#2BC48A]/25 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                >
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 animate-spin" /> Locating Order...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      TRACK MY ORDER <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>


        {/* ============================================================ */}
        {/* 03 — ERROR STATES (IF VALIDATION OR API FAILS) */}
        {/* ============================================================ */}
        <AnimatePresence>
          {errorType && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="mb-16 bg-white rounded-3xl p-8 sm:p-12 border border-rose-200 shadow-sm text-center max-w-2xl mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-[#0F172A] mb-2">
                {errorType === "invalid_mobile" && "Please enter a valid 10-digit mobile number."}
                {errorType === "invalid_order" && "Please enter your Order ID or AWB number."}
                {errorType === "not_found" && "We couldn't find your order."}
                {errorType === "network" && "Tracking Temporarily Unavailable."}
              </h3>

              <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed mb-6 max-w-md mx-auto">
                {errorType === "not_found" &&
                  "Check that you've entered the same mobile number used when placing your order and the correct Order ID or AWB number."}
                {errorType === "network" &&
                  "Our logistics server is currently undergoing scheduled maintenance. Please try again in a few minutes."}
                {(errorType === "invalid_mobile" || errorType === "invalid_order") &&
                  "Ensure all input fields match your order receipt."}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleTryAgain}
                  className="w-full sm:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
                >
                  TRY AGAIN
                </button>
                <button
                  onClick={handleContactSupport}
                  className="w-full sm:w-auto bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#0F172A] px-6 py-3 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  CONTACT SUPPORT <ArrowRight className="w-3.5 h-3.5 text-[#2BC48A]" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


        {/* ============================================================ */}
        {/* 02 — ORDER STATUS & TIMELINE (WHEN RESULT FOUND) */}
        {/* ============================================================ */}
        <AnimatePresence>
          {trackingResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-16 bg-white rounded-3xl p-6 sm:p-12 border border-[#E2E8F0] shadow-sm space-y-10"
            >
              
              {/* Status Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#F1F5F9]">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2BC48A] bg-[#E5F7F0] px-3.5 py-1 rounded-full mb-3">
                    <Truck className="w-3.5 h-3.5" /> Your order is on the way
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A]">
                    Order ID: <span className="text-[#2BC48A]">{trackingResult.orderId}</span>
                  </h2>
                </div>

                <div className="bg-[#F8FAFB] border border-[#E2E8F0] rounded-2xl p-4 md:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B] block">
                    ESTIMATED DELIVERY
                  </span>
                  <span className="text-lg font-black text-[#0F172A]">
                    {trackingResult.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Delivery Progress Visual Stage Timeline */}
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#64748B] mb-8">
                  DELIVERY PROGRESS
                </h3>

                {/* Horizontal Timeline on Desktop */}
                <div className="hidden md:grid grid-cols-5 gap-4 relative">
                  {steps.map((st, idx) => {
                    const isCompleted = idx <= trackingResult.currentStage;
                    const isCurrent = idx === trackingResult.currentStage;

                    return (
                      <div key={idx} className="relative flex flex-col items-center text-center group">
                        
                        {/* Connecting Line */}
                        {idx < steps.length - 1 && (
                          <div
                            className={`absolute top-5 left-1/2 w-full h-1 -z-0 transition-colors ${
                              idx < trackingResult.currentStage ? "bg-[#2BC48A]" : "bg-[#E2E8F0]"
                            }`}
                          />
                        )}

                        {/* Stage Icon Circle */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs relative z-10 transition-all ${
                            isCompleted
                              ? "bg-[#2BC48A] text-white shadow-md shadow-[#2BC48A]/30"
                              : "bg-[#F1F5F9] text-[#94A3B8] border border-[#E2E8F0]"
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : idx + 1}
                        </div>

                        {/* Stage Label */}
                        <h4
                          className={`text-xs font-bold mt-3 ${
                            isCurrent ? "text-[#2BC48A]" : isCompleted ? "text-[#0F172A]" : "text-[#94A3B8]"
                          }`}
                        >
                          {st.title}
                        </h4>

                        <p className="text-[10px] text-[#64748B] font-medium leading-tight mt-1 max-w-[120px]">
                          {st.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Vertical Timeline on Mobile */}
                <div className="md:hidden space-y-6 relative pl-6 border-l-2 border-[#E2E8F0] ml-2">
                  {steps.map((st, idx) => {
                    const isCompleted = idx <= trackingResult.currentStage;
                    const isCurrent = idx === trackingResult.currentStage;

                    return (
                      <div key={idx} className="relative pl-4">
                        <div
                          className={`absolute -left-[31px] top-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            isCompleted
                              ? "bg-[#2BC48A] text-white"
                              : "bg-[#F1F5F9] text-[#94A3B8] border border-[#E2E8F0]"
                          }`}
                        >
                          {isCompleted ? "✓" : idx + 1}
                        </div>
                        <h4
                          className={`text-xs font-bold ${
                            isCurrent ? "text-[#2BC48A]" : isCompleted ? "text-[#0F172A]" : "text-[#94A3B8]"
                          }`}
                        >
                          {st.title}
                        </h4>
                        <p className="text-[11px] text-[#64748B] font-medium mt-0.5">{st.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Logistics Breakdown Table & External Link */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#F8FAFB] p-6 rounded-2xl border border-[#E2E8F0]">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                    COURIER PARTNER
                  </span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">
                    {trackingResult.courierPartner}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                    AWB NUMBER
                  </span>
                  <span className="text-xs font-mono font-bold text-[#0F172A] mt-1 block">
                    {trackingResult.awbNumber}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                    DISPATCH DATE
                  </span>
                  <span className="text-xs font-bold text-[#0F172A] mt-1 block">
                    {trackingResult.shippedDate}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#94A3B8] block">
                    LATEST LOCATION
                  </span>
                  <span className="text-xs font-bold text-[#2BC48A] mt-1 block flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {trackingResult.latestLocation}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href="https://www.bluedart.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  TRACK WITH COURIER <ExternalLink className="w-3.5 h-3.5 text-[#2BC48A]" />
                </a>

                <button
                  onClick={() => setTrackingResult(null)}
                  className="text-xs font-bold text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
                >
                  Track Another Order
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>


        {/* ============================================================ */}
        {/* 04 — WHERE DO I FIND MY ORDER ID? (3-STEP VISUAL) */}
        {/* ============================================================ */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A]">
              QUICK GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
              Where can I find my Order ID?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 01 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-[#2BC48A] tracking-widest uppercase block mb-1">
                STEP 01
              </span>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">CHECK YOUR EMAIL</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Look for your GOQii order confirmation email sent immediately after purchase.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-[#3B82F6] tracking-widest uppercase block mb-1">
                STEP 02
              </span>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">CHECK YOUR SMS</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Your order confirmation SMS contains your 8-digit Order ID and dispatch details.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-black text-[#8B5CF6] tracking-widest uppercase block mb-1">
                STEP 03
              </span>
              <h3 className="text-base font-semibold text-[#0F172A] mb-2">CHECK YOUR GOQii ACCOUNT</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                View your active orders list under Profile → Orders inside the GOQii App.
              </p>
            </div>

          </div>
        </div>


        {/* ============================================================ */}
        {/* 05 — NEED HELP? (SUPPORT LINKS) */}
        {/* ============================================================ */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/10 px-3.5 py-1 rounded-full inline-block mb-3">
              ASSISTANCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Need help with your order?</h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-md">
              Find answers about delivery timelines, warranty replacements and product setup.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNavigateTo("faqs")}
              className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-5 py-3 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              Help &amp; FAQs
            </button>

            <button
              onClick={() => handleNavigateTo("warranty")}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full text-xs font-bold border border-white/20 transition-all cursor-pointer"
            >
              Warranty
            </button>

            <button
              onClick={handleContactSupport}
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full text-xs font-bold border border-white/20 transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
