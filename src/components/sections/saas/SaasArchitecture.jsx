'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasArchitecture } from '@/data/saas-page';
import { ArrowDown } from 'lucide-react';

export default function SaasArchitecture() {
    return (
        <section className="py-24 bg-[#FAFAF8] text-left border-b-2 border-black select-none">
            <Container className="max-w-4xl">
                <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-12">
                    [ 06 / ARCHITECTURE_STACK ]
                </span>

                <div className="flex flex-col items-center gap-4 relative mt-4">
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/10 -z-10" />

                    {saasArchitecture.map((layer, idx) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 py-4 px-8 text-black font-mono text-xs uppercase tracking-wider text-center relative z-10 transition-all duration-100 cursor-default">
                                {layer.name}
                            </div>
                            {idx !== saasArchitecture.length - 1 && (
                                <ArrowDown className="w-3 h-3 text-black mx-auto my-2" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-xs text-gray-600 max-w-md mx-auto text-center leading-relaxed font-light">
                    Our software assets share a unified core architecture. This enables deterministic orchestration and rapid feature rollouts with zero systemic lag.
                </p>
            </Container>
        </section>
    );
}
