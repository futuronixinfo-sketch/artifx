'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, 
  Terminal, Layers, AlertCircle, Quote, Activity 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import { projects } from '@/data/projects-page';

export default function ProjectDetail({ project }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentIdx = projects.findIndex(p => p.slug === project.slug);
  const prev = currentIdx > 0 ? projects[currentIdx - 1] : null;
  const next = currentIdx < projects.length - 1 ? projects[currentIdx + 1] : null;

  // Compile all project images (main image + gallery screenshots) for the interactive viewer
  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <main className="min-h-screen bg-white text-black pt-32 pb-24 select-none relative">
      
      {/* Soft Background Grid Guides */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />

      {/* Decorative vertical center grid guide */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-gray-200 via-gray-100 to-transparent pointer-events-none" />

      {/* Ambient Crimson Aura Backdrop (extremely eye-friendly) */}
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-red-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10 max-w-5xl">
        
        {/* Breadcrumb Navigation Link */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            &larr; Back to systems ledger
          </Link>
        </div>

        {/* Dynamic Case Study Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16 pb-8 border-b border-gray-100">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50/80 border border-red-100 rounded-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-red-600">
                [ CASE STUDY: {project.slug.toUpperCase()} // active system ]
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-none">
              {project.client}
            </h1>
            
            <p className="text-xs text-gray-500 max-w-xl leading-relaxed font-mono">
              /* {project.context} */
            </p>

            <div className="pt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 bg-gray-50/80 text-gray-600 font-mono text-[9px] font-bold uppercase tracking-widest rounded-xl hover:bg-black hover:border-black hover:text-white transition-all duration-300 shadow-sm"
              >
                VISIT LIVE SYSTEM
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Telemetry metadata cards right aligned */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full lg:w-auto shrink-0 font-mono">
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Base Core</div>
              <div className="text-xs font-bold text-zinc-800">{project.architecture[0] || 'Next.js'}</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Pipeline</div>
              <div className="text-xs font-bold text-zinc-800 truncate max-w-[85px] block mx-auto">{project.architecture[1] || 'Vercel'}</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">System SLA</div>
              <div className="text-xs font-bold text-green-600">99.99%</div>
            </div>
            <div className="border border-gray-200/60 bg-gray-50/50 p-4 rounded-2xl min-w-[110px] text-center shadow-sm">
              <div className="text-[7px] text-gray-400 uppercase tracking-widest leading-none mb-1">Operational</div>
              <div className="text-xs font-bold text-red-600">VERIFIED</div>
            </div>
          </div>
        </div>

        {/* INTERACTIVE MULTI-IMAGE SCREEN & CAROUSEL */}
        <div className="border border-gray-200 bg-gray-50/50 rounded-3xl p-3 relative overflow-hidden shadow-sm mb-16 select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-15 pointer-events-none z-10" />
          
          {/* Main Display Window */}
          <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-inner bg-white border border-gray-100 relative group/screen">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIndex}
                src={allImages[activeImageIndex]}
                alt={`${project.client} View ${activeImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Gallery Navigation Chevrons */}
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
                }}
                className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow hover:scale-105 transition-all pointer-events-auto border border-gray-200/50 font-mono text-[10px] font-bold focus:outline-none"
              >
                &larr;
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
                }}
                className="w-8 h-8 rounded-full bg-white/95 hover:bg-white text-black flex items-center justify-center shadow hover:scale-105 transition-all pointer-events-auto border border-gray-200/50 font-mono text-[10px] font-bold focus:outline-none"
              >
                &rarr;
              </button>
            </div>

            {/* Corner screen index tracker */}
            <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/75 text-white font-mono text-[8px] tracking-widest uppercase z-20 select-none">
              VIEW {activeImageIndex + 1} / {allImages.length}
            </div>
          </div>

          {/* Gallery Thumbnail Row */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {allImages.map((img, index) => {
              const isActive = index === activeImageIndex;
              return (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`border rounded-xl aspect-[16/10] overflow-hidden bg-gray-50/50 p-1 transition-all duration-300 relative focus:outline-none hover:border-black shadow-sm ${
                    isActive
                      ? 'border-red-500 ring-2 ring-red-500/10'
                      : 'border-gray-200 hover:scale-[1.02]'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${project.client} thumbnail ${index + 1}`}
                    className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}
                  />
                  {isActive && (
                    <motion.div
                      layoutId="activeProjThumbnailBorder"
                      className="absolute inset-0 border-2 border-red-500 rounded-xl pointer-events-none"
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>

        {/* SYSTEM DIAGNOSTICS COMPARISON COCKPIT: PROBLEM VS SOLUTION */}
        <section className="border-b border-gray-100 pb-20 select-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: System Vulnerabilities (Col 6) */}
            <div className="lg:col-span-6 border border-gray-200/80 bg-gray-50/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col shadow-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none z-0" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                    [ 01 // SYSTEM VULNERABILITIES AUDIT ]
                  </span>
                  <span className="text-[7px] font-mono text-gray-400 font-bold">FRICTION_LOG</span>
                </div>

                <ul className="space-y-4">
                  {project.problem.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 text-xs font-sans font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 bg-red-500 shrink-0 mt-2 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right side: Deployed Automation Solution (Col 6) */}
            <div className="lg:col-span-6 border border-gray-200/80 bg-gray-50/30 backdrop-blur-sm rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col shadow-sm">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none z-0" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center border-b border-gray-200/60 pb-3">
                  <span className="text-[9px] font-mono text-green-600 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    [ 02 // DEPLOYED AUTOMATION INTEGRATION ]
                  </span>
                  <span className="text-[7px] font-mono text-gray-400 font-bold">SOLUTIONS_CORE</span>
                </div>

                <ul className="space-y-4">
                  {project.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-xs font-sans font-light leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* SYSTEMS ARCHITECTURE & MEASURABLE OUTCOMES */}
        <section className="border-b border-gray-100 py-20 select-none">
          <div className="border border-gray-200 bg-gray-50/50 rounded-3xl p-6 md:p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-15 pointer-events-none z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch relative z-10">
              
              {/* Left Column: Tech Stack Blueprint Core (Col 5) */}
              <div className="md:col-span-5 space-y-4 pr-0 md:pr-6 md:border-r border-gray-200/60">
                <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">System Core Architecture</span>
                <h4 className="text-xl font-bold uppercase text-black tracking-tight flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-red-500" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.architecture.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-white border border-gray-200/80 rounded-xl text-[9px] text-gray-500 font-mono uppercase tracking-wider shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Measurable SLA Impact Results (Col 7) */}
              <div className="md:col-span-7 space-y-4 pl-0 md:pl-6 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">Measurable Outcomes</span>
                  <h4 className="text-xl font-bold uppercase text-black tracking-tight flex items-center gap-2">
                    <Activity className="w-4 h-4 text-red-500" />
                    Business Impact KPI
                  </h4>
                </div>

                <div className="space-y-3 mt-4">
                  {project.impact.map((stat, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 bg-white font-mono text-[9px] text-zinc-800 shadow-sm uppercase tracking-wide">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                      <span>{stat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CLIENT FEEDBACKS: USER INTEGRITY REPORTS */}
        {project.feedback && project.feedback.length > 0 && (
          <section className="border-b border-gray-100 py-20 select-none">
            <div className="space-y-8">
              <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block text-center">User Integrity Validation Reports</span>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.feedback.map((item, i) => (
                  <div key={i} className="border border-gray-200 bg-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:border-black transition-all duration-300 relative group">
                    <Quote className="w-8 h-8 text-red-500/10 absolute top-6 right-6 shrink-0" />
                    
                    <p className="text-gray-700 text-xs font-serif italic leading-relaxed mb-6 relative z-10">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <span className="text-xs font-mono font-bold text-black uppercase tracking-wider block">{item.name}</span>
                        <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest">{item.role}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 border border-red-100 font-mono text-[7px] font-bold uppercase tracking-widest">
                        Parent Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PROJECT QUOTE directive memopad */}
        <section className="border-b border-gray-100 py-20 select-none">
          <div className="border border-gray-200 bg-gray-50/50 p-6 md:p-8 rounded-3xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute top-0 right-0 text-[6px] font-mono text-gray-300 p-2 select-none">MEMO_REF: SYSTEM_DIRECTIVE_REF</div>
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-left">
              <div className="space-y-2">
                <div className="text-[8px] font-mono text-red-600 uppercase tracking-widest font-bold">[ BRAND DIRECTIVE PROMISE ]</div>
                <blockquote className="text-xs md:text-sm text-gray-700 italic leading-relaxed font-serif">
                  &quot;{project.quote}&quot;
                </blockquote>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-end border-l md:border-l-0 md:border-r border-red-200 pl-4 md:pl-0 md:pr-4 py-1">
                <span className="text-[10px] font-mono font-bold uppercase text-black">Artifx Systems</span>
                <span className="text-[8px] font-mono text-red-600 uppercase tracking-wider">Client Outcome</span>
              </div>
            </div>
          </div>
        </section>

        {/* WANT A SIMILAR SYSTEM CTA SECTION */}
        <section className="py-24 select-none text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black uppercase leading-none">
            Want a similar system?
          </h2>
          <p className="text-xs text-gray-500 font-mono leading-relaxed font-light">
            /* Every project starts with a conversation. Tell us about your business challenge and we&apos;ll map out the solution. */
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-red-600 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
            >
              Discuss Your Project
              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </section>

        {/* FOOTER PREV / NEXT BREADCRUMB BUTTONS */}
        <div className="border-t border-gray-200/60 pt-8 mt-12 flex items-center justify-between select-none">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              PREV: {prev.client}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="inline-flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-wider text-gray-400 hover:text-black transition-colors ml-auto"
            >
              NEXT: {next.client}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </Container>
    </main>
  );
}
