'use client';
import { motion } from 'framer-motion';
import { features } from '@/data/features';
import Container from '@/components/ui/Container';
import SpotlightCard from '@/components/ui/SpotlightCard';

const gradientMap = {
  indigo: 'bg-red-700',
  emerald: 'bg-red-600',
  blue: 'bg-red-700',
  orange: 'bg-red-600',
};

export default function WhatWeBuild() {
  return (
    <section className="py-28 bg-white border-t border-gray-200">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-[0.2em] mb-4 block">[ 05 / DIGITAL_ECOSYSTEMS ]</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
            We build intelligent <span className="gradient-text">ecosystems</span>
          </h2>
          <p className="text-base text-red-600/50">
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
                className="p-6 border-gray-200 bg-gray-50 hover:bg-red-50 transition-colors group h-full rounded-2xl"
              >
                <div className={`w-12 h-12 rounded-xl ${gradientMap[feature.color] || 'bg-red-700'} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-black mb-2">{feature.title}</h3>
                <p className="text-sm text-red-600/50 leading-relaxed">
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
