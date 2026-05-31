'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { solutionAccordion } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SolutionAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="relative py-28 bg-black border-t border-neutral-900 overflow-hidden select-none">
            {/* Giant watermark text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] pointer-events-none" />
                <div
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    COMPONENTS
                </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">
                        [ 05 / COMPONENTS ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight">
                        Solution <br />
                        <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>Components</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4 relative z-10">
                    {solutionAccordion.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-neutral-700 transition-all"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <span className="text-lg md:text-xl font-semibold text-white group-hover:text-[#f95738] transition-colors">
                                    {item.title}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ChevronDown className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 border-t border-neutral-800/50">
                                            <p className="text-neutral-400 leading-relaxed text-sm md:text-base font-light">
                                                {item.description}
                                            </p>
                                            <div className="mt-4 flex items-center gap-2 text-[#f95738] text-xs font-mono uppercase tracking-widest cursor-pointer hover:underline">
                                                View Details <ArrowRight className="w-3 h-3" />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
