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
        color: "from-red-600 to-red-700"
    },
    {
        title: "AI Workflow Automation",
        description: "Connect your tools and automate repetitive tasks.",
        items: ["Auto task creation", "Ticket handling", "Smart follow-ups", "Trigger-based actions"],
        icon: Workflow,
        color: "from-red-500 to-red-600"
    },
    {
        title: "AI Data Intelligence",
        description: "Turn raw data into actionable business insights.",
        items: ["Performance summaries", "Trend analysis", "Smart decision support", "Predictive modeling"],
        icon: Database,
        color: "from-red-500 to-red-600"
    },
    {
        title: "AI Content Systems",
        description: "Scale your content production with AI pipelines.",
        items: ["Blog generation systems", "Internal documentation", "Marketing automation", "Personalized outreach"],
        icon: FileText,
        color: "from-red-500 to-red-700"
    }
];

export default function AICapabilities() {
    return (
        <section id="capabilities" className="py-24 bg-white relative border-t border-gray-200">
            <Container>
                <div className="text-left max-w-3xl mb-20">
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-4">[ 04 / CORE_CAPABILITIES ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
                        Core AI <span className="gradient-text italic">Capabilities</span>.
                    </h2>
                    <p className="text-xs font-light text-gray-500 leading-relaxed max-w-md">
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
                                className="group relative p-8 bg-gray-50 border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors rounded-2xl"
                            >
                                <div className="relative z-10">
                                    <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center mb-6 text-black rounded-xl">
                                        <Icon className="w-4 h-4 text-red-600" />
                                    </div>

                                    <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">{cap.title}</h3>
                                    <p className="text-xs font-light text-gray-500 mb-8 h-10 leading-relaxed">{cap.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                                        {cap.items.map((item) => (
                                            <div key={item} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-700 transition-colors">
                                                <div className="w-1.5 h-1.5 bg-red-400 rounded-xl" />
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
