import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  Sparkles,
  Smartphone,
  Watch,
  MessageSquare,
  HeartPulse,
  Trophy,
  Package,
  UserCheck,
  Shield,
  ChevronDown,
  ChevronRight,
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  Activity,
  Headphones,
  Scale,
  Zap,
  RotateCcw,
  BookOpen,
  X,
  FileText,
  Share2,
  Send,
  Info,
  Layers,
  PhoneCall,
  MessageCircle
} from "lucide-react";

// --- Types ---
export interface FaqArticle {
  id: string;
  title: string;
  category: string;
  categoryCode: string;
  deviceTag?: "Smart Vital" | "Vital 3.0" | "Vital ECG" | "Smart Scale" | "Other Devices";
  naturalQueries: string[];
  summary: string;
  content: string[];
  relatedIds: string[];
}

export interface TopicCategory {
  code: string;
  title: string;
  icon: React.ElementType;
  topics: string[];
  cta: string;
  description: string;
}

// --- Topic Categories Data ---
const TOPIC_CATEGORIES: TopicCategory[] = [
  {
    code: "01",
    title: "Getting Started",
    icon: Sparkles,
    topics: [
      "What is GOQii?",
      "How does GOQii work?",
      "How do I get started?",
      "How do I set up my GOQii subscription?",
      "Create a GOQii account",
      "Login to GOQii",
      "Choose a coach",
      "Connect your first device"
    ],
    cta: "View Getting Started →",
    description: "Welcome to GOQii. Learn platform basics, account setup, and onboarding."
  },
  {
    code: "02",
    title: "GOQii App",
    icon: Smartphone,
    topics: [
      "Using the GOQii App",
      "Account setup",
      "Goals & Habits",
      "Health data",
      "Logging food, water and activity",
      "Notifications",
      "Connected Apps",
      "App connectivity",
      "Syncing health data"
    ],
    cta: "Explore App Help →",
    description: "Master navigation, activity logging, custom reminders, and app settings."
  },
  {
    code: "03",
    title: "Devices & Trackers",
    icon: Watch,
    topics: [
      "Connect a GOQii device",
      "Syncing problems",
      "Charging & Battery",
      "Device accuracy",
      "Notifications",
      "Device setup",
      "Warranty",
      "Compatible third-party devices"
    ],
    cta: "Explore Trackers →",
    description: "Pairing guides, Bluetooth troubleshooting, sensor care, and third-party sync."
  },
  {
    code: "04",
    title: "Coaching",
    icon: MessageSquare,
    topics: [
      "Who is a GOQii Coach?",
      "Coaching methodology",
      "Choosing a coach",
      "Communicating with your coach",
      "Sharing health information",
      "Changing your coach",
      "Coaching plans"
    ],
    cta: "Coaching FAQs →",
    description: "Connect 1-on-1 with certified health coaches, nutritionists, and fitness experts."
  },
  {
    code: "05",
    title: "Health Features",
    icon: HeartPulse,
    topics: [
      "Health Locker",
      "Health Risk Assessment",
      "Diagnostics",
      "GOQii Doctor",
      "Health records",
      "Vitals tracking",
      "Health insights"
    ],
    cta: "Health Features →",
    description: "Store medical reports, consult doctors, and view AI longevity insights."
  },
  {
    code: "06",
    title: "Challenges & Rewards",
    icon: Trophy,
    topics: [
      "GOQii Challenges",
      "Corporate Challenges",
      "Spot Challenges",
      "GOQii Karma",
      "Rewards",
      "Activity integrations",
      "Challenge tracking"
    ],
    cta: "Challenges & Rewards →",
    description: "Earn GOQii Cash & Karma points by completing daily active health goals."
  },
  {
    code: "07",
    title: "Orders & Store",
    icon: Package,
    topics: [
      "Track my order",
      "Shipping & delivery",
      "Returns",
      "Damaged products",
      "Wrong order",
      "Health Store",
      "Order support"
    ],
    cta: "Order Support →",
    description: "Check delivery status, track marketplace dispatches, and manage store returns."
  },
  {
    code: "08",
    title: "Account & Subscription",
    icon: UserCheck,
    topics: [
      "My Account",
      "Login & Password",
      "Profile & Privacy",
      "Subscription renewal",
      "Account settings",
      "Personal information"
    ],
    cta: "Account Help →",
    description: "Manage membership plans, update email or phone numbers, and security options."
  },
  {
    code: "09",
    title: "Warranty & Product Support",
    icon: Shield,
    topics: [
      "Product warranty",
      "Warranty eligibility",
      "Claim warranty",
      "Device replacement",
      "Manufacturing defects",
      "Straps & accessories",
      "Returns policy"
    ],
    cta: "Warranty Support →",
    description: "Submit 1-year hardware warranty claims and request authorized service."
  }
];

