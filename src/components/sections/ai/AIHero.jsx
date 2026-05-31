'use client';
import { motion } from 'framer-motion';
import { Bot, Brain, Sparkles, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function AIHero() {
    return (
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 bg-black overflow-hidden border-b border-neutral-900 select-none">
            
            {/* 1. GIANT WATERMARK TEXT (Masked Dot-Matrix / Plus-sign Pattern) */}
            <div className="absolute inset-0 flex items-start justify-center pt-20 md:pt-16 z-0 pointer-events-none">
                {/* Soft ambient background glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[25%] bg-[#f95738]/[0.03] blur-[130px] rounded-full pointer-events-none" />
                
                <div 
                    className="w-full text-center text-[12vw] font-black tracking-tighter leading-none select-none"
                    style={{
                        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.16) 1.5px, transparent 1.5px)",
                        backgroundSize: "6px 6px",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        WebkitTextStroke: "1px rgba(255, 255, 255, 0.04)",
                        fontFamily: "var(--font-heading)"
                    }}
                >
                    INTELLIGENCE
                </div>
            </div>

            <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-6">[ 01 / MACHINE_INTELLIGENCE ]</span>

                    <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight text-white">
                        AI that <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>actually</span> <br />
                        performs inside <br />
                        your workflows.
                    </h1>

                    <p className="text-xs font-light text-neutral-400 max-w-md leading-relaxed mb-8">
                        We design deterministic AI-powered systems that automate manual overhead, resolve customer pipeline friction, and augment staff capacity — without breaking your existing process.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button variant="primary" size="md" href="/contact" className="px-6">
                            Request AI Audit <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="md" href="#capabilities" className="px-6">
                            Explore Capabilities
                        </Button>
                    </div>
                    <p className="mt-6 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">[ NO ACADEMIC HYPE — PRODUCTION ARCHITECTURE ONLY ]</p>
                </motion.div>

                {/* Right Visual: Abstract AI Network */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 bg-neutral-950/40 backdrop-blur-xl border border-neutral-900 p-8" style={{ borderRadius: 0 }}>
                        <div className="flex items-center justify-between mb-8 border-b border-neutral-900 pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 bg-neutral-800" style={{ borderRadius: 0 }} />
                                <div className="w-2.5 h-2.5 bg-neutral-800" style={{ borderRadius: 0 }} />
                                <div className="w-2.5 h-2.5 bg-[#f95738]" style={{ borderRadius: 0 }} />
                            </div>
                            <div className="font-mono text-[10px] uppercase text-[#f95738] tracking-widest">[ status: processing_telemetry ]</div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-neutral-950 border border-neutral-900 flex items-center justify-center" style={{ borderRadius: 0 }}>
                                    <span className="text-[10px] font-mono text-neutral-500">INTENT</span>
                                </div>
                                <ArrowRight className="w-3 h-3 text-neutral-600" />
                                <div className="flex-1 p-3 bg-neutral-950/60 border border-neutral-900 text-[10px] text-[#f95738] font-mono tracking-wide" style={{ borderRadius: 0 }}>
                                    ANALYZING INCOMING SYSTEM METRICS...
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-neutral-950 border border-[#f95738]/30 flex items-center justify-center" style={{ borderRadius: 0 }}>
                                    <Brain className="w-4 h-4 text-[#f95738]" />
                                </div>
                                <div className="flex-1 h-px bg-gradient-to-r from-[#f95738]/20 to-transparent" />
                                <div className="w-24 p-2 bg-neutral-900 border border-neutral-800 text-center text-[10px] font-mono text-neutral-400" style={{ borderRadius: 0 }}>
                                    INFERENCE
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-neutral-950 border border-emerald-950 flex items-center justify-center" style={{ borderRadius: 0 }}>
                                    <Bot className="w-4 h-4 text-emerald-400" />
                                </div>
                                <ArrowRight className="w-3 h-3 text-neutral-600" />
                                <div className="flex-1 p-3 bg-neutral-950/60 border border-neutral-900 text-[10px] text-emerald-400 font-mono tracking-wide" style={{ borderRadius: 0 }}>
                                    ACTION: RESOLVE SYSTEM DISCREPANCY
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
