import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface Member {
  name: string;
  role: string;
  bio: string;
  image: string;
  highlights?: string[];
}

const LEADERSHIP_DATA: Record<string, Member[]> = {
  leadership: [
    {
      name: "Vishal Gondal",
      role: "Founder & CEO",
      bio: "Tech pioneer and health visionary. Founded IndiaGames (acquired by Disney) before redefining preventative wellness with GOQii in 2014.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
      highlights: ["Pioneering Innovator", "Angel Investor", "Ultra-marathoner"],
    },
    {
      name: "Champ Alreja",
      role: "Co-Founder & Chief Business Officer",
      bio: "Veteran business strategist building core enterprise portfolios. Driving high-growth commercial models and corporate preventative care.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      highlights: ["Global Strategy", "Partnerships", "Co-Founder"],
    },
    {
      name: "Sachin Janghel",
      role: "Co-Founder & CTO",
      bio: "Leading advanced systems, data loops, and AI models behind Alive O.S. Scaling secure data infrastructures across millions of users.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
      highlights: ["Cloud Architect", "AI Security", "Co-Founder"],
    },
    {
      name: "Luke Coutinho",
      role: "Co-Founder & Master Coach",
      bio: "Internationally renowned holistic lifestyle medicine expert. Architect of GOQii's daily habit modification methodologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop",
      highlights: ["Integrative Medicine", "Author", "Chief Wellness Coach"],
    },
    {
      name: "Abhishek Sharma",
      role: "Chief Operating Officer",
      bio: "Managing operational execution, customer success layers, and scale parameters across global regions.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Sharda K.",
      role: "Head of Clinical Research",
      bio: "Directs epidemiological modeling and preventative trials validating the impact of continuous coaching on longevity metrics.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    }
  ],
  board: [
    {
      name: "Amit Singhal",
      role: "Board Director",
      bio: "Former Head of Google Search. Visionary technology leader guiding architectural paradigms for modern artificial intelligence.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Bala Deshpande",
      role: "Invesco Advisory",
      bio: "Experienced venture capitalist steerage of technology, retail, and healthcare brands scaled to successful state transitions.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    }
  ],
  advisory: [
    {
      name: "Dr. Deepak Chopra",
      role: "Mind-Body Medicine Advisor",
      bio: "World-renowned pioneer of mind-body integration. Inspiring continuous feedback loop configurations for mindfulness.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Marc Hyman",
      role: "Clinical Advisor",
      bio: "Leading functional medicine champion and longevity researcher developing multi-system optimization protocols.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=600&auto=format&fit=crop",
    }
  ],
  longevity: [
    {
      name: "Dr. Nir Barzilai",
      role: "Longevity Expert",
      bio: "Renowned biogerontologist. Leading research on targeting aging pathways and chemical modulations for lifespan expansion.",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dr. Aubrey de Grey",
      role: "Biomedical Gerontologist",
      bio: "Grand theorist of continuous cellular therapy. Advancing interventions targeting clinical damage accumulation mechanisms.",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600&auto=format&fit=crop",
    }
  ]
};

const TAB_LABELS = [
  { key: "leadership", label: "Leadership Team" },
  { key: "board", label: "Board of Directors" },
  { key: "advisory", label: "Advisory Board" },
  { key: "longevity", label: "Longevity Council" }
];

export default function Leadership() {
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <div
      id="section-leadership"
      className="relative min-h-screen w-full flex flex-col justify-center bg-white py-24 md:py-36 px-6 md:px-16 overflow-hidden select-none border-t border-[#E8EDF2]"
    >
      {/* Label Title */}
      <div className="w-full max-w-6xl mx-auto mb-10 flex flex-col items-start font-bold">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="label-caps !text-[#2BC48A] mb-4"
        >
          Section 12 / Our People
        </motion.div>
      </div>

      {/* Main Headers */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-bold tracking-tighter text-[#0F172A] leading-[0.95] mb-4"
          >
            Built by experts. <br />
            <span className="text-[#667085]">Trusted globally.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-[#667085] max-w-xl"
          >
            A leadership team spanning healthcare, technology, insurance, wellness and global innovation.
          </motion.p>
        </div>

        {/* Tab Controllers */}
        <div className="flex flex-wrap gap-2 max-w-2xl">
          {TAB_LABELS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                activeTab === tab.key
                  ? "bg-[#0F172A] text-white"
                  : "bg-[#F8FAFB] border border-[#E8EDF2] text-[#667085] hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Portrait Cards with Hover Details */}
      <div className="w-full max-w-6xl mx-auto z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {LEADERSHIP_DATA[activeTab].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[480px] bg-[#F8FAFB] rounded-3xl overflow-hidden border border-[#E8EDF2] flex flex-col justify-end p-8 shadow-xs cursor-pointer"
              >
                {/* Image backdrop (grayscale to color on hover) */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Soft black to transparent overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-1" />

                {/* Content info container */}
                <div className="relative z-10 text-white transition-transform duration-500 group-hover:translate-y-[-10px]">
                  {member.highlights && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {member.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-white/15 text-[9px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  <h3 className="text-2xl font-black tracking-tight mb-1 group-hover:text-[#2BC48A] transition-colors duration-300">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase mb-4">
                    {member.role}
                  </p>

                  {/* Animated expand sliding bio section */}
                  <div className="h-0 opacity-0 overflow-hidden group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-out">
                    <p className="text-xs text-slate-200 leading-relaxed font-normal pt-2 border-t border-white/10">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
