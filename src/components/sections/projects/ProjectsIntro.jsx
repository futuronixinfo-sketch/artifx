'use client';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Container from '@/components/ui/Container';
import { projectsIntro } from '@/data/projects-page';

export default function ProjectsIntro() {
  return (
    <section className="relative pt-40 pb-20 border-b-2 border-black min-h-[45vh] flex items-center bg-[#FAFAF8] overflow-hidden select-none">

      {/* Hard grid guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 pointer-events-none" />

      {/* Huge Watermarked Background Text */}
      <div className="absolute inset-0 flex items-start justify-center pt-24 z-0 pointer-events-none select-none">
        <div
          className="w-full text-center text-[18vw] font-black tracking-tighter leading-none opacity-[0.03]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          RESULTS
        </div>
      </div>

      <Container className="relative z-10 max-w-4xl text-center space-y-6">

        {/* Release badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#FFE500] text-black border-2 border-black shadow-[3px_3px_0_#0A0A0A]"
        >
          <Briefcase className="w-3.5 h-3.5 text-black" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-black">
            [ CASE STUDIES // TELEMETRY RESULTS ]
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
            Real Systems, <br />
            <span className="text-red-600 underline decoration-4 underline-offset-4">
              Real Results.
            </span>
          </motion.h1>
        </div>

        {/* Subtitle description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed font-mono"
        >
          /* {projectsIntro.subtitle} */
        </motion.p>

      </Container>
    </section>
  );
}
