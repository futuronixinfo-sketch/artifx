'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { projects } from '@/data/projects-page';
import { Lightbulb, Wrench, Layers, TrendingUp, Quote, ArrowUpRight } from 'lucide-react';

export default function ProjectStory() {
    return (
        <section className="bg-black text-white pb-32 select-none border-b border-neutral-900">
            <Container className="max-w-4xl mx-auto space-y-32">
                {projects.map((project, idx) => (
                    <ProjectBlock key={idx} project={project} index={idx} />
                ))}
            </Container>
        </section>
    );
}

function ProjectBlock({ project, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, y }}
            className="relative border-l border-neutral-900 pl-8 md:pl-16 py-12"
        >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-12 w-2 h-2 bg-neutral-900 border border-neutral-800" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Details Column */}
                <div className={`space-y-8 lg:col-span-7 ${!isEven ? 'lg:order-2' : ''}`}>
                    {/* Header */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 border border-neutral-900 bg-neutral-950/40 text-[9px] font-mono font-bold uppercase tracking-wider text-[#f95738]">
                                {project.type}
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">{project.client}</h2>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-xl">
                            {project.context}
                        </p>
                    </div>

                    {/* Stories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* The Problem */}
                        <div className="space-y-4">
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest">
                                <Lightbulb className="w-3.5 h-3.5" /> [ ! ] The Friction
                            </span>
                            <ul className="space-y-3">
                                {project.problem.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-400 text-xs font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-red-500/30 border border-red-500 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* The Solution */}
                        <div className="space-y-4">
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
                                <Wrench className="w-3.5 h-3.5" /> [ ✓ ] The Resolution
                            </span>
                            <ul className="space-y-3">
                                {project.solution.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-xs font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-emerald-400/30 border border-emerald-400 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Architecture & Impact */}
                    <div className="bg-neutral-950/40 border border-neutral-900 p-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden">
                        {/* Tech Stack */}
                        <div>
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-4">
                                <Layers className="w-3.5 h-3.5" /> [ Architecture ]
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.architecture.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-black border border-neutral-800 text-[10px] text-neutral-400 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Outcome */}
                        <div>
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4">
                                <TrendingUp className="w-3.5 h-3.5 animate-pulse" /> [ Impact ]
                            </span>
                            <ul className="space-y-2">
                                {project.impact.map((stat, i) => (
                                    <li key={i} className="text-white font-mono text-xs uppercase tracking-wide flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
                                        {stat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Quote + Visit Link */}
                    <div className="flex items-start gap-4 opacity-80 pt-2">
                        <Quote className="w-5 h-5 text-neutral-700 flex-shrink-0" />
                        <p className="text-neutral-500 italic text-xs leading-relaxed flex-1">
                            "{project.quote}"
                        </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3">
                        {project.slug && (
                            <Link
                                href={`/projects/${project.slug}`}
                                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#f95738] border border-[#f95738]/30 px-4 py-2 hover:bg-[#f95738]/10 transition-all duration-300 group"
                            >
                                <span>View Case Study</span>
                                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        )}
                        {project.url && (
                            <a 
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white border border-neutral-900 px-4 py-2 hover:bg-neutral-900/50 transition-all duration-300 group"
                            >
                                <span>Visit Site</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Column */}
                <div className={`lg:col-span-5 ${!isEven ? 'lg:order-1' : ''}`}>
                    <Link href={`/projects/${project.slug}`}>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="relative border border-neutral-900 p-2 bg-neutral-950/40 group shadow-2xl cursor-pointer"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.client} 
                                    className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-all duration-700 filter grayscale"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-neutral-500 uppercase tracking-widest bg-black/80 px-4 py-2 border border-neutral-900">
                                    [ case_study_active ]
                                </div>
                            </div>
                        </motion.div>
                    </Link>
                </div>

            </div>
        </motion.div>
    );
}
