'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles, Cpu } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { projectsData } from '@/data/home';

export default function ProjectsShowcase() {
  return (
    <section className="relative py-32 bg-white select-none border-b border-gray-100 overflow-hidden">
      {/* Decorative top grid guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />

      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-mono text-red-600 uppercase tracking-widest block font-bold"
          >
            [ ENGINEERING TRACKS ]
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase"
          >
            {projectsData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-500 max-w-md mx-auto leading-relaxed font-light"
          >
            Real custom systems deployed in live environments. Every case study outlines concrete business bottlenecks solved and operational efficiency generated.
          </motion.p>
        </div>

        {/* BREATHTAKING CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.projects.slice(0, 3).map((project, idx) => {
            // Helper to generate the exact slug mapping to the dynamic Case Study pages
            const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/5 hover:border-black transition-all duration-500 flex flex-col relative"
              >
                {/* Visual Header Image Cover */}
                <div className="relative h-56 w-full overflow-hidden bg-gray-900 border-b border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-1000 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Left: Category Badge Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[9px] font-mono text-white font-bold uppercase tracking-wider rounded-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Right: Metric Impact Telemetry pill */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-red-600 border border-red-500 text-[9px] font-mono text-white font-bold uppercase tracking-wider rounded-md shadow-lg shadow-red-600/20 animate-pulse">
                      {project.impact}
                    </span>
                  </div>

                  {/* Visual overlay title inside image */}
                  <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                    <span className="text-[9px] font-mono text-red-500 font-bold uppercase tracking-widest block mb-0.5">
                      {"//"} CASE STUDY 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content description box */}
                <div className="p-6 flex flex-col justify-between flex-grow space-y-6 bg-white relative z-10">
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Tags & Action Row */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-[9px] text-gray-400 font-mono uppercase tracking-wider rounded-md group-hover:text-black group-hover:bg-gray-100 group-hover:border-gray-300 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom CTA to the exact resolved dynamic Case Study slug */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                        METRICS LOGS
                      </span>
                      <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300">
                        READ BLUEPRINT &rarr;
                      </span>
                    </div>
                  </div>
                </div>

                {/* Main Overlay Link pointing to the exact dynamic Case Study slug */}
                <Link
                  href={`/projects/${slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Inspect ${project.title} system architecture case study`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic CTA Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-600 hover:text-black transition-colors group"
          >
            Inspect All Case Studies &rarr;
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
