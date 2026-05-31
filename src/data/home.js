import {
    Users,
    Briefcase,
    Building2,
    TrendingUp,
    XCircle,
    CheckCircle2,
    Cpu,
    Zap,
    ShieldCheck,
    Rocket
} from 'lucide-react';

export const whoThisIsFor = {
    title: "Built for Businesses That Want to Scale",
    subtitle: "We don't just write code. We solve growth bottlenecks for:",
    items: [
        {
            title: "Startup Founders",
            description: "Who need a scalable MPV or full product without technical debt.",
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

export const problemsWeSolve = {
    title: "Why Most Businesses Fail With Tech",
    subtitle: "It's not lack of effort. It's disconnected tools and manual processes.",
    before: {
        title: "The Old Way (Chaos)",
        items: [
            "Manual data entry & spreadsheets",
            "Disconnected tools (Email, CRM, Slack)",
            "Lost leads due to slow follow-up",
            "No real-time visibility on metrics",
            "Teams burned out by admin work"
        ]
    },
    after: {
        title: "The Artifx Way (System)",
        items: [
            "Automated workflows & syncs",
            "Unified Admin Dashboard",
            "Instant AI lead qualification",
            "Live data visualization",
            "Teams focused on high-value work"
        ]
    }
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

export const whyArtifx = {
    title: "Why Artifx?",
    subtitle: "We think like system architects, not just developers.",
    items: [
        {
            title: "System-First Mindset",
            description: "We design the entire business flow before writing a single line of code.",
            icon: Cpu
        },
        {
            title: "AI-Ready Architecture",
            description: "Our systems are built to integrate with AI models from Day 1.",
            icon: Zap
        },
        {
            title: "Scalable Foundation",
            description: "Built on Next.js Enterprise standards. Ready for millions of users.",
            icon: TrendingUp
        },
        {
            title: "Long-Term Security",
            description: "Enterprise-grade security best practices implemented by default.",
            icon: ShieldCheck
        }
    ]
};

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

export const processSteps = [
    {
        number: "01",
        title: "Discovery & Strategy",
        description: "We deep dive into your business operations to find bottlenecks."
    },
    {
        number: "02",
        title: "System Architecture",
        description: "Designing the data floe, automation logic, and tech stack."
    },
    {
        number: "03",
        title: "Agile Development",
        description: "Building the core system with bi-weekly updates and feedback."
    },
    {
        number: "04",
        title: "Launch & Training",
        description: "Deploying the system and training your team on how to leverage it."
    }
];
