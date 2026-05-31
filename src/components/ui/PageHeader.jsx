'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';

export default function PageHeader({ title, description, badge }) {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(220, 38, 38, 0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <Container className="relative z-10 text-center">
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-600 mx-auto"
          >
            {badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-black mb-6"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </Container>
    </section>
  );
}
