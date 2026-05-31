'use client';
import { motion } from 'framer-motion';
import { processSteps } from '@/data/home';
import Container from '@/components/ui/Container';

export default function OurProcess() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-neutral-900 select-none">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 03 / METHODOLOGY ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                        Our Thinking <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>approach</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light">
                        We don't just jump into code. We engineer the system outcomes first.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#f95738]/30 to-transparent" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {processSteps.map((step, idx) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 border border-neutral-800 bg-neutral-900 flex items-center justify-center mb-6 relative z-10 group-hover:border-[#f95738]/50 transition-all shadow-2xl shadow-black duration-300">
                                    <span className="text-xl font-mono font-bold text-neutral-500 group-hover:text-[#f95738] transition-colors">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3">{step.title}</h3>
                                <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-[240px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
