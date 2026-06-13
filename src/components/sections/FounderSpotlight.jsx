'use client';
import { motion } from 'framer-motion';
import { Mail, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { founderSpotlight as f } from '@/data/home';

export default function FounderSpotlight() {
  return (
    <section className="relative py-24 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A] bg-white">

          {/* ── Photo / monogram ── */}
          <div className="lg:col-span-5 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-black relative flex flex-col">
            <div className="flex items-center justify-between px-4 h-9 border-b-2 border-neutral-800 shrink-0">
              <span className="flex gap-1.5">
                <span className="w-2.5 h-2.5 bg-red-500 border border-red-400" />
                <span className="w-2.5 h-2.5 bg-yellow-400 border border-yellow-300" />
                <span className="w-2.5 h-2.5 bg-green-400 border border-green-300" />
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">founder.profile</span>
            </div>

            <div className="flex-1 flex items-center justify-center p-10 relative">
              {/* Monogram placeholder — swap for a photo by replacing this block with <img> */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-40 h-40 md:w-48 md:h-48 bg-[#FFE500] border-2 border-[#FFE500] shadow-[6px_6px_0_#DC2626] flex items-center justify-center"
              >
                <span className="text-6xl md:text-7xl font-black text-black tracking-tighter">{f.initials}</span>
              </motion.div>
            </div>

            <div className="px-6 py-4 border-t-2 border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-base font-black text-white uppercase tracking-tight leading-none">{f.name}</div>
                <div className="text-[10px] font-mono text-[#FFE500] uppercase tracking-widest mt-1">{f.role}</div>
              </div>
              <div className="flex gap-2">
                <a href={`mailto:${f.email}`}
                  className="w-9 h-9 flex items-center justify-center bg-neutral-900 border-2 border-neutral-700 text-white hover:bg-[#FFE500] hover:text-black hover:border-[#FFE500] transition-colors" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
                <Link href={f.website} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center bg-neutral-900 border-2 border-neutral-700 text-white hover:bg-[#FFE500] hover:text-black hover:border-[#FFE500] transition-colors" aria-label="Website">
                  <Globe className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Bio / content ── */}
          <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-center space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex w-fit items-center gap-3 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-[10px] font-mono font-black uppercase tracking-widest"
            >
              [ {f.badge} ]
            </motion.span>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl font-bold text-black leading-snug"
            >
              &ldquo;{f.intro}&rdquo;
            </motion.p>

            <div className="flex items-center gap-5">
              <div className="bg-[#FAFAF8] border-2 border-black shadow-[3px_3px_0_#0A0A0A] px-5 py-3 text-center">
                <div className="text-3xl font-black text-red-600 leading-none">{f.experienceYears}</div>
                <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">{f.experienceLabel}</div>
              </div>
              <p className="text-xs text-gray-600 font-mono leading-relaxed flex-1">{f.expertise}</p>
            </div>

            <div>
              <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-2">// Core Stack</div>
              <div className="flex flex-wrap gap-1.5">
                {f.stack.map(tech => (
                  <span key={tech} className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black text-[9px] text-black font-mono font-bold uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <Link
              href="/team"
              className="group inline-flex w-fit items-center gap-2 px-6 py-3 bg-black text-white border-2 border-black shadow-[4px_4px_0_#DC2626] hover:shadow-[2px_2px_0_#DC2626] hover:translate-x-0.5 hover:translate-y-0.5 text-xs font-mono font-black uppercase tracking-widest transition-all duration-100"
            >
              Meet The Full Team
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
