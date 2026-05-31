'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasArchitecture } from '@/data/saas-page';
import { ArrowDown } from 'lucide-react';

export default function SaasArchitecture() {
    return (
        <section className="py-24 bg-neutral-950/40 text-left border-b border-neutral-900 select-none">
            <Container className="max-w-4xl">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-12">
                    [ 06 / ARCHITECTURE_STACK ]
                </span>

                <div className="flex flex-col items-center gap-4 relative">
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-neutral-900 -z-10" />

                    {saasArchitecture.map((layer, idx) => (
                        <motion.div
                            key={layer}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-neutral-950 border border-neutral-900 py-4 px-8 text-white font-mono text-xs uppercase tracking-wider text-center relative z-10 hover:border-[#f95738]/40 hover:text-[#f95738] transition-colors cursor-default" style={{ borderRadius: 0 }}>
                                {layer}
                            </div>
                            {idx !== saasArchitecture.length - 1 && (
                                <ArrowDown className="w-3 h-3 text-neutral-700 mx-auto my-2" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-xs text-neutral-500 max-w-md mx-auto text-center leading-relaxed font-light">
                    Our software assets share a unified core architecture. This enables deterministic orchestration and rapid feature rollouts with zero systemic lag.
                </p>
            </Container>
        </section>
    );
}
