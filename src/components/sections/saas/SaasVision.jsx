'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Container from '@/components/ui/Container';
import { saasVision } from '@/data/saas-page';

export default function SaasVision() {
    return (
        <section className="relative pt-36 pb-20 border-b-2 border-black min-h-[50vh] flex items-center bg-[#FAFAF8] overflow-hidden">
            <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
                <div
                    className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none opacity-[0.04]"
                    style={{ fontFamily: "var(--font-heading)" }}
                >
                    SOFTWARE
                </div>
            </div>

            <Container className="relative z-10 max-w-4xl text-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
                >
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span className="text-xs font-black font-mono uppercase tracking-widest">Our Vision</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight"
                >
                    We build products to solve <span className="text-red-600 underline decoration-4 underline-offset-4">operational friction</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
                >
                    {saasVision.subtitle}
                </motion.p>
            </Container>
        </section>
    );
}
