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
            className="py-32 bg-[#FAFAF8] text-black text-center select-none border-t-2 border-black"
        >
            <Container className="max-w-xl">
                <div className="flex justify-center mb-6">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] px-4 py-2">
                        [ 06 / CONNECTION ]
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-black leading-tight mb-8">
                    Share your <span className="text-red-600 underline decoration-4 underline-offset-4 italic">vision</span>
                </h2>
                <p className="text-xs font-light text-gray-700 mb-12">
                    If our systems-first thinking resonates with you, we&apos;d love to study your business. No sales pressure. Just operational clarity.
                </p>

                <a
                    href="/contact"
                    className="inline-block bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100 px-8 py-4 text-sm"
                >
                    Start a Conversation
                </a>
            </Container>
        </motion.section>
    );
}
