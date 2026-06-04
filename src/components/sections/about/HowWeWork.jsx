'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { howWeWork } from '@/data/about-page';

export default function HowWeWork() {
    return (
        <section className="py-24 bg-[#FAFAF8] text-black select-none border-t-2 border-black">
            <Container className="max-w-xl mx-auto">
                <div className="flex justify-center mb-16">
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] px-4 py-2">
                        [ 05 / PROCESS_FLOW ]
                    </span>
                </div>

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
                            <div className="text-sm uppercase tracking-wider font-black px-8 py-4 border-2 border-black bg-white shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 w-full md:w-auto">
                                <span className="text-[#DC2626] mr-2">{item.step}</span>
                                {item.title}
                            </div>
                            <p className="text-xs text-gray-600 mt-2">{item.description}</p>

                            {idx !== howWeWork.length - 1 && (
                                <div className="h-12 w-0.5 bg-gray-200 mb-4 relative overflow-hidden">
                                    <motion.div
                                        initial={{ y: -50 }}
                                        whileInView={{ y: 50 }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute top-0 w-full h-full bg-[#DC2626]"
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
