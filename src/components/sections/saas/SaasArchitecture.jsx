'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasArchitecture } from '@/data/saas-page';
import { ArrowDown } from 'lucide-react';

export default function SaasArchitecture() {
    return (
        <section className="py-24 bg-gray-50 text-left border-b border-gray-200 select-none">
            <Container className="max-w-4xl">
                <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-12">
                    [ 06 / ARCHITECTURE_STACK ]
                </span>

                <div className="flex flex-col items-center gap-4 relative">
                    <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-100 -z-10" />

                    {saasArchitecture.map((layer, idx) => (
                        <motion.div
                            key={layer.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.15 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm"
                        >
                            <div className="bg-white border border-gray-200 py-4 px-8 text-black font-mono text-xs uppercase tracking-wider text-center relative z-10 hover:border-red-500 hover:text-red-600 transition-colors cursor-default" style={{ borderRadius: 0 }}>
                                {layer.name}
                            </div>
                            {idx !== saasArchitecture.length - 1 && (
                                <ArrowDown className="w-3 h-3 text-gray-500 mx-auto my-2" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-xs text-gray-400 max-w-md mx-auto text-center leading-relaxed font-light">
                    Our software assets share a unified core architecture. This enables deterministic orchestration and rapid feature rollouts with zero systemic lag.
                </p>
            </Container>
        </section>
    );
}
