'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { techStack } from '@/data/home';

export default function TechStack() {
  return (
    <section className="relative py-24 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">
      <Container>
        <div className="max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626]"
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ TECHNOLOGY STACK ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase"
          >
            {techStack.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-600 max-w-lg leading-relaxed font-mono"
          >
            {techStack.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
          {techStack.technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-white border-black [&:not(:nth-child(2n))]:border-r-2 md:[&:not(:nth-child(4n))]:border-r-2 border-b-2 p-6 md:p-7 hover:bg-[#FFE500] transition-colors duration-150"
            >
              <div className="text-[8px] font-mono text-gray-400 uppercase tracking-widest mb-2 group-hover:text-black transition-colors">
                {tech.category}
              </div>
              <div className="text-base md:text-lg font-black text-black uppercase tracking-tight leading-tight">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
