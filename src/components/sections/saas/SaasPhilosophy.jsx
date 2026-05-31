'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasPhilosophy } from '@/data/saas-page';
import { Check } from 'lucide-react';

export default function SaasPhilosophy() {
    return (
        <section className="py-24 bg-black border-b border-neutral-900 select-none text-left">
            <Container className="max-w-3xl mx-auto">
                <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-12">[ 03 / CORE_PHILOSOPHY ]</span>

                <div className="space-y-8">
                    {saasPhilosophy.map((point, idx) => (
                        <motion.div
                            key={point}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed border-l-2 border-[#f95738] pl-6"
                        >
                            {point}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
