'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Quote, Lightbulb, Wrench, Layers, TrendingUp, MessageSquare, Image as ImageIcon } from 'lucide-react';
import Container from '@/components/ui/Container';
import { projects } from '@/data/projects-page';

export default function ProjectDetail({ project }) {
    const currentIdx = projects.findIndex(p => p.slug === project.slug);
    const prev = currentIdx > 0 ? projects[currentIdx - 1] : null;
    const next = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null;

    return (
        <main className="bg-black text-white select-none">
            {/* Back Navigation */}
            <div className="border-b border-neutral-900">
                <Container className="py-4">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-3 h-3" />
                        Back to Projects
                    </Link>
                </Container>
            </div>

            {/* Hero */}
            <section className="relative border-b border-neutral-900">
                <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.client}
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                </div>
                <Container className="absolute bottom-0 left-0 right-0 pb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <span className="px-3 py-1 border border-[#f95738] bg-[#f95738]/10 text-[9px] font-mono font-bold uppercase tracking-wider text-[#f95738]">
                            {project.type}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mt-4 mb-3">
                            {project.client}
                        </h1>
                        <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xl">
                            {project.context}
                        </p>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 text-[10px] font-mono uppercase tracking-widest text-white border border-neutral-700 px-5 py-3 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Visit Live Site
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </motion.div>
                </Container>
            </section>

            {/* Problem & Solution */}
            <section className="border-b border-neutral-900 py-24">
                <Container className="max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest mb-6">
                                <Lightbulb className="w-4 h-4" /> [ ! ] The Friction
                            </span>
                            <ul className="space-y-4">
                                {project.problem.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-red-500/30 border border-red-500 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-6">
                                <Wrench className="w-4 h-4" /> [ ✓ ] The Resolution
                            </span>
                            <ul className="space-y-4">
                                {project.solution.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm font-light leading-relaxed">
                                        <span className="w-1.5 h-1.5 bg-emerald-400/30 border border-emerald-400 mt-1.5 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Architecture & Impact */}
            <section className="border-b border-neutral-900 py-24">
                <Container className="max-w-4xl">
                    <div className="bg-neutral-950/40 border border-neutral-900 p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest mb-6">
                                <Layers className="w-4 h-4" /> [ Architecture ]
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {project.architecture.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 bg-black border border-neutral-800 text-[11px] text-neutral-400 font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest mb-6">
                                <TrendingUp className="w-4 h-4 animate-pulse" /> [ Impact ]
                            </span>
                            <ul className="space-y-3">
                                {project.impact.map((stat, i) => (
                                    <li key={i} className="text-white font-mono text-sm uppercase tracking-wide flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-emerald-400 shrink-0" />
                                        {stat}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </Container>
            </section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
                <section className="border-b border-neutral-900 py-24">
                    <Container className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                                <ImageIcon className="w-4 h-4" /> [ Screenshots ]
                            </span>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {project.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border border-neutral-900 p-2 bg-neutral-950/40 group"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={img}
                                            alt={`${project.client} screenshot ${i + 1}`}
                                            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Feedback / Testimonials */}
            {project.feedback && project.feedback.length > 0 && (
                <section className="border-b border-neutral-900 py-24">
                    <Container className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <span className="flex items-center gap-2 text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-widest">
                                <MessageSquare className="w-4 h-4" /> [ Client Feedback ]
                            </span>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.feedback.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border border-neutral-900 bg-neutral-950/40 p-6"
                                >
                                    <Quote className="w-5 h-5 text-[#f95738] mb-4" />
                                    <p className="text-neutral-300 text-sm font-light leading-relaxed mb-4">
                                        &ldquo;{item.text}&rdquo;
                                    </p>
                                    <div>
                                        <p className="text-white text-xs font-bold uppercase tracking-wide">{item.name}</p>
                                        <p className="text-neutral-500 text-[10px] font-mono uppercase tracking-wider">{item.role}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Quote */}
            <section className="border-b border-neutral-900 py-24">
                <Container className="max-w-3xl text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Quote className="w-8 h-8 text-neutral-800 mx-auto mb-6" />
                        <blockquote className="text-xl md:text-2xl text-neutral-300 font-light leading-relaxed italic">
                            &ldquo;{project.quote}&rdquo;
                        </blockquote>
                    </motion.div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-24">
                <Container className="max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-4">
                        Want a similar system?
                    </h2>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-lg mx-auto mb-8">
                        Every project starts with a conversation. Tell us about your business challenge and we&apos;ll map out the solution.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-white bg-[#f95738] px-6 py-3 hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Discuss Your Project
                        <ArrowRight className="w-3 h-3" />
                    </a>
                </Container>
            </section>

            {/* Prev / Next Nav */}
            <div className="border-t border-neutral-900">
                <Container className="flex justify-between py-6">
                    <div>
                        {prev && (
                            <Link
                                href={`/projects/${prev.slug}`}
                                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                {prev.client}
                            </Link>
                        )}
                    </div>
                    <div>
                        {next && (
                            <Link
                                href={`/projects/${next.slug}`}
                                className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                            >
                                {next.client}
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        )}
                    </div>
                </Container>
            </div>
        </main>
    );
}
