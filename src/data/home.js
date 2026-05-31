import {
  Cpu, Zap, TrendingUp, ShieldCheck, Rocket, Briefcase, Building2, Users,
  Search, Database, Palette, Globe
} from 'lucide-react';

export const heroContent = {
  title: "We Build Digital Systems",
  titleHighlight: "That Scale",
  subtitle: "From AI-powered automation to enterprise web platforms — we engineer the technology backbone that transforms how your business operates.",
  stats: [
    { label: "Projects Delivered", value: "50+" },
    { label: "Avg. Efficiency Gain", value: "78%" },
    { label: "Client Retention", value: "96%" },
    { label: "Tech Integrations", value: "30+" }
  ]
};

export const servicesData = {
  title: "What We Build",
  subtitle: "End-to-end digital solutions engineered for growth, automation, and scale.",
  services: [
    {
      title: "AI Automation",
      description: "Smart workflows that eliminate manual busywork and accelerate every business process.",
      icon: Cpu,
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["AI Agents", "Workflows", "Automation"]
    },
    {
      title: "Web Platforms",
      description: "High-performance Next.js applications with stunning UI that converts visitors into customers.",
      icon: Globe,
      image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "React", "Premium UX"]
    },
    {
      title: "Business Dashboards",
      description: "Real-time admin panels and analytics HUDs that give you complete control over your operations.",
      icon: Database,
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Analytics", "CRM", "Admin"]
    },
    {
      title: "SaaS Products",
      description: "From idea to MVP to scalable SaaS — we build platforms ready for thousands of users.",
      icon: Rocket,
      image: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["MVP", "Scalable", "Cloud"]
    }
  ]
};

export const projectsData = {
  title: "Recent Work",
  subtitle: "Real systems. Real results. Every project we ship solves a real business problem.",
  projects: [
    {
      id: 1,
      title: "Impact Talent Centre",
      category: "EdTech",
      description: "Automated student enrollment and lead management system replacing manual tracking.",
      image: "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "CRM", "Automation"],
      impact: "50% faster enrollment"
    },
    {
      id: 2,
      title: "Mqamy Real Estate",
      category: "Real Estate",
      description: "Modern property listing platform with advanced search and investor dashboards.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "Maps", "Portal"],
      impact: "3x investor engagement"
    },
    {
      id: 3,
      title: "Legacy Wear",
      category: "E-Commerce",
      description: "Full online store with catalog management and nationwide shipping integration.",
      image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Shopify", "Next.js", "Payments"],
      impact: "Nationwide reach"
    },
    {
      id: 4,
      title: "BeaBeyond",
      category: "Brand + Commerce",
      description: "Dual-platform brand presence with integrated e-commerce and content management.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "E-Commerce", "CMS"],
      impact: "Unified brand experience"
    },
    {
      id: 5,
      title: "Futuronix",
      category: "Agency Platform",
      description: "Agency website showcasing SaaS products and service offerings with lead generation.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "SaaS", "Lead Gen"],
      impact: "40% better lead quality"
    },
    {
      id: 6,
      title: "Adporate",
      category: "Portfolio",
      description: "Comprehensive multi-project agency portfolio with detailed case study format.",
      image: "https://images.pexels.com/photos/5762121/pexels-photo-5762121.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Next.js", "Portfolio", "CMS"],
      impact: "Centralized showcase"
    }
  ]
};

export const problemsWeSolve = {
  title: "The Cost of",
  titleHighlight: "Manual Operations",
  subtitle: "Every hour spent on manual processes is time stolen from innovation. Here's what disconnected systems are costing you.",
  problems: [
    {
      icon: Zap,
      title: "Data Silos",
      description: "Customer data scattered across spreadsheets, emails, and disconnected tools.",
      stat: "18.4%",
      statLabel: "Data error rate"
    },
    {
      icon: Search,
      title: "Slow Lead Response",
      description: "Leads wait hours for follow-up while competitors convert them in minutes.",
      stat: "6.4 hrs",
      statLabel: "Avg. response time"
    },
    {
      icon: Database,
      title: "Blind Decision Making",
      description: "Strategic choices based on outdated reports instead of real-time data.",
      stat: "14 days",
      statLabel: "Data latency"
    },
    {
      icon: Briefcase,
      title: "Admin Burnout",
      description: "Top talent wasting 80% of their time on manual administrative tasks.",
      stat: "84%",
      statLabel: "Wasted effort"
    }
  ]
};

