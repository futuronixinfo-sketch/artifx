'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  X, MessageCircle, ChevronDown, ChevronUp,
  Check, ExternalLink, RotateCcw, Sparkles, ArrowLeft
} from 'lucide-react';
import { categories, getModelsByCategory } from '@/data/business-models';
import { uiStyles } from '@/data/uiStyles';
import { CATEGORY_TO_STYLES } from '@/data/uiBusinessMapping';

const SK = 'artifx_estimate_v2';
const CATS = categories.filter((c) => c.id !== 'popular');

const save = (d) => { try { localStorage.setItem(SK, JSON.stringify(d)); } catch {} };
const load = () => { try { return JSON.parse(localStorage.getItem(SK) || 'null'); } catch { return null; } };

/* ─── Static config ─────────────────────────────── */

const PLATFORMS = [
  { id: 'web',        label: 'Website Only',        icon: '🌐', desc: 'Responsive web app' },
  { id: 'web-admin',  label: 'Website + Admin Panel',icon: '🖥️', desc: 'Web app with backend dashboard' },
  { id: 'mobile',     label: 'Mobile App',           icon: '📱', desc: 'Android / iOS app' },
  { id: 'web-mobile', label: 'Web + Mobile App',     icon: '📲', desc: 'Web app + mobile app' },
  { id: 'fullstack',  label: 'Full Stack',           icon: '🚀', desc: 'Web + Mobile + Admin panel' },
];

// Platform base prices (INR) — your actual pricing
const PLATFORM_BASE  = {
  'web':        { min: 25000,  max: 30000  },
  'web-admin':  { min: 50000,  max: 60000  },
  'mobile':     { min: 70000,  max: 80000  },
  'web-mobile': { min: 90000,  max: 100000 },
  'fullstack':  { min: 100000, max: 120000 },
};
const PLATFORM_WEEKS = { 'web': '3–5', 'web-admin': '5–8', 'mobile': '7–10', 'web-mobile': '10–14', 'fullstack': '12–18' };

// Category complexity — small adjustment only
const CAT_MULT = {
  'home-services':1.0,'food':1.0,'creator-economy':1.0,'education':1.0,
  'ecommerce':1.05,'real-estate':1.05,'travel':1.05,'automobile':1.05,
  'logistics':1.08,'healthcare':1.10,'ai-saas':1.10,'fintech':1.12,
};

const CAT_FEATURES = {
  'real-estate':     ['Property Listings & Search', 'Lead Management CRM', 'Virtual Tour Integration', 'Payment Gateway'],
  'healthcare':      ['Patient Portal & Booking', 'Compliance Layer', 'Medical Records Module', 'Telemedicine Support'],
  'ecommerce':       ['Product Catalog & Search', 'Cart & Checkout', 'Order & Inventory Tracking', 'Payment Gateway'],
  'home-services':   ['Booking & Scheduling', 'Provider Profiles', 'GPS Live Tracking', 'Ratings & Reviews'],
  'food':            ['Menu & Order Management', 'Live Delivery Tracking', 'Kitchen Dashboard', 'Loyalty & Coupons'],
  'logistics':       ['Fleet & Route Management', 'Live GPS Dispatch', 'Warehouse Module', 'Analytics Dashboard'],
  'education':       ['LMS & Course Builder', 'Live Class Streaming', 'Progress & Assessment', 'Certificate Generation'],
  'fintech':         ['Payment Processing Engine', 'KYC Compliance', 'Ledger & Escrow System', 'Regulatory Dashboard'],
  'travel':          ['Booking Engine', 'Itinerary Builder', 'Multi-currency Payments', 'Reviews & Ratings'],
  'automobile':      ['Vehicle Catalog & Compare', 'Test Drive Scheduling', 'EMI Calculator', 'Service Tracker'],
  'ai-saas':         ['LLM / AI Integration', 'Multi-tenant SaaS', 'Usage Analytics & Billing', 'Developer API Portal'],
  'creator-economy': ['Creator Profiles & Portfolio', 'Content Paywall', 'Subscription Engine', 'Revenue Analytics'],
};

