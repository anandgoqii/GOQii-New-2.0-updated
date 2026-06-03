import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Moon, Sun, ArrowRight, CheckCircle2, User, Mail, Building2, Users } from "lucide-react";

interface MenuItem {
  label: string;
  key: string;
  targetId?: string;
  dropdownItems?: { label: string; desc: string; targetId?: string; href?: string }[];
}

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-100",
    goal: "Corporate Wellness"
  });

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

  // Initialize Dark Mode based on preference or local state
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark") || localStorage.getItem("theme") === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

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
        { label: "Insurance Plus", desc: "Active lifestyle rewards teamed with wellness policy upgrades.", targetId: "section-gap", href: "https://store.goqii.com/goqii-insureplus" },
        { label: "Longevity", desc: "Comprehensive cellular health biomarkers, DNA analytics, and ALIVE O.S.", targetId: "section-about", href: "https://goqii.com/superlife/" },
        { label: "Nutriforge", desc: "Custom diagnostics & precise nutrient-tracking integration loops.", targetId: "section-ecosystem", href: "https://goqii.com/nutrigenius" }
      ]
    },
    { label: "Sanjeevini", key: "sanjeevini", targetId: "section-xprize" },
    { label: "Plans", key: "plans", targetId: "section-aliveos" },
    { label: "Contact", key: "contact", targetId: "section-final" }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      // Sinks temporary local submit simulation state
    }, 2000);
  };

  const resetDemoModal = () => {
    setDemoModalOpen(false);
    // Extra timeout to prevent jarring visual flash
    setTimeout(() => {
      setDemoSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        teamSize: "10-100",
        goal: "Corporate Wellness"
      });
    }, 300);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 md:px-6 md:py-5">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -110, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-7xl border transition-all duration-300 rounded-full flex items-center justify-between px-6 md:px-8 py-2.5 md:py-3 select-none ${
            scrollProgress > 30
              ? "bg-[#FFFFFF]/95 dark:bg-[#0B1220]/95 backdrop-blur-md border-[#E2E8F0] dark:border-[#1E293B] shadow-[0_16px_36px_rgba(15,23,42,0.08)] dark:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
              : "bg-white/90 dark:bg-[#0B1220]/90 border-[#E8EDF2] dark:border-[#1E293B] shadow-[0_8px_16px_rgba(15,23,42,0.03)]"
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
              return (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.key)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <button
                    onClick={() => item.targetId && handleScrollTo(item.targetId)}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-[13px] font-semibold text-[#475467] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all duration-200 cursor-pointer"
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${
                          activeDropdown === item.key ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

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
                {menuItems.map((item) => (
                  <div key={item.key} className="space-y-1">
                    <button
                      onClick={() => item.targetId && handleScrollTo(item.targetId)}
                      className="w-full text-left px-4 py-3 rounded-xl font-bold text-slate-800 dark:text-slate-100 text-base hover:bg-slate-50 dark:hover:bg-slate-900/50 flex justify-between items-center cursor-pointer"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>

                    {item.dropdownItems && (
                      <div className="pl-6 border-l-2 border-slate-100 dark:border-slate-850 space-y-1">
                        {item.dropdownItems.map((drop) => {
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
                ))}
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

      {/* Interactive Request a Demo Modal Dialog */}
      <AnimatePresence>
        {demoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Glass Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={resetDemoModal}
            />

            {/* Modal Panel Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-lg bg-white dark:bg-[#0B1220] border border-slate-100 dark:border-slate-800 shadow-[0_24px_60px_rgba(15,23,42,0.15)] rounded-3xl p-6 md:p-8 z-10 text-left overflow-hidden"
            >
              {/* Close Button corner */}
              <button
                onClick={resetDemoModal}
                className="absolute top-5 right-5 p-1.5 rounded-full border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Form Content or Successful Confirmation State */}
              <AnimatePresence mode="wait">
                {!demoSubmitted ? (
                  <motion.div
                    key="demo-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="inline-block bg-[#E5F7F0] dark:bg-[#073C27] text-[#21C083] font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full mb-3">
                        Interactive Platform Demo
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                        Request Ecosystem Demo
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 font-medium leading-relaxed">
                        Schedule a continuous walkthrough of the ALIVE O.S., smart biomarker trackers, and employee health integrations with our experts.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* Name Row */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                          Full Name
                        </label>
                        <div className="relative flex items-center">
                          <User className="absolute left-4 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            placeholder="e.g. Dr. Sarah Connor"
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-[#21C083] dark:focus:border-[#21C083] dark:text-white text-slate-800 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Email Row */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                          Business Email
                        </label>
                        <div className="relative flex items-center">
                          <Mail className="absolute left-4 w-4 h-4 text-slate-400" />
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="sconnor@medical.org"
                            className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-[#21C083] dark:focus:border-[#21C083] dark:text-white text-slate-800 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Company Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                            Company / Network
                          </label>
                          <div className="relative flex items-center">
                            <Building2 className="absolute left-4 w-4 h-4 text-slate-400" />
                            <input
                              required
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleFormChange}
                              placeholder="GOQii Health Inc"
                              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-[#21C083] dark:focus:border-[#21C083] dark:text-white text-slate-800 transition-colors"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                            Team Size
                          </label>
                          <div className="relative flex items-center">
                            <Users className="absolute left-4 w-4 h-4 text-slate-400" />
                            <select
                              name="teamSize"
                              value={formData.teamSize}
                              onChange={handleFormChange}
                              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-[#21C083] dark:focus:border-[#21C083] dark:text-white text-slate-800 transition-colors appearance-none cursor-pointer"
                            >
                              <option value="1-10">1 - 10 members</option>
                              <option value="10-100">10 - 100 members</option>
                              <option value="100-500">100 - 500 members</option>
                              <option value="500+">500+ members</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Dropdown goal */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider">
                          Primary Integration Goal
                        </label>
                        <select
                          name="goal"
                          value={formData.goal}
                          onChange={handleFormChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 focus:outline-none focus:border-[#21C083] dark:focus:border-[#21C083] dark:text-white text-slate-800 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Corporate Wellness">Employee Wellness & Insurance Savings</option>
                          <option value="Clinical Biomarkers">Clinical Trials & Biomarker Intelligence</option>
                          <option value="Personal Coaching Partner">Whitelabel Coaching Integration</option>
                          <option value="Other">General Strategic Exploration</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#21C083] to-[#00ADC7] hover:shadow-lg hover:shadow-emerald-500/15 text-white text-sm font-extrabold uppercase mt-4 transition-all duration-300 cursor-pointer"
                      >
                        Submit Request Info
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="demo-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-8 space-y-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 150, damping: 10 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-[#21C083]" />
                    </motion.div>

                    <div className="space-y-2">
                      <h4 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                        Demo Request Received!
                      </h4>
                      <p className="text-[#667085] dark:text-slate-400 text-xs leading-relaxed max-w-sm">
                        Thank you, <span className="font-bold text-slate-800 dark:text-white">{formData.name}</span>! Our health solutions architect has sent a confirmation email to <span className="font-bold text-slate-800 dark:text-white">{formData.email}</span>.
                      </p>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl w-full text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed text-left font-semibold">
                      📋 Your summary:<br />
                      - Company: <span className="text-slate-700 dark:text-slate-200">{formData.company}</span><br />
                      - Goal: <span className="text-slate-700 dark:text-slate-200">{formData.goal}</span>
                    </div>

                    <button
                      onClick={resetDemoModal}
                      className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all cursor-pointer"
                    >
                      Back to Experience
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
