'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { beliefs } from '@/data/about-page';

export default function Beliefs() {
    return (
        <section className="py-24 bg-white text-black select-none border-b border-gray-200">
            <Container className="max-w-4xl mx-auto">
                <h2 className="text-xs font-bold mb-16 text-center text-red-600 uppercase tracking-widest font-mono">[ 03 / CORE_BELIEFS ]</h2>

                <div className="space-y-12">
                    {beliefs.map((belief, idx) => (
                        <motion.div
                            key={belief.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-2xl md:text-4xl leading-tight hover:text-red-500 transition-colors cursor-default font-light tracking-tight text-red-600/60 mb-3">
                                {belief.title}
                            </div>
                            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                                {belief.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
