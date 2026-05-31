'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { finalCTA } from '@/data/home';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-white border-t border-gray-200 overflow-hidden">
      {/* Gradient Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-700/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-50 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(167, 139, 250, 0.3) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-gray-200 mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span className="text-xs font-medium text-red-600">Let&apos;s Build Something Great</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black leading-[1.1] mb-8"
          >
            {finalCTA.title}{' '}
            <span className="gradient-text">{finalCTA.titleHighlight}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-red-600/50 max-w-2xl mx-auto leading-relaxed mb-12"
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
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-semibold text-base hover:bg-red-500 transition-all duration-300 shadow-xl shadow-red-500/20"
            >
              {finalCTA.primaryCTA}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-200 text-red-600 font-semibold text-base hover:bg-red-50 transition-all duration-300"
            >
              {finalCTA.secondaryCTA}
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
