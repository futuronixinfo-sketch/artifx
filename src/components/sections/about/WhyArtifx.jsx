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
        <section ref={ref} className="py-32 bg-white border-b border-gray-200 overflow-hidden select-none">
            <Container className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-4 block font-bold">[ 02 / ORIGIN ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-[1.1]">
                        Why we <span className="italic text-red-600">started</span>
                    </h2>
                </div>

                <motion.div style={{ y }} className="text-sm font-light text-red-600/60 leading-relaxed">
                    {whyArtifx.story}
                </motion.div>
            </Container>
        </section>
    );
}
