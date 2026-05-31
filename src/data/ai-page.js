import {
    Bot,
    Workflow,
    Database,
    ShieldCheck,
    Zap,
    FileText,
    Cpu,
    AlertTriangle
} from 'lucide-react';

export const aiHero = {
    title: "AI That Actually Works Inside Your Business",
    subtitle: "We design AI-powered systems that automate workflows, support customers, and scale operations — without breaking your existing process.",
    badge: "No hype. Only practical AI.",
    cta: "Get Free AI Use-Case Audit"
};

export const aiFails = {
    title: "Why Most AI Implementations Fail",
    subtitle: "AI without system design is just another tool — not a solution.",
    points: [
        { title: "No Workflow Integration", description: "AI added without understanding the business process first." },
        { title: "Generic Tools", description: "Using off-the-shelf tools with no business logic." },
        { title: "Zero Scalability", description: "Solutions that break as soon as data volume increases." },
        { title: "Unused Systems", description: "AI becomes shelfware because it doesn't solve real problems." }
    ]
};

export const aiPhilosophy = {
    title: "Our Approach to AI",
    subtitle: "AI should support your team — not replace it blindly.",
    points: [
        { title: "Business-First", description: "We solving operational bottlenecks, not just ship code." },
        { title: "Workflow-Driven", description: "We map your entire process before automating a single step." },
        { title: "Human + AI", description: "Designing systems where AI handles the grunt work, humans handle strategy." },
        { title: "Secure By Design", description: "Enterprise-grade security and data privacy controls from Day 1." }
    ]
};

export const aiCapabilities = [
    {
        title: "AI Chatbots & Assistants",
        description: "Intelligent agents that handle customer queries 24/7.",
        items: ["Website AI assistants", "WhatsApp automation", "Customer support AI", "Lead qualification AI"],
        icon: Bot
    },
    {
        title: "AI Workflow Automation",
        description: "Connect your tools and automate repetitive tasks.",
        items: ["Auto task creation", "Ticket handling", "Smart follow-ups", "Trigger-based actions"],
        icon: Workflow
    },
    {
        title: "AI Data Intelligence",
        description: "Turn raw data into actionable business insights.",
        items: ["Performance summaries", "Trend analysis", "Smart decision support", "Predictive modeling"],
        icon: Database
    },
    {
        title: "AI Content Systems",
        description: "Scale your content production with AI pipelines.",
        items: ["Blog generation systems", "Internal documentation", "Marketing automation", "Personalized outreach"],
        icon: FileText
    }
];

export const aiUseCases = [
    { title: "Customer Support", description: "Reduce ticket volume by 60% with instant AI resolutions." },
    { title: "Sales Qualification", description: "Filter and score leads automatically before they reach sales." },
    { title: "Internal Knowledge", description: "Turn your company docs into an instant Q&A bot for employees." },
    { title: "Operations", description: "Automate onboarding, invoicing, and reporting workflows." }
];

export const aiSecurity = {
    title: "Built for Security & Reliability",
    points: [
        { title: "Data Privacy", description: "Your data stays yours. Strict isolation controls." },
        { title: "Controlled Prompts", description: "AI is engineered to stay on brand and on topic." },
        { title: "Role-Based Access", description: "Granular permissions for who can access AI tools." },
        { title: "Secure APIs", description: "End-to-end encryption for all data in transit." }
    ]
};

export const aiFuture = {
    title: "Future-Ready Architecture",
    description: "We build systems that can switch models (OpenAI to Claude to Llama) and scale as AI technology evolves."
};
