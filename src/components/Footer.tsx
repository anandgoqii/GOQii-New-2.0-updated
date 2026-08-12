import React from "react";
import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (targetId === "section-about") {
        if (window.navigateToPage) {
          window.navigateToPage("about");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-xprize" || targetId === "sanjeevini") {
        if (window.navigateToPage) {
          window.navigateToPage("sanjeevini");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      
      if (targetId === "section-trust-center-page") {
        if (window.navigateToPage) {
          window.navigateToPage("trust");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      
      if (targetId === "section-privacy-policy-page") {
        if (window.navigateToPage) {
          window.navigateToPage("privacy");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      
      if (targetId === "section-terms-of-service-page") {
        if (window.navigateToPage) {
          window.navigateToPage("terms");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      
      if (targetId === "section-careers-page") {
        if (window.navigateToPage) {
          window.navigateToPage("careers");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-faq-page" || targetId === "faqs" || targetId === "support") {
        if (window.navigateToPage) {
          window.navigateToPage("faqs");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-warranty-page" || targetId === "warranty" || targetId === "claim-warranty") {
        if (window.navigateToPage) {
          window.navigateToPage("warranty");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-smart-science" || targetId === "smart-science" || targetId === "science") {
        if (window.navigateToPage) {
          window.navigateToPage("smart-science");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-trackingorder-page" || targetId === "trackingorder" || targetId === "track-order" || targetId === "trackorder") {
        if (window.navigateToPage) {
          window.navigateToPage("trackingorder");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      if (targetId === "section-plans" || targetId === "plans") {
        if (window.navigateToPage) {
          window.navigateToPage("plans");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }
      
      if (window.navigateToPage) {
        window.navigateToPage("home");
      }
      
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 100;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 50);
    }
  };

  const footerLinks = {
    personal: {
      title: "PERSONAL SOLUTIONS",
      links: [
        { label: "Personal Care", href: "https://consult.goqii.com/" },
        { label: "Insure Plus", href: "https://store.goqii.com/goqii-insureplus" },
        { label: "SuperLife", href: "https://goqii.com/superlife/" },
        { label: "SmartRx", href: "https://smartrx.goqii.com/" },
        { label: "NutriGenius", href: "https://goqii.com/nutrigenius" },
      ]
    },
    enterprise: {
      title: "ENTERPRISE",
      links: [
        { label: "HealthEngage", href: "https://goqii.com/healthengage" },
        { label: "For Insurance", href: "https://goqii.com/healthengage-insurance" },
        { label: "For Pharma", href: "https://goqii.com/healthengage-pharma" },
        { label: "For Health Care Providers", href: "https://go-qii-connected-care-7c49.vercel.app/" },
        { label: "For Corporate", href: "https://goqii.com/healthengage-corporate" },
      ]
    },
    innovation: {
      title: "INNOVATION",
      links: [
        { label: "Sanjeevini", href: "https://goqii.com/sanjeevini" },
        { label: "UHT", href: "https://uht.goqii.com/homepage" },
      ]
    },
    resources: {
      title: "RESOURCES",
      links: [
        { label: "India Fit Report", href: "https://www.indiafit.org/" },
        { label: "Blog", href: "https://goqii.com/blog/" },
      ]
    },
    company: {
      title: "COMPANY",
      links: [
        { label: "About Us", href: "#section-about" },
        { label: "Careers", href: "#section-careers-page" },
        { label: "Contact Us", href: "#section-final" },
      ]
    },
    support: {
      title: "SUPPORT",
      links: [
        { label: "FAQs", href: "#section-faq-page" },
        { label: "Track Order", href: "#section-trackingorder-page" },
        { label: "Warranty", href: "#section-warranty-page" },
      ]
    }
  };

  const legalLinks = [
    { label: "Privacy Policy", href: "#section-privacy-policy-page" },
    { label: "Terms of Service", href: "#section-terms-of-service-page" },
    { label: "Trust Center", href: "#section-trust-center-page" },
  ];

  return (
    <footer className="relative w-full bg-white border-t border-[#E8EDF2] py-14 sm:py-20 px-6 md:px-12 lg:px-16 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section: 6 Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-8 mb-16 sm:mb-20">
          
          {Object.entries(footerLinks).map(([key, group]) => (
            <div key={key} className="flex flex-col">
              <h3 className="text-[11px] sm:text-xs font-black tracking-[0.16em] text-[#0F172A] uppercase mb-4 sm:mb-5">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs sm:text-sm font-medium text-[#64748B] hover:text-[#2BC48A] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-[#F1F5F9] mb-10" />

        {/* Branding Tagline & Social Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 mb-10">
          
          {/* Logo & Vision Tagline */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 max-w-2xl">
            {/* Official GOQii logo image */}
            <div className="flex items-center gap-2.5 shrink-0">
              <img
                src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
                alt="GOQii Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-sm sm:text-[15px] font-medium text-[#64748B] leading-relaxed">
              Transforming healthcare from reactive treatment to continuous, intelligent prevention.
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

        {/* Legal Bar */}
        <div className="pt-6 border-t border-[#F1F5F9] flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs font-medium text-[#64748B]">
          
          {/* Legal Links */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#0F172A] uppercase tracking-wider text-[10px] hidden sm:inline">Legal:</span>
            <div className="flex items-center gap-3">
              {legalLinks.map((link, idx) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-[#2BC48A] transition-colors"
                  >
                    {link.label}
                  </a>
                  {idx < legalLinks.length - 1 && <span className="text-[#CBD5E1]">|</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-8 text-[11px] font-medium text-[#94A3B8]">
          © {currentYear} GOQii Technologies Private Limited. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
