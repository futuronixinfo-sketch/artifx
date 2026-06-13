'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { categories, getModelsByCategory, modelSlug } from '@/data/business-models';
import { uiStyles } from '@/data/uiStyles';
import { CATEGORY_TO_STYLES } from '@/data/uiBusinessMapping';

/* ── Data ─────────────────────────────────────── */

const HERO_CATS = categories.filter(c =>
  ['ecommerce','fintech','ai-saas','real-estate','food','healthcare','education','logistics','travel','automobile','home-services','creator-economy'].includes(c.id)
);

// Actual pricing: web=25-30K, web+admin=50-60K, web+app=90K-1L
const CAT_MULT_H = {
  'home-services':1.0,'food':1.0,'creator-economy':1.0,'education':1.0,
  'ecommerce':1.05,'real-estate':1.05,'travel':1.05,'automobile':1.05,
  'logistics':1.08,'healthcare':1.10,'ai-saas':1.10,'fintech':1.12,
};
const STYLE_MULT_H = {
  'flat-design':1.0,'minimalism':1.0,'material-design':1.03,'card-based-ui':1.03,
  'dashboard-ui':1.05,'glassmorphism':1.08,'neumorphism':1.08,'luxury-ui':1.10,
  'cyberpunk-ui':1.10,'3d-ui':1.15,'ar-ui':1.15,
};
const fmtH = (n) => n >= 100000 ? `₹${(n/100000).toFixed(1)}L` : `₹${Math.round(n/1000)}K`;

const getEst = (catId, styleSlug) => {
  const c = CAT_MULT_H[catId] ?? 1.0;
  const s = STYLE_MULT_H[styleSlug] ?? 1.0;
  return { min: fmtH(Math.round(25000 * c * s)), max: fmtH(Math.round(30000 * c * s)) };
};

/* ── Step label ───────────────────────────────── */
function StepLabel({ n, label, done }) {
  return (
    <div className="flex items-center gap-2 mb-2">
      <span className={`w-5 h-5 border-2 border-black flex items-center justify-center text-[8px] font-black font-mono shrink-0 ${done ? 'bg-[#DC2626] text-white' : 'bg-[#FFE500] text-black'}`}>
        {done ? '✓' : `0${n}`}
      </span>
      <span className="text-[9px] font-mono text-red-600 font-black uppercase tracking-widest">{label}</span>
    </div>
  );
}