// Feature add-ons (INR)
const FEATURES = [
  { id: 'payment',       label: 'Payment Gateway',     cost: 3000  },
  { id: 'auth',          label: 'User Auth & Roles',   cost: 2000  },
  { id: 'notifications', label: 'Push Notifications',  cost: 1500  },
  { id: 'chat',          label: 'Chat / Messaging',    cost: 5000  },
  { id: 'analytics',     label: 'Analytics Dashboard', cost: 4000  },
  { id: 'api',           label: 'API Integrations',    cost: 3000  },
  { id: 'multilang',     label: 'Multi-language',      cost: 2500  },
  { id: 'ai',            label: 'AI / Chatbot',        cost: 8000  },
];

const TIMELINES = [
  { id: 'asap',     label: 'ASAP',        desc: 'Under 1 month',     note: 'Rush charges +50%', mult: 1.5  },
  { id: '1-3m',     label: '1–3 Months',  desc: 'Standard delivery', note: 'Recommended',       mult: 1.0  },
  { id: '3-6m',     label: '3–6 Months',  desc: 'Comfortable pace',  note: 'Best quality',      mult: 1.0  },
  { id: 'flexible', label: 'Flexible',    desc: 'No hard deadline',  note: 'Save 10%',          mult: 0.9  },
];

// UI style design complexity — small adjustment
const STYLE_MULT = {
  'flat-design':1.0,'minimalism':1.0,'corporate-ui':1.0,'enterprise-ui':1.0,
  'light-mode-ui':1.0,'responsive-ui':1.0,'mobile-first-ui':1.0,'sharp-edge-ui':1.0,
  'material-design':1.03,'card-based-ui':1.03,'soft-ui':1.03,'rounded-ui':1.03,
  'dashboard-ui':1.05,'bento-ui':1.05,'dark-mode-ui':1.03,'editorial-design':1.04,
  'glassmorphism':1.08,'neumorphism':1.08,'claymorphism':1.06,'aurora-ui':1.06,
  'gradient-ui':1.05,'frosted-glass-ui':1.08,'luxury-ui':1.10,'premium-minimal-ui':1.08,
  'cyberpunk-ui':1.10,'neon-ui':1.08,'futuristic-ui':1.08,'holographic-ui':1.12,
  'data-visualization-ui':1.10,'motion-ui':1.10,'3d-ui':1.15,'ai-native-ui':1.10,
  'ar-ui':1.15,'vr-ui':1.15,'mixed-reality-ui':1.15,
};

// Format INR nicely
const fmt = (n) => {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  return `₹${Math.round(n / 1000)}K`;
};
const fmtUSD = (n) => `$${Math.round(n / 83)}`;

const getComplexity = (m) => {
  if (m <= 1.02) return { label: 'Standard',    bg: '#d1fae5', fg: '#065f46' };
  if (m <= 1.06) return { label: 'Professional', bg: '#dbeafe', fg: '#1e40af' };
  if (m <= 1.10) return { label: 'Premium',      bg: '#ede9fe', fg: '#5b21b6' };
  return               { label: 'High-End',      bg: '#fef3c7', fg: '#92400e' };
};

/* ─── Bubble components ─────────────────────────── */

function Bot({ children }) {
  return (
    <div className="flex gap-2.5 items-start">
      <div className="w-6 h-6 bg-black border-2 border-black flex items-center justify-center shrink-0 mt-0.5 shadow-[2px_2px_0_#DC2626]">
        <Sparkles className="w-3 h-3 text-[#FFE500]" />
      </div>
      <div className="bg-white border-2 border-black shadow-[2px_2px_0_#0A0A0A] px-3 py-2.5 text-[11px] text-gray-800 leading-relaxed max-w-[270px]">
        {children}
      </div>
    </div>
  );
}

function User({ children }) {
  return (
    <div className="flex justify-end">
      <div className="bg-black text-[#FFE500] border-2 border-black px-3 py-2 text-[11px] font-mono font-black max-w-[200px] leading-snug">
        {children}
      </div>
    </div>
  );
}

