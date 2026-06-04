'use client';
import { motion } from 'framer-motion';
import { commonPhilosophy } from '@/data/projects-page';
import Container from '@/components/ui/Container';
import { Check } from 'lucide-react';

export default function CommonPhilosophy() {
    return (
        <section className="py-16 bg-[#FAFAF8] border-b-2 border-black select-none">
            <Container className="max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-center gap-3">
                    {commonPhilosophy.map((point, idx) => (
                        <motion.div
                            key={point}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100"
                        >
                            <Check className="w-3.5 h-3.5 text-red-600" />
                            <span className="text-xs font-mono font-bold text-gray-800 uppercase tracking-wide">{point}</span>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
