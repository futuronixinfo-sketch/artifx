import {
    ArrowDown,
    Layers,
    Settings,
    Zap,
    Database,
    BarChart,
    Globe,
    Lock,
    Users
} from 'lucide-react';

export const solutionsIntro = {
    title: "Solutions Designed as Business Systems",
    subtitle: "Every growing business eventually breaks when processes stay manual. Artifx builds structured systems that bring clarity, control, and scalability."
};

export const businessBreakpoint = {
    title: "When Businesses Start Breaking",
    description: "Growth is great, but it exposes the cracks in your manual operations. This is the point where systems become necessary.",
    stages: [
        { title: "Growth Spikes", description: "Inquiries increase, but follow-ups get missed." },
        { title: "Messy Operations", description: "Tasks fall through cracks; team coordination suffers." },
        { title: "Disconnected Tools", description: "Customer data lives in WhatsApp, Excel, and Email separately." },
        { title: "Scattered Data", description: "No single source of truth for business performance." }
    ]
};

export const systemMapping = [
    { step: "Customer", description: "Seamless intake & experience", icon: Users },
    { step: "Lead System", description: "Automated qualification & routing", icon: Globe },
    { step: "Operations System", description: "Task assignment & fulfillment tracking", icon: Settings },
    { step: "Management System", description: "Access control & team oversight", icon: Lock },
    { step: "Insights System", description: "Real-time analytics & reporting", icon: BarChart }
];

export const solutionLayers = [
    {
        layer: "Layer 1 — Foundation",
        features: ["Scalable Architecture", "Clean Data Structure", "Secure Access Control"],
        icon: Database
    },
    {
        layer: "Layer 2 — Operations",
        features: ["Workflow Automation", "Task Management Systems", "Internal Tools"],
        icon: Settings
    },
    {
        layer: "Layer 3 — Intelligence",
        features: ["AI Automation", "Smart Triggers", "Predictive Analytics"],
        icon: Zap
    },
    {
        layer: "Layer 4 — Growth",
        features: ["API Integrations", "Performance Insights", "Continuous Optimization"],
        icon: TrendingUp => <ArrowDown className="rotate-180" /> // Using concise placeholder
    }
];

export const solutionAccordion = [
    {
        title: "Business Automation Systems",
        description: "End-to-end workflows that replace manual data entry. Auto-invoicing, contract generation, and client onboarding."
    },
    {
        title: "Admin Dashboards & Control Panels",
        description: "Centralized command centers to view sales, operations, and team performance in real-time."
    },
    {
        title: "CRM & Lead Engines",
        description: "Custom-built CRMs that fit your specific sales process, unlike generic SaaS tools."
    },
    {
        title: "Internal Tools for Teams",
        description: "Employee portals, task trackers, and approval systems designed for your company's SOPs."
    },
    {
        title: "AI-Powered Workflows",
        description: "Intelligent agents that qualify leads, answer FAQs, and draft content automatically."
    },
    {
        title: "SaaS-Ready Platforms",
        description: "Scalable web applications built to handle thousands of users, ready for monetization."
    }
];

export const builtForScale = {
    title: "Built For Scale",
    features: [
        "Modular Microservices",
        "AI-Ready Architecture",
        "Secure REST/GraphQL APIs",
        "Future SaaS Expansion Ready"
    ]
};
