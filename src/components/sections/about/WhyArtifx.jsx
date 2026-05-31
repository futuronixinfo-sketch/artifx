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
        <section ref={ref} className="py-32 bg-neutral-950 border-b border-neutral-900 overflow-hidden select-none">
            <Container className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 02 / ORIGIN ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-[1.1]">
                        Why we <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>started</span>
                    </h2>
                </div>

                <motion.div style={{ y }} className="text-sm font-light text-neutral-400 leading-relaxed">
                    {whyArtifx.story}
                </motion.div>
            </Container>
        </section>
    );
}
