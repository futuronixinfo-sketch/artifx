'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { uiStyles } from '@/data/uiStyles';
import Container from '@/components/ui/Container';

const CATEGORIES = ['All', 'Morphism', 'Minimal', 'Dark', 'Retro', 'Modern', 'Creative', 'Luxury', 'Functional', 'Immersive', 'Experimental'];

export default function UIStylesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return uiStyles.filter((s) => {
      const matchCat = activeCategory === 'All' || s.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch = !q || s.name.toLowerCase().includes(q) || s.tags.some((t) => t.toLowerCase().includes(q)) || s.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-black">

      {/* Header */}
      <section className="relative pt-32 pb-14 bg-[#FAFAF8] border-b-2 border-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="absolute inset-x-0 top-[15%] flex justify-center z-0 pointer-events-none select-none">
          <div className="w-full text-center text-[18vw] font-black tracking-tighter leading-none opacity-[0.025]">
            UI LAB
          </div>
        </div>
        <Container className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626] text-[10px] font-mono font-black uppercase tracking-widest">
            [ DESIGN GALLERY ]
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black leading-[0.9] uppercase mb-6">
            UI Style Lab
          </h1>
          <p className="text-xs text-gray-600 max-w-lg leading-relaxed font-mono">
            86 distinct UI design styles — each detail page renders live in that style. From Glassmorphism to Terminal, explore the full spectrum of interface design languages.
          </p>
          <div className="mt-6 flex items-center gap-4 font-mono text-[10px] text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#FFE500] border border-black inline-block" />{uiStyles.length} styles</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-[#DC2626] border border-black inline-block" />{CATEGORIES.length - 1} categories</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-black inline-block" />live previews</span>
          </div>
        </Container>
      </section>

      {/* Filters + Search */}
      <section className="py-8 border-b-2 border-black bg-[#FAFAF8] sticky top-[57px] z-40">
        <Container>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-mono font-black uppercase tracking-widest border-2 border-black transition-all duration-100 ${
                    activeCategory === cat
                      ? 'bg-black text-[#FFE500] shadow-[2px_2px_0_#DC2626]'
                      : 'bg-[#FAFAF8] text-black hover:bg-[#FFE500] shadow-[2px_2px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-px hover:translate-y-px'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search styles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-4 pr-10 py-2.5 text-[11px] font-mono border-2 border-black bg-white text-black placeholder:text-gray-400 outline-none focus:shadow-[2px_2px_0_#0A0A0A] w-56 transition-all duration-100"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-mono">⌘K</span>
            </div>
          </div>
          <p className="mt-3 text-[10px] font-mono text-gray-500">
            {filtered.length} of {uiStyles.length} styles
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-12">
        <Container>
          {filtered.length === 0 ? (
            <div className="text-center py-24 border-2 border-black shadow-[4px_4px_0_#0A0A0A]">
              <div className="text-4xl font-black mb-4">¯\_(ツ)_/¯</div>
              <p className="text-xs font-mono text-gray-500">No styles match "{search}"</p>
              <button onClick={() => { setSearch(''); setActiveCategory('All'); }} className="mt-4 px-4 py-2 bg-black text-white border-2 border-black text-xs font-mono font-black uppercase tracking-widest">
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
              {filtered.map((style, idx) => {
                const colCount = 4;
                const pos = idx % colCount;
                const isLastInRow = pos === colCount - 1;
                const isBottomRow = idx >= filtered.length - (filtered.length % colCount || colCount);
                return (
                  <Link
                    key={style.slug}
                    href={`/ui-styles/${style.slug}`}
                    className={`group block bg-white hover:bg-[#FFE500] transition-colors duration-100 relative overflow-hidden
                      ${!isLastInRow ? 'border-r-2 border-black' : ''}
                      ${!isBottomRow ? 'border-b-2 border-black' : ''}
                    `}
                    style={{ textDecoration: 'none' }}
                  >
                    {/* Color preview strip */}
                    <div className="flex h-2 border-b-2 border-black">
                      {style.palette.slice(0, 5).map((color, ci) => (
                        <div key={ci} style={{ flex: 1, background: color.hex }} />
                      ))}
                    </div>

                    <div className="p-5">
                      {/* Number + category */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[9px] font-mono text-gray-400 font-bold">#{String(uiStyles.findIndex(s => s.slug === style.slug) + 1).padStart(2, '0')}</span>
                        <span className="px-2 py-0.5 bg-[#FFE500] text-black border-2 border-black text-[8px] font-mono font-black uppercase tracking-widest group-hover:bg-black group-hover:text-[#FFE500] transition-colors duration-100">
                          {style.category}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-lg font-black uppercase tracking-tight text-black leading-tight mb-2 group-hover:text-black">
                        {style.name}
                      </h3>

                      {/* Era */}
                      <p className="text-[9px] font-mono text-gray-500 mb-3 uppercase tracking-widest">
                        {style.era}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {style.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="px-2 py-0.5 bg-[#FAFAF8] border-2 border-black text-[8px] font-mono font-bold uppercase tracking-wider group-hover:bg-white transition-colors duration-100">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-black uppercase tracking-widest text-black flex items-center gap-1 group-hover:gap-2 transition-all duration-150">
                          Explore Style →
                        </span>
                        {style.pioneeredBy && (
                          <span className="text-[8px] font-mono text-gray-400 truncate max-w-20">{style.pioneeredBy}</span>
                        )}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>

    </main>
  );
}
