'use client';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { ArrowRight } from 'lucide-react';

export default function ProjectsCTA() {
    return (
        <section className="py-32 bg-black overflow-hidden relative text-center select-none border-t border-neutral-900">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f95738]/[0.02] rounded-full blur-[140px] pointer-events-none" />

            <Container className="relative z-10 max-w-3xl">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 03 / INITIATION ]</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-8"
                >
                    Your business problem could be <br />
                    <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>our</span> next case study.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xs font-light text-neutral-400 mb-12 max-w-md mx-auto"
                >
                    We don’t take many projects — only those where system architecture makes a real, measurable operational leverage.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Button variant="primary" size="md" href="/contact" className="px-8">
                        Discuss Your Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <p className="mt-6 text-[10px] text-neutral-600 font-mono uppercase tracking-widest">[ CLARITY BEFORE COMMITMENT ]</p>
                </motion.div>
            </Container>
        </section>
    );
}
