'use client';
import { motion } from 'framer-motion';
import { whatWeDontDo } from '@/data/services-page';
import Container from '@/components/ui/Container';
import { XCircle } from 'lucide-react';

export default function WhatWeDontDo() {
    return (
        <section className="py-24 bg-neutral-950 text-white border-b border-neutral-900 select-none">
            <Container className="max-w-4xl text-center">
                <span className="text-xs font-mono text-red-500 uppercase tracking-widest mb-6 block font-bold">[ 03 / BOUNDARIES ]</span>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-12">
                    What we <span className="italic text-red-500" style={{ fontFamily: "Georgia, serif" }}>don't</span> do
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {whatWeDontDo.map((item, idx) => (
                        <motion.div
                            key={item}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="group flex items-center gap-3 px-6 py-4 border border-neutral-900 bg-neutral-950/40 hover:border-red-500/50 transition-colors"
                        >
                            <XCircle className="w-4 h-4 text-red-500 group-hover:scale-105 transition-transform" />
                            <span className="text-neutral-400 text-xs font-bold uppercase tracking-tight group-hover:text-white transition-colors">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-[10px] text-neutral-600 font-mono">
                    [ EXCLUSION_POLICY: WE ONLY ENGAGE WHERE SYSTEM ARCHITECTURE GIVES A 10X LEVERAGE ]
                </p>
            </Container>
        </section>
    );
}
