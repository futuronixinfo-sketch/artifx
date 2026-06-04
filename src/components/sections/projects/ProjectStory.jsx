'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { projects } from '@/data/projects-page';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectStory() {
  return (
    <section className="py-24 bg-[#FAFAF8] border-b-2 border-black select-none overflow-hidden">
      <Container className="max-w-5xl mx-auto">

        {/* PIPELINE SYSTEMS LEDGER - Alternate Full Width Stacks */}
        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-12 border-b-2 border-black last:border-b-0 relative`}
              >

                {/* Visual Image Console (Col 6) - Alternates left/right on desktop */}
                <div className={`col-span-1 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 relative overflow-hidden group select-none"
                  >
                    <div className="overflow-hidden aspect-[16/10] bg-white relative">
                      <img
                        src={project.image || "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"}
                        alt={project.client}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700"
                      />

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="px-4 py-2 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 font-mono text-[9px] font-black uppercase tracking-widest transition-all duration-100 flex items-center gap-1.5"
                        >
                          READ CASE STUDY &rarr;
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* System Details & Operational Impact Telemetry (Col 6) */}
                <div className={`col-span-1 lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-4"
                  >

                    {/* Header release tags */}
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] font-mono text-[8px] font-bold uppercase tracking-widest">
                        [ CASE STUDY 0{idx + 1} // {project.type.toUpperCase()} ]
                      </span>
                    </div>

                    {/* Client Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                      {project.client}
                    </h3>

                    {/* Context description */}
                    <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                      {project.context}
                    </p>

                    {/* Dynamic Impact checklist telemetry */}
                    <div className="space-y-2 border-t-2 border-black pt-4">
                      <span className="text-[7.5px] font-mono text-gray-400 uppercase tracking-widest block mb-2">System Impact Metrics</span>
                      <div className="space-y-2">
                        {project.impact.map((imp, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-gray-600 font-sans font-light">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0 mt-0.5" />
                            <span>{imp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metrics and Specifications matrix strip */}
                    <div className="grid grid-cols-3 gap-2 border-t-2 border-b-2 border-black py-3 my-4 font-mono">
                      <div className="space-y-0.5">
                        <div className="text-[7px] text-gray-400 uppercase tracking-widest">Core Engine</div>
                        <div className="text-[10px] font-bold text-zinc-800 truncate">{project.architecture[0] || 'Next.js'}</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[7px] text-gray-400 uppercase tracking-widest">Deployment</div>
                        <div className="text-[10px] font-bold text-zinc-800 truncate">{project.architecture[1] || 'Vercel'}</div>
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-[7px] text-gray-400 uppercase tracking-widest">Live SLA</div>
                        <div className="text-[10px] font-bold text-green-600">99.99%</div>
                      </div>
                    </div>

                    {/* Technology tags row */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.architecture.slice(0, 4).map((tech) => (
                        <span key={tech} className="border-2 border-black bg-[#FAFAF8] text-black font-mono font-bold uppercase text-[9px] px-2.5 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Call to action dynamic link */}
                    <div className="pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white border-2 border-black shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 font-mono text-[9px] font-bold uppercase tracking-widest transition-all duration-100"
                      >
                        EXPLORE CORE INTEGRATION &rarr;
                      </Link>
                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}
