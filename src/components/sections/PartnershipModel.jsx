'use client';
import { motion } from 'framer-motion';
import { partnershipModel } from '@/data/home';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Check } from 'lucide-react';

export default function PartnershipModel() {
    return (
        <section className="py-28 bg-black border-t border-neutral-900 select-none">
            <Container>
                <div className="bg-neutral-950/40 border border-neutral-900 p-8 md:p-16 relative overflow-hidden">
                    {/* Decor */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#f95738]/[0.02] rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 08 / ALIGNMENT ]</span>
                            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-6">
                                We don't work like <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>vendors</span>.
                            </h2>
                            <p className="text-sm text-neutral-400 mb-8 leading-relaxed font-light">
                                {partnershipModel.subtitle}
                            </p>
                            <Button variant="primary" size="md" href="/contact">
                                Start a Partnership
                            </Button>
                        </div>

                        <div className="space-y-3">
                            {partnershipModel.features.map((feature, idx) => (
                                <motion.div
                                    key={feature}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-4 bg-neutral-900/30 border border-neutral-900"
                                >
                                    <div className="w-8 h-8 border border-neutral-800 bg-neutral-900 flex items-center justify-center text-emerald-400">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-tight text-neutral-300">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
