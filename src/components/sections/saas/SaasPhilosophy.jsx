'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { saasPhilosophy } from '@/data/saas-page';

export default function SaasPhilosophy() {
    return (
        <section className="py-24 bg-white border-b-2 border-black select-none text-left">
            <Container className="max-w-3xl mx-auto">
                <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-12">[ 03 / CORE_PHILOSOPHY ]</span>


                <div className="space-y-8">
                    {saasPhilosophy.map((point, idx) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-6"
                        >
                            <h3 className="text-lg md:text-xl text-black font-bold leading-relaxed">{point.title}</h3>
                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
