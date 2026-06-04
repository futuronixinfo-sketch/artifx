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
        <section ref={containerRef} className="py-32 bg-[#FAFAF8] text-black relative overflow-hidden select-none border-t-2 border-black">
            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black mb-6 block">[ 04 / SYSTEM_THINKING ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-tight mb-8">
                        We think in <span className="text-red-600 underline decoration-4 underline-offset-4 italic">systems</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-black" />
                </div>

                <motion.div style={{ scale }} className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-8 md:p-12 relative">
                    <p className="text-sm text-gray-700 leading-relaxed font-light">
                        {systemThinking.content}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
