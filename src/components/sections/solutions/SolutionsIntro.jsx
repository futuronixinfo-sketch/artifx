'use client';
import { motion } from 'framer-motion';
import { solutionsIntro } from '@/data/solutions-page';
import Container from '@/components/ui/Container';

export default function SolutionsIntro() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-between bg-black overflow-hidden border-b border-neutral-900 pt-24 pb-8 select-none">

            {/* Giant watermark text */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.04] blur-[120px] pointer-events-none" />
                <div
                    className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    SYSTEMS
                </div>
            </div>

            <div className="flex-grow" />

            <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                <div className="lg:col-span-8 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold"
                    >
                        [ 01 / SYSTEM_ARCHITECTURE ]
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.08] tracking-tight text-white max-w-4xl"
                    >
                        Solutions Designed as <br />
                        <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>Business Systems</span>
                    </motion.h1>
                </div>
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-xs space-y-4 lg:text-left text-neutral-400"
                    >
                        <p className="text-xs sm:text-sm leading-relaxed font-light font-sans tracking-wide">
                            {solutionsIntro.subtitle}
                        </p>
                    </motion.div>
                </div>
            </Container>

            <div className="flex-grow" />

            <Container className="relative z-10 w-full pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono select-none tracking-tight">
                <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-neutral-400">SYSTEM ARCHITECTURE</span>
                    <span className="text-neutral-600">v2.0</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-600">
                    <span className="h-1.5 w-1.5 bg-[#f95738] animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">Scroll for Architecture</span>
                </div>
            </Container>
        </section>
    );
}
