'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whySaas } from '@/data/saas-page';

export default function WhySaas() {
    return (
        <section className="py-32 bg-neutral-950/40 border-b border-neutral-900 select-none">
            <Container className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start text-left">
                    <div>
                        <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest block font-bold mb-4">[ 02 / WHY_SAAS ]</span>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white leading-tight sticky top-32"
                        >
                            Why we build <span className="italic text-[#f95738]" style={{ fontFamily: "Georgia, serif" }}>SaaS</span>.
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-xs font-light text-neutral-400 leading-relaxed">
                            {whySaas.story}
                        </p>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
