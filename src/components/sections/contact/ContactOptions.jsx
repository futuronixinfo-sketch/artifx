'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { contactOptions } from '@/data/contact-page';
import { ArrowRight } from 'lucide-react';

export default function ContactOptions() {
    const scrollToForm = () => {
        const element = document.getElementById('contact-form');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 bg-black text-white border-b border-neutral-900">
            <Container className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactOptions.map((option, idx) => (
                        <motion.div
                            key={option.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            onClick={scrollToForm}
                            className="group p-8 bg-neutral-950/40 border border-neutral-900 hover:border-[#f95738]/40 hover:bg-neutral-900/40 transition-all cursor-pointer flex flex-col justify-between min-h-[300px]"
                            style={{ borderRadius: 0 }}
                        >
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white group-hover:text-[#f95738] transition-colors">{option.title}</h3>
                                <p className="text-neutral-400 text-xs font-light leading-relaxed mb-8">
                                    {option.description}
                                </p>
                            </div>

                            <div>
                                <div className="flex items-center gap-2 text-white text-xs font-mono uppercase tracking-wider mb-2 group-hover:translate-x-1 transition-transform">
                                    {option.cta} <ArrowRight className="w-3 h-3 text-[#f95738]" />
                                </div>
                                <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">
                                    {option.micro}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
