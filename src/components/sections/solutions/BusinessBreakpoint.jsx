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
        <section ref={containerRef} className="relative py-28 bg-white border-t border-gray-200 overflow-hidden select-none">
            {/* Giant watermark text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-red-50 blur-[120px] pointer-events-none" />
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
                    BREAKPOINT
                </div>
            </div>

            <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 z-0 pointer-events-none" />

            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Left: Story */}
                <motion.div
                    style={{ y }}
                    className="relative z-10"
                >
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-4 block font-bold">
                        [ 02 / BREAKPOINT ]
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black leading-[1.1] mb-6">
                        When Businesses Start <br />
                        <span className="italic gradient-text" style={{ fontFamily: "Georgia, serif" }}>breaking</span>
                    </h2>
                    <p className="text-sm text-gray-500 font-light mb-8 max-w-md leading-relaxed">
                        {businessBreakpoint.description}
                    </p>
                    <div className="w-24 h-px bg-red-500" />
                </motion.div>

                {/* Right: Timeline Visual */}
                <div className="relative">
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />
                    <div className="space-y-12">
                        {businessBreakpoint.stages.map((stage, idx) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.15 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex gap-8 relative"
                            >
                                <div className="w-12 h-12 bg-gray-100 border border-gray-200 flex flex-shrink-0 items-center justify-center z-10 relative">
                                    <div className={`w-3 h-3 ${idx === 0 ? 'bg-red-500' : 'bg-gray-400'}`} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-2 uppercase tracking-tight">{stage.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-light">
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
