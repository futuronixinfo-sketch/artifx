'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function AboutCTA() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [0.98, 1]);

    return (
        <motion.section
            style={{ scale }}
            className="py-32 bg-black text-white text-center select-none border-t border-neutral-900"
        >
            <Container className="max-w-xl">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 06 / CONNECTION ]</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-8">
                    Share your <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>vision</span>
                </h2>
                <p className="text-xs font-light text-neutral-400 mb-12">
                    If our systems-first thinking resonates with you, we’d love to study your business. No sales pressure. Just operational clarity.
                </p>

                <Button variant="outline" size="md" href="/contact">
                    Start a Conversation
                </Button>
            </Container>
        </motion.section>
    );
}
