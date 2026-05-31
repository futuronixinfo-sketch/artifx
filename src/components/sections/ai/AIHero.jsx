'use client';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { aiHero } from '@/data/ai-page';

export default function AIHero() {
    return (
        <section className="relative pt-36 pb-20 border-b border-gray-200 min-h-[50vh] flex items-center bg-white overflow-hidden">
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-red-50 blur-[120px] rounded-full pointer-events-none" />
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
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200"
                >
                    <Bot className="w-3.5 h-3.5 text-red-600" />
                    <span className="text-xs font-medium text-red-600">{aiHero.badge}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight"
                >
                    AI that <span className="gradient-text">actually</span> works inside your workflows.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed"
                >
                    {aiHero.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="pt-4"
                >
                    <Button variant="custom" href="/contact" className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white bg-red-600 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300">
                        {aiHero.cta} <ArrowRight className="w-3 h-3" />
                    </Button>
                </motion.div>
            </Container>
        </section>
    );
}
