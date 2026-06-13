'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whyArtifx } from '@/data/home';
import { Cpu, Zap, Shield, TrendingUp } from 'lucide-react';

function SystemFirstSVG({ isHovered }) {
  const duration = isHovered ? 0.6 : 2;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <g stroke={isHovered ? "rgba(239, 68, 68, 0.5)" : "rgba(239, 68, 68, 0.2)"} strokeWidth="1.2" strokeDasharray="3 3" className="transition-colors duration-300">
        <path d="M 40,30 L 160,60" />
        <path d="M 40,60 L 160,60" />
        <path d="M 40,90 L 160,60" />
        <path d="M 160,60 L 280,30" />
        <path d="M 160,60 L 280,60" />
        <path d="M 160,60 L 280,90" />
      </g>
      <motion.circle r={2} fill={isHovered ? "#ef4444" : "#dc2626"} animate={{ cx: [40, 160], cy: [30, 60] }} transition={{ duration, repeat: Infinity, ease: "linear" }} />
      <motion.circle r={2} fill={isHovered ? "#ef4444" : "#dc2626"} animate={{ cx: [40, 160], cy: [90, 60] }} transition={{ duration: duration * 0.8, repeat: Infinity, ease: "linear", delay: 0.3 }} />
      <motion.circle r={2} fill={isHovered ? "#ef4444" : "#dc2626"} animate={{ cx: [160, 280], cy: [60, 30] }} transition={{ duration: duration * 1.1, repeat: Infinity, ease: "linear", delay: 0.15 }} />
      <motion.circle r={2} fill={isHovered ? "#ef4444" : "#dc2626"} animate={{ cx: [160, 280], cy: [60, 90] }} transition={{ duration: duration * 0.9, repeat: Infinity, ease: "linear", delay: 0.45 }} />
      <circle cx="40" cy="30" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="40" cy="60" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="40" cy="90" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
      <motion.rect x="146" y="46" width="28" height="28" fill="#fff" stroke="#0A0A0A" strokeWidth="2" animate={isHovered ? { scale: [1, 1.06, 1] } : {}} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="160" cy="60" r="3" fill="#ef4444" />
      <circle cx="280" cy="30" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="280" cy="60" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="280" cy="90" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="1.5" />
    </svg>
  );
}

function AINativeSVG({ isHovered }) {
  const duration = isHovered ? 1.2 : 3;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <g stroke={isHovered ? "rgba(239, 68, 68, 0.4)" : "rgba(239, 68, 68, 0.1)"} strokeWidth="0.8" className="transition-colors duration-300">
        <line x1="160" y1="60" x2="60" y2="25" /><line x1="160" y1="60" x2="80" y2="95" />
        <line x1="160" y1="60" x2="240" y2="25" /><line x1="160" y1="60" x2="260" y2="95" />
        <line x1="160" y1="60" x2="160" y2="15" /><line x1="160" y1="60" x2="160" y2="105" />
        <line x1="60" y1="25" x2="160" y2="15" /><line x1="160" y1="15" x2="240" y2="25" />
        <line x1="240" y1="25" x2="260" y2="95" /><line x1="260" y1="95" x2="160" y2="105" />
        <line x1="160" y1="105" x2="80" y2="95" /><line x1="80" y1="95" x2="60" y2="25" />
      </g>
      <motion.circle r="1.8" fill="#ef4444" animate={{ cx: [160, 60, 160], cy: [60, 25, 60] }} transition={{ duration, repeat: Infinity, ease: "easeInOut" }} />
      <motion.circle r="1.8" fill="#ef4444" animate={{ cx: [160, 260, 160], cy: [60, 95, 60] }} transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }} />
      <circle cx="60" cy="25" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <circle cx="80" cy="95" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <circle cx="240" cy="25" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <circle cx="260" cy="95" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <circle cx="160" cy="15" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <circle cx="160" cy="105" r="3" fill="#fff" stroke="#0A0A0A" strokeWidth="1" />
      <motion.circle cx="160" cy="60" r="13" fill="#fff" stroke="#0A0A0A" strokeWidth="2" animate={isHovered ? { r: [13, 16, 13] } : { r: [13, 15, 13] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
      <circle cx="160" cy="60" r="5" fill="#ef4444" opacity="0.8" />
    </svg>
  );
}

