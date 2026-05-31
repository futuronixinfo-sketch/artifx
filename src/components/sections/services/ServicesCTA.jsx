'use client';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesCTA() {
    return (
        <section className="relative py-32 bg-white text-black border-t border-gray-100 select-none overflow-hidden">
            {/* Background Tech Orbs */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[35%] bg-red-50 blur-[130px] rounded-full pointer-events-none z-0" />
            <div className="absolute inset-0 z-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

            <Container className="relative z-10 max-w-4xl">
                {/* Console styled Call-to-action banner card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-black text-white p-8 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl shadow-red-950/10 border border-neutral-800 text-center space-y-6"
                >
                    {/* Glowing crimson aura */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-900 rounded-full blur-[130px] opacity-40 pointer-events-none" />

                    <div className="space-y-4 relative z-10">
                        {/* Upper Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-900 text-red-500 rounded-xl text-[10px] font-mono font-bold uppercase tracking-widest mx-auto">
                            <Sparkles className="w-3.5 h-3.5" />
                            DEPLOY SYSTEM ARCHITECTURE
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight max-w-2xl mx-auto">
                            Secure your business operational backbone.
                        </h2>

                        {/* Subtext */}
                        <p className="text-xs md:text-sm text-neutral-400 font-light max-w-md mx-auto leading-relaxed">
                            Stop running your growing company on manual copy-pasting, spreadsheets, and WhatsApp chaos. Let&apos;s engineer a robust, custom automation system built to last years.
                        </p>
                    </div>

                    {/* Buttons CTA */}
                    <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                        <Button
                            variant="custom"
                            size="lg"
                            href="/contact"
                            className="w-full sm:w-auto bg-red-600 text-white hover:bg-red-500 border-0 shadow-xl shadow-red-500/20 text-xs font-mono uppercase tracking-widest px-8 py-4.5 rounded-xl inline-flex items-center justify-center gap-2 group"
                        >
                            Book Free Strategy Call
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="/contact"
                            className="w-full sm:w-auto text-white border-neutral-800 hover:bg-neutral-900 hover:border-neutral-700 text-xs font-mono uppercase tracking-widest px-8 py-4.5 rounded-xl inline-flex justify-center"
                        >
                            Request System Audit
                        </Button>
                    </div>

                    {/* Console Line Health */}
                    <div className="pt-6 border-t border-neutral-800 flex justify-between items-center text-[9px] font-mono text-neutral-500 relative z-10">
                        <span>EST. SETUP TIMELINE: 3-6 WEEKS</span>
                        <span className="flex items-center gap-1.5 text-green-500 font-bold">
                            <Terminal className="w-3.5 h-3.5" />
                            100% TAILORED CODE
                        </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
