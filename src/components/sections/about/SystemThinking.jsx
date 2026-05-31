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
        <section ref={containerRef} className="py-32 bg-white text-black relative overflow-hidden select-none border-b border-gray-200">
            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-6 block font-bold">[ 04 / SYSTEM_THINKING ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-tight mb-8">
                        We think in <span className="italic text-red-600">systems</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-red-500" />
                </div>

                <motion.div style={{ scale }} className="bg-gray-50 border border-gray-200 p-8 md:p-12 shadow-2xl relative rounded-2xl">
                    <p className="text-sm text-red-600/60 leading-relaxed font-light">
                        {systemThinking.content}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
