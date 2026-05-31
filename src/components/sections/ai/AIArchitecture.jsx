'use client';
import { motion } from 'framer-motion';
import { Network, Database, Brain, Zap, ArrowRight, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

const steps = [
    {
        title: "Process Mapping",
        description: "Analyzing current manual workflows.",
        icon: Network,
        color: "text-red-500"
    },
    {
        title: "System Design",
        description: "Architecting the data flow & logic.",
        icon: Database,
        color: "text-red-600"
    },
    {
        title: "AI Integration",
        description: "Connecting models (LLMs) to data.",
        icon: Brain,
        color: "text-red-500"
    },
    {
        title: "Automation Rules",
        description: "Setting triggers and actions.",
        icon: Zap,
        color: "text-red-600"
    },
    {
        title: "Optimization",
        description: "Monitoring performance & refining.",
        icon: ShieldCheck,
        color: "text-red-600"
    }
];

export default function AIArchitecture() {
    return (
        <section className="py-24 bg-white border-t border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 bg-center" />

            <Container className="relative z-10">
                <div className="text-left max-w-3xl mb-20">
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-4">[ 05 / PROCESS_BLUEPRINT ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4">
                        How We Build <span className="gradient-text italic">AI Systems</span>.
                    </h2>
                    <p className="text-xs font-light text-gray-500 leading-relaxed max-w-md">
                        We don&apos;t plug LLMs randomly. We architect them as robust, deterministic infrastructure elements.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-16 right-16 h-[1px] bg-red-50 z-0" />

                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex flex-col items-center text-center group w-full lg:w-48"
                            >
                                <div className="w-16 h-16 bg-white border border-gray-200 flex items-center justify-center mb-6 transition-all duration-300 hover:border-gray-300 rounded-2xl">
                                    <Icon className="w-6 h-6 text-red-600" />
                                </div>

                                <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-black mb-2">{step.title}</h3>
                                <p className="text-[10px] text-gray-400 max-w-[140px] leading-relaxed group-hover:text-gray-700 transition-colors">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
