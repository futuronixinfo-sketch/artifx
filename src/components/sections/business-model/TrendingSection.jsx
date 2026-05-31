'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { trending2026 } from '@/data/business-models';

export default function TrendingSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-200 select-none">
      <Container className="max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono text-red-600 uppercase tracking-widest mb-4 block font-bold">
          [ Trending 2026 ]
        </span>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight mb-8">
          Most Trending <span className="text-red-600">2026</span> Models
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {trending2026.map((item) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 border border-gray-200 bg-white text-xs font-semibold text-gray-700 hover:border-red-500 hover:text-red-600 transition-all"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
