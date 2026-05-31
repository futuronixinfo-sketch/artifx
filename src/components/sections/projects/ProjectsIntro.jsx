'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { projectsIntro } from '@/data/projects-page';

export default function ProjectsIntro() {
    return (
        <section className="relative pt-32 pb-20 bg-black text-white border-b border-neutral-900 select-none overflow-hidden">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-28 md:pt-16 z-0 pointer-events-none">
                {/* Soft ambient background glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.03] blur-[120px] rounded-full pointer-events-none" />
                
                <div 
                    className="w-full text-center text-[22vw] md:text-[18vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    RESULTS
                </div>
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-6 block font-bold">
                        [ 01 / RESULTS ]
                    </span>
                    <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 leading-[1.1]">
                        Real systems. <br />
                        <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>real</span> business outcomes.
                    </h1>
                    <p className="text-xs text-neutral-400 font-light max-w-xl leading-relaxed border-l border-[#f95738] pl-6">
                        {projectsIntro.subtitle}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
