'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import { whyArtifx } from '@/data/home';
import { 
  Cpu, Zap, Shield, TrendingUp, Terminal
} from 'lucide-react';

// Custom compact interactive SVG blueprint for Card 1: System-First Architecture
function SystemFirstSVG({ isHovered }) {
  const duration = isHovered ? 0.6 : 2;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="bentoGridLight1" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bentoGridLight1)" />

      {/* Synchronized Circuit paths */}
      <g stroke={isHovered ? "rgba(239, 68, 68, 0.25)" : "rgba(239, 68, 68, 0.1)"} strokeWidth="1.2" strokeDasharray="3 3" className="transition-colors duration-500">
        <path d="M 40,30 L 160,60" />
        <path d="M 40,60 L 160,60" />
        <path d="M 40,90 L 160,60" />
        <path d="M 160,60 L 280,30" />
        <path d="M 160,60 L 280,60" />
        <path d="M 160,60 L 280,90" />
      </g>

      {/* Moving active data signals */}
      <motion.circle
        r={2}
        fill={isHovered ? "#ef4444" : "#dc2626"}
        animate={{ cx: [40, 160], cy: [30, 60] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        r={2}
        fill={isHovered ? "#ef4444" : "#dc2626"}
        animate={{ cx: [40, 160], cy: [90, 60] }}
        transition={{ duration: duration * 0.8, repeat: Infinity, ease: "linear", delay: 0.3 }}
      />
      <motion.circle
        r={2}
        fill={isHovered ? "#ef4444" : "#dc2626"}
        animate={{ cx: [160, 280], cy: [60, 30] }}
        transition={{ duration: duration * 1.1, repeat: Infinity, ease: "linear", delay: 0.15 }}
      />
      <motion.circle
        r={2}
        fill={isHovered ? "#ef4444" : "#dc2626"}
        animate={{ cx: [160, 280], cy: [60, 90] }}
        transition={{ duration: duration * 0.9, repeat: Infinity, ease: "linear", delay: 0.45 }}
      />

      {/* Inputs */}
      <circle cx="40" cy="30" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="40" cy="60" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="40" cy="90" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />

      {/* Central Engine Core */}
      <motion.rect
        x="146"
        y="46"
        width="28"
        height="28"
        rx="6"
        fill="#fff"
        stroke="#ef4444"
        strokeWidth="1.2"
        animate={isHovered ? { scale: [1, 1.06, 1], strokeWidth: [1.2, 2.2, 1.2] } : {}}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="160" cy="60" r="3" fill="#ef4444" />

      {/* Outputs */}
      <circle cx="280" cy="30" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="280" cy="60" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="280" cy="90" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
    </svg>
  );
}

