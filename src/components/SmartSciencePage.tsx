import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  Heart,
  Moon,
  Zap,
  Shield,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Lock,
  Cpu,
  Smartphone,
  Users,
  Award,
  Sparkles,
  ChevronRight,
  RefreshCw,
  Sun,
  Layers,
  Radio,
  Sliders,
  Eye,
  SlidersHorizontal,
  Flame,
  Info
} from "lucide-react";

export default function SmartSciencePage() {
  const [activeSignal, setActiveSignal] = useState<string>("heart");
  const [activePpgStep, setActivePpgStep] = useState<number>(0);
  const [ppgWavelengthMode, setPpgWavelengthMode] = useState<"green" | "infrared">("green");

  const scrollToNext = () => {
    const el = document.getElementById("wrist-signals");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const signalsData = {
    heart: {
      title: "Heart Rate",
      subtitle: "Continuous & Resting Pulse Trends",
      description: "Optical PPG sensors measure volumetric changes in microvascular blood circulation to provide baseline and active heart rate trends.",
      badge: "Continuous PPG Optical Sensing",
      icon: Heart,
      color: "#EF4444",
      stat: "24/7 Monitoring"
    },
    spo2: {
      title: "SpO₂ (Blood Oxygen)",
      subtitle: "Peripheral Oxygen Saturation",
      description: "Dual wavelength red and infrared light sensors evaluate hemoglobin oxygen absorption during resting periods and sleep.",
      badge: "Dual-Wavelength Absorption",
      icon: Activity,
      color: "#3B82F6",
      stat: "Spot Check & Sleep Assessment"
    },
    activity: {
      title: "Activity & Movement",
      subtitle: "3-Axis Precision Motion Engine",
      description: "High-frequency tri-axial accelerometers track step counts, active duration, exercise intensity, and movement dynamics.",
      badge: "Tri-Axial Accelerometer",
      icon: Zap,
      color: "#2BC48A",
      stat: "Active Calories & Distance"
    },
    sleep: {
      title: "Sleep Architecture",
      subtitle: "Resting Micro-movements & HR Variability",
      description: "Combines wrist actigraphy and pulse variation to map deep, light, and REM sleep cycles without intrusive headgear.",
      badge: "Actigraphy & Pulse Variance",
      icon: Moon,
      color: "#8B5CF6",
      stat: "Stage Duration & Rest Quality"
    },
    calories: {
      title: "Energy Expenditure",
      subtitle: "BMR & Active Metabolic Rate",
      description: "Algorithms fuse biometric data with personal age, weight, and heart rate intensity to compute daily calorie expenditure.",
      badge: "Metabolic Modeling",
      icon: Sparkles,
      color: "#F59E0B",
      stat: "Basal + Active Caloric Burn"
    }
  };

  const ppgStepsData = [
    {
      id: "emitter",
      title: "LED Light Emission",
      shortDesc: "Multi-wavelength LED diodes emit controlled optical pulses into cutaneous tissue.",
      fullDesc: "GOQii PPG sensor modules house high-efficiency green (525nm), red (660nm), and infrared (940nm) surface-mount LEDs. When powered, they project narrow-band photons through the optical window into outer dermal layers.",
      techSpecs: "Wavelength: 525nm (Green) / 940nm (IR) • Pulse Frequency: 250Hz - 1kHz • Peak Output: <5mW",
      icon: Sparkles,
      color: "#2BC48A",
      tag: "OPTICAL EMITTER"
    },
    {
      id: "penetration",
      title: "Tissue & Skin Penetration",
      shortDesc: "Photons travel through epidermal layers to illuminate microvascular capillaries.",
      fullDesc: "Green light penetrates 1–2mm into the dermis where superficial microvascular beds reside. Red and infrared light penetrate deeper (3–5mm) into arteriolar networks, enabling differential oxygen saturation analysis.",
      techSpecs: "Cutaneous Depth: 1.5mm - 4.0mm • Scattering Coefficient: High • Absorption Peak: Hemoglobin",
      icon: Layers,
      color: "#3B82F6",
      tag: "CUTANEOUS DEPTH"
    },
    {
      id: "expansion",
      title: "Arterial Vessel Pulse",
      shortDesc: "Systolic heart beats expand arterial volume, increasing light absorption.",
      fullDesc: "With each ventricular heartbeat, a pressure wave propels oxygenated blood into peripheral arteries. The temporary expansion of blood volume increases light absorption, reducing reflected light intensity.",
      techSpecs: "Pulsatile Component: AC Waveform • DC Offset: Static Tissue & Bone • Volumetric Expansion: ~1-2%",
      icon: Heart,
      color: "#EF4444",
      tag: "SYSTOLIC EXPANSION"
    },
    {
      id: "scattering",
      title: "Reflected Light Scattering",
      shortDesc: "Unabsorbed optical photons bounce back through cutaneous tissue.",
      fullDesc: "Photons that are not absorbed by oxygenated or deoxygenated hemoglobin undergo back-scattering through skin tissue, returning toward the sensor carrying the cardiac pulse signature.",
      techSpecs: "Back-Scattering Angle: 120° - 180° • Optical Transmission Efficiency: ~0.5% - 2.0%",
      icon: Radio,
      color: "#F59E0B",
      tag: "PHOTON SCATTERING"
    },
    {
      id: "photodiode",
      title: "Photodiode Detection",
      shortDesc: "Ultra-sensitive silicon photodiodes convert reflected photons into electrical voltage.",
      fullDesc: "A high-quantum-efficiency silicon photodiode positioned adjacent to the LEDs intercepts returning scattered photons. It generates a micro-Ampere photocurrent directly proportional to instantaneous light intensity.",
      techSpecs: "Quantum Efficiency: >80% • Sensitivity: 0.6 A/W • Active Optical Area: 4.0 mm²",
      icon: Cpu,
      color: "#8B5CF6",
      tag: "PHOTO-ELECTRIC CONVERSION"
    },
    {
      id: "algorithm",
      title: "Digital Signal Processing",
      shortDesc: "GOQii algorithms filter noise artifacts to output clean HR & SpO₂ metrics.",
      fullDesc: "High-order bandpass filters and adaptive noise-cancellation algorithms isolate the AC pulsatile waveform from motion artifacts and ambient light. The resulting clean signal yields real-time Heart Rate (BPM) and SpO₂ percentage.",
      techSpecs: "Sampling Frequency: 128Hz • SNR: >45dB • Motion Artifact Rejection: Adaptive FIR Filter",
      icon: Activity,
      color: "#10B981",
      tag: "BIOMETRIC OUTPUT"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] text-[#0F172A] font-sans pt-20 select-none overflow-x-hidden">
      
      {/* ============================================================ */}
      {/* 01 — HERO SECTION */}
      {/* ============================================================ */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat py-20 sm:py-32 px-6 overflow-hidden min-h-[520px] flex items-center"
        style={{ backgroundImage: `url("https://appcdn.goqii.com/storeimg/76833_1784885155.jpg")` }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/75 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Left Text Column */}
          <div className="max-w-2xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 bg-[#2BC48A]/20 backdrop-blur-md border border-[#2BC48A]/40 px-4 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-[#2BC48A]" />
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2BC48A]">
                SMART SCIENCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
              The science behind <br className="hidden sm:inline" />
              <span className="text-[#2BC48A]">
                smarter health tracking.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-medium max-w-xl leading-relaxed">
              Explore the technology, sensors and science that power health insights across GOQii devices.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToNext}
                className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#2BC48A]/25 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                EXPLORE THE SCIENCE <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 02 — FROM YOUR WRIST TO HEALTH INSIGHTS (LIGHT) */}
      {/* ============================================================ */}
      <section id="wrist-signals" className="w-full py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] block mb-2">
              BIOMETRIC SIGNALS
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold text-[#0F172A] tracking-tight mb-4">
              Small signals. Meaningful insights.
            </h2>
            <p className="text-sm sm:text-base text-[#64748B] font-medium leading-relaxed">
              GOQii devices help track health and activity signals including heart rate, SpO₂, sleep, steps, calories and other supported health parameters — helping you understand your health trends over time.
            </p>
          </div>

          {/* Interactive Wrist Signals Visualizer */}
          <div className="bg-[#F8FAFB] rounded-3xl p-6 sm:p-12 border border-[#E2E8F0] shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Signal Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#94A3B8] block mb-2">
                Select Biometric Parameter:
              </span>
              
              {Object.entries(signalsData).map(([key, item]) => {
                const isSelected = activeSignal === key;
                const IconComp = item.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSignal(key)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all flex items-center gap-4 cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#2BC48A] shadow-md ring-2 ring-[#2BC48A]/10"
                        : "bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15`, color: item.color }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-bold text-[#0F172A]">{item.title}</h3>
                      <span className="text-[11px] text-[#64748B] font-medium truncate block">{item.subtitle}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-[#2BC48A] translate-x-1" : "text-slate-300"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Signal Deep Dive Box */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-10 border border-[#E2E8F0] shadow-md relative overflow-hidden">
              {(() => {
                const current = signalsData[activeSignal as keyof typeof signalsData];
                const Icon = current.icon;
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#2BC48A] bg-[#E5F7F0] px-3.5 py-1 rounded-full uppercase tracking-wider">
                        {current.badge}
                      </span>
                      <span className="text-xs font-bold text-slate-400">{current.stat}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0"
                        style={{ backgroundColor: current.color }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-[#0F172A]">{current.title}</h3>
                        <p className="text-xs font-semibold text-[#64748B]">{current.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed bg-[#F8FAFB] p-5 rounded-xl border border-slate-100">
                      {current.description}
                    </p>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#94A3B8] font-semibold border-t border-slate-100">
                      <span>Signal Processing: PPG Optical Filter</span>
                      <span className="text-[#2BC48A]">Active Trend Mapping</span>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 03 — THE SCIENCE BEHIND THE SENSOR (DARK - PPG TECH) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] bg-[#2BC48A]/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
              PHOTOPLETHYSMOGRAPHY (PPG) SENSING
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              How light transforms micro-vessel blood pulse into biometric intelligence.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              GOQii smart wearables utilize multi-spectrum Photoplethysmography (PPG) — projecting non-invasive light pulses through cutaneous layers to measure microscopic blood volume changes continuously.
            </p>
          </div>

          {/* Key Specs Banner Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-[#1E293B] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#2BC48A]/10 text-[#2BC48A] flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">GREEN LED ARRAY</span>
                <span className="text-xs font-bold text-white">525nm Wave Target</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E293B] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">RED / IR SPECTRUM</span>
                <span className="text-xs font-bold text-white">660nm &amp; 940nm SpO₂</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E293B] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">SILICON PHOTODIODE</span>
                <span className="text-xs font-bold text-white">&gt;80% Quantum Efficiency</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#1E293B] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">ADAPTIVE FILTRATION</span>
                <span className="text-xs font-bold text-white">Motion Noise Cancellation</span>
              </div>
            </div>
          </div>

          {/* Main Interactive PPG Architecture Explorer */}
          <div className="bg-[#1E293B] rounded-3xl p-6 sm:p-10 border border-slate-700 shadow-2xl space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#2BC48A] block mb-1">INTERACTIVE PPG PATHWAY</span>
                <h3 className="text-xl font-black text-white">Select a step to explore the optical light process</h3>
              </div>

              {/* Spectrum Wavelength Mode Toggle */}
              <div className="flex items-center bg-[#0F172A] p-1 rounded-full border border-slate-800 self-start md:self-auto">
                <button
                  onClick={() => setPpgWavelengthMode("green")}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    ppgWavelengthMode === "green"
                      ? "bg-[#2BC48A] text-[#0F172A] shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-[#0F172A]" />
                  Green (525nm - HR)
                </button>
                <button
                  onClick={() => setPpgWavelengthMode("infrared")}
                  className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all cursor-pointer flex items-center gap-2 ${
                    ppgWavelengthMode === "infrared"
                      ? "bg-[#EF4444] text-white shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-white" />
                  Red / IR (940nm - SpO₂)
                </button>
              </div>
            </div>

            {/* Step Selection Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {ppgStepsData.map((step, idx) => {
                const isActive = activePpgStep === idx;
                const StepIcon = step.icon;
                return (
                  <button
                    key={step.id}
                    onClick={() => setActivePpgStep(idx)}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between min-h-[130px] group relative ${
                      isActive
                        ? "bg-[#0F172A] border-[#2BC48A] shadow-lg ring-1 ring-[#2BC48A]/40"
                        : "bg-[#0F172A]/50 border-slate-800 hover:bg-[#0F172A] hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[10px] font-mono font-bold text-[#2BC48A]">
                        0{idx + 1}
                      </span>
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${step.color}20`, color: step.color }}
                      >
                        <StepIcon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-white mb-1 group-hover:text-[#2BC48A] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-tight line-clamp-2">
                        {step.shortDesc}
                      </p>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeStepBar"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2BC48A] rounded-full"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Step Detailed Deep Dive Card */}
            {(() => {
              const currentStep = ppgStepsData[activePpgStep];
              const StepIcon = currentStep.icon;
              const isGreen = ppgWavelengthMode === "green";
              const strokeColor = isGreen ? "#2BC48A" : "#EF4444";

              return (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#0F172A] border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
                  
                  {/* Background Ambient Glow */}
                  <div
                    className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ backgroundColor: isGreen ? "#2BC48A" : "#EF4444" }}
                  />

                  {/* Left Column: Description & Specifications */}
                  <div className="lg:col-span-7 space-y-4 relative z-10">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white"
                        style={{ backgroundColor: currentStep.color }}
                      >
                        {currentStep.tag}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-400">
                        STEP 0{activePpgStep + 1} OF 06
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0"
                        style={{ backgroundColor: currentStep.color }}
                      >
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {currentStep.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed bg-[#1E293B]/70 p-4 rounded-xl border border-slate-800">
                      {currentStep.fullDesc}
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-slate-400 bg-black/30 px-4 py-2.5 rounded-lg border border-slate-800/80">
                      <span className="text-[#2BC48A] font-bold">PHYSICAL SPECIFICATIONS:</span>
                      <span>{currentStep.techSpecs}</span>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Waveform & Sensor Simulation */}
                  <div className="lg:col-span-5 bg-[#1E293B] rounded-2xl p-6 border border-slate-700/80 relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-2.5 h-2.5 rounded-full animate-ping"
                          style={{ backgroundColor: strokeColor }}
                        />
                        <span className="text-xs font-bold text-white">
                          {isGreen ? "Green Pulse Waveform (HR)" : "Infrared Absorption Waveform (SpO₂)"}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">128Hz REAL-TIME</span>
                    </div>

                    {/* Animated Waveform Visualization */}
                    <div className="h-20 bg-[#0F172A] rounded-xl border border-slate-800 p-2 flex items-center justify-between gap-1 overflow-hidden">
                      {[35, 70, 20, 95, 45, 85, 25, 100, 50, 80, 30, 90, 40, 75, 30, 85, 45, 95].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
                          transition={{ repeat: Infinity, duration: 1.8, delay: i * 0.08 }}
                          className="w-1.5 rounded-full"
                          style={{ backgroundColor: strokeColor }}
                        />
                      ))}
                    </div>

                    {/* Sensor Metric Output Simulation Badge */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#0F172A]/80 border border-slate-800 text-xs">
                      <span className="text-slate-400 font-medium">Computed Metric Output:</span>
                      <span className="font-mono font-black text-white flex items-center gap-1.5">
                        {isGreen ? (
                          <>
                            <Heart className="w-3.5 h-3.5 text-[#2BC48A] animate-pulse" />
                            72 BPM (Pulse Interval: 833ms)
                          </>
                        ) : (
                          <>
                            <Activity className="w-3.5 h-3.5 text-[#EF4444] animate-pulse" />
                            98% SpO₂ (Ratio: 0.62)
                          </>
                        )}
                      </span>
                    </div>

                  </div>

                </div>
              );
            })()}

          </div>

          {/* Dual Wavelength Science Spotlight Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Green Light Card */}
            <div className="bg-[#1E293B] rounded-3xl p-8 border border-slate-800 hover:border-[#2BC48A] transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/10 px-3 py-1 rounded-full">
                  525nm GREEN WAVELENGTH
                </span>
                <Heart className="w-5 h-5 text-[#2BC48A]" />
              </div>

              <h3 className="text-xl font-black text-white">
                Continuous Heart Rate &amp; Motion Artifact Resistance
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Green light at 525 nanometers has a high optical absorption coefficient in oxygenated hemoglobin. This produces strong volumetric pulse amplitudes even during intense physical movement or exercise.
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Primary Application:</span>
                <span className="text-white font-bold">24/7 Heart Rate &amp; Active Workouts</span>
              </div>
            </div>

            {/* Red / Infrared Light Card */}
            <div className="bg-[#1E293B] rounded-3xl p-8 border border-slate-800 hover:border-[#EF4444] transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#EF4444] bg-[#EF4444]/10 px-3 py-1 rounded-full">
                  660nm / 940nm RED &amp; INFRARED
                </span>
                <Activity className="w-5 h-5 text-[#EF4444]" />
              </div>

              <h3 className="text-xl font-black text-white">
                Peripheral Oxygen Saturation (SpO₂) Analysis
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Oxyhemoglobin (HbO₂) absorbs more infrared light (940nm), while deoxyhemoglobin (Hb) absorbs more red light (660nm). Comparing these optical ratios enables accurate calculation of blood oxygen saturation.
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-medium">
                <span>Primary Application:</span>
                <span className="text-white font-bold">SpO₂ Spot Checks &amp; Sleep Hypoxia</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 04 — HOW IT WORKS (DARK - SIGNAL TO INSIGHT) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-[#182232] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] block mb-2">
              FOUR-STEP PIPELINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              From signal to insight.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 01 */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 relative hover:border-[#2BC48A] transition-all group">
              <div className="text-3xl font-black text-[#2BC48A] mb-4">01</div>
              <div className="w-10 h-10 rounded-xl bg-[#2BC48A]/10 text-[#2BC48A] flex items-center justify-center mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">SENSE</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                GOQii wearable captures supported biometric signals continuously throughout your day.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 relative hover:border-[#2BC48A] transition-all group">
              <div className="text-3xl font-black text-[#2BC48A] mb-4">02</div>
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">MEASURE</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Sensors detect subtle physiological changes in blood flow and micro-movements.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 relative hover:border-[#2BC48A] transition-all group">
              <div className="text-3xl font-black text-[#2BC48A] mb-4">03</div>
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ANALYSE</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Health data is processed through GOQii algorithms into understandable health trends.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-[#0F172A] rounded-3xl p-8 border border-slate-800 relative hover:border-[#2BC48A] transition-all group">
              <div className="text-3xl font-black text-[#2BC48A] mb-4">04</div>
              <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">UNDERSTAND</h3>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                Actionable insights help users follow their health patterns and make informed choices over time.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 05 — BUILT AROUND EVERYDAY HEALTH (LIGHT) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] block mb-2">
              EVERYDAY WELLNESS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-3">
              Health intelligence, throughout your day.
            </h2>
            <p className="text-xs text-[#64748B] font-bold uppercase tracking-wider bg-[#F1F5F9] px-3.5 py-1.5 rounded-full inline-block">
              * Only display measurements supported by the relevant GOQii device.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* HEART */}
            <div className="bg-[#F8FAFB] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A] mb-2">HEART</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Monitor heart-rate trends throughout your day with supported GOQii PPG wearables.
              </p>
            </div>

            {/* BLOOD OXYGEN */}
            <div className="bg-[#F8FAFB] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A] mb-2">BLOOD OXYGEN</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Track SpO₂ saturation levels using supported GOQii optical sensors during resting hours.
              </p>
            </div>

            {/* SLEEP */}
            <div className="bg-[#F8FAFB] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-6">
                <Moon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A] mb-2">SLEEP</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Understand sleep duration, consistency, and stage distributions night after night.
              </p>
            </div>

            {/* ACTIVITY */}
            <div className="bg-[#F8FAFB] rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2BC48A]/10 text-[#2BC48A] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-extrabold text-[#0F172A] mb-2">ACTIVITY</h3>
              <p className="text-xs text-[#64748B] font-medium leading-relaxed">
                Track daily steps, workout sessions, distance traveled, and estimated active calories.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 06 — TESTED & CERTIFIED (LIGHT) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-[#F8FAFB] border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] block mb-2">
              QUALITY &amp; STANDARDS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight mb-4">
              Built with health standards in mind.
            </h2>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">
              GOQii trackers listed on the Smart Science platform have been associated with regulatory registrations and international quality and information-security standards.
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#0F172A]">CDSCO</h3>
              <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                Central Drugs Standard Control Organisation
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#0F172A]">ISO 9001</h3>
              <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                Quality Management Systems Standard
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#0F172A]">ISO 13485:2016</h3>
              <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                Medical Devices Quality Management
              </span>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-3">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-black text-[#0F172A]">ISO 27001</h3>
              <span className="text-[11px] text-[#64748B] font-medium block mt-1">
                Information Security Management System
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 07 — TESTING & VALIDATION (LIGHT) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A] block">
              VALIDATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
              Tested beyond the lab.
            </h2>
            <p className="text-sm text-[#64748B] font-medium leading-relaxed">
              GOQii has evaluated device performance through rigorous testing and clinical validation in collaboration with established healthcare and research institutions.
            </p>
            <div className="pt-2 space-y-2">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#2BC48A]" />
                <span>Multi-Environment Thermal &amp; Motion Testing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                <CheckCircle2 className="w-4 h-4 text-[#2BC48A]" />
                <span>Continuous Biometric Signal Stability Reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#F8FAFB] rounded-3xl p-8 border border-[#E2E8F0] text-center">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
              alt="Device Research & Testing"
              className="w-full h-64 object-cover rounded-2xl mb-4 shadow-sm"
            />
            <span className="text-[11px] text-[#94A3B8] font-semibold">
              Clinical &amp; Sensor Calibration Evaluation
            </span>
          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 08 — CONNECTED TO THE GOQii ECOSYSTEM (DARK) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              The device is only <br />
              the beginning.
            </h2>
            <p className="text-sm text-slate-300 font-medium">
              Health data becomes more useful when it connects with the broader GOQii experience.
            </p>
          </div>

          {/* Ecosystem Flow Visual Pipeline */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto bg-[#1E293B] p-6 sm:p-10 rounded-3xl border border-slate-700">
            
            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2BC48A]/10 text-[#2BC48A] flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xs font-extrabold tracking-wider text-white">WEARABLE</h3>
            </div>

            <ChevronRight className="hidden md:block w-6 h-6 text-[#2BC48A]" />

            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-[#3B82F6]/10 text-[#3B82F6] flex items-center justify-center mx-auto mb-3">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-xs font-extrabold tracking-wider text-white">GOQii APP</h3>
            </div>

            <ChevronRight className="hidden md:block w-6 h-6 text-[#2BC48A]" />

            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mx-auto mb-3">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-xs font-extrabold tracking-wider text-white">HEALTH INSIGHTS</h3>
            </div>

            <ChevronRight className="hidden md:block w-6 h-6 text-[#2BC48A]" />

            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F59E0B]/10 text-[#F59E0B] flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xs font-extrabold tracking-wider text-white">PERSONAL COACHING</h3>
            </div>

            <ChevronRight className="hidden md:block w-6 h-6 text-[#2BC48A]" />

            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2BC48A] text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#2BC48A]/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xs font-extrabold tracking-wider text-[#2BC48A]">HEALTHIER ACTIONS</h3>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================ */}
      {/* 09 — DATA & PRIVACY (LIGHT) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto bg-[#F8FAFB] rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm text-center">
          <div className="inline-flex items-center gap-2 bg-[#2BC48A]/10 text-[#2BC48A] px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" /> DATA RESPONSIBILITY
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4">
            Your health data deserves serious protection.
          </h2>

          <p className="text-xs sm:text-sm text-[#64748B] font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            GOQii uses health data to support insights, trends and personalized health experiences while maintaining appropriate privacy and information-security practices.
          </p>

          <button
            onClick={() => {
              if (window.navigateToPage) {
                window.navigateToPage("privacy");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="bg-[#0F172A] hover:bg-[#1E293B] text-white px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            READ OUR PRIVACY POLICY <ArrowRight className="w-4 h-4 text-[#2BC48A]" />
          </button>
        </div>
      </section>


      {/* ============================================================ */}
      {/* 10 — FINAL CTA (DARK) */}
      {/* ============================================================ */}
      <section className="w-full py-20 px-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Smart technology. <br />
            Human guidance. <br />
            <span className="text-[#2BC48A]">Better health decisions.</span>
          </h2>

          <p className="text-sm text-slate-300 font-medium">
            Discover how GOQii brings devices, data and personalized health guidance together.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                if (window.navigateToPage) {
                  window.navigateToPage("home");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className="w-full sm:w-auto bg-[#2BC48A] hover:bg-[#22a372] text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#2BC48A]/25 transition-all cursor-pointer"
            >
              EXPLORE GOQii
            </button>

            <a
              href="https://store.goqii.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              EXPLORE DEVICES <ArrowRight className="w-4 h-4 text-[#2BC48A]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
