'use client';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { aiHero } from '@/data/ai-page';

export default function AIHero() {
    return (
        <section className="relative pt-36 pb-20 border-b-2 border-black min-h-[50vh] flex items-center bg-[#FAFAF8] overflow-hidden">
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none opacity-[0.04]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    INTELLIGENCE
                </div>
            </div>

            <Container className="relative z-10 max-w-4xl text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
                >
                    <Bot className="w-3.5 h-3.5 text-black" />
                    <span className="text-xs font-black font-mono uppercase tracking-widest">{aiHero.badge}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight"
                >
                    AI that <span className="text-red-600 underline decoration-4 underline-offset-4">actually</span> works inside your workflows.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
                >
                    {aiHero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-4"
                >
                    <Button variant="custom" href="/contact" className="inline-flex items-center gap-2 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 px-6 py-3 text-[10px]">
                        {aiHero.cta} <ArrowRight className="w-3 h-3" />
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
