'use client';
import { motion } from 'framer-motion';
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
        <section className="py-24 bg-[#FAFAF8] border-b-2 border-black">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2 text-left">
                        <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-6">[ 03 / OPERATIONAL_PHILOSOPHY ]</span>
                        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black mb-6 leading-tight mt-4">
                            Our approach to <br />
                            <span className="text-red-600 italic underline decoration-4 underline-offset-4">Machine Intelligence</span>.
                        </h2>
                        <p className="text-xs font-light text-gray-600 leading-relaxed mb-8 max-w-md">
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
                                className="p-6 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-2.5 h-2.5 bg-red-600 border border-black" />
                                    <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-black">{point.title}</h3>
                                </div>
                                <p className="text-xs font-light text-gray-600 leading-relaxed pl-4 border-l-2 border-black">
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
