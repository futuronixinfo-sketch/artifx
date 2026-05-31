import { Database, Settings, Zap, BarChart, Globe, Lock, Users, ArrowRight, Layers } from 'lucide-react';

export const solutionsIntro = {
  title: "Systems Designed for",
  titleHighlight: "Business Scale",
  subtitle: "Every growing business eventually breaks when processes stay manual. Artifx builds structured systems that bring clarity, control, and scalability to your operations."
};

export const businessBreakpoint = {
  title: "When Businesses Start Breaking",
  description: "Growth exposes the cracks in manual operations. Here's the pattern we see repeatedly:",
  stages: [
    { title: "Growth Spikes", description: "Inquiries increase, but follow-ups get missed. Teams can't keep up with demand." },
    { title: "Messy Operations", description: "Tasks fall through cracks. Coordination breaks down without structured systems." },
    { title: "Disconnected Tools", description: "Customer data lives across WhatsApp, email, spreadsheets — with no single source of truth." },
    { title: "Scattered Data", description: "No real-time visibility into business performance. Decisions based on guesswork and outdated reports." }
  ]
};

export const systemMapping = [
  { step: "Customer", description: "Seamless intake & experience from first touchpoint", icon: Users },
  { step: "Lead System", description: "Automated qualification, routing & follow-up", icon: Globe },
  { step: "Operations", description: "Task assignment, fulfillment & workflow tracking", icon: Settings },
  { step: "Management", description: "Access control, team oversight & performance monitoring", icon: Lock },
  { step: "Insights", description: "Real-time analytics, reporting & data-driven decisions", icon: BarChart }
];

export const solutionLayers = [
  {
    layer: "Layer 1 — Foundation",
    features: ["Scalable Cloud Architecture", "Clean Data Structure & Modeling", "Secure Access Control & Auth"],
    icon: Database,
    gradient: "bg-red-700"
  },
  {
    layer: "Layer 2 — Operations",
    features: ["Workflow Automation & Triggers", "Task & Project Management", "Internal Tools & Dashboards"],
    icon: Settings,
    gradient: "bg-red-600"
  },
  {
    layer: "Layer 3 — Intelligence",
    features: ["AI Agents & Chatbots", "Smart Triggers & Predictions", "Automated Decision Logic"],
    icon: Zap,
    gradient: "bg-red-700"
  },
  {
    layer: "Layer 4 — Growth",
    features: ["API Integrations & Webhooks", "Performance Analytics & Insights", "Continuous Optimization & Scaling"],
    icon: BarChart,
    gradient: "bg-red-600"
  }
];

export const solutionAccordion = [
  {
    title: "Business Automation Systems",
    description: "End-to-end workflows that replace manual data entry. Auto-invoicing, contract generation, and client onboarding — all automated.",
    gradient: "bg-red-700"
  },
  {
    title: "Admin Dashboards & Control Panels",
    description: "Centralized command centers to view sales, operations, and team performance in real-time. Complete business visibility at a glance.",
    gradient: "bg-red-600"
  },
  {
    title: "CRM & Lead Engines",
    description: "Custom-built CRMs that fit your specific sales process. Unlike generic SaaS tools, our systems are designed around your workflow.",
    gradient: "bg-red-700"
  },
  {
    title: "Internal Tools for Teams",
    description: "Employee portals, task trackers, approval systems, and more — designed specifically for your company's standard operating procedures.",
    gradient: "bg-red-600"
  },
  {
    title: "AI-Powered Workflows",
    description: "Intelligent agents that qualify leads, answer customer FAQs, draft content, and automate repetitive decisions — all without human intervention.",
    gradient: "bg-red-600"
  },
  {
    title: "SaaS-Ready Platforms",
    description: "Scalable web applications built to handle thousands of users with features like subscription billing, role management, and multi-tenancy built in.",
    gradient: "bg-red-700"
  }
];