/* ─── Step option button ────────────────────────── */
function Opt({ active, onClick, children, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`text-left border-2 border-black transition-all duration-100 ${
        active
          ? 'bg-[#FFE500] shadow-[2px_2px_0_#DC2626]'
          : 'bg-white hover:bg-[#FAFAF8] shadow-[1px_1px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A]'
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ─── Style row (suggest + dropdown) ───────────── */
function StyleRow({ style, picked, onPick }) {
  return (
    <div className={`flex items-stretch border-2 border-black overflow-hidden ${picked ? 'shadow-[2px_2px_0_#DC2626]' : 'shadow-[1px_1px_0_#0A0A0A]'}`}>
      <div className="flex flex-col w-2.5 shrink-0">
        {style.palette.slice(0, 5).map((c, i) => <div key={i} style={{ flex:1, background:c.hex }} />)}
      </div>
      <div className="flex-1 px-3 py-2 bg-white min-w-0">
        <div className="text-[8px] font-mono text-gray-400 uppercase">{style.category}</div>
        <div className="text-[11px] font-black text-black uppercase truncate">{style.name}</div>
      </div>
      <div className="flex flex-col border-l-2 border-black shrink-0">
        <Link href={`/ui-styles/${style.slug}`} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center px-2.5 border-b-2 border-black bg-[#FAFAF8] hover:bg-[#FFE500] transition-colors" title="Preview">
          <ExternalLink className="w-3 h-3" />
        </Link>
        <button onClick={onPick}
          className={`flex-1 flex items-center justify-center px-2.5 transition-colors ${picked ? 'bg-[#DC2626] text-white' : 'bg-white hover:bg-black hover:text-white'}`}>
          {picked ? <Check className="w-3 h-3" /> : <span className="text-[8px] font-mono font-black uppercase">Pick</span>}
        </button>
      </div>
    </div>
  );
}

function StyleDropdown({ allStyles, selected, onPick }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const filtered = q ? allStyles.filter(s => s.name.toLowerCase().includes(q.toLowerCase()) || s.category.toLowerCase().includes(q.toLowerCase())) : allStyles;
  return (
    <div className="border-2 border-black bg-white shadow-[2px_2px_0_#0A0A0A]">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-3 py-2.5 text-[9px] font-mono font-black uppercase tracking-widest hover:bg-[#FFE500] transition-colors">
        <span className="truncate pr-2">{selected ? `✓ ${selected.name}` : 'Browse all 86 styles'}</span>
        {open ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0" />}
      </button>
      {open && (
        <div className="border-t-2 border-black">
          <div className="px-3 py-2 border-b border-black/20">
            <input autoFocus type="text" placeholder="Search styles..." value={q}
              onChange={e => setQ(e.target.value)}
              className="w-full text-[10px] font-mono border border-black bg-[#FAFAF8] px-2 py-1.5 outline-none" />
          </div>
          <div className="max-h-44 overflow-y-auto">
            {filtered.map(style => {
              const picked = selected?.slug === style.slug;
              return (
                <div key={style.slug} className={`flex items-stretch border-b border-black/10 ${picked ? 'bg-[#FFE500]' : 'hover:bg-[#FAFAF8]'}`}>
                  <div className="flex w-2 shrink-0 self-stretch">
                    {style.palette.slice(0,3).map((c,i) => <div key={i} style={{ flex:1, background:c.hex }} />)}
                  </div>
                  <div className="flex-1 px-2.5 py-1.5 min-w-0">
                    <div className="text-[10px] font-black text-black uppercase truncate">{style.name}</div>
                    <div className="text-[8px] font-mono text-gray-400">{style.category}</div>
                  </div>
                  <div className="flex items-stretch border-l border-black/20 shrink-0">
                    <Link href={`/ui-styles/${style.slug}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center px-2 text-gray-400 hover:text-black hover:bg-[#FFE500] transition-colors border-r border-black/20">
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                    <button onClick={() => { onPick(style); setOpen(false); }}
                      className={`flex items-center px-2 text-[8px] font-mono font-black uppercase transition-colors ${picked ? 'text-[#DC2626]' : 'text-gray-400 hover:bg-black hover:text-white'}`}>
                      {picked ? <Check className="w-3 h-3" /> : 'Pick'}
                    </button>
                  </div>
                </div>
              );
            })}
            {!filtered.length && <div className="px-3 py-4 text-center text-[10px] font-mono text-gray-400">No styles found</div>}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Cost estimate card ────────────────────────── */
