'use client';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, FileText, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';

const capabilities = [
    {
        title: "AI Chatbots & Assistants",
        description: "Intelligent agents that handle customer queries 24/7.",
        items: ["Website AI assistants", "WhatsApp automation", "Customer support AI", "Lead qualification AI"],
        icon: Bot,
        color: "from-blue-500 to-indigo-500"
    },
    {
        title: "AI Workflow Automation",
        description: "Connect your tools and automate repetitive tasks.",
        items: ["Auto task creation", "Ticket handling", "Smart follow-ups", "Trigger-based actions"],
        icon: Workflow,
        color: "from-indigo-500 to-purple-500"
    },
    {
        title: "AI Data Intelligence",
        description: "Turn raw data into actionable business insights.",
        items: ["Performance summaries", "Trend analysis", "Smart decision support", "Predictive modeling"],
        icon: Database,
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "AI Content Systems",
        description: "Scale your content production with AI pipelines.",
        items: ["Blog generation systems", "Internal documentation", "Marketing automation", "Personalized outreach"],
        icon: FileText,
        color: "from-orange-500 to-red-500"
    }
];

export default function AICapabilities() {
    return (
        <section id="capabilities" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
            <Container>
                <div className="text-left max-w-3xl mb-20">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-4">[ 04 / CORE_CAPABILITIES ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                        Core AI <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>Capabilities</span>.
                    </h2>
                    <p className="text-xs font-light text-neutral-400 leading-relaxed max-w-md">
                        Production-grade deterministic intelligence engineered to remove operational bottlenecks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {capabilities.map((cap, idx) => {
                        const Icon = cap.icon;
                        return (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative p-8 bg-neutral-950/40 border border-neutral-900 overflow-hidden hover:border-[#f95738]/30 transition-colors"
                                style={{ borderRadius: 0 }}
                            >
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-white" style={{ borderRadius: 0 }}>
                                        <Icon className="w-4 h-4 text-[#f95738]" />
                                    </div>

                                    <h3 className="text-lg font-bold uppercase tracking-tight text-white mb-3">{cap.title}</h3>
                                    <p className="text-xs font-light text-neutral-400 mb-8 h-10 leading-relaxed">{cap.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-900">
                                        {cap.items.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                                                <div className="w-1.5 h-1.5 bg-[#f95738]" style={{ borderRadius: 0 }} />
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
