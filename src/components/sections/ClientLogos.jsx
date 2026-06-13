'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { clientLogos } from '@/data/home';

export default function ClientLogos() {
  return (
    <section className="relative py-20 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626]"
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ PARTNERS &amp; CLIENTS ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-black leading-[0.95] uppercase"
          >
            {clientLogos.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-600 font-mono leading-relaxed"
          >
            {clientLogos.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
          {clientLogos.logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex items-center justify-center min-h-[88px] px-4 py-6 bg-white border-black [&:not(:nth-child(2n))]:border-r-2 md:[&:not(:nth-child(3n))]:border-r-2 lg:[&:not(:nth-child(6n))]:border-r-2 border-b-2 hover:bg-[#FFE500] transition-colors duration-150"
            >
              <span className="text-center text-[11px] md:text-xs font-black uppercase tracking-tight text-gray-400 group-hover:text-black transition-colors duration-150 leading-tight">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-center text-[9px] font-mono text-gray-400 uppercase tracking-widest">
          // Logos shown as wordmarks — full brand assets on request
        </p>
      </Container>
    </section>
  );
}
