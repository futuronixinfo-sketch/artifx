import { Bot, Workflow, Database, ShieldCheck, Zap, FileText, Cpu, Sparkles } from 'lucide-react';

export const aiHero = {
  title: "AI That Actually Works",
  titleHighlight: "Inside Your Business",
  subtitle: "We design AI-powered systems that automate workflows, support customers, and scale operations — without breaking your existing process.",
  badge: "No hype. Only practical AI.",
  cta: "Get Free AI Use-Case Audit"
};

export const aiFails = {
  title: "Why Most AI Fails",
  subtitle: "AI without system design is just another disconnected tool — not a solution.",
  points: [
    { title: "No Workflow Integration", description: "AI bolted on top of broken processes just automates the chaos faster." },
    { title: "Generic One-Size-Fits-All", description: "Off-the-shelf AI tools that don't understand your specific business logic." },
    { title: "Zero Scalability", description: "Solutions that collapse as soon as data volume or complexity increases." },
    { title: "Shelfware Syndrome", description: "Expensive AI implementations that nobody uses because they don't solve real problems." }
  ]
};

export const aiPhilosophy = {
  title: "Our AI Philosophy",
  subtitle: "AI should support your team — not replace it blindly.",
  points: [
    { title: "Business-First", description: "We start with operational bottlenecks, not technology. AI is the solution, not the starting point." },
    { title: "Workflow-Driven", description: "We map every step of your process before automating a single thing. Understanding comes first." },
    { title: "Human + AI Design", description: "Systems where AI handles repetitive work and humans focus on strategy, creativity, and decisions." },
    { title: "Secure By Default", description: "Enterprise-grade security, data privacy, and access controls built in from day one." }
  ]
};

export const aiCapabilities = [
  {
    title: "AI Chatbots & Assistants",
    description: "Intelligent agents that handle customer queries 24/7 across every channel.",
    items: ["Website AI assistants", "WhatsApp automation", "Customer support AI", "Lead qualification AI"],
    icon: Bot,
    gradient: "bg-red-700"
  },
  {
    title: "AI Workflow Automation",
    description: "Connect your tools and automate repetitive tasks with intelligent triggers.",
    items: ["Auto task creation", "Ticket handling", "Smart follow-ups", "Trigger-based actions"],
    icon: Workflow,
    gradient: "bg-red-600"
  },
  {
    title: "AI Data Intelligence",
    description: "Turn raw business data into actionable insights and predictions.",
    items: ["Performance summaries", "Trend analysis", "Smart decision support", "Predictive modeling"],
    icon: Database,
    gradient: "bg-red-700"
  },
  {
    title: "AI Content Systems",
    description: "Scale your content production with AI-powered pipelines and personalization.",
    items: ["Blog generation systems", "Internal documentation", "Marketing automation", "Personalized outreach"],
    icon: FileText,
    gradient: "bg-red-600"
  }
];

export const aiUseCases = [
  { title: "Customer Support", description: "Reduce ticket volume by 60% with instant AI resolutions.", stat: "60%", statLabel: "Faster resolution" },
  { title: "Sales Qualification", description: "Filter and score leads automatically before they reach sales.", stat: "3x", statLabel: "More qualified leads" },
  { title: "Internal Knowledge", description: "Turn your company docs into an instant Q&A bot for employees.", stat: "24/7", statLabel: "Availability" },
  { title: "Operations", description: "Automate onboarding, invoicing, and reporting workflows end-to-end.", stat: "80%", statLabel: "Less manual work" }
];

export const aiSecurity = {
  title: "Built for Security & Privacy",
  points: [
    { title: "Data Privacy", description: "Your data stays yours with strict isolation and encryption controls." },
    { title: "Controlled Prompts", description: "AI is engineered to stay on brand, on topic, and within safe boundaries." },
    { title: "Role-Based Access", description: "Granular permissions control who can access, use, and configure AI tools." },
    { title: "Audit Trails", description: "Every AI action is logged and traceable for complete accountability." }
  ]
};
