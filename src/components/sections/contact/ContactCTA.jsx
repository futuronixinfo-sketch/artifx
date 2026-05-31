'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function ContactCTA() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.98, 1]);

    const scrollToForm = () => {
        const element = document.getElementById('contact-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.section
            style={{ scale }}
            className="py-32 bg-black border-t border-neutral-900 text-white text-center relative overflow-hidden select-none"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f95738]/[0.02] rounded-full blur-[140px] pointer-events-none" />

            <Container className="relative z-10 max-w-2xl">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 04 / CONVERSATION ]</span>
                
                <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white mb-6">
                    Not Sure Where To <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>Start</span>?
                </h2>
                
                <p className="text-xs text-neutral-400 mb-12 font-light max-w-md mx-auto leading-relaxed">
                    That's completely fine. Most successful digital infrastructures begin with a simple architectural diagnostic call.
                </p>

                <Button
                    variant="primary"
                    size="md"
                    onClick={scrollToForm}
                    className="px-8"
                >
                    Start a Conversation
                </Button>
                
                <p className="mt-6 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
                    [ NO SALES PRESSURE — TECHNICAL DIAGNOSTICS ONLY ]
                </p>
            </Container>
        </motion.section>
    );
}
