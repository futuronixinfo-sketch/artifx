'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function PageHeader({ title, description, badge }) {
  return (
    <section className="relative pt-32 pb-16 bg-[#FAFAF8] border-b-2 border-black overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Huge watermark */}
      <div className="absolute inset-x-0 top-[20%] flex justify-center z-0 pointer-events-none select-none">
        <div className="w-full text-center text-[20vw] font-black tracking-tighter leading-none opacity-[0.03]"
          style={{ fontFamily: "var(--font-heading)" }}>
          ARTIFX
        </div>
      </div>

      <Container className="relative z-10 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A] text-[10px] font-mono font-black uppercase tracking-widest mx-auto"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-black mb-6 uppercase leading-[0.95]"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed font-mono"
        >
          {description}
        </motion.p>
      </Container>
    </section>
  );
}
