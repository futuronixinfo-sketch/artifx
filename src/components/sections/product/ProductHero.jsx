'use client';
import { motion } from 'framer-motion';
import { Package } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function ProductHero() {
  return (
    <section className="relative pt-36 pb-20 border-b border-gray-200 min-h-[50vh] flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-start justify-center pt-16 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-red-50 blur-[120px] rounded-full pointer-events-none" />
        <div
          className="w-full text-center text-[18vw] font-black tracking-tighter leading-none select-none opacity-[0.04]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          PRODUCTS
        </div>
      </div>

      <Container className="relative z-10 max-w-4xl text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200"
        >
          <Package className="w-3.5 h-3.5 text-red-600" />
          <span className="text-xs font-medium text-red-600">Our Products</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-black leading-tight"
        >
          Built from real <span className="gradient-text">problems</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          SaaS products and internal tools born from real business challenges we&apos;ve solved — not ideas imagined in isolation.
        </motion.p>
      </Container>
    </section>
  );
}
