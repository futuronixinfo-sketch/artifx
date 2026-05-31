'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import { templatesList as templates } from '@/data/templates';

const categories = ["All", "SaaS", "Agency", "E-Commerce", "Portfolio", "Business", "Blog"];

export default function TemplatesGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredTemplates = templates.filter((template) => {
    const matchesCategory =
      activeCategory === "All" ||
      template.category.toLowerCase() === activeCategory.toLowerCase();
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-white border-b border-gray-100 select-none">
      <Container className="max-w-6xl mx-auto">
        
        {/* INTERACTIVE CONTROLS BAR: CATEGORIES & DYNAMIC SEARCH */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-gray-100 relative z-30">
          
          {/* Categories Capsules filter */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = cat.toLowerCase() === activeCategory.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-xl font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-black text-white shadow-sm border border-black scale-102'
                      : 'bg-gray-50 text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-200/50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search System Core Input Bar */}
          <div className="relative w-full lg:w-72 shrink-0">
            <input
              type="text"
              placeholder="SEARCH SYSTEMS CORE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-xl bg-gray-50/50 font-mono text-[9px] font-bold tracking-wider placeholder:text-gray-400 focus:outline-none focus:border-black focus:bg-white transition-all shadow-inner uppercase"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-mono text-[10px]">
              &gt;
            </span>
          </div>

        </div>

        {/* SYSTEMS PROVISIONING GRID - Smooth Rearrange Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={template.name}
                className="border border-gray-200/80 bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[500px] hover:border-black hover:shadow-2xl hover:shadow-black/5 hover:scale-[1.01] transition-all duration-500 relative group overflow-hidden"
              >
                
                {/* HUD IMAGE SCREEN AREA */}
                <div className="border border-gray-100 bg-gray-50/50 rounded-2xl aspect-[16/10] overflow-hidden relative shadow-inner">
                  
                  {/* Subtle Grid Screen overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:12px_12px] opacity-15 pointer-events-none z-10" />

                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Glowing light-tech gradient card frame */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10" />

                  {/* Corner tags overlays */}
                  <div className="absolute top-2.5 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2 py-0.5 rounded bg-white/95 text-gray-500 font-mono text-[7px] font-bold border border-gray-200/50 uppercase tracking-widest shadow-sm">
                      {template.category}
                    </span>
                    <span className="px-1.5 py-0.5 rounded bg-white/90 text-gray-400 font-mono text-[6px] border border-gray-200/40">
                      {template.version}
                    </span>
                  </div>

                  <span className="absolute top-2.5 right-3 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] font-mono font-bold uppercase tracking-widest z-10 shadow">
                    ${template.basePrice}
                  </span>

                  {/* Glassmorphic hover Live Preview overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-20">
                    <Link
                      href={`/templates/${template.slug}`}
                      className="px-4 py-2 bg-white text-black font-mono text-[9px] font-bold uppercase tracking-widest rounded-xl hover:bg-red-600 hover:text-white transition-colors flex items-center gap-1.5 shadow-lg"
                    >
                      CONFIGURE &rarr;
                    </Link>
                  </div>
                </div>

                {/* TEMPLATE BODY CONTENT */}
                <div className="flex flex-col flex-1 mt-5">
                  <Link href={`/templates/${template.slug}`}>
                    <h3 className="text-base font-bold text-black uppercase tracking-tight hover:text-red-600 transition-colors duration-300">
                      {template.name}
                    </h3>
                  </Link>
                  
                  <p className="text-xs text-gray-500 leading-relaxed font-light mt-1.5 flex-1">
                    {template.description}
                  </p>

                  {/* Performance Telemetry Matrix Block */}
                  <div className="grid grid-cols-3 gap-2 border-t border-b border-gray-100 py-3 my-4">
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">Speed index</div>
                      <div className="text-[10px] font-bold text-zinc-800 font-mono">{template.speed}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">SEO Score</div>
                      <div className="text-[10px] font-bold text-green-600 font-mono">{template.seo}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">Deploy core</div>
                      <div className="text-[10px] font-bold text-zinc-800 font-mono uppercase">{template.engine}</div>
                    </div>
                  </div>

                  {/* Feature lists tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {template.features.slice(0, 4).map((f) => (
                      <span key={f} className="px-2 py-0.5 rounded bg-gray-50 border border-gray-200/60 text-[8px] text-gray-400 font-mono uppercase tracking-wider">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Call-to-action */}
                  <Link
                    href={`/templates/${template.slug}`}
                    className="w-full py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-700 font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:border-black hover:text-white transition-all duration-300 text-center block"
                  >
                    CONFIGURE SYSTEM &rarr;
                  </Link>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when query matches nothing */}
        {filteredTemplates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border border-dashed border-gray-200 rounded-3xl"
          >
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              [ WARNING: NO CORE ARCHITECTURES MATCHED SEARCH SPECS ]
            </span>
          </motion.div>
        )}

      </Container>
    </section>
  );
}
