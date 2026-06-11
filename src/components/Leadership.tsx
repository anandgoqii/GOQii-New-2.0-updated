import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface Member {
  name: string;
  role: string;
  company?: string;
  bio: string;
  image: string;
  highlights?: string[];
  extraHighlights?: string;
  location?: string;
}

const LEADERSHIP_DATA: Record<string, Member[]> = {
  leadership: [
    {
      name: "Vishal Gondal",
      role: "Founder & CEO",
      company: "GOQii Inc.",
      bio: "A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the \"Father of the Indian Gaming Industry,\" his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.",
      image: "https://appcdn.goqii.com/storeimg/95221_1781178862.png",
      highlights: ["Preventive Healthcare", "AI & Tech", "Gaming"],
      extraHighlights: "25+ Years in Tech & Health · Indiagames → Disney · GOQii",
      location: "Mumbai · Global"
    },
    {
      name: "Sachin Janghel",
      role: "Co-Founder & CTO",
      company: "GOQii Inc.",
      bio: "The technology brain behind the entire GOQii ecosystem. Sachin co-founded GOQii in 2013 and has spent over a decade building one of the world's most comprehensive AI-driven preventive health platforms — from wearables and IoT devices to blockchain initiatives like the Universal Health Token (UHT). His career began with 11 years in game and interactive application development across mobile, online, and social platforms, including as Technology Director at Indiagames, India's #1 gaming company acquired by Disney UTV. At Disney UTV, he then led the build-out of Interactive TV platforms — satellite, digital cable, HITS, and IPTV. At GOQii, he leads AI-powered digital health solutions, remote patient monitoring, clinical workflow automation, and strategic technology partnerships with global insurers and healthcare providers. A football and hockey player who represented his home state at national level tournaments.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/sachin1.png",
      highlights: ["AI & Healthtech", "Blockchain / UHT", "Gaming & IoT"],
      extraHighlights: "Co-Founder · 12+ Years Building GOQii · Disney UTV · UHT Core Team",
      location: "Saudi Arabia · Mumbai"
    },
    {
      name: "Abhishek Sharma",
      role: "Co-Founder & CEO, GOQii UK",
      company: "GOQii Inc.",
      bio: "Abhishek leads GOQii's UK operations and has been instrumental in building the brand's presence in one of the world's most demanding health markets. He brings over seven years at Nike across India, the USA, and the UK — spanning senior product and consumer roles — along with deep expertise in brand development, product marketing, PR, and social media. As Co-Founder and CMO from 2013, then COO, and now CEO of GOQii UK, he has grown the business from a startup into a recognised NHS-aligned health platform. A strong believer in sustainability and social impact, he has collaborated with global non-profits on key social projects. An ardent football fan, travel photographer, and long-distance motorbike rider.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Abhi.png",
      highlights: ["Brand & Marketing", "UK Market", "Consumer Health"],
      extraHighlights: "Co-Founder · CEO GOQii UK · Nike · IIM Calcutta",
      location: "London"
    },
    {
      name: "Champ Alreja",
      role: "Co-Founder & Chief Business Officer",
      company: "GOQii Inc.",
      bio: "Radical in thought, meticulous in execution. Champ co-founded GOQii in 2014, bringing hardware engineering, behavioural product thinking, and commercial instinct to the company's growth. Before GOQii, he founded HitPlay — a gadget and consumer tech company built from scratch before Flipkart, before Amazon, at 24 with no playbook and no funding. As a product designer and inventor, he built GOQii's first lines of wearables from 2013 — at a time when the only comparable device was the original Fitbit Flex, which had no screen and no real-time feedback. His devices did. His career began as a Sound Engineer, giving him a ground-up understanding of how people interact with technology. He also conceived and built the GOQii Health Store — a scientifically designed rewards and retention engine grounded in behavioural economics and game theory, now one of the platform's most distinctive moats. Leads global BD and APAC expansion across Hong Kong, Singapore, and the Asia Pacific. A competitive tennis player who has built health discipline the same way he builds companies — one consistent rep at a time.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/champ.png",
      highlights: ["Preventive Health", "Health Store", "APAC"],
      extraHighlights: "Co-Founder · Wearables Pioneer · Health Store Architect",
      location: "Hong Kong · Mumbai"
    },
    {
      name: "Krishna Kumar",
      role: "Chief Customer Officer",
      company: "GOQii Inc.",
      bio: "A passion for brands, mountains, and startups is what drives KK. At GOQii, he is Chief Customer Officer and leads overall marketing strategy and consumer engagement — building systems that help people make healthier choices and sustain them over time. His career began in advertising across networks including Publicis, Leo Burnett, and WPP (Mindshare), before he founded Media2win in 2004 — a digital agency that grew into one of India's top digital firms and won multiple industry awards. That brought him to GOQii, where he works at the intersection of technology, data, coaching, and behavioural science. Also a Core Team member at Universal Health Token (UHT), focused on marketing. Outside work, he scales 6000+ metre peaks in the Himalayas every year and runs multiple marathons — proof that he lives the preventive health philosophy he champions.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/KK.png",
      highlights: ["Consumer Engagement", "Brand Strategy", "Digital Marketing"],
      extraHighlights: "CCO · Media2win Founder · UHT Core Team · Mindshare / WPP",
      location: "Mumbai"
    },
    {
      name: "Rohit Pareek",
      role: "CFO & Head Corporate Development",
      company: "GOQii Inc.",
      bio: "Rohit leads finance and corporate development at GOQii, bringing deep expertise from his investment banking career at Jefferies, JM Financial, and Times Group. He has led 50+ PE/VC, M&A, and IPO transactions across India and the US. He built Jefferies India's Equity Capital Markets (ECM) desk from zero to a leading position. An alumnus of IIM Ahmedabad and IIT BHU, Rohit is passionate about sustainability and governance. He enjoys meditation and spending time with family.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Rohit.png",
      highlights: ["Corp Finance", "M&A", "Governance"],
      extraHighlights: "IIM Ahmedabad · Jefferies Alumnus · Finance Strategy",
      location: "USA · Mumbai"
    },
    {
      name: "Piyush Karnani",
      role: "Chief Business Officer",
      company: "GOQii Inc.",
      bio: "Senior business leader with 23+ years spanning banking, insurance, and healthtech. At GOQii, Piyush leads P&L ownership and the banking, insurance, payments, and strategic initiatives verticals — building alliances with banks, fintechs, insurers, and governments. He launched industry-first contactless and wearable payment solutions and led global expansion at GOQii. Previously VP of Digital Insurance & Consumer Business at Marsh & McLennan (country head), Head of Consumer Banking Sales & Liabilities at Standard Chartered Bank, Regional Head at Barclays, and Bancassurance roles at Citibank. A specialist in strategic partnerships, payments ecosystems, and embedded finance across global markets.",
      image: "https://appcdn.goqii.com/storeimg/46680_1781179108.png",
      highlights: ["Banking & Insurance", "Payments", "Strategic Partnerships"],
      extraHighlights: "23+ Years · Marsh · Standard Chartered · Barclays · Citibank",
      location: "UAE · Mumbai"
    },
    {
      name: "Srinivasan V Swamy",
      role: "Director",
      company: "GOQii Inc.",
      bio: "A Chartered Accountant with over 25 years in corporate finance and operations. Srini served as CFO of Bharti AXA Life Insurance, where he led finance, strategy, legal, compliance, and investment functions — including direct engagement with IRDA and the Ministry of Finance on complex policy issues. He later served as Independent Director at Aegon Life and Acko Insurance. Since founding CFO Bridge in 2011, he has become one of India's pioneers of the fractional CXO model, partnering with 500+ SMEs and startups across India, the US, and UAE. Also co-founder of CTO Bridge and CHRO Bridge. A passionate sleep advocate, Vipassana meditator, and yoga practitioner.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Shri.png",
      highlights: ["Finance & Governance", "Insurance", "Fractional CFO"],
      extraHighlights: "CA · Bharti AXA CFO · CFO Bridge Founder · 500+ SMEs",
      location: "Mumbai"
    },
    {
      name: "Luke Coutinho",
      role: "Co-Founder, Master Coach & Head Nutritionist",
      company: "GOQii Inc.",
      bio: "India's foremost integrative and lifestyle medicine expert, and the clinical soul of GOQii's coaching model. Luke has consulted and treated over 20,000 patients globally — including cancer, Alzheimer's, diabetes, and rare metabolic syndromes — through his signature five-pillar framework: Cellular Nutrition, Adequate Exercise, Quality Sleep, Emotional Detox, and Spirit. His global community of 17M+ spans billionaires to A-listers across Bollywood, royal families in the Middle East, and elite athletes. Named Champion for Lifestyle & Wellness for Prime Minister Modi's Fit India Movement. Four-time bestselling author. Founder of You Care Lifestyle and the Lifeness Science Institute. Over 250 talks across the world.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Luke.png",
      highlights: ["Integrative Medicine", "Holistic Nutrition", "Preventive Health"],
      extraHighlights: "17M+ Community · 20K+ Patients · PM Fit India Champion · Author",
      location: "Mumbai · Global"
    },
    {
      name: "Kamal Chandran",
      role: "Chief Compliance & HR Officer",
      company: "GOQii Inc.",
      bio: "HR leader, talent strategist, and NLP Life Performance Coach driving people and AI synergy at GOQii. Kamal leads the company's compliance and human resources function, with a career spanning Accenture (Talent Acquisition Delivery Lead — Product Industry), ScaleneWorks (VP RPO Head), and senior HR business partner roles. Simultaneously serves as Group Head Human Resources at nCORE Games. Specialises in strategic HR planning, talent acquisition, employee relations, diversity and inclusion, succession planning, and coaching. An IIM Nagpur alumna, she brings a rare combination of enterprise rigour and startup agility to building GOQii's people infrastructure.",
      image: "https://appcdn.goqii.com/storeimg/12935_1781178888.png",
      highlights: ["HR Strategy", "Talent & Culture", "Compliance"],
      extraHighlights: "CHRO · nCORE Group HR Head · Accenture · ScaleneWorks · IIM Nagpur",
      location: "Mumbai"
    }
  ],
  board: [
    {
      name: "Bala Deshpande",
      role: "MD, MegaDelta Capital",
      company: "GOQii Inc.",
      bio: "One of India's most respected venture investors with nearly two decades spanning early-stage and growth capital. Started at ICICI Venture in 2001, then joined NEA to lead their India platform for 10 years. Played an instrumental role in India's first Internet IPO, first 24-hour news channel, and first payments tech company. Independent board member of Info Edge Ltd — a multi-billion-dollar category leader.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Bela%20D.png",
      highlights: ["Venture Capital", "Consumer Tech", "Mumbai"],
      extraHighlights: "MD at MegaDelta Capital · Info Edge Director · ICICI Venture",
      location: "Mumbai"
    },
    {
      name: "Dr. Christine Li",
      role: "VP, Mitsui Healthcare",
      company: "GOQii Inc.",
      bio: "Physician-turned-strategist at Mitsui's global healthcare platform. Previously Parkway Pantai and IHH. HBS MBA; MBBS NUS.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/chri.png",
      highlights: ["Healthcare Strategy", "HCIT"],
      extraHighlights: "Mitsui & Co · Harvard Business School · NUS Medicine",
      location: "Singapore"
    },
    {
      name: "Pravin Gandhi",
      role: "GP, Seedfund",
      company: "GOQii Inc.",
      bio: "Founding figure of India's tech and VC ecosystem. 40+ years across Hinditron and Seedfund. Former TiE Mumbai President.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Pravin%20Gandhi.png",
      highlights: ["Venture Capital", "Startups", "Mumbai"],
      extraHighlights: "Founding Figure of India's VC Ecosystem · Seedfund",
      location: "Mumbai"
    },
    {
      name: "Vishal Gondal",
      role: "Founder & CEO",
      company: "GOQii Inc.",
      bio: "A leading global figure at the intersection of healthcare, gaming, and entrepreneurship. As Founder and CEO of GOQii, he has transformed preventive healthcare by integrating AI, technology, and gamification across India, the UK, and the Middle East.\n\nKnown globally as the \"Father of the Indian Gaming Industry,\" his early success with Indiagames culminated in its acquisition by The Walt Disney Company; he subsequently launched nCore Games, creator of FAU-G. Organises Mumbai Hacks for healthcare AI innovation. An avid marathon runner, trekker, and skydiver.",
      image: "https://appcdn.goqii.com/storeimg/95221_1781178862.png",
      highlights: ["Preventive Healthcare", "AI & Tech", "Gaming"],
      extraHighlights: "25+ Years in Tech & Health · Indiagames → Disney · GOQii",
      location: "Mumbai · Global"
    },
    {
      name: "Amit Singhal",
      role: "Former SVP Search — Google",
      company: "Founder, Sitare Foundation",
      bio: "The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Amit.png",
      highlights: ["Search / AI", "Engineering", "Philanthropy"],
      extraHighlights: "Google employee #176 • 15 years leading Search | IIT Roorkee • Cornell PhD",
      location: "USA"
    }
  ],
  advisory: [
    {
      name: "Yat Siu",
      role: "Co-Founder & Executive Chairman",
      company: "Animoca Brands",
      bio: "One of Asia's most influential tech entrepreneurs. Founded Asia's first free web and email provider in 1996, built Outblaze into a 75M-user platform before selling its messaging unit to IBM in 2009, then co-founded Animoca Brands — a global Web3 powerhouse with 500+ portfolio investments dedicated to digital property rights. WEF Global Leader of Tomorrow; Cointelegraph's Top 100 in Blockchain. Advisory board member of BAFTA; director of the Asian Youth Orchestra. Classically trained musician.",
      image: "https://appcdn.goqii.com/storeimg/43195_1776772142.jpg",
      highlights: ["Web3 / NFTs", "Gaming", "Digital Ownership"],
      extraHighlights: "Animoca Brands • Outblaze • Dalton Lab",
      location: "Hong Kong"
    },
    {
      name: "Desmond Lin",
      role: "Seasoned Investor & former Insurance-Senior Exec",
      company: "DL Investments",
      bio: "Founder and CEO of DL Investments, focusing on the (re)insurance, insurtech, healthtech and wellness ecosystems in Asia; member of the Strategic Advisory Committee of HSBC's global Fintech Fund; a board member of Korea's largest online insurance company Kyobo Lifeplanet Life Insurance; a Global Advisory Board member of leading international Insurtech fund Eos Venture Partners; Venture Partner of Wings Capital Ventures.",
      image: "https://appcdn.goqii.com/storeimg/60127_1776772180.jpg",
      highlights: ["Insurtech", "Healthtech", "PE / VC"],
      extraHighlights: "DL Investments | Swiss Re | PE Funds | Goldman Sachs",
      location: "Hong Kong"
    },
    {
      name: "Rich Robinson",
      role: "Entrepreneur-in-Residence",
      company: "Animoca Brands",
      bio: "Nearly 30 years building and backing technology businesses across Asia — from Web 1.0 through Web3. Co-founded or served as senior executive at 8 startups; 3 exited to publicly listed companies. Mentored and invested through HAX, Orbit/Chinaccelerator, and 500 Startups. Clinical Professor of Entrepreneurship at Peking University's Guanghua International MBA programme. A rare connector bridging Silicon Valley, China, and Southeast Asia.",
      image: "https://appcdn.goqii.com/storeimg/8353_1776772221.jpg",
      highlights: ["Web3", "Startups", "Asia"],
      extraHighlights: "8 startups founded or led | Bali • HK • Beijing",
      location: "Bali · HK · Beijing"
    },
    {
      name: "Prof Vincent Sai",
      role: "Group CEO & Partner",
      company: "Modality Partnership (NHS)",
      bio: "The executive who scaled the UK's largest NHS GP super-partnership from 25,000 patients to a national network reaching 12M+ citizens across 55+ sites and 135 GP partners. Honorary Professor of Practice at UCL GBSH and Honorary Fellow of the RCGP. Background spans Aetna (Managing Director, Health Management Services), Deloitte Consulting, and the NHS. Recognised by the Nuffield Trust, King's Fund, and Dartmouth Institute. Leading international health system partnerships across seven countries including Saudi Arabia, Vietnam, and South Africa — and GOQii's NHS clinical outcomes anchor.",
      image: "https://appcdn.goqii.com/storeimg/15436_1776772268.jpg",
      highlights: ["NHS / Primary Care", "Digital Health", "International"],
      extraHighlights: "12M+ patients • 55+ NHS sites • 135 GP partners | UCL • RCGP Fellow",
      location: "London"
    },
    {
      name: "Amit Singhal",
      role: "Former SVP Search — Google",
      company: "Founder, Sitare Foundation",
      bio: "The architect of modern Google Search. Joined Google as employee #176 in 2000 and spent 15 years as SVP and Google Fellow, rewriting the core ranking algorithm — a system serving over a billion daily users. Named by Fortune as one of the smartest people in tech; inducted into the National Academy of Engineering. PhD in Information Retrieval from Cornell. Post-Google, he founded Sitare Foundation to fund education for underprivileged Indian students through to US universities.",
      image: "https://cskb8bjylqfsorzu.public.blob.vercel-storage.com/aakarimages/Amit.png",
      highlights: ["Search / AI", "Engineering", "Philanthropy"],
      extraHighlights: "Google employee #176 • 15 years leading Search | IIT Roorkee • Cornell PhD",
      location: "USA"
    },
    {
      name: "Lauren Selig",
      role: "Founder & CEO",
      company: "Shake and Bake Productions",
      bio: "Entrepreneur and award-winning executive producer behind Hacksaw Ridge, Rocketman, and Wheel of Time. Co-founded V.A.L.I.S. Studios — winner of an Emmy for the first VR summit of Everest. Active investor in Galaxy Interactive, A16z, and Vaxxinity. Board member of XPRIZE. Holds a JD-MBA from Northwestern and a BS from Georgetown's School of Foreign Service.",
      image: "https://appcdn.goqii.com/storeimg/66343_1776772329.png",
      highlights: ["Entertainment", "Venture", "AI & VR"],
      extraHighlights: "20+ years in media & startups | Los Angeles",
      location: "Los Angeles"
    },
    {
      name: "Manoj Narender Madnani",
      role: "President",
      company: "GasEntec • Beacon Media",
      bio: "Global business executive and investment strategist who has orchestrated transactions exceeding $20 billion across energy, infrastructure, blockchain, and media. Former Managing Director at Kulczyk Investments SA, responsible for global energy and infrastructure footprints. Co-founder of Beacon Media; instrumental in bringing enterprise AI firm Beyond Limits into the UAE and wider GCC. Member of the International Energy Forum Industry Advisory Council and The Energy Council advisory board. Babson College alumnus and Trustee; member of the Young Presidents Organization since 2003.",
      image: "https://appcdn.goqii.com/storeimg/67810_1776772436.jpg",
      highlights: ["Global Investments", "Energy & AI", "GCC / MENA"],
      extraHighlights: "$20B+ in transactions • Energy • Blockchain • Media | Dubai • GCC",
      location: "Dubai"
    }
  ],
  longevity: [
    {
      name: "Prof. Anurag Agrawal",
      role: "Longevity Scientist",
      company: "Ashoka University",
      bio: "Genomics & Precision Medicine. Former Director, CSIR-IGIB; Dean, Ashoka University. A global authority in genomics and precision medicine.",
      image: "https://appcdn.goqii.com/storeimg/38857_1780392598.webp",
      highlights: ["Clinical", "Longevity"],
      extraHighlights: "Former Director, CSIR-IGIB · Dean, Ashoka University",
      location: "Delhi · India"
    },
    {
      name: "Dr. Aashish Contractor",
      role: "Cardiology & Rehabilitation",
      company: "Reliance Foundation Hospital",
      bio: "Leading expert in cardiac rehab and preventive cardiology. Director at Sir H.N. Reliance Foundation Hospital.",
      image: "https://appcdn.goqii.com/storeimg/39828_1780392644.jpg",
      highlights: ["Cardiology", "Rehab"],
      extraHighlights: "Director, Sir H.N. Reliance Foundation Hospital",
      location: "Mumbai · India"
    },
    {
      name: "Dr. Nirmal Punjabi",
      role: "Metabolic Health",
      company: "Reliance Foundation Hospital",
      bio: "Specialist in metabolic health and clinical trial validation. Expert in designing and validating clinical protocols.",
      image: "https://appcdn.goqii.com/storeimg/38868_1781004506.webp",
      highlights: ["Metabolic Health", "Research"],
      extraHighlights: "Metabolic Health Specialist · Clinical Trial Expert",
      location: "Mumbai · India"
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
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedMember]);

  return (
    <div
      id="section-leadership"
      className="relative min-h-screen w-full flex flex-col justify-center bg-[#FAFBFB] py-14 px-4 sm:px-6 md:px-16 overflow-hidden select-none border-t border-[#E8EDF2]"
    >
      {/* Header Tag Index Layout */}
      <div className="w-full max-w-7xl mx-auto mb-10 flex flex-col items-start font-sans">
        <div className="flex items-center gap-4 text-xs tracking-wide">
          <span className="font-semibold text-[#2BC48A] text-sm tracking-wide">10</span>
          <span className="text-[#E2E8F0] font-light text-sm">/</span>
          <span className="font-semibold text-[#667085] text-[11px] tracking-[0.25em] uppercase font-sans">
            OUR PEOPLE
          </span>
        </div>
      </div>

      {/* Main Headers & Controls Column Layout */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
        
        {/* Left Headers */}
        <div className="lg:col-span-6 text-left flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-[1.05] font-sans"
          >
            Built by experts. <br />
            <span className="text-[#64748B]">Trusted </span>
            <span className="text-[#2BC48A] relative inline-block">
              globally.
              <span className="absolute left-0 bottom-1.5 w-16 h-1 bg-[#2BC48A]/35 rounded-full" />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#667085] text-sm sm:text-base font-medium mt-6 max-w-md font-sans leading-relaxed"
          >
            A leadership team supplying cross-disciplinary depth across health, AI, deep technology, insurance and governance.
          </motion.p>
        </div>

        {/* Right Tab Controllers */}
        <div className="lg:col-span-6 flex flex-wrap lg:justify-end gap-2.5 self-end lg:mt-0 mt-8">
          {TAB_LABELS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  active
                    ? "bg-[#0A1120] text-white shadow-sm border border-[#0A1120]"
                    : "bg-white border border-[#E2E8F0] text-[#667085] hover:bg-slate-50"
                }`}
              >
                {active && <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A] inline-block animate-pulse" />}
                {tab.label}
              </button>
            );
          })}
        </div>

      </div>

      {/* Grid displaying the members */}
      <div className="w-full max-w-7xl mx-auto z-10 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5"
          >
            {LEADERSHIP_DATA[activeTab].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedMember(member)}
                className="bg-white border border-[#E8EDF2] rounded-[24px] p-2.5 flex flex-col shadow-[0_4px_20px_rgba(15,23,42,0.015)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.035)] hover:border-[#2BC48A] transition-all duration-300 group cursor-pointer relative"
              >
                {/* Image wrapper with aspect ratio aspect-[4/5] */}
                <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[18px]">
                  
                  {/* Grayscale profile pic */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Overlaid sequence ID badge */}
                  <div className="absolute top-3 left-3 w-7 h-7 rounded-full bg-white flex items-center justify-center text-[10px] sm:text-[11px] font-black text-[#0F172A] shadow-sm z-10 font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Overlaid view bio badge on hover */}
                  <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="bg-white/95 backdrop-blur-sm text-[#0F172A] text-[10px] font-extrabold tracking-wider uppercase px-3 py-1.5 rounded-full shadow-md transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Bio
                    </span>
                  </div>

                </div>

                {/* White content body below image */}
                <div className="px-3 pb-3 pt-4 flex flex-col flex-grow text-left">
                  
                  {/* Double vertical tag stack of Highlights */}
                  <div className="flex flex-col gap-1 mb-4 items-start">
                    {member.highlights?.slice(0, 2).map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-0.5 bg-[#E8F8F1] text-[#1AA16E] text-[9px] sm:text-[10px] font-extrabold tracking-wide uppercase rounded-[4px] truncate max-w-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Member Name */}
                  <h3 className="text-sm sm:text-base font-black text-[#0F172A] tracking-normal mb-1 group-hover:text-[#2BC48A] transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Member Role */}
                  <p className="text-[10px] sm:text-[11px] font-semibold text-[#667085] leading-normal mb-5 flex-grow">
                    {member.role}
                  </p>

                  {/* Plus Trigger Button */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-bold text-[#2BC48A] group-hover:underline">
                      Full Bio &rarr;
                    </span>
                  </div>

                </div>

              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Global Mind Bottom Pill Indicator */}
      <div className="flex justify-center w-full mt-10">
        <div className="inline-flex items-center gap-2.5 bg-white border border-[#E2E8F0] px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.015)] text-xs sm:text-sm font-semibold text-[#475467] font-sans">
          <div className="w-6 h-6 rounded-full bg-[#E5F7F0] flex items-center justify-center text-[#2BC48A]">
            <svg className="w-3.5 h-3.5 text-[#2BC48A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.905 0-5.54-1.033-7.593-2.736m15.186 0C19.82 9.033 17.185 10.5 12 10.5c-2.905 0-5.54-1.033-7.593-2.736M21 12A9 9 0 113 12a9 9 0 0118 0z" />
            </svg>
          </div>
          <span>
            Global minds. Shared purpose. <span className="text-[#2BC48A] font-bold">Better health for every human.</span>
          </span>
        </div>
      </div>

      {/* FULL-SCREEN DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md">
            
            {/* Click-outside backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 cursor-default"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              className="relative w-full max-w-4xl bg-white rounded-[32px] overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.18)] border border-slate-100 flex flex-col md:flex-row z-10 max-h-[90vh] md:max-h-[85vh]"
            >
              
              {/* Left Side: Grayscale/Color Active Photo Block */}
              <div className="w-full md:w-[40%] bg-[#FAFBFB] relative overflow-hidden flex items-center justify-center shrink-0 border-b md:border-b-0 md:border-r border-slate-100 h-44 sm:h-52 md:h-auto aspect-square md:aspect-auto md:min-h-full">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual design gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
                
                {/* Badge layout inside photo */}
                {selectedMember.location && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-black text-[#0F172A] tracking-wider uppercase shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A]" />
                    {selectedMember.location}
                  </div>
                )}
              </div>

              {/* Right Side: Detailed Narrative Information */}
              <div className="flex-grow p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto text-left relative">
                
                {/* Close Button on Top Right */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-[#2BC48A] hover:text-white flex items-center justify-center text-[#64748B] transition-colors cursor-pointer z-20 shadow-sm"
                  aria-label="Close modal"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Tags Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5 mt-2 sm:mt-0">
                  {selectedMember.company && (
                    <span className="px-2.5 py-1 bg-slate-900 text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase rounded-[6px]">
                      {selectedMember.company}
                    </span>
                  )}
                  {selectedMember.highlights?.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2.5 py-1 bg-[#E8F8F1] text-[#1AA16E] text-[9px] sm:text-[10px] font-black tracking-wider uppercase rounded-[6px]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Name */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-1.5 mr-8 leading-none">
                  {selectedMember.name}
                </h2>

                {/* Role */}
                <p className="text-sm sm:text-base font-bold text-[#2BC48A] tracking-normal mb-6">
                  {selectedMember.role}
                </p>

                {/* Divider */}
                <div className="w-full h-[1px] bg-slate-100 mb-6" />

                {/* Decription/Bio Narrative (Formatted by Newlines) */}
                <div className="text-[#475467] text-[13px] sm:text-[14px] leading-relaxed font-medium space-y-4 flex-grow pr-1">
                  {selectedMember.bio.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* Footer Section Inside Modal */}
                {selectedMember.extraHighlights && (
                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3 sm:items-center text-[10px] sm:text-[11px] text-[#64748B] font-semibold">
                    <span className="text-[#0f172a] font-bold shrink-0 uppercase tracking-widest text-[9px]">
                      Credentials
                    </span>
                    <span className="hidden sm:inline text-slate-300">|</span>
                    <span className="bg-[#FAFBFB] sm:bg-transparent px-2 py-1 sm:p-0 rounded border border-slate-100 sm:border-0 leading-normal">
                      {selectedMember.extraHighlights}
                    </span>
                  </div>
                )}

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
