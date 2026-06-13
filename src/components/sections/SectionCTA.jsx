'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';

/**
 * Compact mid-page conversion band.
 * Drop between major sections: <SectionCTA text="Need something similar?" />
 */
export default function SectionCTA({
  text = 'Need Something Similar?',
  cta = "Let's Build It",
  href = '/contact',
}) {
  return (
    <section className="bg-[#FAFAF8] border-t-2 border-black">
      <Container className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-black border-2 border-black shadow-[6px_6px_0_#DC2626] px-6 sm:px-8 py-6"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="hidden sm:inline-block w-2.5 h-2.5 bg-[#FFE500] border border-[#FFE500] animate-pulse" />
            <h3 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-white leading-tight">
              {text}
            </h3>
          </div>
          <Link
            href={href}
            className="group shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#FFE500] text-black border-2 border-[#FFE500] shadow-[4px_4px_0_#DC2626] hover:shadow-[2px_2px_0_#DC2626] hover:translate-x-0.5 hover:translate-y-0.5 font-mono font-black uppercase tracking-widest text-xs transition-all duration-100"
          >
            {cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
