'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whatNext } from '@/data/contact-page';

export default function WhatNext() {
    return (
        <section className="py-24 bg-neutral-950 text-white border-b border-neutral-900">
            <Container className="max-w-2xl mx-auto">
                <h3 className="text-xl font-bold uppercase tracking-tight text-center text-white mb-12">
                    Operational <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>Timeline</span>
                </h3>

                <div className="relative border-l border-neutral-900 ml-6 md:ml-10 space-y-12">
                    {whatNext.map((step, idx) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="relative pl-8 md:pl-12 text-left"
                        >
                            <span className="absolute -left-[4px] top-2 w-2 h-2 bg-[#f95738]" style={{ borderRadius: 0 }} />
                            <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-lg">{step}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
