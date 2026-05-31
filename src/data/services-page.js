import { ArrowRight, CheckCircle2, Cpu, Globe, Database, Bot, BarChart, Users, Search, Share2, Palette, FileText, Megaphone, Code, Smartphone, ShoppingCart } from 'lucide-react';

export const serviceDetails = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle: "Custom websites, web apps, and platforms built with modern stacks — not templates.",
    image: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Globe,
    gradient: "bg-red-700",
    bestFor: "Startups, Businesses, Agencies",
    includes: ["Custom Websites", "Web Applications", "Landing Pages", "Progressive Web Apps"],
    outcome: "A fast, scalable web presence built for performance."
  },
  {
    id: "business-automation",
    title: "Business Automation",
    subtitle: "Eliminate repetitive tasks using smart workflows, triggers, and integrations.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Cpu,
    gradient: "bg-red-600",
    bestFor: "Operations Heavy Business, Growing Teams",
    includes: ["Lead Handling Automation", "Smart Follow-ups", "Task Assignments", "Automated Reporting"],
    outcome: "80% less manual work. Faster operations."
  },
  {
    id: "ai-integrations",
    title: "AI Integrations",
    subtitle: "Custom AI systems integrated directly into your business workflows.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Bot,
    gradient: "bg-red-700",
    bestFor: "Customer Support, Data Heavy Ops",
    includes: ["AI Chatbots", "Workflow Intelligence", "Data Processing", "AI Assistants"],
    outcome: "AI that actually supports your team."
  },
  {
    id: "dashboards-admin",
    title: "Dashboards & Admin Panels",
    subtitle: "Centralized control systems for complete business visibility.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: BarChart,
    gradient: "bg-red-600",
    bestFor: "Management Teams, Founders",
    includes: ["Real-time Analytics", "Role-Based Dashboards", "Activity Tracking", "Custom Reports"],
    outcome: "Clear insights. Better decisions."
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    subtitle: "End-to-end SaaS product development from MVP to scale.",
    image: "https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Database,
    gradient: "bg-red-600",
    bestFor: "Tech Founders, New Ventures",
    includes: ["Product Architecture", "MVP Development", "Scalability Planning", "Monetization Setup"],
    outcome: "A product built for growth, not rebuild."
  },
  {
    id: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    subtitle: "Data-driven SEO strategies and digital marketing to grow your online presence.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Search,
    gradient: "bg-red-700",
    bestFor: "Businesses wanting organic growth",
    includes: ["On-Page SEO", "Technical SEO", "Keyword Research", "Performance Optimization"],
    outcome: "Higher rankings, more traffic, better conversions."
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    subtitle: "Strategic social media management that builds brand presence and drives engagement.",
    image: "https://images.pexels.com/photos/267376/pexels-photo-267376.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Share2,
    gradient: "bg-red-600",
    bestFor: "Brands, Agencies, E-Commerce",
    includes: ["Content Strategy", "Post Scheduling", "Community Management", "Analytics & Reports"],
    outcome: "Consistent brand presence and engaged audience."
  },
  {
    id: "branding-design",
    title: "Branding & Design",
    subtitle: "Complete brand identity design — from logos to full visual systems.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Palette,
    gradient: "bg-red-700",
    bestFor: "New Brands, Rebrands, Startups",
    includes: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Collateral"],
    outcome: "A brand identity that stands out and resonates."
  },
  {
    id: "content-writing",
    title: "Content Writing",
    subtitle: "Professional content writing for websites, blogs, and marketing materials.",
    image: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: FileText,
    gradient: "bg-red-600",
    bestFor: "Content Marketing, Websites, Blogs",
    includes: ["Website Copy", "Blog Posts", "Marketing Copy", "Product Descriptions"],
    outcome: "Clear, compelling content that converts."
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Cross-platform mobile applications built for iOS and Android.",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Smartphone,
    gradient: "bg-red-700",
    bestFor: "Startups, Businesses with mobile needs",
    includes: ["Cross-Platform Apps", "UI/UX Design", "API Integration", "App Store Deployment"],
    outcome: "A mobile experience your users will love."
  },
  {
    id: "ecommerce-development",
    title: "E-Commerce Development",
    subtitle: "Custom e-commerce platforms built for scale and conversion.",
    image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
    icon: ShoppingCart,
    gradient: "bg-red-600",
    bestFor: "Retail Brands, D2C Businesses",
    includes: ["Store Setup", "Payment Integration", "Product Management", "Inventory Systems"],
    outcome: "A seamless shopping experience that drives sales."
  },
  {
    id: "tech-partnership",
    title: "Long-Term Tech Partnership",
    subtitle: "Ongoing collaboration beyond project delivery — we grow with you.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    icon: Users,
    gradient: "bg-red-700",
    bestFor: "Scaling Businesses",
    includes: ["Feature Expansion", "System Optimization", "Priority Support", "Tech Roadmap"],
    outcome: "A tech partner, not a vendor."
  }
];

export const whatWeDontDo = [
  { title: "No Template Websites", description: "Every project is custom-built for your specific needs." },
  { title: "No WordPress", description: "We build modern, scalable tech stacks — not legacy CMS." },
  { title: "No Quick Fixes", description: "We solve root problems, not surface-level symptoms." },
  { title: "No Rushed Delivery", description: "Quality over speed. We ship when it's ready." },
  { title: "No Budget Builds", description: "We invest in foundations that last years, not months." }
];

export const engagementModels = [
  {
    title: "Fixed-Scope Project",
    description: "Best for defined builds like MVPs or specific tools with clear deliverables.",
    features: ["Clear Deliverables", "Fixed Timeline", "Milestone-Based"],
    icon: Globe,
    gradient: "bg-red-700"
  },
  {
    title: "Monthly Retainer",
    description: "Best for ongoing development, maintenance, and continuous improvements.",
    features: ["Dedicated Hours", "Priority Response", "Continuous Updates"],
    icon: Cpu,
    gradient: "bg-red-600"
  },
  {
    title: "SaaS Partnership",
    description: "Best for long-term product evolution with strategic alignment.",
    features: ["Revenue Share Options", "Strategic Planning", "Full Tech Ownership"],
    icon: Database,
    gradient: "bg-red-700"
  }
];

export function getServiceById(id) {
  return serviceDetails.find((service) => service.id === id);
}
