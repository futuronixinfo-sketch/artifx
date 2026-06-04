'use client';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Lightbulb, TrendingUp, Code2, Target, Workflow } from 'lucide-react';

function RenderCategoryDiagram({ categoryId }) {
  const configs = {
    'real-estate':     { nodes: ['CLIENT / BUYER', 'REAL ESTATE PLATFORM', 'VETTED BROKERS', 'BUILDER INVENTORY'], sub: 'Broker Routing Core' },
    'healthcare':      { nodes: ['PATIENT', 'HIPAA GATEWAY', 'CLINICAL DB', 'TELEMED PHYSICIAN'], sub: 'HL7 Secure Tunnel' },
    'ecommerce':       { nodes: ['BUYER APP', 'ORDER ROUTER', 'DARK STORE', 'LOGISTICS FLEET'], sub: null },
    'home-services':   { nodes: ['CLIENT BOOKING', 'GEO DISPATCH', 'FIELD CONTRACTOR'], sub: 'Active Matching Engine' },
    'food':            { nodes: ['CUSTOMER APP', 'MENU AGGREGATOR', 'CLOUD KITCHEN', 'COURIER RIDER'], sub: null },
    'logistics':       { nodes: ['CARGO DISPATCH', 'ROUTE OPTIMIZER', 'FINAL DESTINATION'], sub: 'Smart Hub Distributor' },
    'education':       { nodes: ['STUDENT APP', 'LMS CONTROLLER', 'ACADEMIC MENTOR'], sub: 'Live Streaming CDN' },
    'fintech':         { nodes: ['INVESTOR / USER', 'LEDGER ESCROW', 'CLEARING CORE'], sub: 'ISO 20022 Audit Trail' },
    'travel':          { nodes: ['TRAVELLER', 'GDS ENGINE', 'GLOBAL INVENTORY'], sub: 'Multi-Hospitality Router' },
    'automobile':      { nodes: ['TELEMATICS', 'FLEET ROUTER HUB', 'EV CHARGING GRID'], sub: 'GPS Active Tracking' },
    'ai-saas':         { nodes: ['USER API QUERY', 'COGNITIVE ORCHESTRATOR', 'VECTOR DB / ACTION'], sub: 'LLM Agent Reasoning' },
    'creator-economy': { nodes: ['SUBSCRIBER', 'MEDIA PAYWALL', 'CREATOR WALLET'], sub: 'Direct Subscription CDN' },
  };

  const cfg = configs[categoryId] || { nodes: ['DEMAND INGEST', 'ORCHESTRATOR', 'SERVICE NODES'], sub: 'Real-Time Routing' };
  const nodes = cfg.nodes;
  const n = nodes.length;
  const totalW = 520;
  const nodeW = 110;
  const nodeH = 44;
  const gap = (totalW - n * nodeW) / (n + 1);
  const cy = 100;

  return (
    <svg viewBox={`0 0 ${totalW} 200`} fill="none" className="w-full h-full">
      <defs>
        <marker id="arr2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 2 L 9 5 L 0 8 z" fill="#DC2626" />
        </marker>
      </defs>

      {nodes.map((label, i) => {
        const x = gap + i * (nodeW + gap);
        const isCore = i === Math.floor(n / 2) && n > 2 || (n === 2 && i === 1) || (n <= 2 && i === 0);
        const actuallyCore = n >= 3 ? i === 1 : i === 0;
        return (
          <g key={i}>
            <rect
              x={x} y={cy - nodeH / 2}
              width={nodeW} height={nodeH}
              className={actuallyCore ? 'fill-black stroke-black stroke-2' : 'fill-white stroke-black stroke-[1.5]'}
            />
            <text
              x={x + nodeW / 2}
              y={cy + (cfg.sub && actuallyCore ? -4 : 3)}
              textAnchor="middle"
              className={`font-mono font-black text-[8px] ${actuallyCore ? 'fill-white' : 'fill-black'}`}
              fontSize="8"
              fontWeight="900"
              fontFamily="monospace"
              fill={actuallyCore ? '#ffffff' : '#000000'}
            >
              {label}
            </text>
            {cfg.sub && actuallyCore && (
              <text x={x + nodeW / 2} y={cy + 9} textAnchor="middle" fontSize="6.5" fontFamily="monospace" fill="#DC2626" fontWeight="700">
                {cfg.sub}
              </text>
            )}
          </g>
        );
      })}

      {nodes.slice(0, -1).map((_, i) => {
        const x1 = gap + i * (nodeW + gap) + nodeW;
        const x2 = gap + (i + 1) * (nodeW + gap);
        return (
          <g key={i}>
            <line x1={x1} y1={cy} x2={x2} y2={cy} stroke="#DC2626" strokeWidth="1.5" markerEnd="url(#arr2)" />
            <circle r="3" fill="#DC2626">
              <animateMotion dur={`${2 - i * 0.3}s`} repeatCount="indefinite" path={`M ${x1} ${cy} L ${x2} ${cy}`} />
            </circle>
          </g>
        );
      })}
    </svg>
  );
}

