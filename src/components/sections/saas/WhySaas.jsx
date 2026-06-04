'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whySaas } from '@/data/saas-page';

export default function WhySaas() {
    return (
        <section className="py-32 bg-[#FAFAF8] border-b-2 border-black select-none">
            <Container className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left">
                    <div>
                        <span className="inline-block text-xs font-mono bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-3 py-1 uppercase tracking-widest font-black mb-4">[ 02 / WHY_SAAS ]</span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black leading-tight sticky top-32"
                        >
                            Why we build <span className="italic text-red-600 underline decoration-4 underline-offset-4" style={{ fontFamily: "Georgia, serif" }}>SaaS</span>.
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-xs font-light text-gray-600 leading-relaxed">
                            {whySaas.story}
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
