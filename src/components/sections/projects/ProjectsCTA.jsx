'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
    return (
        <section className="py-32 bg-[#FAFAF8] overflow-hidden relative text-center select-none border-t-2 border-black">

            <Container className="relative z-10 max-w-3xl">
                <span className="inline-block px-3 py-1 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-xs font-mono font-black uppercase tracking-widest mb-6">
                    [ 03 / INITIATION ]
                </span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-black tracking-tight text-black leading-tight mb-8 uppercase"
                >
                    Your business problem could be <br />
                    <span className="text-red-600 underline decoration-4 underline-offset-4">our</span> next case study.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xs font-mono text-gray-500 mb-12 max-w-md mx-auto"
                >
                    We don&apos;t take many projects — only those where system architecture makes a real, measurable operational leverage.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100"
                    >
                        Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                    <p className="mt-6 text-[10px] text-gray-400 font-mono uppercase tracking-widest">[ CLARITY BEFORE COMMITMENT ]</p>
                </motion.div>
            </Container>
        </section>
    );
}
