'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, Cpu, Layers, Terminal, Award,
  ArrowRight, Sparkles, Server, Palette
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { modelSlug } from '@/data/business-models';
import { uiStyles } from '@/data/uiStyles';
import { CATEGORY_TO_STYLES } from '@/data/uiBusinessMapping';

export default function CategoryModels({ models, categoryId }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeModel = models[activeIdx] || models[0];

  const suggestedStyleSlugs = CATEGORY_TO_STYLES[categoryId] || [];
  const suggestedStyles = suggestedStyleSlugs
    .map((slug) => uiStyles.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  const getBadges = (str) => {
    if (!str) return [];
    return str.split(',').map(s => s.trim());
  };

  return (
    <section className="py-20 bg-[#FAFAF8] select-none">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT: MONOSPACED SYSTEMS DIRECTORY LIST */}
          <div className="lg:col-span-5 space-y-3 lg:max-h-[70vh] lg:overflow-y-auto pr-2 custom-scrollbar">
            <div className="pb-3 border-b-2 border-black flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                [ DIRECTORY_INDEX ]
              </span>
              <span className="text-[8px] font-mono text-red-600 font-bold uppercase">
                {models.length} Nodes Registered
              </span>
            </div>

            {models.map((model, idx) => {
              const isActive = idx === activeIdx;
              return (
                <motion.button
                  key={model.name}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left border-2 p-5 transition-all duration-100 relative group flex items-start justify-between gap-4 select-none ${
                    isActive
                      ? 'border-black bg-[#FFE500] shadow-[4px_4px_0_#0A0A0A]'
                      : 'border-black bg-white hover:bg-[#FAFAF8] hover:shadow-[2px_2px_0_#0A0A0A]'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-mono font-bold ${isActive ? 'text-black' : 'text-gray-500'}`}>
                        0{idx + 1} // MODEL_NODE
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 bg-black animate-ping" />}
                    </div>

                    <h3 className={`text-xs font-black uppercase tracking-tight ${isActive ? 'text-black' : 'text-gray-700'}`}>
                      {model.name}
                    </h3>

                    <p className="text-[10px] text-gray-500 leading-snug line-clamp-1 font-mono uppercase tracking-tight">
                      {model.desc}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 transition-all shrink-0 ${
                    isActive ? 'text-black translate-x-0.5' : 'text-gray-400 group-hover:text-black'
                  }`} />
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT: INTERACTIVE HUD SYSTEMS SIMULATOR COCKPIT */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] p-6 relative overflow-hidden"
              >
                {/* Dashboard Bezel Header */}
                <div className="relative z-10 border-b-2 border-black pb-4 mb-5 space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2 py-0.5 bg-[#FFE500] text-black font-mono text-[7px] font-black border-2 border-black uppercase tracking-widest flex items-center gap-1 shrink-0">
                      <Server className="w-2.5 h-2.5" />
                      SIMULATOR_CORE_V4.2
                    </span>
                    <span className="text-[7.5px] font-mono text-gray-500 uppercase tracking-widest text-right">
                      NODE_ADDR: 0x3F_A2B{activeIdx}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight leading-none pt-1">
                    {activeModel.name}
                  </h2>
                </div>

                {/* REAL-TIME DYNAMIC STREAM VISUALIZER */}
                <div className="relative z-10 mb-6">
                  <div className="h-12 w-full border-2 border-black bg-black relative overflow-hidden flex items-center justify-between px-4 font-mono text-[8px] text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-red-500 animate-ping" />
                      <span>INGEST_STREAM // CONNECTED</span>
                    </div>
                    <div className="flex items-end gap-0.5 h-6">
                      {[10, 18, 8, 22, 14, 28, 16, 20, 10, 18, 26, 12, 6, 16].map((h, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-red-500/60"
                          animate={{ height: [h / 2, h, h / 2] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                    <span className="text-[7.5px] font-black text-[#FFE500] uppercase">I/O_RATIO: 99.98%</span>
                  </div>
                </div>

                {/* INTERACTIVE COMPONENT GRID */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* How It Works card */}
                  <div className="bg-white border-2 border-black p-4 group">
                    <div className="flex items-center gap-1.5 border-b-2 border-black pb-2 mb-3">
                      <Cpu className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                      <span className="text-[10px] font-black text-black uppercase tracking-widest">
                        How It Works
                      </span>
                    </div>
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {activeModel.howItWorks}
                    </p>
                  </div>

                  {/* Revenue Model card */}
                  <div className="bg-[#FFE500] border-2 border-black p-4 group">
                    <div className="flex items-center gap-1.5 border-b-2 border-black pb-2 mb-3">
                      <Layers className="w-3.5 h-3.5 text-black shrink-0" />
                      <span className="text-[10px] font-black text-black uppercase tracking-widest">
                        Revenue Model
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 leading-relaxed">
                      {activeModel.revenueModel}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="bg-white border-2 border-black p-4 group md:col-span-2">
                    <div className="flex items-center gap-1.5 border-b-2 border-black pb-2 mb-3">
                      <Terminal className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                      <span className="text-[10px] font-black text-black uppercase tracking-widest">
                        Tech Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {getBadges(activeModel.techStack).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#FAFAF8] border-2 border-black font-mono text-[10px] font-bold text-gray-800 uppercase tracking-tight hover:bg-[#FFE500] transition-colors duration-100 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For */}
                  <div className="bg-black border-2 border-black p-4 group md:col-span-2">
                    <div className="flex items-center gap-1.5 border-b-2 border-white/20 pb-2 mb-3">
                      <Award className="w-3.5 h-3.5 text-[#FFE500] shrink-0" />
                      <span className="text-[10px] font-black text-white uppercase tracking-widest">
                        Best Suited For
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {getBadges(activeModel.suitableFor).map((target, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 bg-[#DC2626] text-white border-2 border-[#DC2626] font-sans text-[10px] font-bold hover:bg-[#FFE500] hover:text-black hover:border-[#FFE500] transition-colors duration-100 cursor-default"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Dashboard Action Cockpit */}
                <div className="relative z-10 mt-6 pt-5 border-t-2 border-black flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/business-model/${categoryId}/${modelSlug(activeModel.name)}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-black bg-white text-black font-mono text-[9px] font-black uppercase tracking-widest hover:bg-[#FAFAF8] hover:shadow-[2px_2px_0_#0A0A0A] transition-all duration-100 shadow-[4px_4px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    Decompile Specs
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-red-600" />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-black bg-black text-white font-mono text-[9px] font-black uppercase tracking-widest hover:bg-red-600 shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
                  >
                    Deploy Architecture
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* ── RECOMMENDED UI STYLES ── */}
        {suggestedStyles.length > 0 && (
          <div className="mt-16 pt-12 border-t-2 border-black">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Palette className="w-3.5 h-3.5 text-[#DC2626]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Design Intelligence</span>
                </div>
                <h2 className="text-2xl font-black text-black uppercase tracking-tight">
                  Recommended UI Styles
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Design systems that work best for this category
                </p>
              </div>
              <Link
                href="/ui-styles"
                className="shrink-0 text-[10px] font-mono font-black uppercase tracking-widest text-black border-b-2 border-black hover:text-[#DC2626] hover:border-[#DC2626] transition-colors duration-100 whitespace-nowrap pt-1"
              >
                All 86 Styles →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-2 border-black shadow-[4px_4px_0_#0A0A0A]">
              {suggestedStyles.map((style, i) => (
                <Link
                  key={style.slug}
                  href={`/ui-styles/${style.slug}`}
                  className={`group block bg-white hover:bg-[#FFE500] transition-colors duration-100 ${i < suggestedStyles.length - 1 ? 'border-r-2 border-black' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  {/* colour palette strip */}
                  <div className="flex h-2.5 border-b-2 border-black">
                    {style.palette.slice(0, 5).map((c, ci) => (
                      <div key={ci} style={{ flex: 1, background: c.hex }} />
                    ))}
                  </div>
                  <div className="p-5">
                    <div className="text-[8px] font-mono text-gray-400 uppercase tracking-widest mb-1.5">
                      {style.category}
                    </div>
                    <div className="text-sm font-black text-black uppercase leading-tight mb-1">
                      {style.name}
                    </div>
                    <div className="text-[9px] font-mono text-gray-500 mb-4">
                      {style.era}
                    </div>
                    <div className="text-[9px] font-mono font-black uppercase tracking-widest text-black flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                      Open Style →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </Container>
    </section>
  );
}