const SPEC_CONFIG = [
  { key: 'howItWorks',   label: 'How It Works',   Icon: Lightbulb,   accent: '#FFE500' },
  { key: 'revenueModel', label: 'Revenue Model',   Icon: TrendingUp,  accent: '#DC2626' },
  { key: 'techStack',    label: 'Tech Stack',      Icon: Code2,       accent: '#0A0A0A' },
  { key: 'suitableFor',  label: 'Best Suited For', Icon: Target,      accent: '#0A0A0A' },
];

export default function ModelDetail({ model, category }) {
  return (
    <section className="relative py-16 bg-[#FAFAF8]">
      <Container className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="space-y-10"
        >

          {/* ── HEADER ── */}
          <div className="border-b-2 border-black pb-8 space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 bg-[#FFE500] text-black font-mono text-[10px] font-black border-2 border-black uppercase tracking-widest shadow-[2px_2px_0_#0A0A0A]">
                {category.name}
              </span>
              {model.example && (
                <span className="px-3 py-1 bg-white text-gray-500 font-mono text-[10px] border-2 border-black uppercase tracking-widest">
                  e.g. {model.example}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-black leading-[0.95] tracking-tight">
              {model.name}
            </h1>

            <p className="text-base text-gray-700 leading-relaxed max-w-2xl">
              {model.desc}
            </p>
          </div>

          {/* ── FLOW DIAGRAM ── */}
          <div className="border-2 border-black shadow-[4px_4px_0_#0A0A0A] bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3 border-b-2 border-black bg-[#FAFAF8]">
              <Workflow className="w-3.5 h-3.5 text-[#DC2626]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-widest text-black">System Flow</span>
              <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] text-gray-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse inline-block" />
                Live
              </span>
            </div>
            <div className="relative h-52 bg-[#FAFAF8]">
              <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] bg-size-[18px_18px] opacity-30 pointer-events-none" />
              <div className="relative w-full h-full p-3 flex items-center">
                <RenderCategoryDiagram categoryId={category.id} />
              </div>
            </div>
          </div>

          {/* ── SPEC CARDS ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SPEC_CONFIG.map(({ key, label, Icon, accent }) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white border-2 border-black shadow-[4px_4px_0_#0A0A0A] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#0A0A0A] transition-all duration-100 flex flex-col"
              >
                {/* Card header */}
                <div
                  className="flex items-center gap-2.5 px-5 py-3 border-b-2 border-black"
                  style={{ background: accent === '#FFE500' ? '#FFE500' : accent === '#DC2626' ? '#DC2626' : '#0A0A0A' }}
                >
                  <Icon
                    className="w-4 h-4 shrink-0"
                    style={{ color: accent === '#FFE500' ? '#0A0A0A' : '#ffffff' }}
                  />
                  <span
                    className="font-black text-[11px] uppercase tracking-widest"
                    style={{ color: accent === '#FFE500' ? '#0A0A0A' : '#ffffff' }}
                  >
                    {label}
                  </span>
                </div>

                {/* Card body */}
                <div className="px-5 py-5 flex-1">
                  <p className="text-sm text-gray-800 leading-relaxed">
                    {model[key]}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── ACTIONS ── */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-black">
            <Link
              href={`/business-model/${category.id}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black bg-white text-black font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_#0A0A0A] hover:shadow-[2px_2px_0_#0A0A0A] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to {category.name}
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-black bg-black text-white font-mono text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0_#444] hover:shadow-[2px_2px_0_#444] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
            >
              Build This Model
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </motion.div>
      </Container>
    </section>
  );
}
