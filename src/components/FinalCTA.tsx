import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Particles from "./Particles";
import ContactUsModal from "./ContactUsModal";

export default function FinalCTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <section id="section-final" className="relative w-full bg-[#0F172A] py-16 px-6 overflow-hidden border-t border-slate-800">
      {/* Background Particles Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Particles count={25} color="bg-[#2BC48A]" speedMultiplier={0.4} />
      </div>

      {/* Decorative Radial Glowing Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-4">
          Ready to make <span className="text-[#2BC48A]">health continuous?</span>
        </h2>
        
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-300 font-medium leading-relaxed mb-8">
          Discover how GOQii helps individuals, employers, insurers, and providers turn health data into meaningful action.
        </p>

        <button
          onClick={() => setIsContactOpen(true)}
          className="px-10 py-4.5 bg-[#2BC48A] hover:bg-emerald-400 text-[#0F172A] font-extrabold text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all hover:scale-[1.03] shadow-[0_10px_25px_rgba(43,196,138,0.30)] flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Contact Us</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* ================= MODAL: CONTACT US ================= */}
      <ContactUsModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </section>
  );
}