export const whyArtifx = {
  title: "Why Businesses",
  titleHighlight: "Choose Artifx",
  subtitle: "We don't just build websites — we engineer complete operational systems that transform how companies work.",
  benefits: [
    {
      title: "System-First Architecture",
      description: "We design the complete business flow before writing code. Every component has a purpose in your operational ecosystem.",
      icon: Cpu,
      stat: "300+",
      statLabel: "Systems Architected"
    },
    {
      title: "AI-Native From Day One",
      description: "Every system we build is designed to integrate with AI models from launch, not as an afterthought.",
      icon: Zap,
      stat: "12+",
      statLabel: "AI Integrations"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Security isn't optional. We implement enterprise best practices by default — encryption, auth, and audit trails.",
      icon: ShieldCheck,
      stat: "99.9%",
      statLabel: "Uptime Guarantee"
    },
    {
      title: "Scalable Foundation",
      description: "Built on Next.js enterprise architecture. Ready to scale from hundreds to millions of users without rewrites.",
      icon: TrendingUp,
      stat: "50x",
      statLabel: "Scale Capacity"
    }
  ]
};

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We map your entire business workflow, identify bottlenecks, and document every process that needs automation.",
    icon: Search,
    color: "bg-red-800"
  },
  {
    number: "02",
    title: "Architecture",
    description: "We design a custom system blueprint — data flow, automation logic, integrations, and user experience.",
    icon: Database,
    color: "bg-red-800"
  },
  {
    number: "03",
    title: "Build & Iterate",
    description: "Agile development with bi-weekly sprints. You see progress, give feedback, and stay in control throughout.",
    icon: Cpu,
    color: "bg-red-800"
  },
  {
    number: "04",
    title: "Launch & Scale",
    description: "We deploy, train your team, and stay on as your long-term technology partner as you grow.",
    icon: Rocket,
    color: "bg-red-800"
  }
];

export const partnershipModel = {
  title: "We Don't Work Like Vendors",
  subtitle: "We partner with businesses long-term to evolve their systems as they grow.",
  features: [
    "Monthly Strategy Calls",
    "Continuous System Optimization",
    "Priority Support Channel",
    "Quarterly Tech Roadmap"
  ]
};

export const whoThisIsFor = {
  title: "Built for Businesses That Want to Scale",
  subtitle: "We don't just write code. We solve growth bottlenecks for:",
  items: [
    {
      title: "Startup Founders",
      description: "Who need a scalable MVP or full product without technical debt.",
      icon: Rocket
    },
    {
      title: "Service Businesses",
      description: "Looking to automate operations and reduce manual admin work.",
      icon: Briefcase
    },
    {
      title: "Agencies",
      description: "That need a reliable white-label partner for complex dev projects.",
      icon: Building2
    },
    {
      title: "Growing Teams",
      description: "Scaling fast and need internal tools to manage chaos.",
      icon: Users
    }
  ]
};

export const systemsWeBuild = {
  title: "Systems, Not Just Websites",
  subtitle: "We engineer operational backbones for your business.",
  items: [
    "Custom CRM Systems",
    "Admin Dashboards",
    "Lead Management Engines",
    "Client Portals",
    "Workflow Automation Tools",
    "AI Customer Support Agents"
  ]
};

export const finalCTA = {
  title: "Ready to Transform",
  titleHighlight: "Your Business?",
  subtitle: "Stop fighting with disconnected tools and manual processes. Let's build a system that works while you focus on growth.",
  primaryCTA: "Book Free Consultation",
  secondaryCTA: "View Our Work"
};
