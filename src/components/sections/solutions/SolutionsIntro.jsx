'use client';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { solutionsIntro } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SolutionsIntro() {
    return (
        <section className="relative pt-36 pb-20 border-b-2 border-black min-h-[50vh] flex items-center bg-[#FAFAF8] overflow-hidden">

            {/* Hard grid guides */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[32px_32px] opacity-30 pointer-events-none" />

            {/* Huge Watermarked Background Text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none opacity-[0.03]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    SYSTEMS
                </div>
            </div>

            <Container className="relative z-10 max-w-4xl text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
                >
                    <Layers className="w-3.5 h-3.5 text-black" />
                    <span className="text-xs font-mono font-black uppercase tracking-widest text-black">System Architecture</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black uppercase leading-[0.95]"
                >
                    Solutions Designed as{' '}
                    <span className="text-red-600 underline decoration-4 underline-offset-4">Business Systems</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm font-mono text-gray-500 max-w-xl mx-auto leading-relaxed"
                >
                    {solutionsIntro.subtitle}
                </motion.p>
            </Container>
        </section>
    );
}
