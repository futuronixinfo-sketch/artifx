'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whyDifferent } from '@/data/saas-page';
import { Check } from 'lucide-react';

export default function WhyDifferent() {
    return (
        <section className="py-24 bg-white border-t-2 border-b-2 border-black select-none">
            <Container className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-left">
                    <div>
                        <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 05 / DIFFERENTIAL ]</span>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-6 leading-tight mt-4">
                            What makes us <span className="italic text-red-600 underline decoration-4 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>different</span>.
                        </h2>
                        <p className="text-xs font-light text-gray-600 max-w-md leading-relaxed">
                            {whyDifferent.subtitle}
                        </p>
                    </div>

                    <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-8">
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
                                    <div className="w-6 h-6 bg-[#FFE500] border-2 border-black shadow-[2px_2px_0_#0A0A0A] flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-black" />
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