// Custom compact interactive SVG blueprint for Card 2: AI-Native From Day One
function AINativeSVG({ isHovered }) {
  const duration = isHovered ? 1.2 : 3;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="bentoGridLight2" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bentoGridLight2)" />

      {/* Neural lattice network */}
      <g stroke={isHovered ? "rgba(239, 68, 68, 0.2)" : "rgba(239, 68, 68, 0.06)"} strokeWidth="0.8" className="transition-colors duration-500">
        <line x1="160" y1="60" x2="60" y2="25" />
        <line x1="160" y1="60" x2="80" y2="95" />
        <line x1="160" y1="60" x2="240" y2="25" />
        <line x1="160" y1="60" x2="260" y2="95" />
        <line x1="160" y1="60" x2="160" y2="15" />
        <line x1="160" y1="60" x2="160" y2="105" />

        <line x1="60" y1="25" x2="160" y2="15" />
        <line x1="160" y1="15" x2="240" y2="25" />
        <line x1="240" y1="25" x2="260" y2="95" />
        <line x1="260" y1="95" x2="160" y2="105" />
        <line x1="160" y1="105" x2="80" y2="95" />
        <line x1="80" y1="95" x2="60" y2="25" />
      </g>

      {/* Synaptic pulses */}
      <motion.circle
        r="1.8"
        fill="#ef4444"
        animate={{ cx: [160, 60, 160], cy: [60, 25, 60] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        r="1.8"
        fill="#ef4444"
        animate={{ cx: [160, 260, 160], cy: [60, 95, 60] }}
        transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Matrix Nodes */}
      <circle cx="60" cy="25" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />
      <circle cx="80" cy="95" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />
      <circle cx="240" cy="25" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />
      <circle cx="260" cy="95" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />
      <circle cx="160" cy="15" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />
      <circle cx="160" cy="105" r="3" fill="#fff" stroke="#ef4444" strokeWidth="0.8" />

      {/* Pulse cognitive brain center core */}
      <motion.circle
        cx="160"
        cy="60"
        r="13"
        fill="#fff"
        stroke="#ef4444"
        strokeWidth="1.2"
        animate={isHovered ? { r: [13, 16, 13] } : { r: [13, 15, 13] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="160"
        cy="60"
        r="20"
        fill="none"
        stroke="rgba(239, 68, 68, 0.15)"
        strokeWidth="0.7"
        animate={isHovered ? { r: [20, 25, 20] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="160" cy="60" r="5" fill="#ef4444" opacity="0.1" />
    </svg>
  );
}

// Custom compact interactive SVG blueprint for Card 3: Enterprise-Grade Security
function SecuritySVG({ isHovered }) {
  const duration = isHovered ? 4 : 10;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="bentoGridLight3" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bentoGridLight3)" />

      {/* Rotating concentric protection rings */}
      <motion.circle
        cx="160"
        cy="60"
        r="38"
        fill="none"
        stroke="rgba(239, 68, 68, 0.15)"
        strokeWidth="0.8"
        strokeDasharray="6 8"
        animate={{ rotate: 360 }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 60px" }}
      />
      <motion.circle
        cx="160"
        cy="60"
        r="28"
        fill="none"
        stroke="rgba(239, 68, 68, 0.35)"
        strokeWidth="1"
        strokeDasharray="3 5"
        animate={{ rotate: -360 }}
        transition={{ duration: duration * 0.6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 60px" }}
      />

      {/* Threat packets blocked */}
      <motion.circle
        r="1.8"
        fill="#ef4444"
        animate={{
          cx: [20, 122, 122],
          cy: [60, 60, 60],
          opacity: [1, 1, 0]
        }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeIn" }}
      />
      <motion.circle
        cx="122"
        cy="60"
        r="1"
        fill="none"
        stroke="#ef4444"
        animate={{ r: [1, 7], opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "easeOut" }}
      />

      {/* Cryptographic Core Shield */}
      <polygon
        points="160,38 176,44 176,68 160,80 144,68 144,44"
        fill="#fff"
        stroke={isHovered ? "#ef4444" : "rgba(239, 68, 68, 0.75)"}
        strokeWidth="1.2"
        className="transition-colors duration-300"
      />
      <polygon
        points="160,42 171,46 171,65 160,75 149,65 149,46"
        fill="#ef4444"
        opacity="0.1"
      />
    </svg>
  );
}

// Custom compact interactive SVG blueprint for Card 4: Scalable Foundation
function ScalableSVG({ isHovered }) {
  const blinkDuration = isHovered ? 0.3 : 1.2;
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="bentoGridLight4" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bentoGridLight4)" />

      {/* Server Pod Clusters stacked horizontally */}
      {/* Pod Stack 1 */}
      <rect x="40" y="24" width="240" height="18" rx="4" fill="#fff" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1" />
      <motion.circle
        cx="52"
        cy="33"
        r="2.5"
        fill="#ef4444"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: blinkDuration, repeat: Infinity }}
      />
      <text x="66" y="35" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_US_EAST_01</text>
      <text x="216" y="35" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.9% OK' : '99.4% OK'}</text>

      {/* Pod Stack 2 */}
      <rect x="40" y="51" width="240" height="18" rx="4" fill="#fff" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1" />
      <motion.circle
        cx="52"
        cy="60"
        r="2.5"
        fill="#ef4444"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: blinkDuration * 0.85, repeat: Infinity, delay: 0.2 }}
      />
      <text x="66" y="62" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_EU_CENT_02</text>
      <text x="216" y="62" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.9% OK' : '99.6% OK'}</text>

      {/* Pod Stack 3 */}
      <rect x="40" y="78" width="240" height="18" rx="4" fill="#fff" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1" />
      <motion.circle
        cx="52"
        cy="87"
        r="2.5"
        fill="#ef4444"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: blinkDuration * 1.15, repeat: Infinity, delay: 0.45 }}
      />
      <text x="66" y="89" fill="#000" fontSize="5.5" fontFamily="monospace">NODE_AP_SOUTH_03</text>
      <text x="216" y="89" fill="#ef4444" fontSize="5.5" fontFamily="monospace" fontWeight="bold">{isHovered ? '99.8% OK' : '98.9% OK'}</text>

      {/* Scaling cluster flow waves */}
      <motion.g
        stroke="#ef4444"
        strokeWidth="0.8"
        animate={isHovered ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.4 }}
        transition={{ duration: 1, repeat: Infinity }}
      >
        <path d="M 160,6 L 160,16 M 160,16 L 157,13 M 160,16 L 163,13" />
        <path d="M 160,114 L 160,104 M 160,104 L 157,107 M 160,104 L 163,107" />
      </motion.g>
    </svg>
  );
}

