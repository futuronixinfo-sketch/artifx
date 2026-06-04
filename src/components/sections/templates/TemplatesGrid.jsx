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
    <section className="py-24 bg-[#FAFAF8] border-b-2 border-black select-none">
      <Container className="max-w-6xl mx-auto">

        {/* CONTROLS BAR: CATEGORIES & SEARCH */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b-2 border-black relative z-30">

          {/* Category filter pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = cat.toLowerCase() === activeCategory.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 font-mono text-[10px] font-black uppercase tracking-wider transition-all duration-100 focus:outline-none border-2 border-black ${
                    isActive
                      ? 'bg-black text-white shadow-[3px_3px_0_#0A0A0A]'
                      : 'bg-white text-black hover:bg-[#FFE500] hover:shadow-[2px_2px_0_#0A0A0A]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <input
              type="text"
              placeholder="SEARCH SYSTEMS CORE..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border-2 border-black bg-white font-mono text-[9px] font-bold tracking-wider placeholder:text-gray-400 focus:outline-none focus:bg-[#FAFAF8] transition-all uppercase shadow-[3px_3px_0_#0A0A0A]"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-[10px] font-black">
              &gt;
            </span>
          </div>
        </div>

        {/* TEMPLATES GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredTemplates.map((template) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={template.name}
                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100 p-5 flex flex-col justify-between min-h-125 relative group overflow-hidden"
              >

                {/* IMAGE AREA */}
                <div className="border-2 border-black bg-[#FAFAF8] aspect-16/10 overflow-hidden relative">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />

                  {/* Corner tags */}
                  <div className="absolute top-2.5 left-3 flex items-center gap-1.5 z-10">
                    <span className="px-2 py-0.5 bg-white text-black font-mono text-[7px] font-black border-2 border-black uppercase tracking-widest">
                      {template.category}
                    </span>
                    <span className="px-1.5 py-0.5 bg-white text-gray-500 font-mono text-[6px] border border-black">
                      {template.version}
                    </span>
                  </div>

                  <span className="absolute top-2.5 right-3 px-2 py-0.5 bg-red-600 text-white text-[9px] font-mono font-black uppercase tracking-widest z-10 border-2 border-black">
                    ${template.basePrice}
                  </span>

                  {/* Hover configure overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <Link
                      href={`/templates/${template.slug}`}
                      className="px-4 py-2 bg-[#FFE500] text-black font-mono text-[9px] font-black uppercase tracking-widest border-2 border-black shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 flex items-center gap-1.5"
                    >
                      CONFIGURE &rarr;
                    </Link>
                  </div>
                </div>

                {/* TEMPLATE BODY */}
                <div className="flex flex-col flex-1 mt-5">
                  <Link href={`/templates/${template.slug}`}>
                    <h3 className="text-base font-black text-black uppercase tracking-tight hover:text-red-600 transition-colors duration-100">
                      {template.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-gray-600 leading-relaxed font-light mt-1.5 flex-1">
                    {template.description}
                  </p>

                  {/* Performance Telemetry */}
                  <div className="grid grid-cols-3 gap-2 border-t-2 border-b-2 border-black py-3 my-4">
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">Speed index</div>
                      <div className="text-[10px] font-black text-black font-mono">{template.speed}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">SEO Score</div>
                      <div className="text-[10px] font-black text-green-600 font-mono">{template.seo}</div>
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">Deploy core</div>
                      <div className="text-[10px] font-black text-black font-mono uppercase">{template.engine}</div>
                    </div>
                  </div>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {template.features.slice(0, 4).map((f) => (
                      <span key={f} className="px-2 py-0.5 bg-[#FAFAF8] border-2 border-black text-[8px] text-gray-600 font-mono uppercase tracking-wider">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/templates/${template.slug}`}
                    className="w-full py-2.5 border-2 border-black bg-black text-white font-mono text-[9px] font-black uppercase tracking-widest hover:bg-[#FFE500] hover:text-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100 text-center block"
                  >
                    CONFIGURE SYSTEM &rarr;
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredTemplates.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 border-2 border-black border-dashed bg-white"
          >
            <span className="text-[10px] font-mono text-gray-500 font-black uppercase tracking-widest">
              [ WARNING: NO CORE ARCHITECTURES MATCHED SEARCH SPECS ]
            </span>
          </motion.div>
        )}

      </Container>
    </section>
  );
}