function SecuritySVG({ isHovered }) {
  const duration = isHovered ? 4 : 10;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <motion.circle cx="160" cy="60" r="38" fill="none" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="6 8" animate={{ rotate: 360 }} transition={{ duration, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 60px" }} />
      <motion.circle cx="160" cy="60" r="28" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1.5" strokeDasharray="3 5" animate={{ rotate: -360 }} transition={{ duration: duration * 0.6, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 60px" }} />
      <motion.circle r="1.8" fill="#ef4444" animate={{ cx: [20, 122, 122], cy: [60, 60, 60], opacity: [1, 1, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }} />
      <polygon points="160,38 176,44 176,68 160,80 144,68 144,44" fill="#fff" stroke={isHovered ? "#0A0A0A" : "#0A0A0A"} strokeWidth="2" />
      <polygon points="160,42 171,46 171,65 160,75 149,65 149,46" fill="#ef4444" opacity="0.2" />
    </svg>
  );
}

function ScalableSVG({ isHovered }) {
  const blinkDuration = isHovered ? 0.3 : 1.2;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <rect x="40" y="24" width="240" height="18" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <motion.circle cx="52" cy="33" r="2.5" fill="#ef4444" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: blinkDuration, repeat: Infinity }} />
      <text x="66" y="35" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_US_EAST_01</text>
      <text x="216" y="35" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.9% OK' : '99.4% OK'}</text>
      <rect x="40" y="51" width="240" height="18" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <motion.circle cx="52" cy="60" r="2.5" fill="#ef4444" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: blinkDuration * 0.85, repeat: Infinity, delay: 0.2 }} />
      <text x="66" y="62" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_EU_CENT_02</text>
      <text x="216" y="62" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.9% OK' : '99.6% OK'}</text>
      <rect x="40" y="78" width="240" height="18" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <motion.circle cx="52" cy="87" r="2.5" fill="#ef4444" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: blinkDuration * 1.15, repeat: Infinity, delay: 0.45 }} />
      <text x="66" y="89" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_AP_SOUTH_03</text>
      <text x="216" y="89" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.8% OK' : '98.9% OK'}</text>
    </svg>
  );
}

const bentoExtraData = [
  { status: 'SYNCHRONIZED', efficiency: '+45% SPEED', metrics: [{ label: 'CORES', val: 'CUSTOM SYS' }, { label: 'LATENCY', val: '< 2.4ms' }] },
  { status: 'INTELLIGENT', efficiency: '92% AUTO-RATE', metrics: [{ label: 'ENGINES', val: '12+ CORES' }, { label: 'CONTEXT', val: '1M+ TOKENS' }] },
  { status: 'ARMORED', efficiency: '0.00% BREACH', metrics: [{ label: 'COMPLIANCE', val: 'SOC2 Ready' }, { label: 'ENCRYPTION', val: 'AES-256' }] },
  { status: 'ELASTIC', efficiency: '50x CAPACITY', metrics: [{ label: 'ENGINE', val: 'EDGE CORES' }, { label: 'DEPLOY', val: '< 4.5 sec' }] }
];

const cardAccents = ['bg-[#FFE500]', 'bg-red-600', 'bg-black', 'bg-[#FFE500]'];
const cardAccentText = ['text-black', 'text-white', 'text-white', 'text-black'];

