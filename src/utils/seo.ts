export interface PageSEO {
  title: string;
  description: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage?: string;
}

export const SEO_CONFIG: Record<string, PageSEO> = {
  home: {
    title: "GOQii | Transforming Preventive Health Through Intelligent Engagement",
    description:
      "GOQii combines AI, health intelligence, expert coaching, behavioral science, and Dynamic Motivation to make preventive healthcare personal, actionable, and sustainable.",
    canonicalUrl: "https://goqii.com/in-en/",
    ogTitle: "GOQii | Smart Preventive Health Ecosystem",
    ogDescription:
      "Transforming preventive healthcare through AI, intelligent health engagement, expert coaching, and Dynamic Motivation.",
    twitterTitle: "GOQii | Smart Preventive Health Ecosystem",
    twitterDescription:
      "AI-powered preventive health, expert coaching, and Dynamic Motivation—helping people turn healthier intentions into lasting action.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  about: {
    title: "About GOQii | Smart Preventive Health & Longevity Ecosystem",
    description:
      "Learn about GOQii's mission to make preventive healthcare personal, proactive, and actionable through smart technology and expert coaching.",
    canonicalUrl: "https://goqii.com/in-en/about",
    ogTitle: "About GOQii | Smart Preventive Health Ecosystem",
    ogDescription:
      "Learn how GOQii is transforming global wellness through proactive intelligence, behavioral motivation, and certified coaching.",
    twitterTitle: "About GOQii | Smart Preventive Health Ecosystem",
    twitterDescription:
      "Learn how GOQii is transforming global wellness through proactive intelligence, behavioral motivation, and certified coaching.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  plans: {
    title: "GOQii Plans | Personalized Preventive Care & Longevity Solutions",
    description:
      "Explore GOQii membership plans featuring AI health intelligence, 1-on-1 certified coaching, and real-time biometric tracking.",
    canonicalUrl: "https://goqii.com/in-en/plans",
    ogTitle: "GOQii Plans | Preventive Care & Subscriptions",
    ogDescription:
      "Choose from personalized plans combining wearable technology, expert human coaching, and comprehensive health risk assessments.",
    twitterTitle: "GOQii Plans | Preventive Care & Subscriptions",
    twitterDescription:
      "Choose from personalized plans combining wearable technology, expert human coaching, and comprehensive health risk assessments.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  "smart-science": {
    title: "Smart Science | Cellular Health & Preventive Biology at GOQii",
    description:
      "Discover the clinical research and evidence-based science behind GOQii's metabolic scoring, longevity metrics, and behavioral motivation.",
    canonicalUrl: "https://goqii.com/in-en/smart-science",
    ogTitle: "Smart Science | Evidence-Based Health by GOQii",
    ogDescription:
      "Clinical studies and peer-reviewed longevity science driving GOQii's continuous health intelligence.",
    twitterTitle: "Smart Science | Evidence-Based Health by GOQii",
    twitterDescription:
      "Clinical studies and peer-reviewed longevity science driving GOQii's continuous health intelligence.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  sanjeevini: {
    title: "Project Sanjeevini | Nationwide Preventive Healthcare Initiative",
    description:
      "Project Sanjeevini by GOQii delivers community-scale preventive wellness, metabolic monitoring, and grassroots health engagement across India.",
    canonicalUrl: "https://goqii.com/in-en/sanjeevini",
    ogTitle: "Project Sanjeevini | GOQii Health Intelligence",
    ogDescription:
      "A national health initiative scaling proactive wellness, chronic condition reversal, and personalized habit transformation across India.",
    twitterTitle: "Project Sanjeevini | GOQii Health Intelligence",
    twitterDescription:
      "A national health initiative scaling proactive wellness, chronic condition reversal, and personalized habit transformation across India.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  trust: {
    title: "Trust & Regulatory Compliance | GOQii Health Security",
    description:
      "Review GOQii's enterprise-grade data security, HIPAA & ISO certifications, and clinical validation standards.",
    canonicalUrl: "https://goqii.com/in-en/trust",
    ogTitle: "Trust, Security & Regulatory Compliance | GOQii",
    ogDescription:
      "Enterprise-grade security, HIPAA compliance, and rigorous clinical safety standards protecting your health data.",
    twitterTitle: "Trust, Security & Regulatory Compliance | GOQii",
    twitterDescription:
      "Enterprise-grade security, HIPAA compliance, and rigorous clinical safety standards protecting your health data.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  faqs: {
    title: "Help Center & FAQs | GOQii Support",
    description:
      "Find answers to common questions about GOQii devices, coach consultations, health plans, and app features.",
    canonicalUrl: "https://goqii.com/in-en/faqs",
    ogTitle: "Help Center & FAQs | GOQii Support",
    ogDescription:
      "Comprehensive help center with guides on syncing devices, chatting with coaches, and managing your GOQii subscription.",
    twitterTitle: "Help Center & FAQs | GOQii Support",
    twitterDescription:
      "Comprehensive help center with guides on syncing devices, chatting with coaches, and managing your GOQii subscription.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  careers: {
    title: "Careers at GOQii | Join the Preventive Health Revolution",
    description:
      "Explore job openings at GOQii and build the future of AI-driven preventive healthcare and smart longevity technology.",
    canonicalUrl: "https://goqii.com/in-en/careers",
    ogTitle: "Careers at GOQii | Shape Preventive Healthcare",
    ogDescription:
      "Join an ambitious team of engineers, clinicians, data scientists, and coaches transforming healthcare globally.",
    twitterTitle: "Careers at GOQii | Shape Preventive Healthcare",
    twitterDescription:
      "Join an ambitious team of engineers, clinicians, data scientists, and coaches transforming healthcare globally.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  warranty: {
    title: "Warranty & Protection Policy | GOQii Devices",
    description:
      "Official warranty policy, claim procedures, and support details for GOQii smart wearables and healthcare devices.",
    canonicalUrl: "https://goqii.com/in-en/warranty",
    ogTitle: "Warranty & Product Support | GOQii",
    ogDescription:
      "Hassle-free warranty registration, replacement policies, and troubleshooting support for GOQii hardware.",
    twitterTitle: "Warranty & Product Support | GOQii",
    twitterDescription:
      "Hassle-free warranty registration, replacement policies, and troubleshooting support for GOQii hardware.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  privacy: {
    title: "Privacy Policy | GOQii 2.0",
    description:
      "Read how GOQii collects, protects, and handles personal health metrics, telemetry, and user information.",
    canonicalUrl: "https://goqii.com/in-en/privacy",
    ogTitle: "Privacy Policy | GOQii 2.0",
    ogDescription:
      "Transparent, user-first privacy standards outlining how your personal health records and biometric data are secured.",
    twitterTitle: "Privacy Policy | GOQii 2.0",
    twitterDescription:
      "Transparent, user-first privacy standards outlining how your personal health records and biometric data are secured.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  terms: {
    title: "Terms of Service | GOQii 2.0",
    description:
      "Review the official terms and conditions for using GOQii apps, devices, coaching services, and subscription plans.",
    canonicalUrl: "https://goqii.com/in-en/terms",
    ogTitle: "Terms of Service | GOQii 2.0",
    ogDescription:
      "Standard terms, agreements, and legal guidelines governing your use of GOQii products and services.",
    twitterTitle: "Terms of Service | GOQii 2.0",
    twitterDescription:
      "Standard terms, agreements, and legal guidelines governing your use of GOQii products and services.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
  trackingorder: {
    title: "Track Your Order | GOQii Store",
    description:
      "Track real-time shipment status and delivery progress for your GOQii devices and accessories.",
    canonicalUrl: "https://goqii.com/in-en/track-order",
    ogTitle: "Track Your Order | GOQii Store",
    ogDescription:
      "Enter your order ID or tracking number to see instant shipping updates and estimated arrival times.",
    twitterTitle: "Track Your Order | GOQii Store",
    twitterDescription:
      "Enter your order ID or tracking number to see instant shipping updates and estimated arrival times.",
    ogImage: "https://goqii.com/in-en/og-image.jpg",
  },
};

/**
 * Updates DOM head tags dynamically to reflect current page SEO
 */
export function updateSEO(pageKey: string) {
  if (typeof document === "undefined") return;

  const config = SEO_CONFIG[pageKey] || SEO_CONFIG.home;

  // 1. Page Title
  document.title = config.title;

  // Helper to set/create meta by name or property
  const setMeta = (attr: "name" | "property", key: string, content: string) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  // 2. Meta Description
  setMeta("name", "description", config.description);

  // 3. Meta Robots (index, follow)
  setMeta("name", "robots", "index, follow");

  // 4. Open Graph
  setMeta("property", "og:title", config.ogTitle);
  setMeta("property", "og:description", config.ogDescription);
  setMeta("property", "og:url", config.canonicalUrl);
  setMeta("property", "og:type", "website");
  setMeta("property", "og:site_name", "GOQii");
  setMeta("property", "og:image", config.ogImage || "https://goqii.com/in-en/og-image.jpg");
  setMeta("property", "og:image:width", "1200");
  setMeta("property", "og:image:height", "630");

  // 5. Twitter Card
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:title", config.twitterTitle);
  setMeta("name", "twitter:description", config.twitterDescription);
  setMeta("name", "twitter:image", config.ogImage || "https://goqii.com/in-en/og-image.jpg");

  // 6. Canonical URL Tag
  let canonicalLink = document.querySelector('link[rel="canonical"]');
  if (!canonicalLink) {
    canonicalLink = document.createElement("link");
    canonicalLink.setAttribute("rel", "canonical");
    document.head.appendChild(canonicalLink);
  }
  canonicalLink.setAttribute("href", config.canonicalUrl);

  // Remove any legacy meta keywords if present (strict SEO best practice)
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.remove();
  }
}