/* ── Right panel: output result ───────────────── */
function OutputPanel({ category, model, uiStyle }) {
  if (!category) return (
    <div className="h-full flex flex-col items-center justify-center gap-4 py-8 text-center">
      <div className="text-5xl opacity-30">⬅</div>
      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
        Select your business type<br />to see your stack
      </div>
    </div>
  );

  const est = (category && uiStyle) ? getEst(category.id, uiStyle.slug) : null;
  const sugSlugs = CATEGORY_TO_STYLES[category.id] || [];

  return (
    <AnimatePresence mode="wait">
      <motion.div key={`${category.id}-${model?.name}-${uiStyle?.slug}`}
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}
        className="space-y-3"
      >
        {/* Category badge */}
        <div className="flex items-center gap-2.5 p-3 bg-[#FFE500] border-2 border-black shadow-[2px_2px_0_#0A0A0A]">
          <span className="text-2xl leading-none">{category.icon}</span>
          <div>
            <div className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Business</div>
            <div className="text-xs font-black text-black uppercase leading-tight">{category.name}</div>
          </div>
        </div>

        {/* Model card */}
        {model ? (
          <div className="p-3 bg-black border-2 border-black shadow-[2px_2px_0_#DC2626]">
            <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">Model</div>
            <div className="text-xs font-black text-white uppercase leading-tight mb-1.5">{model.name}</div>
            <p className="text-[9px] text-gray-400 leading-relaxed line-clamp-2">{model.desc}</p>
            {model.example && (
              <div className="mt-1.5 text-[8px] font-mono text-[#FFE500]">e.g. {model.example}</div>
            )}
          </div>
        ) : (
          <div className="p-3 bg-[#FAFAF8] border-2 border-dashed border-black text-center">
            <div className="text-[9px] font-mono text-gray-400 uppercase">← Select a business model</div>
          </div>
        )}

        {/* UI Style card */}
        {uiStyle ? (
          <div className="border-2 border-black shadow-[2px_2px_0_#0A0A0A] overflow-hidden">
            <div className="flex h-2">
              {uiStyle.palette.slice(0,5).map((c,i) => <div key={i} style={{ flex:1, background:c.hex }} />)}
            </div>
            <div className="p-3 bg-white flex items-center justify-between gap-2">
              <div>
                <div className="text-[8px] font-mono text-gray-400 uppercase">{uiStyle.category}</div>
                <div className="text-xs font-black text-black uppercase">{uiStyle.name}</div>
              </div>
              <Link href={`/ui-styles/${uiStyle.slug}`} target="_blank"
                className="text-[8px] font-mono font-black uppercase text-gray-500 hover:text-black flex items-center gap-1 shrink-0 transition-colors">
                View <ExternalLink className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>
        ) : model ? (
          <div className="p-3 bg-[#FAFAF8] border-2 border-dashed border-black text-center">
            <div className="text-[9px] font-mono text-gray-400 uppercase">← Pick a UI style</div>
            <div className="flex justify-center gap-2 mt-2">
              {sugSlugs.slice(0,3).map(slug => {
                const s = uiStyles.find(u => u.slug === slug);
                if (!s) return null;
                return (
                  <div key={slug} className="flex h-3 w-8">
                    {s.palette.slice(0,4).map((c,i) => <div key={i} style={{ flex:1, background:c.hex }} />)}
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Cost estimate */}
        {est && (
          <div className="p-3 bg-white border-2 border-black shadow-[2px_2px_0_#0A0A0A]">
            <div className="text-[8px] font-mono text-gray-400 uppercase tracking-widest mb-1">Quick Estimate</div>
            <div className="text-lg font-black text-black leading-none">{est.min} – {est.max}</div>
            <div className="text-[8px] font-mono text-gray-400 mt-0.5">Website starting price</div>
          </div>
        )}

        {/* CTAs */}
        <div className="space-y-2 pt-1">
          <Link
            href={`/contact?business=${encodeURIComponent(category.name)}&model=${encodeURIComponent(model?.name||'')}&ui=${encodeURIComponent(uiStyle?.name||'')}`}
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#DC2626] text-white border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0_#0A0A0A] hover:shadow-[1px_1px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
          >
            Get Full Estimate <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          {model && (
            <Link href={`/business-model/${category.id}/${modelSlug(model.name)}`}
              className="flex items-center justify-center gap-2 w-full py-2 bg-white border-2 border-black font-mono text-[8px] font-black uppercase tracking-widest hover:bg-[#FFE500] shadow-[2px_2px_0_#0A0A0A] transition-all duration-100">
              View Full Model Details <ChevronRight className="w-3 h-3" />
            </Link>
          )}
        </div>

      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main Hero ────────────────────────────────── */
export default function Hero() {
  const [category, setCategory] = useState(null);
  const [model,    setModel]    = useState(null);
  const [uiStyle,  setUiStyle]  = useState(null);

  const catModels = category ? getModelsByCategory(category.id).slice(0, 6) : [];
  const sugStyles = category
    ? (CATEGORY_TO_STYLES[category.id] || []).map(s => uiStyles.find(u => u.slug === s)).filter(Boolean).slice(0, 4)
    : [];

  const pickCategory = (cat) => { setCategory(cat); setModel(null); setUiStyle(null); };
  const pickModel    = (m)   => { setModel(m); setUiStyle(null); };

  const logLine = category
    ? `${category.name}${model ? ` → ${model.name}` : ''}${uiStyle ? ` → ${uiStyle.name}` : ''} // CONFIGURED`
    : 'SELECT BUSINESS TYPE TO BUILD YOUR STACK...';

  return (
    <section className="relative min-h-screen bg-[#FAFAF8] text-black flex flex-col items-center justify-center overflow-hidden select-none pt-28 pb-16">

      {/* Dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.08] bg-[radial-gradient(#0A0A0A_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      {/* Watermark */}
      <div className="absolute inset-x-0 top-[14%] sm:top-[16%] md:top-[10%] flex justify-center z-0 pointer-events-none select-none">
        <div className="w-full text-center text-[24vw] sm:text-[18vw] font-black tracking-tighter leading-none opacity-[0.04]"
          style={{ fontFamily: 'var(--font-heading)' }}>
          ARTIFX
        </div>
      </div>

      <Container className="relative z-10 w-full max-w-5xl flex flex-col items-center text-center space-y-10">

        {/* Badge */}
        <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE500] border-2 border-black shadow-[3px_3px_0_#0A0A0A]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75" />
            <span className="relative inline-flex h-2 w-2 bg-black" />
          </span>
          <span className="text-[10px] font-mono font-black uppercase tracking-widest text-black">
            Build Your Stack // Interactive Configurator
          </span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] uppercase max-w-3xl mx-auto">
            Websites, Apps &amp; AI{' '}
            <span className="text-red-600 underline decoration-4 underline-offset-4">Systems</span>{' '}
            That Grow Your Business.
          </motion.h1>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            We help startups and businesses launch scalable digital products, automate operations,
            and increase revenue through technology.
          </p>
          <p className="text-[9px] sm:text-[10px] font-mono text-gray-500 uppercase tracking-widest max-w-4xl mx-auto">
            Choose your business → pick a model → select a UI style → get your instant estimate
          </p>
        </div>

        {/* ── MAIN CARD ── */}
        <motion.div initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8, delay:0.2 }}
          className="w-full border-2 border-black bg-white shadow-[6px_6px_0_#0A0A0A] relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">

          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-black flex items-center px-4 gap-2 z-10">
            <span className="w-2.5 h-2.5 bg-red-500 border border-red-400" />
            <span className="w-2.5 h-2.5 bg-yellow-400 border border-yellow-300" />
            <span className="w-2.5 h-2.5 bg-green-400 border border-green-300" />
            <span className="ml-4 text-[9px] font-mono text-gray-400 uppercase tracking-widest hidden sm:block">
              ARTIFX STACK BUILDER // SELECT TO CONFIGURE
            </span>
          </div>

          {/* ── LEFT: 3 steps ── */}
          <div className="lg:col-span-7 p-6 md:p-8 space-y-6 text-left mt-6">

            {/* STEP 1 – Business Type */}
            <div>
              <StepLabel n={1} label="Business Type" done={!!category} />
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {HERO_CATS.map(cat => (
                  <button key={cat.id} onClick={() => pickCategory(cat)}
                    className={`flex flex-col items-center gap-1 p-2.5 border-2 border-black transition-all duration-100 focus:outline-none ${
                      category?.id === cat.id
                        ? 'bg-black text-white shadow-[3px_3px_0_#DC2626]'
                        : 'bg-[#FAFAF8] text-gray-600 hover:bg-[#FFE500] hover:text-black shadow-[2px_2px_0_#0A0A0A]'
                    }`}>
                    <span className="text-base leading-none">{cat.icon}</span>
                    <span className="text-[8px] font-mono font-bold uppercase tracking-tight text-center leading-tight">{cat.name.split('/')[0].split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2 – Business Model */}
            <div className={`transition-opacity duration-300 ${category ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
              <StepLabel n={2} label="Business Model" done={!!model} />
              {category ? (
                <div className="space-y-1.5">
                  {catModels.map(m => (
                    <button key={m.name} onClick={() => pickModel(m)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2.5 border-2 border-black transition-all duration-100 focus:outline-none ${
                        model?.name === m.name
                          ? 'bg-[#FFE500] shadow-[2px_2px_0_#DC2626]'
                          : 'bg-white hover:bg-[#FAFAF8] shadow-[1px_1px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A]'
                      }`}>
                      <div className="min-w-0">
                        <div className="text-[11px] font-black text-black uppercase tracking-tight truncate">{m.name}</div>
                        {m.example && <div className="text-[8px] font-mono text-gray-500 truncate">e.g. {m.example}</div>}
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ml-2 transition-colors ${model?.name === m.name ? 'text-black' : 'text-gray-300'}`} />
                    </button>
                  ))}
                  <Link href={`/business-model/${category.id}`}
                    className="block text-center text-[8px] font-mono text-gray-400 hover:text-black pt-1 transition-colors underline underline-offset-2">
                    See all {category.name} models →
                  </Link>
                </div>
              ) : (
                <div className="h-12 border-2 border-dashed border-black flex items-center justify-center">
                  <span className="text-[9px] font-mono text-gray-400">Select a business type first</span>
                </div>
              )}
            </div>

            {/* STEP 3 – UI Style */}
            <div className={`transition-opacity duration-300 ${model ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
              <StepLabel n={3} label="UI Style" done={!!uiStyle} />
              {model && sugStyles.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {sugStyles.map(style => (
                    <button key={style.slug} onClick={() => setUiStyle(style)}
                      className={`text-left border-2 border-black overflow-hidden transition-all duration-100 focus:outline-none ${
                        uiStyle?.slug === style.slug
                          ? 'shadow-[3px_3px_0_#DC2626]'
                          : 'shadow-[1px_1px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A]'
                      }`}>
                      {/* Palette strip */}
                      <div className="flex h-2">
                        {style.palette.slice(0,5).map((c,i) => <div key={i} style={{ flex:1, background:c.hex }} />)}
                      </div>
                      <div className={`px-2.5 py-2 ${uiStyle?.slug === style.slug ? 'bg-[#FFE500]' : 'bg-white hover:bg-[#FAFAF8]'}`}>
                        <div className="text-[8px] font-mono text-gray-400 uppercase">{style.category}</div>
                        <div className="text-[10px] font-black text-black uppercase leading-tight">{style.name}</div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="h-12 border-2 border-dashed border-black flex items-center justify-center">
                  <span className="text-[9px] font-mono text-gray-400">Select a model first</span>
                </div>
              )}
              {model && (
                <Link href="/ui-styles"
                  className="block text-center text-[8px] font-mono text-gray-400 hover:text-black pt-2 transition-colors underline underline-offset-2">
                  Browse all 86 UI styles →
                </Link>
              )}
            </div>

            {/* Live log */}
            <div className="bg-black border-2 border-black p-3 font-mono text-[9px] text-neutral-400 shadow-[3px_3px_0_#DC2626]">
              <div className="flex justify-between items-center text-red-500 font-bold border-b border-neutral-800 pb-1 mb-1.5">
                <span>STACK LOG</span>
                <span className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 ${category ? 'bg-green-500 animate-ping' : 'bg-gray-600'}`} />
                  {category ? 'LIVE' : 'IDLE'}
                </span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div key={logLine}
                  initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }}
                  exit={{ opacity:0, y:-4 }} transition={{ duration:0.15 }}
                  className="leading-relaxed">
                  {category
                    ? <span>ACTIVE: <span className="text-red-400 font-bold">{logLine}</span></span>
                    : <span className="text-gray-600">{logLine}</span>
                  }
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT: Output panel ── */}
          <div className="lg:col-span-5 border-t-2 lg:border-t-0 lg:border-l-2 border-black bg-[#FAFAF8] p-5 mt-6 lg:mt-8 overflow-y-auto max-h-150">
            <div className="text-[9px] font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className={`w-1.5 h-1.5 shrink-0 ${category ? 'bg-[#DC2626] animate-pulse' : 'bg-gray-300'}`} />
              Live Output
            </div>
            <OutputPanel category={category} model={model} uiStyle={uiStyle} />
          </div>

        </motion.div>

        {/* CTAs */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-2 w-full max-w-2xl">
          <Link
            href={`/contact?business=${encodeURIComponent(category?.name||'')}&model=${encodeURIComponent(model?.name||'')}&ui=${encodeURIComponent(uiStyle?.name||'')}`}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 text-[10px] font-mono font-black uppercase tracking-widest transition-all duration-100">
            Deploy This Stack &rarr;
          </Link>
          <Link href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#FFE500] text-black border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 text-[10px] font-mono font-black uppercase tracking-widest transition-all duration-100">
            Free System Audit
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6, delay:0.4 }}
          className="flex flex-wrap items-center justify-center gap-0 pt-8 font-mono border-t-2 border-black w-full">
          {[
            { label: 'Projects Delivered', value: '6+' },
            { label: 'Industries Served', value: '6+' },
            { label: 'Years Experience', value: '5+' },
            { label: 'Custom-Coded', value: '100%' },
          ].map(stat => (
            <div key={stat.label} className="text-center flex-1 min-w-[120px] py-4 border-r-2 border-black last:border-r-0">
              <div className="text-2xl font-black text-black">{stat.value}</div>
              <div className="text-[9px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
