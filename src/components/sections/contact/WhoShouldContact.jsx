'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whoShouldContact } from '@/data/contact-page';
import { Check, X } from 'lucide-react';

export default function WhoShouldContact() {
    return (
        <section className="py-24 bg-neutral-950 text-white border-b border-neutral-900">
            <Container className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Good Fit */}
                    <div>
                        <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-widest mb-8">This is a fit if you</h3>
                        <ul className="space-y-6">
                            {whoShouldContact.goodFit.map((item, idx) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <Check className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                                    <span className="text-lg text-neutral-300">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Not a Fit */}
                    <div className="md:opacity-60 hover:opacity-100 transition-opacity">
                        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">This may not be a fit if you</h3>
                        <ul className="space-y-6">
                            {whoShouldContact.notFit.map((item, idx) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <X className="w-5 h-5 text-neutral-600 mt-1 flex-shrink-0" />
                                    <span className="text-lg text-neutral-400">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
