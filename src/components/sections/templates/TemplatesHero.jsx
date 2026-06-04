'use client';
import { motion } from 'framer-motion';
import { Layout } from 'lucide-react';
import Container from '@/components/ui/Container';

export default function TemplatesHero() {
  return (
    <section className="relative pt-40 pb-20 border-t-2 border-b-2 border-black min-h-[45vh] flex items-center bg-[#FAFAF8] overflow-hidden select-none">

      {/* Huge Watermarked Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 z-0 pointer-events-none select-none">
        <div
          className="w-full text-center text-[18vw] font-black tracking-tighter leading-none opacity-[0.04]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          TEMPLATES
        </div>
      </div>

      {/* Abstract blueprint wireframe SVGs */}
      <svg className="absolute right-[5%] top-20 w-72 h-44 opacity-[0.04] pointer-events-none hidden lg:block" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" fill="none" stroke="#000" strokeWidth="2" />
        <line x1="0" y1="24" x2="320" y2="24" stroke="#000" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" fill="#ef4444" />
        <circle cx="22" cy="12" r="3" fill="#f59e0b" />
        <circle cx="32" cy="12" r="3" fill="#10b981" />
        <rect x="20" y="44" width="80" height="12" fill="none" stroke="#000" strokeWidth="1" />
        <rect x="20" y="68" width="120" height="40" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="3 3" />
        <rect x="160" y="68" width="140" height="110" fill="none" stroke="#000" strokeWidth="1" />
      </svg>

      <svg className="absolute left-[5%] bottom-10 w-72 h-44 opacity-[0.03] pointer-events-none hidden lg:block" viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="320" height="200" fill="none" stroke="#000" strokeWidth="1.5" />
        <line x1="0" y1="24" x2="320" y2="24" stroke="#000" strokeWidth="1" />
        <rect x="20" y="44" width="280" height="40" fill="none" stroke="#000" strokeWidth="1" />
        <circle cx="50" cy="120" r="16" fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
        <rect x="86" y="108" width="200" height="8" fill="none" stroke="#000" strokeWidth="1" />
        <rect x="86" y="124" width="140" height="8" fill="none" stroke="#000" strokeWidth="1" />
      </svg>

      <Container className="relative z-10 max-w-4xl text-center space-y-6">

        {/* Release badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
        >
          <Layout className="w-3.5 h-3.5 text-black animate-pulse" />
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
            [ READY-TO-DEPLOY CORES // V1.0 ]
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-black uppercase leading-[0.95]"
          >
            Ready-made Systems, <br />
            <span className="text-red-600 underline decoration-4 underline-offset-4">
              Instantly.
            </span>
          </motion.h1>
        </div>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed font-mono"
        >
          /* Buy, customize, and deploy our pre-engineered Next.js website templates. Built with edge analytics, high performance benchmarks, and pristine layouts. Launch in days, not months. */
        </motion.p>

      </Container>
    </section>
  );
}