// Custom metadata configuration for the Bento Grid dashboard items
const bentoExtraData = [
  {
    status: 'SYNCHRONIZED',
    efficiency: '+45% SPEED',
    metrics: [
      { label: 'CORES', val: '300+ SYSTEMS' },
      { label: 'LATENCY', val: '< 2.4ms' }
    ]
  },
  {
    status: 'INTELLIGENT',
    efficiency: '92% AUTO-RATE',
    metrics: [
      { label: 'ENGINES', val: '12+ CORES' },
      { label: 'CONTEXT', val: '1M+ TOKENS' }
    ]
  },
  {
    status: 'ARMORED',
    efficiency: '0.00% BREACH',
    metrics: [
      { label: 'COMPLIANCE', val: 'SOC2 Ready' },
      { label: 'ENCRYPTION', val: 'AES-256' }
    ]
  },
  {
    status: 'ELASTIC',
    efficiency: '50x CAPACITY',
    metrics: [
      { label: 'ENGINE', val: 'EDGE CORES' },
      { label: 'DEPLOY', val: '< 4.5 sec' }
    ]
  }
];

export default function WhyArtifx() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const combinedBenefits = whyArtifx.benefits.map((benefit, idx) => ({
    ...benefit,
    ...bentoExtraData[idx]
  }));

  return (
    <section className="relative py-32 bg-white border-t border-gray-100 overflow-hidden select-none">
      
      {/* Decorative vertical top grid helper */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />
      
      {/* Ambient Crimson Aura Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
              [ SYSTEMS INTEGRITY ADVANTAGE // WHY US ]
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            {whyArtifx.title} <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              {whyArtifx.titleHighlight}
            </span>
          </h2>
          
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed font-light font-mono">
            /* {whyArtifx.subtitle} */
          </p>
        </div>

        {/* 2X2 BENTO GRID MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {combinedBenefits.map((benefit, idx) => {
            const isHovered = hoveredIndex === idx;
            const icons = [Cpu, Zap, Shield, TrendingUp];
            const Icon = icons[idx] || Cpu;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl p-6 md:p-8 bg-white border border-gray-200/80 transition-all duration-500 flex flex-col justify-between min-h-[380px] hover:border-black hover:shadow-2xl hover:shadow-black/5 hover:scale-[1.01]"
              >
                {/* Header content inside the card */}
                <div className="space-y-4">
                  
                  {/* Card Index & Identifier */}
                  <div className="flex justify-between items-center w-full">
                    <span className="text-[9px] font-mono text-red-600 font-bold uppercase tracking-widest">
                      [ NODE_0{idx + 1} // {benefit.status} ]
                    </span>
                    <span className="text-[10px] font-mono text-gray-300 font-bold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Icon & Title row */}
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center border border-gray-200 bg-gray-50 text-gray-400 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-600 transition-colors duration-500 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold uppercase text-black tracking-tight">
                        {benefit.title}
                      </h3>
                    </div>

                    {/* Highly responsive visual rate indicator tag */}
                    <div className="px-2.5 py-1 rounded-full bg-red-50 border border-red-100 shrink-0">
                      <span className="text-[9px] font-mono font-bold text-red-600 uppercase tracking-wider">
                        {benefit.efficiency}
                      </span>
                    </div>
                  </div>

                  {/* Benefit details */}
                  <p className="text-xs text-gray-500 leading-relaxed font-light font-sans group-hover:text-gray-700 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* SVG Visualizer Console HUD Monitor - Elegant Eye-Friendly White Theme */}
                <div className="border border-gray-200/80 bg-gray-50/30 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-between min-h-[160px] relative overflow-hidden mt-6 shadow-sm select-none">
                  
                  {/* Embedded CAD Matrix Grid lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:16px_16px] opacity-40 pointer-events-none" />
                  
                  {/* Monitor header bar */}
                  <div className="flex justify-between items-center border-b border-gray-200/60 pb-2 mb-2 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-red-500 animate-pulse' : 'bg-red-200'}`} />
                      <span className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">
                        {isHovered ? 'DIAGNOSTIC_EXECUTION: STREAMING' : 'SYS_IDLE: STANDBY'}
                      </span>
                    </div>
                    <span className="text-[6px] font-mono text-gray-400 font-bold">SYS_VIEW_0{idx + 1}</span>
                  </div>

                  {/* Render the specific dynamic visualizer blueprint inside white frame */}
                  <div className="w-full flex-1 flex items-center justify-center relative z-10 py-1 bg-white rounded-xl border border-gray-100 shadow-inner">
                    {idx === 0 && <SystemFirstSVG isHovered={isHovered} />}
                    {idx === 1 && <AINativeSVG isHovered={isHovered} />}
                    {idx === 2 && <SecuritySVG isHovered={isHovered} />}
                    {idx === 3 && <ScalableSVG isHovered={isHovered} />}
                  </div>

                  {/* Monitor telemetry stats footer */}
                  <div className="mt-2 pt-2 border-t border-gray-200/60 flex justify-between items-center text-[7px] font-mono text-gray-400 relative z-10 uppercase">
                    <span>
                      {benefit.metrics[0].label}: <span className="text-zinc-800 font-bold">{benefit.metrics[0].val}</span> | {benefit.metrics[1].label}: <span className="text-zinc-800 font-bold">{benefit.metrics[1].val}</span>
                    </span>
                    <span className={`font-bold transition-colors ${isHovered ? 'text-red-500' : 'text-gray-400'}`}>
                      {isHovered ? '» SYSTEM SPEED BOOSTED' : '» HOVER TO CONNECT'}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Premium Executive Briefing Memo Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 border border-gray-200 bg-gray-50/50 p-6 md:p-8 rounded-3xl relative overflow-hidden max-w-3xl mx-auto"
        >
          <div className="absolute top-0 right-0 text-[6px] font-mono text-gray-300 p-2 select-none">MEMO_REF: ARTIFX_DIRECTIVE_01</div>
          <div className="flex flex-col md:flex-row items-center gap-6 justify-between text-left">
            <div className="space-y-2">
              <div className="text-[8px] font-mono text-red-600 uppercase tracking-widest font-bold">[ EXECUTIVE DIRECTIVE ]</div>
              <p className="text-xs md:text-sm text-gray-700 italic leading-relaxed font-serif">
                &quot;We don&apos;t just build websites — we engineer complete operational systems that transform how companies work.&quot;
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start md:items-end border-l md:border-l-0 md:border-r border-red-200 pl-4 md:pl-0 md:pr-4 py-1">
              <span className="text-[10px] font-mono font-bold uppercase text-black">Artifx Systems</span>
              <span className="text-[8px] font-mono text-red-600 uppercase tracking-wider">Operational Core</span>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
