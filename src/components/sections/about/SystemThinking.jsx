'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import { systemThinking } from '@/data/about-page';

export default function SystemThinking() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.02]);

    return (
        <section ref={containerRef} className="py-32 bg-black text-white relative overflow-hidden select-none border-b border-neutral-900">
            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-6 block font-bold">[ 04 / SYSTEM_THINKING ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-8">
                        We think in <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>systems</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-[#f95738]" />
                </div>

                <motion.div style={{ scale }} className="bg-neutral-950/40 border border-neutral-900 p-8 md:p-12 shadow-2xl relative">
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                        {systemThinking.content}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
