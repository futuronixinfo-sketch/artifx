'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { processSteps } from '@/data/home';
import { 
  Play, Pause, Terminal, CheckCircle2
} from 'lucide-react';

// Custom compact interactive SVG for Discovery Scanner (Step 01)
function DiscoverySVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="procGridLight1" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#procGridLight1)" />

      {/* Scattered unstructured data nodes */}
      <circle cx="60" cy="40" r="4" fill="#ef4444" opacity="0.3" />
      <circle cx="70" cy="110" r="4" fill="#ef4444" opacity="0.3" />
      <circle cx="240" cy="35" r="4" fill="#ef4444" opacity="0.3" />
      <circle cx="260" cy="105" r="4" fill="#ef4444" opacity="0.3" />
      
      {/* Visual scans */}
      <circle cx="60" cy="40" r="8" fill="none" stroke="#ef4444" strokeWidth="0.8" opacity="0.2" className="animate-pulse" />
      <circle cx="260" cy="105" r="8" fill="none" stroke="#ef4444" strokeWidth="0.8" opacity="0.2" className="animate-pulse" />

      {/* Sweeping technical radar sweep line */}
      <motion.line
        x1="160"
        y1="80"
        x2="280"
        y2="80"
        stroke="#ef4444"
        strokeWidth="1.2"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 80px" }}
      />

      {/* Technical radar concentric scanning circles */}
      <circle cx="160" cy="80" r="30" fill="none" stroke="rgba(239, 68, 68, 0.15)" strokeWidth="1" />
      <circle cx="160" cy="80" r="55" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="0.8" strokeDasharray="4 4" />
      <circle cx="160" cy="80" r="3" fill="#ef4444" />
      <text x="120" y="145" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" fontWeight="bold">SCANNING_BOTTLENECK_RADAR</text>
    </svg>
  );
}

// Custom compact interactive SVG for System Architecture (Step 02)
function ArchitectureSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="procGridLight2" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#procGridLight2)" />

      {/* Grid cells locking paths */}
      <g stroke="rgba(239, 68, 68, 0.12)" strokeWidth="1.2" strokeDasharray="3 3">
        <path d="M 50,40 L 160,80" />
        <path d="M 50,80 L 160,80" />
        <path d="M 50,120 L 160,80" />
        <path d="M 160,80 L 270,40" />
        <path d="M 160,80 L 270,80" />
        <path d="M 160,80 L 270,120" />
      </g>

      <motion.circle
        r={2}
        fill="#ef4444"
        animate={{ cx: [50, 160], cy: [40, 80] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
      />
      <motion.circle
        r={2}
        fill="#ef4444"
        animate={{ cx: [160, 270], cy: [80, 120] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.9 }}
      />

      {/* Unified node blocks */}
      <rect x="38" y="28" width="24" height="24" rx="4" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <text x="44" y="44" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">IN</text>

      <rect x="146" y="66" width="28" height="28" rx="5" fill="#ef4444" opacity="0.08" />
      <rect x="146" y="66" width="28" height="28" rx="5" fill="none" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="160" cy="80" r="3" fill="#ef4444" />

      <rect x="258" y="108" width="24" height="24" rx="4" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <text x="262" y="124" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">OUT</text>
      <text x="110" y="145" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" fontWeight="bold">SCHEMATIC_NODE_MAPPED_OK</text>
    </svg>
  );
}

