'use client';
import { motion } from 'framer-motion';
import { features } from '@/data/features';
import Container from '@/components/ui/Container';
import SpotlightCard from '@/components/ui/SpotlightCard';

const colorMap = {
    indigo: 'text-[#f95738]',
    emerald: 'text-emerald-400',
    blue: 'text-[#f95738]',
    orange: 'text-[#f95738]',
};

export default function WhatWeBuild() {
    return (
        <section className="py-28 bg-black relative select-none border-t border-neutral-900">
            <Container>
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-xs font-mono text-[#f95738] uppercase tracking-widest mb-2 block font-bold">[ 05 / DIGITAL_ECOSYSTEMS ]</span>
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white leading-tight mb-4">
                        We build intelligent <span className="italic text-[#f95738]" style={{ fontFamily: 'Georgia, serif' }}>ecosystems</span>
                    </h2>
                    <p className="text-neutral-400 text-sm font-light">
                        Beyond simple landing pages. We engineer complete operational ecosystems that drive scale and efficiency.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <SpotlightCard
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="p-6 border-neutral-900 bg-neutral-950/40 hover:bg-neutral-900/10 transition-colors group h-full"
                            >
                                <div className={`w-12 h-12 border border-neutral-800 bg-neutral-900 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-[#f95738]/50 transition-all duration-300 relative z-10`}>
                                    <Icon className={`w-5 h-5 ${colorMap[feature.color] || 'text-white'}`} />
                                </div>
                                <h3 className="text-base font-bold uppercase tracking-tight text-white mb-2 relative z-10">{feature.title}</h3>
                                <p className="text-xs text-neutral-400 leading-relaxed font-light relative z-10">
                                    {feature.description}
                                </p>
                            </SpotlightCard>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
