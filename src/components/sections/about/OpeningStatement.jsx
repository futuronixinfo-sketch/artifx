'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { openingStatement } from '@/data/about-page';

export default function OpeningStatement() {
    return (
        <section className="relative min-h-[90vh] bg-black text-white flex flex-col justify-between pt-32 pb-16 overflow-hidden select-none border-b border-neutral-900">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                {/* Soft ambient background glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] rounded-full pointer-events-none" />
                
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
                    ABOUT
                </div>
            </div>

            {/* Subtle background tech line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            {/* Spacer */}
            <div className="flex-grow" />

            <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12">
                {/* Left Side: Editorial Typography */}
                <div className="lg:col-span-8 space-y-6">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest font-bold block">[ 01 / PHILOSOPHY ]</span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.1] max-w-4xl"
                    >
                        Artifx was created to solve one core problem — businesses <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>grow</span>, but their systems don't.
                    </motion.h1>
                </div>

                {/* Right Side: Asymmetric Minimal Subtext */}
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-xs space-y-4 text-left lg:text-right"
                    >
                        <p className="text-xs sm:text-sm leading-relaxed font-light text-neutral-400">
                            As operations scale, operational chaos follows. We exist to replace that chaos with architectural clarity.
                        </p>
                    </motion.div>
                </div>
            </Container>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* Banner Image Container - Converted to Brutalist Framed Outline Box */}
            <Container className="relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative border border-neutral-900 max-w-5xl mx-auto overflow-hidden bg-neutral-950/40 group"
                >
                    <img 
                        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                        alt="Artifx design systems workflow" 
                        className="w-full h-[280px] md:h-[350px] object-cover opacity-50 group-hover:scale-105 group-hover:opacity-75 transition-all duration-[1200ms] filter grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 font-mono text-[9px] text-neutral-500 uppercase tracking-widest bg-black/80 px-4 py-2 border border-neutral-900">
                        [ system_concept: architecture_first ]
                    </div>
                </motion.div>
            </Container>

        </section>
    );
}
