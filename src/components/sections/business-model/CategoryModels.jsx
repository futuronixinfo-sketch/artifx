'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Cpu, Layers, Terminal, Award, 
  ArrowRight, Sparkles, Server, Activity 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { modelSlug } from '@/data/business-models';

export default function CategoryModels({ models, categoryId }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeModel = models[activeIdx] || models[0];

  // Helper to turn comma lists into array badges
  const getBadges = (str) => {
    if (!str) return [];
    return str.split(',').map(s => s.trim());
  };

  return (
    <section className="py-20 bg-white select-none">
      <Container className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: MONOSPACED SYSTEMS DIRECTORY LIST */}
          <div className="lg:col-span-5 space-y-3 lg:max-h-[70vh] lg:overflow-y-auto pr-2 custom-scrollbar">
            <div className="pb-3 border-b border-gray-100 flex items-center justify-between">
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest font-bold">
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
                  className={`w-full text-left border p-5 rounded-2xl transition-all duration-300 relative group flex items-start justify-between gap-4 select-none ${
                    isActive 
                      ? 'border-black bg-gradient-to-br from-white to-gray-50 shadow-md shadow-black/5 scale-[1.01]' 
                      : 'border-gray-200 bg-white hover:border-gray-400 hover:bg-gray-50/50'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-[8px] font-mono font-bold ${isActive ? 'text-red-600' : 'text-gray-400'}`}>
                        0{idx + 1} // MODEL_NODE
                      </span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />}
                    </div>
                    
                    <h3 className={`text-xs font-bold uppercase tracking-tight ${isActive ? 'text-black' : 'text-gray-700'}`}>
                      {model.name}
                    </h3>
                    
                    <p className="text-[10px] text-gray-400 leading-snug line-clamp-1 font-mono uppercase tracking-tight">
                      {model.desc}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 mt-1 transition-all shrink-0 ${
                    isActive ? 'text-red-600 translate-x-0.5' : 'text-gray-300 group-hover:text-black'
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
                className="border border-gray-200 bg-gradient-to-br from-white via-white to-gray-50/80 p-6 rounded-3xl relative overflow-hidden shadow-sm"
              >
                {/* Micro layout guides */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:16px_16px] opacity-25 pointer-events-none z-0" />

                {/* Dashboard Bezel Header */}
                <div className="relative z-10 border-b border-gray-200/80 pb-4 mb-5 space-y-2">
                  <div className="flex justify-between items-start gap-4">
                    <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-mono text-[7px] font-bold border border-red-100 uppercase tracking-widest flex items-center gap-1 shrink-0">
                      <Server className="w-2.5 h-2.5" />
                      SIMULATOR_CORE_V4.2
                    </span>
                    <span className="text-[7.5px] font-mono text-gray-400 uppercase tracking-widest text-right">
                      NODE_ADDR: 0x3F_A2B{activeIdx}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-black text-black uppercase tracking-tight leading-none pt-1">
                    {activeModel.name}
                  </h2>
                </div>

                {/* REAL-TIME DYNAMIC STREAM VISUALIZER */}
                <div className="relative z-10 mb-6">
                  <div className="h-12 w-full border border-gray-200/80 bg-gray-50/50 rounded-xl relative overflow-hidden flex items-center justify-between px-4 font-mono text-[8px] text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      <span>INGEST_STREAM // CONNECTED</span>
                    </div>
                    {/* Animated vertical visualizer bars */}
                    <div className="flex items-end gap-0.5 h-6">
                      {[10, 18, 8, 22, 14, 28, 16, 20, 10, 18, 26, 12, 6, 16].map((h, i) => (
                        <motion.div 
                          key={i}
                          className="w-1 bg-red-500/30 rounded-t"
                          animate={{ height: [h/2, h, h/2] }}
                          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                    <span className="text-[7.5px] font-bold text-black uppercase">I/O_RATIO: 99.98%</span>
                  </div>
                </div>

                {/* INTERACTIVE COMPONENT GRID */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* How It Works card */}
                  <div className="border border-gray-150 bg-white p-4 rounded-2xl relative overflow-hidden group">
                    <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5 mb-2">
                      <Cpu className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="text-[7.5px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        01 / How It Works
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed font-sans font-light">
                      {activeModel.howItWorks}
                    </p>
                  </div>

                  {/* Revenue Model card */}
                  <div className="border border-gray-150 bg-white p-4 rounded-2xl relative overflow-hidden group">
                    <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="text-[7.5px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        02 / Revenue Model
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-600 leading-relaxed font-sans font-light">
                      {activeModel.revenueModel}
                    </p>
                  </div>

                  {/* Tech Stack Badge capsule grid */}
                  <div className="border border-gray-150 bg-white p-4 rounded-2xl relative overflow-hidden group md:col-span-2">
                    <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5 mb-2.5">
                      <Terminal className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="text-[7.5px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        03 / Technology Infrastructure Stack
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {getBadges(activeModel.techStack).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200/80 font-mono text-[8px] font-bold text-gray-600 uppercase tracking-tight hover:border-black hover:text-black transition-colors duration-200 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Suitable For / Sector Targets */}
                  <div className="border border-gray-150 bg-white p-4 rounded-2xl relative overflow-hidden group md:col-span-2">
                    <div className="flex items-center gap-1.5 border-b border-gray-100 pb-1.5 mb-2.5">
                      <Award className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="text-[7.5px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                        04 / Ideal Sector Targets
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {getBadges(activeModel.suitableFor).map((target, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-red-50/50 border border-red-100 font-sans text-[9px] font-medium text-red-700 hover:border-red-600 transition-colors duration-200 cursor-default"
                        >
                          {target}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Dashboard Action Cockpit */}
                <div className="relative z-10 mt-6 pt-5 border-t border-gray-200/80 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/business-model/${categoryId}/${modelSlug(activeModel.name)}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-gray-250 bg-white text-gray-600 font-mono text-[9px] font-bold uppercase tracking-widest hover:text-black hover:border-black transition-all shadow-sm"
                  >
                    Decompile Specs
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  </Link>

                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-black text-white font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-red-600 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md"
                  >
                    Deploy Architecture
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-red-400 group-hover:text-white" />
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}

