'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { founderNote } from '@/data/about-page';
import { Quote } from 'lucide-react';

export default function FounderNote() {
    return (
        <section className="py-32 bg-[#FAFAF8] border-t-2 border-black relative overflow-hidden select-none">
            <Container className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Quote and Signoff */}
                    <div className="space-y-8 text-left">
                        <div>
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A] mb-6">
                                <Quote className="w-5 h-5 text-black" />
                            </div>
                            <motion.blockquote
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed font-sans"
                            >
                                &ldquo;{founderNote.content}&rdquo;
                            </motion.blockquote>
                        </div>

                        <div className="flex">
                            <span className="text-[10px] font-mono font-black uppercase tracking-widest bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] px-4 py-2">
                                {founderNote.signoff}
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Visual Workspace */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative border-2 border-black p-2 bg-white shadow-[4px_4px_0_#0A0A0A]"
                    >
                        <div className="relative aspect-4/3 group overflow-hidden">
                            <img
                                src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=800"
                                alt="Artifx design systems thinking workspace"
                                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-75 transition-transform duration-700 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-white" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
