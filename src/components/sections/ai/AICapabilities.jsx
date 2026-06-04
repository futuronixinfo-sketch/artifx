'use client';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, FileText } from 'lucide-react';
import Container from '@/components/ui/Container';

const capabilities = [
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

export default function AICapabilities() {
    return (
        <section id="capabilities" className="py-24 bg-white border-t-2 border-b-2 border-black">
            <Container>
                <div className="text-left max-w-3xl mb-20">
                    <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 04 / CORE_CAPABILITIES ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4 mt-4">
                        Core AI <span className="text-red-600 italic underline decoration-4 underline-offset-4">Capabilities</span>.
                    </h2>
                    <p className="text-xs font-light text-gray-600 leading-relaxed max-w-md">
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
                                className="group relative p-8 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 overflow-hidden"
                            >
                                <div className="w-10 h-10 bg-[#FFE500] border-2 border-black flex items-center justify-center mb-6">
                                    <Icon className="w-4 h-4 text-black" />
                                </div>

                                <h3 className="text-lg font-bold uppercase tracking-tight text-black mb-3">{cap.title}</h3>
                                <p className="text-xs font-light text-gray-600 mb-8 h-10 leading-relaxed">{cap.description}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t-2 border-black">
                                    {cap.items.map((item) => (
                                        <div key={item} className="flex items-center gap-2 text-xs text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-red-600 border border-black shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