function CostEstimate({ category, model, platform, features, timeline, uiStyle }) {
  const base   = PLATFORM_BASE[platform?.id]  || { min: 25000, max: 30000 };
  const catM   = CAT_MULT[category?.id]       ?? 1.0;
  const sMult  = STYLE_MULT[uiStyle?.slug]    ?? 1.0;
  const tMult  = timeline?.mult               ?? 1.0;
  const fCost  = features.reduce((acc, fId) => acc + (FEATURES.find(f => f.id === fId)?.cost ?? 0), 0);
  const pWeeks = PLATFORM_WEEKS[platform?.id] ?? '5–8';

  const rawMin = Math.round(base.min * catM * sMult * tMult) + fCost;
  const rawMax = Math.round(base.max * catM * sMult * tMult) + fCost;
  const cx     = getComplexity(sMult);

  const catFeats = CAT_FEATURES[category?.id] || ['Custom Design', 'Frontend Development', 'Backend Integration', 'Deployment'];

  const breakdown = [
    { label: 'Base Price',      val: `${fmt(base.min)} – ${fmt(base.max)}` },
    catM > 1.0 && { label: 'Category Complexity', val: `+${Math.round((catM - 1) * 100)}%` },
    sMult > 1.0 && { label: 'UI Design Level',    val: `+${Math.round((sMult - 1) * 100)}%` },
    fCost > 0   && { label: 'Add-on Features',    val: `+${fmt(fCost)}` },
    timeline?.id === 'asap'     && { label: 'Rush Charges',      val: '+50%' },
    timeline?.id === 'flexible' && { label: 'Flexible Discount', val: '−10%' },
  ].filter(Boolean);

  return (
    <div className="border-2 border-black shadow-[3px_3px_0_#0A0A0A] overflow-hidden bg-white">

      {/* Header */}
      <div className="bg-black px-4 py-2.5 flex items-center justify-between">
        <span className="text-[#FFE500] font-mono font-black text-[9px] uppercase tracking-widest">Your Estimate</span>
        <span className="text-gray-500 text-[8px] font-mono">*indicative</span>
      </div>

      {/* Big price */}
      <div className="px-4 py-4 bg-[#FAFAF8] border-b-2 border-black">
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-1">Total Budget Range</div>
        <div className="text-2xl font-black text-black leading-none">{fmt(rawMin)} – {fmt(rawMax)}</div>
        <div className="text-[9px] font-mono text-gray-400 mt-1">{fmtUSD(rawMin)} – {fmtUSD(rawMax)} USD</div>
      </div>

      {/* Meta row */}
      <div className="grid grid-cols-3 border-b-2 border-black divide-x-2 divide-black">
        <div className="px-3 py-2.5 text-center">
          <div className="text-[8px] font-mono text-gray-400 uppercase mb-0.5">Platform</div>
          <div className="text-[10px] font-black text-black leading-tight">{PLATFORMS.find(p => p.id === platform?.id)?.icon} {platform?.label?.split(' ')[0]}</div>
        </div>
        <div className="px-3 py-2.5 text-center">
          <div className="text-[8px] font-mono text-gray-400 uppercase mb-0.5">Timeline</div>
          <div className="text-[10px] font-black text-black">{pWeeks} wks</div>
        </div>
        <div className="px-3 py-2.5 text-center">
          <div className="text-[8px] font-mono text-gray-400 uppercase mb-0.5">Design</div>
          <div className="text-[8px] font-black px-1.5 py-0.5 border border-black inline-block" style={{ background: cx.bg, color: cx.fg }}>{cx.label}</div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="px-4 py-3 border-b-2 border-black space-y-1.5">
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-2">Price Breakdown</div>
        {breakdown.map((row, i) => (
          <div key={i} className="flex justify-between items-center">
            <span className="text-[9px] font-mono text-gray-600">{row.label}</span>
            <span className="text-[9px] font-black text-black">{row.val}</span>
          </div>
        ))}
      </div>

      {/* Included features */}
      <div className="px-4 py-3">
        <div className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mb-2">What&apos;s Included</div>
        <div className="space-y-1.5">
          {catFeats.map((f, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#DC2626] shrink-0" />
              <span className="text-[10px] text-gray-700">{f}</span>
            </div>
          ))}
          {uiStyle && (
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#FFE500] border border-black shrink-0" />
              <span className="text-[10px] text-gray-700 font-bold">{uiStyle.name} Design System</span>
            </div>
          )}
          {features.map(fId => {
            const feat = FEATURES.find(f => f.id === fId);
            return feat ? (
              <div key={fId} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-black shrink-0" />
                <span className="text-[10px] text-gray-700">{feat.label}</span>
              </div>
            ) : null;
          })}
        </div>
        <p className="text-[8px] font-mono text-gray-400 mt-3 leading-relaxed">
          * Exact pricing confirmed after free 30-min consultation.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Widget ────────────────────────────────── */

export default function EstimateWidget() {
  const [open,      setOpen]     = useState(false);
  const [step,      setStep]     = useState(1);
  const [category,  setCategory] = useState(null);
  const [model,     setModel]    = useState(null);
  const [platform,  setPlatform] = useState(null);
  const [features,  setFeatures] = useState([]);
  const [timeline,  setTimeline] = useState(null);
  const [uiStyle,   setUiStyle]  = useState(null);
  const bottomRef = useRef(null);

  const catModels = category ? (getModelsByCategory(category.id) || []) : [];

  /* Restore from localStorage */
  useEffect(() => {
    const s = load();
    if (!s) return;
    if (s.catId)      { const c = CATS.find(c => c.id === s.catId); if (c) setCategory(c); }
    if (s.modelName)  { setModel({ name: s.modelName }); }
    if (s.platformId) { const p = PLATFORMS.find(p => p.id === s.platformId); if (p) setPlatform(p); }
    if (s.features)   { setFeatures(s.features); }
    if (s.timelineId) { const t = TIMELINES.find(t => t.id === s.timelineId); if (t) setTimeline(t); }
    if (s.styleSlug)  { const st = uiStyles.find(u => u.slug === s.styleSlug); if (st) setUiStyle(st); }
    if (s.step)       { setStep(s.step); }
    if (s.wasOpen)    { setOpen(true); }
  }, []);

  /* Persist */
  useEffect(() => {
    save({ catId: category?.id, modelName: model?.name, platformId: platform?.id, features, timelineId: timeline?.id, styleSlug: uiStyle?.slug, step, wasOpen: open });
  }, [category, model, platform, features, timeline, uiStyle, step, open]);

  /* Auto-scroll */
  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [step]);

  const toggleFeature = (id) => setFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  const reset = () => {
    setCategory(null); setModel(null); setPlatform(null);
    setFeatures([]); setTimeline(null); setUiStyle(null);
    setStep(1); save({});
  };

  const back = () => setStep(s => Math.max(1, s - 1));

  const suggestedStyles = (CATEGORY_TO_STYLES[category?.id] || [])
    .map(slug => uiStyles.find(s => s.slug === slug)).filter(Boolean).slice(0, 4);

  const progress = Math.round((step / 7) * 100);

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-[400] flex items-center gap-2.5 px-5 py-3.5 bg-black text-white font-mono font-black text-[10px] uppercase tracking-widest border-2 border-black shadow-[4px_4px_0_#DC2626] hover:shadow-[6px_6px_0_#DC2626] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-100"
        >
          <MessageCircle className="w-4 h-4 text-[#FFE500]" />
          Get Estimate
          {step > 1 && <span className="w-2 h-2 bg-[#FFE500] border border-black rounded-full animate-pulse ml-0.5" />}
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[400] w-[90vw] max-w-[380px] flex flex-col bg-[#FAFAF8] border-2 border-black shadow-[6px_6px_0_#0A0A0A] max-h-[90vh]">

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black border-b-2 border-black shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FFE500] border border-black rounded-full animate-pulse" />
              <span className="text-white font-mono font-black text-[10px] uppercase tracking-widest">Artifx Estimator</span>
              <span className="text-gray-500 font-mono text-[8px]">Step {step}/7</span>
            </div>
            <div className="flex items-center gap-3">
              {step > 1 && (
                <button onClick={back} className="text-gray-500 hover:text-white transition-colors" title="Back">
                  <ArrowLeft className="w-3.5 h-3.5" />
                </button>
              )}
              <button onClick={reset} className="text-gray-500 hover:text-[#FFE500] transition-colors" title="Reset">
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-white transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">

            {/* ── STEP 1: Business Type ── */}
            <Bot>What type of business are you building? 👋</Bot>

            {!category && step === 1 && (
              <div className="grid grid-cols-2 gap-2">
                {CATS.map(cat => (
                  <Opt key={cat.id} onClick={() => { setCategory(cat); setStep(2); }} className="p-3">
                    <div className="text-xl mb-1 leading-none">{cat.icon}</div>
                    <div className="text-[9px] font-black text-black uppercase tracking-tight leading-tight">{cat.name}</div>
                  </Opt>
                ))}
              </div>
            )}

            {category && <User>{category.icon} {category.name}</User>}

            {/* ── STEP 2: Business Model ── */}
            {step >= 2 && category && (
              <>
                <Bot>Which business model fits best for <span className="font-black">{category.name}</span>?</Bot>

                {step === 2 && (
                  <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                    {catModels.map(m => (
                      <Opt key={m.name} onClick={() => { setModel(m); setStep(3); }}
                        active={model?.name === m.name} className="w-full px-3 py-2.5">
                        <div className="text-[11px] font-black text-black uppercase tracking-tight leading-tight">{m.name}</div>
                        {m.example && <div className="text-[8px] font-mono text-gray-500 mt-0.5">e.g. {m.example}</div>}
                      </Opt>
                    ))}
                  </div>
                )}
              </>
            )}

            {model && step > 2 && <User>📋 {model.name}</User>}

            {/* ── STEP 3: Platform / Scope ── */}
            {step >= 3 && model && (
              <>
                <Bot>What do you need built?</Bot>

                {step === 3 && (
                  <div className="space-y-2">
                    {PLATFORMS.map(p => (
                      <Opt key={p.id} onClick={() => { setPlatform(p); setStep(4); }}
                        active={platform?.id === p.id} className="w-full px-3 py-2.5 flex items-center gap-3">
                        <span className="text-xl shrink-0">{p.icon}</span>
                        <div>
                          <div className="text-[11px] font-black text-black uppercase">{p.label}</div>
                          <div className="text-[9px] font-mono text-gray-500">{p.desc}</div>
                        </div>
                      </Opt>
                    ))}
                  </div>
                )}
              </>
            )}

            {platform && step > 3 && <User>{platform.icon} {platform.label}</User>}

            {/* ── STEP 4: Features ── */}
            {step >= 4 && platform && (
              <>
                <Bot>Select any additional features you need: <span className="text-gray-500">(optional)</span></Bot>

                {step === 4 && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      {FEATURES.map(f => {
                        const on = features.includes(f.id);
                        return (
                          <button key={f.id} onClick={() => toggleFeature(f.id)}
                            className={`text-left border-2 border-black px-3 py-2.5 transition-all duration-100 flex items-start gap-2 ${on ? 'bg-[#FFE500] shadow-[2px_2px_0_#DC2626]' : 'bg-white hover:bg-[#FAFAF8] shadow-[1px_1px_0_#0A0A0A]'}`}>
                            <div className={`w-3.5 h-3.5 border-2 border-black shrink-0 mt-0.5 flex items-center justify-center ${on ? 'bg-black' : 'bg-white'}`}>
                              {on && <Check className="w-2.5 h-2.5 text-[#FFE500]" />}
                            </div>
                            <div>
                              <div className="text-[9px] font-black text-black uppercase leading-tight">{f.label}</div>
                              <div className="text-[8px] font-mono text-gray-500">+₹{f.cost}L</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    <button onClick={() => setStep(5)}
                      className="w-full py-2.5 bg-black text-white border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest hover:bg-[#DC2626] transition-colors shadow-[2px_2px_0_#444]">
                      {features.length > 0 ? `Continue with ${features.length} feature${features.length > 1 ? 's' : ''}` : 'Skip — Continue →'}
                    </button>
                  </>
                )}
              </>
            )}

            {step > 4 && (
              <User>
                {features.length > 0 ? `✓ ${features.length} feature${features.length > 1 ? 's' : ''} selected` : 'No extra features'}
              </User>
            )}

            {/* ── STEP 5: Timeline ── */}
            {step >= 5 && (
              <>
                <Bot>When do you need this ready?</Bot>

                {step === 5 && (
                  <div className="space-y-2">
                    {TIMELINES.map(t => (
                      <Opt key={t.id} onClick={() => { setTimeline(t); setStep(6); }}
                        active={timeline?.id === t.id} className="w-full px-3 py-2.5 flex items-center justify-between gap-2">
                        <div>
                          <div className="text-[11px] font-black text-black uppercase">{t.label}</div>
                          <div className="text-[9px] font-mono text-gray-500">{t.desc}</div>
                        </div>
                        <span className={`text-[8px] font-mono font-black px-2 py-0.5 border border-black shrink-0 ${
                          t.id === 'asap' ? 'bg-red-100 text-red-700' :
                          t.id === 'flexible' ? 'bg-green-100 text-green-700' :
                          'bg-[#FAFAF8] text-gray-600'
                        }`}>{t.note}</span>
                      </Opt>
                    ))}
                  </div>
                )}
              </>
            )}

            {timeline && step > 5 && <User>🗓 {timeline.label}</User>}

            {/* ── STEP 6: UI Style ── */}
            {step >= 6 && timeline && (
              <>
                <Bot>Finally — pick a UI design style for your product:</Bot>

                {step === 6 && (
                  <>
                    <div className="space-y-2">
                      {suggestedStyles.map(style => (
                        <StyleRow key={style.slug} style={style}
                          picked={uiStyle?.slug === style.slug}
                          onPick={() => { setUiStyle(style); setStep(7); }} />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 py-1">
                      <div className="flex-1 h-px bg-black/15" />
                      <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest shrink-0">or browse all 86</span>
                      <div className="flex-1 h-px bg-black/15" />
                    </div>
                    <StyleDropdown allStyles={uiStyles} selected={uiStyle}
                      onPick={style => { setUiStyle(style); setStep(7); }} />
                    <button onClick={() => setStep(7)}
                      className="text-[9px] font-mono text-gray-400 hover:text-black transition-colors underline underline-offset-2">
                      Skip UI selection →
                    </button>
                  </>
                )}
              </>
            )}

            {uiStyle && step > 6 && <User>🎨 {uiStyle.name}</User>}

            {/* ── STEP 7: Cost Estimate ── */}
            {step >= 7 && (
              <>
                <Bot>Here&apos;s your complete estimate! 🎉</Bot>

                <CostEstimate
                  category={category}
                  model={model}
                  platform={platform}
                  features={features}
                  timeline={timeline}
                  uiStyle={uiStyle}
                />

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/contact?business=${encodeURIComponent(category?.name || '')}&model=${encodeURIComponent(model?.name || '')}&platform=${encodeURIComponent(platform?.label || '')}&ui=${encodeURIComponent(uiStyle?.name || '')}`}
                    className="flex items-center justify-center gap-2 py-3 bg-black text-white border-2 border-black font-mono text-[10px] font-black uppercase tracking-widest hover:bg-[#DC2626] shadow-[3px_3px_0_#444] hover:shadow-[1px_1px_0_#444] hover:translate-x-px hover:translate-y-px transition-all duration-100"
                  >
                    Book Free Consultation →
                  </Link>
                  {uiStyle && (
                    <Link href={`/ui-styles/${uiStyle.slug}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 bg-white border-2 border-black font-mono text-[9px] font-black uppercase tracking-widest hover:bg-[#FFE500] shadow-[2px_2px_0_#0A0A0A] transition-all duration-100">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Preview {uiStyle.name} Style
                    </Link>
                  )}
                </div>

                <button onClick={reset}
                  className="text-[9px] font-mono text-gray-400 hover:text-black transition-colors underline underline-offset-2 text-center w-full">
                  ← Start over
                </button>
              </>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Progress bar */}
          <div className="shrink-0 border-t-2 border-black h-1.5 bg-[#FAFAF8]">
            <div className="h-full bg-[#DC2626] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </>
  );
}
