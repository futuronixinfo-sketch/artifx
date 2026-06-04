'use client';
import { useState, useEffect, Fragment } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import { processSteps } from '@/data/home';
import { Play, Pause, Terminal, CheckCircle2 } from 'lucide-react';

function DiscoverySVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <circle cx="60" cy="40" r="4" fill="#ef4444" opacity="0.5" />
      <circle cx="70" cy="110" r="4" fill="#ef4444" opacity="0.5" />
      <circle cx="240" cy="35" r="4" fill="#ef4444" opacity="0.5" />
      <circle cx="260" cy="105" r="4" fill="#ef4444" opacity="0.5" />
      <circle cx="60" cy="40" r="8" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3" className="animate-pulse" />
      <circle cx="260" cy="105" r="8" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.3" className="animate-pulse" />
      <motion.line x1="160" y1="80" x2="280" y2="80" stroke="#ef4444" strokeWidth="1.5" animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 80px" }} />
      <circle cx="160" cy="80" r="30" fill="none" stroke="#0A0A0A" strokeWidth="1.5" />
      <circle cx="160" cy="80" r="55" fill="none" stroke="#0A0A0A" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="160" cy="80" r="3" fill="#ef4444" />
      <text x="120" y="145" fill="rgba(0,0,0,0.4)" fontSize="7" fontFamily="monospace" fontWeight="bold">SCANNING_BOTTLENECK_RADAR</text>
    </svg>
  );
}

function ArchitectureSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <g stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1.2" strokeDasharray="3 3">
        <path d="M 50,40 L 160,80" /><path d="M 50,80 L 160,80" /><path d="M 50,120 L 160,80" />
        <path d="M 160,80 L 270,40" /><path d="M 160,80 L 270,80" /><path d="M 160,80 L 270,120" />
      </g>
      <motion.circle r={2} fill="#ef4444" animate={{ cx: [50, 160], cy: [40, 80] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} />
      <motion.circle r={2} fill="#ef4444" animate={{ cx: [160, 270], cy: [80, 120] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear", delay: 0.9 }} />
      <rect x="38" y="28" width="24" height="24" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <text x="44" y="44" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">IN</text>
      <rect x="146" y="66" width="28" height="28" fill="rgba(239, 68, 68, 0.1)" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="160" cy="80" r="3" fill="#ef4444" />
      <rect x="258" y="108" width="24" height="24" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <text x="262" y="124" fill="#ef4444" fontSize="8" fontFamily="monospace" fontWeight="bold">OUT</text>
      <text x="110" y="145" fill="rgba(0,0,0,0.4)" fontSize="7" fontFamily="monospace" fontWeight="bold">SCHEMATIC_NODE_MAPPED_OK</text>
    </svg>
  );
}

function BuildIterateSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <motion.circle cx="160" cy="70" r="38" fill="none" stroke="rgba(239, 68, 68, 0.25)" strokeWidth="1.5" strokeDasharray="8 12" animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 70px" }} />
      <motion.circle cx="160" cy="70" r="28" fill="none" stroke="rgba(239, 68, 68, 0.5)" strokeWidth="1" strokeDasharray="4 6" animate={{ rotate: -360 }} transition={{ duration: 7, repeat: Infinity, ease: "linear" }} style={{ transformOrigin: "160px 70px" }} />
      <circle cx="160" cy="70" r="14" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="160" cy="70" r="4" fill="#ef4444" />
      <g stroke="#10b981" strokeWidth="1.5" fill="none">
        <circle cx="70" cy="40" r="6" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
        <path d="M 68,40 L 70,42 L 73,38" stroke="#10b981" />
        <circle cx="250" cy="100" r="6" fill="#fff" stroke="#10b981" strokeWidth="1.5" />
        <path d="M 248,100 L 250,102 L 253,98" stroke="#10b981" />
      </g>
      <text x="50" y="55" fill="#10b981" fontSize="6.5" fontFamily="monospace" fontWeight="bold">UNIT_TEST: OK</text>
      <text x="228" y="115" fill="#10b981" fontSize="6.5" fontFamily="monospace" fontWeight="bold">INTEG: OK</text>
      <text x="115" y="145" fill="rgba(0,0,0,0.4)" fontSize="7" fontFamily="monospace" fontWeight="bold">AGILE_BUILD_SPRINT_LOOPS</text>
    </svg>
  );
}

