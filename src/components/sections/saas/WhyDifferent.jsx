'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whyDifferent } from '@/data/saas-page';
import { Check } from 'lucide-react';

export default function WhyDifferent() {
    return (
        <section className="py-24 bg-white border-y border-gray-200 select-none">
            <Container className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
                    <div>
                        <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-4">[ 05 / DIFFERENTIAL ]</span>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-6 leading-tight">
                            What makes us <span className="italic gradient-text" style={{ fontFamily: "Georgia, serif" }}>different</span>.
                        </h2>
                        <p className="text-xs font-light text-gray-500 max-w-md leading-relaxed">
                            {whyDifferent.subtitle}
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 border border-gray-200" style={{ borderRadius: 0 }}>
                        <ul className="space-y-6">
                            {whyDifferent.points.map((point, idx) => (
                                <motion.li
                                    key={point}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 text-black"
                                >
                                    <div className="w-6 h-6 bg-emerald-950/40 border border-emerald-900/60 flex items-center justify-center text-emerald-400 flex-shrink-0" style={{ borderRadius: 0 }}>
                                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                                    </div>
                                    <span className="text-xs font-light text-gray-700">{point}</span>
                                </motion.li>
                             ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
