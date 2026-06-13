'use client';
import {
  Cpu, 
  Layers, 
  Terminal, 
  Award,
  ArrowRight, 
  Sparkles, 
  Palette, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  ExternalLink 
} from 'lucide-react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { modelSlug } from '@/data/business-models';
import { uiStyles } from '@/data/uiStyles';
import { CATEGORY_TO_STYLES } from '@/data/uiBusinessMapping';
import { getModelFlow } from '@/data/modelFlows';

export default function CategoryModels({ models, categoryId }) {
  
  // Find suggested UI design styles for this business category
  const suggestedStyleSlugs = CATEGORY_TO_STYLES[categoryId] || [];
  const suggestedStyles = suggestedStyleSlugs
    .map((slug) => uiStyles.find((s) => s.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  // Parse tech stack comma separated strings
  const getBadges = (str) => {
    if (!str) return [];
    return str.split(',').map(s => s.trim()).slice(0, 3);
  };

  // List of icons to cycle through for cards
  const cardIcons = [Cpu, Layers, TrendingUp, Sparkles, Activity];

  return (
    <section className="py-16 bg-[#FAFAF8] select-none">
      <Container className="max-w-6xl mx-auto">
        <div className="space-y-8">
          
          {/* Section Header */}
          <div className="pb-4 border-b-2 border-black flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                [ DIRECTORY_INDEX ]
              </span>
              <h2 className="text-2xl font-black text-black uppercase tracking-tight mt-1">
                Available Architectures
              </h2>
            </div>
            <span className="text-xs font-mono text-red-600 font-black uppercase bg-red-50 border border-red-200 px-3 py-1 max-w-max">
              {models.length} System Nodes Online
            </span>
          </div>

          {/* DYNAMIC CARD GRID (UX OVERHAUL) */}
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
            {models.map((model, idx) => {
              const slug = modelSlug(model.name);
              const flow = getModelFlow(categoryId, slug, model);
              const metrics = flow.metrics;
              const CardIcon = cardIcons[idx % cardIcons.length];

              // Bento grid formatting: 
              // If we have exactly 5 models, first 2 are span-6 (50%), next 3 are span-4 (33%)
              // Otherwise, we do a uniform span-4 grid.
              const isBento = models.length === 5;
              const colSpanClass = isBento
                ? idx < 2
                  ? 'lg:col-span-6 md:col-span-3 col-span-1'
                  : 'lg:col-span-4 md:col-span-2 col-span-1'
                : 'lg:col-span-4 md:col-span-3 col-span-1';

              // Header color accents for variety
              const headerAccents = [
                'bg-[#FFE500] text-black', 
                'bg-[#DC2626] text-white', 
                'bg-black text-white', 
                'bg-[#059669] text-white', 
                'bg-purple-900 text-white'
              ];
              const accentClass = headerAccents[idx % headerAccents.length];

              return (
                <div
                  key={model.name}
                  className={`bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[6px_6px_0_#0A0A0A] hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between ${colSpanClass}`}
                >
                  <div>
                    {/* Card Header Strip */}
                    <div className={`flex items-center justify-between px-4 py-2 border-b-2 border-black ${accentClass}`}>
                      <div className="flex items-center gap-1.5">
                        <CardIcon className="w-3.5 h-3.5" />
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider">
                          NODE_0{idx + 1}
                        </span>
                      </div>
                      <span className="font-mono text-[8.5px] font-bold tracking-widest uppercase">
                        ACTIVE_CORE
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 space-y-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-black text-black uppercase tracking-tight leading-tight">
                          {model.name}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {model.desc}
                        </p>
                      </div>

                      {/* Micro KPI Scorecard Grid */}
                      <div className="grid grid-cols-2 gap-px bg-black border border-black text-[10px]">
                        {/* Take Rate */}
                        <div className="bg-[#FAFAF8] p-2 flex flex-col justify-between">
                          <span className="font-mono text-[8px] text-gray-500 uppercase font-black">Take Rate</span>
                          <span className="font-black text-gray-800 truncate mt-0.5">{metrics.takeRate}</span>
                        </div>
                        {/* Margins */}
                        <div className="bg-[#FAFAF8] p-2 flex flex-col justify-between">
                          <span className="font-mono text-[8px] text-gray-500 uppercase font-black">Margin</span>
                          <span className="font-black text-emerald-700 truncate mt-0.5">{metrics.margin}</span>
                        </div>
                        {/* Complexity */}
                        <div className="bg-[#FAFAF8] p-2 flex flex-col justify-between">
                          <span className="font-mono text-[8px] text-gray-500 uppercase font-black">Complexity</span>
                          <span className="font-black text-gray-800 truncate mt-0.5">{metrics.complexity}</span>
                        </div>
                        {/* Setup Cost */}
                        <div className="bg-[#FAFAF8] p-2 flex flex-col justify-between">
                          <span className="font-mono text-[8px] text-gray-500 uppercase font-black">Setup Cost</span>
                          <span className="font-black text-gray-800 truncate mt-0.5">{metrics.setupCost}</span>
                        </div>
                      </div>

                      {/* Tech Stack Preview */}
                      <div className="space-y-1.5 pt-1">
                        <span className="font-mono text-[8.5px] font-black uppercase text-gray-400 block">
                          Core Integration Tools:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {getBadges(model.techStack).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 bg-gray-100 text-gray-700 font-mono text-[9px] border border-black/10 uppercase font-bold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-5 pt-0 mt-auto">
                    <div className="border-t border-black/10 pt-4 flex flex-col gap-2">
                      <Link
                        href={`/business-model/${categoryId}/${slug}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border-2 border-black bg-[#FFE500] text-black font-mono text-[9px] font-black uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-100 shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] active:translate-x-0.5 active:translate-y-0.5"
                      >
                        Explore Flow Simulator
                        <ExternalLink className="w-3 h-3" />
                      </Link>

                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-black bg-white hover:bg-gray-50 text-gray-800 font-mono text-[9px] font-black uppercase tracking-wider transition-colors"
                      >
                        Deploy Architecture
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
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
