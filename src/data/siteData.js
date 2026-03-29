export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Sora",
    body: "Inter",
    display: "Space Grotesk",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "energetic",
  serviceCardStyle: "icon-top",
  projectGridStyle: "grid-3",
  testimonialStyle: "cards",
  statsStyle: "minimal",
  bgPattern: "circuit",
  homeSectionOrder: [
    "hero", "marquee", "about", "services", "stats", "process", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Leevox Tech",
    legalName: "Leevox Tech (Pvt) Ltd",
    tagline: "Technology Without Limits",
    description:
      "Full-spectrum IT solutions provider in Harare. Custom software development, cloud infrastructure, cybersecurity, and managed IT services for businesses that refuse to be held back by technology.",
    phone: "+263 78 888 6104",
    phoneRaw: "+263788886104",
    whatsappNumber: "263788886104",
    email: "info@leevoxtech.co.zw",
    address: "Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.8,
    ratingRounded: 5,
    reviewCount: 34,
    established: "2018",
    yearsExperience: "7+",
    projectsCompleted: "300+",
    employees: "25+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Emergency Support Only" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzQ1LjEiUyAzMcKwMDMnMDcuOSJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "leevox-tech-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/leevoxtech",
      instagram: "#",
      linkedin: "https://www.linkedin.com/company/leevoxtech",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "LEE",
    logoLine2: "VOX",
  },

  hero: {
    badge: "IT Solutions & Software Development",
    titleParts: [
      { text: "Technology " },
      { text: "Without Limits.", highlight: true },
    ],
    subtitle:
      "300+ projects deployed. Custom software, cloud infrastructure, cybersecurity, and 24/7 managed IT. We build the technology that builds your business.",
    ctaPrimary: "Get a Quote",
    ctaSecondary: "Our Solutions",
    trustBadge: "24/7 Support Available",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80", alt: "Technology and digital innovation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80", alt: "Software development workspace" },
    ],
  },

  stats: [
    { number: "300", suffix: "+", label: "Projects Delivered" },
    { number: "99", suffix: ".9%", label: "Uptime SLA" },
    { number: "24", suffix: "/7", label: "Support Coverage" },
    { number: "25", suffix: "+", label: "Engineers" },
  ],

  servicesPreview: [
    {
      iconName: "Rocket",
      title: "Custom Software",
      desc: "Web apps, mobile apps, APIs, and enterprise platforms. Built from scratch to your specifications using modern frameworks and agile methodology.",
    },
    {
      iconName: "Lock",
      title: "Cybersecurity",
      desc: "Penetration testing, vulnerability assessments, incident response, and security audits. Protect your data before it becomes a headline.",
    },
    {
      iconName: "Briefcase",
      title: "Cloud Infrastructure",
      desc: "AWS, Azure, and hybrid cloud architecture. Migration, optimisation, and managed hosting with 99.9% uptime SLAs.",
    },
    {
      iconName: "Users",
      title: "Managed IT Services",
      desc: "24/7 monitoring, helpdesk, network management, and IT strategy. Your entire IT department, outsourced to experts.",
    },
    {
      iconName: "Eye",
      title: "Data & Analytics",
      desc: "Business intelligence dashboards, data warehousing, ETL pipelines, and predictive analytics. Turn your data into decisions.",
    },
    {
      iconName: "ShieldCheck",
      title: "IT Consulting",
      desc: "Technology audits, digital transformation roadmaps, vendor selection, and IT governance. Strategy before execution.",
    },
  ],

  featuredProjects: [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      title: "Banking Core Platform",
      category: "Financial Services",
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      title: "Telecom Network Migration",
      category: "Telecommunications",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      title: "Government Digital Portal",
      category: "Public Sector",
    },
  ],

  whyChooseUs: {
    titleParts: [
      { text: "Code. " },
      { text: "Deploy.", highlight: true },
      { text: " Scale." },
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    imageAlt: "Leevox Tech engineering team at work",
    experienceYears: "300+",
    experienceLabel: "Projects Deployed",
    points: [
      {
        title: "Full-Stack Capability",
        desc: "Frontend, backend, mobile, cloud, security. One team, every layer of your technology stack covered.",
      },
      {
        title: "Agile Delivery",
        desc: "Two-week sprints, daily standups, continuous deployment. You see progress every week, not every quarter.",
      },
      {
        title: "99.9% Uptime SLA",
        desc: "Enterprise-grade infrastructure with redundancy, monitoring, and automated failover. Your systems stay up when it matters.",
      },
      {
        title: "24/7 Support",
        desc: "Round-the-clock technical support with 15-minute response for critical issues. Because downtime does not wait until Monday.",
      },
    ],
  },

  homeCta: {
    backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80",
    backgroundAlt: "Technology infrastructure",
    titleParts: [
      { text: "Build " },
      { text: "Faster.", highlight: true },
      { text: " Scale Smarter." },
    ],
    subtitle:
      "Every week you spend on legacy systems is a week your competitors are gaining ground. Let us build the technology platform that puts you ahead.",
    ctaPrimary: "Start a Project",
    whatsappText: "Hi Leevox Tech! I would like to discuss a technology project.",
  },

  homeTestimonials: [
    {
      name: "Farai Matongo",
      role: "CTO, EcoBank Zimbabwe",
      text: "Leevox rebuilt our entire core banking middleware in 6 months. The platform handles 50,000 transactions per day with zero downtime since launch. Their engineering team is exceptional.",
      rating: 5,
    },
    {
      name: "Sandra Nhamo",
      role: "Operations Director, TelOne",
      text: "The cloud migration was seamless. We went from on-premise servers with constant issues to a fully managed cloud infrastructure with 99.99% uptime. Leevox understood our scale from day one.",
      rating: 5,
    },
    {
      name: "Tatenda Chirisa",
      role: "Founder, AgriTech Solutions",
      text: "As a startup, we needed a partner who could move fast without cutting corners. Leevox delivered our mobile app in 8 weeks. It has 40,000 active users and has not crashed once.",
      rating: 5,
    },
  ],

  about: {
    heroTitle: [
      { text: "Built by " },
      { text: "Engineers.", highlight: true },
      { text: " For the Bold." },
    ],
    heroSubtitle:
      "Leevox Tech was founded by engineers who believed that Zimbabwean businesses deserved world-class technology solutions without the world-class price tag.",
    storyImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    storyImageAlt: "Leevox Tech engineering workspace",
    storyProjectCount: "300+",
    storyProjectLabel: "Projects Deployed",
    storyTitle: "From a Code Editor to Zimbabwe's Most Trusted Tech Partner.",
    storyParagraphs: [
      "Leevox Tech was born in 2018 from a frustration that every tech-savvy Zimbabwean entrepreneur knows: the choice between overpriced international consultancies and unreliable local freelancers. We believed there was a middle ground: world-class engineering, delivered locally, at fair prices.",
      "We started with three developers and a single client. Our first project was a payment gateway integration for a mid-size bank. It worked flawlessly. Word spread. Within two years, we were building platforms for Zimbabwe's largest telecoms, banks, and government agencies.",
      "Today, with a team of 25+ engineers spanning software development, cloud infrastructure, cybersecurity, and data analytics, we are the technology partner that Zimbabwean businesses call when the project is too important to get wrong.",
    ],
    mission:
      "To make world-class technology accessible to every Zimbabwean business. We code, deploy, and support the digital infrastructure that powers growth.",
    vision:
      "To be Southern Africa's most trusted technology partner. Not the biggest agency, but the one clients call back every time a new challenge appears.",
    values: [
      { iconName: "Rocket", title: "Ship It", desc: "Working software beats perfect documentation. We deliver early and iterate based on real feedback." },
      { iconName: "ShieldCheck", title: "Security First", desc: "Every line of code is written with security in mind. We do not bolt it on later." },
      { iconName: "Users", title: "Transparency", desc: "Weekly demos, open Slack channels, shared dashboards. You always know exactly where your project stands." },
      { iconName: "Heart", title: "Ownership", desc: "Your codebase, your infrastructure, your data. We build it, you own it. No vendor lock-in." },
    ],
    team: [
      { name: "Engineering Team", role: "Full-Stack Developers", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80" },
      { name: "DevOps Team", role: "Cloud & Infrastructure", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80" },
    ],
    milestones: [
      { year: "2018", title: "Founded", desc: "Three developers, one client, and a mission to bring world-class tech to Zimbabwe." },
      { year: "2019", title: "Banking Sector", desc: "Landed our first major banking client. Built a payment gateway processing $2M monthly." },
      { year: "2020", title: "Cloud Division", desc: "Launched cloud infrastructure services. Migrated 15 clients to AWS and Azure." },
      { year: "2021", title: "Cybersecurity", desc: "Added cybersecurity services. Conducted first penetration test for a government agency." },
      { year: "2023", title: "25 Engineers", desc: "Grew to 25+ team members. Expanded into data analytics and machine learning." },
      { year: "2025", title: "300+ Projects", desc: "Surpassed 300 completed projects across banking, telecom, government, and startups." },
    ],
    ctaTitle: "Let Us Build It",
    ctaSubtitle: "Whether it is a mobile app, a cloud migration, or a full digital transformation, we deliver on time and on budget.",
    ctaCta: "Start a Project",
  },

  services: {
    heroTitle: [
      { text: "Full-Stack " },
      { text: "Solutions.", highlight: true },
    ],
    heroSubtitle:
      "Six technology disciplines under one roof. From the first line of code to 24/7 production support, we cover every layer of your digital infrastructure.",
    items: [
      {
        iconName: "Rocket",
        title: "Custom Software Development",
        slug: "custom-software",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        desc: "Web applications, mobile apps, APIs, microservices, and enterprise platforms. Built with React, Node.js, Python, and cloud-native architecture. Agile delivery with two-week sprint cycles.",
        features: [
          "React, Next.js, and Vue.js frontend development",
          "Node.js, Python, and .NET backend services",
          "iOS and Android mobile app development",
          "RESTful and GraphQL API design",
          "Microservices and event-driven architecture",
          "CI/CD pipeline setup and automation",
        ],
      },
      {
        iconName: "Lock",
        title: "Cybersecurity",
        slug: "cybersecurity",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        desc: "Proactive security for your digital assets. Penetration testing, vulnerability assessments, security audits, and incident response. We find the holes before someone else does.",
        features: [
          "Network and application penetration testing",
          "Vulnerability assessment and management",
          "Security architecture review",
          "Incident response and forensics",
          "Compliance audits (ISO 27001, PCI-DSS)",
          "Security awareness training programmes",
        ],
      },
      {
        iconName: "Briefcase",
        title: "Cloud Infrastructure",
        slug: "cloud-infrastructure",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        desc: "Design, migration, and management of cloud environments on AWS, Azure, and Google Cloud. Infrastructure as Code, auto-scaling, disaster recovery, and cost optimisation.",
        features: [
          "AWS, Azure, and GCP architecture design",
          "On-premise to cloud migration",
          "Infrastructure as Code with Terraform",
          "Kubernetes container orchestration",
          "Disaster recovery and backup solutions",
          "Cost optimisation and right-sizing",
        ],
      },
      {
        iconName: "Users",
        title: "Managed IT Services",
        slug: "managed-it",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        desc: "Your complete IT department, outsourced. 24/7 monitoring, helpdesk support, network management, and strategic IT planning. We keep your systems running so you can focus on your business.",
        features: [
          "24/7 infrastructure monitoring and alerting",
          "Helpdesk and end-user support",
          "Network design and management",
          "Patch management and updates",
          "IT asset inventory and lifecycle management",
          "Monthly reporting and strategic reviews",
        ],
      },
      {
        iconName: "Eye",
        title: "Data & Analytics",
        slug: "data-analytics",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        desc: "Transform raw data into strategic advantage. Business intelligence dashboards, data warehousing, ETL pipelines, and predictive analytics powered by machine learning.",
        features: [
          "Business intelligence dashboards (Power BI, Tableau)",
          "Data warehouse design and implementation",
          "ETL pipeline development",
          "Predictive analytics and ML models",
          "Real-time data streaming",
          "Data governance and quality frameworks",
        ],
      },
      {
        iconName: "ShieldCheck",
        title: "IT Consulting",
        slug: "it-consulting",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        desc: "Strategic technology guidance for businesses navigating digital transformation. Technology audits, vendor selection, IT governance, and roadmap planning.",
        features: [
          "Technology audit and assessment",
          "Digital transformation roadmapping",
          "Vendor evaluation and selection",
          "IT governance framework design",
          "Budget planning and TCO analysis",
          "Technology team structure advisory",
        ],
      },
    ],
    ctaTitle: "Let Us Build Your Stack",
    ctaSubtitle: "Tell us about your technology challenge. We will scope it, price it, and deliver it.",
  },

  projects: {
    heroTitle: [
      { text: "What We " },
      { text: "Built", highlight: true },
    ],
    heroSubtitle:
      "300+ projects delivered across banking, telecom, government, and startup sectors. Each one production-ready, battle-tested, and still running.",
    categories: ["All", "Financial Services", "Telecommunications", "Public Sector", "Startups", "Enterprise"],
    items: [
      {
        id: 1,
        title: "Core Banking Middleware Platform",
        category: "Financial Services",
        location: "Harare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        desc: "Complete rebuild of core banking middleware for a top-5 Zimbabwean bank. Handles 50,000+ daily transactions with zero downtime since launch. Microservices architecture on AWS.",
        services: ["Custom Software Development", "Cloud Infrastructure"],
      },
      {
        id: 2,
        title: "National Telecom Network Migration",
        category: "Telecommunications",
        location: "Harare, Zimbabwe",
        year: "2023",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
        desc: "Migrated a national telecom provider from on-premise infrastructure to a hybrid cloud architecture. 99.99% uptime maintained throughout the transition.",
        services: ["Cloud Infrastructure", "Managed IT Services"],
      },
      {
        id: 3,
        title: "Government Digital Services Portal",
        category: "Public Sector",
        location: "Harare, Zimbabwe",
        year: "2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
        desc: "Designed and built a citizen-facing digital services portal for a government ministry. Online applications, document submission, and status tracking for 500,000+ users.",
        services: ["Custom Software Development", "Cybersecurity"],
      },
    ],
  },

  contact: {
    heroTitle: [
      { text: "Let Us " },
      { text: "Build.", highlight: true },
    ],
    heroSubtitle: "Describe your project, schedule a technical consultation, or request a quote. Our engineering team responds within 24 hours.",
    formTitle: "Start a Project",
    subjects: [
      "Custom Software Development",
      "Cloud Migration",
      "Cybersecurity Assessment",
      "Managed IT Services",
      "Technical Consultation",
      "General Enquiry",
    ],
  },

  reviews: {
    heroTitle: "What Our Clients Say",
    heroSubtitle: "Real feedback from businesses and individuals we've served.",
    overallRating: 4.8,
    totalReviews: 12,
    ratingBreakdown: { 5: 8, 4: 3, 3: 1, 2: 0, 1: 0 },
    items: [
      { name: "Tendai Moyo", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", role: "Business Owner", text: "Exceptional service from start to finish. Professional, reliable, and delivered exactly what was promised. Highly recommend.", rating: 5, date: "2025-11-15", projectType: "Commercial" },
      { name: "Sarah Ncube", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face", role: "Operations Manager", text: "Outstanding quality and attention to detail. The team went above and beyond our expectations.", rating: 5, date: "2025-10-22", projectType: "Residential" },
      { name: "James Mutasa", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face", role: "Director", text: "Professional approach and excellent communication throughout the project. Would definitely work with them again.", rating: 5, date: "2025-09-18", projectType: "Commercial" },
      { name: "Grace Chikwanha", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face", role: "Homeowner", text: "Great value for money. The quality exceeded what we expected at this price point.", rating: 4, date: "2025-08-30", projectType: "Residential" },
      { name: "Peter Dube", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face", role: "Project Manager", text: "Reliable and efficient. They completed the work on time and within budget.", rating: 5, date: "2025-07-14", projectType: "Commercial" },
      { name: "Rudo Mapfumo", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", role: "CEO", text: "Impressed by their professionalism and the quality of their work. A trusted partner.", rating: 5, date: "2025-06-20", projectType: "Industrial" },
      { name: "David Chirume", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face", role: "Facility Manager", text: "Solid work, good communication, fair pricing. Everything you want in a service provider.", rating: 4, date: "2025-05-11", projectType: "Commercial" },
      { name: "Linda Sithole", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face", role: "Property Developer", text: "They understood our vision and delivered beautifully. The attention to detail was remarkable.", rating: 5, date: "2025-04-28", projectType: "Residential" },
      { name: "Michael Banda", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face", role: "Engineer", text: "Technical expertise is top-notch. They solved problems we didnt even know we had.", rating: 5, date: "2025-03-15", projectType: "Industrial" },
      { name: "Nyasha Gumbo", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop&crop=face", role: "Procurement Officer", text: "Responsive, professional, and competitively priced. Our go-to provider.", rating: 4, date: "2025-02-08", projectType: "Commercial" },
      { name: "Robert Zvobgo", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face", role: "Contractor", text: "Reliable partner. They deliver what they promise, every time.", rating: 5, date: "2025-01-22", projectType: "Construction" },
      { name: "Chiedza Mapondera", image: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?w=100&h=100&fit=crop&crop=face", role: "School Administrator", text: "Wonderful experience. The team was courteous, professional, and efficient.", rating: 5, date: "2024-12-10", projectType: "Institutional" },
    ],
  },
};

export default siteData;
