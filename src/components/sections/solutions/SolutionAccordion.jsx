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
        <section className="relative py-28 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

            {/* Huge Watermarked Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none opacity-[0.03]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    COMPONENTS
                </div>
            </div>

            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block px-3 py-1 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-xs font-mono font-black uppercase tracking-widest mb-6">
                        [ 05 / COMPONENTS ]
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase leading-tight">
                        Solution{' '}
                        <span className="text-red-600 underline decoration-4 underline-offset-4">Components</span>
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-3 relative z-10">
                    {solutionAccordion.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white border-2 border-black transition-all duration-100 ${
                                activeIndex === index
                                    ? 'shadow-[6px_6px_0_#0A0A0A]'
                                    : 'shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                            >
                                <span className="text-lg md:text-xl font-black text-black uppercase tracking-tight group-hover:text-red-600 transition-colors">
                                    {item.title}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="shrink-0 ml-4"
                                >
                                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
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
                                        <div className="p-6 pt-0 border-t-2 border-black">
                                            <p className="text-gray-500 leading-relaxed text-sm font-mono">
                                                {item.description}
                                            </p>
                                            <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono font-black uppercase tracking-widest text-red-600 cursor-pointer hover:underline">
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
