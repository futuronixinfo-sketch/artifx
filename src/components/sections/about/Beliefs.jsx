'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { beliefs } from '@/data/about-page';

export default function Beliefs() {
    return (
        <section className="py-24 bg-black text-white select-none border-b border-neutral-900">
            <Container className="max-w-4xl mx-auto">
                <h2 className="text-xs font-bold mb-16 text-center text-[#f95738] uppercase tracking-widest font-mono">[ 03 / CORE_BELIEFS ]</h2>

                <div className="space-y-12">
                    {beliefs.map((belief, idx) => (
                        <motion.div
                            key={belief}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl text-center leading-tight hover:text-[#f95738] transition-colors cursor-default font-light tracking-tight text-neutral-300"
                        >
                            {belief}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
