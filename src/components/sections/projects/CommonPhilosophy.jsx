'use client';
import { motion } from 'framer-motion';
import { commonPhilosophy } from '@/data/projects-page';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export default function CommonPhilosophy() {
    return (
        <section className="py-24 bg-neutral-950 border-t border-neutral-900 select-none">
            <Container className="max-w-4xl mx-auto text-center">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-4 block font-bold">[ 02 / PHILOSOPHY ]</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-12">
                    Our projects share one <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>philosophy</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {commonPhilosophy.map((point, idx) => (
                        <motion.div
                            key={point}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-5 py-3 border border-neutral-900 bg-black/60"
                        >
                            <div className="w-6 h-6 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-emerald-400">
                                <Check className="w-3.5 h-3.5" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-tight text-neutral-300">{point}</span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
