import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Briefcase,
  MapPin,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  FileText,
  UploadCloud,
  ChevronRight,
  TrendingUp,
  Heart,
  Users,
  Award,
  Sparkles,
  Compass,
  Zap,
  Target,
  X,
  Plus,
  Send,
  AlertCircle
} from "lucide-react";

// Types for Job Position
interface Position {
  id: string;
  title: string;
  department: "Technology" | "Coaching & Medical" | "Operations" | "Marketing";
  location: string;
  type: "Full-Time" | "Part-Time" | "Contract";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export default function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Position | null>(null);
  
  // Application Form State
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantResume, setApplicantResume] = useState<File | null>(null);
  const [resumeDragActive, setResumeDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  
  // Form submission tracking
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBackToHome = () => {
    if (window.navigateToPage) {
      window.navigateToPage("home");
    }
  };

  const handleOpenPrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.navigateToPage) {
      window.navigateToPage("privacy");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Mock Job Database
  const jobs: Position[] = [
    {
      id: "ai-health-researcher",
      title: "AI Health & Longevity Research Scientist",
      department: "Technology",
      location: "Mumbai, India (Hybrid)",
      type: "Full-Time",
      experience: "4-6 Years",
      description: "Join the team building the next generation of preventive health recommendation models. You will design, develop, and integrate AI models within the AliveOS to analyze user biomarkers, sleep patterns, and cardiac parameters.",
      responsibilities: [
        "Develop predictive health Models using continuous wearable streams and daily logging records.",
        "Collaborate with medical experts to validate predictive insights against clinical benchmarks.",
        "Refine neural net pipelines for edge processing on upcoming wearables."
      ],
      requirements: [
        "Ph.D. or Master's in Computer Science, Bio-informatics, or related technical field.",
        "Deep understanding of sequence modeling, multi-task learning, or physiological signal analysis.",
        "Proficiency in PyTorch/TensorFlow, Python, and cloud infrastructure deployments."
      ]
    },
    {
      id: "fullstack-engineer-aliveos",
      title: "Senior Full-Stack Engineer (AliveOS Core)",
      department: "Technology",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "5+ Years",
      description: "Scale our core streaming backend, APIs, and real-time synchronization channels powering GOQii trackers, iOS/Android apps, and real-time medical dashboard integrations.",
      responsibilities: [
        "Architect and optimize high-throughput node/Python server runtimes processing continuous biomarker feeds.",
        "Build secure, modular UI platforms in React/TypeScript with smooth motion architectures.",
        "Implement strict data standards compliant with India's DPDP Act and USA's HIPAA directives."
      ],
      requirements: [
        "Strong full-stack foundation with Node.js/Express, TypeScript, React, and Redis/PostgreSQL.",
        "Proven experience building event-driven systems and microservices handling millions of active clients.",
        "Passion for clean code, solid testing coverage, and modular front-end bento architecture."
      ]
    },
    {
      id: "preventive-dietitian",
      title: "Lead Digital coach & Metabolic Dietitian",
      department: "Coaching & Medical",
      location: "Mumbai, India",
      type: "Full-Time",
      experience: "3+ Years",
      description: "Empower users with personalized preventive blueprints. Coordinate with our medical boards and general practitioners to transform users' diet, training, and bio-lifestyle habits.",
      responsibilities: [
        "Deliver premium one-on-one virtual coaching to corporate partners and high-risk metabolic individuals.",
        "Design condition-centric meal plans and wellness journeys targeting diabetes or cardiovascular prevention.",
        "Contribute expert content to our Knowledge Hub, including peer-reviewed articles and clinical summaries."
      ],
      requirements: [
        "Bachelor's/Master's degree in Clinical Nutrition, Dietetics, or related Human Physiology disciplines.",
        "Active certification as a registered dietitian (RD) or continuous clinical training certificates.",
        "Inspirational communicator with a deep drive to translate medical diagnostics into simple lifestyle steps."
      ]
    },
    {
      id: "clinical-ops-manager",
      title: "Clinical Operations & Diagnostics Director",
      department: "Operations",
      location: "Mumbai, India",
      type: "Full-Time",
      experience: "6-8 Years",
      description: "Oversee operational pipelines for our diagnostic partners, lab integrations, medical general practitioners, and diagnostic testing fulfillment cycles.",
      responsibilities: [
        "Manage partner relationships with diagnostic chains, scheduling labs, and quality audits across various locations.",
        "Streamline our diagnostics dashboard, coordinating physician reviews with customer delivery flows.",
        "Ensure full adherence to healthcare regulations, clinical-safety criteria, and patient care mandates."
      ],
      requirements: [
        "Master's in Healthcare Administration, Business, Operations, or clinical medical backgrounds.",
        "Proven track record managing complex logistics pipelines, lab schedules, or clinical environments.",
        "Superb team management and structured SLA process optimization skills."
      ]
    },
    {
      id: "senior-product-designer",
      title: "Senior Product Designer",
      department: "Marketing",
      location: "Mumbai, India (Hybrid)",
      type: "Full-Time",
      experience: "4+ Years",
      description: "Shape the visual and interactive identity of GOQii. Create beautiful digital products, layouts, bento grids, and high-fidelity graphics that tell the story of preventive health.",
      responsibilities: [
        "Own user experience and user interface layouts for our customer dashboards, wearable apps, and platform landing pages.",
        "Develop high-fidelity design systems, vector assets, and motion specifications.",
        "Work hand-in-hand with engineering teams to ensure pixel-perfect design implementation."
      ],
      requirements: [
        "A stellar portfolio of consumer-facing mobile and web applications with a focus on polished typography and subtle interactions.",
        "Expert mastery of Figma, vector illustrations, and micro-interaction frameworks.",
        "Strong understanding of responsive layouts and accessible color contrast standards."
      ]
    }
  ];

  // Filters calculation
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setResumeDragActive(true);
    } else if (e.type === "dragleave") {
      setResumeDragActive(false);
    }
  };

  const simulateProgress = () => {
    setIsUploading(true);
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setResumeDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const validTypes = [".pdf", ".doc", ".docx"];
      const fileExt = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
      
      if (validTypes.includes(fileExt)) {
        if (file.size <= 5 * 1024 * 1024) { // 5MB limit
          setApplicantResume(file);
          setFormErrors((prev) => ({ ...prev, resume: "" }));
          simulateProgress();
        } else {
          setFormErrors((prev) => ({ ...prev, resume: "File size exceeds 5MB limit" }));
        }
      } else {
        setFormErrors((prev) => ({ ...prev, resume: "Please upload PDF or Word documents only" }));
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size <= 5 * 1024 * 1024) {
        setApplicantResume(file);
        setFormErrors((prev) => ({ ...prev, resume: "" }));
        simulateProgress();
      } else {
        setFormErrors((prev) => ({ ...prev, resume: "File size exceeds 5MB limit" }));
      }
    }
  };

  const handleTriggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Submit Application
  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!applicantName.trim()) {
      errors.name = "Full name is required";
    }
    
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!applicantEmail.trim()) {
      errors.email = "Email address is required";
    } else if (!emailRegex.test(applicantEmail)) {
      errors.email = "Please provide a valid email address";
    }

    if (!applicantPhone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!applicantResume) {
      errors.resume = "Please upload your resume to apply";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Process submission
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setApplicantName("");
    setApplicantEmail("");
    setApplicantPhone("");
    setApplicantResume(null);
    setUploadProgress(0);
    setFormErrors({});
    setIsSubmitted(false);
    setSelectedJob(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      target-id="page-careers"
      id="section-careers-page"
      className="min-h-screen bg-[#F8FAFB] text-[#0F172A] selection:bg-[#2BC48A]/30 font-sans relative overflow-x-hidden pt-36 md:pt-40 pb-24"
    >
      {/* Background visual graphics */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] bg-[#2BC48A]/3 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-0 w-[45vw] h-[45vw] bg-[#00ADC7]/3 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Back Link */}
        <button
          onClick={handleBackToHome}
          id="btn-back-home"
          className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-[#64748B] hover:text-[#2BC48A] uppercase mb-10 group transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Platform
        </button>

        {/* Hero Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs mb-5 text-[#2BC48A] font-extrabold tracking-[0.25em] uppercase">
            <Compass className="w-4 h-4" />
            <span>Join Our Mission</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight text-[#0F172A] mb-6 leading-[1.05]">
            SHAPING THE FUTURE OF <span className="text-[#2BC48A]">PREVENTION</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At GOQii, we are rebuilding the preventive healthcare architecture. We combine data science, wearable trackers, connected diagnostics, and world-class human coaching to solve metabolic disease at scale. Join our global team and build tools that genuinely improve human lives.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Lives Touched", val: "5M+", desc: "Active users globally" },
            { label: "Our Teammates", val: "350+", desc: "Doctors, engineers, coaches" },
            { label: "Technology Platforms", val: "AliveOS", desc: "AI predictive engines" },
            { label: "XPrize Partners", val: "Active", desc: "Scientific collaboration" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white border border-[#E8EDF2] rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-16 h-16 bg-slate-50 rounded-full translate-x-4 translate-y-4 -z-10" />
              <span className="text-xs text-slate-400 font-extrabold uppercase tracking-wide block mb-1">{stat.label}</span>
              <span className="text-2xl sm:text-3xl font-black text-[#0F172A] block mb-0.5">{stat.val}</span>
              <span className="text-[11px] text-[#64748B] font-bold block">{stat.desc}</span>
            </div>
          ))}
        </div>

        {/* Two-Column Culture & Perks Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
          
          {/* Left Column: Values & Perks */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-3">
              <h2 className="text-2xl font-black tracking-tight text-[#0F172A]">Why GOQii?</h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                We believe in keeping our workforce as healthy and motivated as our users. We build products we are proud of and support one another in creating genuine societal impact.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Empowerment & Agency", desc: "Ownership over your research, code repositories, or clinic models.", icon: Target },
                { title: "Continuous Learning", desc: "Access wellness symposiums, coaching guidelines, and AI seminars.", icon: Sparkles },
                { title: "Prevention-Led Routine", desc: "Complimentary access to premium coaching, smart rings, and lab testing.", icon: Heart },
                { title: "Collaborative Spirit", desc: "Cross-functional workflows with doctors, product managers, and visualizers.", icon: Users }
              ].map((val, idx) => {
                const IconComponent = val.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 border border-slate-100 bg-white rounded-2xl hover:border-[#2BC48A]/50 transition-all">
                    <div className="p-2.5 bg-emerald-50 text-[#2BC48A] rounded-xl shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-black text-[#0F172A] uppercase tracking-wider">{val.title}</h4>
                      <p className="text-[11px] text-slate-500 font-bold leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Jobs list */}
          <div className="lg:col-span-8 bg-white border border-[#E8EDF2] rounded-3xl p-6 sm:p-8 shadow-xs relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-100">
              <div>
                <h2 className="text-2xl font-black tracking-tight text-[#0F172A]">Open Positions</h2>
                <p className="text-xs text-slate-400 font-bold">Discover your next opportunity</p>
              </div>

              {/* Department selection */}
              <div className="flex flex-wrap gap-1.5">
                {["All", "Technology", "Coaching & Medical", "Operations"].map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      selectedDept === dept
                        ? "bg-[#2BC48A] text-white shadow-xs"
                        : "bg-slate-50 text-[#64748B] border border-slate-100 hover:bg-slate-100"
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Search Input */}
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94A3B8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, locations, keywords..."
                className="w-full bg-[#F8FAFB] border border-[#E8EDF2] focus:border-[#2BC48A] pl-10 pr-4 py-3 rounded-xl text-xs font-medium text-[#0F172A] outline-none transition-all placeholder:text-[#94A3B8]"
              />
            </div>

            {/* Position loop */}
            <div className="space-y-4">
              {filteredJobs.length === 0 ? (
                <div className="py-16 text-center">
                  <Briefcase className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <span className="text-xs font-black text-slate-500 block">No matching positions found</span>
                  <p className="text-[11px] text-slate-400 max-w-xs mx-auto mt-1">Try resetting your department filters or search term to discover open health roles.</p>
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 border border-slate-100 rounded-2xl hover:border-[#2BC48A]/50 bg-slate-50/20 hover:bg-white transition-all cursor-pointer group"
                    onClick={() => setSelectedJob(job)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black text-[#2BC48A] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                          {job.department}
                        </span>
                        <h4 className="text-sm sm:text-base font-black text-[#0F172A] group-hover:text-[#2BC48A] transition-colors">
                          {job.title}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 pt-1.5 text-[11px] font-extrabold text-slate-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-300" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-slate-300" />
                            {job.experience} Exp
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center self-end sm:self-center">
                        <span className="text-xs font-black text-[#64748B] group-hover:text-[#2BC48A] flex items-center gap-0.5">
                          View details
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* General Application Callout */}
            <div className="mt-8 p-5 bg-slate-50 border border-slate-100/80 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-xs font-black text-[#0F172A] block uppercase tracking-wider">Don't see your fit?</span>
                <p className="text-[11px] text-slate-500 font-bold max-w-md">We are constantly seeking brilliant doctors, clinical analysts, software builders, and operational leaders. Send a general application to our teams.</p>
              </div>
              <button
                onClick={() => setSelectedJob({
                  id: "general-applicant",
                  title: "General Application - Talent Pool",
                  department: "Technology",
                  location: "Mumbai, India / Remote",
                  type: "Full-Time",
                  experience: "Any Experience Level",
                  description: "Submit your credentials, background highlights, and CV for our recruitment pipeline. We constantly review the general database for critical department openings.",
                  responsibilities: [
                    "Bring active collaboration, passion for health prevention, and technical expertise.",
                    "Contribute to team efforts across product, marketing, coaching, or clinical operations."
                  ],
                  requirements: [
                    "Demonstrated excellence in your background or career field.",
                    "Deep excitement for medical IoT, continuous fitness improvement, and data privacy."
                  ]
                })}
                className="px-4 py-2.5 bg-slate-900 hover:bg-[#0F172A] text-white text-xs font-black rounded-xl transition-all cursor-pointer whitespace-nowrap"
              >
                Apply Centrally
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Position Detail Drawer/Modal */}
        <AnimatePresence>
          {selectedJob && (
            <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-[#0F172A]/40 backdrop-blur-xs transition-opacity"
                onClick={() => setSelectedJob(null)}
              />

              <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25 }}
                  className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all w-full max-w-3xl flex flex-col md:flex-row"
                >
                  
                  {/* Left Side: Job Information */}
                  <div className="p-6 sm:p-8 flex-1 border-r border-slate-100 space-y-6 max-h-[70vh] md:max-h-[85vh] overflow-y-auto">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="md:hidden absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 rounded-full cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="space-y-2">
                      <span className="text-[10px] font-black text-[#2BC48A] uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md inline-block">
                        {selectedJob.department}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] leading-tight">
                        {selectedJob.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-xs font-extrabold text-slate-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-300" />
                          {selectedJob.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-300" />
                          {selectedJob.experience} Exp
                        </span>
                      </div>
                    </div>

                    <div className="text-xs sm:text-sm text-slate-550 leading-relaxed font-semibold">
                      <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase mb-2">Overview</h4>
                      {selectedJob.description}
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">Core Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-500 font-semibold leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-[#2BC48A] rounded-full mt-1.5 shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xs font-black tracking-wider text-slate-400 uppercase">Experience & Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex gap-2.5 items-start text-xs text-slate-500 font-semibold leading-relaxed">
                            <span className="w-1.5 h-1.5 bg-[#00ADC7] rounded-full mt-1.5 shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Side: Apply Form & Success Card */}
                  <div className="p-6 sm:p-8 w-full md:w-[320px] bg-slate-50 border-t md:border-t-0 border-slate-100 flex flex-col justify-between">
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="hidden md:flex absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 rounded-full cursor-pointer z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <AnimatePresence mode="wait">
                      {!isSubmitted ? (
                        <motion.form
                          key="apply-form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          onSubmit={handleSubmitApplication}
                          className="space-y-4 h-full flex flex-col justify-between"
                        >
                          <div className="space-y-3.5">
                            <h4 className="text-xs font-black tracking-wide text-slate-700 uppercase">Application Form</h4>
                            <p className="text-[11px] text-slate-400 font-semibold">Join the preventative digital coaching workspace.</p>

                            {/* Name input */}
                            <div className="space-y-1">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Full Name</label>
                              <input
                                type="text"
                                value={applicantName}
                                onChange={(e) => setApplicantName(e.target.value)}
                                placeholder="e.g. Anand Kumar"
                                className={`w-full bg-white border ${formErrors.name ? "border-red-400" : "border-slate-150"} pl-3 pr-3 py-2 rounded-xl text-xs font-medium text-[#0F172A] outline-none outline-offset-0 focus:border-[#2BC48A]`}
                              />
                              {formErrors.name && <span className="text-[9px] font-bold text-red-500 block">{formErrors.name}</span>}
                            </div>

                            {/* Email input */}
                            <div className="space-y-1">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Email Address</label>
                              <input
                                type="email"
                                value={applicantEmail}
                                onChange={(e) => setApplicantEmail(e.target.value)}
                                placeholder="name@goqii.com"
                                className={`w-full bg-white border ${formErrors.email ? "border-red-400" : "border-slate-150"} pl-3 pr-3 py-2 rounded-xl text-xs font-medium text-[#0F172A] outline-none focus:border-[#2BC48A]`}
                              />
                              {formErrors.email && <span className="text-[9px] font-bold text-red-500 block">{formErrors.email}</span>}
                            </div>

                            {/* Phone number */}
                            <div className="space-y-1">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Phone Number</label>
                              <input
                                type="tel"
                                value={applicantPhone}
                                onChange={(e) => setApplicantPhone(e.target.value)}
                                placeholder="+91 98765 43210"
                                className={`w-full bg-white border ${formErrors.phone ? "border-red-400" : "border-slate-150"} pl-3 pr-3 py-2 rounded-xl text-xs font-medium text-[#0F172A] outline-none focus:border-[#2BC48A]`}
                              />
                              {formErrors.phone && <span className="text-[9px] font-bold text-red-500 block">{formErrors.phone}</span>}
                            </div>

                            {/* Drag and drop file upload */}
                            <div className="space-y-1">
                              <label className="text-[10px] font-black text-slate-500 uppercase tracking-wider block">Resume / CV (PDF or DOC)</label>
                              
                              <div
                                onDragEnter={handleDrag}
                                onDragOver={handleDrag}
                                onDragLeave={handleDrag}
                                onDrop={handleDrop}
                                onClick={handleTriggerFileSelect}
                                className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                                  resumeDragActive ? "border-[#2BC48A] bg-emerald-50/20" : "border-slate-200 bg-white hover:border-slate-350"
                                }`}
                              >
                                <input
                                  type="file"
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  accept=".pdf,.doc,.docx"
                                  className="hidden"
                                />

                                {applicantResume ? (
                                  <div className="space-y-1.5 text-left">
                                    <div className="flex items-center gap-2">
                                      <FileText className="w-5 h-5 text-[#2BC48A] shrink-0" />
                                      <span className="text-xs font-extrabold text-[#0F172A] truncate max-w-[180px] block">
                                        {applicantResume.name}
                                      </span>
                                    </div>
                                    <div className="text-[9px] text-[#64748B] font-bold">
                                      Size: {(applicantResume.size / (1024 * 1024)).toFixed(2)} MB
                                    </div>

                                    {/* Upload Progress Bar */}
                                    <div className="w-full bg-slate-100 rounded-full h-1 mt-1 overflow-hidden">
                                      <div
                                        className="bg-[#2BC48A] h-full transition-all duration-300"
                                        style={{ width: `${uploadProgress}%` }}
                                      />
                                    </div>
                                    <div className="flex items-center justify-between text-[8px] font-black text-[#94A3B8] uppercase">
                                      <span>{isUploading ? "Uploading" : "Uploaded"}</span>
                                      <span>{uploadProgress}%</span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="space-y-1 text-slate-400">
                                    <UploadCloud className="w-6 h-6 mx-auto text-slate-300" />
                                    <span className="text-[10px] font-bold text-slate-600 block">Drag & drop your CV</span>
                                    <span className="text-[9px] text-slate-400 block">or click to browse manual upload</span>
                                  </div>
                                )}
                              </div>
                              {formErrors.resume && <span className="text-[9px] font-bold text-red-500 block">{formErrors.resume}</span>}
                            </div>
                          </div>

                          <div className="pt-4 mt-auto">
                            <button
                              type="submit"
                              disabled={isSubmitting || isUploading}
                              className={`w-full py-3 rounded-xl text-xs font-black text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all ${
                                isSubmitting || isUploading
                                  ? "bg-slate-300 cursor-not-allowed"
                                  : "bg-[#2BC48A] hover:bg-[#2BC48A]/95 hover:-translate-y-0.5 active:translate-y-0"
                              }`}
                            >
                              {isSubmitting ? (
                                <>Processing Integration...</>
                              ) : (
                                <>
                                  Submit Application
                                  <Send className="w-3.5 h-3.5" />
                                </>
                              )}
                            </button>
                            <span className="text-[9px] text-[#94A3B8] text-center block mt-2 font-semibold">
                              By submitting, you agree to our{" "}
                              <a href="#privacy" onClick={handleOpenPrivacy} className="underline text-slate-500">
                                Privacy Policy
                              </a>.
                            </span>
                          </div>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success-card"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="text-center py-10 space-y-6"
                        >
                          <div className="w-14 h-14 bg-emerald-50 text-[#2BC48A] rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>

                          <div className="space-y-2">
                            <h4 className="text-base font-black text-[#0F172A]">Application Received!</h4>
                            <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                              Awesome, <strong>{applicantName}</strong>! Your application for the <strong>{selectedJob.title}</strong> has been securely logged into our recruiter workspace.
                            </p>
                          </div>

                          <div className="bg-white border border-slate-100 rounded-2xl p-4 text-[10px] text-slate-400 font-bold text-left space-y-1">
                            <div className="text-slate-600 font-black uppercase text-[9px] mb-1">What's Next?</div>
                            <p>1. Our hiring team processes your profile within 3-5 business days.</p>
                            <p>2. We'll reach out to schedule introductory diagnostic calls.</p>
                            <p>3. Active notifications will be dispatched to {applicantEmail}.</p>
                          </div>

                          <button
                            onClick={handleResetForm}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-black transition-all cursor-pointer shadow"
                          >
                            Return to Careers Page
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
}
