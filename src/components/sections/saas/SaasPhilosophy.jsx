'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasPhilosophy } from '@/data/saas-page';
import { Check } from 'lucide-react';

export default function SaasPhilosophy() {
    return (
        <section className="py-24 bg-white border-b border-gray-200 select-none text-left">
            <Container className="max-w-3xl mx-auto">
                <span className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold mb-12">[ 03 / CORE_PHILOSOPHY ]</span>

                <div className="space-y-8">
                    {saasPhilosophy.map((point, idx) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-gray-200 pl-6"
                        >
                            <h3 className="text-lg md:text-xl text-black font-bold leading-relaxed">{point.title}</h3>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