function LaunchScaleSVG() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full select-none">
      <motion.circle cx="160" cy="70" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" animate={{ r: [10, 68], opacity: [1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }} />
      <motion.circle cx="160" cy="70" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" animate={{ r: [10, 68], opacity: [1, 0] }} transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }} />
      <circle cx="160" cy="70" r="10" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="160" cy="70" r="4" fill="#ef4444" />
      <circle cx="70" cy="35" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="260" cy="40" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="90" cy="105" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="240" cy="100" r="5" fill="#fff" stroke="#0A0A0A" strokeWidth="2" />
      <text x="110" y="145" fill="rgba(0,0,0,0.4)" fontSize="7" fontFamily="monospace" fontWeight="bold">GLOBAL_EDGE_DISTRIBUTIONS</text>
    </svg>
  );
}

const extraProcessDetails = [
  {
    codeName: 'OPERATION: DISCOVERY // WORKFLOW_SCAN',
    checklist: ['360° Operations & Manual Bottleneck Audit', 'System Friction & Operational Loss Index Calculations', 'Unified Business Requirement Specification Document'],
    logs: [`[INIT] Scanning current manual pipelines...`, `[DISCO] Detected 4 standalone sheets and disconnected CRM records.`, `[DISCO] WhatsApp lead latency calculated at 4.2 hours average.`, `[COMPLETED] Discovery map generated. Reference spec: DISCO_V1.json.`]
  },
  {
    codeName: 'OPERATION: ARCHITECTURE // SCHEMATIC_LAYOUT',
    checklist: ['Relational PostgreSQL / SQL Database Schema Modeling', 'Custom API Endpoints & Multi-Model Ingestion Maps', 'High-Contrast Figma Design Wireframe Prototyping'],
    logs: [`[ARCH] Modelling unified relational databases...`, `[ARCH] Configuring secure API routing: WhatsApp Inbound ➔ AI.`, `[ARCH] High-fidelity Figma screen layouts approved.`, `[COMPLETED] Operations core blueprint locked. Ready for sprint.`]
  },
  {
    codeName: 'OPERATION: BUILD_CYCLE // SPRINT_ENGINE',
    checklist: ['Next.js High-Performance Frontend & Backend Engineering', 'API Middleware, Webhook Interceptors & Pipeline Wiring', 'Bi-Weekly Staging Handovers & Client Feedback Gates'],
    logs: [`[BUILD] Starting Sprint 01: building Next.js secure auth routers.`, `[BUILD] Injecting mock relational seed records (10,000 entities).`, `[TEST] Checksum tests: PASS. Latency checks: 12.8ms.`, `[COMPLETED] Sprint 01 bundle deployed successfully to staging.`]
  },
  {
    codeName: 'OPERATION: DEPLOYMENT // PROD_NODE_SCALE',
    checklist: ['Global Serverless Deployment to Vercel High-Speed Edge CDN', 'Client Onboarding Portals & Administration Passkeys Handover', '24/7 Priority Support SLA & Real-Time Telemetry Monitors'],
    logs: [`[LAUNCH] Initializing production deploy to global edge CDN...`, `[LAUNCH] SSL certs verified: secure. Key chains locked.`, `[SCALE] Running load stress simulation: 50,000 requests/sec.`, `[COMPLETED] Launch finalized: Artifx Core systems operational.`]
  }
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const combinedSteps = processSteps.map((step, idx) => ({
    ...step,
    ...extraProcessDetails[idx]
  }));

  const activeStepDetails = combinedSteps[activeStep];

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
              [ METHODOLOGY BLUEPRINT // PROCESS ]
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-[0.95] uppercase">
            How We <br />
            <span className="text-red-600 underline decoration-4 underline-offset-4">
              Engineer Systems.
            </span>
          </h2>

          <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-mono">
            A proven methodology that takes your project from concept to launch with clarity and precision.
          </p>
        </div>

        {/* PIPELINE COCKPIT */}
        <div className="border-2 border-black bg-white shadow-[6px_6px_0_#0A0A0A] relative overflow-hidden">

          {/* Dot grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-size-[24px_24px] opacity-30 pointer-events-none" />

          {/* TOP: Progress Pipeline */}
          <div className="relative border-b-2 border-black z-10 w-full overflow-x-auto">
            <div className="flex items-start min-w-160 md:min-w-0 px-8 py-6">
              {combinedSteps.map((step, idx) => {
                const isActive = idx === activeStep;
                const isPast = idx < activeStep;
                return (
                  <Fragment key={step.number}>
                    <button
                      onClick={() => { setActiveStep(idx); setIsAutoplay(false); }}
                      className={`flex flex-col items-center gap-3 relative z-10 focus:outline-none transition-all duration-150 shrink-0 ${isActive ? '' : 'opacity-50 hover:opacity-80'}`}
                    >
                      <div className={`w-10 h-10 border-2 border-black flex items-center justify-center font-mono text-xs font-black transition-all duration-150 relative overflow-hidden ${
                        isActive ? 'bg-[#FFE500] text-black shadow-[3px_3px_0_#0A0A0A]' : isPast ? 'bg-black text-white' : 'bg-white text-black'
                      }`}>
                        {step.number}
                        {isActive && isAutoplay && (
                          <motion.div
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 6, ease: 'linear' }}
                            className="absolute bottom-0 left-0 h-0.75 bg-black"
                          />
                        )}
                      </div>
                      <span className={`text-[10px] font-mono font-black uppercase tracking-wider ${isActive ? 'text-black' : 'text-gray-400'}`}>
                        {step.title}
                      </span>
                    </button>
                    {idx < combinedSteps.length - 1 && (
                      <div className="flex-1 mt-5 h-0.5 bg-black mx-3" />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* BOTTOM: Details & Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

            {/* Left: Specs & Terminal */}
            <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between space-y-6 border-r-2 border-black">

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-[#FFE500] text-black font-mono text-[8px] font-black border-2 border-black uppercase shadow-[2px_2px_0_#0A0A0A]">
                    {activeStepDetails.codeName}
                  </span>
                  <button
                    onClick={() => setIsAutoplay(!isAutoplay)}
                    className="flex items-center gap-1.5 px-3 py-1 border-2 border-black bg-white text-black font-mono text-[8px] font-black tracking-widest uppercase transition-colors hover:bg-black hover:text-white shadow-[2px_2px_0_#0A0A0A] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  >
                    {isAutoplay ? (
                      <><Pause className="w-2.5 h-2.5 text-red-500" />Autoplay: ON</>
                    ) : (
                      <><Play className="w-2.5 h-2.5 text-green-500" />Autoplay: OFF</>
                    )}
                  </button>
                </div>

                <h4 className="text-xl md:text-2xl font-black uppercase text-black tracking-tight">
                  {activeStepDetails.title}
                </h4>
                <p className="text-xs text-gray-600 font-mono leading-relaxed mt-2 max-w-xl">
                  {activeStepDetails.description}
                </p>
              </div>

              {/* Checklist */}
              <div className="space-y-2 border-t-2 border-black pt-4">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest block mb-2 font-bold">Technical Deliverables Checklist</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeStepDetails.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-[11px] text-gray-700">
                      <div className="w-3.5 h-3.5 bg-red-600 border border-black shrink-0 mt-0.5 flex items-center justify-center">
                        <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="font-mono leading-normal">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal log */}
              <div className="bg-black border-2 border-black p-3.5 font-mono text-[9px] text-green-400 flex gap-2.5 items-start h-28 relative overflow-hidden shadow-[3px_3px_0_#DC2626]">
                <div className="absolute top-2 right-3 text-[7px] text-gray-600 uppercase tracking-wider font-bold select-none">Engine Console</div>
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
                      {activeStepDetails.logs.map((log, i) => (
                        <div key={i} className="flex items-start gap-1 leading-relaxed">
                          <span className="text-red-500 font-black">&gt;</span>
                          <span className={log.includes('[COMPLETED]') || log.includes('[INIT]') || log.includes('[TEST]') ? 'text-[#FFE500] font-black' : 'text-green-400'}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>

            {/* Right: CAD Simulator */}
            <div className="lg:col-span-5 p-6 md:p-8 flex flex-col items-center justify-center">
              <div className="w-full border-2 border-black bg-[#FAFAF8] p-4 flex flex-col items-center justify-center relative overflow-hidden min-h-56 shadow-[4px_4px_0_#0A0A0A]">
                <div className="absolute top-2.5 left-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-red-500 border border-black animate-pulse" />
                  <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                    SYS_SIMULATOR // PHASE_0{activeStep + 1}
                  </span>
                </div>
                <div className="absolute top-2 right-3 text-[6px] font-mono text-gray-400 font-bold">RENDER: ACTIVE</div>

                <div className="w-full h-full flex items-center justify-center py-4 bg-white border-2 border-black mt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      {activeStep === 0 && <DiscoverySVG />}
                      {activeStep === 1 && <ArchitectureSVG />}
                      {activeStep === 2 && <BuildIterateSVG />}
                      {activeStep === 3 && <LaunchScaleSVG />}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="w-full border-t-2 border-black pt-2 mt-2 flex justify-between items-center text-[7px] font-mono text-gray-500 uppercase font-bold">
                  <span>SIMULATION: STAGE_0{activeStep + 1}</span>
                  <span className="text-red-500 animate-pulse">● STREAMING</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}
