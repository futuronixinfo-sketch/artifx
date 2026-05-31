'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { howWeWork } from '@/data/about-page';

export default function HowWeWork() {
    return (
        <section className="py-24 bg-white text-black select-none border-b border-gray-200">
            <Container className="max-w-xl mx-auto">
                <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-16 block text-center font-bold">[ 05 / PROCESS_FLOW ]</span>

                <div className="flex flex-col items-center">
                    {howWeWork.map((item, idx) => (
                        <motion.div
                            key={item.step}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center w-full"
                        >
                            <div className="text-sm uppercase tracking-wider font-bold px-8 py-4 border border-gray-200 bg-gray-50 w-full md:w-auto hover:border-red-500 transition-all duration-300 rounded-xl">
                                <span className="text-red-500 mr-2">{item.step}</span>
                                {item.title}
                            </div>
                            <p className="text-xs text-gray-500 mt-2">{item.description}</p>

                            {idx !== howWeWork.length - 1 && (
                                <div className="h-12 w-px bg-red-50 mb-4 relative overflow-hidden">
                                    <motion.div
                                        initial={{ y: -50 }}
                                        whileInView={{ y: 50 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 w-full h-full bg-red-600"
                                    />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
