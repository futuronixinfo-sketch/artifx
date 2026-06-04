'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { trending2026 } from '@/data/business-models';

export default function TrendingSection() {
  return (
    <section className="py-16 bg-[#FAFAF8] border-t-2 border-black select-none">
      <Container className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-[10px] font-mono text-[#FFE500] font-black uppercase tracking-widest mb-6 px-3.5 py-1.5 bg-black border-2 border-black shadow-[3px_3px_0_#DC2626]">
          [ Trending 2026 ]
        </span>
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black uppercase leading-tight mb-8">
          Most Trending{' '}
          <span className="text-red-600 underline decoration-4 underline-offset-4">2026</span>{' '}
          Models
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {trending2026.map((item) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="px-4 py-2 border-2 border-black bg-white text-xs font-black text-black uppercase tracking-wide shadow-[3px_3px_0_#0A0A0A] hover:bg-[#FFE500] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 cursor-default"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </Container>
    </section>
  );
}
