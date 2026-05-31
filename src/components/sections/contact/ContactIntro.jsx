'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { contactIntro } from '@/data/contact-page';

export default function ContactIntro() {
    return (
        <section className="relative pt-32 pb-20 bg-black text-white border-b border-neutral-900 select-none overflow-hidden min-h-[60vh] flex items-center">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-20 md:pt-16 z-0 pointer-events-none">
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
                    CONNECT
                </div>
            </div>

            <Container className="relative z-10 max-w-4xl text-center space-y-6">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-2">[ 01 / CONNECTION ]</span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight"
                >
                    Let's build something that <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>performs</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl mx-auto"
                >
                    {contactIntro.subtitle}
                </motion.p>
            </Container>
        </section>
    );
}
