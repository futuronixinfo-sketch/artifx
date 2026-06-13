'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { socialProof } from '@/data/home';

export default function StatsBar() {
  return (
    <section className="relative bg-black border-t-2 border-black overflow-hidden select-none">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#FFE500_1px,transparent_1px)] [background-size:18px_18px] pointer-events-none" />

      <Container className="relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] text-black border-2 border-[#FFE500] shadow-[3px_3px_0_#DC2626] text-[10px] font-mono font-black uppercase tracking-widest">
            <span className="w-2 h-2 bg-black animate-pulse" />
            {socialProof.label}
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 border-2 border-neutral-800 divide-x-2 divide-y-2 md:divide-y-0 divide-neutral-800">
          {socialProof.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="text-center px-4 py-7 group hover:bg-neutral-900 transition-colors duration-150"
            >
              <div className="text-3xl md:text-4xl font-black text-[#FFE500] leading-none group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="mt-2 text-[9px] md:text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
