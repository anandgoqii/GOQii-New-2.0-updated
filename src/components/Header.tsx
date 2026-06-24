import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight, CheckCircle2, User, Mail, Building2, Users } from "lucide-react";
import BookDemoModal from "./BookDemoModal";

interface MenuItem {
  label: string;
  key: string;
  targetId?: string;
  href?: string;
  dropdownItems?: { label: string; desc: string; targetId?: string; href?: string }[];
}

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Track scroll for floating navbar animations and scroll direction (hide on scroll down, show on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Do nothing if dialog/menu is open to avoid keyboard or interaction shifts triggering hiding
      if (mobileMenuOpen || activeDropdown || demoModalOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      // Always show at the top of the page
      if (currentScrollY < 20) {
        setIsVisible(true);
      } else {
        // Scroll down threshold of 5px to avoid sensitive mouse jitter
        if (currentScrollY > lastScrollY.current + 8) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current - 8) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
      setScrollProgress(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen, activeDropdown, demoModalOpen]);

  // Ensure the application renders with its intended, elegant light style.
  // Explicitly remove dark-theme class on mount to prevent shared localStorage/session conflicts.
  useEffect(() => {
    try {
      document.documentElement.classList.remove("dark");
    } catch (e) {
      console.warn("Failed to modify document classList:", e);
    }
    try {
      localStorage.removeItem("theme"); // Clear any potentially conflicting shared localStorage theme key
    } catch (e) {
      console.warn("localStorage is not available within sandbox context:", e);
    }
    setDarkMode(false);
  }, []);

  const handleScrollTo = (targetId: string) => {
    // Intercept the About Us category to switch to the standalone stateful page
    if (targetId === "section-about") {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
      if (window.navigateToPage) {
        window.navigateToPage("about");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Intercept the Sanjeevini category to switch to the standalone stateful page
    if (targetId === "section-xprize") {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
      if (window.navigateToPage) {
        window.navigateToPage("sanjeevini");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    // Switch back to home if scrolling to other sections
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }

    // Give state transition a micro-tick to mount elements so we can scroll
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        // Offset for floating navigation panel
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 100;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 50);
  };

  const menuItems: MenuItem[] = [
    { label: "About Us", key: "about", targetId: "section-about" },
    {
      label: "Enterprise Solutions",
      key: "enterprise",
      targetId: "section-ecosystem",
      dropdownItems: [
        { label: "HealthEngage Platform", desc: "Advanced B2B digital health & lifestyle coaching platform.", targetId: "section-ecosystem", href: "https://goqii.com/healthengage" },
        { label: "For Insurance", desc: "Intelligent health risk scoring & premium reduction programs.", targetId: "section-gap", href: "https://goqii.com/healthengage-insurance" },
        { label: "For Pharma", desc: "Real-world evidence collection & clinical trial diagnostics.", targetId: "section-aliveos", href: "https://goqii.com/healthengage-pharma" },
        { label: "For Hospital", desc: "Post-discharge continuous monitoring & outpatient integration.", targetId: "section-trust", href: "https://go-qii-connected-care-7c49.vercel.app/" },
        { label: "For Corporate", desc: "Scale executive health parameters & reduce employee absenteeism.", targetId: "section-ecosystem", href: "https://goqii.com/healthengage-corporate" }
      ]
    },
    {
      label: "Personal Solutions",
      key: "personal",
      targetId: "section-solution",
      dropdownItems: [
        { label: "Personal Care", desc: "1-on-1 certified human coaching tailored for preventative vitality.", targetId: "section-solution", href: "https://consult.goqii.com/" },
        { label: "Chronic Care", desc: "Intelligent symptom tracking, clinical logs, and expert compliance.", targetId: "section-solution" },
        { label: "Insure Plus", desc: "Active lifestyle rewards teamed with wellness policy upgrades.", targetId: "section-gap", href: "https://store.goqii.com/goqii-insureplus" },
        { label: "Longevity", desc: "Comprehensive cellular health biomarkers, DNA analytics, and ALIVE O.S.", targetId: "section-about", href: "https://goqii.com/superlife/" },
        { label: "Nutriforge", desc: "Custom diagnostics & precise nutrient-tracking integration loops.", targetId: "section-ecosystem", href: "https://goqii.com/nutrigenius" }
      ]
    },
    { label: "Sanjeevini", key: "sanjeevini", targetId: "section-xprize" },
    { label: "Plans", key: "plans", href: "https://go-qii-global-plans.vercel.app/" },
    { label: "Contact", key: "contact", targetId: "section-final" }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:px-6 md:py-5">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -110, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-7xl border border-slate-200/50 transition-all duration-300 rounded-full flex items-center justify-between px-6 md:px-8 py-2.5 md:py-3 select-none ${
            scrollProgress > 30
              ? "bg-white/95 backdrop-blur-md shadow-[0_16px_36px_rgba(15,23,42,0.08)]"
              : "bg-white/90 shadow-[0_8px_16px_rgba(15,23,42,0.03)]"
          }`}
        >
          {/* Logo Brand Side */}
          <div
            onClick={() => handleScrollTo("hero-section")}
            className="flex items-center cursor-pointer group shrink-0"
          >
            <img
              src="https://appcdn.goqii.com/storeimg/36455_1779860387.png"
              alt="GOQii Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Link Menu items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const hasDropdown = !!item.dropdownItems;
              const isExternal = !!item.href;
              const Element = isExternal ? "a" : "button";
              const extraProps = isExternal
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : { onClick: () => item.targetId && handleScrollTo(item.targetId) };

              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Element
                    {...extraProps}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-semibold text-[#475467] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer block"
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Element>

                  {/* Dropdown Card */}
                  <AnimatePresence>
                    {hasDropdown && activeDropdown === item.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-1 w-80 bg-white dark:bg-[#0B1220] border border-slate-100 dark:border-slate-850 shadow-[0_16px_36px_rgba(15,23,42,0.1)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.5)] rounded-2xl p-3 z-50 pointer-events-auto"
                      >
                        <div className="space-y-1">
                          {item.dropdownItems?.map((drop) => {
                            const isExternal = !!drop.href;
                            const Element = isExternal ? "a" : "button";
                            const extraProps = isExternal
                              ? { href: drop.href, target: "_blank", rel: "noopener noreferrer" }
                              : { onClick: () => drop.targetId && handleScrollTo(drop.targetId) };

                            return (
                              <Element
                                key={drop.label}
                                {...extraProps}
                                className="w-full text-left p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex flex-col gap-0.5 cursor-pointer block"
                              >
                                <span className="text-[12.5px] font-bold text-slate-800 dark:text-slate-100 flex items-center justify-between group">
                                  {drop.label}
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                </span>
                                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                  {drop.desc}
                                </span>
                              </Element>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Right Control Handlers */}
          <div className="flex items-center gap-3">
            {/* Request Demo Premium Gradient Pill */}
            <button
              onClick={() => setDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13px] font-bold text-white bg-gradient-to-r from-[#21C083] to-[#00ADC7] hover:shadow-[0_12px_24px_rgba(33,192,131,0.25)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Request a Demo
            </button>

            {/* Mobile Hamburger toggle button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full border border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden flex flex-col justify-end"
          >
            {/* Click backdrop to exit */}
            <div className="absolute inset-0" onClick={() => setMobileMenuOpen(false)} />

            {/* Drawer panel content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="relative w-full bg-white dark:bg-[#0B1220] rounded-t-[32px] border-t border-slate-100 dark:border-slate-800 p-6 flex flex-col max-h-[85vh] overflow-y-auto"
            >
              <div className="w-12 h-1 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-6 shrink-0" />

              <div className="space-y-3 pb-6 flex-grow">
                {menuItems.map((item) => {
                  const hasDropdown = !!item.dropdownItems;
                  const isExternal = !!item.href;
                  const isExpanded = expandedMobileItem === item.key;
                  const Element = isExternal ? "a" : "button";
                  
                  const extraProps = isExternal
                    ? { href: item.href, target: "_blank", rel: "noopener noreferrer", onClick: () => setMobileMenuOpen(false) }
                    : hasDropdown
                    ? { onClick: () => setExpandedMobileItem(isExpanded ? null : item.key) }
                    : { onClick: () => item.targetId && handleScrollTo(item.targetId) };

                  return (
                    <div key={item.key} className="space-y-1">
                      <Element
                        {...extraProps}
                        className="w-full text-left px-4 py-3 rounded-xl font-bold text-slate-800 dark:text-slate-100 text-base hover:bg-slate-50 dark:hover:bg-slate-900/50 flex justify-between items-center cursor-pointer block"
                      >
                        {item.label}
                        {hasDropdown ? (
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? "rotate-180 text-[#2BC48A]" : ""}`} />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-slate-400" />
                        )}
                      </Element>

                    {hasDropdown && isExpanded && (
                      <div className="pl-6 border-l-2 border-slate-100 dark:border-slate-800 space-y-1 mt-1">
                        {/* Option to navigate to parent section overview directly */}
                        {item.targetId && (
                          <button
                            onClick={() => item.targetId && handleScrollTo(item.targetId)}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-[#2BC48A] hover:bg-slate-50 dark:hover:bg-slate-900/40 cursor-pointer block"
                          >
                            Overview →
                          </button>
                        )}
                        {item.dropdownItems?.map((drop) => {
                          const isExternal = !!drop.href;
                          const Element = isExternal ? "a" : "button";
                          const extraProps = isExternal
                            ? { href: drop.href, target: "_blank", rel: "noopener noreferrer", onClick: () => setMobileMenuOpen(false) }
                            : { onClick: () => drop.targetId && handleScrollTo(drop.targetId) };

                          return (
                            <Element
                              key={drop.label}
                              {...extraProps}
                              className="w-full text-left px-3 py-2 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 cursor-pointer block"
                            >
                              {drop.label}
                            </Element>
                          );
                        })}
                      </div>
                    )}
                    </div>
                  );
                })}
              </div>

              {/* Mobile Request a Demo Action */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-850 shrink-0">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDemoModalOpen(true);
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#21C083] to-[#00ADC7] text-white font-extrabold text-sm shadow-md tracking-wider uppercase transition-transform"
                >
                  Request a Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookDemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
