'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { projectsData } from '@/data/home';

export default function ProjectsShowcase() {
  return (
    <section className="relative py-24 bg-[#FAFAF8] select-none border-t-2 border-black overflow-hidden">

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626]"
          >
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">[ ENGINEERING TRACKS ]</span>
          </motion.div>
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
            className="text-xs text-gray-600 max-w-md leading-relaxed font-mono"
          >
            Real custom systems deployed in live environments. Every case study outlines concrete business bottlenecks solved and operational efficiency generated.
          </motion.p>
        </div>

        {/* CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
          {projectsData.projects.slice(0, 3).map((project, idx) => {
            const slug = project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group bg-white overflow-hidden flex flex-col relative hover:bg-[#FAFAF8] transition-colors duration-100 ${idx < 2 ? 'border-r-2 border-black' : ''}`}
              >
                {/* Image */}
                <div className="relative h-52 w-full overflow-hidden bg-gray-900 border-b-2 border-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Category badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-[#FFE500] text-black border-2 border-black text-[9px] font-mono font-black uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Impact badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-3 py-1 bg-red-600 text-white border-2 border-black text-[9px] font-mono font-black uppercase tracking-wider">
                      {project.impact}
                    </span>
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-[9px] font-mono text-red-400 font-black uppercase tracking-widest block mb-0.5">
                      // CASE STUDY 0{idx + 1}
                    </span>
                    <h3 className="text-sm font-black text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between grow space-y-4">
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    {project.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t-2 border-black">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-[9px] text-black font-mono font-bold uppercase tracking-wider group-hover:bg-black group-hover:text-[#FFE500] transition-colors duration-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-bold">
                        METRICS LOGS
                      </span>
                      <span className="text-[9px] font-mono text-red-600 font-black uppercase tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-150">
                        READ BLUEPRINT &rarr;
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/projects/${slug}`}
                  className="absolute inset-0 z-20"
                  aria-label={`Inspect ${project.title} system architecture case study`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white border-2 border-black shadow-[4px_4px_0_#DC2626] hover:shadow-[2px_2px_0_#DC2626] hover:translate-x-0.5 hover:translate-y-0.5 text-xs font-mono font-black uppercase tracking-widest transition-all duration-100"
          >
            Inspect All Case Studies &rarr;
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
