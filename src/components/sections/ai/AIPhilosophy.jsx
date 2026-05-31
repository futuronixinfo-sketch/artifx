'use client';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';

const points = [
    {
        title: "Business-First",
        description: "We solve operational bottlenecks, not just ship code."
    },
    {
        title: "Workflow-Driven",
        description: "We map your entire process before automating a single step."
    },
    {
        title: "Human + AI",
        description: "Designing systems where AI handles the grunt work, humans handle strategy."
    },
    {
        title: "Secure By Design",
        description: "Enterprise-grade security and data privacy controls from Day 1."
    }
];

export default function AIPhilosophy() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 text-left">
                        <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-4 block font-bold">[ 03 / OPERATIONAL_PHILOSOPHY ]</span>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight">
                            Our approach to <br />
                            <span className="gradient-text italic">Machine Intelligence</span>.
                        </h2>
                        <p className="text-xs font-light text-gray-500 leading-relaxed mb-8 max-w-md">
                            AI should optimize and streamline operations, not introduce complex dependencies. We inject deterministic reasoning exactly where it impacts efficiency.
                        </p>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {points.map((point, idx) => (
                            <motion.div
                                key={point.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 bg-gray-50 border border-gray-200 hover:border-red-500 transition-colors rounded-2xl"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2.5 h-2.5 bg-red-500 rounded-xl" />
                                    <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-black">{point.title}</h3>
                                </div>
                                <p className="text-xs font-light text-gray-500 leading-relaxed pl-4 border-l border-gray-200">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
