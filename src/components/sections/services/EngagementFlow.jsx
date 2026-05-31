'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Container from '@/components/ui/Container';
import { useRef } from 'react';

const steps = [
    "Discovery",
    "System Mapping",
    "Proposal",
    "Build",
    "Launch",
    "Scale"
];

export default function EngagementFlow() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

    return (
        <section ref={containerRef} className="py-24 bg-black border-b border-neutral-900 relative overflow-hidden select-none">
            <Container className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block mb-4 font-bold">
                        [ 02 / ENGAGEMENT ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                        How clients <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>engage</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative py-8">
                    {/* Visual Timeline Bar */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-neutral-900 -z-10" />

                    {steps.map((step, idx) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <div className="w-10 h-10 border border-neutral-800 bg-neutral-950 flex items-center justify-center text-neutral-500 font-mono text-xs z-10 group-hover:border-[#f95738] group-hover:text-[#f95738] transition-all duration-300 shadow-sm font-bold">
                                0{idx + 1}
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white transition-colors">
                                {step}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