// Custom compact interactive SVG for Build & Iterate (Step 03)
function BuildIterateSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="procGridLight3" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#procGridLight3)" />

      {/* Rotating sprint iterative gear wheel */}
      <motion.circle
        cx="160"
        cy="70"
        r="38"
        fill="none"
        stroke="rgba(239, 68, 68, 0.15)"
        strokeWidth="1.2"
        strokeDasharray="8 12"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 70px" }}
      />
      <motion.circle
        cx="160"
        cy="70"
        r="28"
        fill="none"
        stroke="rgba(239, 68, 68, 0.35)"
        strokeWidth="1"
        strokeDasharray="4 6"
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "160px 70px" }}
      />

      {/* Iterative circular flow signals */}
      <circle cx="160" cy="70" r="14" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="160" cy="70" r="4" fill="#ef4444" />
      
      {/* Test verification indicators */}
      <g stroke="#10b981" strokeWidth="1" fill="none">
        <circle cx="70" cy="40" r="6" fill="#fff" stroke="#10b981" />
        <path d="M 68,40 L 70,42 L 73,38" stroke="#10b981" />
        <circle cx="250" cy="100" r="6" fill="#fff" stroke="#10b981" />
        <path d="M 248,100 L 250,102 L 253,98" stroke="#10b981" />
      </g>
      <text x="50" y="55" fill="#10b981" fontSize="6.5" fontFamily="monospace">UNIT_TEST: OK</text>
      <text x="228" y="115" fill="#10b981" fontSize="6.5" fontFamily="monospace">INTEG_TEST: OK</text>
      <text x="115" y="145" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" fontWeight="bold">AGILE_BUILD_SPRINT_LOOPS</text>
    </svg>
  );
}

