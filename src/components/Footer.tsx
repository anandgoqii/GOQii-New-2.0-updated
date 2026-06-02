import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    consumer: {
      title: "CONSUMER",
      links: [
        { label: "SuperLife", href: "#section-about" },
        { label: "Personal Care", href: "#section-solution" },
        { label: "SmartRx", href: "#section-xprize" },
        { label: "Wearables", href: "#section-ecosystem" },
      ]
    },
    enterprise: {
      title: "ENTERPRISE",
      links: [
        { label: "For Business", href: "#section-ecosystem" },
        { label: "Insurance", href: "#section-gap" },
        { label: "Pharma", href: "#section-aliveos" },
        { label: "Corporate", href: "#section-ecosystem" },
        { label: "Hospital", href: "#section-trust" },
      ]
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#section-about" },
        { label: "Contact Us", href: "#section-final" },
        { label: "Leadership", href: "#section-leadership" },
        { label: "Careers", href: "#section-final" },
        { label: "Investors", href: "#section-about" },
        { label: "Partners", href: "#section-trust" },
      ]
    },
    trustLegal: {
      title: "TRUST & LEGAL",
      links: [
        { label: "Trust Center", href: "#section-trust" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
      ]
    }
  };

  return (
    <footer className="relative w-full bg-white border-t border-[#E8EDF2] py-14 sm:py-20 px-6 md:px-12 lg:px-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section: Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-16 sm:mb-20">
          
          {/* Column 1: Consumer */}
          <div className="flex flex-col">
            <h3 className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0F172A] uppercase mb-5 sm:mb-6">
              {footerLinks.consumer.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.consumer.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-[#64748B] hover:text-[#2BC48A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Enterprise */}
          <div className="flex flex-col">
            <h3 className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0F172A] uppercase mb-5 sm:mb-6">
              {footerLinks.enterprise.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.enterprise.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-[#64748B] hover:text-[#2BC48A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h3 className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0F172A] uppercase mb-5 sm:mb-6">
              {footerLinks.company.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.company.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-[#64748B] hover:text-[#2BC48A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Trust & Legal */}
          <div className="flex flex-col">
            <h3 className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0F172A] uppercase mb-5 sm:mb-6">
              {footerLinks.trustLegal.title}
            </h3>
            <ul className="flex flex-col gap-3.5">
              {footerLinks.trustLegal.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-[15px] font-medium text-[#64748B] hover:text-[#2BC48A] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#F1F5F9] mb-8" />

        {/* Bottom Section: Branding & Social Icons */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          
          {/* Logo & Vision Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 max-w-2xl">
            {/* GOQii 2x2 grid logo with text side by side as requested */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="grid grid-cols-2 gap-[2px] w-6.5 h-6.5 rounded overflow-hidden shrink-0">
                <div className="bg-[#EE5D26]" />
                <div className="bg-[#E11A22]" />
                <div className="bg-[#48B147]" />
                <div className="bg-[#008CC9]" />
              </div>
              <span className="font-black text-[#0F172A] text-2xl tracking-tighter col-span-2 leading-none">
                GOQii
              </span>
            </div>
            
            <p className="text-sm sm:text-[15px] font-medium text-[#64748B] leading-relaxed">
              Transforming healthcare from reactive treatment to continuous, AI-driven prevention.
            </p>
          </div>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-3">
            {/* X / Twitter Custom Icon */}
            <a
              href="https://x.com/goqii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F8FAFB] hover:bg-[#F1F5F9] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#0F172A] transition-all duration-200"
              title="X (Twitter)"
            >
              <span className="font-black text-[13px] tracking-tighter">X</span>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com/goqii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F8FAFB] hover:bg-[#F1F5F9] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#1877F2] transition-all duration-200"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/goqii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F8FAFB] hover:bg-[#F1F5F9] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#E4405F] transition-all duration-200"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/goqii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F8FAFB] hover:bg-[#F1F5F9] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#0077B5] transition-all duration-200"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/goqii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#F8FAFB] hover:bg-[#F1F5F9] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-[#FF0000] transition-all duration-200"
              title="YouTube"
            >
              <Youtube className="w-4 h-4 animate-none" />
            </a>

            {/* Quick Scroll Back To Top */}
            <button
              onClick={handleScrollToTop}
              className="w-10 h-10 rounded-full bg-[#FAFBFB] hover:bg-[#2BC48A] border border-[#E8EDF2] flex items-center justify-center text-[#64748B] hover:text-white transition-all duration-300 ml-4 cursor-pointer group"
              title="Scroll up to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Mini tiny footer copyright line */}
        <div className="mt-10 pt-4 flex flex-col sm:flex-row sm:justify-between gap-4 border-t border-[#F1F5F9]/60 text-[11px] font-medium text-[#94A3B8]">
          <span>&copy; {currentYear} GOQii Technologies Private Limited. All rights reserved.</span>
          <span>Health IoT &amp; Preventive Smart Coaching Integrated System</span>
        </div>

      </div>
    </footer>
  );
}
