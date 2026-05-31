'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function ServicesCTA() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.98, 1]);

    return (
        <motion.section
            style={{ scale }}
            className="py-32 bg-black text-white relative overflow-hidden text-center select-none border-t border-neutral-900"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f95738]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <Container className="relative z-10 max-w-4xl">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 04 / COMPILER ]</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-8">
                    Not sure which <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>service</span> you need?
                </h2>
                <p className="text-xs text-neutral-400 font-light mb-12 max-w-md mx-auto leading-relaxed">
                    Most clients aren't — and that's normal. We help you identify the right operational architecture based on your scale.
                </p>

                <Button
                    variant="primary"
                    size="md"
                    href="/contact"
                >
                    Book Free Discovery Call
                </Button>

                <p className="mt-6 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">
                    [ NO OBLIGATION. JUST OPERATIONAL TELEMETRY. ]
                </p>
            </Container>
        </motion.section>
    );
}