// Custom compact interactive SVG for Launch & Scale (Step 04)
function LaunchScaleSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <defs>
        <pattern id="procGridLight4" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M 16 0 L 0 0 0 16" fill="none" stroke="rgba(0, 0, 0, 0.02)" strokeWidth="0.75" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#procGridLight4)" />

      {/* Global network waves mapping sonar arcs */}
      <motion.circle
        cx="160"
        cy="70"
        r="10"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1"
        animate={{ r: [10, 68], opacity: [1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
      />
      <motion.circle
        cx="160"
        cy="70"
        r="10"
        fill="none"
        stroke="#ef4444"
        strokeWidth="1.2"
        animate={{ r: [10, 68], opacity: [1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
      />

      {/* Global Edge nodes */}
      <circle cx="160" cy="70" r="10" fill="#fff" stroke="#ef4444" strokeWidth="1.5" />
      <circle cx="160" cy="70" r="4" fill="#ef4444" />

      <circle cx="70" cy="35" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="70" cy="35" r="2" fill="#ef4444" />

      <circle cx="260" cy="40" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="260" cy="40" r="2" fill="#ef4444" />

      <circle cx="90" cy="105" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="90" cy="105" r="2" fill="#ef4444" />

      <circle cx="240" cy="100" r="5" fill="#fff" stroke="#ef4444" strokeWidth="1" />
      <circle cx="240" cy="100" r="2" fill="#ef4444" />

      <text x="110" y="145" fill="rgba(0,0,0,0.3)" fontSize="7" fontFamily="monospace" fontWeight="bold">GLOBAL_EDGE_DISTRIBUTIONS</text>
    </svg>
  );
}

// Extra process details config payload for eye-friendly console presentation
const extraProcessDetails = [
  {
    codeName: 'OPERATION: DISCOVERY // WORKFLOW_SCAN',
    checklist: [
      '360° Operations & Manual Bottleneck Audit',
      'System Friction & Operational Loss Index Calculations',
      'Unified Business Requirement Specification Document'
    ],
    logs: [
      `[INIT] Scanning current manual pipelines...`,
      `[DISCO] Detected 4 standalone sheets and disconnected CRM records.`,
      `[DISCO] WhatsApp lead latency calculated at 4.2 hours average.`,
      `[COMPLETED] Discovery map generated. Reference spec: DISCO_V1.json.`
    ]
  },
  {
    codeName: 'OPERATION: ARCHITECTURE // SCHEMATIC_LAYOUT',
    checklist: [
      'Relational PostgreSQL / SQL Database Schema Modeling',
      'Custom API Endpoints & Multi-Model Ingestion Maps',
      'High-Contrast Figma Design Wireframe Prototyping'
    ],
    logs: [
      `[ARCH] Modelling unified relational databases...`,
      `[ARCH] Configuring secure API routing: WhatsApp Inbound ➔ AI.`,
      `[ARCH] High-fidelity Figma screen layouts approved.`,
      `[COMPLETED] Operations core blueprint locked. Ready for sprint.`
    ]
  },
  {
    codeName: 'OPERATION: BUILD_CYCLE // SPRINT_ENGINE',
    checklist: [
      'Next.js High-Performance Frontend & Backend Engineering',
      'API Middleware, Webhook Interceptors & Pipeline Wiring',
      'Bi-Weekly Staging Handovers & Client Feedback Gates'
    ],
    logs: [
      `[BUILD] Starting Sprint 01: building Next.js secure auth routers.`,
      `[BUILD] Injecting mock relational seed records (10,000 entities).`,
      `[TEST] Checksum tests: PASS. Latency checks: 12.8ms.`,
      `[COMPLETED] Sprint 01 bundle deployed successfully to staging.`
    ]
  },
  {
    codeName: 'OPERATION: DEPLOYMENT // PROD_NODE_SCALE',
    checklist: [
      'Global Serverless Deployment to Vercel High-Speed Edge CDN',
      'Client Onboarding Portals & Administration Passkeys Handover',
      '24/7 Priority Support SLA & Real-Time Telemetry Monitors'
    ],
    logs: [
      `[LAUNCH] Initializing production deploy to global edge CDN...`,
      `[LAUNCH] SSL certs verified: secure. Key chains locked.`,
      `[SCALE] Running load stress simulation: 50,000 requests/sec.`,
      `[COMPLETED] Launch finalized: Artifx Core systems operational.`
    ]
  }
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Auto-play progression loop hook
  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 6000); // 6 seconds duration per step
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const combinedSteps = processSteps.map((step, idx) => ({
    ...step,
    ...extraProcessDetails[idx]
  }));

  const activeStepDetails = combinedSteps[activeStep];

  return (
    <section className="relative py-32 bg-white border-t border-gray-100 overflow-hidden select-none">
      
      {/* Decorative vertical top grid helper */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-gray-200 to-transparent" />
      
      {/* Ambient Crimson Aura Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-50/80 border border-red-200 rounded-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-600">
              [ METHODOLOGY BLUEPRINT // PROCESS ]
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            How We <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-500">
              Engineer Systems.
            </span>
          </h2>
          
          <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed font-light font-mono">
            A proven methodology that takes your project from concept to launch with clarity and precision.
          </p>
        </div>

        {/* SYSTEM INTEGRATION PIPELINE COCKPIT - Elegant Eye-Friendly White Theme */}
        <div className="border border-gray-200/80 bg-gray-50/30 backdrop-blur-sm text-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between shadow-lg shadow-gray-100/50">
          
          {/* Internal CAD Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />
          
          {/* Ambient red glowing background blur */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-red-50/40 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* TOP HALF: Horizontal Progress Pipeline controller */}
          <div className="relative pb-8 border-b border-gray-200/60 z-10 w-full overflow-x-auto scrollbar-none">
            
            {/* Desktop progress track line */}
            <div className="hidden md:block absolute top-[18px] left-[10%] right-[10%] h-px bg-gray-200/80 z-0" />

            <div className="flex justify-between items-center min-w-[640px] md:min-w-0 px-4 z-10 relative">
              {combinedSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                return (
                  <button
                    key={step.number}
                    onClick={() => {
                      setActiveStep(idx);
                      setIsAutoplay(false); // Stop autoplay once user takes manual control keys
                    }}
                    className={`flex flex-col items-center gap-3 relative z-10 focus:outline-none transition-all duration-300 group ${
                      isActive ? 'scale-105' : 'opacity-40 hover:opacity-80'
                    }`}
                  >
                    {/* Node step circle */}
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center font-mono text-xs font-bold transition-all duration-500 relative overflow-hidden ${
                      isActive
                        ? 'bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/20'
                        : 'bg-white border-gray-200 text-gray-400 group-hover:border-gray-300'
                    }`}>
                      {step.number}

                      {/* Hyper-premium ticking autoplay width progress line */}
                      {isActive && isAutoplay && (
                        <motion.div
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 6, ease: 'linear' }}
                          className="absolute bottom-0 left-0 h-[2px] bg-white"
                        />
                      )}
                    </div>

                    {/* Step Title Label */}
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isActive ? 'text-black' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* BOTTOM HALF: Split Details & Simulator Screen */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8 relative z-10">
            
            {/* Left Column: Specifications Checklist & Code Log Terminal (lg:col-span-7) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              
              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2 py-0.5 rounded bg-red-50 text-red-600 font-mono text-[8px] font-bold border border-red-100 uppercase">
                    {activeStepDetails.codeName}
                  </span>
                  
                  {/* Play/Pause Autoplay manual controllers */}
                  <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-500 hover:text-black font-mono text-[8px] tracking-widest uppercase transition-colors shadow-sm"
                  >
                    {isAutoplay ? (
                      <>
                        <Pause className="w-2.5 h-2.5 text-red-500" />
                        Autoplay: ON
                      </>
                    ) : (
                      <>
                        <Play className="w-2.5 h-2.5 text-green-500" />
                        Autoplay: OFF
                      </>
                    )}
                  </button>
                </div>
                
                <h4 className="text-xl md:text-2xl font-bold uppercase text-black tracking-tight">
                  {activeStepDetails.title}
                </h4>
                <p className="text-xs text-gray-600 font-light leading-relaxed mt-2 max-w-xl font-sans">
                  {activeStepDetails.description}
                </p>
              </div>

              {/* Technical Specifications checklist deliverables */}
              <div className="space-y-2 border-t border-gray-200/60 pt-4">
                <span className="text-[8px] font-mono text-gray-400 uppercase tracking-widest block mb-2">Technical Deliverables Checklist</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeStepDetails.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[11px] text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span className="font-light leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Engineer CLI logs inside premium soft white panel */}
              <div className="bg-white border border-gray-200/80 p-3.5 rounded-xl font-mono text-[9px] text-red-600 flex gap-2.5 items-start h-[100px] relative overflow-hidden shadow-inner">
                <div className="absolute top-2 right-3 text-[7px] text-gray-400 uppercase tracking-wider font-bold select-none">Engine Console</div>
                <Terminal className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="flex-1 flex flex-col justify-end h-full space-y-1 select-text">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-1"
                    >
                      {activeStepDetails.logs.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-1 leading-relaxed">
                          <span className="text-red-600 font-bold">&gt;</span>
                          <span className="text-gray-600">{log.includes('[COMPLETED]') || log.includes('[INIT]') || log.includes('[TEST]') ? <span className="text-red-600 font-bold">{log}</span> : log}</span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Right Column: Immersive CAD Simulator monitor screen (lg:col-span-5) */}
            <div className="lg:col-span-5 border border-gray-200/60 bg-white p-4 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden min-h-[220px] shadow-sm">
              <div className="absolute top-2.5 left-3 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[7px] font-mono text-gray-400 uppercase tracking-widest">
                  SYS_SIMULATOR // PHASE_0{activeStep + 1}
                </span>
              </div>
              <div className="absolute top-2 right-3 text-[6px] font-mono text-gray-400">RENDER: ACTIVE</div>
              
              <div className="w-full h-full flex items-center justify-center py-4 bg-gray-50/50 rounded-xl border border-gray-100 shadow-inner">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    {activeStep === 0 && <DiscoverySVG />}
                    {activeStep === 1 && <ArchitectureSVG />}
                    {activeStep === 2 && <BuildIterateSVG />}
                    {activeStep === 3 && <LaunchScaleSVG />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Sonar status readouts */}
              <div className="w-full border-t border-gray-200/60 pt-2 flex justify-between items-center text-[7px] font-mono text-gray-400 uppercase">
                <span>SIMULATION TARGET: STAGE_0{activeStep + 1}</span>
                <span className="text-red-500 animate-pulse">● STREAMING TELEMETRY</span>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