// --- Comprehensive Articles Database ---
const FAQ_ARTICLES: FaqArticle[] = [
  // CATEGORY 01: Getting Started
  {
    id: "art-what-is-goqii",
    title: "What is GOQii and how does it work?",
    category: "Getting Started",
    categoryCode: "01",
    naturalQueries: ["what is goqii", "how does goqii work", "about goqii", "getting started", "goqii platform"],
    summary: "GOQii is a smart preventive healthcare ecosystem combining wearable trackers, 1-on-1 human coaching, health risk assessments, and medical consultations.",
    content: [
      "GOQii is an end-to-end preventive healthcare platform engineered to bridge continuous health tracking with expert human guidance.",
      "Key Pillars of GOQii:",
      "• Smart Devices & Wearables: Track steps, sleep architecture, continuous SpO2, body temperature, and heart rate dynamics.",
      "• Certified Human Coaching: Work 1-on-1 with dedicated health coaches, certified clinical nutritionists, and fitness instructors who personalize your daily targets.",
      "• Health Locker & Diagnostics: Securely store lab reports, track medical history, and order doorstep blood tests.",
      "• Doctor Consultations: Schedule instant video or audio consultations with qualified doctors for health evaluations and prescription guidance.",
      "• Karma & Active Rewards: Earn Karma points for every healthy habit you complete, which support charitable causes or unlock store discounts."
    ],
    relatedIds: ["art-get-started-setup", "art-choose-coach", "art-contact-support"]
  },
  {
    id: "art-get-started-setup",
    title: "How do I set up my GOQii account and subscription?",
    category: "Getting Started",
    categoryCode: "01",
    naturalQueries: ["how to setup goqii", "setup subscription", "activate goqii account", "onboarding guide"],
    summary: "Complete guide on creating a GOQii account, redeeming activation codes, and starting your personal wellness subscription.",
    content: [
      "Setting up your GOQii account takes under 2 minutes:",
      "1. Download the GOQii App from Google Play Store or Apple App Store.",
      "2. Open the app and enter your 10-digit mobile number to receive an instant OTP.",
      "3. Enter the 6-digit OTP code to verify your mobile number.",
      "4. Enter your activation code (provided inside your GOQii smart tracker box or email receipt) to unlock your coaching subscription.",
      "5. Complete your Health Profile (Age, Height, Weight, Dietary Preferences, and Primary Health Goal).",
      "6. You are now ready to connect your tracker and pair with your dedicated GOQii Health Coach!"
    ],
    relatedIds: ["art-what-is-goqii", "art-choose-coach", "art-forgot-password"]
  },
  {
    id: "art-choose-coach",
    title: "How do I select & match with a GOQii Coach?",
    category: "Getting Started",
    categoryCode: "01",
    naturalQueries: ["choose coach", "select coach", "coach onboarding", "matching with coach"],
    summary: "Learn how GOQii algorithms match you with certified nutritionists, fitness experts, or habit coaches aligned with your goals.",
    content: [
      "During initial onboarding, GOQii presents a curated selection of certified coaches based on your health profile:",
      "• Goal Alignment: Filter coaches by specialization (e.g., Weight Loss, Diabetes Management, Hypertension, Endurance Training, or Stress Reduction).",
      "• Language Preference: Select coaches fluent in English, Hindi, Marathi, Gujarati, Tamil, Telugu, Kannada, or Bengali.",
      "• Coach Bio & Reviews: View coach qualifications, certifications, success stories, and user ratings before confirming.",
      "• First Consultation Call: Once assigned, your coach will initiate a welcome message and schedule an intro consultation to establish your baseline habits."
    ],
    relatedIds: ["art-coach-communication", "art-change-coach"]
  },

  // CATEGORY 02: GOQii App
  {
    id: "art-app-overview",
    title: "How do I navigate the GOQii App and log daily habits?",
    category: "GOQii App",
    categoryCode: "02",
    naturalQueries: ["using goqii app", "app overview", "log food", "log water", "habit tracking"],
    summary: "Master the GOQii App interface: logging meals with NutriGenius, tracking hydration, water logs, and step targets.",
    content: [
      "The GOQii App dashboard is structured into intuitive daily health cards:",
      "1. Home / Log Tab: View step count, active calories burned, sleep score, and real-time heart rate.",
      "2. Food & Water Logging: Tap the '+' icon to log meals. Use NutriGenius AI camera photo recognition to instantly count calories and macros.",
      "3. Habit Tracker: Tick off daily habits assigned by your coach (e.g., 8 glasses of water, 10-minute mindfulness breathing, 10k steps).",
      "4. Vitals & Sync: Pull down on the home screen at any time to initiate instant Bluetooth sync with your GOQii tracker."
    ],
    relatedIds: ["art-app-syncing", "art-device-connect"]
  },
  {
    id: "art-app-syncing",
    title: "How to connect Google Fit or Apple Health with GOQii?",
    category: "GOQii App",
    categoryCode: "02",
    naturalQueries: ["google fit sync", "apple health sync", "connect app", "sync health data"],
    summary: "Pass activity logs, workouts, and vitals seamlessly between GOQii and third-party health apps.",
    content: [
      "Connecting Apple Health (iOS) or Google Fit / Health Connect (Android) allows auto-syncing of steps and workouts:",
      "• Apple Health (iOS): Go to GOQii App → Profile → Settings → Connected Apps → Apple Health → Enable All Permissions.",
      "• Google Fit (Android): Go to GOQii App → Profile → Settings → Connected Apps → Google Fit / Health Connect → Authorize Google Account.",
      "Data synced includes step count, active calories, distance walked, and sleep duration."
    ],
    relatedIds: ["art-third-party-devices", "art-device-sync-issue"]
  },

  // CATEGORY 03: Devices & Trackers
  {
    id: "art-device-connect",
    title: "How do I connect & pair my GOQii tracker to the app?",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Smart Vital",
    naturalQueries: ["how do i connect my tracker?", "connect my device", "pair tracker", "how to connect watch", "device setup", "bluetooth pair"],
    summary: "Step-by-step instructions to pair your GOQii Smart Vital, Vital 3.0, or Vital ECG device with the Android or iOS GOQii app.",
    content: [
      "Follow these simple steps to pair your GOQii Smart Tracker with your mobile device:",
      "1. Turn on Bluetooth and Location Services on your smartphone.",
      "2. Download and launch the GOQii App from Google Play Store or Apple App Store.",
      "3. Log in with your registered phone number or GOQii account.",
      "4. Navigate to Home → Profile / Tracker Settings → Add / Connect Tracker.",
      "5. Select your specific model (e.g., Smart Vital, Vital 3.0, Vital ECG, or Smart Scale).",
      "6. Ensure your tracker is fully charged (>20%) and kept next to your smartphone.",
      "7. Tap 'Search Tracker' and select your device name from the discovered Bluetooth list.",
      "8. Accept the 6-digit Bluetooth pairing request on both your phone and tracker screen.",
      "Once connected, the app will perform an initial background sync of your firmware and baseline vitals."
    ],
    relatedIds: ["art-device-sync-issue", "art-third-party-devices", "art-smart-vital-guide"]
  },
  {
    id: "art-device-sync-issue",
    title: "Why isn't my GOQii device syncing and how to fix it?",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Smart Vital",
    naturalQueries: ["my watch isn't syncing", "sync issue", "why isn't my goqii device syncing?", "syncing problems", "tracker not syncing", "bluetooth connection failed"],
    summary: "Troubleshooting steps for resolving Bluetooth disconnects, background sync pauses, and data synchronization issues.",
    content: [
      "If your GOQii tracker is not syncing data or shows 'Disconnected', try these troubleshooting steps in sequence:",
      "Step 1: Toggle Phone Bluetooth",
      "Turn off Bluetooth in your phone's quick settings bar for 10 seconds, then turn it back on.",
      "Step 2: Restart the GOQii App",
      "Force close the GOQii app from your phone's recent apps switcher and reopen it. Pull down on the app Home screen to trigger a manual refresh.",
      "Step 3: Verify Operating System Permissions",
      "Go to your phone's Settings → Apps → GOQii → Permissions. Ensure both 'Location' and 'Nearby Devices / Bluetooth' permissions are set to 'Allow all the time'.",
      "Step 4: Restart your Tracker",
      "Long press the side button or menu touch panel on your GOQii tracker for 8 seconds until the logo appears and the device restarts.",
      "Step 5: Unpair and Re-pair Device",
      "In the GOQii App, go to Profile → Tracker Settings → Unpair Tracker. Restart your phone's Bluetooth, then repeat the device pairing process from scratch.",
      "Note: Do not pair the device directly inside your phone's native Bluetooth settings menu; pairing must always be initiated through the GOQii App."
    ],
    relatedIds: ["art-device-connect", "art-claim-warranty", "art-smart-vital-guide"]
  },
  {
    id: "art-third-party-devices",
    title: "Can I use another smartwatch or Apple Watch / Fitbit with GOQii?",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Other Devices",
    naturalQueries: ["can i use another smartwatch with goqii?", "apple watch", "fitbit", "google fit", "apple health", "samsung health", "garmin"],
    summary: "Instructions for linking Apple Health, Google Fit, Garmin, and third-party smartwatches to the GOQii ecosystem.",
    content: [
      "Yes! You can use third-party smartwatches and health apps with GOQii by bridging your fitness data via Apple Health (iOS) or Google Fit / Health Connect (Android).",
      "Connecting via Apple Health (iPhone):",
      "1. Open GOQii App → Profile → Settings → Connected Apps & Services.",
      "2. Select 'Apple Health'.",
      "3. Grant permissions for Steps, Heart Rate, Active Calories, and Sleep Analysis.",
      "Connecting via Google Fit / Health Connect (Android):",
      "1. Open GOQii App → Profile → Settings → Connected Apps & Services.",
      "2. Select 'Google Fit' or 'Health Connect'.",
      "3. Authorize your Google account to pass activity and sensor logs directly into GOQii."
    ],
    relatedIds: ["art-device-connect", "art-device-sync-issue"]
  },

  // CATEGORY 04: Coaching
  {
    id: "art-coach-communication",
    title: "How do I communicate with & message my GOQii Coach?",
    category: "Coaching",
    categoryCode: "04",
    naturalQueries: ["how do i talk to my coach?", "coaching", "message my coach", "communicating with your coach", "chat with coach", "schedule video call coach"],
    summary: "Learn how to send daily messages, meal photos, activity updates, and schedule 1-on-1 audio/video calls with your coach.",
    content: [
      "Your certified GOQii Coach is your personal guide for habit building, nutrition adjustments, and physical activity guidance.",
      "How to Message Your Coach:",
      "1. Open the GOQii App and tap the 'Coach' tab on the bottom menu.",
      "2. Tap the chat text bar to send real-time text notes, voice messages, or upload meal photos.",
      "3. Your coach reviews your logged meals, step counts, and sleep logs during active shift hours (Mon–Sat) and responds with tailored recommendations.",
      "Scheduling Voice / Video Calls:",
      "1. Inside the Coach section, tap the 'Call Coach' or 'Schedule Consultation' button.",
      "2. Select your preferred date and available time slot.",
      "3. You will receive a push notification reminder 10 minutes prior to your scheduled consultation."
    ],
    relatedIds: ["art-change-coach", "art-what-is-goqii"]
  },
  {
    id: "art-change-coach",
    title: "Can I change my assigned GOQii Coach?",
    category: "Coaching",
    categoryCode: "04",
    naturalQueries: ["change coach", "how to change coach", "switch coach", "choose another coach", "different coach"],
    summary: "How to request a coach reassignment based on language preferences, health goals, or schedule alignment.",
    content: [
      "We want to ensure you have the best possible synergy with your personal health coach.",
      "To Request a Coach Change:",
      "1. Open GOQii App → Coach Tab → Tap Settings / Gear Icon on the top right.",
      "2. Select 'Request Coach Change'.",
      "3. Choose your reason (e.g., Language preference, specific health focus like Diabetes Management or Weight Loss, or timing alignment).",
      "4. Our care team will re-assign a new certified coach matching your criteria within 24 hours."
    ],
    relatedIds: ["art-coach-communication", "art-what-is-goqii"]
  },

  // CATEGORY 05: Health Features
  {
    id: "art-health-locker",
    title: "How to use Health Locker & store medical records?",
    category: "Health Features",
    categoryCode: "05",
    naturalQueries: ["health locker", "medical records", "upload blood test", "store prescriptions", "health data"],
    summary: "Store, digitize, and share blood reports, prescriptions, and diagnostic lab tests securely inside GOQii Health Locker.",
    content: [
      "GOQii Health Locker is your secure, HIPAA-compliant digital vault for lifelong health records:",
      "• Upload Reports: Take a camera photo or upload PDF files of blood tests, doctor prescriptions, or radiology scans.",
      "• AI Digitization: Key vital parameters (HbA1c, Cholesterol, Lipid Profile, Thyroid) are auto-extracted into trend charts.",
      "• Doctor Sharing: Share encrypted health locker records with your GOQii doctor or personal physician in 1 click."
    ],
    relatedIds: ["art-goqii-doctor", "art-what-is-goqii"]
  },
  {
    id: "art-goqii-doctor",
    title: "How do I consult a GOQii Doctor online?",
    category: "Health Features",
    categoryCode: "05",
    naturalQueries: ["consult doctor", "goqii doctor", "online doctor consultation", "book appointment doctor"],
    summary: "Schedule instant tele-consultations with certified MBBS doctors, physicians, and specialists.",
    content: [
      "As a GOQii member, you have direct access to qualified medical doctors:",
      "1. Open GOQii App → Health Tab → Consult Doctor.",
      "2. Select instant audio/video consultation or schedule a preferred appointment slot.",
      "3. Review your Health Locker records with the doctor during the session.",
      "4. Receive an official digital prescription immediately after your consultation ends."
    ],
    relatedIds: ["art-health-locker", "art-what-is-goqii"]
  },

  // CATEGORY 06: Challenges & Rewards
  {
    id: "art-challenges-rewards",
    title: "How do GOQii Challenges, Karma points, and rewards work?",
    category: "Challenges & Rewards",
    categoryCode: "06",
    naturalQueries: ["karma points", "goqii rewards", "challenges", "earn goqii cash", "corporate challenge"],
    summary: "Earn Karma points for active habits, donate to charitable causes, or redeem GOQii Cash for store discounts.",
    content: [
      "GOQii turns healthy living into a rewarding social journey:",
      "• Karma Points: Earn Karma for every 1,000 steps walked or habit logged. Karma points can be donated to partner NGOs (providing meals to children, planting trees).",
      "• GOQii Cash: Earn wellness reward points for winning step challenges. Use GOQii Cash to get up to 50% off on GOQii Health Store purchases.",
      "• Challenges: Participate in monthly national step challenges, corporate leaderboards, and spot habit streaks."
    ],
    relatedIds: ["art-what-is-goqii", "art-app-overview"]
  },

  // CATEGORY 07: Orders & Store
  {
    id: "art-track-order",
    title: "How do I track my order & delivery status?",
    category: "Orders & Store",
    categoryCode: "07",
    naturalQueries: ["where is my order?", "how do i track my order?", "track order", "shipping status", "delivery date", "courier tracking"],
    summary: "Check shipment dispatch details, courier tracking links, and estimated delivery dates for GOQii devices and store orders.",
    content: [
      "You can track the live status of your GOQii tracker or marketplace store order easily:",
      "1. Open the GOQii App or visit store.goqii.com.",
      "2. Go to Profile → My Orders.",
      "3. Tap on your recent Order Number to view dispatch status, courier name (e.g. BlueDart, Delhivery, Expressbees), and Air Waybill (AWB) number.",
      "4. Click 'Track Shipment' to open the live courier portal.",
      "Orders are typically dispatched within 24–48 hours of confirmation. Delivery takes 2–5 business days depending on your pin code location."
    ],
    relatedIds: ["art-claim-warranty", "art-returns-refunds"]
  },
  {
    id: "art-returns-refunds",
    title: "What is GOQii's return and refund policy?",
    category: "Orders & Store",
    categoryCode: "07",
    naturalQueries: ["returns policy", "refund policy", "return product", "cancel order", "damaged product"],
    summary: "Guidelines on 7-day return windows for hardware products purchased from the official GOQii webstore.",
    content: [
      "GOQii offers a 7-day replacement/return policy for hardware devices ordered directly through store.goqii.com or the GOQii App.",
      "Return Guidelines:",
      "• Product must be unused, in original packaging, with all accessories, user manuals, and seals intact.",
      "• Damaged on arrival or transit defect items must be reported within 48 hours of delivery.",
      "• Digital coaching subscriptions, lab tests, or digital passes once activated are non-refundable."
    ],
    relatedIds: ["art-track-order", "art-claim-warranty"]
  },

  // CATEGORY 08: Account & Subscription
  {
    id: "art-forgot-password",
    title: "I forgot my password or cannot log in to my account",
    category: "Account & Subscription",
    categoryCode: "08",
    naturalQueries: ["i forgot my password", "forgot password", "reset password", "login error", "cannot log in", "otp issue"],
    summary: "Reset your GOQii login password using SMS OTP or registered email authentication.",
    content: [
      "If you are unable to log in to your GOQii account, follow these recovery steps:",
      "1. On the GOQii App Login Screen, tap 'Forgot Password?'.",
      "2. Enter your registered 10-digit mobile phone number or registered email address.",
      "3. Tap 'Send Verification Code'. You will receive a 6-digit OTP via SMS / Email.",
      "4. Enter the OTP code on screen and tap Verify.",
      "5. Create a new secure password (minimum 8 characters with at least 1 number).",
      "If you no longer have access to your registered mobile number, please contact support@goqii.com with your proof of identity and order details."
    ],
    relatedIds: ["art-get-started-setup", "art-contact-support"]
  },
  {
    id: "art-subscription-renewal",
    title: "How do I renew or upgrade my GOQii Subscription?",
    category: "Account & Subscription",
    categoryCode: "08",
    naturalQueries: ["renew subscription", "extend membership", "upgrade plan", "coaching subscription renewal"],
    summary: "How to renew 3-month, 6-month, or 12-month personal coaching & health plans.",
    content: [
      "To renew or extend your active coaching subscription:",
      "1. Open GOQii App → Profile → Subscription Plans.",
      "2. Choose your preferred plan duration (3 Months, 6 Months, or 12 Months).",
      "3. Apply available GOQii Cash discount coupons.",
      "4. Pay securely via UPI, Credit/Debit Card, or Netbanking. Your current coach assignment will seamlessly continue without interruption!"
    ],
    relatedIds: ["art-forgot-password", "art-coach-communication"]
  },

  // CATEGORY 09: Warranty & Product Support
  {
    id: "art-claim-warranty",
    title: "How do I claim warranty for my GOQii device?",
    category: "Warranty & Product Support",
    categoryCode: "09",
    naturalQueries: ["how do i claim warranty?", "warranty", "claim warranty", "warranty support", "defective watch", "device replacement", "hardware defect"],
    summary: "Submit a 1-year limited manufacturer warranty claim for hardware defects, display issues, or charging port faults.",
    content: [
      "All official GOQii smart trackers and smart scales are covered by a 1-year manufacturer warranty against hardware and manufacturing defects.",
      "Eligibility Requirements:",
      "• Device purchased from official GOQii webstore or authorized retailer (Amazon, Flipkart, Croma).",
      "• Valid purchase invoice showing date of purchase within 12 months.",
      "• Issue caused by internal hardware/manufacturing defect (excludes physical impact damage, water submersion beyond IP rating, or unauthorized liquid entry).",
      "How to Submit a Warranty Claim:",
      "1. Open GOQii App → Support → Register Warranty Claim.",
      "2. Fill in your Order/Invoice ID, device serial number (located on product packaging box), and describe the hardware issue.",
      "3. Attach a brief 10-second video clip demonstrating the defect (e.g. screen non-responsive, charging fault).",
      "4. Our technical evaluation team will review your ticket within 24 hours and arrange doorstep courier pickup for replacement."
    ],
    relatedIds: ["art-device-sync-issue", "art-track-order"]
  },

  // DEVICE SPECIFIC HARDWARE GUIDES
  {
    id: "art-smart-vital-guide",
    title: "GOQii Smart Vital — Setup, Blood Pressure & SpO2 Diagnostics",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Smart Vital",
    naturalQueries: ["smart vital", "goqii smart vital", "spo2 sensor", "body temperature vital", "blood pressure vital"],
    summary: "Detailed overview of GOQii Smart Vital features including continuous body temperature, blood oxygen SpO2, and blood pressure monitoring.",
    content: [
      "The GOQii Smart Vital features a 1.3-inch HD touch screen with integrated clinical-grade medical sensors.",
      "Key Features & Operations:",
      "• SpO2 Blood Oxygen: Tap 'SpO2' on the watch menu. Sit still with your arm resting on a flat surface for 15 seconds to complete the measurement.",
      "• Body Temperature: Continuous sensor monitors surface body temperature. View real-time temperature logs inside GOQii App → Vitals.",
      "• Blood Pressure Monitoring: Calibrate your Smart Vital using a standard cuff monitor once every 30 days under Profile → Device Calibration for optical sensor precision.",
      "• Battery & Charging: Includes magnetic USB charging cable. Full charge time is ~90 minutes providing 7 days of normal operational battery life."
    ],
    relatedIds: ["art-device-connect", "art-device-sync-issue"]
  },
  {
    id: "art-vital-3-guide",
    title: "GOQii Vital 3.0 — Temperature Calibration & Battery Care",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Vital 3.0",
    naturalQueries: ["vital 3.0", "goqii vital 3", "vital 3 temperature", "vital 3 charging"],
    summary: "Charging instructions, thermal sensor usage, and waterproof maintenance for the GOQii Vital 3.0 activity tracker.",
    content: [
      "The GOQii Vital 3.0 tracker incorporates integrated body temperature sensing with automated thermal alerts.",
      "Charging Your Vital 3.0:",
      "1. Remove the bottom strap to reveal the built-in USB charging dongle.",
      "2. Plug the USB connector directly into any standard 5V/1A USB wall adapter or computer USB port.",
      "3. A battery charging icon will illuminate on the OLED display. Full charge takes approximately 1.5 hours.",
      "Water Resistance:",
      "Vital 3.0 is IP68 water resistant. It can withstand sweat, rain, and hand washing, but should not be used in hot showers, saunas, or deep diving."
    ],
    relatedIds: ["art-device-connect", "art-device-sync-issue"]
  },
  {
    id: "art-vital-ecg-guide",
    title: "GOQii Vital ECG — ECG Recording & Heart Rhythm Analysis",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Vital ECG",
    naturalQueries: ["vital ecg", "goqii ecg", "ecg recording", "heart rhythm report", "arrhythmia tracking"],
    summary: "How to record lead-1 ECG traces, generate PDF health reports, and share readings with your GOQii doctor.",
    content: [
      "The GOQii Vital ECG provides medical-grade single-lead ECG recording to detect sinus rhythms and irregular heart beats.",
      "How to Take an ECG Reading:",
      "1. Open the GOQii App and select 'Record ECG' or navigate to ECG on your device.",
      "2. Place your index finger firmly on the metal ECG electrode on the front face of the band.",
      "3. Keep your hands resting still on a table for 30 seconds while the electrical trace records.",
      "4. The app generates a PDF report categorized by AI algorithm and certified cardiologists, accessible in your Health Locker."
    ],
    relatedIds: ["art-device-connect", "art-claim-warranty"]
  },
  {
    id: "art-smart-scale-guide",
    title: "GOQii Smart Scale — Body Composition & BMI Syncing",
    category: "Devices & Trackers",
    categoryCode: "03",
    deviceTag: "Smart Scale",
    naturalQueries: ["smart scale", "goqii scale", "body fat percentage", "bmi sync", "body composition scale"],
    summary: "BIA bio-impedance measurement guide for tracking body fat %, visceral fat, muscle mass, and hydration metrics.",
    content: [
      "The GOQii Smart Scale utilizes Bioelectrical Impedance Analysis (BIA) to measure 18 essential body composition metrics.",
      "How to Get Accurate Readings:",
      "1. Place the Smart Scale on a hard, flat floor surface (avoid carpets or uneven tiles).",
      "2. Step onto the metallic electrode plates with bare, clean, dry feet.",
      "3. Ensure the GOQii App is open on your smartphone with Bluetooth enabled.",
      "4. Remain still for 5 seconds until your weight and body fat % stabilize on the LED display and sync automatically to your health profile."
    ],
    relatedIds: ["art-device-connect", "art-device-sync-issue"]
  },
  {
    id: "art-contact-support",
    title: "How do I contact GOQii Support directly?",
    category: "Getting Started",
    categoryCode: "01",
    naturalQueries: ["how do i contact goqii support?", "contact support", "support phone number", "customer service email", "help desk", "talk to support"],
    summary: "Connect with GOQii 24/7 customer care via in-app live chat, toll-free phone line, or support email.",
    content: [
      "Our customer assistance team is ready to help you resolve any account, coaching, or hardware questions:",
      "1. In-App Support Chat (Fastest response):",
      "Open GOQii App → Home → Support → Tap 'Chat with GOQii Support'. Automated guidance is available 24/7, with live customer success agents available Mon–Sat (9 AM – 8 PM IST).",
      "2. Email Support:",
      "Send your queries to support@goqii.com along with your registered mobile number, order ID, or screenshots.",
      "3. Toll-Free Customer Helpline:",
      "Call 1800-313-2288 (Toll-Free India) available Monday to Saturday between 9:00 AM and 7:00 PM IST."
    ],
    relatedIds: ["art-what-is-goqii", "art-claim-warranty", "art-track-order"]
  }
];

