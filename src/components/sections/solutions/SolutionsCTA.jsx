'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export default function SolutionsCTA() {
    return (
        <section className="py-32 bg-[#FAFAF8] relative overflow-hidden select-none border-t-2 border-black">

            <Container className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 mb-6">
                    <span className="inline-block h-2 w-2 bg-red-600 animate-pulse" />
                    <span className="inline-block px-3 py-1 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-xs font-mono font-black uppercase tracking-widest">
                        [ 06 / SYSTEM_MAPPING ]
                    </span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-black tracking-tight text-black uppercase leading-tight mb-8"
                >
                    Not Sure What <br className="hidden md:block" />
                    <span className="text-red-600 underline decoration-4 underline-offset-4">System</span> You Need?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-sm font-mono text-gray-500 max-w-xl mx-auto mb-12"
                >
                    You don&apos;t need to decide today. We help you map your business and identify the right solution.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100"
                    >
                        Get Free System Mapping Call
                        <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                    <Link
                        href="/solutions"
                        className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-black uppercase tracking-widest font-mono transition-all duration-100"
                    >
                        Explore Solutions
                    </Link>
                </motion.div>
            </Container>
        </section>
    );
}
