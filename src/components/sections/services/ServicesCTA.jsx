'use client';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesCTA() {
    return (
        <section className="relative py-32 bg-[#FAFAF8] text-black border-t-2 border-black select-none overflow-hidden">

            <Container className="relative z-10 max-w-4xl">
                {/* CTA banner card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-black text-white p-8 md:p-14 border-2 border-black shadow-[4px_4px_0_#0A0A0A] text-center space-y-6"
                >
                    <div className="space-y-4 relative z-10">
                        {/* Upper Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFE500] text-black border-2 border-[#FFE500] text-[10px] font-mono font-bold uppercase tracking-widest mx-auto">
                            <Terminal className="w-3.5 h-3.5" />
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
                            className="w-full sm:w-auto bg-[#FFE500] text-black border-2 border-[#FFE500] shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-8 py-4 inline-flex items-center justify-center gap-2 group"
                        >
                            Book Free Strategy Call
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="custom"
                            size="lg"
                            href="/contact"
                            className="w-full sm:w-auto bg-black text-white border-2 border-white shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 text-xs px-8 py-4 inline-flex justify-center"
                        >
                            Request System Audit
                        </Button>
                    </div>

                    {/* Console Line Health */}
                    <div className="pt-6 border-t-2 border-neutral-700 flex justify-between items-center text-[9px] font-mono text-neutral-500 relative z-10">
                        <span>EST. SETUP TIMELINE: 3-6 WEEKS</span>
                        <span className="flex items-center gap-1.5 text-[#FFE500] font-bold">
                            <Terminal className="w-3.5 h-3.5" />
                            100% TAILORED CODE
                        </span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
