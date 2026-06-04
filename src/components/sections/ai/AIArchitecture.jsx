'use client';
import { motion } from 'framer-motion';
import { Network, Database, Brain, Zap, ShieldCheck } from 'lucide-react';
import Container from '@/components/ui/Container';

const steps = [
    {
        title: "Process Mapping",
        description: "Analyzing current manual workflows.",
        icon: Network
    },
    {
        title: "System Design",
        description: "Architecting the data flow & logic.",
        icon: Database
    },
    {
        title: "AI Integration",
        description: "Connecting models (LLMs) to data.",
        icon: Brain
    },
    {
        title: "Automation Rules",
        description: "Setting triggers and actions.",
        icon: Zap
    },
    {
        title: "Optimization",
        description: "Monitoring performance & refining.",
        icon: ShieldCheck
    }
];

export default function AIArchitecture() {
    return (
        <section className="py-24 bg-[#FAFAF8] border-t-2 border-b-2 border-black relative overflow-hidden">
            <Container className="relative z-10">
                <div className="text-left max-w-3xl mb-20">
                    <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 05 / PROCESS_BLUEPRINT ]</span>
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4 mt-4">
                        How We Build <span className="text-red-600 italic underline decoration-4 underline-offset-4">AI Systems</span>.
                    </h2>
                    <p className="text-xs font-light text-gray-600 leading-relaxed max-w-md">
                        We don&apos;t plug LLMs randomly. We architect them as robust, deterministic infrastructure elements.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-16 right-16 h-0.5 bg-black/20 z-0" />

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
                                <div className="w-16 h-16 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] group-hover:shadow-[6px_6px_0_#0A0A0A] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 flex items-center justify-center mb-6 transition-all duration-100">
                                    <Icon className="w-6 h-6 text-red-600" />
                                </div>

                                <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-black mb-2">{step.title}</h3>
                                <p className="text-[10px] text-gray-600 max-w-[140px] leading-relaxed">
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
