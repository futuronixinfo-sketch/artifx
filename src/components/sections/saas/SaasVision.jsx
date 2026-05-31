'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasVision } from '@/data/saas-page';

export default function SaasVision() {
    return (
        <section className="min-h-[70vh] relative flex flex-col justify-center text-center bg-black pt-32 pb-20 border-b border-neutral-900 overflow-hidden select-none">
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
                    SOFTWARE
                </div>
            </div>

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-2">
                        [ 01 / SAAS_VISION ]
                    </span>
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                        We build products to solve <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>operational friction</span>.
                    </h1>
                    <p className="text-xs font-light text-neutral-400 max-w-xl mx-auto leading-relaxed">
                        {saasVision.subtitle}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
