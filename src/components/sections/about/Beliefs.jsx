'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { beliefs } from '@/data/about-page';

export default function Beliefs() {
    return (
        <section className="py-24 bg-[#FAFAF8] text-black select-none border-t-2 border-black">
            <Container className="max-w-4xl mx-auto">
                <div className="flex justify-center mb-16">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-4 py-2">
                        [ 03 / CORE_BELIEFS ]
                    </span>
                </div>

                <div className="space-y-6">
                    {beliefs.map((belief, idx) => (
                        <motion.div
                            key={belief.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-8 text-center cursor-default"
                        >
                            <div className="text-2xl md:text-4xl leading-tight font-light tracking-tight text-black mb-3">
                                {belief.title}
                            </div>
                            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                                {belief.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