export default function WhyArtifx() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const combinedBenefits = whyArtifx.benefits.map((benefit, idx) => ({
    ...benefit,
    ...bentoExtraData[idx]
  }));

  return (
    <section className="relative py-24 bg-[#FAFAF8] border-t-2 border-black overflow-hidden select-none">

      <Container className="relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black text-[#FFE500] border-2 border-black shadow-[3px_3px_0_#DC2626]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-[#FFE500]"></span>
            </span>
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">
              [ SYSTEMS INTEGRITY ADVANTAGE // WHY US ]
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            {whyArtifx.title} <br />
            <span className="text-red-600 underline decoration-4 underline-offset-4">
              {whyArtifx.titleHighlight}
            </span>
          </h2>

          <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-mono">
            /* {whyArtifx.subtitle} */
          </p>
        </div>

        {/* 2X2 BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-2 border-black shadow-[6px_6px_0_#0A0A0A]">
          {combinedBenefits.map((benefit, idx) => {
            const isHovered = hoveredIndex === idx;
            const icons = [Cpu, Zap, Shield, TrendingUp];
            const Icon = icons[idx] || Cpu;
            const isRight = idx % 2 === 1;
            const isBottom = idx >= 2;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative p-6 md:p-8 bg-white flex flex-col justify-between min-h-96 transition-colors duration-100 hover:bg-[#FAFAF8] ${isRight ? 'border-l-2 border-black' : ''} ${isBottom ? 'border-t-2 border-black' : ''}`}
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center w-full">
                    <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-2 py-1 border-2 border-black ${cardAccents[idx]} ${cardAccentText[idx]}`}>
                      [ NODE_0{idx + 1} // {benefit.status} ]
                    </span>
                    <span className="text-[10px] font-mono text-gray-300 font-black">0{idx + 1}</span>
                  </div>

                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center border-2 border-black transition-colors duration-100 ${isHovered ? `${cardAccents[idx]} ${cardAccentText[idx]}` : 'bg-[#FAFAF8] text-black'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg md:text-xl font-black uppercase text-black tracking-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <div className={`px-2.5 py-1 border-2 border-black shrink-0 ${cardAccents[idx]}`}>
                      <span className={`text-[9px] font-mono font-black uppercase tracking-wider ${cardAccentText[idx]}`}>
                        {benefit.efficiency}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    {benefit.description}
                  </p>
                </div>

                {/* SVG Visualizer */}
                <div className="border-2 border-black bg-[#FAFAF8] p-4 flex flex-col justify-between min-h-40 relative overflow-hidden mt-6">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] opacity-30 pointer-events-none" />

                  <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-2 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-2 h-2 border border-black ${isHovered ? 'bg-red-500' : 'bg-gray-300'}`} />
                      <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                        {isHovered ? 'DIAGNOSTIC_EXECUTION: STREAMING' : 'SYS_IDLE: STANDBY'}
                      </span>
                    </div>
                    <span className="text-[6px] font-mono text-gray-400 font-bold">SYS_VIEW_0{idx + 1}</span>
                  </div>

                  <div className="w-full flex-1 flex items-center justify-center relative z-10 py-1 bg-white border-2 border-black">
                    {idx === 0 && <SystemFirstSVG isHovered={isHovered} />}
                    {idx === 1 && <AINativeSVG isHovered={isHovered} />}
                    {idx === 2 && <SecuritySVG isHovered={isHovered} />}
                    {idx === 3 && <ScalableSVG isHovered={isHovered} />}
                  </div>

                  <div className="mt-2 pt-2 border-t-2 border-black flex justify-between items-center text-[7px] font-mono text-gray-500 relative z-10 uppercase">
                    <span>
                      {benefit.metrics[0].label}: <span className="text-black font-black">{benefit.metrics[0].val}</span> | {benefit.metrics[1].label}: <span className="text-black font-black">{benefit.metrics[1].val}</span>
                    </span>
                    <span className={`font-black transition-colors ${isHovered ? 'text-red-600' : 'text-gray-400'}`}>
                      {isHovered ? '» ACTIVE' : '» HOVER'}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Quote block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 border-2 border-black bg-black p-6 md:p-8 relative overflow-hidden max-w-3xl mx-auto shadow-[6px_6px_0_#DC2626]"
        >
          <div className="absolute top-0 right-0 text-[6px] font-mono text-neutral-600 p-2 select-none">MEMO_REF: ARTIFX_DIRECTIVE_01</div>
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-left">
            <div className="space-y-2">
              <div className="text-[8px] font-mono text-[#FFE500] uppercase tracking-widest font-black">[ EXECUTIVE DIRECTIVE ]</div>
              <p className="text-xs md:text-sm text-gray-300 italic leading-relaxed font-serif">
                &quot;We don&apos;t just build websites — we engineer complete operational systems that transform how companies work.&quot;
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start md:items-end border-l md:border-l-0 md:border-r-2 border-neutral-700 pl-4 md:pl-0 md:pr-4 py-1">
              <span className="text-[10px] font-mono font-black uppercase text-white">Artifx Systems</span>
              <span className="text-[8px] font-mono text-[#FFE500] uppercase tracking-wider">Operational Core</span>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
