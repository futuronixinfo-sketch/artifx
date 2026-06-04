'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { finalCTA } from '@/data/home';

export default function FinalCTA() {
  return (
    <section className="relative py-24 bg-black border-t-2 border-black overflow-hidden">

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#FFE500_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      {/* Decorative corner stamps */}
      <div className="absolute top-8 left-8 w-16 h-16 border-2 border-neutral-700 flex items-center justify-center opacity-30">
        <span className="text-[8px] font-mono text-neutral-500 font-black uppercase">EST.</span>
      </div>
      <div className="absolute top-8 right-8 w-16 h-16 border-2 border-neutral-700 flex items-center justify-center opacity-30">
        <span className="text-[8px] font-mono text-neutral-500 font-black">2024</span>
      </div>
      <div className="absolute bottom-8 left-8 text-[9px] font-mono text-neutral-700 font-black uppercase tracking-widest opacity-50">ARTIFX.IO</div>
      <div className="absolute bottom-8 right-8 text-[9px] font-mono text-neutral-700 font-black uppercase tracking-widest opacity-50">BUILD_READY</div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] text-black border-2 border-[#FFE500] shadow-[3px_3px_0_#DC2626] mb-10"
          >
            <span className="w-2 h-2 bg-black animate-pulse"></span>
            <span className="text-xs font-mono font-black uppercase tracking-widest">Let&apos;s Build Something Great</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[0.95] mb-8 uppercase"
          >
            {finalCTA.title}{' '}
            <span className="text-[#FFE500]">{finalCTA.titleHighlight}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-neutral-400 max-w-2xl mx-auto leading-relaxed mb-12 font-mono"
          >
            {finalCTA.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#FFE500] text-black border-2 border-[#FFE500] shadow-[5px_5px_0_#DC2626] hover:shadow-[2px_2px_0_#DC2626] hover:translate-x-[3px] hover:translate-y-[3px] font-mono font-black uppercase tracking-widest text-sm transition-all duration-100"
            >
              {finalCTA.primaryCTA}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-white border-2 border-white shadow-[5px_5px_0_#555] hover:shadow-[2px_2px_0_#555] hover:translate-x-[3px] hover:translate-y-[3px] font-mono font-black uppercase tracking-widest text-sm transition-all duration-100 hover:bg-white hover:text-black"
            >
              {finalCTA.secondaryCTA}
            </Link>
          </motion.div>

          {/* Bottom stat strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-8 border-t-2 border-neutral-800 flex flex-wrap justify-center gap-0"
          >
            {[
              { val: '50+', label: 'Systems Built' },
              { val: '96%', label: 'Retention Rate' },
              { val: '< 8wks', label: 'Avg. Delivery' },
              { val: '24/7', label: 'Support SLA' },
            ].map((s, i) => (
              <div key={s.label} className={`text-center px-10 py-4 ${i < 3 ? 'border-r-2 border-neutral-800' : ''}`}>
                <div className="text-2xl font-black text-[#FFE500]">{s.val}</div>
                <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
