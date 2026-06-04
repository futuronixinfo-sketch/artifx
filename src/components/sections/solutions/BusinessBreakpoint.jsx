'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import { businessBreakpoint } from '@/data/solutions-page';

export default function BusinessBreakpoint() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="relative py-28 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

            {/* Huge Watermarked Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[16vw] font-black tracking-tighter leading-none select-none opacity-[0.03]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    BREAKPOINT
                </div>
            </div>

            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left: Story */}
                <motion.div style={{ y }} className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-xs font-mono font-black uppercase tracking-widest mb-6">
                        [ 02 / BREAKPOINT ]
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-black uppercase leading-[1.0] mb-6">
                        When Businesses Start{' '}
                        <span className="text-red-600 underline decoration-4 underline-offset-4">breaking</span>
                    </h2>
                    <p className="text-sm font-mono text-gray-500 mb-8 max-w-md leading-relaxed">
                        {businessBreakpoint.description}
                    </p>
                    <div className="w-24 h-0.5 bg-black" />
                </motion.div>

                {/* Right: Timeline Visual */}
                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-black" />
                    <div className="space-y-10">
                        {businessBreakpoint.stages.map((stage, idx) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex gap-8 relative"
                            >
                                <div className={`w-12 h-12 border-2 border-black flex flex-shrink-0 items-center justify-center z-10 relative shadow-[3px_3px_0_#0A0A0A] ${idx === 0 ? 'bg-[#FFE500]' : 'bg-white'}`}>
                                    <div className={`w-3 h-3 ${idx === 0 ? 'bg-black' : 'bg-gray-400'}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-black mb-2 uppercase tracking-tight">{stage.title}</h3>
                                    <p className="text-gray-500 text-xs font-mono leading-relaxed max-w-xs">
                                        {stage.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
