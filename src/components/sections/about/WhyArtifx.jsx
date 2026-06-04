'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from '@/components/ui/Container';
import { whyArtifx } from '@/data/about-page';

export default function WhyArtifx() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={ref} className="py-32 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">
            <Container className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black mb-4 block">[ 02 / ORIGIN ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-[1.1]">
                        Why we <span className="text-red-600 underline decoration-4 underline-offset-4 italic">started</span>
                    </h2>
                </div>

                <motion.div style={{ y }} className="text-sm font-light text-gray-700 leading-relaxed bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-8">
                    {whyArtifx.story}
                </motion.div>
            </Container>
        </section>
    );
}
