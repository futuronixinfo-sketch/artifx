'use client';
import { motion } from 'framer-motion';
import { solutionLayers } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SolutionLayers() {
    return (
        <section className="relative py-28 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

            {/* Huge Watermarked Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none opacity-[0.03]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    STACK
                </div>
            </div>

            <Container className="relative z-10 text-center">
                <span className="inline-block px-3 py-1 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-xs font-mono font-black uppercase tracking-widest mb-6">
                    [ 04 / SOLUTION_STACK ]
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black uppercase leading-tight mb-16">
                    Our Solution{' '}
                    <span className="text-red-600 underline decoration-4 underline-offset-4">Stack</span>
                </h2>

                <div className="relative max-w-4xl mx-auto space-y-6">
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/20" />

                    {solutionLayers.map((layer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} relative`}
                        >
                            {/* Content Block */}
                            <div className="w-1/2 p-6 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 text-left relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-8 h-8 bg-[#FFE500] border-2 border-black flex items-center justify-center">
                                        <span className="font-mono text-sm font-black text-black">{index + 1}</span>
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase tracking-tight">{layer.layer}</h3>
                                </div>

                                <ul className="space-y-2">
                                    {layer.features.map((feature, i) => (
                                        <li key={i} className="text-sm font-mono text-gray-500 flex items-center gap-2">
                                            <span className="w-2 h-0.5 bg-black shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FFE500] border-2 border-black shadow-[2px_2px_0_#0A0A0A] z-20" />

                            <div className="w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
