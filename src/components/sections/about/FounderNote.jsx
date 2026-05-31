'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { founderNote } from '@/data/about-page';
import { Quote } from 'lucide-react';

export default function FounderNote() {
    return (
        <section className="py-32 bg-white border-t border-gray-200 relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-50/10 rounded-full blur-[100px] pointer-events-none" />

            <Container className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Quote and Signoff */}
                    <div className="space-y-8 text-left">
                        <div>
                            <Quote className="w-8 h-8 text-red-500 mb-6" />
                            <motion.blockquote
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-xl md:text-2xl font-light text-red-600/60 leading-relaxed font-sans"
                            >
                                &ldquo;{founderNote.content}&rdquo;
                            </motion.blockquote>
                        </div>

                        <div className="flex">
                            <span className="text-xs font-bold uppercase tracking-widest text-red-600 border-b border-red-200 pb-1 font-mono">
                                {founderNote.signoff}
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Premium Visual Workspace */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative border border-gray-200 p-2 bg-gray-50 rounded-2xl"
                    >
                        <div className="relative aspect-[4/3] group overflow-hidden rounded-xl">
                            <img 
                                src="https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Artifx design systems thinking workspace" 
                                className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-75 transition-transform duration-700 filter grayscale"
                            />
                            <div className="absolute inset-0 bg-white rounded-xl" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
