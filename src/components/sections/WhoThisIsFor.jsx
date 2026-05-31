'use client';
import { motion } from 'framer-motion';
import { whoThisIsFor } from '@/data/home';
import Container from '@/components/ui/Container';
import SpotlightCard from '@/components/ui/SpotlightCard';

const cardGradients = [
  'bg-red-700',
  'bg-red-600',
  'bg-red-700',
  'bg-red-600',
];

export default function WhoThisIsFor() {
  return (
    <section className="py-28 bg-white border-t border-gray-200 overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-50 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold text-red-600 uppercase tracking-[0.2em] mb-4 block">[ 04 / COMPATIBILITY ]</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-black leading-tight mb-4">
            Built for teams that want to <span className="gradient-text">scale</span>
          </h2>
          <p className="text-base text-red-600/50">
            We don&apos;t just write code. We design systems to solve core scalability bottlenecks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoThisIsFor.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 text-center group h-full rounded-2xl bg-gray-50 border-gray-200 hover:border-red-500 transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-xl ${cardGradients[idx]} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold tracking-tight text-black mb-2">{item.title}</h3>
                <p className="text-sm text-red-600/50 leading-relaxed">
                  {item.description}
                </p>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
