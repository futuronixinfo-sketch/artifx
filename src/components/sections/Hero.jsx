'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

export default function Hero() {
    const [currentTime, setCurrentTime] = useState('');

    // Dynamic Live Clock
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hrs = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            setCurrentTime(`${hrs}:${mins}`);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-[95vh] bg-black text-white flex flex-col justify-between pt-24 pb-8 overflow-hidden select-none">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-32 md:pt-8 z-0 pointer-events-none">
                {/* Soft editorial background glow centered under the watermark */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-[#f95738]/[0.04] blur-[120px] rounded-full pointer-events-none" />
                
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
                    ARTIFX
                </div>
            </div>

            {/* Subtle background tech line */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-neutral-900 z-0 pointer-events-none" />

            {/* Spacer */}
            <div className="flex-grow" />

            {/* 2. MAIN EDITORIAL CONTENT GRID */}
            <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
                
                {/* Left Side: Massive Serif-Contrast Typography */}
                <div className="lg:col-span-8 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light leading-[1.08] tracking-tight text-white max-w-4xl"
                    >
                        Systems that <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>perform</span> <br />
                        <span className="pl-0 md:pl-24 font-normal block mt-1">in your business's voice.</span>
                    </motion.h1>
                </div>

                {/* Right Side: Asymmetric Minimal Subtext */}
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-xs space-y-4 lg:text-left text-neutral-400"
                    >
                        <p className="text-xs sm:text-sm leading-relaxed font-light font-sans tracking-wide">
                            Architecture, intelligence, and code shaped as one. So your operational backbone works as hard as you do.
                        </p>
                    </motion.div>
                </div>

            </Container>

            {/* Spacer */}
            <div className="flex-grow" />

            {/* 3. METADATA CONSOLE HUD FOOTER */}
            <Container className="relative z-10 w-full pt-6 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono select-none tracking-tight">
                
                {/* Left: Location and Time */}
                <div className="flex items-center gap-2 text-neutral-500">
                    <span className="text-neutral-400">SAN FRANCISCO</span>
                    <span>{currentTime}</span>
                </div>

                {/* Right: Minimal Navigation Links & CTA */}
                <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-neutral-400 uppercase text-[10px] font-bold">
                    <Link href="/projects" className="hover:text-white transition-colors relative group py-1">
                        Work
                        <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                    
                    <Link href="/services" className="hover:text-white transition-colors relative group py-1">
                        Services
                        <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                    
                    <Link href="/solutions" className="hover:text-white transition-colors relative group py-1">
                        Process
                        <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>

                    {/* High-Impact CTA Link with glowing red-orange pulse dot matching Milan design */}
                    <Link href="/contact" className="hover:text-white transition-colors flex items-center gap-1.5 py-1 text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#f95738] animate-pulse" />
                        Contact
                    </Link>
                </div>

            </Container>

        </section>
    );
}