// --- Device List Selector Items ---
const DEVICE_LIST = [
  { name: "Smart Vital", tag: "Smart Vital" as const, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=300&q=80", desc: "SpO2, Blood Pressure & Temp Tracker" },
  { name: "Vital 3.0", tag: "Vital 3.0" as const, image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=300&q=80", desc: "Continuous Body Temperature Band" },
  { name: "Vital ECG", tag: "Vital ECG" as const, image: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=300&q=80", desc: "Lead-1 ECG & Heart Rhythm Sensor" },
  { name: "Smart Scale", tag: "Smart Scale" as const, image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80", desc: "18 Bio-Impedance Body Fat Metrics" },
  { name: "Other Devices", tag: "Other Devices" as const, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80", desc: "Apple Watch, Fitbit, Garmin & Fit Sync" }
];

// --- Popular Search Tags ---
const POPULAR_SEARCH_TAGS = [
  "Connect my device",
  "Sync issue",
  "Coaching",
  "Warranty",
  "Track order"
];

// --- Popular Accordion Questions ---
const POPULAR_ACCORDION_IDS = [
  "art-what-is-goqii",
  "art-device-connect",
  "art-device-sync-issue",
  "art-coach-communication",
  "art-third-party-devices",
  "art-track-order",
  "art-claim-warranty",
  "art-contact-support"
];

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [activeArticle, setActiveArticle] = useState<FaqArticle | null>(null);
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("art-what-is-goqii");
  const [articleFeedback, setArticleFeedback] = useState<Record<string, "yes" | "no">>({});

  // POPUP MODAL STATES
  const [modalTopic, setModalTopic] = useState<TopicCategory | null>(null);
  const [modalDevice, setModalDevice] = useState<typeof DEVICE_LIST[0] | null>(null);
  const [modalArticle, setModalArticle] = useState<FaqArticle | null>(null);
  const [modalSearchQuery, setModalSearchQuery] = useState("");
  const [modalExpandedArticleId, setModalExpandedArticleId] = useState<string | null>(null);

  // Close modals on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalTopic(null);
        setModalDevice(null);
        setModalArticle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Scroll to top of window whenever active article, selected category, or selected device changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeArticle, selectedCategory, selectedDevice]);

  // Filtered Articles based on search or active category/device filters
  const filteredArticles = useMemo(() => {
    let result = FAQ_ARTICLES;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(art => {
        const titleMatch = art.title.toLowerCase().includes(q);
        const summaryMatch = art.summary.toLowerCase().includes(q);
        const queryMatch = art.naturalQueries.some(nq => nq.toLowerCase().includes(q));
        const catMatch = art.category.toLowerCase().includes(q);
        const contentMatch = art.content.some(c => c.toLowerCase().includes(q));
        return titleMatch || summaryMatch || queryMatch || catMatch || contentMatch;
      });
    } else if (selectedCategory) {
      result = result.filter(art => art.category === selectedCategory || art.categoryCode === selectedCategory);
    } else if (selectedDevice) {
      result = result.filter(art => art.deviceTag === selectedDevice);
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDevice]);

  // Handle Back to main view
  const handleBackToAll = () => {
    setActiveArticle(null);
    setSelectedCategory(null);
    setSelectedDevice(null);
    setSearchQuery("");
  };

  // Handle Tag click
  const handleTagClick = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory(null);
    setSelectedDevice(null);
    setActiveArticle(null);
  };

  // Article Feedback submit
  const handleFeedback = (artId: string, val: "yes" | "no") => {
    setArticleFeedback(prev => ({ ...prev, [artId]: val }));
  };

  const handleContactSupport = () => {
    setModalTopic(null);
    setModalDevice(null);
    setModalArticle(null);

    const contactSec = document.getElementById("section-final");
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: "smooth" });
    } else if (window.navigateToPage) {
      window.navigateToPage("home");
      setTimeout(() => {
        document.getElementById("section-final")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  // Open Topic Modal Popup
  const handleOpenTopicModal = (cat: TopicCategory, initialTopicText?: string) => {
    setModalTopic(cat);
    setModalSearchQuery("");
    
    // Find matching article to expand inside modal
    if (initialTopicText) {
      const matched = FAQ_ARTICLES.find(
        a => a.categoryCode === cat.code && 
        (a.title.toLowerCase().includes(initialTopicText.toLowerCase()) || 
         a.naturalQueries.some(nq => nq.toLowerCase().includes(initialTopicText.toLowerCase())))
      );
      if (matched) {
        setModalExpandedArticleId(matched.id);
      } else {
        const firstCatArt = FAQ_ARTICLES.find(a => a.categoryCode === cat.code);
        setModalExpandedArticleId(firstCatArt ? firstCatArt.id : null);
      }
    } else {
      const firstCatArt = FAQ_ARTICLES.find(a => a.categoryCode === cat.code);
      setModalExpandedArticleId(firstCatArt ? firstCatArt.id : null);
    }
  };

  // Open Device Modal Popup
  const handleOpenDeviceModal = (dev: typeof DEVICE_LIST[0]) => {
    setModalDevice(dev);
    setModalSearchQuery("");
    const matchedDevArt = FAQ_ARTICLES.find(a => a.deviceTag === dev.tag);
    setModalExpandedArticleId(matchedDevArt ? matchedDevArt.id : null);
  };

  // Open Article Detail View (Full Page Scrolled to Top)
  const handleOpenArticleModal = (art: FaqArticle) => {
    setActiveArticle(art);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFB] text-[#0F172A] font-sans pt-24 pb-20 select-none relative">
      
      {/* ARTICLE FULL PAGE VIEW STATE (If activeArticle selected on page level) */}
      {activeArticle ? (
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm"
          >
            <button
              onClick={() => setActiveArticle(null)}
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold text-[#2BC48A] bg-[#E5F7F0] px-4 py-2 rounded-full hover:bg-[#2BC48A] hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Search &amp; Topics
            </button>

            {/* Breadcrumb path */}
            <div className="text-xs font-bold uppercase tracking-wider text-[#64748B] mb-2 flex items-center gap-2">
              <span>Support</span>
              <span>&rarr;</span>
              <span>{activeArticle.category}</span>
              {activeArticle.deviceTag && (
                <>
                  <span>&rarr;</span>
                  <span className="text-[#2BC48A]">{activeArticle.deviceTag}</span>
                </>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] mb-6 tracking-tight leading-snug">
              {activeArticle.title}
            </h1>

            <div className="prose prose-slate max-w-none mb-10 text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className={paragraph.startsWith("•") || paragraph.match(/^\d\./) ? "font-medium text-[#0F172A] pl-2" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Was this helpful feedback bar */}
            <div className="border-t border-b border-[#F1F5F9] py-6 my-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-sm font-bold text-[#0F172A]">Was this article helpful?</span>
              
              {articleFeedback[activeArticle.id] ? (
                <div className="flex items-center gap-2 text-xs font-bold text-[#2BC48A] bg-[#E5F7F0] px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-4 h-4" /> Thank you for your feedback!
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleFeedback(activeArticle.id, "yes")}
                    className="flex items-center gap-2 text-xs font-bold text-[#0F172A] bg-[#F1F5F9] hover:bg-[#2BC48A] hover:text-white px-4 py-2 rounded-full transition-all cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" /> Yes
                  </button>
                  <button
                    onClick={() => handleFeedback(activeArticle.id, "no")}
                    className="flex items-center gap-2 text-xs font-bold text-[#0F172A] bg-[#F1F5F9] hover:bg-rose-500 hover:text-white px-4 py-2 rounded-full transition-all cursor-pointer"
                  >
                    <ThumbsDown className="w-3.5 h-3.5" /> No
                  </button>
                </div>
              )}
            </div>

            {/* Related Articles */}
            {activeArticle.relatedIds.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0F172A] mb-4">
                  Related Support Articles
                </h3>
                <div className="space-y-3">
                  {activeArticle.relatedIds.map((relId) => {
                    const relArt = FAQ_ARTICLES.find(a => a.id === relId);
                    if (!relArt) return null;
                    return (
                      <div
                        key={relId}
                        onClick={() => {
                          setActiveArticle(relArt);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="flex items-center justify-between p-4 rounded-xl bg-[#F8FAFB] hover:bg-[#E5F7F0] border border-[#E2E8F0] transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-4 h-4 text-[#2BC48A]" />
                          <span className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#2BC48A] transition-colors">
                            {relArt.title}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#2BC48A] group-hover:translate-x-1 transition-all" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Still Need Help Banner inside Article */}
            <div className="mt-12 bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-700/60 shadow-lg">
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-1 text-white">Still need help with this topic?</h4>
                <p className="text-xs sm:text-sm text-slate-200 font-medium">Our medical &amp; device care team is standing by to assist you.</p>
              </div>
              <button
                onClick={handleContactSupport}
                className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-6 py-3 rounded-full text-xs font-black shadow-lg transition-all whitespace-nowrap cursor-pointer tracking-wider"
              >
                CONTACT SUPPORT
              </button>
            </div>

          </motion.div>
        </div>
      ) : (
        /* MAIN FAQS DASHBOARD VIEW */
        <div className="max-w-7xl mx-auto px-6">
          
          {/* HERO SECTION */}
          <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white rounded-3xl p-8 sm:p-14 lg:p-16 mb-12 shadow-xl relative overflow-hidden">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#2BC48A]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#2BC48A]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 text-center mx-auto">
              <span className="inline-block text-[11px] font-black uppercase tracking-[0.2em] text-[#2BC48A] bg-[#2BC48A]/10 px-3.5 py-1.5 rounded-full mb-4">
                GOQii HELP &amp; FAQS
              </span>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4 text-white">
                How can we help?
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-medium mb-8 leading-relaxed max-w-xl mx-auto">
                Find answers about your GOQii account, app, coaching, devices, orders and more. Click any card to open detailed questions &amp; answers in a popup.
              </p>

              {/* Natural Language Search Input */}
              <div className="relative max-w-2xl mx-auto mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search GOQii Help (e.g., My watch isn't syncing, Track order, Claim warranty)..."
                  className="w-full bg-white text-[#0F172A] placeholder-slate-400 pl-12 pr-10 py-4 rounded-2xl text-xs sm:text-sm font-medium shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#2BC48A] transition-all"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-4" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-4 text-xs font-bold text-slate-400 hover:text-[#0F172A] cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Popular Searches */}
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-slate-400 mr-1">Popular searches:</span>
                {POPULAR_SEARCH_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className="bg-white/10 hover:bg-[#2BC48A] hover:text-white px-3 py-1 rounded-full font-medium transition-all cursor-pointer text-[11px]"
                  >
                    {tag}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* ACTIVE SEARCH RESULTS SECTION (If Query Entered) */}
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16 bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-sm"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#F1F5F9]">
                <div>
                  <h2 className="text-xl font-bold text-[#0F172A]">
                    Search Results for &ldquo;{searchQuery}&rdquo;
                  </h2>
                  <p className="text-xs text-[#64748B] mt-0.5">Found {filteredArticles.length} matching support guides</p>
                </div>
                <button
                  onClick={handleBackToAll}
                  className="text-xs font-bold text-[#2BC48A] hover:underline cursor-pointer"
                >
                  Reset Search
                </button>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="py-12 text-center">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-base font-bold text-[#0F172A] mb-1">No direct matching articles found</h3>
                  <p className="text-xs text-slate-500 mb-6 max-w-md mx-auto">
                    Try searching with simpler keywords like &quot;sync&quot;, &quot;battery&quot;, &quot;coach&quot; or browse topics below.
                  </p>
                  <button
                    onClick={handleContactSupport}
                    className="bg-[#2BC48A] hover:bg-[#22a372] text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    Contact Support Team
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredArticles.map((art) => (
                    <div
                      key={art.id}
                      onClick={() => handleOpenArticleModal(art)}
                      className="p-5 rounded-2xl bg-[#F8FAFB] hover:bg-[#E5F7F0] border border-[#E2E8F0] hover:border-[#2BC48A] transition-all cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#2BC48A] bg-[#2BC48A]/10 px-2 py-0.5 rounded">
                            {art.category}
                          </span>
                          {art.deviceTag && (
                            <span className="text-[10px] font-bold text-[#64748B] bg-slate-200 px-2 py-0.5 rounded">
                              {art.deviceTag}
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#2BC48A] transition-colors mb-2">
                          {art.title}
                        </h3>
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {art.summary}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#2BC48A]">
                        <span>Open Details Popup</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* SECTION 1: BROWSE BY TOPIC (9 CARDS — CLICK OPENS POPUP) */}
          {!searchQuery && (
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-2">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A]">
                    TOPIC DIRECTORY
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight">
                    Browse By Topic
                  </h2>
                </div>
                <p className="text-xs font-semibold text-[#64748B]">Click any card to open a details popup with all Q&amp;As</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {TOPIC_CATEGORIES.map((cat) => {
                  const IconComp = cat.icon;
                  return (
                    <div
                      key={cat.code}
                      onClick={() => handleOpenTopicModal(cat)}
                      className="bg-white rounded-3xl p-6 border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-[#2BC48A] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2BC48A]/5 rounded-bl-full pointer-events-none group-hover:bg-[#2BC48A]/10 transition-all" />

                      <div>
                        {/* Header with Icon and Code */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-[#E5F7F0] text-[#2BC48A] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#2BC48A] group-hover:text-white transition-all duration-300">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-[#2BC48A] transition-colors">
                            {cat.code}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#2BC48A] transition-colors mb-1">
                          {cat.title}
                        </h3>

                        <p className="text-xs text-[#64748B] mb-4 font-medium leading-relaxed">
                          {cat.description}
                        </p>

                        {/* List of subtopics */}
                        <ul className="space-y-1.5 mb-6">
                          {cat.topics.slice(0, 5).map((tp, idx) => (
                            <li
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleOpenTopicModal(cat, tp);
                              }}
                              className="text-xs font-medium text-slate-600 hover:text-[#2BC48A] flex items-center gap-2 cursor-pointer transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#2BC48A]/40 group-hover:bg-[#2BC48A] shrink-0" />
                              <span className="truncate">{tp}</span>
                            </li>
                          ))}
                          {cat.topics.length > 5 && (
                            <li className="text-[11px] font-bold text-[#2BC48A] pt-1">
                              +{cat.topics.length - 5} more questions &amp; details
                            </li>
                          )}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenTopicModal(cat);
                        }}
                        className="w-full py-3 px-4 rounded-2xl bg-[#F8FAFB] group-hover:bg-[#2BC48A] group-hover:text-white text-[#0F172A] font-bold text-xs flex items-center justify-between transition-all cursor-pointer border border-[#E2E8F0] group-hover:border-[#2BC48A] shadow-xs"
                      >
                        <span>Open {cat.title} Popup</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 2: POPULAR QUESTIONS (ACCORDIONS — CLICK OPENS POPUP) */}
          {!searchQuery && !selectedCategory && (
            <div className="mb-20">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#2BC48A]">
                  QUICK ANSWERS
                </span>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#0F172A] tracking-tight mt-1">
                  Popular Questions
                </h2>
                <p className="text-xs text-[#64748B] font-medium mt-2">
                  Frequently asked queries from GOQii users and device owners.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-3">
                {POPULAR_ACCORDION_IDS.map((artId) => {
                  const art = FAQ_ARTICLES.find(a => a.id === artId);
                  if (!art) return null;
                  const isExpanded = expandedAccordion === artId;

                  return (
                    <div
                      key={artId}
                      className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden transition-all shadow-sm hover:shadow-md"
                    >
                      <button
                        onClick={() => setExpandedAccordion(isExpanded ? null : artId)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F8FAFB] transition-colors"
                      >
                        <span className="text-sm sm:text-base font-bold text-[#0F172A]">
                          {art.title}
                        </span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform ${isExpanded ? "bg-[#2BC48A] text-white rotate-180" : "bg-[#F1F5F9] text-[#0F172A]"}`}>
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="border-t border-[#F1F5F9] px-6 py-5 bg-[#F8FAFB]"
                          >
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                              {art.summary}
                            </p>
                            <div className="flex items-center justify-between pt-2">
                              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                                Category: {art.category}
                              </span>
                              <button
                                onClick={() => handleOpenArticleModal(art)}
                                className="text-xs font-bold text-[#2BC48A] hover:underline flex items-center gap-1 cursor-pointer bg-[#E5F7F0] px-3 py-1.5 rounded-full"
                              >
                                Open Full Answer Popup &rarr;
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* SECTION 3: STILL NEED HELP? */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden border border-slate-700/80">
            <div className="max-w-xl mx-auto relative z-10">
              <div className="w-14 h-14 rounded-full bg-[#2BC48A]/20 text-[#2BC48A] flex items-center justify-center mx-auto mb-4 border border-[#2BC48A]/40 shadow-inner">
                <Headphones className="w-7 h-7 text-[#2BC48A]" />
              </div>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight mb-3 text-white">
                Still Need Help?
              </h2>

              <p className="text-xs sm:text-sm text-slate-200 font-medium mb-8 leading-relaxed max-w-lg mx-auto">
                Can&apos;t find what you&apos;re looking for? Our dedicated 24/7 GOQii Support team is here to assist you with device, app, and coaching support.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <button
                  onClick={handleContactSupport}
                  className="w-full sm:w-auto bg-[#2BC48A] hover:bg-[#22a372] text-white px-8 py-3.5 rounded-full text-xs font-black shadow-xl hover:shadow-2xl transition-all cursor-pointer tracking-wider"
                >
                  CONTACT SUPPORT
                </button>
              </div>

              <div className="text-[11px] text-slate-300 font-medium bg-white/10 py-2.5 px-4 rounded-full inline-block border border-white/15">
                Secondary Assistance: <span className="text-white font-semibold">Open GOQii App &rarr; Home &rarr; Support</span>
              </div>
            </div>
          </div>

        </div>
      )}


      {/* ============================================================ */}
      {/* 01 — TOPIC CATEGORY POPUP MODAL (GETTING STARTED, APP, ETC.) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {modalTopic && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalTopic(null)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col relative z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0 relative">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#2BC48A] text-white flex items-center justify-center shadow-lg shrink-0">
                    {React.createElement(modalTopic.icon, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/20 px-2.5 py-0.5 rounded-full">
                        CATEGORY {modalTopic.code}
                      </span>
                      <span className="text-xs text-slate-400 font-bold">
                        {modalTopic.topics.length} Key Topics
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
                      {modalTopic.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1 max-w-xl">
                      {modalTopic.description}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModalTopic(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Inside Modal */}
              <div className="p-4 sm:px-8 sm:py-4 bg-[#F8FAFB] border-b border-[#E2E8F0] flex items-center gap-3 shrink-0">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={modalSearchQuery}
                    onChange={(e) => setModalSearchQuery(e.target.value)}
                    placeholder={`Filter questions in ${modalTopic.title}...`}
                    className="w-full bg-white border border-[#E2E8F0] rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm font-medium text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#2BC48A]"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                </div>
                {modalSearchQuery && (
                  <button
                    onClick={() => setModalSearchQuery("")}
                    className="text-xs font-bold text-slate-500 hover:text-[#0F172A] cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Modal Body - Scrollable Questions & Full Answers */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-[#F8FAFB]">
                
                {/* List of Topic Questions */}
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#64748B] mb-4 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#2BC48A]" />
                    <span>Frequently Asked Questions in {modalTopic.title}</span>
                  </h3>

                  <div className="space-y-4">
                    {/* Articles matching this category */}
                    {FAQ_ARTICLES.filter(art => {
                      if (art.categoryCode !== modalTopic.code && art.category !== modalTopic.title) return false;
                      if (!modalSearchQuery.trim()) return true;
                      const q = modalSearchQuery.toLowerCase();
                      return art.title.toLowerCase().includes(q) || art.summary.toLowerCase().includes(q) || art.content.some(c => c.toLowerCase().includes(q));
                    }).map((art) => {
                      const isExpanded = modalExpandedArticleId === art.id;

                      return (
                        <div
                          key={art.id}
                          className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                            isExpanded ? "border-[#2BC48A] shadow-md" : "border-[#E2E8F0] hover:border-slate-300"
                          }`}
                        >
                          <button
                            onClick={() => setModalExpandedArticleId(isExpanded ? null : art.id)}
                            className="w-full p-5 text-left flex items-start justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                          >
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-bold text-[#2BC48A] uppercase tracking-wider">
                                  {art.category}
                                </span>
                                {art.deviceTag && (
                                  <span className="text-[10px] font-bold text-[#64748B] bg-slate-100 px-2 py-0.5 rounded">
                                    {art.deviceTag}
                                  </span>
                                )}
                              </div>
                              <h4 className="text-sm sm:text-base font-bold text-[#0F172A] leading-snug">
                                {art.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-1 font-medium">
                                {art.summary}
                              </p>
                            </div>

                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${isExpanded ? "bg-[#2BC48A] text-white rotate-180" : "bg-[#F1F5F9] text-[#0F172A]"}`}>
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </button>

                          {isExpanded && (
                            <div className="border-t border-[#F1F5F9] p-5 sm:p-6 bg-slate-50/50 space-y-4">
                              <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                                {art.content.map((p, idx) => (
                                  <p key={idx} className={p.startsWith("•") || p.match(/^\d\./) ? "font-semibold text-[#0F172A] pl-2" : ""}>
                                    {p}
                                  </p>
                                ))}
                              </div>

                              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs">
                                <span className="font-semibold text-slate-500">Was this answer clear?</span>
                                {articleFeedback[art.id] ? (
                                  <span className="text-[#2BC48A] font-bold flex items-center gap-1">
                                    <CheckCircle2 className="w-4 h-4" /> Feedback Saved
                                  </span>
                                ) : (
                                  <div className="flex items-center gap-2">
                                    <button
                                      onClick={() => handleFeedback(art.id, "yes")}
                                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:bg-[#2BC48A] hover:text-white font-bold transition-all cursor-pointer"
                                    >
                                      Yes
                                    </button>
                                    <button
                                      onClick={() => handleFeedback(art.id, "no")}
                                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[#0F172A] hover:bg-rose-500 hover:text-white font-bold transition-all cursor-pointer"
                                    >
                                      No
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}

                    {/* Quick Topic Chips list inside popup */}
                    <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] mt-6">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-3">
                        All Topic Items Covered in {modalTopic.title}:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {modalTopic.topics.map((tp, idx) => (
                          <span
                            key={idx}
                            className="bg-[#E5F7F0] text-[#0F172A] text-xs font-semibold px-3 py-1.5 rounded-xl border border-[#2BC48A]/20 flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#2BC48A]" />
                            {tp}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-8 bg-white border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
                <div className="text-xs text-slate-500 font-medium">
                  Have a specific question not answered here?
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setModalTopic(null)}
                    className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={handleContactSupport}
                    className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#2BC48A] hover:bg-[#22a372] text-white shadow-md transition-all cursor-pointer"
                  >
                    Talk to Support
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ============================================================ */}
      {/* 02 — DEVICE POPUP MODAL (SMART VITAL, VITAL 3, SCALE ETC.) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {modalDevice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalDevice(null)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-8 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shrink-0 border-2 border-[#2BC48A]">
                    <img src={modalDevice.image} alt={modalDevice.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/20 px-2.5 py-0.5 rounded-full">
                      HARDWARE HELPDESK
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-1">
                      {modalDevice.name} Support
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">
                      {modalDevice.desc}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setModalDevice(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-[#F8FAFB]">
                <h3 className="text-xs font-black uppercase tracking-wider text-[#0F172A]">
                  Official Hardware &amp; Pairing Guides for {modalDevice.name}:
                </h3>

                <div className="space-y-4">
                  {FAQ_ARTICLES.filter(art => art.deviceTag === modalDevice.tag || art.category === "Devices & Trackers").map((art) => {
                    const isExpanded = modalExpandedArticleId === art.id;

                    return (
                      <div
                        key={art.id}
                        className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                          isExpanded ? "border-[#2BC48A] shadow-md" : "border-[#E2E8F0]"
                        }`}
                      >
                        <button
                          onClick={() => setModalExpandedArticleId(isExpanded ? null : art.id)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                        >
                          <div>
                            <h4 className="text-sm font-bold text-[#0F172A]">{art.title}</h4>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1">{art.summary}</p>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? "rotate-180 text-[#2BC48A]" : ""}`} />
                        </button>

                        {isExpanded && (
                          <div className="border-t border-[#F1F5F9] p-5 bg-slate-50/50 space-y-3 text-xs sm:text-sm text-slate-600">
                            {art.content.map((p, idx) => (
                              <p key={idx} className={p.startsWith("•") || p.match(/^\d\./) ? "font-semibold text-[#0F172A] pl-2" : ""}>
                                {p}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-8 bg-white border-t border-[#E2E8F0] flex items-center justify-between shrink-0">
                <span className="text-xs text-slate-500 font-medium">1-Year Warranty Protection</span>
                <button
                  onClick={() => setModalDevice(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ============================================================ */}
      {/* 03 — ARTICLE DETAIL POPUP MODAL (SINGLE QUESTION FULL VIEW) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {modalArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalArticle(null)}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl border border-[#E2E8F0] shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col relative z-10 overflow-hidden"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-[#0F172A] to-[#1E293B] text-white p-6 sm:p-8 flex items-start justify-between gap-4 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2BC48A] bg-[#2BC48A]/20 px-2.5 py-0.5 rounded-full">
                      {modalArticle.category}
                    </span>
                    {modalArticle.deviceTag && (
                      <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2.5 py-0.5 rounded-full">
                        {modalArticle.deviceTag}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-white leading-snug">
                    {modalArticle.title}
                  </h2>
                </div>

                <button
                  onClick={() => setModalArticle(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 bg-[#F8FAFB]">
                <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3">
                  {modalArticle.content.map((p, idx) => (
                    <p key={idx} className={p.startsWith("•") || p.match(/^\d\./) ? "font-semibold text-[#0F172A] pl-2" : ""}>
                      {p}
                    </p>
                  ))}
                </div>

                <div className="border-t border border-[#E2E8F0] rounded-2xl p-4 bg-white mt-6 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0F172A]">Was this information helpful?</span>
                  {articleFeedback[modalArticle.id] ? (
                    <span className="text-xs font-bold text-[#2BC48A] flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Thank you!
                    </span>
                  ) : (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleFeedback(modalArticle.id, "yes")}
                        className="px-3 py-1 rounded-full bg-[#F1F5F9] hover:bg-[#2BC48A] hover:text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => handleFeedback(modalArticle.id, "no")}
                        className="px-3 py-1 rounded-full bg-[#F1F5F9] hover:bg-rose-500 hover:text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        No
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:px-8 bg-white border-t border-[#E2E8F0] flex items-center justify-between shrink-0">
                <button
                  onClick={handleContactSupport}
                  className="text-xs font-bold text-[#2BC48A] hover:underline cursor-pointer"
                >
                  Need more help? Contact Support
                </button>
                <button
                  onClick={() => setModalArticle(null)}
                  className="px-5 py-2 rounded-full text-xs font-bold bg-[#0F172A] text-white hover:bg-[#1E293B] transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
